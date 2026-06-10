import { RCBeautyIWFilter, RCBeautyIWOptions } from './RCBeautyDefines';
export default class RCBeautyEngine {
    /**
     * 设置美颜参数
     * @param enable true: 打开， false: 关闭
     * @param options 美颜参数
     */
    static setBeautyOptions(enable: false, options: RCBeautyIWOptions): void;
    /**
     * 获取当前的美颜参数
     */
    static getCurrentBeautyOptions(): RCBeautyIWOptions;
    /**
     * 设置滤镜
     * @param filter 滤镜类型
     */
    static setBeautyFilter(filter: RCBeautyIWFilter): void;
    /**
     * 获取当前的滤镜类型
     */
    static getCurrentBeautyFilter(): RCBeautyIWFilter;
    /**
     * 重置美颜参数和滤镜
     */
    static resetBeauty(): void;
}
