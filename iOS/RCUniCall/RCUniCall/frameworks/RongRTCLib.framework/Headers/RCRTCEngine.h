//
//  RCRTCEngine.h
//  RongRTCLib
//
//  Created by RongCloud on 2019/1/2.
//  Copyright © 2019 RongCloud. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "RCRTCLibDefine.h"
#import "RCRTCRoomConfig.h"
#import "RCRTCCodeDefine.h"
#import "RCRTCConfig.h"
#import "RCRTCCryptoDelegate.h"
#import "RCRTCAudioEffectManager.h"

NS_ASSUME_NONNULL_BEGIN

@class RCRTCRoom;
@class RCRTCOtherRoom;
@class RCRTCVideoPreviewView;
@class RCRTCVideoStreamConfig;
@class RCRTCOutputStream;
@class RCRTCMicOutputStream;
@class RCRTCCameraOutputStream;
@protocol RCRTCStatusReportDelegate;
@protocol RCRTCEngineEventDelegate;

/*!
 音视频引擎类
 */
@interface RCRTCEngine : NSObject

/*!
 音视频引擎单例

 @remarks RCRTCEngine
 */
+ (RCRTCEngine *)sharedInstance;

/*!
 音视频引擎参数设置

 @remarks RCRTCEngine
 */
- (void)initWithConfig:(RCRTCConfig *)config;

/*!
 音效管理器，管理播放、暂停等

 @remarks RCRTCEngine：参数配置
 */
@property (nonatomic, strong, readonly) RCRTCAudioEffectManager *audioEffectManager;

/*!
 全局音视频配置信息

 @remarks RCRTCEngine：参数配置
 */
@property (nonatomic, strong, readonly) RCRTCConfig *config;

/*!
 当前已加入的房间，已废弃

 @deprecated 4.0.5
 @remarks RCRTCEngine：房间接口
 */
@property (nonatomic, strong, readonly) RCRTCRoom *currentRoom DEPRECATED_MSG_ATTRIBUTE("use room property instead");

/*!
 当前已加入的房间

 @remarks RCRTCEngine：房间接口
 */
@property (nonatomic, strong, readonly) RCRTCRoom *room;

/*!
 本地默认音频流

 @remarks RCRTCEngine：媒体流操作
 */
@property (atomic, strong, readonly) RCRTCMicOutputStream *defaultAudioStream;

/*!
 本地默认视频流

 @remarks RCRTCEngine：媒体流操作
 */
@property (atomic, strong, readonly) RCRTCCameraOutputStream *defaultVideoStream;

/*!
 房间状态报告监听

 @remarks RCRTCEngine：统计接口
 */
@property (nonatomic, weak) id <RCRTCStatusReportDelegate> statusReportDelegate;

/*!
 Engine 代理

 @remarks RCRTCEngine：Engine 通知接口
 */
@property (nonatomic, weak) id <RCRTCEngineEventDelegate> delegate;

#pragma mark - 设置媒体服务器地址
/*!
 设置媒体服务器地址

 @remarks RCRTCEngine：参数配置

 @param url 媒体服务器地址
 设置媒体服务器地址，特别注意如果设置了会覆盖导航下载下来的 media server url
 @return 设置是否成功
 */
- (BOOL)setMediaServerUrl:(NSString *)url;

#pragma mark - 听筒/扬声器切换
/*!
 设置是否切换听筒为扬声器，已废弃

 @param useSpeaker YES 使用扬声器  NO 不使用
 @discussion
 切换听筒/扬声器
 @return 接入外设时, 如蓝牙音箱等 返回 NO

 @deprecated 4.0.5
 @remarks RCRTCEngine：媒体流操作
 */
- (BOOL)useSpeaker:(BOOL)useSpeaker DEPRECATED_MSG_ATTRIBUTE("use enableSpeaker: API instead");

/*!
 设置是否切换听筒为扬声器

 @param enable YES 使用扬声器；NO 不使用
 @discussion
 切换听筒/扬声器

 @remarks RCRTCEngine：媒体流操作
 @return 接入外设时, 如蓝牙音箱等返回 NO
 */
- (BOOL)enableSpeaker:(BOOL)enable;

#pragma mark - 自定义加密
/*!
 设置音频输出流自定义加密回调

 @param audioEncryptorDelegate 加密代理，接口传入 RCRTCCustomizedEncryptorDelegate 的非空实现对象表示开启自定义加密；
 如果传入 nil 代表关闭自定义加密。

 @discussion
 该接口设置为全局设置，对所有发送音频进行加密，开启时机为加入房间前或者观众订阅流前，关闭时机为离开房间或者观众取消订阅流后，
 其它时机调用可能会不生效或者其它负面效果。

 @remarks RCRTCEngine：加密接口
 */
- (void)setAudioCustomizedEncryptorDelegate:(id <RCRTCCustomizedEncryptorDelegate>)audioEncryptorDelegate;

/*!
 设置音频输入流自定义解密回调

 @param audioDecryptorDelegate 加密代理，接口传入 RCRTCDecryptorDelegate 的非空实现对象表示开启自定义解密；
 如果传入 nil 代表关闭自定义解密。

 @discussion
 该接口设置为全局设置，对所有接收音频进行解密，开启时机为加入房间前或者观众订阅流前，关闭时机为离开房间或者观众取消订阅流后，
 其它时机调用可能会不生效或者其它负面效果。

 @remarks RCRTCEngine：加密接口

 */
- (void)setAudioCustomizedDecryptorDelegate:(id <RCRTCCustomizedDecryptorDelegate>)audioDecryptorDelegate;

/*!
 设置视频输出流自定义加密回调

 @param videoEncryptorDelegate 加密代理，接口传入 RCRTCCustomizedEncryptorDelegate 的非空实现对象表示开启自定义加密；
 如果传入 nil 代表关闭自定义加密。

 @discussion
 该接口设置为全局设置，对所有发送视频进行加密，开启时机为加入房间前或者观众订阅流前，关闭时机为离开房间或者观众取消订阅流后，
 其它时机调用可能会不生效或者其它负面效果。

 @remarks RCRTCEngine：加密接口

 */
- (void)setVideoCustomizedEncryptorDelegate:(id <RCRTCCustomizedEncryptorDelegate>)videoEncryptorDelegate;

/*!
 设置视频输入流自定义解密回调

 @param videoDecryptorDelegate 加密代理，接口传入 RCRTCDecryptorDelegate 的非空实现对象表示开启自定义解密；
 如果传入 nil 代表关闭自定义解密。

 @discussion
 该接口设置为全局设置，对所有接收视频进行解密，开启时机为加入房间前或者观众订阅流前，关闭时机为离开房间或者观众取消订阅流后，
 其它时机调用可能会不生效或者其它负面效果。

 @remarks RCRTCEngine：加密接口
 */
- (void)setVideoCustomizedDecryptorDelegate:(id <RCRTCCustomizedDecryptorDelegate>)videoDecryptorDelegate;

#pragma mark - 加入房间
/*!
 加入房间

 @param roomId 房间 Id, 支持大小写英文字母、数字、部分特殊符号 + = - _ 的组合方式 最长 64 个字符
 @param completion 加入房间回调,其中, room 对象中的 remoteUsers, 存储当前房间中的所有人, 包括发布资源和没有发布资源的人

 @remarks RCRTCEngine：房间接口
 */
- (void)joinRoom:(nonnull NSString *)roomId
      completion:(nonnull void (^)(RCRTCRoom *_Nullable room, RCRTCCode code))completion;

/*!
 加入指定类型房间

 @param roomId 房间 Id, 支持大小写英文字母、数字、部分特殊符号 + = - _ 的组合方式 最长 64 个字符
 @param config 加入房间的配置, 主要用于配置直播场景。
 @param completion 加入房间回调, 其中 room 对象中的 remoteUsers, 存储当前房间中的所有人, 包括发布资源和没有发布资源的人
 @discussion
 加入房间

 @remarks RCRTCEngine：房间接口
 */
- (void)joinRoom:(nonnull NSString *)roomId
          config:(nonnull RCRTCRoomConfig *)config
      completion:(nonnull void (^)(RCRTCRoom *_Nullable room, RCRTCCode code))completion;

#pragma mark - 离开房间
/*!
 离开房间，已废弃

 @param roomId 房间 Id
 @param completion 离开房间回调

 @deprecated 4.0.5
 @remarks RCRTCEngine：房间接口
 */
- (void)leaveRoom:(nonnull NSString *)roomId
       completion:(nonnull void (^) (BOOL isSuccess, RCRTCCode code)) completion DEPRECATED_MSG_ATTRIBUTE("use leaveRoom: API instead");

/*!
 离开房间

 @param completion 离开房间回调
 @discussion
 离开房间时不需要调用取消资源发布, SDK 内部会做好取消发布资源逻辑

 @remarks RCRTCEngine：房间接口
 */
- (void)leaveRoom:(nonnull RCRTCOperationCallback)completion;

#pragma mark - 加入副房间
/*!
 连麦邀请后加入副房间

 @param roomId 副房间 Id, 支持大小写英文字母、数字、部分特殊符号 + = - _ 的组合方式 最长 64 个字符
 @param completion 加入副房间回调
 @discussion
 此方法仅供连麦加入副房间使用

 @remarks RCRTCEngine：房间接口
 */
- (void)joinOtherRoom:(nonnull NSString *)roomId
           completion:(void (^)(RCRTCOtherRoom *_Nullable room, RCRTCCode code))completion;

#pragma mark - 离开副房间
/*!
 离开副房间

 @param roomId 副房间 Id
 @param isNotify 是否通知所有连麦用户结束, YES:通知  NO:不通知
 @param completion 离开房间回调
 @discussion
 此方法仅供连麦离开副房间使用

 @remarks RCRTCEngine：房间接口
 */
- (void)leaveOtherRoom:(nonnull NSString *)roomId
        notifyFinished:(BOOL)isNotify
            completion:(nonnull RCRTCOperationCallback)completion;

#pragma mark - 观众订阅，取消订阅
/*!
 观众订阅主播资源，已废弃

 @param url 主播直播的 url
 @param streamType 需要具体订阅的媒体类型
 @param completion  动作的回调, 会依次回调主播的 RCRTCInputStream, 根据 streamType 区分是音频流还是视频流, 如主播发布了音视频流, 此回调会回调两次, 分别为音频的 RCRTCInputStream,  和视频的 RCRTCInputStream 。
 @discussion
 仅直播模式可用,  作为观众, 直接观看主播的直播, 无需加入房间, 通过传入主播的 url, 仅观众端可用，此接口可具体订阅音频流或视频流或大小流
 
 @deprecated from 5.1.0
 @remarks RCRTCEngine：媒体流操作
 */
- (void)subscribeLiveStream:(nonnull NSString *)url
                 streamType:(RCRTCAVStreamType)streamType
                 completion:(nullable RCRTCLiveCallback)completion DEPRECATED_MSG_ATTRIBUTE("use RCRTCLocalUser.h subscribeStream:tinyStreams:completion: API instead");

/*!
 观众取消订阅主播资源，已废弃

 @param url 主播直播的 url
 @param completion 动作的回调
 @discussion
 仅直播模式可用, 作为观众, 退出观看主播的直播, 仅观众端使用
 
 @deprecated from 5.1.0
 @remarks RCRTCEngine：媒体流操作
 */
- (void)unsubscribeLiveStream:(nonnull NSString *)url
                   completion:(void (^)(BOOL isSuccess, RCRTCCode code))completion DEPRECATED_MSG_ATTRIBUTE("use RCRTCLocalUser.h unsubscribeStreams:completion: API instead");

#pragma mark - SDK 版本号
/*!
 获取 SDK 版本号，已废弃

 @return 版本号

 @deprecated 4.0.5
 @remarks RCRTCEngine：参数配置
 */
- (NSString *)getRTCLibVersion DEPRECATED_MSG_ATTRIBUTE("use getVersion API instead");

/*!
 获取 SDK 版本号

 @return 版本号

 @remarks RCRTCEngine：参数配置
 */
+ (NSString *)getVersion;

@end

NS_ASSUME_NONNULL_END
