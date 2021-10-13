//
//  RCCallIWDefine.h
//  RongCallWrapper
//
//  Created by RongCloud on 2021/7/14.
//

#ifndef RCCallIWDefine_h
#define RCCallIWDefine_h

#import <Foundation/Foundation.h>

/*!
 用户身份类型
 */
typedef NS_ENUM(NSInteger, RCCallIWUserType) {
    /*!
     普通身份
     */
    RCCallIWUserTypeNormal            = 1,
    /*!
     观察者身份
     */
    RCCallIWUserTypeObserver          = 2
};

/*!
 通话类型
 */
typedef NS_ENUM(NSInteger, RCCallIWCallType) {
    /*!
     单聊通话
     */
    RCCallIWCallTypeSingle           = 0,
    /*!
     群聊通话
     */
    RCCallIWCallTypeGroup            = 1
};

/*!
 通话媒体类型
 */
typedef NS_ENUM(NSInteger, RCCallIWMediaType) {
    /*!
     音频通话
     */
    RCCallIWMediaTypeAudio            = 0,
    /*!
     音视频通话
     */
    RCCallIWMediaTypeAudioVideo       = 2
};

/*!
 相机类型
 */
typedef NS_ENUM(NSInteger, RCCallIWCamera) {
    /*!
     未指定
     */
    RCCallIWCameraNone                = -1,
    /*!
     前置相机
     */
    RCCallIWCameraFront               = 0,
    /*!
     后置相机
     */
    RCCallIWCameraBack                = 1,
};

/*!
 网络质量
 */
typedef NS_ENUM(NSInteger, RCCallIWNetworkQuality) {
    /*!
     未知
     */
    RCCallIWNetworkQualityUnknown     = 0,
    /*!
     极好
     */
    RCCallIWNetworkQualityExcellent   = 1,
    /*!
     好
     */
    RCCallIWNetworkQualityGood        = 2,
    /*!
     一般
     */
    RCCallIWNetworkQualityPoor        = 3,
    /*!
     差
     */
    RCCallIWNetworkQualityBad         = 4,
    /*!
     极差
     */
    RCCallIWNetworkQualityTerrible    = 5,
};

/*!
 视频显示模式
 */
typedef NS_ENUM(NSInteger, RCCallIWViewFitType) {
    /*!
     拉伸全屏
     */
    RCCallIWViewFitTypeFill           = 0,
    /*!
     满屏显示， 等比例填充， 直到填充满整个试图区域，其中一个维度的部分区域会被裁剪
     */
    RCCallIWViewFitTypeCover          = 1,
    /*!
     完整显示， 填充黑边， 等比例填充，直达一个维度到达区域边界
     */
    RCCallIWViewFitTypeCenter         = 2,
};


/*!
 通话视频参数
 */
typedef NS_ENUM (NSInteger, RCCallIWVideoProfile) {
    /*!
     144x256, 15fps, 120~240kbps
     */
    RCCallIW_VIDEO_PROFILE_144_256              = 10,
    /*!
     240x240, 15fps, 120~280kbps
     */
    RCCallIW_VIDEO_PROFILE_240_240              = 20,
    /*!
     240x320, 15fps, 120~400kbps
     */
    RCCallIW_VIDEO_PROFILE_240_320              = 30,
    /*!
     360x480, 15fps, 150~650kbps
     */
    RCCallIW_VIDEO_PROFILE_360_480              = 40,
    /*!
     360x640, 15fps, 180~800kbps
     */
    RCCallIW_VIDEO_PROFILE_360_640              = 50,
    /*!
     480x640, 15fps, 200~900kbps
     */
    RCCallIW_VIDEO_PROFILE_480_640              = 60,
    /*!
     480x720, 15fps, 200~1000kbps
     */
    RCCallIW_VIDEO_PROFILE_480_720              = 70,
    /*!
     720x1280, 15fps, 250~2200kbps
     */
    RCCallIW_VIDEO_PROFILE_720_1280             = 80,
    /*!
     1080x1920, 15fps, 400~4000kbps
     */
    RCCallIW_VIDEO_PROFILE_1080_1920            = 90,
    /*!
     144x256, 30fps, 240~480kbps
     */
    RCCallIW_VIDEO_PROFILE_144_256_HIGH         = 11,
    /*!
     240x240, 30fps, 240~360kbps
     */
    RCCallIW_VIDEO_PROFILE_240_240_HIGH         = 21,
    /*!
     240x320, 30fps, 240~800kbps
     */
    RCCallIW_VIDEO_PROFILE_240_320_HIGH         = 31,
    /*!
     360x480, 30fps, 300~1300kbps
     */
    RCCallIW_VIDEO_PROFILE_360_480_HIGH         = 41,
    /*!
     360x640, 30fps, 360~1600kbps
     */
    RCCallIW_VIDEO_PROFILE_360_640_HIGH         = 51,
    /*!
     480x640, 30fps, 400~1800kbps
     */
    RCCallIW_VIDEO_PROFILE_480_640_HIGH         = 61,
    /*!
     480x720, 30fps, 400~2000kbps
     */
    RCCallIW_VIDEO_PROFILE_480_720_HIGH         = 71,
    /*!
     720x1080, 30fps, 500~4400kbps
     */
    RCCallIW_VIDEO_PROFILE_720_1280_HIGH        = 81,
    /*!
     1080x1920, 30fps, 800~8000kbps
     */
    RCCallIW_VIDEO_PROFILE_1080_1920_HIGH       = 91,
};


/*!
 摄像机方向
 值与 AVCaptureVideoOrientation 一致
 */
typedef NS_ENUM(NSInteger, RCCallIWCameraOrientation) {
      RCCallIWCameraOrientationPortrait           = 1,
      RCCallIWCameraOrientationPortraitUpsideDown = 2,
      RCCallIWCameraOrientationLandscapeRight     = 3,
      RCCallIWCameraOrientationLandscapeLeft      = 4,
};

/*!
 通话结束原因
 */
typedef NS_ENUM (NSInteger, RCCallIWCallDisconnectedReason) {
    /*!
     己方取消已发出的通话请求
     */
    RCCallIWCallDisconnectedReasonCancel                  = 1,
    /*!
     己方拒绝收到的通话请求
     */
    RCCallIWCallDisconnectedReasonReject                  = 2,
    /*!
     己方挂断
     */
    RCCallIWCallDisconnectedReasonHangup                  = 3,
    /*!
     己方忙碌
     */
    RCCallIWCallDisconnectedReasonBusyLine                = 4,
    /*!
     己方未接听
     */
    RCCallIWCallDisconnectedReasonNoResponse              = 5,
    /*!
     己方不支持当前引擎
     */
    RCCallIWCallDisconnectedReasonEngineUnsupported       = 6,
    /*!
     己方网络出错
     */
    RCCallIWCallDisconnectedReasonNetworkError            = 7,
    /*!
     对方取消已发出的通话请求
     */
    RCCallIWCallDisconnectedReasonRemoteCancel            = 11,
    /*!
     对方拒绝收到的通话请求
     */
    RCCallIWCallDisconnectedReasonRemoteReject            = 12,
    /*!
     通话过程对方挂断
     */
    RCCallIWCallDisconnectedReasonRemoteHangup            = 13,
    /*!
     对方忙碌
     */
    RCCallIWCallDisconnectedReasonRemoteBusyLine          = 14,
    /*!
     对方未接听
     */
    RCCallIWCallDisconnectedReasonRemoteNoResponse        = 15,
    /*!
     对方网络错误
     */
    RCCallIWCallDisconnectedReasonRemoteEngineUnsupported = 16,
    /*!
     对方网络错误
     */
    RCCallIWCallDisconnectedReasonRemoteNetworkError      = 17,
    /*!
     己方其他端已接听
     */
    RCCallIWCallDisconnectedReasonAcceptByOtherClient     = 18,
    /*!
     己方被加入黑名单
     */
    RCCallIWCallDisconnectedReasonAddToBlackList          = 19,
    /*!
     己方被降级为观察者
     */
    RCCallIWCallDisconnectedReasonDegrade                 = 20,
    /*!
     已被禁止通话
     */
    RCCallIWCallDisconnectedReasonKickedByServer          = 21,
    /*!
     音视频服务已关闭
     */
    RCCallIWCallDisconnectedReasonMediaServerClosed       = 22
};


#endif /* RCCallIWDefine_h */
