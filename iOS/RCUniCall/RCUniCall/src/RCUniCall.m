//
//  RCUniCall.m
//  RCUniCall
//
//  Created by RongCloud on 2021/8/3.
//

#import "RCUniCall.h"
#import "RCUniCallVideoView.h"
#import <RongCallWrapper/RongCallWrapper.h>
#import "RCUniCallArgumentAdapter.h"

@interface RCUniCall ()<RCCallIWEngineDelegate>

@property (nonatomic, strong) NSDictionary<NSString *, NSString *> *mapEvents;

@end

@implementation RCUniCall

#pragma mark UNI API...

/// 初始化 设置代理
UNI_EXPORT_METHOD_SYNC(@selector(init:));
- (void)init:(NSDictionary *)arguments {
    [[RCCallIWEngine sharedInstance] setEngineDelegate:self];
}

UNI_EXPORT_METHOD_SYNC(@selector(unInit));
- (void)unInit {
    [[RCCallIWEngine sharedInstance] setEngineDelegate:nil];
}

/// 引擎配置
UNI_EXPORT_METHOD_SYNC(@selector(setEngineConfig:));
- (void)setEngineConfig:(NSDictionary *)config {
    [[RCCallIWEngine sharedInstance] setEngineConfig:toCallIWEngineConfig(config)];
}

/// 推送配置
UNI_EXPORT_METHOD_SYNC(@selector(setPushConfig:hangupPushConfig:enableApplePushKit:));
- (void)setPushConfig:(NSDictionary *)callPushConfig
     hangupPushConfig:(NSDictionary *)hangupPushConfig
   enableApplePushKit:(BOOL)enableApplePushKit {
    [[RCCallIWEngine sharedInstance] setPushConfig:toCallIWPushConfig(callPushConfig)
                                  hangupPushConfig:toCallIWPushConfig(hangupPushConfig)
                                enableApplePushKit:enableApplePushKit];
}

/// 音频配置
UNI_EXPORT_METHOD_SYNC(@selector(setAudioConfig:));
- (void)setAudioConfig:(NSDictionary *)config {
    [[RCCallIWEngine sharedInstance] setAudioConfig:toCallIWAudioConfig(config)];
}

/// 视频配置
UNI_EXPORT_METHOD_SYNC(@selector(setVideoConfig:));
- (void)setVideoConfig:(NSDictionary *)config {
    [[RCCallIWEngine sharedInstance] setVideoConfig:toCallIWVideoConfig(config)];
}

/* 拨打电话-单聊
 * 如果type为音视频，直接打开默认（前置）摄像头。
 */
UNI_EXPORT_METHOD_SYNC(@selector(startSingleCall:type:extra:));
- (NSDictionary *)startSingleCall:(NSString *)userId
                             type:(int)type
                            extra:(NSString *)extra {
    RCCallIWCallSession *session = [[RCCallIWEngine sharedInstance] startCall:userId
                                                                         type:toCallIWMediaType(type)
                                                                        extra:extra];
    return fromCallIWCallSession(session);
}

/* 拨打电话-群聊
 * 如果type为音视频，直接打开默认（前置）摄像头。
 */
UNI_EXPORT_METHOD(@selector(startGroupCall:userIds:observerUserIds:type:extra:));
- (NSDictionary *)startGroupCall:(NSString *)groupId
                         userIds:(NSArray *)userIds
                 observerUserIds:(NSArray *)observerUserIds
                            type:(int)type
                           extra:(NSString *)extra {
    RCCallIWCallSession *session = [[RCCallIWEngine sharedInstance] startCall:groupId
                                                                      userIds:userIds
                                                              observerUserIds:observerUserIds
                                                                         type:toCallIWMediaType(type)
                                                                        extra:extra];
    return fromCallIWCallSession(session);
}

/// 获取当前call session
UNI_EXPORT_METHOD_SYNC(@selector(getCurrentCallSession));
- (NSDictionary *)getCurrentCallSession {
    return fromCallIWCallSession([[RCCallIWEngine sharedInstance] getCurrentCallSession]);
}

/* 接电话
 * 如果呼入类型为语音通话，即接受语音通话，如果呼入类型为视频通话，即接受视频通话，打开默认（前置）摄像头。
 * 观察者不开启摄像头。
 */
UNI_EXPORT_METHOD_SYNC(@selector(accept));
- (void)accept {
    [[RCCallIWEngine sharedInstance] accept];
}

/// 挂断电话
UNI_EXPORT_METHOD_SYNC(@selector(hangup));
- (void)hangup {
    [[RCCallIWEngine sharedInstance] hangup];
}

/// 麦克风控制
UNI_EXPORT_METHOD_SYNC(@selector(enableMicrophone:));
- (void)enableMicrophone:(BOOL)enable {
    [[RCCallIWEngine sharedInstance] enableMicrophone:enable];
}

UNI_EXPORT_METHOD_SYNC(@selector(isEnableMicrophone));
- (BOOL)isEnableMicrophone {
    return [[RCCallIWEngine sharedInstance] isEnableMicrophone];
}

/// 扬声器控制
UNI_EXPORT_METHOD_SYNC(@selector(enableSpeaker:));
- (void)enableSpeaker:(BOOL)enable {
    [[RCCallIWEngine sharedInstance] enableSpeaker:enable];
}

UNI_EXPORT_METHOD_SYNC(@selector(isEnableSpeaker));
- (BOOL)isEnableSpeaker {
    return [[RCCallIWEngine sharedInstance] isEnableSpeaker];
}

/// 摄像头控制
UNI_EXPORT_METHOD_SYNC(@selector(enableCamera:camera:));
- (void)enableCamera:(BOOL)enable
              camera:(int)camera {
    [[RCCallIWEngine sharedInstance] enableCamera:enable camera:toCallIWCamera(camera)];
}

UNI_EXPORT_METHOD_SYNC(@selector(isEnableCamera));
- (BOOL)isEnableCamera {
    return [[RCCallIWEngine sharedInstance] isEnableCamera];
}

UNI_EXPORT_METHOD_SYNC(@selector(currentCamera));
- (NSInteger)currentCamera {
    return fromCallIWCamera([[RCCallIWEngine sharedInstance] currentCamera]);
}

UNI_EXPORT_METHOD_SYNC(@selector(switchCamera));
- (void)switchCamera {
    [[RCCallIWEngine sharedInstance] switchCamera];
}

/// 设置预览窗口
UNI_EXPORT_METHOD_SYNC(@selector(setVideoView:view:fit:));
- (void)setVideoView:(NSString *)userId
                view:(nonnull NSString *)tag
                 fit:(int)fit {
    UIView *videoView = [[self.uniInstance componentForRef:tag] view];
    if (videoView && [videoView isKindOfClass:[RCUniCallVideoView class]]) {
        [[RCCallIWEngine sharedInstance] setVideoView:userId
                                                 view:videoView
                                                  fit:toCallIWViewFitType(fit)];
    }
}

/// 修改通话类型
UNI_EXPORT_METHOD_SYNC(@selector(changeMediaType:));
- (void)changeMediaType:(int)type {
    [[RCCallIWEngine sharedInstance] changeMediaType:toCallIWMediaType(type)];
}

/// 邀请用户
UNI_EXPORT_METHOD_SYNC(@selector(inviteUsers:observerUserIds:));
- (void)inviteUsers:(NSArray<NSString *> *)userIds
    observerUserIds:(NSArray<NSString *> *)observerUserIds {
    [[RCCallIWEngine sharedInstance] inviteUsers:userIds
                                 observerUserIds:observerUserIds];
}

#pragma mark - RCCallIWEngineDelegate

#define kRCRNEventName self.mapEvents[NSStringFromSelector(_cmd)]

- (void)sendEventWithName:(NSString *)event body:(NSDictionary *)params {
    [self. uniInstance fireModuleEvent:[RCUniCall class] eventName:event params:params];
}

//@required
- (void)callDidConnect {
    [self sendEventWithName:kRCRNEventName body:nil];
}

- (void)callDidDisconnect:(RCCallIWCallDisconnectedReason)reason {
    
    [self sendEventWithName:kRCRNEventName body:@{@"reason": @(fromCallIWCallDisconnectedReason(reason))}];
}

- (void)didReceiveCall:(nonnull RCCallIWCallSession *)session {
    
    [self sendEventWithName:kRCRNEventName body:fromCallIWCallSession(session)];
}

- (void)remoteUserDidJoin:(nonnull RCCallIWUserProfile *)user {
    
    [self sendEventWithName:kRCRNEventName body:fromCallIWUserProfile(user)];
}

- (void)remoteUserDidLeave:(nonnull RCCallIWUserProfile *)user reason:(RCCallIWCallDisconnectedReason)reason {
    
    NSMutableDictionary *arguments = [NSMutableDictionary dictionary];
    [arguments setValue:fromCallIWUserProfile(user) forKey:@"user"];
    [arguments setValue:@(fromCallIWCallDisconnectedReason(reason)) forKey:@"reason"];
    [self sendEventWithName:kRCRNEventName body:arguments];
}

//@optional
- (void)didReceiveCallRemoteNotification:(NSString *)callId
                           inviterUserId:(NSString *)inviterUserId
                               mediaType:(RCCallIWMediaType)mediaType
                              userIdList:(NSArray *)userIdList
                                userDict:(NSDictionary *)userDict
                              isVoIPPush:(BOOL)isVoIPPush
                              pushConfig:(RCCallIWPushConfig *)pushConfig {
    
}

- (void)didCancelCallRemoteNotification:(NSString *)callId
                          inviterUserId:(NSString *)inviterUserId
                              mediaType:(RCCallIWMediaType)mediaType
                             userIdList:(NSArray *)userIdList
                             pushConfig:(RCCallIWPushConfig *)pushConfig
                         isRemoteCancel:(BOOL)isRemoteCancel {
    
    
}
 
- (void)didEnableCamera:(RCCallIWCamera)camera
                 enable:(BOOL)enable {
    
    NSMutableDictionary *arguments = [NSMutableDictionary dictionary];
    [arguments setValue:@(fromCallIWCamera(camera)) forKey:@"camera"];
    [arguments setValue:@(enable) forKey:@"enable"];
    [self sendEventWithName:kRCRNEventName body:arguments];
}

- (void)didSwitchCamera:(RCCallIWCamera)camera {
    
    [self sendEventWithName:kRCRNEventName body:@{@"camera": @(fromCallIWCamera(camera))}];
}

- (void)callDidError:(int)code {

    [self sendEventWithName:kRCRNEventName body:@{@"code": @(code)}];
}

- (void)callDidMake {
    
    [self sendEventWithName:kRCRNEventName body:nil];
}

- (void)remoteUserDidRing:(NSString *)userId {
    
    RCUNIReturnIfNeed(!userId)
    [self sendEventWithName:kRCRNEventName body:@{@"userId":userId}];
}

- (void)remoteUserDidInvite:(NSString *)userId
                  mediaType:(RCCallIWMediaType)mediaType {
    
    NSMutableDictionary *arguments = [NSMutableDictionary dictionary];
    [arguments setValue:userId forKey:@"userId"];
    [arguments setValue:@(fromCallIWMediaType(mediaType)) forKey:@"mediaType"];
    [self sendEventWithName:kRCRNEventName body:arguments];
}

- (void)remoteUserDidChangeMediaType:(RCCallIWUserProfile *)user
                           mediaType:(RCCallIWMediaType)mediaType {
    
    NSMutableDictionary *arguments = [NSMutableDictionary dictionary];
    [arguments setValue:fromCallIWUserProfile(user) forKey:@"user"];
    [arguments setValue:@(fromCallIWMediaType(mediaType)) forKey:@"mediaType"];
    [self sendEventWithName:kRCRNEventName body:arguments];
}

- (void)remoteUserDidChangeMicrophoneState:(RCCallIWUserProfile *)user
                                    enable:(BOOL)enable {
    
    NSMutableDictionary *arguments = [NSMutableDictionary dictionary];
    [arguments setValue:fromCallIWUserProfile(user) forKey:@"user"];
    [arguments setValue:@(enable) forKey:@"enable"];
    [self sendEventWithName:kRCRNEventName body:arguments];
}

- (void)remoteUserDidChangeCameraState:(RCCallIWUserProfile *)user
                                enable:(BOOL)enable {
    
    NSMutableDictionary *arguments = [NSMutableDictionary dictionary];
    [arguments setValue:fromCallIWUserProfile(user) forKey:@"user"];
    [arguments setValue:@(enable) forKey:@"enable"];
    [self sendEventWithName:kRCRNEventName body:arguments];
}

- (void)user:(RCCallIWUserProfile *)user networkQuality:(RCCallIWNetworkQuality)quality {
    
    NSMutableDictionary *arguments = [NSMutableDictionary dictionary];
    [arguments setValue:fromCallIWUserProfile(user) forKey:@"user"];
    [arguments setValue:@(fromCallIWNetworkQuality(quality)) forKey:@"quality"];
    [self sendEventWithName:kRCRNEventName body:arguments];
}

- (void)user:(RCCallIWUserProfile *)user audioVolume:(int)volume {
    
    NSMutableDictionary *arguments = [NSMutableDictionary dictionary];
    [arguments setValue:fromCallIWUserProfile(user) forKey:@"user"];
    [arguments setValue:@(volume) forKey:@"volume"];
    [self sendEventWithName:kRCRNEventName body:arguments];
}

- (NSDictionary<NSString *, NSString *> *)mapEvents {
    if (!_mapEvents) {
        _mapEvents = @{
            NSStringFromSelector(@selector(didReceiveCall:)): @"Engine:OnCallReceived",
            NSStringFromSelector(@selector(callDidConnect)): @"Engine:OnCallConnected",
            NSStringFromSelector(@selector(callDidDisconnect:)): @"Engine:OnCallDisconnected",
            NSStringFromSelector(@selector(remoteUserDidJoin:)): @"Engine:OnRemoteUserJoined",
            NSStringFromSelector(@selector(remoteUserDidLeave:reason:)): @"Engine:OnRemoteUserLeft",
            NSStringFromSelector(@selector(didEnableCamera:enable:)): @"Engine:OnEnableCamera",
            NSStringFromSelector(@selector(didSwitchCamera:)): @"Engine:OnSwitchCamera",
            NSStringFromSelector(@selector(callDidError:)): @"Engine:OnError",
            NSStringFromSelector(@selector(callDidMake)): @"Engine:OnCallOutgoing",
            NSStringFromSelector(@selector(remoteUserDidRing:)): @"Engine:OnRemoteUserRinging",
            NSStringFromSelector(@selector(remoteUserDidInvite:mediaType:)): @"Engine:OnRemoteUserInvited",
            NSStringFromSelector(@selector(remoteUserDidChangeMediaType:mediaType:)): @"Engine:OnRemoteUserMediaTypeChanged",
            NSStringFromSelector(@selector(remoteUserDidChangeMicrophoneState:enable:)): @"Engine:OnRemoteUserMicrophoneStateChanged",
            NSStringFromSelector(@selector(remoteUserDidChangeCameraState:enable:)): @"Engine:OnRemoteUserCameraStateChanged",
            NSStringFromSelector(@selector(user:networkQuality:)): @"Engine:OnNetworkQuality",
            NSStringFromSelector(@selector(user:audioVolume:)): @"Engine:OnAudioVolume"
        };
    }
    return _mapEvents;
}

@end
