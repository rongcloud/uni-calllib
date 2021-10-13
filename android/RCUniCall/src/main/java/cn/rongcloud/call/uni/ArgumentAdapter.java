package cn.rongcloud.call.uni;

import androidx.annotation.NonNull;
import cn.rongcloud.call.wrapper.config.*;
import cn.rongcloud.call.wrapper.listener.RCCallIWEngineListener;
import cn.rongcloud.call.wrapper.model.RCCallIWCallSession;
import cn.rongcloud.call.wrapper.model.RCCallIWUserProfile;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by wangw on 2021/8/5.
 */
public class ArgumentAdapter {

    public static RCCallIWEngineConfig toRCCallIWEngineConfig(@NonNull JSONObject config) {
        if (config == null) {
			return null;
		}

		RCCallIWEngineConfig.Builder builder = RCCallIWEngineConfig.Builder.create();
		if (config.containsKey("enableAutoReconnect")) {
			builder.withEnableAutoReconnect(config.getBooleanValue("enableAutoReconnect"));
		}
		if (config.containsKey("statusReportInterval")) {
			builder.withStatusReportInterval(config.getIntValue("statusReportInterval"));
		}
		return builder.build();
    }

    public static RCCallIWPushConfig toRCCallIWPushConfig(@NonNull JSONObject pushConfig) {
        if (pushConfig == null) {
			return null;
		}

		RCCallIWPushConfig.Builder builder = RCCallIWPushConfig.Builder.create();
		if (pushConfig.containsKey("templateId")) {
			builder.withTemplateId(pushConfig.getString("templateId"));
		}
		if (pushConfig.containsKey("title")) {
			builder.withTitle(pushConfig.getString("title"));
		}
		if (pushConfig.containsKey("content")) {
			builder.withContent(pushConfig.getString("content"));
		}
		if (pushConfig.containsKey("data")) {
			builder.withData(pushConfig.getString("data"));
		}
		if (pushConfig.containsKey("disableTitle")) {
			builder.withDisableTitle(pushConfig.getBooleanValue("disableTitle"));
		}
		if (pushConfig.containsKey("forceShowDetailContent")) {
			builder.withForceShowDetailContent(pushConfig.getBooleanValue("forceShowDetailContent"));
		}
		if (pushConfig.containsKey("iOSConfig")) {
			builder.withIOSConfig(toRCCallIWIOSPushConfig(pushConfig.getJSONObject("iOSConfig")));
		}
		if (pushConfig.containsKey("androidConfig")) {
			builder.withAndroidConfig(toRCCallIWAndroidPushConfig(pushConfig.getJSONObject("androidConfig")));
		}
		return builder.build();

    }

    public static RCCallIWAndroidPushConfig toRCCallIWAndroidPushConfig(JSONObject androidConfig) {
        if (androidConfig == null) {
			return null;
		}

		RCCallIWAndroidPushConfig.Builder builder = RCCallIWAndroidPushConfig.Builder.create();
		if (androidConfig.containsKey("notificationId")) {
			builder.withNotificationId(androidConfig.getString("notificationId"));
		}
		if (androidConfig.containsKey("channelIdMi")) {
			builder.withChannelIdMi(androidConfig.getString("channelIdMi"));
		}
		if (androidConfig.containsKey("channelIdHW")) {
			builder.withChannelIdHW(androidConfig.getString("channelIdHW"));
		}
		if (androidConfig.containsKey("channelIdOPPO")) {
			builder.withChannelIdOPPO(androidConfig.getString("channelIdOPPO"));
		}
		if (androidConfig.containsKey("typeVivo")) {
			builder.withTypeVivo(androidConfig.getString("typeVivo"));
		}
		if (androidConfig.containsKey("collapseKeyFCM")) {
			builder.withCollapseKeyFCM(androidConfig.getString("collapseKeyFCM"));
		}
		if (androidConfig.containsKey("imageUrlFCM")) {
			builder.withImageUrlFCM(androidConfig.getString("imageUrlFCM"));
		}
		if (androidConfig.containsKey("importanceHW")) {
			builder.withImportanceHW(toRCCallIWImportanceHW(androidConfig.getIntValue("importanceHW")));
		}
		return builder.build();
    }

    public static RCCallIWImportanceHW toRCCallIWImportanceHW(int index) {
        return RCCallIWImportanceHW.values()[index];
    }

    public static RCCallIWIOSPushConfig toRCCallIWIOSPushConfig(JSONObject iOSConfig) {
        if (iOSConfig == null) {
			return null;
		}

		RCCallIWIOSPushConfig.Builder builder = RCCallIWIOSPushConfig.Builder.create();
		if (iOSConfig.containsKey("threadId")) {
			builder.withThreadId(iOSConfig.getString("threadId"));
		}
		if (iOSConfig.containsKey("apnsCollapseId")) {
			builder.withApnsCollapseId(iOSConfig.getString("apnsCollapseId"));
		}
		if (iOSConfig.containsKey("category")) {
			builder.withCategory(iOSConfig.getString("category"));
		}
		if (iOSConfig.containsKey("richMediaUri")) {
			builder.withRichMediaUri(iOSConfig.getString("richMediaUri"));
		}
		return builder.build();
    }

    public static RCCallIWAudioConfig toRCCallIWAudioConfig(@NonNull JSONObject config) {
        if (config == null) {
			return null;
		}

		RCCallIWAudioConfig.Builder builder = RCCallIWAudioConfig.Builder.create();
		if (config.containsKey("enableMicrophone")) {
			builder.withEnableMicrophone(config.getBooleanValue("enableMicrophone"));
		}
		if (config.containsKey("enableStereo")) {
			builder.withEnableStereo(config.getBooleanValue("enableStereo"));
		}
		if (config.containsKey("audioSource")) {
			builder.withAudioSource(config.getIntValue("audioSource"));
		}
		if (config.containsKey("audioBitrate")) {
			builder.withAudioBitrate(config.getIntValue("audioBitrate"));
		}
		if (config.containsKey("audioSampleRate")) {
			builder.withAudioSampleRate(config.getIntValue("audioSampleRate"));
		}
		if (config.containsKey("type")) {
			builder.withType(toRCCallIWAudioCodecType(config.getIntValue("type")));
		}
		return builder.build();

    }

    public static RCCallIWAudioCodecType toRCCallIWAudioCodecType(int index) {
        return RCCallIWAudioCodecType.values()[index];
    }

    public static RCCallIWVideoConfig toRCCallIWVideoConfig(@NonNull JSONObject config) {
        if (config == null) {
			return null;
		}

		RCCallIWVideoConfig.Builder builder = RCCallIWVideoConfig.Builder.create();
		if (config.containsKey("enableHardwareDecoder")) {
			builder.withEnableHardwareDecoder(config.getBooleanValue("enableHardwareDecoder"));
		}
		if (config.containsKey("hardwareDecoderColor")) {
			builder.withHardwareDecoderColor(config.getIntValue("hardwareDecoderColor"));
		}
		if (config.containsKey("enableHardwareEncoder")) {
			builder.withEnableHardwareEncoder(config.getBooleanValue("enableHardwareEncoder"));
		}
		if (config.containsKey("enableHardwareEncoderHighProfile")) {
			builder.withEnableHardwareEncoderHighProfile(config.getBooleanValue("enableHardwareEncoderHighProfile"));
		}
		if (config.containsKey("enableEncoderTexture")) {
			builder.withEnableEncoderTexture(config.getBooleanValue("enableEncoderTexture"));
		}
		if (config.containsKey("hardWareEncoderColor")) {
			builder.withHardWareEncoderColor(config.getIntValue("hardWareEncoderColor"));
		}
		if (config.containsKey("hardWareEncoderFrameRate")) {
			builder.withHardWareEncoderFrameRate(config.getIntValue("hardWareEncoderFrameRate"));
		}
		if (config.containsKey("hardwareEncoderBitrateMode")) {
			builder.withHardwareEncoderBitrateMode(toRCCallIWVideoBitrateMode(config.getIntValue("hardwareEncoderBitrateMode")));
		}
		if (config.containsKey("profile")) {
			builder.withProfile(toRCCallIWVideoProfile(config.getIntValue("profile")));
		}
		if (config.containsKey("defaultCamera")) {
			builder.withDefaultCamera(toRCCallIWCamera(config.getIntValue("defaultCamera")));
		}
		if (config.containsKey("cameraOrientation")) {
			builder.withCameraOrientation(toRCCallIWCameraOrientation(config.getIntValue("cameraOrientation")));
		}
		return builder.build();

    }

    public static RCCallIWVideoProfile toRCCallIWVideoProfile(int index) {
        return RCCallIWVideoProfile.values()[index];
    }

    public static RCCallIWCameraOrientation toRCCallIWCameraOrientation(int index) {
        return RCCallIWCameraOrientation.values()[index];
    }

    public static RCCallIWVideoBitrateMode toRCCallIWVideoBitrateMode(int index) {
        return RCCallIWVideoBitrateMode.values()[index];
    }

    public static RCCallIWCamera toRCCallIWCamera(@NonNull int camera) {
        return RCCallIWCamera.values()[camera];
    }
    
    public static RCCallIWViewFitType toRCCallIWViewFitType(@NonNull int type) {
        return RCCallIWViewFitType.values()[type];
    }

    public static RCCallIWMediaType toRCCallIWMediaType(@NonNull int type) {
        return RCCallIWMediaType.values()[type];
    }

    public static List<String> toStringList(@NonNull JSONArray array) {
        if (array == null)
            return null;
        ArrayList<String> list = new ArrayList<>(array.size());
        for (Object o : array) {
            list.add(o.toString());
        }
        return list;
    }

    public static JSONObject fromRCCallIWUserProfile(@NonNull RCCallIWUserProfile user) {
		if (user == null) {
			return null;
		}
        JSONObject arguments = new JSONObject();
        arguments.put("userType", user.getUserType().ordinal());
        arguments.put("userId", user.getUserId());
        arguments.put("mediaType", user.getMediaType().ordinal());
        arguments.put("mediaId", user.getMediaId());
        arguments.put("enableCamera", user.isEnableCamera());
        arguments.put("enableMicrophone", user.isEnableMicrophone());
        return arguments;
    }

    public static JSONObject fromRCCallIWCallSession(@NonNull RCCallIWCallSession rcCallIWCallSession) {
    	if (rcCallIWCallSession == null){
    		return null;
		}
        JSONObject arguments = new JSONObject();
        arguments.put("callType", rcCallIWCallSession.getCallType().ordinal());
        arguments.put("mediaType", rcCallIWCallSession.getMediaType().ordinal());
        arguments.put("callId", rcCallIWCallSession.getCallId());
        arguments.put("targetId", rcCallIWCallSession.getTargetId());
        arguments.put("sessionId", rcCallIWCallSession.getSessionId());
        arguments.put("extra", rcCallIWCallSession.getExtra());
        arguments.put("startTime", rcCallIWCallSession.getStartTime());
        arguments.put("connectedTime", rcCallIWCallSession.getConnectedTime());
        arguments.put("endTime", rcCallIWCallSession.getEndTime());
        arguments.put("caller", fromRCCallIWUserProfile(rcCallIWCallSession.getCaller()));
        arguments.put("inviter", fromRCCallIWUserProfile(rcCallIWCallSession.getInviter()));
        arguments.put("mine", fromRCCallIWUserProfile(rcCallIWCallSession.getMine()));
        arguments.put("users", fromUserProfileList(rcCallIWCallSession.getUsers()));
        return arguments;
    }

    private static JSONArray fromUserProfileList(List<RCCallIWUserProfile> users) {
        JSONArray res = new JSONArray();
        if (users == null || users.isEmpty())
            return res;
        for (RCCallIWUserProfile user : users) {
            res.add(fromRCCallIWUserProfile(user).toJSONString());
        }
        return res;
    }
}
