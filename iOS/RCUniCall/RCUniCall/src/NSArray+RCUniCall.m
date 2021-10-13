//
//  NSArray+RCUniCall.m
//  RCUniCall
//
//  Created by RongCloud on 2021/8/3.
//

#import "NSArray+RCUniCall.h"

@implementation NSArray (RCUniCall)

- (NSDictionary *)indexDictionary {
    NSMutableDictionary *dictionary = [NSMutableDictionary dictionaryWithCapacity:self.count];
    [self enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        [dictionary setObject:@(idx) forKey:obj];
    }];
    return dictionary;
}

- (NSArray *)mapTo:(id(^)(id obj))block {
    NSMutableArray *newArray = [NSMutableArray arrayWithCapacity:self.count];
    [self enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        [newArray addObject:block(obj)];
    }];
    return newArray;
}

@end
