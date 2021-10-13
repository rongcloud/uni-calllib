//
//  RCRTCConfig.h
//  RongRTCLib
//
//  Created by RongCloud on 2020/8/12.
//  Copyright © 2020 RongCloud. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface RCRTCConfig : NSObject

/*!
  默认 YES：断网后一直保持重连； NO：断网后 ping 4 次(约 40s)失败后退出音视频房间
 */
@property (nonatomic, assign) BOOL isEnableAutoReconnect;

/*!
  设置房间统计信息的回调间隔
  单位毫秒, 默认1000ms(1s)。 注意 interval 值太小会影响 SDK 性能，如果小于 100 配置无法生效
 */
@property (nonatomic, assign) NSUInteger statusReportInterval;

/*!
  默认 NO：是否开启媒体流加密功能（SRTP）
  特别注意：开启该功能会对性能和用户体验有一定影响，如果没有该需求请不要打开。
 */
@property (nonatomic, assign) BOOL enableSRTP;

@end

NS_ASSUME_NONNULL_END
