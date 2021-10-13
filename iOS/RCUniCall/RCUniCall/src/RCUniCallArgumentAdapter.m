//
//  RCUniCallArgumentAdapter.m
//  RCUniCall
//
//  Created by RongCloud on 2021/8/3.
//

#import "RCUniCallArgumentAdapter.h"
#import "NSArray+RCUniCall.h"
#import "NSDictionary+RCUniCall.h"

#ifndef __RCUNICallAssert__
#define __RCUNICallAssert__

BOOL isDEBUG(void) {
#if DEBUG
    return YES;
#endif
    return NO;
}

#define RCUNICallAssert(obj, cls) \
if (!obj) {                      \
    if (isDEBUG()) {             \
        NSLog(@"Failed to convert %@, Arguments cannot be nil!", cls); assert(0); \
    }                            \
    return nil;                  \
}                                \

#endif

/*
 * DEFAULT INDEX...
 */
static RCCallIWVideoProfile kDefaultCallIWVideoProfile = RCCallIW_VIDEO_PROFILE_720_1280;
static RCCallIWCamera kDefaultCallIWCamera = RCCallIWCameraFront;
static RCCallIWCameraOrientation kDefaultCallIWCameraOrientation = RCCallIWCameraOrientationPortrait;

/*
 * ENUM...
 * 注意: JS层传向插件层的所有枚举值都代表枚举定义中的索引，并不是枚举的值
 *      做枚举转换的时候不能强转类型
 */
NSInteger _findEnum(int index, NSArray<NSNumber *> *enums) {
    if (index < 0 || index >= enums.count) {
        return enums.firstObject.integerValue;
    }
    return enums[index].integerValue;
}

NSInteger _findEnumIndex(NSNumber *key, NSDictionary<NSNumber *,NSNumber *> *dictionary) {
    if (![dictionary.allKeys containsObject:key]) {
        return NSNotFound;
    }
    return [dictionary[key] integerValue];
}

#pragma mark - RCCallIWUserType
NSArray *_getCallIWUserType(void) {
    return @[@(RCCallIWUserTypeNormal),
             @(RCCallIWUserTypeObserver)];
}

RCCallIWUserType toCallIWUserType(int type) {
    return _findEnum(type, _getCallIWUserType());
}

NSInteger fromCallIWUserType(RCCallIWUserType type) {
    return _findEnumIndex(@(type), [_getCallIWUserType() indexDictionary]);
}

#pragma mark - RCCallIWCallType
NSArray *_getCallIWCallType(void) {
    return @[@(RCCallIWCallTypeSingle),
             @(RCCallIWCallTypeGroup)];
}

RCCallIWCallType toCallIWCallType(int type) {
    return _findEnum(type, _getCallIWCallType());
}

NSInteger fromCallIWCallType(RCCallIWCallType type) {
    return _findEnumIndex(@(type), [_getCallIWCallType() indexDictionary]);
}

#pragma mark - RCCallIWMediaType
NSArray *_getCallIWMediaType(void) {
    return @[@(RCCallIWMediaTypeAudio),
             @(RCCallIWMediaTypeAudioVideo)];
}

RCCallIWMediaType toCallIWMediaType(int type) {
    return _findEnum(type, _getCallIWMediaType());
}

NSInteger fromCallIWMediaType(RCCallIWMediaType type) {
    return _findEnumIndex(@(type), [_getCallIWMediaType() indexDictionary]);
}

#pragma mark - RCCallIWCamera
NSArray *_getCallIWCamera(void) {
    return @[@(RCCallIWCameraNone),
             @(RCCallIWCameraFront),
             @(RCCallIWCameraBack)];
}

RCCallIWCamera toCallIWCamera(int type) {
    return _findEnum(type, _getCallIWCamera());
}

NSInteger fromCallIWCamera(RCCallIWCamera camera) {
    return _findEnumIndex(@(camera), [_getCallIWCamera() indexDictionary]);
}

#pragma mark - RCCallIWNetworkQuality
NSArray *_getCallIWNetworkQuality(void) {
    return @[@(RCCallIWNetworkQualityUnknown),
             @(RCCallIWNetworkQualityExcellent),
             @(RCCallIWNetworkQualityGood),
             @(RCCallIWNetworkQualityPoor),
             @(RCCallIWNetworkQualityBad),
             @(RCCallIWNetworkQualityTerrible)];
}

RCCallIWNetworkQuality toCallIWNetworkQuality(int type) {
    return _findEnum(type, _getCallIWNetworkQuality());
}

NSInteger fromCallIWNetworkQuality(RCCallIWNetworkQuality quality) {
    return _findEnumIndex(@(quality), [_getCallIWNetworkQuality() indexDictionary]);
}

#pragma mark - RCCallIWViewFitType
NSArray *_getCallIWViewFitType(void) {
    return @[@(RCCallIWViewFitTypeFill),
             @(RCCallIWViewFitTypeCover),
             @(RCCallIWViewFitTypeCenter)];
}

RCCallIWViewFitType toCallIWViewFitType(int type) {
    return _findEnum(type, _getCallIWViewFitType());
}

NSInteger fromCallIWViewFitType(RCCallIWViewFitType type) {
    return _findEnumIndex(@(type), [_getCallIWViewFitType() indexDictionary]);
}

#pragma mark - RCCallIWVideoProfile
NSArray *_getCallIWVideoProfile(void) {
    return @[@(RCCallIW_VIDEO_PROFILE_144_256),
             @(RCCallIW_VIDEO_PROFILE_240_240),
             @(RCCallIW_VIDEO_PROFILE_240_320),
             @(RCCallIW_VIDEO_PROFILE_360_480),
             @(RCCallIW_VIDEO_PROFILE_360_640),
             @(RCCallIW_VIDEO_PROFILE_480_640),
             @(RCCallIW_VIDEO_PROFILE_480_720),
             @(RCCallIW_VIDEO_PROFILE_720_1280),
             @(RCCallIW_VIDEO_PROFILE_1080_1920),
             @(RCCallIW_VIDEO_PROFILE_144_256_HIGH),
             @(RCCallIW_VIDEO_PROFILE_240_240_HIGH),
             @(RCCallIW_VIDEO_PROFILE_240_320_HIGH),
             @(RCCallIW_VIDEO_PROFILE_360_480_HIGH),
             @(RCCallIW_VIDEO_PROFILE_360_640_HIGH),
             @(RCCallIW_VIDEO_PROFILE_480_640_HIGH),
             @(RCCallIW_VIDEO_PROFILE_480_720_HIGH),
             @(RCCallIW_VIDEO_PROFILE_720_1280_HIGH),
             @(RCCallIW_VIDEO_PROFILE_1080_1920_HIGH)];
}

RCCallIWVideoProfile toCallIWVideoProfile(int type) {
    return _findEnum(type, _getCallIWVideoProfile());
}

NSInteger fromCallIWVideoProfile(RCCallIWVideoProfile profile) {
    return _findEnumIndex(@(profile), [_getCallIWVideoProfile() indexDictionary]);
}

#pragma mark - RCCallIWCameraOrientation
NSArray *_getCallIWCameraOrientation(void) {
    return @[@(RCCallIWCameraOrientationPortrait),
             @(RCCallIWCameraOrientationPortraitUpsideDown),
             @(RCCallIWCameraOrientationLandscapeRight),
             @(RCCallIWCameraOrientationLandscapeLeft)];
}

RCCallIWCameraOrientation toCallIWCameraOrientation(int type) {
    return _findEnum(type, _getCallIWCameraOrientation());
}

NSInteger fromCallIWCameraOrientation(RCCallIWCameraOrientation orientation) {
    return _findEnumIndex(@(orientation), [_getCallIWCameraOrientation() indexDictionary]);
}

#pragma mark - RCCallIWCallDisconnectedReason
NSArray *_getCallIWCallDisconnectedReason(void) {
    return @[@(RCCallIWCallDisconnectedReasonCancel),
             @(RCCallIWCallDisconnectedReasonReject),
             @(RCCallIWCallDisconnectedReasonHangup),
             @(RCCallIWCallDisconnectedReasonBusyLine),
             @(RCCallIWCallDisconnectedReasonNoResponse),
             @(RCCallIWCallDisconnectedReasonEngineUnsupported),
             @(RCCallIWCallDisconnectedReasonNetworkError),
             @(RCCallIWCallDisconnectedReasonRemoteCancel),
             @(RCCallIWCallDisconnectedReasonRemoteReject),
             @(RCCallIWCallDisconnectedReasonRemoteHangup),
             @(RCCallIWCallDisconnectedReasonRemoteBusyLine),
             @(RCCallIWCallDisconnectedReasonRemoteNoResponse),
             @(RCCallIWCallDisconnectedReasonRemoteEngineUnsupported),
             @(RCCallIWCallDisconnectedReasonRemoteNetworkError),
             @(RCCallIWCallDisconnectedReasonAcceptByOtherClient),
             @(RCCallIWCallDisconnectedReasonAddToBlackList),
             @(RCCallIWCallDisconnectedReasonDegrade),
             @(RCCallIWCallDisconnectedReasonKickedByServer),
             @(RCCallIWCallDisconnectedReasonMediaServerClosed)];
}

RCCallIWCallDisconnectedReason toCallIWCallDisconnectedReason(int type) {
    return _findEnum(type, _getCallIWCallDisconnectedReason());
}

NSInteger fromCallIWCallDisconnectedReason(RCCallIWCallDisconnectedReason reason) {
    return _findEnumIndex(@(reason), [_getCallIWCallDisconnectedReason() indexDictionary]);
}

/*
 * DICTIONARY TO MODEL...
 */
RCCallIWEngineConfig *toCallIWEngineConfig(NSDictionary *arguments) {
    
    RCUNICallAssert(arguments, @"RCCallIWEngineConfig")
    
    RCCallIWEngineConfig *config = [[RCCallIWEngineConfig alloc] init];
    config.enableCallSummary     = [arguments rcUniCall_getBool:@"enableCallSummary" defaultValue:NO];
    return config;
}

RCCallIWPushConfig *toCallIWPushConfig(NSDictionary *arguments) {
    
    RCUNICallAssert(arguments, @"RCCallIWPushConfig")
    
    RCCallIWPushConfig *config    = [[RCCallIWPushConfig alloc] init];
    config.disableTitle           = [arguments rcUniCall_getBool:@"disableTitle"];
    config.title                  = [arguments rcUniCall_getString:@"title"];
    config.content                = [arguments rcUniCall_getString:@"content"];
    config.data                   = [arguments rcUniCall_getString:@"data"];
    config.forceShowDetailContent = [arguments rcUniCall_getBool:@"forceShowDetailContent"];
    config.templateId             = [arguments rcUniCall_getString:@"templateId"];
    config.iOSConfig              = toCallIWIOSPushConfig([arguments rcUniCall_getDictionary:@"iOSConfig"]);
    config.androidConfig          = toCallIWAndroidPushConfig([arguments rcUniCall_getDictionary:@"androidConfig"]);
    return config;
}

RCCallIWIOSPushConfig *toCallIWIOSPushConfig(NSDictionary *arguments) {
    
    RCUNICallAssert(arguments, @"RCCallIWIOSPushConfig")
    
    RCCallIWIOSPushConfig *config = [[RCCallIWIOSPushConfig alloc] init];
    config.threadId               = [arguments rcUniCall_getString:@"threadId"];
    config.category               = [arguments rcUniCall_getString:@"category"];
    config.apnsCollapseId         = [arguments rcUniCall_getString:@"apnsCollapseId"];
    config.richMediaUri           = [arguments rcUniCall_getString:@"richMediaUri"];
    return config;
}

RCCallIWAndroidPushConfig *toCallIWAndroidPushConfig(NSDictionary *arguments) {
    
    RCUNICallAssert(arguments, @"RCCallIWAndroidPushConfig")
    
    RCCallIWAndroidPushConfig *config = [[RCCallIWAndroidPushConfig alloc] init];
    config.notificationId             = [arguments rcUniCall_getString:@"notificationId"];
    config.channelIdMi                = [arguments rcUniCall_getString:@"channelIdMi"];
    config.channelIdHW                = [arguments rcUniCall_getString:@"channelIdHW"];
    config.channelIdOPPO              = [arguments rcUniCall_getString:@"channelIdOPPO"];
    config.typeVivo                   = [arguments rcUniCall_getString:@"typeVivo"];
    config.collapseKeyFCM             = [arguments rcUniCall_getString:@"collapseKeyFCM"];
    config.imageUrlFCM                = [arguments rcUniCall_getString:@"imageUrlFCM"];
    return config;
}

RCCallIWAudioConfig *toCallIWAudioConfig(NSDictionary *arguments) {
    
    RCUNICallAssert(arguments, @"RCCallIWAudioConfig")
    
    RCCallIWAudioConfig *config = [[RCCallIWAudioConfig alloc] init];
    return config;
}

RCCallIWVideoConfig *toCallIWVideoConfig(NSDictionary *arguments) {
    
    RCUNICallAssert(arguments, @"RCCallIWVideoConfig")
    
    NSNumber *profile = [arguments rcUniCall_getNumber:@"profile"];
    NSNumber *defaultCamera = [arguments rcUniCall_getNumber:@"defaultCamera"];
    NSNumber *cameraOrientation = [arguments rcUniCall_getNumber:@"cameraOrientation"];
     
    RCCallIWVideoConfig *config = [[RCCallIWVideoConfig alloc] init];
    config.profile = profile ? toCallIWVideoProfile([profile intValue]) : kDefaultCallIWVideoProfile;
    config.defaultCamera = defaultCamera ? toCallIWCamera([defaultCamera intValue]) : kDefaultCallIWCamera;
    config.cameraOrientation = cameraOrientation ? toCallIWCameraOrientation([cameraOrientation intValue]) : kDefaultCallIWCameraOrientation;
    return config;
}

/*
 * MODEL TO DICTIONARY...
 */
NSDictionary *fromCallIWEngineConfig(RCCallIWEngineConfig *config) {
    
    RCUNIReturnIfNeed(!config, nil)
    
    NSMutableDictionary *dictionary = [NSMutableDictionary dictionary];
    [dictionary setValue:@(config.enableCallSummary) forKey:@"enableCallSummary"];
    return dictionary;
}

NSDictionary *fromCallIWPushConfig(RCCallIWPushConfig *config) {
    
    RCUNIReturnIfNeed(!config, nil)
    
    NSMutableDictionary *dictionary = [NSMutableDictionary dictionary];
    [dictionary setValue:@(config.disableTitle) forKey:@"disableTitle"];
    [dictionary setValue:config.title forKey:@"title"];
    [dictionary setValue:config.content forKey:@"content"];
    [dictionary setValue:config.data forKey:@"data"];
    [dictionary setValue:@(config.forceShowDetailContent) forKey:@"forceShowDetailContent"];
    [dictionary setValue:config.templateId forKey:@"templateId"];
    [dictionary setValue:fromCallIWIOSPushConfig(config.iOSConfig) forKey:@"iOSConfig"];
    [dictionary setValue:fromCallIWAndroidPushConfig(config.androidConfig) forKey:@"androidConfig"];
    return dictionary;
}

NSDictionary *fromCallIWIOSPushConfig(RCCallIWIOSPushConfig *config) {
    
    RCUNIReturnIfNeed(!config, nil)
    
    NSMutableDictionary *dictionary = [NSMutableDictionary dictionary];
    [dictionary setValue:config.threadId forKey:@"threadId"];
    [dictionary setValue:config.category forKey:@"category"];
    [dictionary setValue:config.apnsCollapseId forKey:@"apnsCollapseId"];
    [dictionary setValue:config.richMediaUri forKey:@"richMediaUri"];
    return dictionary;
}

NSDictionary *fromCallIWAndroidPushConfig(RCCallIWAndroidPushConfig *config) {
    
    RCUNIReturnIfNeed(!config, nil)
    
    NSMutableDictionary *dictionary = [NSMutableDictionary dictionary];
    [dictionary setValue:config.notificationId forKey:@"notificationId"];
    [dictionary setValue:config.channelIdMi forKey:@"channelIdMi"];
    [dictionary setValue:config.channelIdHW forKey:@"channelIdHW"];
    [dictionary setValue:config.channelIdOPPO forKey:@"channelIdOPPO"];
    [dictionary setValue:config.channelIdOPPO forKey:@"channelIdOPPO"];
    [dictionary setValue:config.typeVivo forKey:@"typeVivo"];
    [dictionary setValue:config.collapseKeyFCM forKey:@"collapseKeyFCM"];
    [dictionary setValue:config.imageUrlFCM forKey:@"imageUrlFCM"];
    return dictionary;
}

NSDictionary *fromCallIWAudioConfig(RCCallIWAudioConfig *config) {
    
    RCUNIReturnIfNeed(!config, nil)
    
    NSMutableDictionary *dictionary = [NSMutableDictionary dictionary];
    return dictionary;
}

NSDictionary *fromCallIWVideoConfig(RCCallIWVideoConfig *config) {
    
    RCUNIReturnIfNeed(!config, nil)
    
    NSMutableDictionary *dictionary = [NSMutableDictionary dictionary];
    [dictionary setValue:@(fromCallIWVideoProfile(config.profile)) forKey:@"profile"];
    [dictionary setValue:@(fromCallIWCamera(config.defaultCamera)) forKey:@"defaultCamera"];
    [dictionary setValue:@(fromCallIWCameraOrientation(config.cameraOrientation)) forKey:@"cameraOrientation"];
    return dictionary;
}

NSDictionary *fromCallIWUserProfile(RCCallIWUserProfile *profile) {
    
    RCUNIReturnIfNeed(!profile, nil)
    
    NSMutableDictionary *dictionary = [NSMutableDictionary dictionary];
    [dictionary setValue:@(fromCallIWUserType(profile.userType)) forKey:@"userType"];
    [dictionary setValue:@(fromCallIWMediaType(profile.mediaType)) forKey:@"mediaType"];
    [dictionary setValue:profile.userId forKey:@"userId"];
    [dictionary setValue:profile.mediaId forKey:@"mediaId"];
    [dictionary setValue:@(profile.enableCamera) forKey:@"enableCamera"];
    [dictionary setValue:@(profile.enableMicrophone) forKey:@"enableMicrophone"];
    return dictionary;
}

NSDictionary *fromCallIWCallSession(RCCallIWCallSession *session) {
    
    RCUNIReturnIfNeed(!session, nil)
    
    NSMutableDictionary *dictionary = [NSMutableDictionary dictionary];
    [dictionary setValue:@(fromCallIWCallType(session.callType)) forKey:@"callType"];
    [dictionary setValue:@(fromCallIWMediaType(session.mediaType)) forKey:@"mediaType"];
    [dictionary setValue:session.callId forKey:@"callId"];
    [dictionary setValue:session.targetId forKey:@"targetId"];
    [dictionary setValue:session.sessionId forKey:@"sessionId"];
    [dictionary setValue:@(session.startTime) forKey:@"startTime"];
    [dictionary setValue:@(session.connectedTime) forKey:@"connectedTime"];
    [dictionary setValue:@(session.endTime) forKey:@"endTime"];
    [dictionary setValue:fromCallIWUserProfile(session.caller) forKey:@"caller"];
    [dictionary setValue:fromCallIWUserProfile(session.inviter) forKey:@"inviter"];
    [dictionary setValue:fromCallIWUserProfile(session.mine) forKey:@"mine"];
    [dictionary setValue:[session.users mapTo:^id _Nonnull(RCCallIWUserProfile * _Nonnull obj) {
        return fromCallIWUserProfile(obj);
    }] forKey:@"users"];
    return dictionary;
}
