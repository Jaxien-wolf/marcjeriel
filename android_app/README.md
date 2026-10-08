# Movie Recommendations for Android

The Android app displays the movie recommendation website from the bundled
`app/src/main/assets/website` files. The pages and media work offline; external
links open in another app.

## Run the app
1. Open this `android_app` folder in Android Studio.
2. Let Gradle sync.
3. Run the app on an emulator or connected Android device.

Android Studio and JDK 17 or newer are required.

## Update the bundled website
Copy the website's HTML, CSS, JavaScript, and media files into
`app/src/main/assets/website`, preserving their relative paths. Keep the
Android project folder out of the copied website files.

## Build an APK
In Android Studio, choose **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
The debug APK is written to `app/build/outputs/apk/debug/app-debug.apk`.

