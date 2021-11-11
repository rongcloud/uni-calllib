//通话异常错误处理
export const errorDeal = function(code){
	let tit ='';
	switch(code){
		case 0:
			tit = '成功';
			break;
		case 1:
			tit = '开通的音视频服务没有及时生效或音视频服务已关闭，请等待3-5小时后重新安装应用或开启音视频服务再进行测试';
			break;
		case 2:
			tit = '网络不可用';
			break;
		case 3:
			tit = '已经处于通话中了';
			break;
		case 4:
			tit = '无效操作';
			break;
		case 5:
			tit = '参数错误';
			break;
		case 6:
			tit = '网络不稳定';
			break;
		case 7:
			tit = '媒体服务请求失败';
			break;
		case 8:
			tit = '媒体服务初始化失败';
			break;
		case 9:
			tit = '媒体服务未初始化';
			break;
		case 10:
			tit = '媒体服务请求超时';
			break;
		case 11:
			tit = '未知的媒体服务错误';
			break;
		case 12:
			tit = '已被禁止通话';
			break;
		case 13:
			tit = '音视频服务已关闭';
			break;
		case 14:
			tit = '音视频发布资源失败';
			break;
		case 15:
			tit = '音视频订阅资源失败';
			break;
		case 16:
			tit = '其他端已在通话中错误';
			break;
		default:
			tit='';
		
	}
}
//挂断原因错误处理
export const reasonDeal = function(code){
	let tit ='';
	switch(code){
		case 0:
			tit = '己方取消已发出的通话请求';
			break;
		case 1:
			tit = '己方拒绝收到的通话请求';
			break;
		case 2:
		    tit = '己方挂断';
		    break;
		case 3:
		    tit = '己方忙碌';
		    break;
		case 4:
		    tit = '己方未接听';
		    break;
		case 5:
		    tit = '己方不支持当前引擎';
		    break;
		case 6:
		    tit = '己方网络出错';
		    break;
		case 7:
		    tit = '己方获取媒体资源失败';
		    break;
		case 8:
		    tit = '己方发布资源失败';
		    break;
		case 9:
		    tit = '己方订阅资源失败';
		    break;
		case 10:
		    tit = '对方取消已发出的通话请求';
		    break;
		case 11:
		    tit = '对方拒绝收到的通话请求';
		    break;
		case 12:
		    tit = '通话过程对方挂断';
		    break;
		case 13:
		    tit = '对方忙碌';
		    break;
		case 14:
		    tit = '对方未接听';
		    break;
		case 15:
		    tit = '对方不支持当前引擎';
		    break;
		case 16:
		    tit = '对方网络错误';
		    break;
		case 17:
		    tit = '对方获取媒体资源失败';
		    break;
		case 18:
		    tit = '对方发布资源失败';
		    break;
		case 19:
		    tit = '对方订阅资源失败';
		    break;
		case 20:
		    tit = '己方其他端已加入新通话';
		    break;
		case 21:
		    tit = '己方其他端已在通话中';
		    break;
		case 22:
		    tit = '己方已被禁止通话';
		    break;
		case 23:
		    tit = '对方其他端已加入新通话';
		    break;
		case 24:
		    tit = '对方其他端已在通话中';
		    break;
		case 25:
		    tit = '对方已被禁止通话';
		    break;
		case 26:
		    tit = '己方其他端已接听';
		    break;
		case 27:
		    tit = '己方其他端已挂断';
		    break;
		case 28:
		    tit = '己方被对方加入黑名单';
		    break;
		case 29:
		    tit = '音视频服务已关闭';
		    break;
		case 30:
		    tit = '己方被降级为观察者';
		    break;
		case 31:
		    tit = '己方摄像头初始化错误，可能是没有打开使用摄像头权限';
		    break;
		case 32:
		    tit = '其他端已经接听';
		    break;
		case 33:
		    tit = 'im ipc服务已断开';
		    break;
		default:
			tit='';
	}
	return tit;
}
//im连接错误处理
export const imCode = function (code){
	let tit = '';
	switch(code){
		case -1000:
			tit = '	开发者接口调用时传入的参数错误';
			break;
		case -4:
			tit = '应用没有调用 connect() 方法，即调用业务';
			break;
		case -3:
			tit = '参数异常, 请确认参数是否填写正确且有效';
			break;
		case -2:
			tit = 'IPC 进程意外终止. 当 libRongIMLib.so 或 libsqlite.so 找不到或出现崩溃时也会触发此错误. 如果是系统进行了资源回收后调用接口会触发此问题，SDK 会做好自动重连';
			break;
		case -1:
			tit = '未知错误';
			break;
		case 0:
			tit = '连接成功';
			break;
		case 1:
			tit = '当前设备网络不可用';
			break;
		case 2:
			tit = '当前设备切换到飞行模式';
			break;
		case 3:
			tit = '当前设备切换到 2G（GPRS、EDGE）低速网络';
			break;
		case 4:
			tit = '当前设备切换到 3G 或 4G 高速网络';
			break;
		case 5:
			tit = '当前设备切换到 WIFI 网络';
			break;
		case 6:
			tit = '当前用户在其他设备上登录，此设备被踢下线';
			break;
		case 7:
			tit = '当前用户在 Web 端登录';
			break;
		case 8:
			tit = '服务器异常';
			break;
		case 9:
			tit = '连接验证异常';
			break;
		case 11:
			tit = '连接失败或未连接';
			break;
		case 12:
			tit = '当前用户已注销';
			break;
		case 405:
			tit = '已被对方加入黑名单，消息发送失败';
			break;
		case 407:
			tit = '未在对方的白名单中，消息发送失败';
			break;
		case 5004:
			tit = '超时';
			break;
		case 20604:
			tit = '发送消息频率过高，1 秒钟最多只允许发送 5 条消息，详细请联系商务，电话：13161856839';
			break;
		case 20605:
			tit = '信令被封禁，详细请联系商务，电话：13161856839';
			break;
		case 20607:
			tit = '已被对方加入黑名单，消息发送失败';
			break;
		case 22406:
			tit = '当前用户不在群组中';
			break;
		case 22408:
			tit = '当前用户在群组中已被禁言';
			break;
		case 23406:
			tit = '当前用户不在聊天室中';
			break;
		case 23408:
			tit = '当前用户在聊天室中已被禁言';
			break;
		case 23409:
			tit = '当前用户已被踢出并禁止加入聊天室。被禁止的时间取决于服务端调用踢出接口时传入的时间';
			break;
		case 23410:
			tit = '聊天室不存在';
			break;
		case 23411:
			tit = '聊天室成员超限';
			break;
		case 23412:
			tit = '聊天室接口参数不正确';
			break;
		case 23414:
			tit = '聊天室云存储业务未开通';
			break;
		case 23424:
			tit = '没有权限修改聊天室中已存在的属性值';
			break;
		case 23425:
			tit = '聊天室中属性设置频率超限，单个聊天室每秒上限 100 次';
			break;
		case 23426:
			tit = '聊天室属性存储功能没有开通';
			break;
		case 23427:
			tit = '聊天室属性值不存在';
			break;
		case 25101:
			tit = '撤回参数不正确';
			break;
		case 25103:
			tit = '清除历史消息时，传递的时间戳大于当前系统时间';
			break;
		case 26001:
			tit = 'Push 参数不正确';
			break;
		case 26002:
			tit = '向服务端同步时出现问题，有可能是操作过于频繁所致。请稍后再试';
			break;
		case 26101:
			tit = '没有在融云开发者后台开启小视频服务';
			break;
		case 30001:
			tit = '连接已被释放';
			break;
		case 30002:
			tit = '当前连接不可用';
			break;
		case 30003:
			tit = '客户端发送消息请求，融云服务端响应超时';
			break;
		case 30004:
			tit = '导航 HTTP 发送失败';
			break;
		case 30005:
			tit = '请求连接导航地址失败';
			break;
		case 30006:
			tit = '请求连接导航地址后，接收数据失败';
			break;
		case 30007:
			tit = '导航 HTTP 请求失败';
			break;
		case 30008:
			tit = '导航 HTTP 返回数据格式错误';
			break;
		case 30009:
			tit = '导航数据解析后，其中不存在有效 IP 地址';
			break;
		case 30010:
			tit = '创建 Socket 连接失败,连接相关的错误码，SDK 会做好自动重连，开发者无须处理';
			break;
		case 30011:
			tit = 'Socket 断开';
			break;
		case 30012:
			tit = 'PING 失败';
			break;
		case 30013:
			tit = 'PING 超时';
			break;
		case 30014:
			tit = '信令发送失败';
			break;
		case 30015:
			tit = '连接过于频繁';
			break;
		case 30016:
			tit = '消息大小超限，消息体最大 128 KB';
			break;
		case 31000:
			tit = '连接 ACK 超时';
			break;
		case 31002:
			tit = '初始化时填写的 AppKey 不正确';
			break;
		case 31003:
			tit = '服务器当前不可用';
			break;
		case 31004:
			tit = 'Token 无效';
			break;
		case 31005:
			tit = 'AppKey 与Token 不匹配';
			break;
		case 31006:
			tit = '连接重定向. 连接相关的错误码，SDK 会做好自动重连，开发者无须处理';
			break;
		case 31007:
			tit = 'ApplicationId 与后台注册信息不一致';
			break;
		case 31008:
			tit = 'AppKey 被封禁或已删除';
			break;
		case 31009:
			tit = '用户被封禁';
			break;
		case 31010:
			tit = '当前用户在其他移动设备上登录，此设备被踢下线';
			break;
		case 31011:
			tit = '用户被封禁';
			break;
		case 31020:
			tit = 'Token过期。一般是因为在开发者后台设置了token 过期时间，需要请求您的服务器重新获取 Token 并再次用新的 Token 建立连接';
			break;
		case 31023:
			tit = '重连过程中当前用户在其它设备上登录';
			break;
		case 32061:
			tit = '连接被拒绝, SDK 会自动重连，开发者无须处理';
			break;
		case 33001:
			tit = '未调用 init 初始化函数';
			break;
		case 33002:
			tit = '数据库错误';
			break;
		case 33003:
			tit = '调用接口时传入的参数不正确';
			break;
		case 33007:
			tit = '未开通历史消息云存储服务';
			break;
		case 34001:
			tit = '连接已经存在，不需要重复连接';
			break;
		case 34002:
			tit = '小视频时间长度超出限制，默认小视频时长上限为 2 分钟';
			break;
		case 34003:
			tit = 'GIF 消息文件大小超出限制， 默认 GIF 文件大小上限是 2 MB';
			break;
		case 34004:
			tit = '聊天室状态未同步完成，加入聊天室时立即调用获取聊天室属性接口，极限情况下会存在本地数据和服务器未同步完成的情况，开发者可以设置聊天室属性回调，SDK 同步完成时会在属性回调中通知开发者';
			break;
		case 34005:
			tit = '连接环境不正确';
			break;
		case 40006:
			tit = 'RTC 房间操作时传入参数错误';
			break;
		default:
			tit='';
	}
	return tit;
	
} 