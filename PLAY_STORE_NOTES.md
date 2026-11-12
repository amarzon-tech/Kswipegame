# K Swipe: Google Play notes

Android wrapper for the same 1.2.5 web content that shipped on the `ios-1.2` branch. This document is for Dr D and the Play Console listing. Do not merge `android-1.2` to `main` until Dr D says so.

## Build that is ready to upload

- Application ID: `com.drd.kswipe` (same as the iOS bundle id)
- versionName **1.2**, versionCode **3** (matches iOS marketing version 1.2, build 3)
- App name: K Swipe
- Release format: a signed Android App Bundle (AAB)
- Upload keystore (on the build box, never committed): `/home/box/secrets/kswipe-upload.jks`
- Key alias: `kswipe-upload`
- Upload-key certificate SHA-256: `50:47:19:09:5E:C5:07:A6:53:84:34:F2:D3:8A:36:9D:88:BA:8B:CA:C0:B7:53:FB:96:22:7A:76:76:0D:16:79`
- The keystore password is in `/home/box/secrets/kswipe-upload.txt` (mode 600). Do not commit, email, or paste that file into chat.

To rebuild from this branch (after `npm install`):

```bash
npm run android:sync
cd android
# local.properties must point at your Android SDK, and keystore.properties
# must point at the upload keystore (see android/keystore.properties.example).
./gradlew :app:bundleRelease :app:assembleDebug
```

The release AAB is signed with the upload key. Google Play App Signing will re-sign what users install.

## What Dr D needs to do in Google Play Console

1. **Create a Play Console developer account** if you do not already have one. It is a one-time $25 registration, paid to Google, with identity verification. Use the same developer identity you want on the listing (Amar Damodar / Dr D).
2. **Create a new app** named K Swipe, default language English (United States), type App (or Game if you prefer it under Games > Educational), free, and confirm it meets the Developer Program Policies and US export laws.
3. **Turn on Play App Signing** (required for new apps). On first upload, choose *Let Google generate and protect the app signing key*. Keep using the upload keystore above for every future build. Google keeps the app signing key; you keep the upload key. If the upload key is lost, Play can register a new upload key after an identity check, but that takes time — back up the `.jks` and password somewhere safe offline.
4. **Upload the signed AAB** to a testing track first (see closed-test rule below), not straight to production if this is a new personal account.
5. **Closed testing rule for new personal accounts:** Google currently requires new personal Play developer accounts to run a closed test with at least **12 testers** who have opted in, for at least **14 days**, before the app can go to production. Organization accounts may have a different path. Add testers by email in the closed testing track, send them the opt-in link, and wait until Play shows the production track is unlocked.
6. Fill in the **store listing**, **Data safety** form, **content rating** questionnaire, **target audience**, **privacy policy URL**, and **ads declaration** (this app contains no ads). Drafts for those are below.
7. Contact email for the listing and for IARC: `amardamodar@gmail.com`.
8. Privacy policy URL (required): use the same live privacy page already used for the App Store, `privacy.html` on the K Swipe website. Do not use the private GitHub repository URL.

## Data safety form draft (no data collected)

Answer these in Policy > App content > Data safety. K Swipe does not collect, share, or sell any user data. Progress stays in on-device storage only, and Android backup is turned off in the app manifest so that progress is not copied to cloud backup.

- Does your app collect or share any of the required user data types? **No**
- Is all user data collected by this app encrypted in transit? **Not applicable** (no data is collected or sent)
- Which of the following methods of account creation does your app support? **No accounts**
- Do you provide a way for users to request that their data is deleted? **Not applicable** (no data is collected). On-device progress can be erased with "Reset progress & stats" or by uninstalling the app.
- Independent security review: **No**
- Data collected: **none** (no location, personal info, financial info, health info, messages, photos, files, calendar, contacts, app activity, web history, app info and performance, or device identifiers)
- Data shared with third parties: **none**
- Data sold: **no**
- Analytics, advertising, or fraud-prevention SDKs: **none**
- The app works offline after install. It does not include the INTERNET permission. The only permission is VIBRATE, used for optional haptic feedback (the game also works with haptics off).

Overview blurb you can paste:

> K Swipe does not collect, share, or sell any user data. There are no accounts, ads, analytics, or network calls. Game progress and settings stay on the device.

## Content rating questionnaire

Start the IARC questionnaire under Policy > App content > Content rating. Use email `amardamodar@gmail.com`.

**Category:** choose **Reference, News, or Educational**. This is a patient-education tool that uses a simple swipe quiz. If Play later asks you to recategorize it as a Game, retake the questionnaire and keep the same "no" answers below.

Expected rating is Everyone / PEGI 3 / equivalent, as long as the answers stay accurate.

Answer **No** to every content question, including:

- Violence, blood, weapons, or scary / horror content
- Sexual content, nudity, or romantic themes
- Profanity, crude humor, or discriminatory language
- Alcohol, tobacco, drugs, or other controlled substances (the game is about everyday foods and potassium, including salt substitutes; it does not depict substance use)
- Gambling, simulated gambling, or paid loot boxes
- User-to-user communication, chat, or user-generated content
- Sharing location or encouraging users to meet in person
- Unrestricted internet access (the app does not browse the web; it only shows bundled content)
- Digital purchases, in-app products, or ads
- Personal information collection from users (including children)

**Ads declaration:** No, this app does not contain ads.

**Target audience:** this is a patient-education app for adults and is not designed for children. In Target audience and content, do **not** include under-13 age groups and do **not** enroll it in Designed for Families / Families Policy. Suggested age groups: 18 and over (you may also include 16–17 if you want caregivers and older teens to find it). Appeals to children: **No**.

**News app:** No. **COVID-19 contact tracing:** No.

## Store listing text

Play category: **Education** (secondary, if offered: Health and Fitness, or Games > Educational / Trivia).

**App name** (max 30 characters):

```
K Swipe: Potassium Journey
```

(If you prefer the shorter home-screen name only: `K Swipe`.)

**Short description** (max 80 characters):

```
Swipe to learn which foods are high, moderate, or low in potassium.
```

**Full description:**

```
K Swipe is a free, offline swipe game that helps you practice which foods are high, moderate, or low in potassium.

Swipe each card, get instant feedback with a milligram amount and a short teaching note, and work through a potassium journey with levels, a daily challenge, and a plate-building quiz. A compare mode asks which of two foods is lower in potassium.

The app is for education only. It is not medical advice. Potassium needs differ from person to person. They depend on your blood test results, kidney function, whether you are on hemodialysis or peritoneal dialysis, and your medicines. Some people with kidney disease need more potassium, not less. Talk to your kidney doctor, dietitian, or care team before changing what you eat.

Food values are estimates from published sources, including USDA FoodData Central and guidance from the National Kidney Foundation. They are teaching examples, not a personal meal plan.

K Swipe includes 130+ curated cards with photos, optional sound and haptics, and saved progress on your device. There are no accounts, no ads, and no data collection. After you install it, the game works offline.

Created by Amar Damodar, MD, a nephrologist.
```

**What's new** (for version 1.2; same meaning as the approved App Store text):

```
New food photos on every card, a friendlier Let's play! start, a slimmer in-game disclaimer, and an updated low-sodium vegetable juice value (850 mg).
```

**Graphics:** use the existing 512×512 app icon (`icons/icon-512.png`) for the high-res icon. Play also requires a 1024×500 feature graphic and phone screenshots (at least 2; 16:9 or 9:16 JPEG/PNG). Capture: start screen, a food card, feedback with mg, a plate card, "which is lower?", and stats. Do not put a GitHub or repository URL on any graphic.

**Support and contact:** `amardamodar@gmail.com`. Leave the store listing website blank unless you want the public K Swipe site listed.

## Privacy and permissions

- App Privacy / Data safety: **Data not collected**
- Permissions: VIBRATE only (optional haptics). No INTERNET, no storage, no location, no camera, no contacts.
- Android backup and device-to-device transfer of app data are disabled, so on-device progress is not copied off the phone by backup.
- Medical disclaimer stays on the start screen, in About, and as a one-line footer during play. Sources are listed in About & Sources.

## Review notes you can paste for Play

```
K Swipe is a patient-education potassium quiz created by Amar Damodar, MD, a nephrologist. It works fully offline, with no login, no ads, no analytics, and no data collection. Food values are estimates from USDA FoodData Central and National Kidney Foundation guidance. The app states clearly that it is education only, not medical advice, and that patients should follow their care team. Optional haptic feedback uses the VIBRATE permission.
```

## Orientation and devices

Phones are locked to portrait, matching iPhone. The same web layout is used on Android. Safe-area padding (status bar and navigation / gesture bar) is handled with Capacitor's System Bars plugin and the existing `env(safe-area-inset-*)` CSS, so About & Sources and other screens should not sit under the system bars.
