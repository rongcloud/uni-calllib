/*
 * RCCallUni - v5.1.14-release.1
 * CommitId - a184e82065a309fc565be987321c44e9da02abbb
 * Thu Jan 06 2022 16:03:36 GMT+0800 (中国标准时间)
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

var RCCallIWCamera;

(function (RCCallIWCamera) {
  RCCallIWCamera[RCCallIWCamera["NONE"] = -1] = "NONE";
  RCCallIWCamera[RCCallIWCamera["FRONT"] = 0] = "FRONT";
  RCCallIWCamera[RCCallIWCamera["BACK"] = 1] = "BACK";
})(RCCallIWCamera || (RCCallIWCamera = {}));

var RCCallIWMediaType;

(function (RCCallIWMediaType) {
  RCCallIWMediaType[RCCallIWMediaType["AUDIO"] = 0] = "AUDIO";
  RCCallIWMediaType[RCCallIWMediaType["AUDIO_VIDEO"] = 1] = "AUDIO_VIDEO";
})(RCCallIWMediaType || (RCCallIWMediaType = {}));

var RCUNICallErrorCode;

(function (RCUNICallErrorCode) {
  RCUNICallErrorCode[RCUNICallErrorCode["SUCCESS"] = 0] = "SUCCESS";
  RCUNICallErrorCode[RCUNICallErrorCode["ENGINE_NOT_FOUND"] = 1] = "ENGINE_NOT_FOUND";
  RCUNICallErrorCode[RCUNICallErrorCode["NETWORK_UNAVAILABLE"] = 2] = "NETWORK_UNAVAILABLE";
  RCUNICallErrorCode[RCUNICallErrorCode["ONE_CALL_EXISTED"] = 3] = "ONE_CALL_EXISTED";
  RCUNICallErrorCode[RCUNICallErrorCode["OPERATION_UNAVAILABLE"] = 4] = "OPERATION_UNAVAILABLE";
  RCUNICallErrorCode[RCUNICallErrorCode["INVALID_PARAM"] = 5] = "INVALID_PARAM";
  RCUNICallErrorCode[RCUNICallErrorCode["NETWORK_UNSTABLE"] = 6] = "NETWORK_UNSTABLE";
  RCUNICallErrorCode[RCUNICallErrorCode["MEDIA_REQUEST_FAILED"] = 7] = "MEDIA_REQUEST_FAILED";
  RCUNICallErrorCode[RCUNICallErrorCode["MEDIA_SERVER_NOT_READY"] = 8] = "MEDIA_SERVER_NOT_READY";
  RCUNICallErrorCode[RCUNICallErrorCode["MEDIA_SERVER_NOT_INITIALIZED"] = 9] = "MEDIA_SERVER_NOT_INITIALIZED";
  RCUNICallErrorCode[RCUNICallErrorCode["MEDIA_REQUEST_TIMEOUT"] = 10] = "MEDIA_REQUEST_TIMEOUT";
  RCUNICallErrorCode[RCUNICallErrorCode["MEDIA_UNKOWN_ERROR"] = 11] = "MEDIA_UNKOWN_ERROR";
  RCUNICallErrorCode[RCUNICallErrorCode["MEDIA_KICKED_BY_SERVER_ERROR"] = 12] = "MEDIA_KICKED_BY_SERVER_ERROR";
  RCUNICallErrorCode[RCUNICallErrorCode["MEDIA_SERVER_CLOSED_ERROR"] = 13] = "MEDIA_SERVER_CLOSED_ERROR";
  RCUNICallErrorCode[RCUNICallErrorCode["MEDIA_SERVER_PUBLISH_ERROR"] = 14] = "MEDIA_SERVER_PUBLISH_ERROR";
  RCUNICallErrorCode[RCUNICallErrorCode["MEDIA_SERVER_SUBSCRIBE_ERROR"] = 15] = "MEDIA_SERVER_SUBSCRIBE_ERROR";
  RCUNICallErrorCode[RCUNICallErrorCode["MEDIA_JOIN_ROOM_REFUSE_ERROR"] = 16] = "MEDIA_JOIN_ROOM_REFUSE_ERROR";
})(RCUNICallErrorCode || (RCUNICallErrorCode = {}));

var RCCallIWCallDisconnectedReason;

(function (RCCallIWCallDisconnectedReason) {
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["CANCEL"] = 0] = "CANCEL";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REJECT"] = 1] = "REJECT";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["HANGUP"] = 2] = "HANGUP";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["BUSY_LINE"] = 3] = "BUSY_LINE";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["NO_RESPONSE"] = 4] = "NO_RESPONSE";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["ENGINE_UNSUPPORTED"] = 5] = "ENGINE_UNSUPPORTED";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["NETWORK_ERROR"] = 6] = "NETWORK_ERROR";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["RESOURCE_GET_ERROR"] = 7] = "RESOURCE_GET_ERROR";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["RESOURCE_PUBLISH_ERROR"] = 8] = "RESOURCE_PUBLISH_ERROR";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["RESOURCE_SUBSCRIBE_ERROR"] = 9] = "RESOURCE_SUBSCRIBE_ERROR";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REMOTE_CANCEL"] = 10] = "REMOTE_CANCEL";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REMOTE_REJECT"] = 11] = "REMOTE_REJECT";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REMOTE_HANGUP"] = 12] = "REMOTE_HANGUP";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REMOTE_BUSY_LINE"] = 13] = "REMOTE_BUSY_LINE";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REMOTE_NO_RESPONSE"] = 14] = "REMOTE_NO_RESPONSE";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REMOTE_ENGINE_UNSUPPORTED"] = 15] = "REMOTE_ENGINE_UNSUPPORTED";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REMOTE_NETWORK_ERROR"] = 16] = "REMOTE_NETWORK_ERROR";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REMOTE_RESOURCE_GET_ERROR"] = 17] = "REMOTE_RESOURCE_GET_ERROR";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REMOTE_RESOURCE_PUBLISH_ERROR"] = 18] = "REMOTE_RESOURCE_PUBLISH_ERROR";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REMOTE_RESOURCE_SUBSCRIBE_ERROR"] = 19] = "REMOTE_RESOURCE_SUBSCRIBE_ERROR";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["KICKED_BY_OTHER_CALL"] = 20] = "KICKED_BY_OTHER_CALL";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["IN_OTHER_CALL"] = 21] = "IN_OTHER_CALL";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["KICKED_BY_SERVER"] = 22] = "KICKED_BY_SERVER";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REMOTE_KICKED_BY_OTHER_CALL"] = 23] = "REMOTE_KICKED_BY_OTHER_CALL";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REMOTE_IN_OTHER_CALL"] = 24] = "REMOTE_IN_OTHER_CALL";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REMOTE_KICKED_BY_SERVER"] = 25] = "REMOTE_KICKED_BY_SERVER";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["ACCEPT_BY_OTHER_CLIENT"] = 26] = "ACCEPT_BY_OTHER_CLIENT";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["HANGUP_BY_OTHER_CLIENT"] = 27] = "HANGUP_BY_OTHER_CLIENT";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["REJECTED_BY_BLACKLIST"] = 28] = "REJECTED_BY_BLACKLIST";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["SERVICE_NOT_OPENED"] = 29] = "SERVICE_NOT_OPENED";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["DROP_TO_OBSERVER"] = 30] = "DROP_TO_OBSERVER";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["INIT_VIDEO_ERROR"] = 31] = "INIT_VIDEO_ERROR";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["OTHER_DEVICE_HAD_ACCEPTED"] = 32] = "OTHER_DEVICE_HAD_ACCEPTED";
  RCCallIWCallDisconnectedReason[RCCallIWCallDisconnectedReason["SERVICE_DISCONNECTED"] = 33] = "SERVICE_DISCONNECTED";
})(RCCallIWCallDisconnectedReason || (RCCallIWCallDisconnectedReason = {}));

var RCCallIWBeautyFilterType;

(function (RCCallIWBeautyFilterType) {
  RCCallIWBeautyFilterType[RCCallIWBeautyFilterType["NONE"] = 0] = "NONE";
  RCCallIWBeautyFilterType[RCCallIWBeautyFilterType["ESTHETIC"] = 1] = "ESTHETIC";
  RCCallIWBeautyFilterType[RCCallIWBeautyFilterType["FRESH"] = 2] = "FRESH";
  RCCallIWBeautyFilterType[RCCallIWBeautyFilterType["ROMANTIC"] = 3] = "ROMANTIC";
})(RCCallIWBeautyFilterType || (RCCallIWBeautyFilterType = {}));

const call = uni.requireNativePlugin('RongCloud-Call-RCUniCall');
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

export { RCCallIWBeautyFilterType, RCCallIWCallDisconnectedReason, RCCallIWCamera, RCCallIWMediaType, RCUNICallErrorCode, accept, changeMediaType, currentCamera, enableCamera, enableMicrophone, enableSpeaker, getCurrentBeautyFilter, getCurrentBeautyOption, getCurrentCallSession, hangup, init, inviteUsers, onCallConnected, onCallDisconnected, onCallOutgoing, onCallReceived, onError, onRemoteUserCameraStateChanged, onRemoteUserInvited, onRemoteUserJoined, onRemoteUserLeft, onRemoteUserMediaTypeChanged, onRemoteUserMicrophoneStateChanged, onRemoteUserRinging, removeCallConnectedListener, removeCallDisconnectedListener, removeCallOutgoingListener, removeCallReceivedListener, removeEnableCameraListener, removeErrorListener, removeRemoteUserInvited, removeRemoteUserJoinedListener, removeRemoteUserLeftListener, removeRemoteUserMediaTypeChangedListener, removeRemoteUserRingingListener, removeSwitchCameraListener, resetBeauty, setBeautyFilter, setBeautyOption, setVideoView, startGroupCall, startSingleCall, switchCamera, unInit };
