const RCUniBeauty = uni.requireNativePlugin('RongCloud-Beauty-RCUniBeauty');
const Platform = uni.getSystemInfoSync().platform;
export default class RCBeautyEngine {
    /**
     * 设置美颜参数
     * @param enable true: 打开， false: 关闭
     * @param options 美颜参数
     */
    static setBeautyOptions(enable, options) {
        RCUniBeauty.setBeautyOptions(enable, options);
    }
    /**
     * 获取当前的美颜参数
     */
    static getCurrentBeautyOptions() {
        return RCUniBeauty.getCurrentBeautyOptions();
    }
    /**
     * 设置滤镜
     * @param filter 滤镜类型
     */
    static setBeautyFilter(filter) {
        RCUniBeauty.setBeautyFilter(filter);
    }
    /**
     * 获取当前的滤镜类型
     */
    static getCurrentBeautyFilter() {
        return RCUniBeauty.getCurrentBeautyFilter();
    }
    /**
     * 重置美颜参数和滤镜
     */
    static resetBeauty() {
        RCUniBeauty.resetBeauty();
    }
}
