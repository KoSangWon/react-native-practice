package com.layout;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.List;

import com.reactnativenavigation.NavigationApplication;
public class MainApplication extends NavigationApplication{
    @override
    public boolean isDebug(){
	return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages(){
	return Arrays.<ReactPackage>asList();
    }

    @override
    public List<ReactPackage> createAdditionalReactPackages() {
	return getPackages();
    }

    @override
    public String getJSMainModuleName(){
	return "index";
    }

}
