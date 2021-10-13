//
//  NSArray+RCUniCall.h
//  RCUniCall
//
//  Created by RongCloud on 2021/8/3.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSArray<ObjectType> (RCUniCall)

- (NSDictionary *)indexDictionary;

- (NSArray *)mapTo:(id(^)(ObjectType obj))block;

@end

NS_ASSUME_NONNULL_END
