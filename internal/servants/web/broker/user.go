// Copyright 2022 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package broker

import (
	"fmt"
	"regexp"
	"strings"
	"time"
	"unicode/utf8"

	"github.com/gin-gonic/gin"
	"github.com/gofrs/uuid"
	"github.com/rocboss/paopao-ce/internal/conf"
	"github.com/rocboss/paopao-ce/internal/core"
	"github.com/rocboss/paopao-ce/pkg/convert"
	"github.com/rocboss/paopao-ce/pkg/errcode"
	"github.com/rocboss/paopao-ce/pkg/util"
	"github.com/sirupsen/logrus"
)

const _MaxCaptchaTimes = 2

type PhoneCaptchaReq struct {
	Phone        string `json:"phone" form:"phone" binding:"required"`
	ImgCaptcha   string `json:"img_captcha" form:"img_captcha" binding:"required"`
	ImgCaptchaID string `json:"img_captcha_id" form:"img_captcha_id" binding:"required"`
}

type UserPhoneBindReq struct {
	Phone   string `json:"phone" form:"phone" binding:"required"`
	Captcha string `json:"captcha" form:"captcha" binding:"required"`
}

type AuthRequest struct {
	Username string `json:"username" form:"username" binding:"required"`
	Password string `json:"password" form:"password" binding:"required"`
}

type RegisterRequest struct {
	Username string `json:"username" form:"username" binding:"required"`
	Password string `json:"password" form:"password" binding:"required"`
}

type ChangePasswordReq struct {
	Password    string `json:"password" form:"password" binding:"required"`
	OldPassword string `json:"old_password" form:"old_password" binding:"required"`
}

type ChangeNicknameReq struct {
	Nickname string `json:"nickname" form:"nickname" binding:"required"`
}

type ChangeAvatarReq struct {
	Avatar string `json:"avatar" form:"avatar" binding:"required"`
}

type ChangeUserStatusReq struct {
	ID     int64 `json:"id" form:"id" binding:"required"`
	Status int   `json:"status" form:"status" binding:"required"`
}

type RequestingFriendReq struct {
	UserId    int64  `json:"user_id" binding:"required"`
	Greetings string `json:"greetings" binding:"required"`
}

type AddFriendReq struct {
	UserId int64 `json:"user_id" binding:"required"`
}

type RejectFriendReq struct {
	UserId int64 `json:"user_id" binding:"required"`
}

type DeleteFriendReq struct {
	UserId int64 `json:"user_id"`
}

type UserProfileResp struct {
	ID       int64  `json:"id"`
	Nickname string `json:"nickname"`
	Username string `json:"username"`
	Status   int    `json:"status"`
	Avatar   string `json:"avatar"`
	IsAdmin  bool   `json:"is_admin"`
	IsFriend bool   `json:"is_friend"`
}

const (
	_LoginErrKey      = "PaoPaoUserLoginErr"
	_MaxLoginErrTimes = 10
)

// DoLogin ????????????
func DoLogin(ctx *gin.Context, param *AuthRequest) (*core.User, error) {
	user, err := ds.GetUserByUsername(param.Username)
	if err != nil {
		return nil, errcode.UnauthorizedAuthNotExist
	}

	if user.Model != nil && user.ID > 0 {
		if errTimes, err := conf.Redis.Get(ctx, fmt.Sprintf("%s:%d", _LoginErrKey, user.ID)).Result(); err == nil {
			if convert.StrTo(errTimes).MustInt() >= _MaxLoginErrTimes {
				return nil, errcode.TooManyLoginError
			}
		}

		// ????????????????????????
		if ValidPassword(user.Password, param.Password, user.Salt) {

			if user.Status == core.UserStatusClosed {
				return nil, errcode.UserHasBeenBanned
			}

			// ??????????????????
			conf.Redis.Del(ctx, fmt.Sprintf("%s:%d", _LoginErrKey, user.ID))
			return user, nil
		}

		// ??????????????????
		_, err = conf.Redis.Incr(ctx, fmt.Sprintf("%s:%d", _LoginErrKey, user.ID)).Result()
		if err == nil {
			conf.Redis.Expire(ctx, fmt.Sprintf("%s:%d", _LoginErrKey, user.ID), time.Hour).Result()
		}

		return nil, errcode.UnauthorizedAuthFailed
	}

	return nil, errcode.UnauthorizedAuthNotExist
}

// ValidPassword ????????????????????????
func ValidPassword(dbPassword, password, salt string) bool {
	return strings.Compare(dbPassword, util.EncodeMD5(util.EncodeMD5(password)+salt)) == 0
}

// CheckStatus ??????????????????
func CheckStatus(user *core.User) bool {
	return user.Status == core.UserStatusNormal
}

// ValidUsername ????????????
func ValidUsername(username string) error {
	// ????????????????????????
	if utf8.RuneCountInString(username) < 3 || utf8.RuneCountInString(username) > 12 {
		return errcode.UsernameLengthLimit
	}

	if !regexp.MustCompile(`^[a-zA-Z0-9]+$`).MatchString(username) {
		return errcode.UsernameCharLimit
	}

	// ????????????
	user, _ := ds.GetUserByUsername(username)

	if user.Model != nil && user.ID > 0 {
		return errcode.UsernameHasExisted
	}

	return nil
}

// CheckPassword ????????????
func CheckPassword(password string) error {
	// ????????????????????????
	if utf8.RuneCountInString(password) < 6 || utf8.RuneCountInString(password) > 16 {
		return errcode.PasswordLengthLimit
	}

	return nil
}

// CheckPhoneCaptcha ?????????????????????
func CheckPhoneCaptcha(phone, captcha string) *errcode.Error {
	// ????????????phone verify ??????????????????????????????
	if DisablePhoneVerify {
		return nil
	}

	c, err := ds.GetLatestPhoneCaptcha(phone)
	if err != nil {
		return errcode.ErrorPhoneCaptcha
	}

	if c.Captcha != captcha {
		return errcode.ErrorPhoneCaptcha
	}

	if c.ExpiredOn < time.Now().Unix() {
		return errcode.ErrorPhoneCaptcha
	}

	if c.UseTimes >= _MaxCaptchaTimes {
		return errcode.MaxPhoneCaptchaUseTimes
	}

	// ??????????????????
	ds.UsePhoneCaptcha(c)

	return nil
}

// CheckPhoneExist ???????????????????????????
func CheckPhoneExist(uid int64, phone string) bool {
	u, err := ds.GetUserByPhone(phone)
	if err != nil {
		return false
	}

	if u.Model == nil || u.ID == 0 {
		return false
	}

	if u.ID == uid {
		return false
	}

	return true
}

// EncryptPasswordAndSalt ????????????&??????salt
func EncryptPasswordAndSalt(password string) (string, string) {
	salt := uuid.Must(uuid.NewV4()).String()[:8]
	password = util.EncodeMD5(util.EncodeMD5(password) + salt)

	return password, salt
}

// Register ????????????
func Register(username, password string) (*core.User, error) {
	password, salt := EncryptPasswordAndSalt(password)

	user := &core.User{
		Nickname: username,
		Username: username,
		Password: password,
		Avatar:   GetRandomAvatar(),
		Salt:     salt,
		Status:   core.UserStatusNormal,
	}

	user, err := ds.CreateUser(user)
	if err != nil {
		return nil, err
	}

	return user, nil
}

func RequestingFriend(user *core.User, param *RequestingFriendReq) error {
	if _, err := ds.GetUserByID(param.UserId); err != nil {
		return errcode.NotExistFriendId
	}
	return ds.RequestingFriend(user.ID, param.UserId, param.Greetings)
}

func AddFriend(user *core.User, param *AddFriendReq) error {
	if _, err := ds.GetUserByID(param.UserId); err != nil {
		return errcode.NotExistFriendId
	}
	return ds.AddFriend(user.ID, param.UserId)
}

func RejectFriend(user *core.User, param *RejectFriendReq) error {
	if _, err := ds.GetUserByID(param.UserId); err != nil {
		return errcode.NotExistFriendId
	}
	return ds.RejectFriend(user.ID, param.UserId)
}

func DeleteFriend(user *core.User, param *DeleteFriendReq) error {
	if _, err := ds.GetUserByID(param.UserId); err != nil {
		return errcode.NotExistFriendId
	}
	return ds.DeleteFriend(user.ID, param.UserId)
}

func GetContacts(user *core.User, offset int, limit int) (*core.ContactList, error) {
	return ds.GetContacts(user.ID, offset, limit)
}

// GetUserInfo ??????????????????
func GetUserInfo(param *AuthRequest) (*core.User, error) {
	user, err := ds.GetUserByUsername(param.Username)

	if err != nil {
		return nil, err
	}

	if user.Model != nil && user.ID > 0 {
		return user, nil
	}

	return nil, errcode.UnauthorizedAuthNotExist
}

func GetUserByID(id int64) (*core.User, error) {
	user, err := ds.GetUserByID(id)

	if err != nil {
		return nil, err
	}

	if user.Model != nil && user.ID > 0 {
		return user, nil
	}

	return nil, errcode.NoExistUsername
}

func GetUserByUsername(user *core.User, username string) (*UserProfileResp, error) {
	other, err := ds.GetUserByUsername(username)
	if err != nil {
		return nil, err
	}

	var resp *UserProfileResp
	if other.Model != nil && other.ID > 0 {
		resp = &UserProfileResp{
			ID:       other.ID,
			Nickname: other.Nickname,
			Username: other.Username,
			Status:   other.Status,
			Avatar:   other.Avatar,
			IsAdmin:  other.IsAdmin,
			IsFriend: !(user == nil || user.ID == other.ID),
		}
	} else {
		return nil, errcode.NoExistUsername
	}

	if user != nil && user.ID != other.ID {
		resp.IsFriend = ds.IsFriend(user.ID, other.ID)
	}
	return resp, nil
}

// UpdateUserInfo ??????????????????
func UpdateUserInfo(user *core.User) *errcode.Error {
	if err := ds.UpdateUser(user); err != nil {
		return errcode.ServerError
	}
	return nil
}

func ChangeUserAvatar(user *core.User, avatar string) (err *errcode.Error) {
	defer func() {
		if err != nil {
			deleteOssObjects([]string{avatar})
		}
	}()

	if err := ds.CheckAttachment(avatar); err != nil {
		return errcode.InvalidParams
	}

	if err := oss.PersistObject(oss.ObjectKey(avatar)); err != nil {
		logrus.Errorf("service.ChangeUserAvatar persist object failed: %s", err)
		return errcode.ServerError
	}

	user.Avatar = avatar
	err = UpdateUserInfo(user)
	return
}

// GetUserCollections ????????????????????????
func GetUserCollections(userID int64, offset, limit int) ([]*core.PostFormated, int64, error) {
	collections, err := ds.GetUserPostCollections(userID, offset, limit)
	if err != nil {
		return nil, 0, err
	}
	totalRows, err := ds.GetUserPostCollectionCount(userID)
	if err != nil {
		return nil, 0, err
	}
	var posts []*core.Post
	for _, collection := range collections {
		posts = append(posts, collection.Post)
	}
	postsFormated, err := ds.MergePosts(posts)
	if err != nil {
		return nil, 0, err
	}

	return postsFormated, totalRows, nil
}

// GetUserStars ????????????????????????
func GetUserStars(userID int64, offset, limit int) ([]*core.PostFormated, int64, error) {
	stars, err := ds.GetUserPostStars(userID, offset, limit)
	if err != nil {
		return nil, 0, err
	}
	totalRows, err := ds.GetUserPostStarCount(userID)
	if err != nil {
		return nil, 0, err
	}

	var posts []*core.Post
	for _, star := range stars {
		posts = append(posts, star.Post)
	}
	postsFormated, err := ds.MergePosts(posts)
	if err != nil {
		return nil, 0, err
	}

	return postsFormated, totalRows, nil
}

// GetUserWalletBills ????????????????????????
func GetUserWalletBills(userID int64, offset, limit int) ([]*core.WalletStatement, int64, error) {
	bills, err := ds.GetUserWalletBills(userID, offset, limit)
	if err != nil {
		return nil, 0, err
	}
	totalRows, err := ds.GetUserWalletBillCount(userID)
	if err != nil {
		return nil, 0, err
	}

	return bills, totalRows, nil
}

// SendPhoneCaptcha ?????????????????????
func SendPhoneCaptcha(ctx *gin.Context, phone string) error {

	err := ds.SendPhoneCaptcha(phone)
	if err != nil {
		return err
	}

	// ??????????????????
	conf.Redis.Incr(ctx, "PaoPaoSmsCaptcha:"+phone).Result()

	currentTime := time.Now()
	endTime := time.Date(currentTime.Year(), currentTime.Month(), currentTime.Day(), 23, 59, 59, 0, currentTime.Location())

	conf.Redis.Expire(ctx, "PaoPaoSmsCaptcha:"+phone, endTime.Sub(currentTime))

	return nil
}

// GetSuggestUsers ?????????????????????????????????
func GetSuggestUsers(keyword string) ([]string, error) {
	users, err := ds.GetUsersByKeyword(keyword)
	if err != nil {
		return nil, err
	}

	usernames := []string{}
	for _, user := range users {
		usernames = append(usernames, user.Username)
	}

	return usernames, nil
}

// GetSuggestTags ?????????????????????????????????
func GetSuggestTags(keyword string) ([]string, error) {
	tags, err := ds.GetTagsByKeyword(keyword)
	if err != nil {
		return nil, err
	}

	ts := []string{}
	for _, t := range tags {
		ts = append(ts, t.Tag)
	}

	return ts, nil
}

func IsFriend(userId, friendId int64) bool {
	return ds.IsFriend(userId, friendId)
}

// checkPermision ?????????????????????????????????
func checkPermision(user *core.User, targetUserId int64) *errcode.Error {
	if user == nil || (user.ID != targetUserId && !user.IsAdmin) {
		return errcode.NoPermission
	}
	return nil
}
