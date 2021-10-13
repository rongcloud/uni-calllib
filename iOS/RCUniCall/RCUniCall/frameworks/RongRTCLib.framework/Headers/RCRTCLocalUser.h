//
//  RCRTCLocalUser.h
//  RongRTCLib
//
//  Created by RongCloud on 2019/1/9.
//  Copyright © 2019 RongCloud. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <AvailabilityMacros.h>

#import "RCRTCUser.h"
#import "RCRTCCodeDefine.h"

NS_ASSUME_NONNULL_BEGIN

@class RCRTCOutputStream;
@class RCRTCInputStream;
@class RCMessageContent;

/*!
 音视频本地用户（当前登陆者）
 */
@interface RCRTCLocalUser : RCRTCUser

/*!
 本地用户发布的音视频流
 */
@property (nonatomic, copy, readonly) NSArray<RCRTCOutputStream *> *localStreams DEPRECATED_MSG_ATTRIBUTE("use streams property instead");

/*!
 本地用户发布的音视频流
 */
@property (nonatomic, copy, readonly) NSArray<RCRTCOutputStream *> *streams;

#pragma mark - 用户属性
/*!
 设置全局用户属性
 
 @param attributeValue 属性值
 @param key 属性名称
 @param message 是否在设置属性的时候携带消息内容，传空则不往房间中发送消息（也不会收到有用户属性变换的回调）
 @param completion 设置完成回调
 @discussion
 设置用户属性
 
 @remarks 房间管理
 */
- (void)setAttributeValue:(NSString *)attributeValue
                   forKey:(NSString *)key
                  message:(RCMessageContent *)message
               completion:(RCRTCOperationCallback)completion DEPRECATED_MSG_ATTRIBUTE("use setAttribute:forKey:message:completion: API instead");

/*!
 设置全局用户属性
 
 @param attributeValue 属性值
 @param key 属性名称
 @param message 是否在设置属性的时候携带消息内容，传空则不往房间中发送消息（也不会收到有用户属性变换的回调）
 @param completion 设置完成回调
 @discussion
 设置用户属性
 
 @remarks 房间管理
 */
- (void)setAttribute:(NSString *)attributeValue
                   forKey:(NSString *)key
                  message:(RCMessageContent *)message
               completion:(RCRTCOperationCallback)completion;

/*!
 删除全局用户属性
 
 @param attributeKeys 属性名称数组
 @param message 是否在设置属性的时候携带消息内容，传空则不往房间中发送消息
 @param completion 删除完成回调
 @discussion
 删除用户属性
 
 @remarks 房间管理
 */
- (void)deleteAttributes:(NSArray <NSString *> *)attributeKeys
                 message:(RCMessageContent *)message
              completion:(RCRTCOperationCallback)completion;

/*!
 获取全局用户属性
 
 @param attributeKeys 属性名称
 @param completion 获取结果回调
 @discussion
 获取用户属性
 
 @remarks 房间管理
 */
- (void)getAttributes:(NSArray <NSString *> *)attributeKeys
           completion:(RCRTCAttributeOperationCallback)completion;

#pragma mark - 发布资源
/*!
 发布本地默认音视频流
 
 @param completion 发布完成回调
 @discussion
 发布默认音视频流
 
 @remarks 资源管理
 */
- (void)publishDefaultStreams:(RCRTCOperationCallback)completion;

/*!
 发布本地指定音视频流
 
 @param stream 发布的音视频流
 @param completion 发布的音视频流结果
 @discussion
 发布音视频流
 
 @remarks 资源管理
 */
- (void)publishStream:(nonnull RCRTCOutputStream *)stream
           completion:(nonnull RCRTCOperationCallback)completion;

/*!
 发布多路本地指定音视频流
 
 @param streams 发布音视频流集合
 @param completion 发布的音视频流结果
 @discussion
 发布多路音视频流
 
 @remarks 资源管理
 */
- (void)publishStreams:(nonnull NSArray <RCRTCOutputStream *> *)streams
            completion:(nonnull RCRTCOperationCallback)completion;

/*!
 发布本地默认音视频流，直播模式专用
 
 @param completion 发布完成回调
 @discussion
 发布主播默认音视频流, 此接口仅直播模式的主播可用, 即 RCRTCRoomType 为 RCRTCRoomTypeLive 可用
 
 @remarks 资源管理
 */
- (void)publishDefaultLiveStreams:(RCRTCLiveOperationCallback)completion;

/*!
 发布本地指定音视频流，直播模式专用
 
 @param stream 发布的音视频流
 @param completion 发布的音视频流结果, 包括此主播的推流 url
 @discussion
 发布直播音视频流, 此接口仅直播模式的主播可用, 即 RCRTCRoomType 为 RCRTCRoomTypeLive 可用
 
 @remarks 资源管理
 */
- (void)publishLiveStream:(nonnull RCRTCOutputStream *)stream
               completion:(nonnull RCRTCLiveOperationCallback)completion;

#pragma mark - 取消发布资源
/*!
 取消发布本地默认音视频流
 
 @param completion 取消发布完成回调
 @discussion
 取消发布默认音视频流
 
 @remarks 资源管理
 */
- (void)unpublishDefaultStreams:(RCRTCOperationCallback)completion;

/*!
 取消发布本地指定音视频流
 
 @param stream 取消发布的音视频流
 @param completion 发布的音视频流结果
 @discussion
 取消发布音视频流
 
 @remarks 资源管理
 */
- (void)unpublishStream:(nonnull RCRTCOutputStream *)stream
             completion:(nonnull RCRTCOperationCallback)completion;

/*!
 取消发布多路本地指定音视频流
 
 @param streams 取消发布的音视频流集合
 @param completion 发布的音视频流结果
 @discussion
 取消发布多路音视频流
 
 @remarks 资源管理
 */
- (void)unpublishStreams:(nonnull NSArray <RCRTCOutputStream *> *)streams
              completion:(nonnull RCRTCOperationCallback)completion;

/*!
 取消发布本地默认音视频流，直播模式专用
 
 @param completion 取消发布完成回调
 @discussion
 取消发布默认音视频流，此接口仅直播模式的主播可用, 即 RCRTCRoomType 为 RCRTCRoomTypeLive 可用
 
 @remarks 资源管理
 */
- (void)unpublishDefaultLiveStreams:(RCRTCOperationCallback)completion;

/*!
 取消发布本地指定音视频流，直播模式专用
 
 @param stream 取消发布的音视频流
 @param completion 发布的音视频流结果
 @discussion
 取消发布音视频流，此接口仅直播模式的主播可用, 即 RCRTCRoomType 为 RCRTCRoomTypeLive 可用
 
 @remarks 资源管理
 */
- (void)unpublishLiveStream:(nonnull RCRTCOutputStream *)stream
             completion:(nonnull RCRTCOperationCallback)completion;

#pragma mark - 订阅资源
/*!
 订阅多路远端指定音视频流
 
 同一个流只能填写在 avStreams 或 tinyStreams 中的一个数组中
 
 @param avStreams 普通流
 @param tinyStreams 需要携带小流的流数组
 @param completion 完成的回调
 @discussion
 订阅流
 
 @remarks 资源管理
 */
- (void)subscribeStream:(NSArray <RCRTCInputStream *> *)avStreams
            tinyStreams:(NSArray <RCRTCInputStream *> *)tinyStreams
             completion:(nonnull RCRTCOperationCallback)completion;

/*!
 观众订阅合流资源

 @param liveUrl 主播直播的 liveUrl (针对 4x版本的主播兼容方案)
 @param streamType 需要具体订阅的媒体类型
 @param completion  完成的回调, 会依次回调合流的 RCRTCInputStream, 根据 streamType 区分是音频流还是视频流, 如主播发布了音视频流, 此回调会回调两次, 分别为音频的 RCRTCInputStream,  和视频的 RCRTCInputStream 。
 @discussion
 仅直播模式可用,  作为观众, 直接观看主播的直播, 通过传入主播的 url, 仅观众端可用，此接口可具体订阅音频流或视频流或大小流
 Added from 5.1.0
 
 @remarks 媒体流操作
 */
- (void)subscribeLiveUrl:(nonnull NSString *)liveUrl
              streamType:(RCRTCAVStreamType)streamType
              completion:(nullable RCRTCLiveUrlCallback)completion;


#pragma mark - 取消订阅资源
/*!
 取消订阅远端指定音视频流
 
 @param stream 音视频流
 @param completion 音视频流结果
 @discussion
 取消订阅音视频流
 
 @remarks 资源管理
 */
- (void)unsubscribeStream:(nonnull RCRTCInputStream *)stream
               completion:(nonnull RCRTCOperationCallback)completion;

/*!
 取消订阅多路远端指定音视频流
 
 @param streams 音视频流集合
 @param completion 音视频流结果
 @discussion
 取消订阅多路音视频流
 
 @remarks 资源管理
 */
- (void)unsubscribeStreams:(nonnull NSArray <RCRTCInputStream *> *)streams
                completion:(nonnull RCRTCOperationCallback)completion;

#pragma mark - 跨房间连麦
/*!
 向指定用户发送跨房间连麦请求
 
 @param inviteeRoomId 被邀请人所在房间号
 @param inviteeUserId 被邀请人userId
 @param autoMix 是否将邀请人音视频资源发送到被邀请人房间中合流
 @param extra 附加信息, 可随消息发送给被邀请人
 @param completion 完成的回调
 @discussion
 仅供连麦使用
 
 @remarks 资源管理
 */
- (void)requestJoinOtherRoom:(NSString *)inviteeRoomId
                      userId:(NSString *)inviteeUserId
                     autoMix:(BOOL)autoMix
                       extra:(NSString *)extra
                  completion:(RCRTCOperationCallback)completion;

/*!
 取消正在进行中的跨房间连麦请求
 
 @param inviteeRoomId 被邀请人所在房间号
 @param inviteeUserId 被邀请人userId
 @param extra 附加信息, 可随消息发送给被邀请人
 @param completion 完成的回调
 @discussion
 仅供连麦使用
 
 @remarks 资源管理
 */
- (void)cancelRequestJoinOtherRoom:(NSString *)inviteeRoomId
                            userId:(NSString *)inviteeUserId
                             extra:(NSString *)extra
                        completion:(RCRTCOperationCallback)completion;

/*!
 响应跨房间连麦请求
 
 @param inviterRoomId 邀请人所在的房间号
 @param inviterUserId 邀请人userId
 @param agree 是否同意加入副房间
 @param autoMix 是否将被邀请人音视频资源发送到邀请人房间中合流
 @param extra 附加信息, 可随消息发送给邀请人
 @param completion 完成的回调
 @discussion
 取消订阅多路音视频流
 
 @remarks 资源管理
 */
- (void)responseJoinOtherRoom:(NSString *)inviterRoomId
                       userId:(NSString *)inviterUserId
                        agree:(BOOL)agree
                      autoMix:(BOOL)autoMix
                        extra:(NSString *)extra
                   completion:(RCRTCOperationCallback)completion;

@end

NS_ASSUME_NONNULL_END
