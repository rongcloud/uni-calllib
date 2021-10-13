//
//  RCUniCallView.m
//  RCUniCall
//
//  Created by RongCloud on 2021/8/3.
//

#import "RCUniCallView.h"
#import "RCUniCallVideoView.h"

@implementation RCUniCallView

- (UIView *)loadView {
    RCUniCallVideoView *view = [[RCUniCallVideoView alloc] init];
    return view;
}

@end
