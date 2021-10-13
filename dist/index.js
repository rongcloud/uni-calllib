/*
 * RCCallUni - v0.0.1-alpha.4
 * CommitId - 0af09b55b3da2bbf9e82784aef6965a260c11b32
 * Wed Oct 13 2021 17:46:11 GMT+0800 (中国标准时间)
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
function setVideoView(userId, ref, type) {
    call.setVideoView(userId, ref, type);
}
/**
* 设置callib是否开启会话
*
* @param isOPen 默认开启
*
*/
function enableSpeaker(isOPen) {
    call.enableSpeaker(isOPen);
}

exports.accept = accept;
exports.addOnCallConnectedListener = addOnCallConnectedListener;
exports.addOnCallDisconnectedListener = addOnCallDisconnectedListener;
exports.addOnCallReceivedListener = addOnCallReceivedListener;
exports.enableSpeaker = enableSpeaker;
exports.getCurrentCallSession = getCurrentCallSession;
exports.hangup = hangup;
exports.init = init;
exports.setVideoView = setVideoView;
exports.startGroupCall = startGroupCall;
exports.startSingleCall = startSingleCall;
exports.unInit = unInit;
