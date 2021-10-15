// import { unInit } from './index';
import {
	UniListenerResult,
	ReceivedListenerResult,
	ListenerResultRes,
   RCCallIWCamera
} 
from './types';
const call = uni.requireNativePlugin('__RC_UNI_CALL__');

/**
* 初始化 SDK，只需要调用一次  
*
* calllib初始化默认不传参数
*/
export function init(){
   call.init({});
}
/**
* 注销calllib 
* 
* 注销calllib默认不传参数
*/
export function unInit(){
   call.unInit();
}
/**
* 添加接收监听函数  
* 
* @param listener 回调函数
*/
export function addOnCallReceivedListener(listener:(result:UniListenerResult<ReceivedListenerResult>)=>void){
   call.addEventListener("Engine:OnCallReceived", listener);
}
/**
* 添加挂断监听函数  
* 
* @param listener 回调函数
*/
export function addOnCallDisconnectedListener(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   call.addEventListener("Engine:OnCallDisconnected", listener);
}
/**
* 添加连接监听函数  
* 
* @param listener 回调函数
*/
export function addOnCallConnectedListener(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   call.addEventListener("Engine:OnCallConnected", listener);
}
/**
* 获取当前calllib本地存储信息
* 
* 默认不传参数
*/
export function getCurrentCallSession(){
   return call.getCurrentCallSession()
}
/**
* 挂断calllib
* 
* 默认不传参数
*/
export function hangup(){
   call.hangup()
}
/**
* 接收calllib
* 
* 默认不传参数
*/
export function accept(){
   call.accept()
}
/**
* 发起单聊呼叫
* 
* @param targetId 目标ID
* @param type 呼叫类型（0:音频 1:音视频）
* @param custom 传null
* 
*/
export function startSingleCall(targetId:string,type:number,custom:null){
   call.startSingleCall(targetId,type,custom);
}
/**
* 发起组呼呼叫
* 
* @param groupId 组ID
* @param userIds 群组成员
* @param observerUserIds 观察者ID默认为空数组
* @param type 呼叫类型（0:音频 1:音视频）
* @param extra 默认传''
* 
*/
export function startGroupCall(groupId:string,userIds:Array<string>,observerUserIds:Array<string>,type:number,extra:string){
   call.startGroupCall(groupId,userIds,observerUserIds,type,extra);
}
/**
* 设置音视频视图到视频组件，做音视频呈现
* 
* @param userId 用户id
* @param ref ref ID 对应组件的标识
* @param type 视频视图个性化设置 0 铺满 1 自适应
* 
*/
export function setVideoView(userId:string,ref:string,type:number,isZOrderOnTop:boolean){
   call.setVideoView(userId,ref,type,isZOrderOnTop);
}
/**
* 设置callib是否开启扬声器
* 
* @param isOPen 默认开启
* 
*/
export function enableSpeaker(isOPen:boolean){
   call.enableSpeaker(isOPen);
}
/**
* 设置callib是否开启麦克风
* 
* @param isOPen 默认开启
* 
*/
export function enableMicrophone(isOpen:boolean){
   call.enableMicrophone(isOpen);
}
/**
* 切换摄像头
* 
* 默认不传参数
* 
*/
export function switchCamera(){
   call.switchCamera();
}
/**
* 开启摄像头摄像头
* 
* @param isOpen 是否开启
* @param RCCallIWCamera 对端还是本端
* 
*/
export function enableCamera(isOpen:boolean,camera:RCCallIWCamera){
   call.enableCamera(isOpen,camera)
}