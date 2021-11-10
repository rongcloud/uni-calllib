# 融云音视频通话 CallLib uni-app SDK 

本代码仓库集合了融云实时音视频产品[音视频通话]在 uni-app 端的 SDK 和示例项目，以便开发者体验产品，快速集成和开发音视频电话功能。

本仓库关键目录说明如下: 

1. [example](example): uni-app 平台测试 demo，演示了融云音视频通话 CallLib uni-app SDK 的音视频电话功能，含呼叫、接听、挂断等流程。
1. [src](src): 封装的 CallLib Typescript 接口。
1. [ios](ios): iOS 端源码。
1. [android](android): Android 端源码。
1. [docs](docs): API 文档。更多请转至[融云官方 uni-app 开发者文档](http://doc.rongcloud.cn/call/uni-app/5.X/prepare)。


## 前提条件

* 您需要有 App Key 才能换取客户端连接融云服务器的身份凭证。请开通融云开发者账号，并在后台 [获取 App Key](https://developer.rongcloud.cn/app/appkey)。
* 推荐使用 HBuilder X 版本。如果您尚未安装，请在 [DCloud 官网下载](https://www.dcloud.io/hbuilderx.html) 并安装。
* Android 4.4 及以上
* iOS 9.0 及以上

## 运行示例应用

具体步骤请参见[example](example)。

## 导入 SDK

您需要使用 HBuilder X 导入原生插件 `RCUniIm` 和 `RCUniCall`。配置完成后，通过 NPM 安装 `@rongcloud/imlib-uni` 和 `@rongcloud/calllib-uni` 依赖。

具体步骤请参见[imlib-uni calllib-uni 包使用文档](INTRODUCTION.md)，或[融云官方 uni-app 开发者文档](http://doc.rongcloud.cn/call/uni-app/5.X/calllib/import)。


## API 参考文档

- [imlib-uni 接口文档](https://rongcloud.github.io/rongcloud-uniapp-imlib/)
- [calllib-uni 接口文档](https://rongcloud.github.io/uni-calllib/)

## 支持

任何问题可以通过 Github Issues 提问。


