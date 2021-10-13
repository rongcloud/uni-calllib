//
//  RongRTCError.h
//  RongRTCLib
//
//  Created by RongCloud on 2019/1/12.
//  Copyright © 2019 RongCloud. All rights reserved.
//

#import <Foundation/Foundation.h>

/*!
 音视频错误码定义
 
 服务器返回错误以 4 开头，后两位是业务代码，最后两位是错误码 4XXXX，如 400XX 基础连接部分
 本地返回错误以 5 开头，后两位是业务代码，最后两位是错误码 5XXXX，如 500XX 初始化基础连接部分
 */
typedef NS_ENUM (NSInteger, RCRTCCode) {
    /*!
     成功
     */
    RCRTCCodeSuccess                          = 0,
    /*!
     初始化失败, 信令服务（IM Server）未连接
     */
    RCRTCCodeSignalServerNotConnect           = 50000,
    /*!
     参数错误
     */
    RCRTCCodeParameterError                   = 50001,
    /*!
     加入相同房间错误，表示用户在客户端重复加入相同的房间
     */
    RCRTCCodeJoinToSameRoom                   = 50002,
    /*!
     不在房间中
     */
    RCRTCCodeNotInRTCRoom                     = 50003,
    /*!
     请检查是否开通音视频服务
     */
    RCRTCCodeVoIPNotAvailable                 = 50004,
    /*!
     RTC token为空，请查看是否还在房间内或者房间是否销毁
     */
    RCRTCCodeRTCTokenIsNull                   = 50006,
    /*!
     SDK 内部状态错误
     */
    RCRTCCodeIllegalState                     = 50007,
    /*
     观众加聊天室成功,kv 回调超时(30s)
     */
    RCRTCCodeChatRoomKVTimeout                = 50008,
    /*!
     HTTP 请求超时
     */
    RCRTCCodeHttpTimeoutError                 = 50010,
    /*!
     HTTP 错误（含 500，404，405 等错误）
     */
    RCRTCCodeHttpError                        = 50011,
    /*!
     发布重复资源
     */
    RCRTCCodePublishDuplicateResources        = 50020,
    /*!
     设置本地 SDP 错误
     */
    RCRTCCodeSetLocalSDPError                 = 50021,
    /*!
     设置远端 SDP 错误
     */
    RCRTCCodeSetRemoteSDPError                = 50022,
    /*!
     发布的流的个数已经到达上限
     */
    RCRTCCodePublishStreamsHasReachedMaxCount = 50023,
    /*!
     取消发布不存在的资源
     */
    RCRTCCodeUnpublishUnexistStream           = 50024,
    /*!
     创建本地 Offer 失败
     */
    RCRTCCodeCreateOfferError                 = 50025,
    /*!
     创建本地 Answer 失败
     */
    RCRTCCodeCreateAnswerError                = 50026,
    /*!
     公有云 SDK 不能访问私有云服务
     */
    RCRTCCodeIncompatibleWithPrivateServer    = 50027,
    /*!
     订阅不存在的音视频资源
     */
    RCRTCCodeSubscribeNotExistResources       = 50030,
    /*!
     资源重复订阅
     */
    RCRTCCodeSubscribeDuplicateResources      = 50031,
    /*!
     取消订阅不存在的音视频资源
     */
    RCRTCCodeUnsubscribeNotExistResouce       = 50032,
    /*
     当前房间不存在这个 liveUrl
     */
    RCRTCCodeLiveUrlNotInCurrentRoom          = 50033,
    /*!
     RTCConnection 为空
     */
    RCRTCCodeRTCConnectionIsNil               = 50065,
    /*!
     解析 Json 串出错
     */
    RCRTCCodeParseJsonDataError               = 50069,
    /*!
     未加入主房间
     */
    RCRTCCodeNotJoinedMainRoom                = 50074,
    /*!
     操作的副房间号码和主房间号码一致错误
     */
    RCRTCCodeOtherRoomIDSameWithMainRoomId    = 50075,
    /*!
     取消的跨房间连麦请求不存在
     */
    RCRTCCodeCancelInviteNotExist             = 50076,
    /*!
     响应的跨房间连麦请求不存在
     */
    RCRTCCodeRespondInviteNotExist            = 50077,
    /*
     发布时mediaServer返回的mcu流为空
     */
    RCRTCCodeMCUListNotExist                  = 50079,
    /*!
     cdn 地址配置数量到达上限（最大为10个）
     */
    RCRTCCodeCDNCountReachToLimit             = 50080,
    /*!
     帧时间戳非法
     */
    RCRTCCodeIllegalFrameTimestamp            = 50081,
    /*!
     解码视频帧失败
     */
    RCRTCCodeDecodeVideoFrameError            = 50082,
    /*
     音效文件数量已经到达最大数量
     */
    RCRTCCodeEffectFileCountHasBeenReached    = 50090,
    /*
     处理非法的 soundId，如停止播放没有播放过的音效文件 id，
     此音效 ID 没有预设或者播放过。
     */
    RCRTCCodeHandlingIllegalEffectSoundId     = 50091,
    /*
     自动重连异常
     */
    RCRTCCodeReconnectError                   = 50100,
    /*
     观众加聊天室成功,pullData KV没有值
     */
    RCRTCCodeChatRoomKVNotExist               = 50101,
};


@interface RCRTCCodeDefine : NSObject

+ (NSString *)codeDesc:(NSInteger)code;

@end
