# Gramwise — Privacy Policy

**Last updated: August 21, 2026**

<!--
  Canonical source for the Privacy Policy. This ONE markdown file generates both the in-app
  offline copy (apps/mobile/src/content/privacyPolicy.ts) and the hosted GitHub Pages HTML,
  via apps/mobile/scripts/gen-legal.mjs. Edit here, re-run the generator, commit. Each `##`
  heading's {#key} is the stable section key the app + tests rely on — don't rename them.
  Keep every claim in sync with the code: the policy must never promise more privacy than the
  app actually has. As a legal disclosure this file MAY name the online recipient (Open Food
  Facts); flow screens still say only "online".

  Each section's body must be ONE paragraph — the generator joins paragraphs with a space.

  Load-bearing accuracy notes (2026-07-14), each pinned by a test in privacyPolicy.test.ts:
   - Play Billing checks entitlement automatically. The ads-consent and AdMob SDKs initialise only
     after Billing resolves the user as Free; Pro does not initialise either SDK. Settings exposes
     Google's privacy-options form when the SDK reports that it is required.
   - Advanced meal recognition sends the whole, uncropped photo on every Advanced scan. Optional
     boxes send a tagged bounding rectangle plus a wider context rectangle. Advanced is opt-in for
     every user and is never described as local or anonymous.
   - A label scan sends the label photo and transcribes printed nutrition. Advanced Describe sends
     typed or dictated text, never audio or a photo. The speech-to-text itself is done by the
     phone's own configured speech service, not by Gramwise.
   - Advanced AI is a 3-day free trial then Pro (ADR-0048); there is no free Advanced-AI allowance.
     Pro and trial subscribers authenticate with the Google Play purchase token, which the service
     verifies with Google. Google Play alone determines whether the account receives the trial.
     These values come from shared code constants and must match both the Worker and paywall.
   - #on-device must claim NO personalization of a scan at all (ADR-0061). ADR-0041 already left
     `calibrationFactor` / `personalIntervalScale` with zero production callers; `applyPersonalPrior`
     has since moved to `src/_retired/` with its only caller, and `applyPersonalMemory` (ADR-0034
     recall) has no production caller either. Corrections are still written by
     `meal-review/commit.ts`, but nothing reads them back into a scan.
   - There is NO on-device photo recognition (ADR-0061). A photo or label scan is a network action
     and cannot run offline. What still works with no network: the diary, the bundled food search,
     Describe's Lite text parse, saved foods and manual entry. Never restore a "processed on your
     device for food recognition" phrasing — it understates egress.
   - Advanced responses contain unverified estimated portions and nutrition. The service may use a
     food-name-only Google Search grounding request and retains a shared food cache plus pseudonymous
     quota, subscription-verdict, reward, and replay-protection records. It does not retain submitted
     photos, descriptions, or a diary.
   - Optional correction boxes are bounding rectangles, not cut-outs. Each sends the tagged region
     and a wider region that can include the plate, table, and nearby food; never call this "only the
     tagged food".
-->

## The short version {#summary}

Gramwise has no account or login. Your food diary, profile, weight history, Health Connect data, and attached meal-photo library stay on your phone unless you deliberately share a backup or choose an Advanced AI action described below. The core tracker works without a network for every user: your diary, the bundled food search, describing a meal in words, your saved foods, and entering food by hand. Gramwise runs one recognition service: an Advanced meal scan sends the whole meal photo and any optional meal hint you type for that scan, a label scan sends the label photo, and Advanced Describe sends the words you typed or dictated (never the audio). The service does not retain those submitted photos, hints, descriptions, or a diary. It retains shared food-and-nutrition facts and pseudonymous operational records for quotas, subscription-verdict caching, and replay protection. Scanning a photo — a meal or a nutrition label — is Advanced AI: there is no on-device recognition, so a scan always sends the photo and cannot run without a connection. Advanced AI is a 3-day free trial that then becomes the paid Pro subscription; the free tier keeps the diary, the offline search, Describe, saved foods, manual entry, and the barcode scanner, but not a photo scan. Google Play determines trial eligibility and Billing returns only offers available to the current account. Trial and paid subscribers use the same Play purchase token, which the recognition service verifies with Google. Gramwise does not send a Play Integrity token or hashed device identifier to decide trial eligibility. Only after Billing says the user is Free can Google's consent and AdMob SDKs start; Pro subscribers do not initialise the advertising SDK. Questions: hollownett@gmail.com.

## What stays on your device (and never leaves) {#on-device}

Your profile (age, height, sex, activity level, goals and targets), your food diary including meal notes, your weight and body-measurement history, your saved foods, and the meal photos you attach are all stored only in the app's private storage on your phone. The one exception you control is the optional gallery album described under “Camera and photos”, which places a copy of your meal photos in your phone's gallery. Food and nutrition values come from a read-only database bundled inside the app — looking up a food needs no internet.

## When information leaves your phone {#network}

Some requests happen automatically, with no tap from you. (1) Each time the app starts, and each time you return to it, it asks Google Play Billing whether the current Google account has an active Gramwise Pro subscription. (2) For a Free user only, the Google consent and AdMob SDKs can initialise, read ads-consent state, show Google's consent form when required, and request the Today banner — see “Advertising and analytics” below. (3) For a trial or Pro subscriber, the app may confirm the current Advanced-AI allowance with the recognition service using the Google Play purchase token; a free user makes no such request, because Advanced AI needs the trial or Pro. Other requests wait for you: “Search online” sends a search term or barcode number to Open Food Facts, and creating a backup writes a file and hands it to your phone's share sheet, where you decide where it goes. Gramwise does not upload a backup itself. Aside from an Advanced AI submission you choose and a backup you choose to share, Gramwise does not send your diary, profile, meal-photo library, weight, or Health Connect data off the device.

There is a broader pattern behind every **Advanced AI** request. When you use it for a meal photo, nutrition label, or description, the image or words travel to the recognition service with a Google Play purchase token for the active trial or paid subscription. On the meal-photo approval screen you may also type one optional short hint; the app sends that hint with the photo for this scan, and there is no on-device engine that could read it instead. The service verifies the token with Google Play and stores a short-lived verdict keyed by a one-way hash; it also stores hashed quota counters. A meal-photo scan or description returns a food name, brand where available, estimated portion, calories, nutrients, and an unverified status for Review Meal. When nutrition for a named branded or chain product is missing, the service may send **only that food's name to Google Search** for published facts; your image, diary, description, hint, and identifier are not part of that search. If you supplied a meal hint, names produced by that scan are not sent to Google Search or written to the shared food cache. A label scan instead transcribes the package. The service keeps a shared cache of food names and nutrition, never linked to a person's diary. It does not retain submitted images, hints, or descriptions.

There is one more thing you can choose to send from “Describe a meal”: words, not a picture. Advanced Describe sends the text you type or dictate — no audio and no photo are ever sent to the recognition service. Turning your speech into text is done by your phone's own speech service, the same one your keyboard's voice typing uses, under your phone's settings; depending on the phone and those settings, that service may process the audio on its provider's servers rather than on the device. Gramwise does not choose that service and never receives, stores, or logs your audio. To help it hear food words, Gramwise gives it a short fixed list of commonly misheard foods (“flat white”, “skyr”); that list is the same for everyone and contains nothing from your diary. Describe's Lite parses entirely on the phone — it is a word grammar reading the bundled database, not a model, and it is the only Lite left in the app. Advanced AI (meal photo, label, and Describe) is a **3-day free trial that then becomes Pro** — there is no free Advanced-AI allowance — and both the trial and Pro allow **up to 20 successful scans per day for each of those three tools**. Google Play determines whether the current account is eligible for the trial. The service does not retain the description.

## Camera and photos {#camera}

The camera takes pictures of food and scans product barcodes. Photos you take or pick are saved in the app's private storage so they can appear next to your diary entries. Naming the food in a photo is not something the app can do by itself: a scan sends the photo to the recognition service, as described below.

Photos are not uploaded, with one exception that you control — but when that exception applies, **the whole photo goes.** If you turn on **Advanced AI recognition** (Settings → AI & recognition) — nothing is sent until you turn it on, and a photo scan also needs the trial or Pro described below — and tap Scan, **your whole meal photo is sent**, uncropped, together with any optional short meal hint you typed on the approval screen, so the AI can find the foods in it for you. It sees whatever you photographed: the food, the plate, the table, and anything else that happened to be in frame. Point the camera at your meal, not at anything you would rather not send.

The AI finds foods in the whole frame. **Drawing a box is optional** and can correct the result or request a more precise portion. If you draw a rectangle around food, the app sends that bounding box plus **a second, wider rectangle around it** so the AI can see scale cues such as the plate and table. A rectangle can include neighbouring food and background. Meal-photo portions and nutrition are AI estimates and can be wrong. Review Meal asks you to check or correct them before logging, and the app remembers a corrected food. A nutrition-label scan instead transcribes the package.

If you weighed your food on a **kitchen scale** and its display is in the picture, the AI reads the grams straight off it, so your portion is a **measurement** rather than an estimate. There is nothing to switch on: your photo is being sent either way, and reading a number that is already in it costs you nothing extra. A photo with no scale in it simply comes back without a reading. If the food was sitting in a bowl on the scale, the app says so, because the reading may include the bowl's weight unless you tared it.

Cloud Advanced AI needs a **3-day free trial or a Pro subscription**; there is no free Advanced-AI allowance. Sent with each Advanced request is your **Google Play purchase token**, which the service verifies with Google Play. The same token proves an active trial or paid subscription. Gramwise does not send a Play Integrity token or hashed Android ID for trial eligibility, and it does not maintain a device trial ledger.

When the food it named isn't one it already has trustworthy nutrition for — usually a branded or chain-menu product — the service may search the web using **only that food's name** to find it, and it keeps a cache of food names and their nutrition so the same food is never looked up twice; see “When information leaves your phone” for exactly how that works. Ordinary, generic foods rarely trigger a search: the model already knows them, or the cache already does.

There is one more photo mode: a product's **nutrition-facts label**. Choose Label beside Plate on the photo camera. A photo of the label is sent to the same service to read the nutrition facts and transcribe the product name, serving size, calories, and nutrients printed on it. Label transcription can be wrong, so Review Meal asks you to check it. It is opt-in, uses the trial or Pro allowance stated above, and needs a connection; without one you can enter the food yourself. Barcode remains a separate barcode-only scanner.

The service retains no submitted image, meal hint, description, or diary. It retains the shared food cache and pseudonymous operational records described above. Nothing is sent unless you start a scan: a meal scan always sends the whole frame and any optional hint you typed, after consent, and a label scan sends the label photo. Because there is no on-device recognition, with no connection a photo scan cannot run at all — nothing is queued and nothing is sent later. Describing a meal in words, searching the bundled database, re-logging a saved food and entering food by hand all still work on the phone with nothing sent. You can turn Advanced AI off at any time. Your diary, weight, profile, and Health Connect data are not sent.

The only other way a photo leaves your phone is if you turn on the optional “Include photos” setting and then share a backup yourself.

You can also keep a copy of your meal photos in your phone's own gallery: Settings → Data & backup → “Save meal photos to Gramwise” creates a Gramwise album so you can view, share and delete them with the tools you already use. It is OFF unless you turn it on, and Android asks for permission before the first photo is copied. This does not send anything off your phone by itself — but a photo in your gallery is visible to other apps you have given photo access, and a photo-backup service such as Google Photos may upload it under your own account settings. Turning the switch off stops new copies; photos already in your gallery stay there, yours to keep or delete.

## Health Connect (optional) {#health-connect}

If you connect Android Health Connect, Gramwise can read the weight, step, and exercise-session data your other health apps have stored there. Exercise sessions are reduced on your phone to a daily workout count and duration; Gramwise does not request workout routes, heart rate, distance, or workout calories. This is read-only and happens on your device — nothing is written back and nothing is transmitted. Each permission is optional, you can manage or revoke access in Health Connect, and you can remove imported Health Connect data from Gramwise without deleting manual entries.

## Advertising and analytics {#analytics}

Gramwise uses no analytics, attribution, or crash-reporting SDK. Local diagnostic counts stay on your phone and exclude images, diary entries, and personal details. For Free users, Google AdMob can read the advertising ID, IP address, and general device information to serve, cap, and measure ads and, with consent, personalise them. One banner can appear on Today, never in camera, Review Meal, History, or another tab. Pro subscribers do not initialise the AdMob or ads-consent SDK. Where Google requires it, its consent form appears before personalised ads, and Gramwise Settings provides Google's privacy-options form when the SDK says it is required. Gramwise does not send your diary, profile, photos, weight, or Health Connect data to Google or an advertiser. Google's handling of AdMob and Play Billing data follows Google's privacy policy.

## Children {#children}

Gramwise is intended for adults: the Terms of use require users to be 18 or older, and the app enforces this at the date-of-birth entry. It is not directed at children and does not knowingly collect data from them. Ads are requested as not child-directed, and are limited to a general-audience content rating.

## Data retention and deletion {#retention}

Your diary, profile, saved foods, templates, photos, and imported Health Connect records stay on your device until you delete entries, clear app storage, or uninstall. The recognition service does not retain submitted photos, descriptions, or diary content. Shared food facts remain in its userless cache; pseudonymous quota, subscription-verdict, and replay-protection records expire under operational retention windows. Off-device requests use HTTPS. Google retains data it collects through AdMob and Play Billing under Google's policy. You can reset the advertising ID in Android settings and change required ad privacy choices from Gramwise Settings.

## What is live now, and future changes {#future}

Advertising and subscriptions are live: a Free user may see the Today banner, and Google Play processes the 3-day free trial and the Pro subscription. Gramwise runs the recognition service described above, and an Advanced meal scan sends the whole meal photo. Advanced AI is opt-in and requires the free trial or Pro; Google Play alone decides whether the current account receives the trial. Pro disables the advertising SDK and unlocks the other paid features described on the paywall. The service has no Gramwise account or diary. It retains only the shared food cache and pseudonymous operational records disclosed above. Gramwise will not begin sending diary, profile, or Health Connect data off the phone without updating this policy and the Play Store Data safety declaration first.

## Changes to this policy {#changes}

If this policy changes, the “Last updated” date above changes with it; the new version ships with the next app update and is posted at the policy's public URL once the app is distributed through an app store.
