
# 引入 RCUniIm  RCUniCall 
## 使用说明

1. 在 DCloud 插件市场搜索并安装 RCUniIM，RCUniCall，或者手动下载安装插件放入 nativeplugins 目录下。

2. 在 manifest.json -> APP 原生插件配置 -> 加入原生插件 RCUniIM，RCUniCall。

3. 运行 -> 运行到手机 -> 制作自定义调试基座。

4. 安装 @rongcloud/imlib-uni @rongcloud/calllib-uni
   ```
        npm i @rongcloud/calllib-uni @rongcloud/calllib-uni -S 
   ```
5. 在项目中引入并使用其方法 
   
   import * as im from "@rongcloud/imlib-uni" 
   import * as call from "@rongcloud/calllib-uni" 
   ```
        im.init()
        im.connect()
   ```
   ```
        call.init()
        call.unInit()
   ```




