package cn.rongcloud.call.uni;

import android.widget.FrameLayout;
import cn.rongcloud.call.wrapper.RCCallIWEngine;
import cn.rongcloud.call.wrapper.config.RCCallIWCamera;
import cn.rongcloud.call.wrapper.model.RCCallIWCallSession;
import cn.rongcloud.rtc.utils.FinLog;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.ui.component.WXComponent;
import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.common.UniModule;

import java.util.Map;

/**
 * Created by wangw on 2021/8/5.
 */
public class RCUniCallModule extends UniModule {

	private static final String TAG = "RCUniCall_Module";

	@UniJSMethod(uiThread = true)
	public void init(JSONObject object) {
		FinLog.d(TAG, "[init] ==> ");
		RCCallIWEngine.getInstance().setEngineListener(new RCCallIWEngineListenerImpl(this));
	}

	@UniJSMethod(uiThread = true)
	public void unInit() {
		FinLog.d(TAG, "[unInit] ==> ");
		RCCallIWEngine.getInstance().setEngineListener(null);
	}

	@UniJSMethod(uiThread = true)
	public void setEngineConfig(JSONObject config) {
		FinLog.d(TAG, "[setEngineConfig] ==> config:" + config);
		RCCallIWEngine.getInstance().setEngineConfig(ArgumentAdapter.toRCCallIWEngineConfig(config));
	}

	@UniJSMethod(uiThread = true)
	public void setPushConfig(JSONObject callPushConfig, JSONObject hangupPushConfig) {
		FinLog.d(TAG, "[setPushConfig] ==> callPushConfig:" + callPushConfig + "," + "hangupPushConfig:" + hangupPushConfig);
		RCCallIWEngine.getInstance().setPushConfig(ArgumentAdapter.toRCCallIWPushConfig(callPushConfig), ArgumentAdapter.toRCCallIWPushConfig(hangupPushConfig));
	}

	@UniJSMethod(uiThread = true)
	public void setAudioConfig(JSONObject config) {
		FinLog.d(TAG, "[setAudioConfig] ==> config:" + config);
		RCCallIWEngine.getInstance().setAudioConfig(ArgumentAdapter.toRCCallIWAudioConfig(config));
	}

	@UniJSMethod(uiThread = true)
	public void setVideoConfig(JSONObject config) {
		FinLog.d(TAG, "[setVideoConfig] ==> config:" + config);
		RCCallIWEngine.getInstance().setVideoConfig(ArgumentAdapter.toRCCallIWVideoConfig(config));
	}

	@UniJSMethod(uiThread = false)
	public JSONObject startSingleCall(String userId, int type, String extra) {
		FinLog.d(TAG, "[startSingleCall] ==> userId:" + userId + "," + "type:" + type + "," + "extra:" + extra );
		RCCallIWCallSession result = RCCallIWEngine.getInstance().startCall(userId, ArgumentAdapter.toRCCallIWMediaType(type), extra);
		return ArgumentAdapter.fromRCCallIWCallSession(result);
	}

	@UniJSMethod(uiThread = false)
	public JSONObject startGroupCall(String groupId, JSONArray userIds, JSONArray observerUserIds, int type, String extra) {
		FinLog.d(TAG, "[startGroupCall] ==> groupId:" + groupId + "," + "userIds:" + userIds + "," + "observerUserIds:" + observerUserIds + "," + "type:" + type + "," + "extra:" + extra);
		RCCallIWCallSession result = RCCallIWEngine.getInstance().startCall(groupId, ArgumentAdapter.toStringList(userIds), ArgumentAdapter.toStringList(observerUserIds), ArgumentAdapter.toRCCallIWMediaType(type), extra);
		return ArgumentAdapter.fromRCCallIWCallSession(result);
	}

	@UniJSMethod(uiThread = true)
	public void accept() {
		FinLog.d(TAG, "[accept] ==> ");
		RCCallIWEngine.getInstance().accept();
	}

	@UniJSMethod(uiThread = true)
	public void hangup() {
		FinLog.d(TAG, "[hangup] ==> ");
		RCCallIWEngine.getInstance().hangup();
	}

	@UniJSMethod(uiThread = true)
	public void enableMicrophone(boolean enable) {
		FinLog.d(TAG, "[enableMicrophone] ==> enable:" + enable);
		RCCallIWEngine.getInstance().enableMicrophone(enable);
	}

	@UniJSMethod(uiThread = false)
	public boolean isEnableMicrophone() {
		return RCCallIWEngine.getInstance().isEnableMicrophone();
	}

	@UniJSMethod(uiThread = true)
	public void enableSpeaker(boolean enable) {
		FinLog.d(TAG, "[enableSpeaker] ==> enable:" + enable);
		RCCallIWEngine.getInstance().enableSpeaker(enable);
	}

	@UniJSMethod(uiThread = false)
	public boolean isEnableSpeaker() {
		return RCCallIWEngine.getInstance().isEnableSpeaker();
	}

	@UniJSMethod(uiThread = true)
	public void enableCamera(boolean enable, int camera) {
		FinLog.d(TAG, "[enableCamera] ==> enable:" + enable + "," + "camera:" + camera);
		RCCallIWEngine.getInstance().enableCamera(enable, ArgumentAdapter.toRCCallIWCamera(camera));
	}

	@UniJSMethod(uiThread = false)
	public boolean isEnableCamera() {
		return RCCallIWEngine.getInstance().isEnableCamera();
	}

	@UniJSMethod(uiThread = false)
	public int currentCamera() {
		RCCallIWCamera result = RCCallIWEngine.getInstance().currentCamera();
		return result.ordinal();
	}

	@UniJSMethod(uiThread = true)
	public void switchCamera() {
		FinLog.d(TAG, "[switchCamera] ==>  ");
		RCCallIWEngine.getInstance().switchCamera();
	}

	@UniJSMethod(uiThread = true)
	public void setVideoView(String userId, String ref, final int type) {
		FinLog.d(TAG, "[setVideoView] ==> userId:" + userId + "," + "ref:" + ref + "," + "type:" + type);
		WXComponent component = WXSDKManager.getInstance().getWXRenderManager().getWXComponent(mWXSDKInstance.getInstanceId(), ref);
		assert component != null;
		RCCallIWEngine.getInstance().setVideoView(userId,(FrameLayout) component.getHostView(),ArgumentAdapter.toRCCallIWViewFitType(type));
	}

	@UniJSMethod(uiThread = true)
	public void changeMediaType(int type) {
		FinLog.d(TAG, "[changeMediaType] ==> type:" + type);
		RCCallIWEngine.getInstance().changeMediaType(ArgumentAdapter.toRCCallIWMediaType(type));
	}

	@UniJSMethod(uiThread = true)
	public void inviteUsers(JSONArray userIds, JSONArray observerUserIds) {
		FinLog.d(TAG, "[inviteUsers] ==> userIds:" + userIds + "," + "observerUserIds:" + observerUserIds);
		RCCallIWEngine.getInstance().inviteUsers(ArgumentAdapter.toStringList(userIds), ArgumentAdapter.toStringList(observerUserIds));
	}

	@UniJSMethod(uiThread = false)
	public JSONObject getCurrentCallSession() {
		RCCallIWCallSession result = RCCallIWEngine.getInstance().getCurrentCallSession();
		return ArgumentAdapter.fromRCCallIWCallSession(result);
	}


	void sendEvent(String event, Map<String, Object> arguments) {
		FinLog.d(TAG, "[sendEvent] ==> event:" + event + "," + "arguments:" + arguments);
		mUniSDKInstance.fireModuleEvent(event, this, arguments);
	}
}
