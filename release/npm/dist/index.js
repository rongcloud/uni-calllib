/*
 * RCCallUni - v0.0.1-alpha.5
 * CommitId - 0ed6fe865de7c6b6a2a3e43c6be5afa83765fd65
 * Thu Nov 04 2021 18:07:53 GMT+0800 (中国标准时间)
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
function onCallReceived(listener) {
    call.addEventListener("Engine:OnCallReceived", listener);
}
/**
* 添加挂断监听函数
*
* @param listener 回调函数
*/
function onCallDisconnected(listener) {
    call.addEventListener("Engine:OnCallDisconnected", listener);
}
/**
* 添加连接监听函数
*
* @param listener 回调函数
*/
function onCallConnected(listener) {
    call.addEventListener("Engine:OnCallConnected", listener);
}
/**
* 添加有用户被邀请加入通话监听函数
*
* @param listener 回调函数
*/
function onRemoteUserInvited(listener) {
    call.addEventListener("Engine:OnRemoteUserInvited", listener);
}
/**
 * 对端用户加入了通话
 * @param listener 回调函数
 */
function onRemoteUserJoined(listener) {
    call.addEventListener("Engine:OnRemoteUserJoined", listener);
}
/**
 * 对端用户挂断 (实际测试，只在群聊时用触发)
 * @param listener 回调函数
 */
function onRemoteUserLeft(listener) {
    call.addEventListener("Engine:OnRemoteUserLeft", listener);
}
/**
 * 电话已拨出 主叫端拨出电话后，通过回调 onCallOutgoing 通知当前 call 的详细信息
 * @param listener 回调函数
 */
function onCallOutgoing(listener) {
    call.addEventListener("Engine:OnCallOutgoing", listener);
}
/**
 * 被叫端正在振铃，主叫端拨出电话，被叫端收到请求，发出振铃响应时监听
 * @param listener 回调函数
 */
function onRemoteUserRinging(listener) {
    call.addEventListener("Engine:OnRemoteUserRinging", listener);
}
/**
 * 通话出现错误的回调
 * @param listener 回调函数
 */
function onError(listener) {
    call.addEventListener("Engine:OnError", listener);
}
/**
 * 对端用户切换了媒体类型
 * @param listener 回调函数
 */
function onRemoteUserMediaTypeChanged(listener) {
    call.addEventListener("Engine:OnRemoteUserMediaTypeChanged", listener);
}
/**
 * 邀请用户
 * @param userIds 被邀请用户id列表
 * @param observerUserIds 被邀请观察者id列表 (只能听或看，不能推流的用户)
 */
function inviteUsers(userIds, observerUserIds) {
    call.inviteUsers(userIds, observerUserIds);
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
* 移除监听-有用户被邀请加入通话
*/
function removeRemoteUserInvited() {
    call.removeAllListeners('Engine:OnRemoteUserInvited');
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
* 设置预览窗口，此方法需要在视图更新渲染完成后执行
*
* @param userId 用户id
* @param ref ref ID 对应组件的标识
* @param type 视频视图个性化设置 0 铺满 1 自适应
* @param isZOrderOnTop android only 是否置顶
*
*/
function setVideoView(userId, ref, type, isZOrderOnTop) {
    let userAgent = navigator.userAgent;
    console.log(navigator);
    console.log(userAgent);
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
/**
 * 修改通话类型
 * @param type
 */
function changeMediaType(type) {
    call.changeMediaType(type);
}

exports.accept = accept;
exports.changeMediaType = changeMediaType;
exports.currentCamera = currentCamera;
exports.enableCamera = enableCamera;
exports.enableMicrophone = enableMicrophone;
exports.enableSpeaker = enableSpeaker;
exports.getCurrentCallSession = getCurrentCallSession;
exports.hangup = hangup;
exports.init = init;
exports.inviteUsers = inviteUsers;
exports.onCallConnected = onCallConnected;
exports.onCallDisconnected = onCallDisconnected;
exports.onCallOutgoing = onCallOutgoing;
exports.onCallReceived = onCallReceived;
exports.onError = onError;
exports.onRemoteUserInvited = onRemoteUserInvited;
exports.onRemoteUserJoined = onRemoteUserJoined;
exports.onRemoteUserLeft = onRemoteUserLeft;
exports.onRemoteUserMediaTypeChanged = onRemoteUserMediaTypeChanged;
exports.onRemoteUserRinging = onRemoteUserRinging;
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
