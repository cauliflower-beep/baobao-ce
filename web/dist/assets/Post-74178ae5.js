import{d as Z,r as c,a3 as fe,o,c as u,a as v,V as t,a1 as n,e as x,M as I,Q as z,O as i,_ as a,a2 as H,n as le,a7 as Oe,F as ie,a4 as ue,j as ge,W as Ce,X as xe,s as we,w as De}from"./@vue-e0e89260.js";import{u as se}from"./vuex-473b3783.js";import{f as ce}from"./formatTime-cdf4e6f1.js";import{t as qe,d as Ee,e as Ne,_ as oe,f as je,h as Be,i as He,j as Fe,g as Ve,k as Ye,l as Je,m as Ke,n as Qe,o as We,s as Ge,p as Xe,v as Ze,q as et,r as tt,u as st,w as be}from"./index-2e014601.js";import{Y as re,V as ee}from"./IEnum-a180d93e.js";import{T as Ie,e as _e,f as Te,g as pe,h as ze,I as ot,i as nt,j as at,k as lt,l as it,m as ut,n as ct,o as rt,p as V,F as $e,E as he}from"./@vicons-b553c29f.js";import{j as J,e as ne,J as Pe,K as _t,b as pt,L as dt,o as ye,M as Ue,v as mt,w as vt,x as ht,y as ft,z as gt,B as yt,O as kt,P as wt,i as bt,Q as $t,a as Re,F as Ct,I as xt,k as It,H as Tt,f as zt,g as Pt}from"./naive-ui-62663ad7.js";import{p as ke,_ as Se,a as Ut,b as Rt,c as St}from"./content-a356c23e.js";import{u as Le,b as Lt}from"./vue-router-b8e3382f.js";import{_ as Mt}from"./post-skeleton-435c2090.js";import{l as At}from"./lodash-94eb5868.js";import{a as Ot}from"./copy-to-clipboard-1dd3075d.js";import{_ as Dt}from"./main-nav.vue_vue_type_style_index_0_lang-77010e50.js";import{W as qt}from"./v3-infinite-loading-e5c2e8bf.js";import"./moment-2ab8298d.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-59ca65c3.js";import"./evtd-b614532e.js";import"./@css-render-580d83ec.js";import"./vooks-a50491fd.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./paopao-video-player-aa5e8b3f.js";import"./toggle-selection-93f4ad84.js";const Et={class:"reply-item"},Nt={class:"header-wrap"},jt={class:"username"},Bt={class:"reply-name"},Ht={class:"timestamp"},Ft={class:"base-wrap"},Vt={class:"content"},Yt={class:"reply-switch"},Jt={class:"time-item"},Kt={class:"actions"},Qt={class:"upvote-count"},Wt=["onClick"],Gt={class:"upvote-count"},Xt={key:2,class:"action-item"},Zt=["onClick"],es=Z({__name:"reply-item",props:{tweetId:{},reply:{}},emits:["focusReply","reload"],setup(O,{emit:D}){const l=O,p=se(),f=c(l.reply.is_thumbs_up==re.YES),y=c(l.reply.is_thumbs_down==re.YES),k=c(l.reply.thumbs_up_count),L=()=>{qe({tweet_id:l.tweetId,comment_id:l.reply.comment_id,reply_id:l.reply.id}).then(h=>{f.value=!f.value,f.value?(k.value++,y.value=!1):k.value--}).catch(h=>{console.log(h)})},r=()=>{Ee({tweet_id:l.tweetId,comment_id:l.reply.comment_id,reply_id:l.reply.id}).then(h=>{y.value=!y.value,y.value&&f.value&&(k.value--,f.value=!1)}).catch(h=>{console.log(h)})},U=()=>{D("focusReply",l.reply)},T=()=>{Ne({id:l.reply.id}).then(h=>{window.$message.success("删除成功"),setTimeout(()=>{D("reload")},50)}).catch(h=>{console.log(h)})};return(h,$)=>{const R=fe("router-link"),e=J,_=ne,M=Pe,w=_t;return o(),u("div",Et,[v("div",Nt,[v("div",jt,[t(R,{class:"user-link",to:{name:"user",query:{username:l.reply.user.username}}},{default:n(()=>[x(I(l.reply.user.username),1)]),_:1},8,["to"]),v("span",Bt,I(l.reply.at_user_id>0?"回复":":"),1),l.reply.at_user_id>0?(o(),z(R,{key:0,class:"user-link",to:{name:"user",query:{username:l.reply.at_user.username}}},{default:n(()=>[x(I(l.reply.at_user.username),1)]),_:1},8,["to"])):i("",!0)]),v("div",Ht,[x(I(l.reply.ip_loc)+" ",1),a(p).state.userInfo.is_admin||a(p).state.userInfo.id===l.reply.user.id?(o(),z(M,{key:0,"negative-text":"取消","positive-text":"确认",onPositiveClick:T},{trigger:n(()=>[t(_,{quaternary:"",circle:"",size:"tiny",class:"del-btn"},{icon:n(()=>[t(e,null,{default:n(()=>[t(a(Ie))]),_:1})]),_:1})]),default:n(()=>[x(" 是否确认删除？ ")]),_:1})):i("",!0)])]),v("div",Ft,[v("div",Vt,[t(w,{"expand-trigger":"click","line-clamp":"5",tooltip:!1},{default:n(()=>[x(I(l.reply.content),1)]),_:1})]),v("div",Yt,[v("span",Jt,I(a(ce)(l.reply.created_on)),1),v("div",Kt,[a(p).state.userLogined?i("",!0):(o(),u("div",{key:0,class:"action-item",onClick:$[0]||($[0]=H(()=>{},["stop"]))},[t(e,{size:"medium"},{default:n(()=>[t(a(_e))]),_:1}),v("span",Qt,I(k.value),1)])),a(p).state.userLogined?(o(),u("div",{key:1,class:"action-item hover",onClick:H(L,["stop"])},[t(e,{size:"medium"},{default:n(()=>[f.value?i("",!0):(o(),z(a(_e),{key:0})),f.value?(o(),z(a(Te),{key:1,class:"show"})):i("",!0)]),_:1}),v("span",Gt,I(k.value>0?k.value:"赞"),1)],8,Wt)):i("",!0),a(p).state.userLogined?i("",!0):(o(),u("div",Xt,[t(e,{size:"medium"},{default:n(()=>[t(a(pe))]),_:1})])),a(p).state.userLogined?(o(),u("div",{key:3,class:"action-item hover",onClick:H(r,["stop"])},[t(e,{size:"medium"},{default:n(()=>[y.value?i("",!0):(o(),z(a(pe),{key:0})),y.value?(o(),z(a(ze),{key:1,class:"show"})):i("",!0)]),_:1})],8,Zt)):i("",!0),a(p).state.userLogined?(o(),u("span",{key:4,class:"show opacity-item reply-btn",onClick:U}," 回复 ")):i("",!0)])])])])}}});const ts=oe(es,[["__scopeId","data-v-0fa8b923"]]),ss={class:"reply-compose-wrap"},os={class:"reply-switch"},ns={class:"time-item"},as={class:"actions"},ls={key:0,class:"action-item"},is={class:"upvote-count"},us=["onClick"],cs={class:"upvote-count"},rs={key:2,class:"action-item"},_s=["onClick"],ps={key:0,class:"reply-input-wrap"},ds=Z({__name:"compose-reply",props:{comment:{},atUserid:{default:0},atUsername:{default:""}},emits:["reload","reset"],setup(O,{expose:D,emit:l}){const p=O,f=se(),y=c(),k=c(!1),L=c(""),r=c(!1),U=+"300",T=c(p.comment.is_thumbs_up==re.YES),h=c(p.comment.is_thumbs_down==re.YES),$=c(p.comment.thumbs_up_count),R=()=>{je({tweet_id:p.comment.post_id,comment_id:p.comment.id}).then(w=>{T.value=!T.value,T.value?($.value++,h.value=!1):$.value--}).catch(w=>{console.log(w)})},e=()=>{Be({tweet_id:p.comment.post_id,comment_id:p.comment.id}).then(w=>{h.value=!h.value,h.value&&T.value&&($.value--,T.value=!1)}).catch(w=>{console.log(w)})},_=w=>{k.value=w,w?setTimeout(()=>{var A;(A=y.value)==null||A.focus()},10):(r.value=!1,L.value="",l("reset"))},M=()=>{r.value=!0,He({comment_id:p.comment.id,at_user_id:p.atUserid,content:L.value}).then(w=>{_(!1),window.$message.success("评论成功"),l("reload")}).catch(w=>{r.value=!1})};return D({switchReply:_}),(w,A)=>{const j=J,B=pt,Y=ne,P=dt;return o(),u("div",ss,[v("div",os,[v("span",ns,I(a(ce)(w.comment.created_on)),1),v("div",as,[a(f).state.userLogined?i("",!0):(o(),u("div",ls,[t(j,{size:"medium"},{default:n(()=>[t(a(_e))]),_:1}),v("span",is,I($.value),1)])),a(f).state.userLogined?(o(),u("div",{key:1,class:"action-item hover",onClick:H(R,["stop"])},[t(j,{size:"medium"},{default:n(()=>[T.value?i("",!0):(o(),z(a(_e),{key:0})),T.value?(o(),z(a(Te),{key:1,class:"show"})):i("",!0)]),_:1}),v("span",cs,I($.value>0?$.value:"赞"),1)],8,us)):i("",!0),a(f).state.userLogined?i("",!0):(o(),u("div",rs,[t(j,{size:"medium"},{default:n(()=>[t(a(pe))]),_:1})])),a(f).state.userLogined?(o(),u("div",{key:3,class:"action-item hover",onClick:H(e,["stop"])},[t(j,{size:"medium"},{default:n(()=>[h.value?i("",!0):(o(),z(a(pe),{key:0})),h.value?(o(),z(a(ze),{key:1,class:"show"})):i("",!0)]),_:1})],8,_s)):i("",!0),a(f).state.userLogined&&!k.value?(o(),u("span",{key:4,class:"show reply-btn",onClick:A[0]||(A[0]=S=>_(!0))}," 回复 ")):i("",!0),a(f).state.userLogined&&k.value?(o(),u("span",{key:5,class:"hide reply-btn",onClick:A[1]||(A[1]=S=>_(!1))}," 取消 ")):i("",!0)])]),k.value?(o(),u("div",ps,[t(P,null,{default:n(()=>[t(B,{ref_key:"inputInstRef",ref:y,size:"small",placeholder:p.atUsername?"@"+p.atUsername:"请输入回复内容..",maxlength:a(U),value:L.value,"onUpdate:value":A[2]||(A[2]=S=>L.value=S),"show-count":"",clearable:""},null,8,["placeholder","maxlength","value"]),t(Y,{type:"primary",size:"small",ghost:"",loading:r.value,onClick:M},{default:n(()=>[x(" 回复 ")]),_:1},8,["loading"])]),_:1})])):i("",!0)])}}});const ms=oe(ds,[["__scopeId","data-v-f9af7a93"]]),vs={class:"comment-item"},hs={class:"nickname-wrap"},fs={class:"username-wrap"},gs={class:"opt-wrap"},ys={class:"timestamp"},ks=["innerHTML"],ws={class:"reply-wrap"},bs=Z({__name:"comment-item",props:{comment:{}},emits:["reload"],setup(O,{emit:D}){const l=O,p=se(),f=Le(),y=c(0),k=c(""),L=c(),r=le(()=>{let e=Object.assign({texts:[],imgs:[]},l.comment);return e.contents.map(_=>{(+_.type==1||+_.type==2)&&e.texts.push(_),+_.type==3&&e.imgs.push(_)}),e}),U=(e,_)=>{let M=e.target;if(M.dataset.detail){const w=M.dataset.detail.split(":");w.length===2&&(p.commit("refresh"),w[0]==="tag"?window.$message.warning("评论内的无效话题"):f.push({name:"user",query:{username:w[1]}}))}},T=e=>{var _,M;y.value=e.user_id,k.value=((_=e.user)==null?void 0:_.username)||"",(M=L.value)==null||M.switchReply(!0)},h=()=>{D("reload")},$=()=>{y.value=0,k.value=""},R=()=>{Fe({id:r.value.id}).then(e=>{window.$message.success("删除成功"),setTimeout(()=>{h()},50)}).catch(e=>{})};return(e,_)=>{const M=ye,w=fe("router-link"),A=J,j=ne,B=Pe,Y=Se,P=ms,S=ts,Q=Ue;return o(),u("div",vs,[t(Q,{"content-indented":""},Oe({avatar:n(()=>[t(M,{round:"",size:30,src:r.value.user.avatar},null,8,["src"])]),header:n(()=>[v("span",hs,[t(w,{onClick:_[0]||(_[0]=H(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:r.value.user.username}}},{default:n(()=>[x(I(r.value.user.nickname),1)]),_:1},8,["to"])]),v("span",fs," @"+I(r.value.user.username),1)]),"header-extra":n(()=>[v("div",gs,[v("span",ys,I(r.value.ip_loc),1),a(p).state.userInfo.is_admin||a(p).state.userInfo.id===r.value.user.id?(o(),z(B,{key:0,"negative-text":"取消","positive-text":"确认",onPositiveClick:R},{trigger:n(()=>[t(j,{quaternary:"",circle:"",size:"tiny",class:"del-btn"},{icon:n(()=>[t(A,null,{default:n(()=>[t(a(Ie))]),_:1})]),_:1})]),default:n(()=>[x(" 是否确认删除？ ")]),_:1})):i("",!0)])]),footer:n(()=>[r.value.imgs.length>0?(o(),z(Y,{key:0,imgs:r.value.imgs},null,8,["imgs"])):i("",!0),t(P,{ref_key:"replyComposeRef",ref:L,comment:r.value,"at-userid":y.value,"at-username":k.value,onReload:h,onReset:$},null,8,["comment","at-userid","at-username"]),v("div",ws,[(o(!0),u(ie,null,ue(r.value.replies,F=>(o(),z(S,{key:F.id,reply:F,"tweet-id":r.value.post_id,onFocusReply:T,onReload:h},null,8,["reply","tweet-id"]))),128))])]),_:2},[r.value.texts.length>0?{name:"description",fn:n(()=>[(o(!0),u(ie,null,ue(r.value.texts,F=>(o(),u("span",{key:F.id,class:"comment-text",onClick:_[1]||(_[1]=H(K=>U(K,r.value.id),["stop"])),innerHTML:a(ke)(F.content).content},null,8,ks))),128))]),key:"0"}:void 0]),1024)])}}});const $s=oe(bs,[["__scopeId","data-v-e5cb084f"]]),Cs=O=>(Ce("data-v-634e6bfd"),O=O(),xe(),O),xs={key:0,class:"compose-wrap"},Is={class:"compose-line"},Ts={class:"compose-user"},zs={class:"compose-line compose-options"},Ps={class:"attachment"},Us={class:"submit-wrap"},Rs={class:"attachment-list-wrap"},Ss={key:1,class:"compose-wrap"},Ls=Cs(()=>v("div",{class:"login-wrap"},[v("span",{class:"login-banner"}," 登录后，精彩更多")],-1)),Ms={key:0,class:"login-only-wrap"},As={key:1,class:"login-wrap"},Os=Z({__name:"compose-comment",props:{lock:{default:0},postId:{default:0}},emits:["post-success"],setup(O,{emit:D}){const l=O,p=se(),f=c([]),y=c(!1),k=c(!1),L=c(!1),r=c(""),U=c(),T=c("public/image"),h=c([]),$=c([]),R=c("true".toLowerCase()==="true"),e=+"300",_="/v1/attachment",M=c(),w=At.debounce(m=>{Ve({k:m}).then(g=>{let b=[];g.suggest.map(C=>{b.push({label:C,value:C})}),f.value=b,k.value=!1}).catch(g=>{k.value=!1})},200),A=(m,g)=>{k.value||(k.value=!0,g==="@"&&w(m))},j=m=>{m.length>e?r.value=m.substring(0,e):r.value=m},B=m=>{T.value=m},Y=m=>{for(let E=0;E<m.length;E++){var g=m[E].name,b=g.split(".").slice(0,-1).join("."),C=g.split(".").pop();b.length>30&&(m[E].name=b.substring(0,18)+"..."+b.substring(b.length-9)+"."+C)}h.value=m},P=async m=>{var g,b;return T.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((g=m.file.file)==null?void 0:g.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):T.value==="image"&&((b=m.file.file)==null?void 0:b.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):!0},S=({file:m,event:g})=>{var b;try{let C=JSON.parse((b=g.target)==null?void 0:b.response);C.code===0&&T.value==="public/image"&&$.value.push({id:m.id,content:C.data.content})}catch{window.$message.error("上传失败")}},Q=({file:m,event:g})=>{var b;try{let C=JSON.parse((b=g.target)==null?void 0:b.response);if(C.code!==0){let E=C.msg||"上传失败";C.details&&C.details.length>0&&C.details.map(q=>{E+=":"+q}),window.$message.error(E)}}catch{window.$message.error("上传失败")}},F=({file:m})=>{let g=$.value.findIndex(b=>b.id===m.id);g>-1&&$.value.splice(g,1)},K=()=>{y.value=!0},G=()=>{var m;y.value=!1,(m=U.value)==null||m.clear(),h.value=[],r.value="",$.value=[]},s=()=>{if(r.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{users:m}=ke(r.value);const g=[];let b=100;g.push({content:r.value,type:2,sort:b}),$.value.map(C=>{b++,g.push({content:C.content,type:3,sort:b})}),L.value=!0,Ye({contents:g,post_id:l.postId,users:Array.from(new Set(m))}).then(C=>{window.$message.success("发布成功"),L.value=!1,D("post-success"),G()}).catch(C=>{L.value=!1})},d=m=>{p.commit("triggerAuth",!0),p.commit("triggerAuthKey",m)};return ge(()=>{M.value="Bearer "+localStorage.getItem("PAOPAO_TOKEN")}),(m,g)=>{const b=ye,C=mt,E=J,q=ne,W=vt,de=ht,me=ft,ve=gt,ae=yt;return o(),u("div",null,[a(p).state.userInfo.id>0?(o(),u("div",xs,[v("div",Is,[v("div",Ts,[t(b,{round:"",size:30,src:a(p).state.userInfo.avatar},null,8,["src"])]),t(C,{type:"textarea",size:"large",autosize:"",bordered:!1,options:f.value,prefix:["@"],loading:k.value,value:r.value,disabled:l.lock===1,"onUpdate:value":j,onSearch:A,onFocus:K,placeholder:l.lock===1?"泡泡已被锁定，回复功能已关闭":"快来评论两句吧..."},null,8,["options","loading","value","disabled","placeholder"])]),y.value?(o(),z(ae,{key:0,ref_key:"uploadRef",ref:U,abstract:"","list-type":"image",multiple:!0,max:9,action:_,headers:{Authorization:M.value},data:{type:T.value},"file-list":h.value,onBeforeUpload:P,onFinish:S,onError:Q,onRemove:F,"onUpdate:fileList":Y},{default:n(()=>[v("div",zs,[v("div",Ps,[t(W,{abstract:""},{default:n(({handleClick:X})=>[t(q,{disabled:h.value.length>0&&T.value==="public/video"||h.value.length===9,onClick:()=>{B("public/image"),X()},quaternary:"",circle:"",type:"primary"},{icon:n(()=>[t(E,{size:"20",color:"var(--primary-color)"},{default:n(()=>[t(a(ot))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),t(me,{trigger:"hover",placement:"bottom"},{trigger:n(()=>[t(de,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:r.value.length/a(e)*100},null,8,["percentage"])]),default:n(()=>[x(" "+I(r.value.length)+" / "+I(a(e)),1)]),_:1})]),v("div",Us,[t(q,{quaternary:"",round:"",type:"tertiary",class:"cancel-btn",size:"small",onClick:G},{default:n(()=>[x(" 取消 ")]),_:1}),t(q,{loading:L.value,onClick:s,type:"primary",secondary:"",size:"small",round:""},{default:n(()=>[x(" 发布 ")]),_:1},8,["loading"])])]),v("div",Rs,[t(ve)])]),_:1},8,["headers","data","file-list"])):i("",!0)])):(o(),u("div",Ss,[Ls,R.value?i("",!0):(o(),u("div",Ms,[t(q,{strong:"",secondary:"",round:"",type:"primary",onClick:g[0]||(g[0]=X=>d("signin"))},{default:n(()=>[x(" 登录 ")]),_:1})])),R.value?(o(),u("div",As,[t(q,{strong:"",secondary:"",round:"",type:"primary",onClick:g[1]||(g[1]=X=>d("signin"))},{default:n(()=>[x(" 登录 ")]),_:1}),t(q,{strong:"",secondary:"",round:"",type:"info",onClick:g[2]||(g[2]=X=>d("signup"))},{default:n(()=>[x(" 注册 ")]),_:1})])):i("",!0)]))])}}});const Ds=oe(Os,[["__scopeId","data-v-634e6bfd"]]),qs={class:"username-wrap"},Es={key:0,class:"options"},Ns={key:0},js=["innerHTML"],Bs={class:"timestamp"},Hs={key:0},Fs={key:1},Vs={class:"opts-wrap"},Ys=["onClick"],Js={class:"opt-item"},Ks=["onClick"],Qs=["onClick"],Ws=Z({__name:"post-detail",props:{post:{}},emits:["reload"],setup(O,{emit:D}){const l=O,p=se(),f=Le(),y=c(!1),k=c(!1),L=c(!1),r=c(!1),U=c(!1),T=c(!1),h=c(!1),$=c(!1),R=c(ee.PUBLIC),e=le({get:()=>{let s=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},l.post);return s.contents.map(d=>{(+d.type==1||+d.type==2)&&s.texts.push(d),+d.type==3&&s.imgs.push(d),+d.type==4&&s.videos.push(d),+d.type==6&&s.links.push(d),+d.type==7&&s.attachments.push(d),+d.type==8&&s.charge_attachments.push(d)}),s},set:s=>{l.post.upvote_count=s.upvote_count,l.post.comment_count=s.comment_count,l.post.collection_count=s.collection_count}}),_=s=>()=>we(J,null,{default:()=>we(s)}),M=le(()=>{let s=[{label:"删除",key:"delete",icon:_(V)}];return e.value.is_lock===0?s.push({label:"锁定",key:"lock",icon:_(V)}):s.push({label:"解锁",key:"unlock",icon:_(V)}),p.state.userInfo.is_admin&&(e.value.is_top===0?s.push({label:"置顶",key:"stick",icon:_(V)}):s.push({label:"取消置顶",key:"unstick",icon:_(V)})),e.value.is_essence===0?s.push({label:"设为亮点",key:"highlight",icon:_($e)}):s.push({label:"取消亮点",key:"unhighlight",icon:_($e)}),e.value.visibility===ee.PUBLIC?s.push({label:"公开",key:"vpublic",icon:_(he),children:[{label:"私密",key:"vprivate",icon:_(V)},{label:"好友可见",key:"vfriend",icon:_(V)}]}):e.value.visibility===ee.PRIVATE?s.push({label:"私密",key:"vprivate",icon:_(he),children:[{label:"公开",key:"vpublic",icon:_(V)},{label:"好友可见",key:"vfriend",icon:_(V)}]}):s.push({label:"好友可见",key:"vfriend",icon:_(he),children:[{label:"公开",key:"vpublic",icon:_(V)},{label:"私密",key:"vprivate",icon:_(V)}]}),s}),w=s=>{f.push({name:"post",query:{id:s}})},A=(s,d)=>{if(s.target.dataset.detail){const m=s.target.dataset.detail.split(":");if(m.length===2){p.commit("refresh"),m[0]==="tag"?f.push({name:"home",query:{q:m[1],t:"tag"}}):f.push({name:"user",query:{username:m[1]}});return}}w(d)},j=s=>{switch(s){case"delete":L.value=!0;break;case"lock":case"unlock":r.value=!0;break;case"stick":case"unstick":U.value=!0;break;case"highlight":case"unhighlight":T.value=!0;break;case"vpublic":R.value=0,h.value=!0;break;case"vprivate":R.value=1,h.value=!0;break;case"vfriend":R.value=2,h.value=!0;break}},B=()=>{Qe({id:e.value.id}).then(s=>{window.$message.success("删除成功"),f.replace("/"),setTimeout(()=>{p.commit("refresh")},50)}).catch(s=>{$.value=!1})},Y=()=>{We({id:e.value.id}).then(s=>{D("reload"),s.lock_status===1?window.$message.success("锁定成功"):window.$message.success("解锁成功")}).catch(s=>{$.value=!1})},P=()=>{Ge({id:e.value.id}).then(s=>{D("reload"),s.top_status===1?window.$message.success("置顶成功"):window.$message.success("取消置顶成功")}).catch(s=>{$.value=!1})},S=()=>{Xe({id:e.value.id}).then(s=>{D("reload"),s.highlight_status===1?window.$message.success("设为亮点成功"):window.$message.success("取消亮点成功")}).catch(s=>{$.value=!1})},Q=()=>{Ze({id:e.value.id,visibility:R.value}).then(s=>{D("reload"),window.$message.success("修改可见性成功")}).catch(s=>{$.value=!1})},F=()=>{et({id:e.value.id}).then(s=>{y.value=s.status,s.status?e.value={...e.value,upvote_count:e.value.upvote_count+1}:e.value={...e.value,upvote_count:e.value.upvote_count-1}}).catch(s=>{console.log(s)})},K=()=>{tt({id:e.value.id}).then(s=>{k.value=s.status,s.status?e.value={...e.value,collection_count:e.value.collection_count+1}:e.value={...e.value,collection_count:e.value.collection_count-1}}).catch(s=>{console.log(s)})},G=()=>{Ot(`${window.location.origin}/#/post?id=${e.value.id}`),window.$message.success("链接已复制到剪贴板")};return ge(()=>{p.state.userInfo.id>0&&(Je({id:e.value.id}).then(s=>{y.value=s.status}).catch(s=>{console.log(s)}),Ke({id:e.value.id}).then(s=>{k.value=s.status}).catch(s=>{console.log(s)}))}),(s,d)=>{const m=ye,g=fe("router-link"),b=kt,C=ne,E=wt,q=bt,W=Ut,de=Se,me=Rt,ve=St,ae=$t,X=Re,Me=Ue;return o(),u("div",{class:"detail-item",onClick:d[7]||(d[7]=N=>w(e.value.id))},[t(Me,null,{avatar:n(()=>[t(m,{round:"",size:30,src:e.value.user.avatar},null,8,["src"])]),header:n(()=>[t(g,{onClick:d[0]||(d[0]=H(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:e.value.user.username}}},{default:n(()=>[x(I(e.value.user.nickname),1)]),_:1},8,["to"]),v("span",qs," @"+I(e.value.user.username),1),e.value.is_top?(o(),z(b,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:n(()=>[x(" 置顶 ")]),_:1})):i("",!0),e.value.visibility==a(ee).PRIVATE?(o(),z(b,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:n(()=>[x(" 私密 ")]),_:1})):i("",!0),e.value.visibility==a(ee).FRIEND?(o(),z(b,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:n(()=>[x(" 好友可见 ")]),_:1})):i("",!0)]),"header-extra":n(()=>[a(p).state.userInfo.is_admin||a(p).state.userInfo.id===e.value.user.id?(o(),u("div",Es,[t(E,{placement:"bottom-end",trigger:"click",size:"small",options:M.value,onSelect:j},{default:n(()=>[t(C,{quaternary:"",circle:""},{icon:n(()=>[t(a(J),null,{default:n(()=>[t(a(nt))]),_:1})]),_:1})]),_:1},8,["options"])])):i("",!0),t(q,{show:L.value,"onUpdate:show":d[1]||(d[1]=N=>L.value=N),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定删除该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:B},null,8,["show"]),t(q,{show:r.value,"onUpdate:show":d[2]||(d[2]=N=>r.value=N),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定"+(e.value.is_lock?"解锁":"锁定")+"该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:Y},null,8,["show","content"]),t(q,{show:U.value,"onUpdate:show":d[3]||(d[3]=N=>U.value=N),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定"+(e.value.is_top?"取消置顶":"置顶")+"该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:P},null,8,["show","content"]),t(q,{show:T.value,"onUpdate:show":d[4]||(d[4]=N=>T.value=N),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定将该泡泡动态"+(e.value.is_essence?"取消亮点":"设为亮点")+"吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:S},null,8,["show","content"]),t(q,{show:h.value,"onUpdate:show":d[5]||(d[5]=N=>h.value=N),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定将该泡泡动态可见度修改为"+(R.value==0?"公开":R.value==1?"私密":"好友可见")+"吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:Q},null,8,["show","content"])]),footer:n(()=>[t(W,{attachments:e.value.attachments},null,8,["attachments"]),t(W,{attachments:e.value.charge_attachments,price:e.value.attachment_price},null,8,["attachments","price"]),t(de,{imgs:e.value.imgs},null,8,["imgs"]),t(me,{videos:e.value.videos,full:!0},null,8,["videos"]),t(ve,{links:e.value.links},null,8,["links"]),v("div",Bs,[x(" 发布于 "+I(a(ce)(e.value.created_on))+" ",1),e.value.ip_loc?(o(),u("span",Hs,[t(ae,{vertical:""}),x(" "+I(e.value.ip_loc),1)])):i("",!0),!a(p).state.collapsedLeft&&e.value.created_on!=e.value.latest_replied_on?(o(),u("span",Fs,[t(ae,{vertical:""}),x(" 最后回复 "+I(a(ce)(e.value.latest_replied_on)),1)])):i("",!0)])]),action:n(()=>[v("div",Vs,[t(X,{justify:"space-between"},{default:n(()=>[v("div",{class:"opt-item hover",onClick:H(F,["stop"])},[t(a(J),{size:"20",class:"opt-item-icon"},{default:n(()=>[y.value?i("",!0):(o(),z(a(at),{key:0})),y.value?(o(),z(a(lt),{key:1,color:"red"})):i("",!0)]),_:1}),x(" "+I(e.value.upvote_count),1)],8,Ys),v("div",Js,[t(a(J),{size:"20",class:"opt-item-icon"},{default:n(()=>[t(a(it))]),_:1}),x(" "+I(e.value.comment_count),1)]),v("div",{class:"opt-item hover",onClick:H(K,["stop"])},[t(a(J),{size:"20",class:"opt-item-icon"},{default:n(()=>[k.value?i("",!0):(o(),z(a(ut),{key:0})),k.value?(o(),z(a(ct),{key:1,color:"#ff7600"})):i("",!0)]),_:1}),x(" "+I(e.value.collection_count),1)],8,Ks),v("div",{class:"opt-item hover",onClick:H(G,["stop"])},[t(a(J),{size:"20",class:"opt-item-icon"},{default:n(()=>[t(a(rt))]),_:1}),x(" "+I(e.value.share_count),1)],8,Qs)]),_:1})])]),default:n(()=>[e.value.texts.length>0?(o(),u("div",Ns,[(o(!0),u(ie,null,ue(e.value.texts,N=>(o(),u("span",{key:N.id,class:"post-text",onClick:d[6]||(d[6]=H(Ae=>A(Ae,e.value.id),["stop"])),innerHTML:a(ke)(N.content).content},null,8,js))),128))])):i("",!0)]),_:1})])}}});const Gs=O=>(Ce("data-v-0d01659f"),O=O(),xe(),O),Xs={key:0,class:"detail-wrap"},Zs={key:1,class:"empty-wrap"},eo={key:0,class:"comment-opts-wrap"},to=Gs(()=>v("span",{class:"comment-title-item"},"评论",-1)),so={key:2},oo={key:0,class:"skeleton-wrap"},no={key:1},ao={key:0,class:"empty-wrap"},lo={key:0,class:"load-more-spinner"},io={key:1,class:"load-more-spinner"},uo={key:2,class:"load-more-spinner"},co={key:3,class:"load-more-spinner"},te=20,ro=Z({__name:"Post",setup(O){const D=Lt(),l=c({}),p=c(!1),f=c(!1),y=c([]),k=le(()=>+D.query.id),L=c("default"),r=c(!0);let U={loading(){},loaded(){},complete(){},error(){}};const T=P=>{L.value=P,P==="default"&&(r.value=!0),B(U)},h=()=>{l.value={id:0},p.value=!0,st({id:k.value}).then(P=>{p.value=!1,l.value=P,B(U)}).catch(P=>{p.value=!1})};let $=1;const R=c(!1),e=c([]),_=P=>{R.value||be({id:l.value.id,sort_strategy:"default",page:$,page_size:te}).then(S=>{P!==null&&(U=P),S.list.length<te?R.value=!0:$++,S.list.length>0&&($===1?e.value=S.list:e.value.push(...S.list),y.value=e.value),U.loaded(),f.value=!1}).catch(S=>{f.value=!1,U.error()})};let M=1,w=c(!1);const A=c([]),j=P=>{w.value||be({id:l.value.id,sort_strategy:"newest",page:M,page_size:te}).then(S=>{P!==null&&(U=P),S.list.length<te?w.value=!0:M++,S.list.length>0&&(M===1?A.value=S.list:A.value.push(...S.list),y.value=A.value),U.loaded(),f.value=!1}).catch(S=>{f.value=!1,U.error()})},B=P=>{k.value<1||(y.value.length===0&&(f.value=!0),L.value==="default"?(y.value=e.value,_(P)):(y.value=A.value,j(P)),f.value=!1)},Y=()=>{$=1,R.value=!1,e.value=[],M=1,w.value=!1,A.value=[],B(U)};return ge(()=>{h()}),De(k,()=>{k.value>0&&D.name==="post"&&h()}),(P,S)=>{const Q=Dt,F=Ws,K=xt,G=It,s=Tt,d=zt,m=Pt,g=Ds,b=Mt,C=$s,E=Re,q=Ct;return o(),u("div",null,[t(Q,{title:"泡泡详情",back:!0}),t(q,{class:"main-content-wrap",bordered:""},{default:n(()=>[t(s,null,{default:n(()=>[t(G,{show:p.value},{default:n(()=>[l.value.id>1?(o(),u("div",Xs,[t(F,{post:l.value,onReload:h},null,8,["post"])])):(o(),u("div",Zs,[t(K,{size:"large",description:"暂无数据"})]))]),_:1},8,["show"])]),_:1}),l.value.id>0?(o(),u("div",eo,[t(m,{type:"bar","justify-content":"end",size:"small",animated:"","onUpdate:value":T},{prefix:n(()=>[to]),default:n(()=>[t(d,{name:"default",tab:"默认"}),t(d,{name:"newest",tab:"最新"})]),_:1})])):i("",!0),l.value.id>0?(o(),z(s,{key:1},{default:n(()=>[t(g,{lock:l.value.is_lock,"post-id":l.value.id,onPostSuccess:Y},null,8,["lock","post-id"])]),_:1})):i("",!0),l.value.id>0?(o(),u("div",so,[f.value?(o(),u("div",oo,[t(b,{num:5})])):(o(),u("div",no,[y.value.length===0?(o(),u("div",ao,[t(K,{size:"large",description:"暂无评论，快来抢沙发"})])):i("",!0),(o(!0),u(ie,null,ue(y.value,W=>(o(),z(s,{key:W.id},{default:n(()=>[t(C,{comment:W,onReload:Y},null,8,["comment"])]),_:2},1024))),128))]))])):i("",!0),y.value.length>=te?(o(),z(E,{key:3,justify:"center"},{default:n(()=>[t(a(qt),{class:"load-more",slots:{complete:"没有更多数据了",error:"加载出错"},onInfinite:B},{spinner:n(()=>[r.value&&R.value?(o(),u("span",lo)):i("",!0),!r.value&&a(w)?(o(),u("span",io)):i("",!0),r.value&&!R.value?(o(),u("span",uo,"加载评论")):i("",!0),!r.value&&!a(w)?(o(),u("span",co,"加载评论")):i("",!0)]),_:1})]),_:1})):i("",!0)]),_:1})])}}});const Fo=oe(ro,[["__scopeId","data-v-0d01659f"]]);export{Fo as default};
