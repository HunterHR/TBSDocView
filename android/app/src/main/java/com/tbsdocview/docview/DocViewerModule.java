package com.tbsdocview.docview;


import android.Manifest;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;


public class DocViewerModule extends ReactContextBaseJavaModule {
    public static final int ERROR_NO_HANDLER_FOR_DATA_TYPE = 53;
    public static final int ERROR_FILE_NOT_FOUND = 2;
    public static final int ERROR_UNKNOWN_ERROR = 1;
    private final ReactApplicationContext reactContext;

    public DocViewerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNDocViewer";
    }

    @ReactMethod
    public void openDoc(ReadableArray args, Callback callback) {
        final ReadableMap arg_object = args.getMap(0);
        try {
            if (arg_object.getString("url") != null && arg_object.getString("fileName") != null) {
                // parameter parsing
                final String url = arg_object.getString("url");
                final String fileName =arg_object.getString("fileName");
                final String fileType =arg_object.getString("fileType");
                final Boolean cache =arg_object.getBoolean("cache");
                final byte[] bytesData = new byte[0];
                // Begin the Download Task
//                new FileDownloaderAsyncTask(callback, url, cache, fileName, fileType, bytesData).execute();
                openDoc(url);
            }else{
                callback.invoke(false);
            }
        } catch (Exception e) {
            callback.invoke(e.getMessage());
        }
    }


    @ReactMethod
    public void openDocb64(ReadableArray args, Callback callback) {
        final ReadableMap arg_object = args.getMap(0);
        try {
            if (arg_object.getString("base64") != null && arg_object.getString("fileName") != null && arg_object.getString("fileType") != null) {
                // parameter parsing
                final String base64 = arg_object.getString("base64");
                final String fileName =arg_object.getString("fileName");
                final String fileType =arg_object.getString("fileType");
                final Boolean cache = arg_object.getBoolean("cache");
                //Bytes
                final byte[] bytesData = android.util.Base64.decode(base64,android.util.Base64.DEFAULT);
                System.out.println("BytesData" + bytesData);
                // Begin the Download Task
//                new FileDownloaderAsyncTask(callback, "", cache, fileName, fileType, bytesData).execute();

            }else{
                callback.invoke(false);
            }
        } catch (Exception e) {
            callback.invoke(e.getMessage());
        }


    }

    @ReactMethod
    public void openDocBinaryinUrl(ReadableArray args, Callback callback) {
        final ReadableMap arg_object = args.getMap(0);
        try {
            if (arg_object.getString("url") != null && arg_object.getString("fileName") != null && arg_object.getString("fileType") != null) {
                // parameter parsing
                final String url = arg_object.getString("url");
                final String fileName =arg_object.getString("fileName");
                final String fileType =arg_object.getString("fileType");
                final Boolean cache =arg_object.getBoolean("cache");
                final byte[] bytesData = new byte[0];
                // Begin the Download Task
//                new FileDownloaderAsyncTask(callback, url, cache, fileName, fileType, bytesData).execute();
                openDoc(url);
            }else{
                callback.invoke(false);
            }
        } catch (Exception e) {
            callback.invoke(e.getMessage());
        }
    }


    public void openDoc(String filePath){
//        String[] perms = new String[]{Manifest.permission.READ_EXTERNAL_STORAGE,
//                Manifest.permission.WRITE_EXTERNAL_STORAGE};
//
//
//
//
//        if (!EasyPermissions.hasPermissions(reactContext, perms)) {
//            EasyPermissions.requestPermissions(reactContext, "需要访问手机存储权限！", 10086, perms);
//        } else {
//            FileDisplayActivity.show(reactContext, filePath);
//        }

        FileDisplayActivity.show(reactContext, filePath);
    }
}
