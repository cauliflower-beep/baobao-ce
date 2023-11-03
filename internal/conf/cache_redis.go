// Copyright 2023 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package conf

import (
	"github.com/redis/rueidis"
	"sync"

	"github.com/redis/go-redis/v9"
)

var (
	_redisClient   *redis.Client
	_rueidisClient rueidis.Client
	_onceRedis     sync.Once
)

// MustRedisClient 初始化go-redis客户端
func MustRedisClient() *redis.Client {
	_onceRedis.Do(func() {
		client := redis.NewClient(&redis.Options{
			Addr: redisSetting.InitAddress[0],
			//Username:         redisSetting.Username,
			//Password:         redisSetting.Password,
			//DB:         redisSetting.SelectDB,
			//ConnWriteTimeout: redisSetting.ConnWriteTimeout,
		})
		_redisClient = client
		// 顺便初始化一下CacheKeyPool
		initCacheKeyPool()
	})
	return _redisClient
}

//func MustRueidisClient() rueidis.Client {
//	_onceRedis.Do(func() {
//		client, err := rueidis.NewClient(rueidis.ClientOption{
//			InitAddress:      redisSetting.InitAddress,
//			Username:         redisSetting.Username,
//			Password:         redisSetting.Password,
//			SelectDB:         redisSetting.SelectDB,
//			ConnWriteTimeout: redisSetting.ConnWriteTimeout,
//		})
//		if err != nil {
//			log.Fatalf("create a redis client failed: %s", err)
//		}
//		_redisClient = client
//		// 顺便初始化一下CacheKeyPool
//		initCacheKeyPool()
//	})
//	return _redisClient
//}
