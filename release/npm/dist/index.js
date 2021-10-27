/*
 * RCCallUni - v0.0.1-alpha.5
 * CommitId - 1fade288746514c2a99985af1e93eb977481e5c3
 * Wed Oct 27 2021 10:28:19 GMT+0800 (中国标准时间)
 * ©2020 RongCloud, Inc. All rights reserved.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const call = uni.requireNativePlugin('RongCloud-Call-RCUniCall');
/**
* 初始化 SDK，只需要调用一次
*
* calllib初始化默认不传参数
*/
function init() {
    call.init({});
}
/**
* 注销calllib
*
* 注销calllib默认不传参数
*/
function unInit() {
    call.unInit();
}
/**
* 添加接收监听函数
*
* @param listener 回调函数
*/
function addOnCallReceivedListener(listener) {
    call.addEventListener("Engine:OnCallReceived", listener);
}
/**
* 添加挂断监听函数
*
* @param listener 回调函数
*/
function addOnCallDisconnectedListener(listener) {
    call.addEventListener("Engine:OnCallDisconnected", listener);
}
/**
* 添加连接监听函数
*
* @param listener 回调函数
*/
function addOnCallConnectedListener(listener) {
    call.addEventListener("Engine:OnCallConnected", listener);
}
/**
* 添加有用户被邀请加入通话监听函数
*
* @param listener 回调函数
*/
function addRemoteUserInvited(listener) {
    call.addEventListener("Engine:OnRemoteUserInvited", listener);
}
/**
 * 对端用户挂断 (实际测试，只在群聊时用触发)
 * @param listener 回调函数
 */
//  export function addRemoteUserLeftListener(listener:(result:UniListenerResult<ListenerResultRes>)=>void){
//    call.addEventListener("Engine:OnRemoteUserLeft", listener);
// }
function addRemoteUserLeftListener() {
    call.addEventListener("Engine:OnRemoteUserLeft", (res) => {
        console.log(res);
    });
}
/**
 * 移除监听-接收到通话呼入
 */
function removeCallReceivedListener() {
    call.removeAllListeners('Engine:OnCallReceived');
}
/**
 * 移除监听-通话已接通
 */
function removeCallConnectedListener() {
    call.removeAllListeners('Engine:OnCallConnected');
}
/**
 * 移除监听-通话已结束
 * @param 挂断原因
 */
function removeCallDisconnectedListener() {
    call.removeAllListeners('Engine:OnCallDisconnected');
}
/**
 * 移除监听-对端用户加入了通话
 */
function removeRemoteUserJoinedListener() {
    call.removeAllListeners('Engine:OnRemoteUserJoined');
}
/**
 * 移除监听-对端用户挂断
 */
function removeRemoteUserLeftListener() {
    call.removeAllListeners('Engine:OnRemoteUserLeft');
}
/**
 * 移除监听-开启或关闭摄像头的回调
 */
function removeEnableCameraListener() {
    call.removeAllListeners('Engine:OnEnableCamera');
}
/**
 * 移除监听-切换摄像头回调
 */
function removeSwitchCameraListener() {
    call.removeAllListeners('Engine:OnSwitchCamera');
}
/**
 * 移除监听-通话出现错误的回调
 */
function removeErrorListener() {
    call.removeAllListeners('Engine:OnError');
}
/**
 * 移除监听-开始呼叫通话的回调
 */
function removeCallOutgoingListener() {
    call.removeAllListeners('Engine:OnCallOutgoing');
}
/**
 * 移除监听-对端用户正在振铃
 */
function removeRemoteUserRingingListener() {
    call.removeAllListeners('Engine:OnRemoteUserRinging');
}
/**
 * 移除监听-有用户被邀请加入通话
 */
function removeRemoteUserInvited() {
    call.removeAllListeners('Engine:OnRemoteUserInvited');
}
/**
 * 移除监听-对端用户切换了媒体类型
 */
function removeRemoteUserMediaTypeChangedListener() {
    call.removeAllListeners('Engine:OnRemoteUserMediaTypeChanged');
}
/**
* 获取当前calllib本地存储信息
*
* 默认不传参数
*/
function getCurrentCallSession() {
    return call.getCurrentCallSession();
}
/**
* 挂断calllib
*
* 默认不传参数
*/
function hangup() {
    call.hangup();
}
/**
* 接收calllib
*
* 默认不传参数
*/
function accept() {
    call.accept();
}
/**
* 发起单聊呼叫
*
* @param targetId 目标ID
* @param type 呼叫类型（0:音频 1:音视频）
* @param custom 传null
*
*/
function startSingleCall(targetId, type, custom) {
    call.startSingleCall(targetId, type, custom);
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
function startGroupCall(groupId, userIds, observerUserIds, type, extra) {
    call.startGroupCall(groupId, userIds, observerUserIds, type, extra);
}
/**
* 设置音视频视图到视频组件，做音视频呈现
*
* @param userId 用户id
* @param ref ref ID 对应组件的标识
* @param type 视频视图个性化设置 0 铺满 1 自适应
*
*/
function setVideoView(userId, ref, type, isZOrderOnTop) {
    console.log('isZOrderOnTop:' + isZOrderOnTop);
    if (isZOrderOnTop === undefined) {
        call.setVideoView(userId, ref, type);
    }
    else {
        call.setVideoView(userId, ref, type, isZOrderOnTop);
    }
}
/**
* 设置callib是否开启扬声器
*
* @param isOPen 默认开启
*
*/
function enableSpeaker(isOPen) {
    call.enableSpeaker(isOPen);
}
/**
* 设置callib是否开启麦克风
*
* @param isOPen 默认开启
*
*/
function enableMicrophone(isOpen) {
    call.enableMicrophone(isOpen);
}
/**
* 切换摄像头
*
* 默认不传参数
*
*/
function switchCamera() {
    call.switchCamera();
}
/**
* 获取当前摄像头方式
*
* 默认不传参数
*/
function currentCamera() {
    return call.currentCamera();
}
/**
* 开启摄像头摄像头
*
* @param isOpen 是否开启
* @param RCCallIWCamera 对端还是本端
*
*/
function enableCamera(isOpen, camera) {
    call.enableCamera(isOpen, camera);
}

exports.accept = accept;
exports.addOnCallConnectedListener = addOnCallConnectedListener;
exports.addOnCallDisconnectedListener = addOnCallDisconnectedListener;
exports.addOnCallReceivedListener = addOnCallReceivedListener;
exports.addRemoteUserInvited = addRemoteUserInvited;
exports.addRemoteUserLeftListener = addRemoteUserLeftListener;
exports.currentCamera = currentCamera;
exports.enableCamera = enableCamera;
exports.enableMicrophone = enableMicrophone;
exports.enableSpeaker = enableSpeaker;
exports.getCurrentCallSession = getCurrentCallSession;
exports.hangup = hangup;
exports.init = init;
exports.removeCallConnectedListener = removeCallConnectedListener;
exports.removeCallDisconnectedListener = removeCallDisconnectedListener;
exports.removeCallOutgoingListener = removeCallOutgoingListener;
exports.removeCallReceivedListener = removeCallReceivedListener;
exports.removeEnableCameraListener = removeEnableCameraListener;
exports.removeErrorListener = removeErrorListener;
exports.removeRemoteUserInvited = removeRemoteUserInvited;
exports.removeRemoteUserJoinedListener = removeRemoteUserJoinedListener;
exports.removeRemoteUserLeftListener = removeRemoteUserLeftListener;
exports.removeRemoteUserMediaTypeChangedListener = removeRemoteUserMediaTypeChangedListener;
exports.removeRemoteUserRingingListener = removeRemoteUserRingingListener;
exports.removeSwitchCameraListener = removeSwitchCameraListener;
exports.setVideoView = setVideoView;
exports.startGroupCall = startGroupCall;
exports.startSingleCall = startSingleCall;
exports.switchCamera = switchCamera;
exports.unInit = unInit;
