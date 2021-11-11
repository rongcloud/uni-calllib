export enum RCCallIWCamera {
  NONE = -1,
  FRONT = 0,
  BACK = 1
}
/**
 * 通话媒体类型
 */
 export enum RCCallIWMediaType {
  /**
   * 音频通话
   */
  AUDIO = 0,
  /**
   * 视频通话
   */
  AUDIO_VIDEO = 1
}
export enum RCUNICallErrorCode {

  // 成功
  SUCCESS = 0,

  // android only 开通的音视频服务没有及时生效或音视频服务已关闭，请等待3-5小时后重新安装应用或开启音视频服务再进行测试
  ENGINE_NOT_FOUND = 1,

  // ios only 网络不可用
  NETWORK_UNAVAILABLE = 2,

  // ios only 已经处于通话中了
  ONE_CALL_EXISTED = 3,

  // ios only 无效操作
  OPERATION_UNAVAILABLE = 4,

  // ios only 参数错误
  INVALID_PARAM = 5,

  // ios only 网络不稳定
  NETWORK_UNSTABLE = 6,

  // ios only 媒体服务请求失败
  MEDIA_REQUEST_FAILED = 7,

  // ios only 媒体服务初始化失败
  MEDIA_SERVER_NOT_READY = 8,

  // ios only  媒体服务未初始化
  MEDIA_SERVER_NOT_INITIALIZED = 9,

  // ios only  媒体服务请求超时
  MEDIA_REQUEST_TIMEOUT = 10,

  // ios only  未知的媒体服务错误
  MEDIA_UNKOWN_ERROR = 11,

  // ios only  已被禁止通话
  MEDIA_KICKED_BY_SERVER_ERROR = 12,

  // ios only 音视频服务已关闭
  MEDIA_SERVER_CLOSED_ERROR = 13,

  // ios only 音视频发布资源失败
  MEDIA_SERVER_PUBLISH_ERROR = 14,

  // ios only 音视频订阅资源失败
  MEDIA_SERVER_SUBSCRIBE_ERROR = 15,

  // ios only 其他端已在通话中错误
  MEDIA_JOIN_ROOM_REFUSE_ERROR = 16

}
export enum RCCallIWCallDisconnectedReason{
    // 己方取消已发出的通话请求
  CANCEL = 0,

  // 己方拒绝收到的通话请求
  REJECT = 1,

  // 己方挂断
  HANGUP = 2,

  // 己方忙碌
  BUSY_LINE = 3,

  // 己方未接听
  NO_RESPONSE = 4,

  // 己方不支持当前引擎
  ENGINE_UNSUPPORTED = 5,

  // 己方网络出错
  NETWORK_ERROR = 6,

  // 己方获取媒体资源失败
  RESOURCE_GET_ERROR = 7,

  // 己方发布资源失败
  RESOURCE_PUBLISH_ERROR = 8,

  // 己方订阅资源失败
  RESOURCE_SUBSCRIBE_ERROR = 9,

  // 对方取消已发出的通话请求
  REMOTE_CANCEL = 10,

  // 对方拒绝收到的通话请求
  REMOTE_REJECT = 11,

  // 通话过程对方挂断
  REMOTE_HANGUP = 12,

  // 对方忙碌
  REMOTE_BUSY_LINE = 13,

  // 对方未接听
  REMOTE_NO_RESPONSE = 14,

  // 对方不支持当前引擎
  REMOTE_ENGINE_UNSUPPORTED = 15,

  // 对方网络错误
  REMOTE_NETWORK_ERROR = 16,

  // 对方获取媒体资源失败
  REMOTE_RESOURCE_GET_ERROR = 17,

  // 对方发布资源失败
  REMOTE_RESOURCE_PUBLISH_ERROR = 18,

  // 对方订阅资源失败
  REMOTE_RESOURCE_SUBSCRIBE_ERROR = 19,

  // 己方其他端已加入新通话
  KICKED_BY_OTHER_CALL = 20,

  // 己方其他端已在通话中
  IN_OTHER_CALL = 21,

  // 己方已被禁止通话
  KICKED_BY_SERVER = 22,

  // 对方其他端已加入新通话
  REMOTE_KICKED_BY_OTHER_CALL = 23,

  // 对方其他端已在通话中
  REMOTE_IN_OTHER_CALL = 24,

  // 对方已被禁止通话
  REMOTE_KICKED_BY_SERVER = 25,

  // 己方其他端已接听
  ACCEPT_BY_OTHER_CLIENT = 26,

  // 己方其他端已挂断
  HANGUP_BY_OTHER_CLIENT = 27,

  // 己方被对方加入黑名单
  REJECTED_BY_BLACKLIST = 28,

  // 音视频服务已关闭
  SERVICE_NOT_OPENED = 29,

  // 己方被降级为观察者
  DROP_TO_OBSERVER = 30,

  // 己方摄像头初始化错误，可能是没有打开使用摄像头权限
  INIT_VIDEO_ERROR = 31,

  // 其他端已经接听
  OTHER_DEVICE_HAD_ACCEPTED = 32,

  // im ipc服务已断开
  SERVICE_DISCONNECTED = 33
}
export enum RCCallIWBeautyFilterType {
  NONE = 0,
  ESTHETIC = 1,
  FRESH = 2,
  ROMANTIC = 3 

}