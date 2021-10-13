package cn.rongcloud.call.uni;

import android.content.Context;
import android.widget.FrameLayout;
import io.dcloud.feature.uniapp.UniSDKInstance;
import io.dcloud.feature.uniapp.ui.action.AbsComponentData;
import io.dcloud.feature.uniapp.ui.component.AbsVContainer;
import io.dcloud.feature.uniapp.ui.component.UniComponent;

/**
 * Created by wangw on 2021/8/6.
 */
public class RCUniCallComponent extends UniComponent<FrameLayout> {

    public RCUniCallComponent(UniSDKInstance instance, AbsVContainer parent, int type, AbsComponentData componentData) {
        super(instance, parent, type, componentData);
    }

    public RCUniCallComponent(UniSDKInstance instance, AbsVContainer parent, AbsComponentData componentData) {
        super(instance, parent, componentData);
    }

    @Override
    protected FrameLayout initComponentHostView(Context context) {
        return new FrameLayout(context);
    }


}
