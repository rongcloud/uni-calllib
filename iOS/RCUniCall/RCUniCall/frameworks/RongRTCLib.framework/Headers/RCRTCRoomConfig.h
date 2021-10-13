//
//  RCRTCRoomConfig.h
//  RongRTCLib
//
//  Created by RongCloud on 2019/5/21.
//  Copyright © 2019 RongCloud. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCRTCLibDefine.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCRTCRoomConfig : NSObject

/*!
 加入房间场景
 */
@property (nonatomic, assign) RCRTCRoomType roomType;

/*!
 直播类型，仅在 RCRTCRoomType 为 RCRTCRoomTypeLive 时可用，选择当前为音频直播还是音视频直播
 */
@property (nonatomic, assign) RCRTCLiveType liveType;

/*!
 直播角色类型，仅在 RCRTCRoomType 为 RCRTCRoomTypeLive 时可用，默认是RCRTCLiveRoleTypeBroadcaster 类型
  
 @discussion add from 5.1.0
 */
@property (nonatomic, assign) RCRTCLiveRoleType roleType;


@end

NS_ASSUME_NONNULL_END
