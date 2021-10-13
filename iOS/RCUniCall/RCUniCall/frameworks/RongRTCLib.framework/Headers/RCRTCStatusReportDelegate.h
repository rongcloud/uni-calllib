//
//  RCRTCStatusReportDelegate.h
//  RongRTCLib
//
//  Created by RongCloud on 2019/6/12.
//  Copyright © 2019 RongCloud. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@class RCRTCStatusForm;

@protocol RCRTCStatusReportDelegate <NSObject>

/*!
 汇报 SDK 状态数据

 @param form 状态表单对象
 @discussion
 汇报 SDK 状态数据
 
 @remarks 代理
 */
- (void)didReportStatusForm:(RCRTCStatusForm*)form;

@end

NS_ASSUME_NONNULL_END
