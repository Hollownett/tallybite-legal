# TallyBite — Privacy Policy

**Last updated: July 19, 2026**

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
     typed or on-device-dictated text, never audio or a photo.
   - Advanced AI is a 3-day free trial then Pro (ADR-0048); there is no free Advanced-AI allowance.
     Pro (and the trial) allow up to 20 successful scans per day for each tool. To start the trial and
     while it runs, the app sends a Google Play Integrity token plus a one-way hash of the device's
     Android ID to the recognition service (`/v1/attest`); the raw Android ID never leaves the phone.
     These values come from shared code constants and must match both the Worker and paywall.
   - #on-device must NOT claim portion estimates are nudged from past edits. ADR-0041 deleted the
     estimator, and `calibrationFactor` / `personalIntervalScale` now have zero production callers.
     The personalization that still runs is `applyPersonalPrior` (diary-frequency reranking of a
     scan's close-call suggestions).
   - Advanced responses contain unverified estimated portions and nutrition. The service may use a
     food-name-only Google Search grounding request and retains a shared food cache plus pseudonymous
     quota, subscription-verdict, reward, and replay-protection records. It does not retain submitted
     photos, descriptions, or a diary.
   - Optional correction boxes are bounding rectangles, not cut-outs. Each sends the tagged region
     and a wider region that can include the plate, table, and nearby food; never call this "only the
     tagged food".
-->

## The short version {#summary}

TallyBite has no account or login. Your food diary, profile, weight history, Health Connect data, and attached meal-photo library stay on your phone unless you deliberately share a backup or choose an Advanced AI action described below. The core tracker and on-device recognition work without a network for every user. TallyBite runs one recognition service: an Advanced meal scan sends the whole meal photo, a label scan sends the label photo, and Advanced Describe sends the words you typed or dictated (never the audio). The service does not retain those submitted photos, descriptions, or a diary. It retains shared food-and-nutrition facts and pseudonymous operational records for quotas, subscription-verdict caching, trial-eligibility checks, and replay protection. Advanced AI is a 3-day free trial that then becomes the paid Pro subscription; the free tier keeps the diary, on-device recognition, and barcode/label entry, but not cloud Advanced AI. To start the trial, and while it is running, the app also confirms with Google Play Integrity that this is a genuine, unmodified TallyBite install and sends a one-way hash of your device identifier so a trial can't be claimed over and over on one device — the raw identifier never leaves your phone. Google Play Billing checks subscription status automatically. Only after Billing says the user is Free can Google's consent and AdMob SDKs start; Pro subscribers do not initialise the advertising SDK. Questions: hollownett@gmail.com.

## What stays on your device (and never leaves) {#on-device}

Your profile (age, height, sex, activity level, goals and targets), your food diary including meal notes, your weight and body-measurement history, your saved foods, and the meal photos you attach are all stored only in the app's private storage on your phone. On-device personalization runs locally over your own data: when a photo scan is torn between two similar foods, the foods you log most often are ranked first. Food and nutrition values come from a read-only database bundled inside the app — looking up a food needs no internet.

## When information leaves your phone {#network}

Some requests happen automatically, with no tap from you. (1) Each time the app starts, and each time you return to it, it asks Google Play Billing whether the current Google account has an active TallyBite Pro subscription. (2) For a Free user only, the Google consent and AdMob SDKs can initialise, read ads-consent state, show Google's consent form when required, and request the Today banner — see “Advertising and analytics” below. (3) For a trial or Pro subscriber, the app may confirm the current Advanced-AI allowance with the recognition service using the Google Play purchase token; a free user makes no such request, because Advanced AI needs the trial or Pro. (4) If an AI-model download you started earlier was interrupted, it resumes the next time the app opens. Other requests wait for you: “Search online” sends a search term or barcode number to Open Food Facts; choosing an optional AI model downloads model files; and creating a backup writes a file and hands it to your phone's share sheet, where you decide where it goes. TallyBite does not upload a backup itself. Aside from an Advanced AI submission you choose and a backup you choose to share, TallyBite does not send your diary, profile, meal-photo library, weight, or Health Connect data off the device.

There is a broader pattern behind every **Advanced AI** request. When you use it for a meal photo, nutrition label, or description, the image or words travel to the recognition service with a random installation ID for Free use or a Google Play purchase token for Pro. The service verifies a Pro token with Google Play and stores a short-lived verdict keyed by a one-way hash; it also stores hashed quota counters. A meal-photo scan or description returns a food name, brand where available, estimated portion, calories, nutrients, and an unverified status for Review Meal. When nutrition for a named branded or chain product is missing, the service may send **only that food's name to Google Search** for published facts; your image, diary, description, and identifier are not part of that search. A label scan instead transcribes the package. The service keeps a shared cache of food names and nutrition, never linked to a person's diary. It does not retain submitted images or descriptions.

There is one more thing you can choose to send from “Describe a meal”: words, not a picture. Advanced Describe sends the text you type or dictate; speech-to-text happens on the phone, so no audio or photo leaves on this path. Lite parses entirely on the phone. Advanced AI (meal photo, label, and Describe) is a **3-day free trial that then becomes Pro** — there is no free Advanced-AI allowance — and both the trial and Pro allow **up to 20 successful scans per day for each of those three tools**. To begin the trial and while it is active, the app also sends a Google Play Integrity token and a one-way hash of your device identifier to the service so the same device cannot start the free trial repeatedly; the raw identifier stays on your phone. The service does not retain the description.

## Camera and photos {#camera}

The camera takes pictures of food and scans product barcodes. Photos you take or pick are processed on your device for food recognition and saved in the app's private storage so they can appear next to your diary entries.

Photos are not uploaded, with one exception that you control — but when that exception applies, **the whole photo goes.** If you turn on **Advanced AI recognition** (Settings → AI & recognition) — opt-in for everyone, not only Pro subscribers — and tap Recognize, **your whole meal photo is sent**, uncropped, so the AI can find the foods in it for you. It sees whatever you photographed: the food, the plate, the table, and anything else that happened to be in frame. Point the camera at your meal, not at anything you would rather not send.

The AI finds foods in the whole frame. **Drawing a box is optional** and can correct the result or request a more precise portion. If you draw a rectangle around food, the app sends that bounding box plus **a second, wider rectangle around it** so the AI can see scale cues such as the plate and table. A rectangle can include neighbouring food and background. Meal-photo portions and nutrition are AI estimates and can be wrong. Review Meal asks you to check or correct them before logging, and the app remembers a corrected food. A nutrition-label scan instead transcribes the package.

If you weighed your food on a **kitchen scale** and its display is in the picture, the AI reads the grams straight off it, so your portion is a **measurement** rather than an estimate. There is nothing to switch on: your photo is being sent either way, and reading a number that is already in it costs you nothing extra. A photo with no scale in it simply comes back without a reading. If the food was sitting in a bowl on the scale, the app says so, because the reading may include the bowl's weight unless you tared it.

Cloud Advanced AI needs a **3-day free trial or a Pro subscription**; there is no free Advanced-AI allowance. Sent with each Advanced request is your **Google Play purchase token**, which the service verifies with Google Play. While you are in the free-trial phase, the app additionally sends — once when you start the trial, and when it refreshes each day — a **Google Play Integrity token** and a **one-way hash of your device's Android ID** to `/v1/attest`; the service checks that the request comes from a genuine, unmodified TallyBite install on a real device and that this device has not already used a free trial, then issues a short-lived pass the app attaches to trial scans. The raw Android ID never leaves your phone, and none of this is linked to your diary. The service stores quota and trial-ledger records under one-way hashes; successful reward transaction IDs are retained for replay protection.

When the food it named isn't one it already has trustworthy nutrition for — usually a branded or chain-menu product — the service may search the web using **only that food's name** to find it, and it keeps a cache of food names and their nutrition so the same food is never looked up twice; see “When information leaves your phone” for exactly how that works. Ordinary, generic foods rarely trigger a search: the model already knows them, or the cache already does.

There is one more photo mode: a product's **nutrition-facts label**. Choose Label beside Plate on the photo camera. A photo of the label is sent to the same service to read the nutrition facts and transcribe the product name, serving size, calories, and nutrients printed on it. Label transcription can be wrong, so Review Meal asks you to check it. It is opt-in, uses the trial or Pro allowance stated above, and needs a connection; without one you can enter the food yourself. Barcode remains a separate barcode-only scanner.

The service retains no submitted image, description, or diary. It retains the shared food cache and pseudonymous operational records described above. Lite scans stay on the phone; an Advanced meal scan always sends the whole frame after consent, even if the on-device model could name it. Nothing is sent when you scan offline. Online, nothing is sent until you enable Advanced AI and choose its action, and you can turn it off at any time. Your diary, weight, profile, and Health Connect data are not sent.

The only other way a photo leaves your phone is if you turn on the optional “Include photos” setting and then share a backup yourself.

## Health Connect (optional) {#health-connect}

If you connect Android Health Connect, TallyBite can read the weight and step data your other health apps have stored there, to show trends and improve calorie estimates. This is read-only and happens on your device — nothing is written back and nothing is transmitted. You can revoke this access at any time in your phone's settings.

## Advertising and analytics {#analytics}

TallyBite uses no analytics, attribution, or crash-reporting SDK. Local diagnostic counts stay on your phone and exclude images, diary entries, and personal details. For Free users, Google AdMob can read the advertising ID, IP address, and general device information to serve, cap, and measure ads and, with consent, personalise them. One banner can appear on Today, never in camera, Review Meal, History, or another tab. Pro subscribers do not initialise the AdMob or ads-consent SDK. Where Google requires it, its consent form appears before personalised ads, and TallyBite Settings provides Google's privacy-options form when the SDK says it is required. TallyBite does not send your diary, profile, photos, weight, or Health Connect data to Google or an advertiser. Google's handling of AdMob and Play Billing data follows Google's privacy policy.

## Children {#children}

TallyBite is intended for adults: the Terms of use require users to be 18 or older, and the app enforces this at the date-of-birth entry. It is not directed at children and does not knowingly collect data from them. Ads are requested as not child-directed, and are limited to a general-audience content rating.

## Data retention and deletion {#retention}

Your diary, profile, saved foods, templates, photos, and imported Health Connect records stay on your device until you delete entries, clear app storage, or uninstall. The recognition service does not retain submitted photos, descriptions, or diary content. Shared food facts remain in its userless cache; pseudonymous quota, subscription-verdict, trial-ledger, and replay-protection records expire under operational retention windows (the trial-ledger entry, a one-way device hash, is kept longer so one device cannot repeat the free trial). Off-device requests use HTTPS. Google retains data it collects through AdMob and Play Billing under Google's policy. You can reset the advertising ID in Android settings and change required ad privacy choices from TallyBite Settings.

## What is live now, and future changes {#future}

Advertising and subscriptions are live: a Free user may see the Today banner, and Google Play processes the 3-day free trial and the Pro subscription. TallyBite runs the recognition service described above, and an Advanced meal scan sends the whole meal photo. Advanced AI is opt-in and requires the free trial or Pro; starting the trial adds the Play Integrity + hashed-device-ID check described above. Pro disables the advertising SDK and unlocks the other paid features described on the paywall. The service has no TallyBite account or diary. It retains only the shared food cache and pseudonymous operational records disclosed above. TallyBite will not begin sending diary, profile, or Health Connect data off the phone without updating this policy and the Play Store Data safety declaration first.

## Changes to this policy {#changes}

If this policy changes, the “Last updated” date above changes with it; the new version ships with the next app update and is posted at the policy's public URL once the app is distributed through an app store.
