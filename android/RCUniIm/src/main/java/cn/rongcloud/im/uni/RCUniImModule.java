package cn.rongcloud.im.uni;

import com.alibaba.fastjson.JSONObject;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;
import io.rong.imlib.RongIMClient;

public class RCUniImModule extends UniModule {

    @UniJSMethod()
    public boolean setServerInfo(String navigation, String file) {
        RongIMClient.setServerInfo(navigation, file);
        return true;
    }

    @UniJSMethod()
    public void init(String key) {
        RongIMClient.init(mUniSDKInstance.getContext(), key);
    }

    @UniJSMethod()
    public void connect(String token, UniJSCallback callback) {
        RongIMClient.connect(token, new RongIMClient.ConnectCallback() {
            @Override
            public void onSuccess(String s) {
                JSONObject arguments = new JSONObject();
                arguments.put("error", 0);
                arguments.put("userId", s);
                if (callback != null) {
                    callback.invoke(arguments);
                }
            }

            @Override
            public void onError(RongIMClient.ConnectionErrorCode connectionErrorCode) {
                JSONObject arguments = new JSONObject();
                arguments.put("error", connectionErrorCode.getValue());
                if (callback != null) {
                    callback.invoke(arguments);
                }
            }

            @Override
            public void onDatabaseOpened(RongIMClient.DatabaseOpenStatus databaseOpenStatus) {

            }
        });
    }

    @UniJSMethod()
    public void disconnect() {
        RongIMClient.getInstance().disconnect();
    }
}
