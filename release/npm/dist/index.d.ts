/*
 * RCCallUni - v0.0.1-alpha.5
 * CommitId - 54f52e160998a5dbd0dde67929515b5123d1f288
 * Fri Nov 05 2021 16:22:08 GMT+0800 (中国标准时间)
 * ©2020 RongCloud, Inc. All rights reserved.
 */
declare enum RCCallIWCamera {
    NONE = -1,
    FRONT = 0,
    BACK = 1
}
/**
 * 通话媒体类型
 */
declare enum RCCallIWMediaType {
    /**
     * 音频通话
     */
    AUDIO = 0,
    /**
     * 视频通话
     */
    AUDIO_VIDEO = 1
}
declare enum RCCallIWCallDisconnectedReason {
    CANCEL = 0,
    REJECT = 1,
    HANGUP = 2,
    BUSY_LINE = 3,
    NO_RESPONSE = 4,
    ENGINE_UNSUPPORTED = 5,
    NETWORK_ERROR = 6,
    RESOURCE_GET_ERROR = 7,
    RESOURCE_PUBLISH_ERROR = 8,
    RESOURCE_SUBSCRIBE_ERROR = 9,
    REMOTE_CANCEL = 10,
    REMOTE_REJECT = 11,
    REMOTE_HANGUP = 12,
    REMOTE_BUSY_LINE = 13,
    REMOTE_NO_RESPONSE = 14,
    REMOTE_ENGINE_UNSUPPORTED = 15,
    REMOTE_NETWORK_ERROR = 16,
    REMOTE_RESOURCE_GET_ERROR = 17,
    REMOTE_RESOURCE_PUBLISH_ERROR = 18,
    REMOTE_RESOURCE_SUBSCRIBE_ERROR = 19,
    KICKED_BY_OTHER_CALL = 20,
    IN_OTHER_CALL = 21,
    KICKED_BY_SERVER = 22,
    REMOTE_KICKED_BY_OTHER_CALL = 23,
    REMOTE_IN_OTHER_CALL = 24,
    REMOTE_KICKED_BY_SERVER = 25,
    ACCEPT_BY_OTHER_CLIENT = 26,
    HANGUP_BY_OTHER_CLIENT = 27,
    REJECTED_BY_BLACKLIST = 28,
    SERVICE_NOT_OPENED = 29,
    DROP_TO_OBSERVER = 30,
    INIT_VIDEO_ERROR = 31,
    OTHER_DEVICE_HAD_ACCEPTED = 32,
    SERVICE_DISCONNECTED = 33
}

interface UniListenerResult<T> {
    module: string;
    type: string;
    data: T;
}
interface usersParams {
    userId: string;
    mediaType: string;
    enableCamera: string;
    userType: string;
    enableMicrophone: string;
    mediaId?: string;
}
interface ReceivedListenerResult {
    mine: usersParams;
    inviter: usersParams;
    startTime: number;
    caller: usersParams;
    mediaType: number;
    callType: number;
    endTime: number;
    extra: string;
    targetId: string;
    connectedTime: number;
    users: usersParams[];
    callId: string;
}
interface ListenerResultRes {
    reason?: RCCallIWCallDisconnectedReason;
}
interface ListenerResultData {
    userId?: string;
    user?: usersParams;
    mediaType?: string;
}

/**
* 初始化 SDK，只需要调用一次
*
* calllib初始化默认不传参数
*/
declare function init(): void;
/**
* 注销calllib
*
* 注销calllib默认不传参数
*/
declare function unInit(): void;
/**
* 添加接收监听函数
*
* @param listener 回调函数
*/
declare function onCallReceived(listener: (result: UniListenerResult<ReceivedListenerResult>) => void): void;
/**
* 添加挂断监听函数
*
* @param listener 回调函数
*/
declare function onCallDisconnected(listener: (result: UniListenerResult<ListenerResultRes>) => void): void;
/**
* 添加连接监听函数
*
* @param listener 回调函数
*/
declare function onCallConnected(listener: (result: UniListenerResult<ListenerResultRes>) => void): void;
/**
* 通话中的某一个参与者，邀请好友加入通话
*
* @param listener 回调函数
*/
declare function onRemoteUserInvited(listener: (result: UniListenerResult<ListenerResultRes>) => void): void;
/**
 * 对端用户加入了通话
 * @param listener 回调函数
 */
declare function onRemoteUserJoined(listener: (result: UniListenerResult<usersParams>) => void): void;
/**
 * 对端用户挂断 (实际测试，只在群聊时用触发)
 * @param listener 回调函数
 */
declare function onRemoteUserLeft(listener: (result: UniListenerResult<ListenerResultRes>) => void): void;
/**
 * 电话已拨出 主叫端拨出电话后，通过回调 onCallOutgoing 通知当前 call 的详细信息
 * @param listener 回调函数
 */
declare function onCallOutgoing(listener: (result: UniListenerResult<ListenerResultRes>) => void): void;
/**
 * 被叫端正在振铃，主叫端拨出电话，被叫端收到请求，发出振铃响应时监听
 * @param listener 回调函数
 */
declare function onRemoteUserRinging(listener: (result: UniListenerResult<ListenerResultRes>) => void): void;
/**
 * 通话出现错误的回调
 * @param listener 回调函数
 */
declare function onError(listener: (result: UniListenerResult<ListenerResultRes>) => void): void;
/**
 * 对端用户切换了媒体类型
 * @param listener 回调函数
 */
declare function onRemoteUserMediaTypeChanged(listener: (result: UniListenerResult<ListenerResultData>) => void): void;
/**
 * 邀请用户
 * @param userIds 被邀请用户id列表
 * @param observerUserIds 被邀请观察者id列表 (只能听或看，不能推流的用户)
 */
declare function inviteUsers(userIds: string[], observerUserIds: string[]): void;
/**
 * 移除监听-接收到通话呼入
 */
declare function removeCallReceivedListener(): void;
/**
 * 移除监听-通话已接通
 */
declare function removeCallConnectedListener(): void;
/**
 * 移除监听-通话已结束
 * @param 挂断原因
 */
declare function removeCallDisconnectedListener(): void;
/**
 * 移除监听-对端用户加入了通话
 */
declare function removeRemoteUserJoinedListener(): void;
/**
 * 移除监听-对端用户挂断
 */
declare function removeRemoteUserLeftListener(): void;
/**
* 移除监听-有用户被邀请加入通话
*/
declare function removeRemoteUserInvited(): void;
/**
 * 移除监听-开启或关闭摄像头的回调
 */
declare function removeEnableCameraListener(): void;
/**
 * 移除监听-切换摄像头回调
 */
declare function removeSwitchCameraListener(): void;
/**
 * 移除监听-通话出现错误的回调
 */
declare function removeErrorListener(): void;
/**
 * 移除监听-开始呼叫通话的回调
 */
declare function removeCallOutgoingListener(): void;
/**
 * 移除监听-对端用户正在振铃
 */
declare function removeRemoteUserRingingListener(): void;
/**
 * 移除监听-对端用户切换了媒体类型
 */
declare function removeRemoteUserMediaTypeChangedListener(): void;
/**
* 获取当前calllib本地存储信息
*
* 默认不传参数
*/
declare function getCurrentCallSession(): any;
/**
* 挂断calllib
*
* 默认不传参数
*/
declare function hangup(): void;
/**
* 接收calllib
*
* 默认不传参数
*/
declare function accept(): void;
/**
* 发起单聊呼叫
*
* @param targetId 目标ID
* @param type 呼叫类型（0:音频 1:音视频）
* @param extra 默认传''
*
*/
declare function startSingleCall(targetId: string, type: number, extra: null): void;
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
declare function startGroupCall(groupId: string, userIds: Array<string>, observerUserIds: Array<string>, type: number, extra: string): void;
/**
* 设置预览窗口，此方法需要在视图更新渲染完成后执行
*
* @param userId 用户id
* @param ref ref ID 对应组件的标识
* @param type 视频显示模式 0 铺满 1 自适应
* @param isZOrderOnTop android only 是否置顶
*/
declare function setVideoView(userId: string, ref: string, type: number, isZOrderOnTop?: boolean): void;
/**
* 设置callib是否开启扬声器
*
* @param isOpen 默认开启
*
*/
declare function enableSpeaker(isOpen: boolean): void;
/**
* 设置callib是否开启麦克风
*
* @param isOPen 默认开启
*
*/
declare function enableMicrophone(isOpen: boolean): void;
/**
* 切换摄像头
*
* 默认不传参数
*
*/
declare function switchCamera(): void;
/**
* 获取当前摄像头方式
*
* 默认不传参数
*/
declare function currentCamera(): any;
/**
* 开启摄像头摄像头
*
* @param isOpen 是否开启
* @param RCCallIWCamera 对端还是本端
*
*/
declare function enableCamera(isOpen: boolean, camera: RCCallIWCamera): void;
/**
 * 修改通话类型
 * @param type
 */
declare function changeMediaType(type: RCCallIWMediaType): void;

export { accept, changeMediaType, currentCamera, enableCamera, enableMicrophone, enableSpeaker, getCurrentCallSession, hangup, init, inviteUsers, onCallConnected, onCallDisconnected, onCallOutgoing, onCallReceived, onError, onRemoteUserInvited, onRemoteUserJoined, onRemoteUserLeft, onRemoteUserMediaTypeChanged, onRemoteUserRinging, removeCallConnectedListener, removeCallDisconnectedListener, removeCallOutgoingListener, removeCallReceivedListener, removeEnableCameraListener, removeErrorListener, removeRemoteUserInvited, removeRemoteUserJoinedListener, removeRemoteUserLeftListener, removeRemoteUserMediaTypeChangedListener, removeRemoteUserRingingListener, removeSwitchCameraListener, setVideoView, startGroupCall, startSingleCall, switchCamera, unInit };
