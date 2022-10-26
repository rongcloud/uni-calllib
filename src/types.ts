import {
  RCCallIWAudioCodecType,
  RCCallIWAudioSource as RCCallIWAudioSource,
  RCCallIWCallDisconnectedReason,
  RCCallIWCamera,
  RCCallIWCameraOrientation,
  RCCallIWNetworkQuality,
  RCCallIWVideoBitrateMode,
  RCCallIWVideoProfile as RCCallIWVideoProfile,
  RCUNICallErrorCode
} 
from './enum';
export interface UniListenerResult <T>{
  module:string,
  type:string,
  data:T
}
export interface usersParams {
  userId:string,
  mediaType:string,
  enableCamera:string,
  userType:string,
  enableMicrophone:string,
  mediaId?:string
}
export interface ReceivedListenerResult{
  mine:usersParams,
  inviter:usersParams,
  startTime:number,
  caller:usersParams,
  mediaType:number,
  callType:number,
  endTime:number,
  extra:string,
  targetId:string,
  connectedTime:number,
  users:usersParams[],
  callId:string
}
export interface ListenerResultRes{
  reason?:RCCallIWCallDisconnectedReason
}
export interface ListenerResultError{
  reason?:RCUNICallErrorCode
}
export interface ListenerResultData{
  userId?:string,
  user?:usersParams,
  mediaType?:string

}

export interface ListenerNetworkQualityData {
  user?: usersParams,
  quality: RCCallIWNetworkQuality
}

export interface ListenerCameraSwitchData {
  camera: RCCallIWCamera
}

export interface ListenerCameraEnableData {
  camera: RCCallIWCamera,
  enable: boolean,
}


export interface RCCallIWAudioConfig {

  /**
   * 是否禁用麦克风
   * 仅 Android 平台生效
   */
  enableMicrophone?: boolean,

  /**
   * 音频是否支持立体声
   * 仅 Android 平台生效
   */
  enableStereo?: boolean,
  /**
   * 音源类型
   */
  audioSource?: RCCallIWAudioSource,


  audioBitrate?: number,

  /**
   * 音频采样率
   * 8000, 16000, 32000, 44100, 48000
   * 仅 Android 平台生效
   */
  audioSampleRate?: number,

  /**
   * 音频编译类型
   * 0: PCMU , 111: OPUS;
   * 仅 Android 平台生效
   */
  type?: RCCallIWAudioCodecType,
}

/**
 *  视频配置
 */
export interface RCCallIWVideoConfig {

  /**
   * 通话视频参数
   */
  profile?: RCCallIWVideoProfile,

  /**
   * 默认打开的摄像头
   */
  defaultCamera?: RCCallIWCamera,

  /**
   * 摄像头方向
   */
  cameraOrientation?: RCCallIWCameraOrientation,

  /**
   * 本地摄像头采集是否镜像
   * 前置摄像头默认: YES，后置摄像头默认: NO
   */
  isPreviewMirror?: boolean,

  /**
   * 是否采用硬解码
   * 仅 Android 生效
   */
  enableHardwareDecoder?: boolean,

  /**
   * 
   * 仅 Android 生效
   */
  hardwareDecoderColor?: number,

  /**
   * 设备是否采用硬编码
   * 仅 Android 生效
   */
  enableHardwareEncoder?: boolean,

  /**
   * 设置硬编码压缩等级是否为 MediaCodecInfo.CodecProfileLevel.AVCProfileHigh 
   * 仅 Android 生效
   */
  enableHardwareEncoderHighProfile?: boolean,

  /**
   * 设置硬解码颜色空间 该值必须是本设备H264解码器所支持的值,可以通过 获取本机所支持的编解码器、颜色空间信息
   * 仅 Android 生效
   */
  hardWareEncoderColor?: number,

  /**
   * 设置系统硬编码器的编码帧率
   * 仅 Android 生效
   */
  hardwareEncoderFrameRate?: number,

  /**
   * 设置硬编码码率控制模式 仅 Android 系统 5.0 及以上版本设置有效
   * 仅 Android 生效
   */
  hardwareEncoderBitrateMode?: RCCallIWVideoBitrateMode,
}

