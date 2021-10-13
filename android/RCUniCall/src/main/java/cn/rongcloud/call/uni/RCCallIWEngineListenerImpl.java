package cn.rongcloud.call.uni;

import cn.rongcloud.call.wrapper.config.RCCallIWCallDisconnectedReason;
import cn.rongcloud.call.wrapper.config.RCCallIWCamera;
import cn.rongcloud.call.wrapper.config.RCCallIWMediaType;
import cn.rongcloud.call.wrapper.config.RCCallIWNetworkQuality;
import cn.rongcloud.call.wrapper.listener.RCCallIWEngineListener;
import cn.rongcloud.call.wrapper.model.RCCallIWCallSession;
import cn.rongcloud.call.wrapper.model.RCCallIWUserProfile;
import cn.rongcloud.rtc.utils.FinLog;
import com.alibaba.fastjson.JSONObject;
import java.util.Map;

public class RCCallIWEngineListenerImpl extends RCCallIWEngineListener {

    private static final String TAG = "RCCallIWEngineListenerImpl";
    private final RCUniCallModule uniCall;

    public RCCallIWEngineListenerImpl(RCUniCallModule uniCall) {
       this.uniCall = uniCall;
    }

    @Override
    public void onCallReceived(RCCallIWCallSession session) {
        FinLog.d(TAG, "[onCallReceived] ==> session:" + session);
		JSONObject arguments = ArgumentAdapter.fromRCCallIWCallSession(session);
		sendEvent("Engine:OnCallReceived", arguments);
    }

    @Override
    public void onCallConnected() {
        FinLog.d(TAG, "[onCallConnected] ==> ");
		sendEvent("Engine:OnCallConnected", new JSONObject());
    }

    @Override
    public void onCallDisconnected(RCCallIWCallDisconnectedReason reason) {
        FinLog.d(TAG, "[onCallDisconnected] ==> reason:" + reason);
        JSONObject arg = new JSONObject();
        arg.put("reason",reason.ordinal());
        sendEvent("Engine:OnCallDisconnected", arg);
    }

    @Override
    public void onRemoteUserJoined(RCCallIWUserProfile user) {
        FinLog.d(TAG, "[onRemoteUserJoined] ==> user:" + user);
		JSONObject arguments = ArgumentAdapter.fromRCCallIWUserProfile(user);
		sendEvent("Engine:OnRemoteUserJoined", arguments);
    }

    @Override
    public void onRemoteUserLeft(RCCallIWUserProfile user, RCCallIWCallDisconnectedReason reason) {
        FinLog.d(TAG, "[onRemoteUserLeft] ==> user:" + user + "," + "reason:" + reason);
        JSONObject arguments = new JSONObject();
        arguments.put("user",ArgumentAdapter.fromRCCallIWUserProfile(user));
        arguments.put("reason", reason.ordinal());
		sendEvent("Engine:OnRemoteUserLeft", arguments);
    }

    @Override
    public void onCallMissed(RCCallIWCallSession rcCallIWCallSession) {
        FinLog.d(TAG, "[onCallMissed] ==> rcCallIWCallSession:" + rcCallIWCallSession);
    }

    @Override
    public void onEnableCamera(RCCallIWCamera camera, boolean enable) {
        FinLog.d(TAG, "[onEnableCamera] ==> camera:" + camera + "," + "enable:" + enable);
        JSONObject arguments = new JSONObject();
		arguments.put("camera", camera.ordinal());
		arguments.put("enable", enable);
		sendEvent("Engine:OnEnableCamera", arguments);
    }

    @Override
    public void onSwitchCamera(RCCallIWCamera camera) {
        FinLog.d(TAG, "[onSwitchCamera] ==> camera:" + camera);
        JSONObject arguments = new JSONObject();
        arguments.put("camera",camera.ordinal());
		sendEvent("Engine:OnSwitchCamera", arguments);
    }

    @Override
    public void onError(int code) {
        FinLog.d(TAG, "[onError] ==> code:" + code);
        JSONObject arguments = new JSONObject();
        arguments.put("code",code);
		sendEvent("Engine:OnError", arguments);
    }

    @Override
    public void onCallOutgoing() {
        FinLog.d(TAG, "[onCallOutgoing] ==> ");
		sendEvent("Engine:OnCallOutgoing", new JSONObject());
    }

    @Override
    public void onRemoteUserRinging(String userId) {
        FinLog.d(TAG, "[onRemoteUserRinging] ==> userId:" + userId);
        JSONObject arguments = new JSONObject();
        arguments.put("userId",userId);
		sendEvent("Engine:OnRemoteUserRinging", arguments);
    }

    @Override
    public void onRemoteUserInvited(String userId, RCCallIWMediaType mediaType) {
        FinLog.d(TAG, "[onRemoteUserInvited] ==> userId:" + userId + "," + "mediaType:" + mediaType);
		JSONObject arguments = new JSONObject();
		arguments.put("userId", userId);
		arguments.put("mediaType", mediaType.ordinal());
		sendEvent("Engine:OnRemoteUserInvited", arguments);
    }

    @Override
    public void onRemoteUserMediaTypeChanged(RCCallIWUserProfile user, RCCallIWMediaType mediaType) {
        FinLog.d(TAG, "[onRemoteUserMediaTypeChanged] ==> user:" + user + "," + "mediaType:" + mediaType);
        JSONObject arguments = new JSONObject();
        arguments.put("user", ArgumentAdapter.fromRCCallIWUserProfile(user));
        arguments.put("mediaType",mediaType);
		sendEvent("Engine:OnRemoteUserMediaTypeChanged", arguments);
    }

    @Override
    public void onRemoteUserMicrophoneStateChanged(RCCallIWUserProfile user, boolean enable) {
        FinLog.d(TAG, "[onRemoteUserMicrophoneStateChanged] ==> user:" + user + "," + "enable:" + enable);
        JSONObject arguments = new JSONObject();
        arguments.put("user", ArgumentAdapter.fromRCCallIWUserProfile(user));
        arguments.put("enable",enable);
		sendEvent("Engine:OnRemoteUserMicrophoneStateChanged", arguments);

    }

    @Override
    public void onRemoteUserCameraStateChanged(RCCallIWUserProfile user, boolean enable) {
        FinLog.d(TAG, "[onRemoteUserCameraStateChanged] ==> user:" + user + "," + "enable:" + enable);
        JSONObject arguments = new JSONObject();
        arguments.put("user", ArgumentAdapter.fromRCCallIWUserProfile(user));
        arguments.put("enable",enable);
		sendEvent("Engine:OnRemoteUserCameraStateChanged", arguments);

    }

    @Override
    public void onNetworkQuality(RCCallIWUserProfile user, RCCallIWNetworkQuality quality) {
		JSONObject arguments = new JSONObject();
		arguments.put("user",ArgumentAdapter.fromRCCallIWUserProfile(user));
		arguments.put("quality", quality.ordinal());
		sendEvent("Engine:OnNetworkQuality", arguments);

    }

    @Override
    public void onAudioVolume(RCCallIWUserProfile user, int volume) {
        JSONObject arguments = new JSONObject();
        arguments.put("user", ArgumentAdapter.fromRCCallIWUserProfile(user));
        arguments.put("volume",volume);
		sendEvent("Engine:OnAudioVolume", arguments);

    }

    private void sendEvent(String event,  Map<String, Object> arguments) {
        uniCall.sendEvent(event,arguments);
    }
}
