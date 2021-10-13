//
//  NSDictionary+RCUniCall.m
//  RCUniCall
//
//  Created by RongCloud on 2021/8/3.
//

#import "NSDictionary+RCUniCall.h"

@implementation NSDictionary (RCUniCall)

- (nullable id)rcUniCall_getValue:(Class)vClass forKey:(NSString *)key {
    return [self rcUniCall_getValue:vClass forKey:key defaultValue:nil];
}

- (nullable id)rcUniCall_getValue:(Class)vClass forKey:(NSString *)key defaultValue:(nullable id)defaultValue {
    
    if (![self.allKeys containsObject:key]) {
        return defaultValue;
    }
    
    id value = [self valueForKey:key];
    
    if (!value || ![value isKindOfClass:vClass]) {
        return defaultValue;
    }
    
    return value;
}

- (BOOL)rcUniCall_getBool:(NSString *)key {
    return [[self rcUniCall_getValue:[NSNumber class] forKey:key defaultValue:@(NO)] boolValue];
}

- (BOOL)rcUniCall_getBool:(NSString *)key defaultValue:(BOOL)defaultValue {
    return [[self rcUniCall_getValue:[NSNumber class] forKey:key defaultValue:@(defaultValue)] boolValue];
}

- (NSInteger)rcUniCall_getInteger:(NSString *)key {
    return [[self rcUniCall_getValue:[NSNumber class] forKey:key defaultValue:@(0)] integerValue];
}

- (NSInteger)rcUniCall_getInteger:(NSString *)key defaultValue:(NSInteger)defaultValue {
    return [[self rcUniCall_getValue:[NSNumber class] forKey:key defaultValue:@(defaultValue)] integerValue];
}

- (CGFloat)rcUniCall_getFloat:(NSString *)key {
    return [[self rcUniCall_getValue:[NSNumber class] forKey:key defaultValue:@(0)] floatValue];
}

- (CGFloat)rcUniCall_getFloat:(NSString *)key defaultValue:(CGFloat)defaultValue {
    return [[self rcUniCall_getValue:[NSNumber class] forKey:key defaultValue:@(defaultValue)] floatValue];
}

- (nullable NSNumber *)rcUniCall_getNumber:(NSString *)key {
    return [self rcUniCall_getValue:[NSNumber class] forKey:key defaultValue:nil];
}

- (nullable NSNumber *)rcUniCall_getNumber:(NSString *)key defaultValue:(nullable NSNumber *)defaultValue {
    return [self rcUniCall_getValue:[NSNumber class] forKey:key defaultValue:defaultValue];
}

- (nullable NSString *)rcUniCall_getString:(NSString *)key {
    return [self rcUniCall_getValue:[NSString class] forKey:key defaultValue:nil];
}

- (nullable NSString *)rcUniCall_getString:(NSString *)key defaultValue:(nullable NSString *)defaultValue {
    return [self rcUniCall_getValue:[NSString class] forKey:key defaultValue:defaultValue];
}

- (nullable NSDictionary *)rcUniCall_getDictionary:(NSString *)key {
    return [self rcUniCall_getValue:[NSDictionary class] forKey:key defaultValue:nil];
}

- (nullable NSArray *)rcUniCall_getArray:(NSString *)key {
    return [self rcUniCall_getValue:[NSArray class] forKey:key defaultValue:nil];
}

@end
