/*
 * RCCallUni - v0.0.1-alpha.5
 * CommitId - 401efdbb552ab94047e79269498a0168a9aad57e
 * Fri Nov 12 2021 17:17:09 GMT+0800 (中国标准时间)
 * ©2020 RongCloud, Inc. All rights reserved.
 */
class Logger {
    /**
     *
     * @param tag 标签
     */
    constructor(tag) {
        this.tag = tag;
    }
    log(str) {
        console.log(`[${this.tag}] ${new Date().toISOString()} ${str}`);
    }
}
const logger = new Logger('RCUNICallLib');

const call = uni.requireNativePlugin('RongCloud-Call-RCUniCall');
const Platform = uni.getSystemInfoSync().platform;
logger.log('已进入index.js');
/**
* 初始化 SDK，只需要调用一次
*
* calllib初始化默认不传参数
*/
function init() {
    logger.log(`init Platform->${Platform}`);
    call.init({});
}
/**
* 注销calllib
*
* 注销calllib默认不传参数
*/
function unInit() {
    logger.log(`unInit Platform->${Platform}`);
    call.unInit();
}
/**
* 添加接收监听函数
*
* @param listener 回调函数
*/
function onCallReceived(listener) {
    logger.log(`Engine:OnCallReceived 监听通话呼入 Platform->${Platform}`);
    call.addEventListener("Engine:OnCallReceived", listener);
}
/**
* 添加挂断监听函数
*
* @param listener 回调函数
*/
function onCallDisconnected(listener) {
    logger.log(`Engine:OnCallDisconnected 监听通话结束 Platform->${Platform}`);
    call.addEventListener("Engine:OnCallDisconnected", listener);
}
/**
* 添加连接监听函数
*
* @param listener 回调函数
*/
function onCallConnected(listener) {
    logger.log(`Engine:OnCallConnected 已建立通话通话接通 Platform->${Platform}`);
    call.addEventListener("Engine:OnCallConnected", listener);
}
/**
* 通话中的某一个参与者，邀请好友加入通话
*
* @param listener 回调函数
*/
function onRemoteUserInvited(listener) {
    logger.log(`Engine:OnRemoteUserInvited 通话中的某一个参与者，邀请好友加入通话  Platform->${Platform}`);
    call.addEventListener("Engine:OnRemoteUserInvited", listener);
}
/**
 * 对端用户加入了通话
 * @param listener 回调函数
 */
function onRemoteUserJoined(listener) {
    logger.log(`Engine:OnRemoteUserJoined 对端用户加入通话 Platform->${Platform}`);
    call.addEventListener("Engine:OnRemoteUserJoined", listener);
}
/**
 * 对端用户挂断 (实际测试，只在群聊时用触发)
 * @param listener 回调函数
 */
function onRemoteUserLeft(listener) {
    logger.log(`Engine:OnRemoteUserLeft 对端用户挂断(群聊触发) Platform->${Platform}`);
    call.addEventListener("Engine:OnRemoteUserLeft", listener);
}
/**
 * 电话已拨出 主叫端拨出电话后，通过回调 onCallOutgoing 通知当前 call 的详细信息
 * @param listener 回调函数
 */
function onCallOutgoing(listener) {
    logger.log(`Engine:OnCallOutgoing 电话已拨出，通知当前 call 的详细信息 Platform->${Platform}`);
    call.addEventListener("Engine:OnCallOutgoing", listener);
}
/**
 * 被叫端正在振铃，主叫端拨出电话，被叫端收到请求，发出振铃响应时监听
 * @param listener 回调函数
 */
function onRemoteUserRinging(listener) {
    logger.log(`Engine:OnRemoteUserRinging 被叫端收到请求，发出振铃响应时监听 Platform->${Platform}`);
    call.addEventListener("Engine:OnRemoteUserRinging", listener);
}
/**
 * 通话出现错误的回调
 * @param listener 回调函数
 */
function onError(listener) {
    logger.log(`Engine:OnError 通话出现错误 Platform->${Platform}`);
    call.addEventListener("Engine:OnError", listener);
}
/**
 * 对端用户切换了媒体类型
 * @param listener 回调函数
 */
function onRemoteUserMediaTypeChanged(listener) {
    logger.log(`Engine:OnRemoteUserMediaTypeChanged 对端用户切换了媒体类型 Platform->${Platform}`);
    call.addEventListener("Engine:OnRemoteUserMediaTypeChanged", listener);
}
/**
 * 邀请用户
 * @param userIds 被邀请用户id列表
 * @param observerUserIds 被邀请观察者id列表 (只能听或看，不能推流的用户)
 */
function inviteUsers(userIds, observerUserIds) {
    logger.log(`inviteUsers 邀请用户->${userIds} Platform->${Platform}`);
    call.inviteUsers(userIds, observerUserIds);
}
/**
 * 移除监听-接收到通话呼入
 */
function removeCallReceivedListener() {
    logger.log(`removeCallReceivedListener`);
    call.removeAllListeners('Engine:OnCallReceived');
}
/**
 * 移除监听-通话已接通
 */
function removeCallConnectedListener() {
    logger.log(`removeCallConnectedListener`);
    call.removeAllListeners('Engine:OnCallConnected');
}
/**
 * 移除监听-通话已结束
 * @param 挂断原因
 */
function removeCallDisconnectedListener() {
    logger.log(`removeCallDisconnectedListener`);
    call.removeAllListeners('Engine:OnCallDisconnected');
}
/**
 * 移除监听-对端用户加入了通话
 */
function removeRemoteUserJoinedListener() {
    logger.log(`removeRemoteUserJoinedListener`);
    call.removeAllListeners('Engine:OnRemoteUserJoined');
}
/**
 * 移除监听-对端用户挂断
 */
function removeRemoteUserLeftListener() {
    logger.log(`removeRemoteUserLeftListener`);
    call.removeAllListeners('Engine:OnRemoteUserLeft');
}
/**
* 移除监听-有用户被邀请加入通话
*/
function removeRemoteUserInvited() {
    logger.log(`removeRemoteUserInvited`);
    call.removeAllListeners('Engine:OnRemoteUserInvited');
}
/**
 * 移除监听-开启或关闭摄像头的回调
 */
function removeEnableCameraListener() {
    logger.log(`removeEnableCameraListener`);
    call.removeAllListeners('Engine:OnEnableCamera');
}
/**
 * 移除监听-切换摄像头回调
 */
function removeSwitchCameraListener() {
    logger.log(`removeSwitchCameraListener`);
    call.removeAllListeners('Engine:OnSwitchCamera');
}
/**
 * 移除监听-通话出现错误的回调
 */
function removeErrorListener() {
    logger.log(`removeErrorListener`);
    call.removeAllListeners('Engine:OnError');
}
/**
 * 移除监听-开始呼叫通话的回调
 */
function removeCallOutgoingListener() {
    logger.log(`removeCallOutgoingListener`);
    call.removeAllListeners('Engine:OnCallOutgoing');
}
/**
 * 移除监听-对端用户正在振铃
 */
function removeRemoteUserRingingListener() {
    logger.log(`removeRemoteUserRingingListener`);
    call.removeAllListeners('Engine:OnRemoteUserRinging');
}
/**
 * 移除监听-对端用户切换了媒体类型
 */
function removeRemoteUserMediaTypeChangedListener() {
    logger.log(`removeRemoteUserMediaTypeChangedListener`);
    call.removeAllListeners('Engine:OnRemoteUserMediaTypeChanged');
}
/**
* 获取当前calllib本地存储信息
*
* 默认不传参数
*/
function getCurrentCallSession() {
    logger.log(`getCurrentCallSession Platform->${Platform}`);
    return call.getCurrentCallSession();
}
/**
* 挂断calllib
*
* 默认不传参数
*/
function hangup() {
    logger.log(`hangup Platform->${Platform}`);
    call.hangup();
}
/**
* 接收calllib
*
* 默认不传参数
*/
function accept() {
    logger.log(`accept Platform->${Platform}`);
    call.accept();
}
/**
* 发起单聊呼叫
*
* @param targetId 目标ID
* @param type 呼叫类型（0:音频 1:音视频）
* @param extra 默认传''
*
*/
function startSingleCall(targetId, type, extra) {
    logger.log(`startSingleCall targetId->${targetId} type=>${type} extra=>${extra} Platform->${Platform}`);
    call.startSingleCall(targetId, type, extra);
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
    logger.log(`startGroupCall groupId->${groupId} userIds=>${userIds} observerUserIds=>${observerUserIds} type=>${type} extra=>${extra} Platform->${Platform}`);
    call.startGroupCall(groupId, userIds, observerUserIds, type, extra);
}
/**
* 设置预览窗口，此方法需要在视图更新渲染完成后执行
*
* @param userId 用户id
* @param ref ref ID 对应组件的标识
* @param type 视频显示模式 0 铺满 1 自适应
* @param isZOrderOnTop android only 是否置顶
*/
function setVideoView(userId, ref, type, isZOrderOnTop = false) {
    logger.log(`setVideoView userId->${userId} ref=>${ref} type=>${type} isZOrderOnTop=>${isZOrderOnTop} Platform->${Platform}`);
    Platform === 'android' ? call.setVideoView(userId, ref, type, isZOrderOnTop) : call.setVideoView(userId, ref, type);
}
/**
* 设置callib是否开启扬声器
*
* @param isOpen 默认开启
*
*/
function enableSpeaker(isOpen) {
    logger.log(`enableSpeaker isOPen->${isOpen} Platform->${Platform}`);
    call.enableSpeaker(isOpen);
}
/**
* 设置callib是否开启麦克风
*
* @param isOPen 默认开启
*
*/
function enableMicrophone(isOpen) {
    logger.log(`enableMicrophone isOPen->${isOpen} Platform->${Platform}`);
    call.enableMicrophone(isOpen);
}
/**
* 切换摄像头
*
* 默认不传参数
*
*/
function switchCamera() {
    logger.log(`switchCamera Platform->${Platform}`);
    call.switchCamera();
}
/**
* 获取当前摄像头方式
*
* 默认不传参数
*/
function currentCamera() {
    logger.log(`currentCamera Platform->${Platform}`);
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
    logger.log(`enableCamera isOpen=>${isOpen} camera=>${camera} Platform->${Platform}`);
    call.enableCamera(isOpen, camera);
}
/**
 * 修改通话类型
 * @param type
 */
function changeMediaType(type) {
    logger.log(`changeMediaType type=>${type}  Platform->${Platform}`);
    call.changeMediaType(type);
}
/**
 * 设置滤镜
 * @param filter
 */
function setBeautyFilter(filter) {
    logger.log(`setBeautyFilter filter=>${filter}  Platform->${Platform}`);
    call.setBeautyFilter(filter);
}
/**
 * 获取当前的滤镜
 * 默认不传参数
 */
function getCurrentBeautyFilter() {
    logger.log(`getCurrentBeautyFilter Platform->${Platform}`);
    return call.getCurrentBeautyFilter();
}
/**
 * 设置美颜参数
 * @param enable 默认关闭
 * @param RCCallIWBeautyOption 美颜参数
 */
function setBeautyOption(enable = false, option) {
    logger.log(`setBeautyOption enable=>${enable} option=>${option} Platform->${Platform}`);
    call.setBeautyOption(enable, option);
}
/**
 * 获取当前的美颜参数
 * 默认不传参数
 */
function getCurrentBeautyOption() {
    logger.log(`getCurrentBeautyOption Platform->${Platform}`);
    return call.getCurrentBeautyOption();
}
/**
 * 重置美颜参数和滤镜
 * 默认不传参数
 */
function resetBeauty() {
    logger.log(`resetBeauty Platform->${Platform}`);
    call.resetBeauty();
}

export { accept, changeMediaType, currentCamera, enableCamera, enableMicrophone, enableSpeaker, getCurrentBeautyFilter, getCurrentBeautyOption, getCurrentCallSession, hangup, init, inviteUsers, onCallConnected, onCallDisconnected, onCallOutgoing, onCallReceived, onError, onRemoteUserInvited, onRemoteUserJoined, onRemoteUserLeft, onRemoteUserMediaTypeChanged, onRemoteUserRinging, removeCallConnectedListener, removeCallDisconnectedListener, removeCallOutgoingListener, removeCallReceivedListener, removeEnableCameraListener, removeErrorListener, removeRemoteUserInvited, removeRemoteUserJoinedListener, removeRemoteUserLeftListener, removeRemoteUserMediaTypeChangedListener, removeRemoteUserRingingListener, removeSwitchCameraListener, resetBeauty, setBeautyFilter, setBeautyOption, setVideoView, startGroupCall, startSingleCall, switchCamera, unInit };
