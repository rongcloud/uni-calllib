export const formate = function(arr){
	return JSON.parse('['+ arr.join(',') + ']');
}
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