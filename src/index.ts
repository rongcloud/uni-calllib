// import { unInit } from './index';
import {
	UniListenerResult,
	ReceivedListenerResult,
	ListenerResultRes,
   usersParams,
   ListenerResultData,
   ListenerResultError,
   RCCallIWBeautyOption
} 
from './types';
import {
   RCCallIWCamera,
   RCCallIWMediaType,
   RCCallIWBeautyFilterType
 } 
from './enum';
import logger from './logger'
const call = uni.requireNativePlugin('__RC_UNI_CALL__');
const Platform = uni.getSystemInfoSync().platform;
logger.log('已进入index.js')

/**
* 初始化 SDK，只需要调用一次  
*
* calllib初始化默认不传参数
*/
export function init(){
   logger.log(`init Platform->${Platform}`)
   call.init({});
}
/**
* 注销calllib 
* 
* 注销calllib默认不传参数
*/
export function unInit(){
   logger.log(`unInit Platform->${Platform}`)
   call.unInit();
}
/**
* 添加接收监听函数  
* 
* @param listener 回调函数
*/
export function onCallReceived(listener:(result:UniListenerResult<ReceivedListenerResult>)=>void){
   logger.log(`Engine:OnCallReceived 监听通话呼入 Platform->${Platform}`)
   call.addEventListener("Engine:OnCallReceived", listener);
   
}
/**
* 添加挂断监听函数  
* 
* @param listener 回调函数
*/
export function onCallDisconnected(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   logger.log(`Engine:OnCallDisconnected 监听通话结束 Platform->${Platform}`)
   call.addEventListener("Engine:OnCallDisconnected", listener);
}
/**
* 添加连接监听函数  
* 
* @param listener 回调函数
*/
export function onCallConnected(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   logger.log(`Engine:OnCallConnected 已建立通话通话接通 Platform->${Platform}`)
   call.addEventListener("Engine:OnCallConnected", listener);
}
/**
* 通话中的某一个参与者，邀请好友加入通话 
* 
* @param listener 回调函数
*/

export function onRemoteUserInvited(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   logger.log(`Engine:OnRemoteUserInvited 通话中的某一个参与者，邀请好友加入通话  Platform->${Platform}`)
   call.addEventListener("Engine:OnRemoteUserInvited", listener);
}
/**
 * 对端用户加入了通话
 * @param listener 回调函数 
 */
 export function onRemoteUserJoined(listener:(result:UniListenerResult<usersParams>)=>void){
   logger.log(`Engine:OnRemoteUserJoined 对端用户加入通话 Platform->${Platform}`)
   call.addEventListener("Engine:OnRemoteUserJoined",listener);
}
/**
 * 对端用户挂断 (实际测试，只在群聊时用触发)
 * @param listener 回调函数
 */
 export function onRemoteUserLeft(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   logger.log(`Engine:OnRemoteUserLeft 对端用户挂断(群聊触发) Platform->${Platform}`)
   call.addEventListener("Engine:OnRemoteUserLeft", listener);
}
/**
 * 电话已拨出 主叫端拨出电话后，通过回调 onCallOutgoing 通知当前 call 的详细信息
 * @param listener 回调函数
 */
 export function onCallOutgoing(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   logger.log(`Engine:OnCallOutgoing 电话已拨出，通知当前 call 的详细信息 Platform->${Platform}`)
   call.addEventListener("Engine:OnCallOutgoing", listener);
}
/**
 * 被叫端正在振铃，主叫端拨出电话，被叫端收到请求，发出振铃响应时监听
 * @param listener 回调函数
 */
 export function onRemoteUserRinging(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
   logger.log(`Engine:OnRemoteUserRinging 被叫端收到请求，发出振铃响应时监听 Platform->${Platform}`)
   call.addEventListener("Engine:OnRemoteUserRinging", listener);
}
/**
 * 通话出现错误的回调
 * @param listener 回调函数
 */
 export function onError(listener:(result:UniListenerResult<ListenerResultError>)=>void){
   logger.log(`Engine:OnError 通话出现错误 Platform->${Platform}`)
   call.addEventListener("Engine:OnError", listener);
}
/**
 * 对端用户切换了媒体类型
 * @param listener 回调函数
 */
 export function onRemoteUserMediaTypeChanged(listener:(result:UniListenerResult<ListenerResultData>)=>void){
   logger.log(`Engine:OnRemoteUserMediaTypeChanged 对端用户切换了媒体类型 Platform->${Platform}`)
   call.addEventListener("Engine:OnRemoteUserMediaTypeChanged", listener);
}
/**
 * 对端用户关闭了摄像头
 * @param listener 回调函数
 */
 export function onRemoteUserCameraStateChanged(listener:(result:UniListenerResult<ListenerResultData>)=>void){
   logger.log(`Engine:OnRemoteUserCameraStateChanged 对端用户关闭了摄像头 Platform->${Platform}`)
   call.addEventListener("Engine:OnRemoteUserCameraStateChanged", listener);
}
/**
 * 对端用户关闭了麦克风
 * @param listener 回调函数
 */
 export function onRemoteUserMicrophoneStateChanged(listener:(result:UniListenerResult<ListenerResultData>)=>void){
   logger.log(`Engine:OnRemoteUserMicrophoneStateChanged 对端用户关闭了麦克风 Platform->${Platform}`)
   call.addEventListener("Engine:OnRemoteUserMicrophoneStateChanged", listener);
}
/**
 * 邀请用户
 * @param userIds 被邀请用户id列表
 * @param observerUserIds 被邀请观察者id列表 (只能听或看，不能推流的用户)
 */
export function inviteUsers(userIds: string[], observerUserIds: string[]){
   logger.log(`inviteUsers 邀请用户->${userIds} Platform->${Platform}`)
   call.inviteUsers(userIds, observerUserIds);
}
/**
 * 移除监听-接收到通话呼入
 */
export function removeCallReceivedListener () {
   logger.log(`removeCallReceivedListener`)
   call.removeAllEventListeners('Engine:OnCallReceived');
}
 
 /**
  * 移除监听-通话已接通
  */
export function removeCallConnectedListener () {
   logger.log(`removeCallConnectedListener`)
   call.removeAllEventListeners('Engine:OnCallConnected')
}
 
 /**
  * 移除监听-通话已结束
  * @param 挂断原因
  */
export function removeCallDisconnectedListener () {
   logger.log(`removeCallDisconnectedListener`)
   call.removeAllEventListeners('Engine:OnCallDisconnected')
}
 
 /**
  * 移除监听-对端用户加入了通话
  */
export function removeRemoteUserJoinedListener () {
   logger.log(`removeRemoteUserJoinedListener`)
   call.removeAllEventListeners('Engine:OnRemoteUserJoined')
 }
 
 /**
  * 移除监听-对端用户挂断
  */
  export function removeRemoteUserLeftListener () {
   logger.log(`removeRemoteUserLeftListener`)
   call.removeAllEventListeners('Engine:OnRemoteUserLeft')
 }
  /**
  * 移除监听-有用户被邀请加入通话
  */
export function removeRemoteUserInvited () {
   logger.log(`removeRemoteUserInvited`)
   call.removeAllEventListeners('Engine:OnRemoteUserInvited')
}
 
 /**
  * 移除监听-开启或关闭摄像头的回调
  */
export function removeEnableCameraListener () {
   logger.log(`removeEnableCameraListener`)
   call.removeAllEventListeners('Engine:OnEnableCamera')
}
 /**
  * 移除监听-切换摄像头回调
  */
export function removeSwitchCameraListener () {
   logger.log(`removeSwitchCameraListener`)
   call.removeAllEventListeners('Engine:OnSwitchCamera')
 }
 
 /**
  * 移除监听-通话出现错误的回调
  */
export function removeErrorListener () {
   logger.log(`removeErrorListener`)
   call.removeAllEventListeners('Engine:OnError')
}
 
 /**
  * 移除监听-开始呼叫通话的回调
  */
export function removeCallOutgoingListener () {
   logger.log(`removeCallOutgoingListener`)
   call.removeAllEventListeners('Engine:OnCallOutgoing')
}
 
 /**
  * 移除监听-对端用户正在振铃
  */
export function removeRemoteUserRingingListener () {
   logger.log(`removeRemoteUserRingingListener`)
   call.removeAllEventListeners('Engine:OnRemoteUserRinging')
}
/**
 * 移除监听-对端用户切换了媒体类型
 */
export function removeRemoteUserMediaTypeChangedListener () {
   logger.log(`removeRemoteUserMediaTypeChangedListener`)
   call.removeAllEventListeners('Engine:OnRemoteUserMediaTypeChanged')
}
 
/**
* 获取当前calllib本地存储信息
* 
* 默认不传参数
*/
export function getCurrentCallSession(){
  logger.log(`getCurrentCallSession Platform->${Platform}`)
   return call.getCurrentCallSession()
}
/**
* 挂断calllib
* 
* 默认不传参数
*/
export function hangup(){
   logger.log(`hangup Platform->${Platform}`)
   call.hangup()
}
/**
* 接收calllib
* 
* 默认不传参数
*/
export function accept(){
   logger.log(`accept Platform->${Platform}`)
   call.accept()
}
/**
* 发起单聊呼叫
* 
* @param targetId 目标ID
* @param type 呼叫类型（0:音频 1:音视频）
* @param extra 默认传''
* 
*/
export function startSingleCall(targetId:string,type:number,extra:null){
   logger.log(`startSingleCall targetId->${targetId} type=>${type} extra=>${extra} Platform->${Platform}`)
   call.startSingleCall(targetId,type,extra);
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
   logger.log(`startGroupCall groupId->${groupId} userIds=>${userIds} observerUserIds=>${observerUserIds} type=>${type} extra=>${extra} Platform->${Platform}`)
   call.startGroupCall(groupId,userIds,observerUserIds,type,extra);
}
/**
* 设置预览窗口，此方法需要在视图更新渲染完成后执行
* 
* @param userId 用户id
* @param ref ref ID 对应组件的标识
* @param type 视频显示模式 0 铺满 1 自适应
* @param isZOrderOnTop android only 是否置顶
*/
export function setVideoView(userId:string,ref:string,type:number,isZOrderOnTop:boolean = false){
   logger.log(`setVideoView userId->${userId} ref=>${ref} type=>${type} isZOrderOnTop=>${isZOrderOnTop} Platform->${Platform}`)
   Platform === 'android' ? call.setVideoView(userId,ref,type,isZOrderOnTop) : call.setVideoView(userId,ref,type);
}
/**
* 设置callib是否开启扬声器
* 
* @param isOpen 默认开启
* 
*/
export function enableSpeaker(isOpen:boolean){
   logger.log(`enableSpeaker isOPen->${isOpen} Platform->${Platform}`)
   call.enableSpeaker(isOpen);
}
/**
* 设置callib是否开启麦克风
* 
* @param isOPen 默认开启
* 
*/
export function enableMicrophone(isOpen:boolean){
   logger.log(`enableMicrophone isOPen->${isOpen} Platform->${Platform}`)
   call.enableMicrophone(isOpen);
}
/**
* 切换摄像头
* 
* 默认不传参数
* 
*/
export function switchCamera(){
   logger.log(`switchCamera Platform->${Platform}`)
   call.switchCamera();
}
/**
* 获取当前摄像头方式
* 
* 默认不传参数
*/
export function currentCamera(){
   logger.log(`currentCamera Platform->${Platform}`)
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
   logger.log(`enableCamera isOpen=>${isOpen} camera=>${camera} Platform->${Platform}`)
   call.enableCamera(isOpen,camera);
}
/**
 * 修改通话类型
 * @param type
 */
export function changeMediaType(type:RCCallIWMediaType){
   logger.log(`changeMediaType type=>${type}  Platform->${Platform}`)
   call.changeMediaType(type);
}
/**
 * 设置滤镜
 * @param filter 
 */
 export function setBeautyFilter(filter:RCCallIWBeautyFilterType){
   logger.log(`setBeautyFilter filter=>${filter}  Platform->${Platform}`)
   call.setBeautyFilter(filter);
}
/**
 * 获取当前的滤镜
 * 默认不传参数
 */
 export function getCurrentBeautyFilter(){
   logger.log(`getCurrentBeautyFilter Platform->${Platform}`)
   return call.getCurrentBeautyFilter();
}
/**
 * 设置美颜参数
 * @param enable 默认关闭 
 * @param RCCallIWBeautyOption 美颜参数 
 */
 export function setBeautyOption(enable:boolean = false,option:RCCallIWBeautyOption){
   logger.log(`setBeautyOption enable=>${enable} option=>${option} Platform->${Platform}`)
   call.setBeautyOption(enable,option);
}

/**
 * 获取当前的美颜参数
 * 默认不传参数
 */
 export function getCurrentBeautyOption(){
   logger.log(`getCurrentBeautyOption Platform->${Platform}`)
   return call.getCurrentBeautyOption();
}
/**
 * 重置美颜参数和滤镜
 * 默认不传参数
 */
 export function resetBeauty(){
   logger.log(`resetBeauty Platform->${Platform}`)
   call.resetBeauty();
}

export * from './enum'