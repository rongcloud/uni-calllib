// import { unInit } from './index';
import {
	UniListenerResult,
	ReceivedListenerResult,
	ListenerResultRes,
   usersParams,
   ListenerResultData
} 
from './types';
import {
   RCCallIWCamera,
   RCCallIWMediaType,
   RCCallIWCallDisconnectedReason
 } 
 from './enum';

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
export function onCallReceived(listener:(result:UniListenerResult<ReceivedListenerResult>)=>void){
   call.addEventListener("Engine:OnCallReceived", listener);
}
/**
* 添加挂断监听函数  
* 
* @param listener 回调函数
*/
export function onCallDisconnected(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   call.addEventListener("Engine:OnCallDisconnected", listener);
}
/**
* 添加连接监听函数  
* 
* @param listener 回调函数
*/
export function onCallConnected(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   call.addEventListener("Engine:OnCallConnected", listener);
}
/**
* 添加有用户被邀请加入通话监听函数  
* 
* @param listener 回调函数
*/

export function onRemoteUserInvited(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   call.addEventListener("Engine:OnRemoteUserInvited", listener);
}
/**
 * 对端用户加入了通话
 * @param listener 回调函数 
 */
 export function onRemoteUserJoined(listener:(result:UniListenerResult<usersParams>)=>void){
   call.addEventListener("Engine:OnRemoteUserJoined",listener);
}
/**
 * 对端用户挂断 (实际测试，只在群聊时用触发)
 * @param listener 回调函数
 */
 export function onRemoteUserLeft(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   call.addEventListener("Engine:OnRemoteUserLeft", listener);
}
/**
 * 电话已拨出 主叫端拨出电话后，通过回调 onCallOutgoing 通知当前 call 的详细信息
 * @param listener 回调函数
 */
 export function onCallOutgoing(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   call.addEventListener("Engine:OnCallOutgoing", listener);
}
/**
 * 被叫端正在振铃，主叫端拨出电话，被叫端收到请求，发出振铃响应时监听
 * @param listener 回调函数
 */
 export function onRemoteUserRinging(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   call.addEventListener("Engine:OnRemoteUserRinging", listener);
}
/**
 * 通话出现错误的回调
 * @param listener 回调函数
 */
 export function onError(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   call.addEventListener("Engine:OnError", listener);
}
/**
 * 对端用户切换了媒体类型
 * @param listener 回调函数
 */
 export function onRemoteUserMediaTypeChanged(listener:(result:UniListenerResult<ListenerResultData>)=>void){
   call.addEventListener("Engine:OnRemoteUserMediaTypeChanged", listener);
}
/**
 * 邀请用户
 * @param userIds 被邀请用户id列表
 * @param observerUserIds 被邀请观察者id列表 (只能听或看，不能推流的用户)
 */
export function inviteUsers(userIds: string[], observerUserIds: string[]){
   call.inviteUsers(userIds, observerUserIds);
}
/**
 * 移除监听-接收到通话呼入
 */
export function removeCallReceivedListener () {
   call.removeAllListeners('Engine:OnCallReceived')
}
 
 /**
  * 移除监听-通话已接通
  */
export function removeCallConnectedListener () {
   call.removeAllListeners('Engine:OnCallConnected')
}
 
 /**
  * 移除监听-通话已结束
  * @param 挂断原因
  */
export function removeCallDisconnectedListener () {
   call.removeAllListeners('Engine:OnCallDisconnected')
}
 
 /**
  * 移除监听-对端用户加入了通话
  */
export function removeRemoteUserJoinedListener () {
   call.removeAllListeners('Engine:OnRemoteUserJoined')
 }
 
 /**
  * 移除监听-对端用户挂断
  */
  export function removeRemoteUserLeftListener () {
   call.removeAllListeners('Engine:OnRemoteUserLeft')
 }
  /**
  * 移除监听-有用户被邀请加入通话
  */
export function removeRemoteUserInvited () {
   call.removeAllListeners('Engine:OnRemoteUserInvited')
}
 
 /**
  * 移除监听-开启或关闭摄像头的回调
  */
  export function removeEnableCameraListener () {
   call.removeAllListeners('Engine:OnEnableCamera')
 }
 
 /**
  * 移除监听-切换摄像头回调
  */
  export function removeSwitchCameraListener () {
   call.removeAllListeners('Engine:OnSwitchCamera')
 }
 
 /**
  * 移除监听-通话出现错误的回调
  */
export function removeErrorListener () {
   call.removeAllListeners('Engine:OnError')
 }
 
 /**
  * 移除监听-开始呼叫通话的回调
  */
  export function removeCallOutgoingListener () {
   call.removeAllListeners('Engine:OnCallOutgoing')
 }
 
 /**
  * 移除监听-对端用户正在振铃
  */
export function removeRemoteUserRingingListener () {
   call.removeAllListeners('Engine:OnRemoteUserRinging')
}
 

 /**
  * 移除监听-对端用户切换了媒体类型
  */
export function removeRemoteUserMediaTypeChangedListener () {
   call.removeAllListeners('Engine:OnRemoteUserMediaTypeChanged')
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
* 设置预览窗口，此方法需要在视图更新渲染完成后执行
* 
* @param userId 用户id
* @param ref ref ID 对应组件的标识
* @param type 视频视图个性化设置 0 铺满 1 自适应
* @param isZOrderOnTop android only 是否置顶
* 
*/
export function setVideoView(userId:string,ref:string,type:number,isZOrderOnTop?:boolean){
   let userAgent = navigator.userAgent;
   console.log(navigator)
   console.log(userAgent);
   console.log('isZOrderOnTop:'+isZOrderOnTop)
   if(isZOrderOnTop === undefined){
      call.setVideoView(userId,ref,type);
   }else{
      call.setVideoView(userId,ref,type,isZOrderOnTop);
   }
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
* 获取当前摄像头方式
* 
* 默认不传参数
*/
export function currentCamera(){
   return call.currentCamera()
}
/**
* 开启摄像头摄像头
* 
* @param isOpen 是否开启
* @param RCCallIWCamera 对端还是本端
* 
*/
export function enableCamera(isOpen:boolean,camera:RCCallIWCamera){
   call.enableCamera(isOpen,camera);
}
/**
 * 修改通话类型
 * @param type
 */
export function changeMediaType(type:RCCallIWMediaType){
   call.changeMediaType(type);
}