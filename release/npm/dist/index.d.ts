/*
 * RCCallUni - v0.0.1-alpha.4
 * CommitId - 0af09b55b3da2bbf9e82784aef6965a260c11b32
 * Wed Oct 13 2021 17:46:11 GMT+0800 (中国标准时间)
 * ©2020 RongCloud, Inc. All rights reserved.
 */
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
    reason?: number;
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
declare function addOnCallReceivedListener(listener: (result: UniListenerResult<ReceivedListenerResult>) => void): void;
/**
* 添加挂断监听函数
*
* @param listener 回调函数
*/
declare function addOnCallDisconnectedListener(listener: (result: UniListenerResult<ListenerResultRes>) => void): void;
/**
* 添加连接监听函数
*
* @param listener 回调函数
*/
declare function addOnCallConnectedListener(listener: (result: UniListenerResult<ListenerResultRes>) => void): void;
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
* @param custom 传null
*
*/
declare function startSingleCall(targetId: string, type: number, custom: null): void;
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
* 设置音视频视图到视频组件，做音视频呈现
*
* @param userId 用户id
* @param ref ref ID 对应组件的标识
* @param type 视频视图个性化设置 0 铺满 1 自适应
*
*/
declare function setVideoView(userId: string, ref: string, type: number): void;
/**
* 设置callib是否开启会话
*
* @param isOPen 默认开启
*
*/
declare function enableSpeaker(isOPen: boolean): void;

export { accept, addOnCallConnectedListener, addOnCallDisconnectedListener, addOnCallReceivedListener, enableSpeaker, getCurrentCallSession, hangup, init, setVideoView, startGroupCall, startSingleCall, unInit };
