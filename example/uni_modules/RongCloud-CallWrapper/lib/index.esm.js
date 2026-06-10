/*
 * RCCallUni - v5.30.0
 * CommitId - cf4b2f0ffe2ae11c39bbfc216890745f254753c9
 * Tue Dec 02 2025 16:50:41 GMT+0800 (China Standard Time)
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
  RCCallIWCamera[RCCallIWCamera["NONE"] = 0] = "NONE";
  RCCallIWCamera[RCCallIWCamera["FRONT"] = 1] = "FRONT";
  RCCallIWCamera[RCCallIWCamera["BACK"] = 2] = "BACK";
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

var RCCallIWAudioCodecType;

(function (RCCallIWAudioCodecType) {
  RCCallIWAudioCodecType[RCCallIWAudioCodecType["PCMU"] = 0] = "PCMU";
  RCCallIWAudioCodecType[RCCallIWAudioCodecType["OPUS"] = 111] = "OPUS";
})(RCCallIWAudioCodecType || (RCCallIWAudioCodecType = {}));

var RCCallIWAudioSource;

(function (RCCallIWAudioSource) {
  RCCallIWAudioSource[RCCallIWAudioSource["DEFAULT"] = 0] = "DEFAULT";
  RCCallIWAudioSource[RCCallIWAudioSource["MIC"] = 1] = "MIC";
  RCCallIWAudioSource[RCCallIWAudioSource["VOICE_UPLINK"] = 2] = "VOICE_UPLINK";
  RCCallIWAudioSource[RCCallIWAudioSource["VOICE_DOWNLINK"] = 3] = "VOICE_DOWNLINK";
  RCCallIWAudioSource[RCCallIWAudioSource["VOICE_CALL"] = 4] = "VOICE_CALL";
  RCCallIWAudioSource[RCCallIWAudioSource["CAMCORDER"] = 5] = "CAMCORDER";
  RCCallIWAudioSource[RCCallIWAudioSource["VOICE_RECOGNITION"] = 6] = "VOICE_RECOGNITION";
  RCCallIWAudioSource[RCCallIWAudioSource["VOICE_COMMUNICATION"] = 7] = "VOICE_COMMUNICATION";
})(RCCallIWAudioSource || (RCCallIWAudioSource = {}));

var RCCallIWVideoProfile;

(function (RCCallIWVideoProfile) {
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_144_256"] = 0] = "PROFILE_144_256";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_240_240"] = 1] = "PROFILE_240_240";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_240_320"] = 2] = "PROFILE_240_320";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_360_480"] = 3] = "PROFILE_360_480";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_360_640"] = 4] = "PROFILE_360_640";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_480_640"] = 5] = "PROFILE_480_640";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_480_720"] = 6] = "PROFILE_480_720";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_720_1280"] = 7] = "PROFILE_720_1280";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_1080_1920"] = 8] = "PROFILE_1080_1920";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_144_256_HIGH"] = 9] = "PROFILE_144_256_HIGH";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_240_240_HIGH"] = 10] = "PROFILE_240_240_HIGH";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_240_320_HIGH"] = 11] = "PROFILE_240_320_HIGH";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_360_480_HIGH"] = 12] = "PROFILE_360_480_HIGH";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_360_640_HIGH"] = 13] = "PROFILE_360_640_HIGH";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_480_640_HIGH"] = 14] = "PROFILE_480_640_HIGH";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_480_720_HIGH"] = 15] = "PROFILE_480_720_HIGH";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_720_1280_HIGH"] = 16] = "PROFILE_720_1280_HIGH";
  RCCallIWVideoProfile[RCCallIWVideoProfile["PROFILE_1080_1920_HIGH"] = 17] = "PROFILE_1080_1920_HIGH";
})(RCCallIWVideoProfile || (RCCallIWVideoProfile = {}));

var RCCallIWCameraOrientation;

(function (RCCallIWCameraOrientation) {
  RCCallIWCameraOrientation[RCCallIWCameraOrientation["PORTRAIT"] = 0] = "PORTRAIT";
  RCCallIWCameraOrientation[RCCallIWCameraOrientation["PORTRAIT_UPSIDE_DOWN"] = 1] = "PORTRAIT_UPSIDE_DOWN";
  RCCallIWCameraOrientation[RCCallIWCameraOrientation["LANDSCAPE_RIGHT"] = 2] = "LANDSCAPE_RIGHT";
  RCCallIWCameraOrientation[RCCallIWCameraOrientation["LANDSCAPE_LEFT"] = 3] = "LANDSCAPE_LEFT";
})(RCCallIWCameraOrientation || (RCCallIWCameraOrientation = {}));

var RCCallIWVideoBitrateMode;

(function (RCCallIWVideoBitrateMode) {
  RCCallIWVideoBitrateMode[RCCallIWVideoBitrateMode["CQ"] = 0] = "CQ";
  RCCallIWVideoBitrateMode[RCCallIWVideoBitrateMode["VBR"] = 1] = "VBR";
  RCCallIWVideoBitrateMode[RCCallIWVideoBitrateMode["CBR"] = 2] = "CBR";
})(RCCallIWVideoBitrateMode || (RCCallIWVideoBitrateMode = {}));

var RCCallIWNetworkQuality;

(function (RCCallIWNetworkQuality) {
  RCCallIWNetworkQuality[RCCallIWNetworkQuality["UNKNOWN"] = 0] = "UNKNOWN";
  RCCallIWNetworkQuality[RCCallIWNetworkQuality["EXCELLENT"] = 1] = "EXCELLENT";
  RCCallIWNetworkQuality[RCCallIWNetworkQuality["GOOD"] = 2] = "GOOD";
  RCCallIWNetworkQuality[RCCallIWNetworkQuality["POOR"] = 3] = "POOR";
  RCCallIWNetworkQuality[RCCallIWNetworkQuality["BAD"] = 4] = "BAD";
  RCCallIWNetworkQuality[RCCallIWNetworkQuality["TERRIBLE"] = 5] = "TERRIBLE";
})(RCCallIWNetworkQuality || (RCCallIWNetworkQuality = {}));

var RCCallIWImportanceHW;

(function (RCCallIWImportanceHW) {
  RCCallIWImportanceHW[RCCallIWImportanceHW["NORMAL"] = 0] = "NORMAL";
  RCCallIWImportanceHW[RCCallIWImportanceHW["LOW"] = 1] = "LOW";
})(RCCallIWImportanceHW || (RCCallIWImportanceHW = {}));

var RCCallIWCallType;

(function (RCCallIWCallType) {
  RCCallIWCallType[RCCallIWCallType["SINGLE"] = 0] = "SINGLE";
  RCCallIWCallType[RCCallIWCallType["GROUP"] = 1] = "GROUP";
})(RCCallIWCallType || (RCCallIWCallType = {}));

var RCCallIWUserType;

(function (RCCallIWUserType) {
  RCCallIWUserType[RCCallIWUserType["NORMAL"] = 0] = "NORMAL";
  RCCallIWUserType[RCCallIWUserType["OBSERVER"] = 1] = "OBSERVER";
})(RCCallIWUserType || (RCCallIWUserType = {}));

const call = uni.requireNativePlugin('RongCloud-Call-RCUniCall');
const Platform = uni.getSystemInfoSync().platform;
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
function removeCallReceivedListener() {
  logger.log(`removeCallReceivedListener`);
  call.removeAllEventListeners('Engine:OnCallReceived');
}
function onCallConnected(listener) {
  logger.log(`Engine:OnCallConnected 已建立通话通话接通 Platform->${Platform}`);
  call.addEventListener("Engine:OnCallConnected", listener);
}
function removeCallConnectedListener() {
  logger.log(`removeCallConnectedListener`);
  call.removeAllEventListeners('Engine:OnCallConnected');
}
function onCallDisconnected(listener) {
  logger.log(`Engine:OnCallDisconnected 监听通话结束 Platform->${Platform}`);
  call.addEventListener("Engine:OnCallDisconnected", listener);
}
function removeCallDisconnectedListener() {
  logger.log(`removeCallDisconnectedListener`);
  call.removeAllEventListeners('Engine:OnCallDisconnected');
}
function onRemoteUserInvited(listener) {
  logger.log(`Engine:OnRemoteUserInvited 通话中的某一个参与者，邀请好友加入通话  Platform->${Platform}`);
  call.addEventListener("Engine:OnRemoteUserInvited", listener);
}
function removeRemoteUserInvited() {
  logger.log(`removeRemoteUserInvited`);
  call.removeAllEventListeners('Engine:OnRemoteUserInvited');
}
function onRemoteUserJoined(listener) {
  logger.log(`Engine:OnRemoteUserJoined 对端用户加入通话 Platform->${Platform}`);
  call.addEventListener("Engine:OnRemoteUserJoined", listener);
}
function removeRemoteUserJoinedListener() {
  logger.log(`removeRemoteUserJoinedListener`);
  call.removeAllEventListeners('Engine:OnRemoteUserJoined');
}
function onRemoteUserLeft(listener) {
  logger.log(`Engine:OnRemoteUserLeft 对端用户挂断(群聊触发) Platform->${Platform}`);
  call.addEventListener("Engine:OnRemoteUserLeft", listener);
}
function removeRemoteUserLeftListener() {
  logger.log(`removeRemoteUserLeftListener`);
  call.removeAllEventListeners('Engine:OnRemoteUserLeft');
}
function onCallOutgoing(listener) {
  logger.log(`Engine:OnCallOutgoing 电话已拨出，通知当前 call 的详细信息 Platform->${Platform}`);
  call.addEventListener("Engine:OnCallOutgoing", listener);
}
function removeCallOutgoingListener() {
  logger.log(`removeCallOutgoingListener`);
  call.removeAllEventListeners('Engine:OnCallOutgoing');
}
function onRemoteUserRinging(listener) {
  logger.log(`Engine:OnRemoteUserRinging 被叫端收到请求，发出振铃响应时监听 Platform->${Platform}`);
  call.addEventListener("Engine:OnRemoteUserRinging", listener);
}
function removeRemoteUserRingingListener() {
  logger.log(`removeRemoteUserRingingListener`);
  call.removeAllEventListeners('Engine:OnRemoteUserRinging');
}
function onError(listener) {
  logger.log(`Engine:OnError 通话出现错误 Platform->${Platform}`);
  call.addEventListener("Engine:OnError", listener);
}
function removeErrorListener() {
  logger.log(`removeErrorListener`);
  call.removeAllEventListeners('Engine:OnError');
}
function onRemoteUserMediaTypeChanged(listener) {
  logger.log(`Engine:OnRemoteUserMediaTypeChanged 对端用户切换了媒体类型 Platform->${Platform}`);
  call.addEventListener("Engine:OnRemoteUserMediaTypeChanged", listener);
}
function removeRemoteUserMediaTypeChangedListener() {
  logger.log(`removeRemoteUserMediaTypeChangedListener`);
  call.removeAllEventListeners('Engine:OnRemoteUserMediaTypeChanged');
}
function onRemoteUserCameraStateChanged(listener) {
  logger.log(`Engine:OnRemoteUserCameraStateChanged 对端用户关闭了摄像头 Platform->${Platform}`);
  call.addEventListener("Engine:OnRemoteUserCameraStateChanged", listener);
}
function removeRemoteUserCameraStateChangedListener() {
  logger.log(`removeRemoteUserCameraStateChangedListener`);
  call.removeAllEventListeners('Engine:OnRemoteUserCameraStateChanged');
}
function onRemoteUserMicrophoneStateChanged(listener) {
  logger.log(`Engine:OnRemoteUserMicrophoneStateChanged 对端用户开关麦克风 Platform->${Platform}`);
  call.addEventListener("Engine:OnRemoteUserMicrophoneStateChanged", listener);
}
function removeRemoteUserMicrophoneStateChangedListener() {
  logger.log(`removeRemoteUserMicrophoneStateChanged`);
  call.removeAllEventListeners('Engine:OnRemoteUserMicrophoneStateChanged');
}
function onNetworkQuality(listener) {
  logger.log(`Engine:OnNetworkQuality Platform->${Platform}`);
  call.addEventListener("Engine:OnNetworkQuality", listener);
}
function removeNetworkQualityListener() {
  call.removeAllEventListeners('Engine:OnNetworkQuality');
}
function onEnableCamera(listener) {
  logger.log(`Engine:OnEnableCamera Platform->${Platform}`);
  call.addEventListener("Engine:OnEnableCamera", listener);
}
function removeEnableCameraListener() {
  logger.log(`removeEnableCameraListener`);
  call.removeAllEventListeners('Engine:OnEnableCamera');
}
function onSwitchCamera(listener) {
  logger.log(`Engine:OnSwitchCamera Platform->${Platform}`);
  call.addEventListener("Engine:OnSwitchCamera", listener);
}
function removeSwitchCameraListener() {
  logger.log(`removeSwitchCameraListener`);
  call.removeAllEventListeners('Engine:OnSwitchCamera');
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
function inviteUsers(userIds, observerUserIds) {
  logger.log(`inviteUsers 邀请用户->${userIds} Platform->${Platform}`);
  call.inviteUsers(userIds, observerUserIds);
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
function setAudioConfig(config) {
  logger.log(`setAudioConfig config=>${config}  Platform->${Platform}`);
  call.setAudioConfig(config);
}
function setVideoConfig(config) {
  logger.log(`setVideoConfig config=>${config}  Platform->${Platform}`);
  call.setVideoConfig(config);
}
function setPushConfig(config, hangupPushConfig) {
  logger.log(`setPushConfig config=>${config} hangupPushConfig=>${hangupPushConfig} Platform->${Platform}`);
  call.setPushConfig(config, hangupPushConfig);
}

export { RCCallIWAudioCodecType, RCCallIWAudioSource, RCCallIWCallDisconnectedReason, RCCallIWCallType, RCCallIWCamera, RCCallIWCameraOrientation, RCCallIWImportanceHW, RCCallIWMediaType, RCCallIWNetworkQuality, RCCallIWUserType, RCCallIWVideoBitrateMode, RCCallIWVideoProfile, RCUNICallErrorCode, accept, changeMediaType, currentCamera, enableCamera, enableMicrophone, enableSpeaker, getCurrentCallSession, hangup, init, inviteUsers, onCallConnected, onCallDisconnected, onCallOutgoing, onCallReceived, onEnableCamera, onError, onNetworkQuality, onRemoteUserCameraStateChanged, onRemoteUserInvited, onRemoteUserJoined, onRemoteUserLeft, onRemoteUserMediaTypeChanged, onRemoteUserMicrophoneStateChanged, onRemoteUserRinging, onSwitchCamera, removeCallConnectedListener, removeCallDisconnectedListener, removeCallOutgoingListener, removeCallReceivedListener, removeEnableCameraListener, removeErrorListener, removeNetworkQualityListener, removeRemoteUserCameraStateChangedListener, removeRemoteUserInvited, removeRemoteUserJoinedListener, removeRemoteUserLeftListener, removeRemoteUserMediaTypeChangedListener, removeRemoteUserMicrophoneStateChangedListener, removeRemoteUserRingingListener, removeSwitchCameraListener, setAudioConfig, setPushConfig, setVideoConfig, setVideoView, startGroupCall, startSingleCall, switchCamera, unInit };
