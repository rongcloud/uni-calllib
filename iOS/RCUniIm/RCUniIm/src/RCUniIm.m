#import "RCUniIm.h"

#import <RongIMLib/RongIMLib.h>

@implementation RCUniIm

UNI_EXPORT_METHOD_SYNC(@selector(setServerInfo:file:));

UNI_EXPORT_METHOD_SYNC(@selector(init:));

UNI_EXPORT_METHOD(@selector(connect:callback:));

UNI_EXPORT_METHOD_SYNC(@selector(disconnect));

#pragma mark ---------------------- functions ----------------------

- (BOOL)setServerInfo:(NSString *)navigate
                 file:(NSString *)file {
    BOOL ret = [[RCIMClient sharedRCIMClient] setServerInfo:navigate fileServer:file];
    return ret;
}

- (void)init:(NSString *)key {
    [[RCIMClient sharedRCIMClient] initWithAppKey:key];
}

- (void)connect:(NSString *)token callback:(UniModuleKeepAliveCallback)callback {
    [[RCIMClient sharedRCIMClient] connectWithToken:token dbOpened:^(RCDBErrorCode code) {
    } success:^(NSString *userId) {
        NSMutableDictionary *dic = [NSMutableDictionary dictionary];
        [dic setObject:@(0) forKey:@"error"];
        [dic setObject:userId forKey:@"userId"];
        callback(dic, NO);
    } error:^(RCConnectErrorCode errorCode) {
        NSMutableDictionary *dic = [NSMutableDictionary dictionary];
        [dic setObject:@(errorCode) forKey:@"error"];
        callback(dic, NO);
    }];
}

- (void)disconnect {
    [[RCIMClient sharedRCIMClient] disconnect];
}

@end
  
