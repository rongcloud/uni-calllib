//
//  RCRTCOtherRoomEventDelegate.h
//  RongRTCLib
//
//  Created by RongCloud on 2020/8/7.
//  Copyright © 2019 RongCloud. All rights reserved.
//

#ifndef RCRTCOtherRoomEventDelegate_h
#define RCRTCOtherRoomEventDelegate_h

#import <RongIMLibCore/RongIMLibCore.h>
#import <AVFoundation/AVFoundation.h>
#import <Foundation/Foundation.h>

@class RCRTCRemoteUser;
@class RCRTCInputStream;
@class RCRTCRoom;
@class RCRTCBaseRoom;

NS_ASSUME_NONNULL_BEGIN

/*!
 音视频通话的房间代理, 实现这个代理之后房间成员变化以及资源的变化都会通过代理通知给您
 */
@protocol RCRTCOtherRoomEventDelegate <NSObject>

@optional

/*!
 有用户加入的回调, 此时 user 不包含任何资源, 只是标记有人加入, 此时无法订阅这个人的流
 
 @param room 用户所在房间
 @param user 加入的用户信息
 @discussion
 有用户加入的回调, 此时 user 不包含任何资源, 只是标记有人加入, 此时无法订阅这个人的流
 
 @remarks 代理
 */
- (void)room:(RCRTCBaseRoom *)room didJoinUser:(RCRTCRemoteUser *)user;

/*!
 有用户离开时的回调, 当有用户离开的时候, SDK 会取消订阅这个 user, APP 无需再次调用取消订阅的接口
 
 @param room 用户所在房间
 @param user 离开的用户
 @discussion
 有用户离开时的回调, 当有用户离开的时候, SDK 会取消订阅这个 user, APP 无需再次调用取消订阅的接口
 
 @remarks 代理
 */
- (void)room:(RCRTCBaseRoom *)room didLeaveUser:(RCRTCRemoteUser *)user;

/*!
 有用户掉线时的回调, 当有用户掉线的时候, SDK 会取消订阅这个 user, APP 无需再次调用取消订阅的接口
 
 @param room 用户所在房间
 @param user 掉线的用户
 @discussion
 有用户掉线时的回调, 当有用户掉线的时候, SDK 会取消订阅这个 user, APP 无需再次调用取消订阅的接口
 
 @remarks 代理
 */
- (void)room:(RCRTCBaseRoom *)room didOfflineUser:(RCRTCRemoteUser *)user;

/*!
 流连接成功
 
 @param room 事件所在房间
 @param stream 连接成功的流
 @discussion
 流连接成功
 
 @remarks 代理
 */
- (void)room:(RCRTCBaseRoom *)room didConnectToStream:(RCRTCInputStream *)stream;

/*!
 数据流第一个关键帧到达
 
 @param room 事件所在房间
 @param stream 开始接收数据的 stream
 @discussion
 数据流第一个关键帧到达
 
 @remarks 代理
 */
- (void)room:(RCRTCBaseRoom *)room didReportFirstKeyframe:(RCRTCInputStream *)stream;

/*!
 当有远端用户发布资源时, 通过此方法回调通知上报该用户发布的流
 
 @param room 事件所在房间
 @param streams 用户发布的资源信息
 @discussion
 当有远端用户发布资源时, 通过此方法回调通知上报该用户发布的流, 其中流中有
 userID（用户 ID）,  tag（标识符）,  type（流类型）,  state（是否禁用） 等关键信息,
 可调用订阅接口, 订阅其中的流
 
 @remarks 代理
 */
- (void)room:(RCRTCBaseRoom *)room didPublishStreams:(NSArray <RCRTCInputStream *> *)streams;

/*!
 当有远端用户取消发布资源时, 通过此方法回调, SDK 默认会取消订阅这些流, 其中流中有
 userID（用户 ID）,  tag（标识符）,  type（流类型）,  state（是否禁用） 等关键信息,
 APP 可根据这些关键信息自定义化, 无需再次调用取消订阅接口
 
 @param streams 取消发布资源
 @discussion
 当有远端用户取消发布资源时, 通过此方法回调, SDK 默认会取消订阅这些流, 其中流中有
 userID（用户 ID）,  tag（标识符）,  type（流类型）,  state（是否禁用） 等关键信息,
 APP 可根据这些关键信息自定义化, 无需再次调用取消订阅接口
 
 @remarks 代理
 */
- (void)room:(RCRTCBaseRoom *)room didUnpublishStreams:(NSArray<RCRTCInputStream *> *)streams;

/*!
 音频状态改变
 
 @param stream 流信息
 @param mute 当前流是否可用
 @discussion
 音频状态改变
 
 @remarks 代理
 */
- (void)room:(RCRTCBaseRoom *)room stream:(RCRTCInputStream *)stream didAudioMute:(BOOL)mute;

/*!
 视频状态改变
 
 @param stream 流信息
 @param enable 当前流是否可用
 @discussion
 视频状态改变
 
 @remarks 代理
 */
- (void)room:(RCRTCBaseRoom *)room stream:(RCRTCInputStream *)stream didVideoEnable:(BOOL)enable;

/*!
 接收到其他人发送到 room 里的消息
 
 @param message 消息体, 参考 IMLib 中 RCMessage
 @discussion
 接收到其他人发送到 room 里的消息
 
 @remarks 代理
 */
- (void)room:(RCRTCBaseRoom *)room didReceiveMessage:(RCMessage *)message;

/*!
 如果用户调用 RCRTCEngine 的 setReconnectEnable 关闭 SDK 断线重连,
 1分钟没有链接上信令服务器, SDK 会关闭音视频连接, 释放资源,
 将用户踢出房间, 回调通知用户
 
 @param room 离开的房间
 @discussion
 如果用户调用 RCRTCEngine 的 setReconnectEnable 关闭 SDK 断线重连,
 1分钟没有链接上信令服务器, SDK 会关闭音视频连接, 释放资源,
 将用户踢出房间, 回调通知用户
 
 @remarks 代理
 */
- (void)didKickedOutOfTheRoom:(RCRTCRoom *)room DEPRECATED_MSG_ATTRIBUTE("use RCRTCEngineEventDelegate.h didKickedForDisconnect instead");

/*!
 如果用户在房间内, 此时收到服务器封禁的通知, SDK 会关闭音视频连接, 释放资源,
 将用户踢出房间, 回调通知用户
 
 @param room 离开的房间
 @discussion
 如果用户在房间内, 此时收到服务器封禁的通知, SDK 会关闭音视频连接, 释放资源,
 将用户踢出房间, 回调通知用户
 
 @remarks 代理
 */
- (void)didKickedOtherRoomByServer:(RCRTCBaseRoom *)room DEPRECATED_MSG_ATTRIBUTE("use RCRTCEngineEventDelegate.h didKickedByServer instead");

@end

NS_ASSUME_NONNULL_END

#endif /* RongRTCRoomDelegate_h */
