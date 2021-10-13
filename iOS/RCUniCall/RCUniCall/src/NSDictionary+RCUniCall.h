//
//  NSDictionary+RCUniCall.h
//  RCUniCall
//
//  Created by RongCloud on 2021/8/3.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSDictionary (RCUniCall)

- (nullable id)rcUniCall_getValue:(Class)vClass forKey:(NSString *)key;
- (nullable id)rcUniCall_getValue:(Class)vClass forKey:(NSString *)key defaultValue:(nullable id)defaultValue;

- (BOOL)rcUniCall_getBool:(NSString *)key;
- (BOOL)rcUniCall_getBool:(NSString *)key defaultValue:(BOOL)defaultValue;

- (NSInteger)rcUniCall_getInteger:(NSString *)key;
- (NSInteger)rcUniCall_getInteger:(NSString *)key defaultValue:(NSInteger)defaultValue;

- (CGFloat)rcUniCall_getFloat:(NSString *)key;
- (CGFloat)rcUniCall_getFloat:(NSString *)key defaultValue:(CGFloat)defaultValue;

- (nullable NSNumber *)rcUniCall_getNumber:(NSString *)key;
- (nullable NSNumber *)rcUniCall_getNumber:(NSString *)key defaultValue:(nullable NSNumber *)defaultValue;

- (nullable NSString *)rcUniCall_getString:(NSString *)key;
- (nullable NSString *)rcUniCall_getString:(NSString *)key defaultValue:(nullable NSString *)defaultValue;

- (nullable NSDictionary *)rcUniCall_getDictionary:(NSString *)key;

- (nullable NSArray *)rcUniCall_getArray:(NSString *)key;

@end

NS_ASSUME_NONNULL_END
