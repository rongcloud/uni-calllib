/*
 * RCCallUni - v5.1.14-release
 * CommitId - 17c2a6b1b412675a5621306907a6abd72c5ccdb3
 * Wed Dec 22 2021 16:12:08 GMT+0800 (中国标准时间)
 * ©2020 RongCloud, Inc. All rights reserved.
 */
class Logger {
  tag;

  constructor(tag) {
    this.tag = tag;
  }

  log(str) {
    console.log(`[${this.tag}] ${new Date().toISOString()} ${str}`);
  }

}
const logger = new Logger('RCUNICallLib');

const call = uni.requireNativePlugin('RongCloud-IM-RCUniIM');
const Platform = uni.getSystemInfoSync().platform;
logger.log('已进入index.js');
function init() {
  logger.log(`init Platform->${Platform}`);
  call.init({});
}
function unInit() {
  logger.log(`unInit Platform->${Platform}`);
  call.unInit();
}
function onCallReceived(listener) {
  logger.log(`Engine:OnCallReceived 监听通话呼入 Platform->${Platform}`);
  call.addEventListener("Engine:OnCallReceived", listener);
}
function onCallDisconnected(listener) {
  logger.log(`Engine:OnCallDisconnected 监听通话结束 Platform->${Platform}`);
  call.addEventListener("Engine:OnCallDisconnected", listener);
}
function onCallConnected(listener) {
  logger.log(`Engine:OnCallConnected 已建立通话通话接通 Platform->${Platform}`);
  call.addEventListener("Engine:OnCallConnected", listener);
}
function onRemoteUserInvited(listener) {
  logger.log(`Engine:OnRemoteUserInvited 通话中的某一个参与者，邀请好友加入通话  Platform->${Platform}`);
  call.addEventListener("Engine:OnRemoteUserInvited", listener);
}
function onRemoteUserJoined(listener) {
  logger.log(`Engine:OnRemoteUserJoined 对端用户加入通话 Platform->${Platform}`);
  call.addEventListener("Engine:OnRemoteUserJoined", listener);
}
function onRemoteUserLeft(listener) {
  logger.log(`Engine:OnRemoteUserLeft 对端用户挂断(群聊触发) Platform->${Platform}`);
  call.addEventListener("Engine:OnRemoteUserLeft", listener);
}
function onCallOutgoing(listener) {
  logger.log(`Engine:OnCallOutgoing 电话已拨出，通知当前 call 的详细信息 Platform->${Platform}`);
  call.addEventListener("Engine:OnCallOutgoing", listener);
}
function onRemoteUserRinging(listener) {
  logger.log(`Engine:OnRemoteUserRinging 被叫端收到请求，发出振铃响应时监听 Platform->${Platform}`);
  call.addEventListener("Engine:OnRemoteUserRinging", listener);
}
function onError(listener) {
  logger.log(`Engine:OnError 通话出现错误 Platform->${Platform}`);
  call.addEventListener("Engine:OnError", listener);
}
function onRemoteUserMediaTypeChanged(listener) {
  logger.log(`Engine:OnRemoteUserMediaTypeChanged 对端用户切换了媒体类型 Platform->${Platform}`);
  call.addEventListener("Engine:OnRemoteUserMediaTypeChanged", listener);
}
function onRemoteUserCameraStateChanged(listener) {
  logger.log(`Engine:OnRemoteUserCameraStateChanged 对端用户关闭了摄像头 Platform->${Platform}`);
  call.addEventListener("Engine:OnRemoteUserCameraStateChanged", listener);
}
function onRemoteUserMicrophoneStateChanged(listener) {
  logger.log(`Engine:OnRemoteUserMicrophoneStateChanged 对端用户关闭了麦克风 Platform->${Platform}`);
  call.addEventListener("Engine:OnRemoteUserMicrophoneStateChanged", listener);
}
function inviteUsers(userIds, observerUserIds) {
  logger.log(`inviteUsers 邀请用户->${userIds} Platform->${Platform}`);
  call.inviteUsers(userIds, observerUserIds);
}
function removeCallReceivedListener() {
  logger.log(`removeCallReceivedListener`);
  call.removeAllEventListeners('Engine:OnCallReceived');
}
function removeCallConnectedListener() {
  logger.log(`removeCallConnectedListener`);
  call.removeAllEventListeners('Engine:OnCallConnected');
}
function removeCallDisconnectedListener() {
  logger.log(`removeCallDisconnectedListener`);
  call.removeAllEventListeners('Engine:OnCallDisconnected');
}
function removeRemoteUserJoinedListener() {
  logger.log(`removeRemoteUserJoinedListener`);
  call.removeAllEventListeners('Engine:OnRemoteUserJoined');
}
function removeRemoteUserLeftListener() {
  logger.log(`removeRemoteUserLeftListener`);
  call.removeAllEventListeners('Engine:OnRemoteUserLeft');
}
function removeRemoteUserInvited() {
  logger.log(`removeRemoteUserInvited`);
  call.removeAllEventListeners('Engine:OnRemoteUserInvited');
}
function removeEnableCameraListener() {
  logger.log(`removeEnableCameraListener`);
  call.removeAllEventListeners('Engine:OnEnableCamera');
}
function removeSwitchCameraListener() {
  logger.log(`removeSwitchCameraListener`);
  call.removeAllEventListeners('Engine:OnSwitchCamera');
}
function removeErrorListener() {
  logger.log(`removeErrorListener`);
  call.removeAllEventListeners('Engine:OnError');
}
function removeCallOutgoingListener() {
  logger.log(`removeCallOutgoingListener`);
  call.removeAllEventListeners('Engine:OnCallOutgoing');
}
function removeRemoteUserRingingListener() {
  logger.log(`removeRemoteUserRingingListener`);
  call.removeAllEventListeners('Engine:OnRemoteUserRinging');
}
function removeRemoteUserMediaTypeChangedListener() {
  logger.log(`removeRemoteUserMediaTypeChangedListener`);
  call.removeAllEventListeners('Engine:OnRemoteUserMediaTypeChanged');
}
function getCurrentCallSession() {
  logger.log(`getCurrentCallSession Platform->${Platform}`);
  return call.getCurrentCallSession();
}
function hangup() {
  logger.log(`hangup Platform->${Platform}`);
  call.hangup();
}
function accept() {
  logger.log(`accept Platform->${Platform}`);
  call.accept();
}
function startSingleCall(targetId, type, extra) {
  logger.log(`startSingleCall targetId->${targetId} type=>${type} extra=>${extra} Platform->${Platform}`);
  call.startSingleCall(targetId, type, extra);
}
function startGroupCall(groupId, userIds, observerUserIds, type, extra) {
  logger.log(`startGroupCall groupId->${groupId} userIds=>${userIds} observerUserIds=>${observerUserIds} type=>${type} extra=>${extra} Platform->${Platform}`);
  call.startGroupCall(groupId, userIds, observerUserIds, type, extra);
}
function setVideoView(userId, ref, type, isZOrderOnTop = false) {
  logger.log(`setVideoView userId->${userId} ref=>${ref} type=>${type} isZOrderOnTop=>${isZOrderOnTop} Platform->${Platform}`);
  Platform === 'android' ? call.setVideoView(userId, ref, type, isZOrderOnTop) : call.setVideoView(userId, ref, type);
}
function enableSpeaker(isOpen) {
  logger.log(`enableSpeaker isOPen->${isOpen} Platform->${Platform}`);
  call.enableSpeaker(isOpen);
}
function enableMicrophone(isOpen) {
  logger.log(`enableMicrophone isOPen->${isOpen} Platform->${Platform}`);
  call.enableMicrophone(isOpen);
}
function switchCamera() {
  logger.log(`switchCamera Platform->${Platform}`);
  call.switchCamera();
}
function currentCamera() {
  logger.log(`currentCamera Platform->${Platform}`);
  return call.currentCamera();
}
function enableCamera(isOpen, camera) {
  logger.log(`enableCamera isOpen=>${isOpen} camera=>${camera} Platform->${Platform}`);
  call.enableCamera(isOpen, camera);
}
function changeMediaType(type) {
  logger.log(`changeMediaType type=>${type}  Platform->${Platform}`);
  call.changeMediaType(type);
}
function setBeautyFilter(filter) {
  logger.log(`setBeautyFilter filter=>${filter}  Platform->${Platform}`);
  call.setBeautyFilter(filter);
}
function getCurrentBeautyFilter() {
  logger.log(`getCurrentBeautyFilter Platform->${Platform}`);
  return call.getCurrentBeautyFilter();
}
function setBeautyOption(enable = false, option) {
  logger.log(`setBeautyOption enable=>${enable} option=>${option} Platform->${Platform}`);
  call.setBeautyOption(enable, option);
}
function getCurrentBeautyOption() {
  logger.log(`getCurrentBeautyOption Platform->${Platform}`);
  return call.getCurrentBeautyOption();
}
function resetBeauty() {
  logger.log(`resetBeauty Platform->${Platform}`);
  call.resetBeauty();
}

export { accept, changeMediaType, currentCamera, enableCamera, enableMicrophone, enableSpeaker, getCurrentBeautyFilter, getCurrentBeautyOption, getCurrentCallSession, hangup, init, inviteUsers, onCallConnected, onCallDisconnected, onCallOutgoing, onCallReceived, onError, onRemoteUserCameraStateChanged, onRemoteUserInvited, onRemoteUserJoined, onRemoteUserLeft, onRemoteUserMediaTypeChanged, onRemoteUserMicrophoneStateChanged, onRemoteUserRinging, removeCallConnectedListener, removeCallDisconnectedListener, removeCallOutgoingListener, removeCallReceivedListener, removeEnableCameraListener, removeErrorListener, removeRemoteUserInvited, removeRemoteUserJoinedListener, removeRemoteUserLeftListener, removeRemoteUserMediaTypeChangedListener, removeRemoteUserRingingListener, removeSwitchCameraListener, resetBeauty, setBeautyFilter, setBeautyOption, setVideoView, startGroupCall, startSingleCall, switchCamera, unInit };
