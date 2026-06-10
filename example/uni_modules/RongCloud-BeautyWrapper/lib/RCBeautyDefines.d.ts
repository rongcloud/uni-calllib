export declare enum RCBeautyIWFilter {
    /**
     * 原图
     */
    NONE = 0,
    /**
     * 唯美
     */
    ESTHETIC = 1,
    /**
     * 清新
     */
    FRESH = 2,
    /**
     * 浪漫
     */
    ROMANTIC = 3
}
export interface RCBeautyIWOptions {
    /**
     * 美白 取值范围 [0 ~ 9] 0是正常值
     */
    whitenessLevel: number;
    /**
     * 磨皮 取值范围 [0 ~ 9] 0是正常值
     */
    smoothLevel: number;
    /**
     * 红润 取值范围 [0 ~ 9] 0是正常值
     */
    ruddyLevel: number;
    /**
     * 亮度 取值范围 [0 ~ 9] 5是正常值
     */
    brightLevel: number;
}
