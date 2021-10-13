//
//  RCRTCEngineDelegate.h
//  RongRTCLib
//
//  Created by RongCloud on 2019/1/2.
//  Copyright © 2019 RongCloud. All rights reserved.
//

#import <Foundation/Foundation.h>
@class RCRTCBaseRoom;

NS_ASSUME_NONNULL_BEGIN

/*!
 音视频引擎代理
 */
@protocol RCRTCEngineEventDelegate <NSObject>

@optional
/*!
 被 SDK 踢出房间通知
 
 @param roomId 离开的房间
 @param reason 被踢出房间原因
 @discussion
 如果用户在房间内, 此时由于某种原因被踢离开房间, SDK 会关闭音视频连接, 释放资源, 将用户踢出房间, 回调通知用户，
 如果用户不在房间内，roomId 为 nil，只释放资源，回调通知用户
 
 @remarks 代理
 */
- (void)didKicked:(NSString *)roomId reason:(RCRTCKickedReason)reason;

- (void)didKicked:(NSString *)roomId Reason:(RCRTCKickedReason)reason DEPRECATED_MSG_ATTRIBUTE("use didKicked:reason: instead");

@end

NS_ASSUME_NONNULL_END
