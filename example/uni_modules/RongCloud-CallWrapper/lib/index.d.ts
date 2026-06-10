/*
 * RCCallUni - v5.30.0
 * CommitId - cf4b2f0ffe2ae11c39bbfc216890745f254753c9
 * Tue Dec 02 2025 16:50:41 GMT+0800 (China Standard Time)
 * ©2020 RongCloud, Inc. All rights reserved.
 */
/**
 * 摄像头类型
 */
declare enum RCCallIWCamera {
    NONE = 0,
    /**
     * 前置摄像头
     */
    FRONT = 1,
    /**
     * 后置摄像头
     */
    BACK = 2
}
/**
 * 通话媒体类型
 */
declare enum RCCallIWMediaType {
    /**
     * 音频通话
     */
    AUDIO = 0,
    /**
     * 视频通话
     */
    AUDIO_VIDEO = 1
}
declare enum RCUNICallErrorCode {
    SUCCESS = 0,
    ENGINE_NOT_FOUND = 1,
    NETWORK_UNAVAILABLE = 2,
    ONE_CALL_EXISTED = 3,
    OPERATION_UNAVAILABLE = 4,
    INVALID_PARAM = 5,
    NETWORK_UNSTABLE = 6,
    MEDIA_REQUEST_FAILED = 7,
    MEDIA_SERVER_NOT_READY = 8,
    MEDIA_SERVER_NOT_INITIALIZED = 9,
    MEDIA_REQUEST_TIMEOUT = 10,
    MEDIA_UNKOWN_ERROR = 11,
    MEDIA_KICKED_BY_SERVER_ERROR = 12,
    MEDIA_SERVER_CLOSED_ERROR = 13,
    MEDIA_SERVER_PUBLISH_ERROR = 14,
    MEDIA_SERVER_SUBSCRIBE_ERROR = 15,
    MEDIA_JOIN_ROOM_REFUSE_ERROR = 16
}
declare enum RCCallIWCallDisconnectedReason {
    CANCEL = 0,
    REJECT = 1,
    HANGUP = 2,
    BUSY_LINE = 3,
    NO_RESPONSE = 4,
    ENGINE_UNSUPPORTED = 5,
    NETWORK_ERROR = 6,
    RESOURCE_GET_ERROR = 7,
    RESOURCE_PUBLISH_ERROR = 8,
    RESOURCE_SUBSCRIBE_ERROR = 9,
    REMOTE_CANCEL = 10,
    REMOTE_REJECT = 11,
    REMOTE_HANGUP = 12,
    REMOTE_BUSY_LINE = 13,
    REMOTE_NO_RESPONSE = 14,
    REMOTE_ENGINE_UNSUPPORTED = 15,
    REMOTE_NETWORK_ERROR = 16,
    REMOTE_RESOURCE_GET_ERROR = 17,
    REMOTE_RESOURCE_PUBLISH_ERROR = 18,
    REMOTE_RESOURCE_SUBSCRIBE_ERROR = 19,
    KICKED_BY_OTHER_CALL = 20,
    IN_OTHER_CALL = 21,
    KICKED_BY_SERVER = 22,
    REMOTE_KICKED_BY_OTHER_CALL = 23,
    REMOTE_IN_OTHER_CALL = 24,
    REMOTE_KICKED_BY_SERVER = 25,
    ACCEPT_BY_OTHER_CLIENT = 26,
    HANGUP_BY_OTHER_CLIENT = 27,
    REJECTED_BY_BLACKLIST = 28,
    SERVICE_NOT_OPENED = 29,
    DROP_TO_OBSERVER = 30,
    INIT_VIDEO_ERROR = 31,
    OTHER_DEVICE_HAD_ACCEPTED = 32,
    SERVICE_DISCONNECTED = 33
}
/**
 * 音频编译类型
 */
declare enum RCCallIWAudioCodecType {
    PCMU = 0,
    OPUS = 111
}
/**
 * 音源类型
 */
declare enum RCCallIWAudioSource {
    /**
     * 默认音频源
     */
    DEFAULT = 0,
    /**
     * 麦克风
     */
    MIC = 1,
    /**
     * 语音呼叫上行音频源
     */
    VOICE_UPLINK = 2,
    /**
     * 语音呼叫下行音频源
     */
    VOICE_DOWNLINK = 3,
    /**
     * 语音呼叫音频源
     */
    VOICE_CALL = 4,
    /**
     * 同方向的相机麦克风，若相机无内置相机或无法识别，则使用预设的麦克风
     */
    CAMCORDER = 5,
    /**
     * 进过语音识别后的麦克风音频源
     */
    VOICE_RECOGNITION = 6,
    /**
     * 针对VoIP调整后的麦克风音频源
     */
    VOICE_COMMUNICATION = 7
}
/*!
 通话视频参数
 */
declare enum RCCallIWVideoProfile {
    /**
     * 144x256, 15fps, 120~240kbps
     */
    PROFILE_144_256 = 0,
    /**
     * 240x240, 15fps, 120~280kbps
     */
    PROFILE_240_240 = 1,
    /**
     * 240x320, 15fps, 120~400kbps
     */
    PROFILE_240_320 = 2,
    /**
     * 360x480, 15fps, 150~650kbps
     */
    PROFILE_360_480 = 3,
    /**
     * 360x640, 15fps, 180~800kbps
     */
    PROFILE_360_640 = 4,
    /**
     * 480x640, 15fps, 200~900kbps
     */
    PROFILE_480_640 = 5,
    /**
     * 480x720, 15fps, 200~1000kbps
     */
    PROFILE_480_720 = 6,
    /**
     * 720x1280, 15fps, 250~2200kbps
     */
    PROFILE_720_1280 = 7,
    /**
     * 1080x1920, 15fps, 400~4000kbps
     */
    PROFILE_1080_1920 = 8,
    /**
     * 144x256, 30fps, 240~480kbps
     */
    PROFILE_144_256_HIGH = 9,
    /**
     * 240x240, 30fps, 240~360kbps
     */
    PROFILE_240_240_HIGH = 10,
    /**
     * 240x320, 30fps, 240~800kbps
     */
    PROFILE_240_320_HIGH = 11,
    /**
     * 360x480, 30fps, 300~1300kbps
     */
    PROFILE_360_480_HIGH = 12,
    /**
     * 360x640, 30fps, 360~1600kbps
     */
    PROFILE_360_640_HIGH = 13,
    /**
     * 480x640, 30fps, 400~1800kbps
     */
    PROFILE_480_640_HIGH = 14,
    /**
     * 480x720, 30fps, 400~2000kbps
     */
    PROFILE_480_720_HIGH = 15,
    /**
     * 720x1080, 30fps, 500~4400kbps
     */
    PROFILE_720_1280_HIGH = 16,
    /**
     * 1080x1920, 30fps, 800~8000kbps
     */
    PROFILE_1080_1920_HIGH = 17
}
/**
 * 摄像头方向
 */
declare enum RCCallIWCameraOrientation {
    /**
     * home 键在下
     */
    PORTRAIT = 0,
    /**
     * home 键在上
     */
    PORTRAIT_UPSIDE_DOWN = 1,
    /**
     * home 键在右
     */
    LANDSCAPE_RIGHT = 2,
    /**
     * home 键在左
     */
    LANDSCAPE_LEFT = 3
}
declare enum RCCallIWVideoBitrateMode {
    CQ = 0,
    VBR = 1,
    CBR = 2
}
declare enum RCCallIWNetworkQuality {
    UNKNOWN = 0,
    EXCELLENT = 1,
    GOOD = 2,
    POOR = 3,
    BAD = 4,
    TERRIBLE = 5
}
/**
 * 华为推送级别
 */
declare enum RCCallIWImportanceHW {
    NORMAL = 0,
    LOW = 1
}
/**
 * 通话类型
 */
declare enum RCCallIWCallType {
    /**
     * 单聊
     */
    SINGLE = 0,
    /**
     * 群聊
     */
    GROUP = 1
}
/**
 * 用户身份类型
 */
declare enum RCCallIWUserType {
    /**
     * 普通身份
     */
    NORMAL = 0,
    /**
     * 观察者身份
     */
    OBSERVER = 1
}

interface UniListenerResult<T> {
    module: string;
    type: string;
    data: T;
}
interface ListenerNullData {
}
interface ListenerOnCallDisconnectedData {
    /**
     * 通话挂断原因
     */
    reason?: RCCallIWCallDisconnectedReason;
}
interface ListenerResultError {
    reason?: RCUNICallErrorCode;
}
interface ListenerNetworkQualityData {
    /**
     * 用户信息
     */
    user?: RCCallIWUserProfile;
    /**
     * 网络质量
     */
    quality: RCCallIWNetworkQuality;
}
interface ListenerOnSwitchCameraData {
    /**
     * 摄像头类型
     */
    camera: RCCallIWCamera;
}
interface ListenerOnEnableCameraData {
    /**
     * 摄像头类型
     */
    camera: RCCallIWCamera;
    /**
     * 打开状态
     */
    enable: boolean;
}
interface ListenerOnRemoteUserInvitedData {
    /**
     * 用户 id
     */
    userId: string;
    /**
     * 媒体类型
     */
    mediaType: RCCallIWMediaType;
}
interface ListenerOnRemoteUserLeftData {
    /**
     * 用户 id
     */
    userId: string;
    /**
     * 原因
     */
    reason: RCCallIWCallDisconnectedReason;
}
interface ListenerOnRemoteUserRingingData {
    /**
     * 用户 id
     */
    userId: string;
}
interface ListenerOnRemoteUserMediaTypeChangedData {
    /**
     * 用户信息
     */
    user: RCCallIWUserProfile;
    /**
     * 媒体类型
     */
    mediaType: RCCallIWMediaType;
}
interface ListenerOnRemoteUserCameraStateChangedData {
    /**
     * 用户信息
     */
    user: RCCallIWUserProfile;
    /**
     * 摄像头是否打开
     */
    enable: boolean;
}
interface ListenerOnRemoteUserMicrophoneStateChangedData {
    /**
     * 用户信息
     */
    user: RCCallIWUserProfile;
    /**
     * 麦克风是否打开
     */
    enable: boolean;
}
interface RCCallIWAudioConfig {
    /**
     * 是否禁用麦克风
     * 仅 Android 平台生效
     */
    enableMicrophone?: boolean;
    /**
     * 音频是否支持立体声
     * 仅 Android 平台生效
     */
    enableStereo?: boolean;
    /**
     * 音源类型
     */
    audioSource?: RCCallIWAudioSource;
    /**
     * 音频比特率
     */
    audioBitrate?: number;
    /**
     * 音频采样率
     * 8000, 16000, 32000, 44100, 48000
     * 仅 Android 平台生效
     */
    audioSampleRate?: number;
    /**
     * 音频编译类型
     * 0: PCMU , 111: OPUS;
     * 仅 Android 平台生效
     */
    type?: RCCallIWAudioCodecType;
}
/**
 *  视频配置
 */
interface RCCallIWVideoConfig {
    /**
     * 通话视频参数
     */
    profile?: RCCallIWVideoProfile;
    /**
     * 默认打开的摄像头
     */
    defaultCamera?: RCCallIWCamera;
    /**
     * 摄像头方向
     */
    cameraOrientation?: RCCallIWCameraOrientation;
    /**
     * 本地摄像头采集是否镜像
     * 前置摄像头默认: YES，后置摄像头默认: NO
     */
    isPreviewMirror?: boolean;
    /**
     * 是否采用硬解码
     * 仅 Android 生效
     */
    enableHardwareDecoder?: boolean;
    /**
     *
     * 仅 Android 生效
     */
    hardwareDecoderColor?: number;
    /**
     * 设备是否采用硬编码
     * 仅 Android 生效
     */
    enableHardwareEncoder?: boolean;
    /**
     * 设置硬编码压缩等级是否为 MediaCodecInfo.CodecProfileLevel.AVCProfileHigh
     * 仅 Android 生效
     */
    enableHardwareEncoderHighProfile?: boolean;
    /**
     * 设置硬解码颜色空间 该值必须是本设备H264解码器所支持的值,可以通过 获取本机所支持的编解码器、颜色空间信息
     * 仅 Android 生效
     */
    hardWareEncoderColor?: number;
    /**
     * 设置系统硬编码器的编码帧率
     * 仅 Android 生效
     */
    hardwareEncoderFrameRate?: number;
    /**
     * 设置硬编码码率控制模式 仅 Android 系统 5.0 及以上版本设置有效
     * 仅 Android 生效
     */
    hardwareEncoderBitrateMode?: RCCallIWVideoBitrateMode;
}
interface RCCallIWPushConfig {
    /**
     * 是否屏蔽通知标题
     * YES:  不显示通知标题
     * NO: 显示通知标题
     *
     * @discussion 默认情况下融云单聊消息通知标题为用户名、群聊消息为群名称，设置后不会再显示通知标题。
     * @discussion 此属性只针目标用户为 iOS 平台时有效，Android 第三方推送平台的通知标题为必填项，所以暂不支持。
     */
    disableTitle: boolean;
    /**
     * 推送标题
     * 如果没有设置，会使用下面的默认标题显示规则
     * 默认标题显示规则：
     *   内置消息：单聊通知标题显示为发送者名称，群聊通知标题显示为群名称。
     *   自定义消息：默认不显示标题。
     */
    title?: string;
    /**
     * 推送内容
     * 优先使用 MessagePushConfig 的 pushContent，如果没有，则使用 sendMessage 或者 sendMediaMessage 的 pushContent。
     */
    content?: string;
    /**
     * 远程推送附加信息
     * 优先使用 MessagePushConfig 的 pushData，如果没有，则使用 sendMessage 或者 sendMediaMessage 的 pushData。
     */
    data?: string;
    /**
     * 是否强制显示通知详情
     * 当目标用户通过 RCPushProfile 中的 updateShowPushContentStatus 设置推送不显示消息详情时，可通过此参数，强制设置该条消息显示推送详情。
     */
    forceShowDetailContent?: boolean;
    /**
     * 推送模板 ID，设置后根据目标用户通过 SDK RCPushProfile 中的 setPushLauguageCode 设置的语言环境，匹配模板中设置的语言内容进行推送，未匹配成功时使用默认内容进行推送，模板内容在“开发者后台-自定义推送文案”中进行设置。
     * 注：RCMessagePushConfig 中的 Title 和 PushContent 优先级高于模板 ID（templateId）中对应的标题和推送内容。
     */
    templateId?: string;
    /**
     * iOS 平台相关配置
     */
    iOSConfig?: RCCallIWIOSPushConfig;
    /**
     * Android 平台相关配置
     */
    androidConfig?: RCCallIWAndroidPushConfig;
}
interface RCCallIWAndroidPushConfig {
    /**
     * Android 平台 Push 唯一标识
     * 目前支持小米、华为推送平台，默认开发者不需要进行设置，当消息产生推送时，消息的 messageUId 作为 notificationId 使用。
     */
    notificationId?: string;
    /**
     * 小米的渠道 ID
     * 该条消息针对小米使用的推送渠道，如开发者集成了小米推送，需要指定 channelId 时，可向 Android 端研发人员获取，channelId 由开发者自行创建。
     */
    channelIdMi?: string;
    /**
     * 小米 Large icon 链接
     * Large icon 可以出现在大图版和多字版消息中，显示在右边。国内版仅 MIUI12 以上版本支持，以下版本均不支持；国际版支持。图片要求：大小 120 * 120px，格式为 png 或者 jpg 格式。
     */
    imageUrlMi?: string;
    /**
     * 华为的渠道 ID
     * 该条消息针对华为使用的推送渠道，如开发者集成了华为推送，需要指定 channelId 时，可向 Android 端研发人员获取，channelId 由开发者自行创建。
     */
    channelIdHW?: string;
    /**
     * 华为通知栏消息右侧大图标 URL
     * 如果不设置，则不展示通知栏右侧图标，URL 使用的协议必须是 HTTPS 协议。
     * 图标文件须小于 512KB，图标建议规格大小：40dp x 40dp，弧角大小为 8dp，超出建议规格大小的图标会存在图片压缩或显示不全的情况。
     */
    imageUrlHW?: string;
    /**
     * 华为推送消息级别
     */
    importanceHW?: RCCallIWImportanceHW;
    /**
     * 华为推送消息分类
     * 社交通讯:即时通讯[IM],音频、视频通话[VOIP]
     * 服务提醒:订阅[SUBSCRIPTION],出行[TRAVEL],健康[HEALTH],工作事项提醒[WORK],帐号动态[ACCOUNT],订单&物流[EXPRESS],财务[FINANCE],系统提示[SYSTEM_REMINDER],邮件[MAIL]
     * 资讯营销类:内容资讯/新闻/财经动态/生活资讯/社交动态/调研/其他[MARKETING]
     * 营销活动:产品促销/功能推荐/运营活动/MARKETING
     * 更多信息请参考华为消息分类标准文档: https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835
     */
    categoryHW?: string;
    /**
     * OPPO 的渠道 ID
     * 该条消息针对 OPPO 使用的推送渠道，如开发者集成了 OPPO 推送，需要指定 channelId 时，可向 Android 端研发人员获取，channelId 由开发者自行创建。
     */
    channelIdOPPO?: string;
    /**
     * Vivo 推送通道类型
     * 开发者集成了 VIVO 推送，需要指定推送类型时，可进行设置。
     * 目前可选值 "0"(运营消息) 和  "1"(系统消息)
     */
    typeVivo?: string;
    /**
     * Vivo 推送消息分类
     * 系统消息分类
     * 即时消息[IM],账号与资产[ACCOUNT],日程待办[TODO],设备信息[DEVICE_REMINDER],订单与物流[ORDER],订阅提醒[SUBSCRIPTION]
     * 运营消息分类
     * 新闻[NEWS],内容推荐[CONTENT],运营活动[MARKETING],社交动态[SOCIAL]
     * 更多信息请参考 Vivo 消息分类标准文档: https://dev.vivo.com.cn/documentCenter/doc/359
     */
    categoryVivo?: string;
    /**
     * FCM 通知类型推送时所使用的分组 id
     */
    collapseKeyFCM?: string;
    /**
     * FCM 通知类型的推送所使用的通知图片 url
     */
    imageUrlFCM?: string;
    /**
     * FCM 通知的频道 ID
     * 该应用程序必须使用此频道 ID 创建一个频道，然后才能收到带有该频道 ID 的任何通知。
     * 如果您未在请求中发送此频道 ID，或者如果应用尚未创建提供的频道 ID，则 FCM 使用应用清单中指定的频道 ID。
     */
    channelIdFCM?: string;
}
interface RCCallIWIOSPushConfig {
    /**
     * iOS 平台通知栏分组 ID
     * 相同的 thread-id 推送分为一组
     * iOS10 开始支持
     */
    threadId?: string;
    /**
     * iOS 标识推送的类型
     * 如果不设置后台默认取消息类型字符串，如 RC:TxtMsg
     */
    category?: string;
    /**
     * iOS 平台通知覆盖 ID
     * apnsCollapseId 相同时，新收到的通知会覆盖老的通知，最大 64 字节
     * iOS10 开始支持
     */
    apnsCollapseId?: string;
    /**
     * iOS 富文本推送内容
     */
    richMediaUri?: string;
}
/**
 * 用户信息
 */
interface RCCallIWUserProfile {
    /**
     * 用户身份类型
     */
    userType: RCCallIWUserType;
    /**
     * 通话媒体类型
     */
    mediaType: RCCallIWMediaType;
    /**
     * 用户id
     */
    userId: string;
    /**
     * 用户的通话媒体连接 ID
     */
    mediaId: string;
    /**
     * 用户是否开启摄像头
     */
    enableCamera: boolean;
    /**
     * 用户是否开启麦克风
     */
    enableMicrophone: boolean;
}
/**
 * 当前通话的会话信息
 */
interface RCCallIWCallSession {
    /**
     * 当前通话类型：单聊还是群聊
     */
    callType: RCCallIWCallType;
    /**
     * 通话媒体类型：音频还是视频
     */
    mediaType: RCCallIWMediaType;
    /**
     * 通话 ID
     */
    callId: string;
    /**
     * RTC 会话唯一标识, 用于 Server API
     */
    sessionId: string;
    /**
     * 通话目标 id
     */
    targetId: string;
    /**
     * 通话开始时间
     */
    startTime: number;
    /**
     * 通话接通时间
     */
    connectedTime: number;
    /**
     * 通话结束时间
     */
    endTime: number;
    /**
     * 通话发起人
     */
    caller: RCCallIWUserProfile;
    /**
     * 邀请当前用户到当前通话的邀请者
     */
    inviter: RCCallIWUserProfile;
    /**
     * 当前用户
     */
    mine: RCCallIWUserProfile;
    /**
     * 当前通话所有用户
     */
    users: RCCallIWUserProfile[];
    /**
     * 当前通话携带的扩展信息
     */
    extra: string;
}

/**
* 初始化 SDK，只需要调用一次
*
* calllib初始化默认不传参数
*/
declare function init(): void;
/**
* 注销calllib
*
* 注销calllib默认不传参数
*/
declare function unInit(): void;
/**
* 添加通话呼入监听函数
*
* @param listener 回调函数
*/
declare function onCallReceived(listener: (result: UniListenerResult<RCCallIWCallSession>) => void): void;
/**
 * 移除监听-接收到通话呼入
 */
declare function removeCallReceivedListener(): void;
/**
* 添加连接监听函数
*
* @param listener 回调函数
*/
declare function onCallConnected(listener: (result: UniListenerResult<ListenerNullData>) => void): void;
/**
 * 移除监听-通话已接通
 */
declare function removeCallConnectedListener(): void;
/**
* 添加挂断监听函数
*
* @param listener 回调函数
*/
declare function onCallDisconnected(listener: (result: UniListenerResult<ListenerOnCallDisconnectedData>) => void): void;
/**
 * 移除监听-通话已结束
 * @param 挂断原因
 */
declare function removeCallDisconnectedListener(): void;
/**
* 通话中的某一个参与者，邀请好友加入通话
*
* @param listener 回调函数
*/
declare function onRemoteUserInvited(listener: (result: UniListenerResult<ListenerOnRemoteUserInvitedData>) => void): void;
/**
* 移除监听-有用户被邀请加入通话
*/
declare function removeRemoteUserInvited(): void;
/**
 * 对端用户加入了通话
 * @param listener 回调函数
 */
declare function onRemoteUserJoined(listener: (result: UniListenerResult<RCCallIWUserProfile>) => void): void;
/**
 * 移除监听-对端用户加入了通话
 */
declare function removeRemoteUserJoinedListener(): void;
/**
 * 远端用户离开 (只在群聊时用触发)
 * @param listener 回调函数
 */
declare function onRemoteUserLeft(listener: (result: UniListenerResult<ListenerOnRemoteUserLeftData>) => void): void;
/**
 * 移除监听-远端用户离开
 */
declare function removeRemoteUserLeftListener(): void;
/**
 * 电话已拨出 主叫端拨出电话后，通过回调 onCallOutgoing 通知当前 call 的详细信息
 * @param listener 回调函数
 */
declare function onCallOutgoing(listener: (result: UniListenerResult<ListenerNullData>) => void): void;
/**
 * 移除监听-开始呼叫通话的回调
 */
declare function removeCallOutgoingListener(): void;
/**
 * 被叫端正在振铃，主叫端拨出电话，被叫端收到请求，发出振铃响应时监听
 * @param listener 回调函数
 */
declare function onRemoteUserRinging(listener: (result: UniListenerResult<ListenerOnRemoteUserRingingData>) => void): void;
/**
 * 移除监听-对端用户正在振铃
 */
declare function removeRemoteUserRingingListener(): void;
/**
 * 通话出现错误的回调
 * @param listener 回调函数
 */
declare function onError(listener: (result: UniListenerResult<ListenerResultError>) => void): void;
/**
 * 移除监听-通话出现错误的回调
 */
declare function removeErrorListener(): void;
/**
 * 对端用户切换了媒体类型
 * @param listener 回调函数
 */
declare function onRemoteUserMediaTypeChanged(listener: (result: UniListenerResult<ListenerOnRemoteUserMediaTypeChangedData>) => void): void;
/**
 * 移除监听-对端用户切换了媒体类型
 */
declare function removeRemoteUserMediaTypeChangedListener(): void;
/**
 * 对端用户开关摄像头
 * @param listener 回调函数
 */
declare function onRemoteUserCameraStateChanged(listener: (result: UniListenerResult<ListenerOnRemoteUserCameraStateChangedData>) => void): void;
/**
 * 移除监听- 远端摄像头状态变更
 */
declare function removeRemoteUserCameraStateChangedListener(): void;
/**
 * 对端用户开关麦克风
 * @param listener 回调函数
 */
declare function onRemoteUserMicrophoneStateChanged(listener: (result: UniListenerResult<ListenerOnRemoteUserMicrophoneStateChangedData>) => void): void;
/**
 * 移除监听- 远端麦克风状态变更
 */
declare function removeRemoteUserMicrophoneStateChangedListener(): void;
/**
 * 网络状态监测， 通话建立成功后才会有回调
 * @param listener
 */
declare function onNetworkQuality(listener: (result: UniListenerResult<ListenerNetworkQualityData>) => void): void;
/**
 * 移除监听 - 网络状态监测
 */
declare function removeNetworkQualityListener(): void;
/**
 * 开启或关闭摄像头的回调
 */
declare function onEnableCamera(listener: (result: UniListenerResult<ListenerOnEnableCameraData>) => void): void;
/**
 * 移除监听-开启或关闭摄像头的回调
 */
declare function removeEnableCameraListener(): void;
/**
 * 切换摄像头回调
 */
declare function onSwitchCamera(listener: (result: UniListenerResult<ListenerOnSwitchCameraData>) => void): void;
/**
 * 移除监听-切换摄像头回调
 */
declare function removeSwitchCameraListener(): void;
/**
* 获取当前calllib本地存储信息
*
* 默认不传参数
*/
declare function getCurrentCallSession(): RCCallIWCallSession;
/**
* 挂断calllib
*
* 默认不传参数
*/
declare function hangup(): void;
/**
* 接收calllib
*
* 默认不传参数
*/
declare function accept(): void;
/**
* 发起单聊呼叫
*
* @param targetId 目标ID
* @param type 呼叫类型（0:音频 1:音视频）
* @param extra 默认传''
*
*/
declare function startSingleCall(targetId: string, type: number, extra: null): void;
/**
* 发起组呼呼叫
*
* @param groupId 组ID
* @param userIds 群组成员
* @param observerUserIds 观察者ID默认为空数组
* @param type 呼叫类型（0:音频 1:音视频）
* @param extra 默认传''
*
*/
declare function startGroupCall(groupId: string, userIds: Array<string>, observerUserIds: Array<string>, type: number, extra: string): void;
/**
 * 邀请用户
 * @param userIds 被邀请用户id列表
 * @param observerUserIds 被邀请观察者id列表 (只能听或看，不能推流的用户)
 */
declare function inviteUsers(userIds: string[], observerUserIds: string[]): void;
/**
* 设置预览窗口，此方法需要在视图更新渲染完成后执行
*
* @param userId 用户id
* @param ref ref ID 对应组件的标识
* @param type 视频显示模式 0 铺满 1 自适应
* @param isZOrderOnTop android only 是否置顶
*/
declare function setVideoView(userId: string, ref: string, type: number, isZOrderOnTop?: boolean): void;
/**
* 设置callib是否开启扬声器
*
* @param isOpen 默认开启
*
*/
declare function enableSpeaker(isOpen: boolean): void;
/**
* 设置callib是否开启麦克风
*
* @param isOPen 默认开启
*
*/
declare function enableMicrophone(isOpen: boolean): void;
/**
* 切换摄像头
*
* 默认不传参数
*
*/
declare function switchCamera(): void;
/**
* 获取当前摄像头方式
*
* 默认不传参数
*/
declare function currentCamera(): any;
/**
* 开启摄像头摄像头
*
* @param isOpen 是否开启
* @param RCCallIWCamera 对端还是本端
*
*/
declare function enableCamera(isOpen: boolean, camera: RCCallIWCamera): void;
/**
 * 修改通话类型
 * @param type
 */
declare function changeMediaType(type: RCCallIWMediaType): void;
/**
 * 音频配置
 * @param config
 */
declare function setAudioConfig(config: RCCallIWAudioConfig): void;
/**
 * 视频配置
 * @param config
 */
declare function setVideoConfig(config: RCCallIWVideoConfig): void;
/**
 * 通话提醒消息推送配置（可在拨打电话前设置）
 * @param config 呼叫推送配置
 * @param hangupPushConfig 挂断推送配置
 */
declare function setPushConfig(config: RCCallIWPushConfig, hangupPushConfig: RCCallIWPushConfig): void;

export { RCCallIWAudioCodecType, RCCallIWAudioSource, RCCallIWCallDisconnectedReason, RCCallIWCallType, RCCallIWCamera, RCCallIWCameraOrientation, RCCallIWImportanceHW, RCCallIWMediaType, RCCallIWNetworkQuality, RCCallIWUserType, RCCallIWVideoBitrateMode, RCCallIWVideoProfile, RCUNICallErrorCode, accept, changeMediaType, currentCamera, enableCamera, enableMicrophone, enableSpeaker, getCurrentCallSession, hangup, init, inviteUsers, onCallConnected, onCallDisconnected, onCallOutgoing, onCallReceived, onEnableCamera, onError, onNetworkQuality, onRemoteUserCameraStateChanged, onRemoteUserInvited, onRemoteUserJoined, onRemoteUserLeft, onRemoteUserMediaTypeChanged, onRemoteUserMicrophoneStateChanged, onRemoteUserRinging, onSwitchCamera, removeCallConnectedListener, removeCallDisconnectedListener, removeCallOutgoingListener, removeCallReceivedListener, removeEnableCameraListener, removeErrorListener, removeNetworkQualityListener, removeRemoteUserCameraStateChangedListener, removeRemoteUserInvited, removeRemoteUserJoinedListener, removeRemoteUserLeftListener, removeRemoteUserMediaTypeChangedListener, removeRemoteUserMicrophoneStateChangedListener, removeRemoteUserRingingListener, removeSwitchCameraListener, setAudioConfig, setPushConfig, setVideoConfig, setVideoView, startGroupCall, startSingleCall, switchCamera, unInit };
