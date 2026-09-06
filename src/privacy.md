# Gramwise — Privacy Policy

**Last updated: September 6, 2026**

<!--
  Canonical source for the Privacy Policy. This ONE markdown file generates both the in-app
  offline copy (apps/mobile/src/content/privacyPolicy.ts) and the hosted GitHub Pages HTML, via
  apps/mobile/scripts/gen-legal.mjs. Edit here, re-run the generator, commit both. Each `##`
  heading's {#key} is the stable section key the app + tests rely on — don't rename them. Each
  section body must be ONE paragraph. As a legal disclosure this file MAY name recipients (Open
  Food Facts, Google, Cloudflare); flow screens still say only "online".

  Shape (2026-09-06, second pass): a standard GDPR policy — controller, what stays local, what
  leaves and why, photos/scans, Health Connect, ads, legal bases, recipients + transfers,
  retention, security, rights, children, live features, changes — at roughly 2,000 words, after
  the owner found the first shape "too descriptive". Facts, not product rationale.

  Every claim must match the code; the policy must never promise more privacy than the app has.
  privacyPolicy.test.ts pins the load-bearing sentences (whole uncropped photo on every Advanced
  scan; optional hint typed or dictated, sent WITH the photo; two rectangles for a drawn box; the
  scale read is automatic; label scan transcribes; purchase token, no Play Integrity / hashed
  Android ID; Describe sends text never audio, auto-send on finishing voice input when Advanced is
  selected, Lite parses on the phone; the phone's own speech service may process audio on its
  provider's servers; the fixed misheard-foods list; Google Search on a bare food name; the shared
  food cache; AdMob + Play Billing run automatically at launch; the advertising ID; the optional
  gallery album and its consequence; NO on-device recognition, NO personalization, NO trial (owner
  2026-09-06 — "requires Gramwise Pro", "no free Advanced-AI allowance", never a trial length).
  Keep those phrases when editing; the test names each one.
-->

## The short version {#summary}

Gramwise has no account or login. Your food diary, profile, weight history, Health Connect data and meal-photo library stay on your phone unless you deliberately share a backup or use an Advanced AI action. The core tracker works without a network: the diary, the bundled food search, describing a meal in words, saved foods and manual entry. Gramwise runs one recognition service: an Advanced meal scan sends the whole meal photo and any optional hint you type or dictate, a label scan sends the label photo, and Advanced Describe sends the words you typed or dictated, never the audio. The service retains none of those submissions and no diary; it keeps shared food-and-nutrition facts and pseudonymous operational records for quotas, subscription verification and replay protection. There is no on-device recognition, so a photo scan always sends the photo and cannot run without a connection. Advanced AI requires the paid Pro subscription; there is no free Advanced-AI allowance and no trial. Google Play Billing checks your subscription when the app starts, and for Free users only, Google's consent and AdMob SDKs may start after that check.

## Who is responsible {#controller}

The controller of the personal data described in this policy is the developer of Gramwise, registered in Poland and identified on the app's Google Play listing. There is no data protection officer. Privacy questions and requests: hollownett@gmail.com. Because Gramwise has no account, most of your data never reaches us at all; where this policy says "we process", it refers to the recognition service we operate.

## What stays on your device {#on-device}

Your profile (age, height, sex, activity level, goals and targets), your food diary and meal notes, your weight and body-measurement history, your saved foods and templates, the meal photos you attach, and any data imported from Health Connect are stored only in the app's private storage on your phone. The one exception you control is the optional gallery album described under "Photos, meal scans and label scans". Food and nutrition values come from a read-only database bundled inside the app, so a food lookup needs no internet. A backup you create is written to a file and handed to your phone's share sheet, where you decide where it goes; it includes photos only if you turn on "Include photos". Gramwise never uploads a backup itself.

## What leaves your device, and why {#network}

Some requests happen automatically. Each time the app starts or returns to the foreground it asks Google Play Billing whether the current Google account has an active Gramwise Pro subscription. For a Free user only, the Google consent and AdMob SDKs can then initialise, read the ads-consent state, show Google's consent form where required, and request the Today banner (see "Advertising and analytics"). A Pro subscriber's app may confirm the current Advanced-AI allowance with the recognition service using the Google Play purchase token. Other requests wait for you. "Search online" sends a search term or barcode number to Open Food Facts. An Advanced AI request sends the meal photo, label photo or meal description you chose to submit, together with your Google Play purchase token and the app's display language (a language tag such as `en` or `ru`, never a location or device identifier); if you added an optional meal hint on the approval screen, the app sends that hint with the photo. The service verifies the token with Google Play, stores a short-lived verdict and hashed quota counters keyed by a one-way hash, and returns a food name, brand where available, an estimated portion, calories and nutrients, all marked unverified for your review. When nutrition for a named branded or chain product is missing, the service may send only that food's name to Google Search for published facts; your image, hint, description and identifiers are not part of that search, and names produced by a scan with a hint are neither searched nor written to the cache. The service keeps a shared cache of food names and nutrition, never linked to a person. Advanced Describe sends the text you type or dictate: words, not a picture, and no audio. When Advanced is selected, finishing voice input automatically sends the complete text shown in the field after Advanced-AI consent; nothing is sent while recognition is active, and if your phone ends recognition without marking the last words final, the last text it displayed is included. Selecting Lite keeps the parse on your phone and sends no description; Lite parses entirely on the phone, reading the bundled database. Turning speech into text is done by your phone's own speech service, the same one your keyboard's voice typing uses; depending on the phone and its settings that service may process the audio on its provider's servers, and Gramwise never receives, stores, or logs your audio. To help it hear food words, Gramwise gives it a short fixed list of commonly misheard foods that is the same for everyone and contains nothing from your diary. Aside from an Advanced AI submission you choose and a backup you choose to share, Gramwise does not send your diary, profile, meal-photo library, weight or Health Connect data off the device.

## Photos, meal scans and label scans {#camera}

Photos you take or pick are saved in the app's private storage so they can appear next to your diary entries. Naming the food in a photo needs the recognition service: there is no on-device recognition, nothing is sent unless you start a scan, and with no connection a photo scan cannot run at all; nothing is queued or sent later. Advanced AI is off until you turn it on in Settings → AI & recognition, and a scan also needs the Pro subscription. When you tap Scan, your whole meal photo is sent, uncropped, together with any optional meal hint you typed or dictated on the approval screen, so the AI can find the foods in it. It sees whatever you photographed, including the plate, the table and anything else in frame; point the camera at your meal, not at anything you would rather not send. You can dictate the hint with the mic beside it: your phone's own speech service turns your voice into text and Gramwise never receives, stores or logs the audio; only the words shown in the field are sent, and only when you tap Scan. Drawing a box is optional and serves to correct the result or request a more precise portion: if you draw one, the app sends that bounding box plus a second, wider rectangle around it so the AI can see scale cues, and a rectangle can include neighbouring food and background. Portions and nutrition from a meal photo are AI estimates and can be wrong; the app asks you to check or correct them before logging. If a kitchen scale's display is in the picture, the AI reads the grams straight off it, so the portion is a measurement rather than an estimate; there is nothing to switch on, a photo without a scale simply comes back without a reading, and if the food sits in a bowl on the scale the app says so because the reading may include the bowl's weight unless you tared it. A nutrition-facts label is a second photo mode: the label photo is sent to the same service to read the nutrition facts and transcribe the product name, serving size, calories and nutrients printed on it; transcription can be wrong, so you check it before logging. Both modes need a connection, count against the Pro allowance stated in the app, and there is no free Advanced-AI allowance. Each Advanced request carries your Google Play purchase token, which the service verifies with Google Play; the same token proves an active paid subscription. Gramwise does not send a Play Integrity token or hashed Android ID and keeps no device ledger. The service retains no submitted image, meal hint, description or diary; it retains only the shared food cache and the pseudonymous operational records described above. Photos leave your phone in one other way that you control: Settings → Data & backup → "Save meal photos to Gramwise" copies your meal photos into a Gramwise album in your phone's gallery. It is OFF unless you turn it on, Android asks for permission first, and nothing is sent off your phone by it; but a photo in your gallery is visible to other apps you have given photo access, and a photo-backup service such as Google Photos may upload it under your own account settings. Turning the switch off stops new copies; photos already in the gallery stay there for you to keep or delete.

## Health Connect {#health-connect}

If you connect Android Health Connect, Gramwise reads the weight, step and exercise-session data your other apps have stored there; sessions are reduced on your phone to a daily workout count and duration, and no routes, heart rate, distance or workout calories are requested. Access is read-only and stays on your device: nothing is written back and nothing is transmitted. Each permission is optional, you can revoke it in Health Connect at any time, and you can remove imported data from Gramwise without deleting your manual entries.

## Advertising and analytics {#analytics}

Gramwise uses no analytics, attribution or crash-reporting SDK; local diagnostic counts stay on your phone and exclude images, diary entries and personal details. For Free users, Google AdMob can read the advertising ID, IP address and general device information to serve, cap and measure ads and, with your consent, personalise them. One banner can appear on Today and nowhere else. Where Google requires it, its consent form appears before personalised ads, and Gramwise Settings offers Google's privacy-options form when the SDK reports that it is required. Pro subscribers do not initialise the AdMob or consent SDK. Gramwise does not send your diary, profile, photos, weight or Health Connect data to Google or to any advertiser; Google's handling of AdMob and Play Billing data follows Google's privacy policy.

## Legal bases {#legal-basis}

Where the GDPR applies, we rely on: performance of the contract (Art. 6(1)(b)) to verify your subscription and to return the scan or description result you requested; your consent (Art. 6(1)(a)) for each Advanced AI submission, which you give by turning Advanced AI on and starting a scan or Advanced action and can withdraw at any time in Settings, and for personalised advertising, which Google's consent form collects; your explicit consent (Art. 9(2)(a)) to the extent a food photo, hint or description you choose to submit reveals information about your health; and our legitimate interests (Art. 6(1)(f)) in preventing abuse of the recognition service, enforcing allowances, replay protection and keeping the service secure. Google Play Billing and AdMob process data as independent controllers under Google's terms.

## Recipients and international transfers {#recipients}

We share data only as needed to provide the features you use. Google receives your purchase token for subscription verification (Play Billing), your advertising ID and device information if you are a Free user (AdMob), and, through our recognition service, the photo, hint or description you submit for Advanced AI (Google's Gemini models through Google Cloud Vertex AI) and, where nutrition is missing, a bare food name (Google Search). Cloudflare hosts the recognition service, its shared food cache and its pseudonymous operational records. Open Food Facts receives the search term or barcode of an online lookup you tap. Your phone's speech provider receives your dictation under your phone's settings, and a backup goes wherever you send it. These providers may process data outside the European Economic Area, including in the United States; such transfers rely on the transfer mechanisms in each provider's data-processing terms, which for our providers are the European Commission's standard contractual clauses and, where the provider is certified, the EU-US Data Privacy Framework. We do not sell personal data and we use no data broker.

## Retention {#retention}

Data on your phone stays there until you delete entries, clear the app's storage or uninstall. The recognition service retains no submitted photos, hints, descriptions or diary content; the pseudonymous records expire automatically: a subscription-verdict record is treated as fresh for 15 minutes and kept for at most 24 hours, a denial for 60 seconds, daily allowance counters for 48 hours, weekly counters and replay markers for 9 days, and the shared food cache for 90 days from last use; none of them is linked to a person. Google retains data it collects through AdMob and Play Billing under Google's policy; you can reset the advertising ID in Android settings.

## Security {#security}

Your on-device data lives in the app's private storage, which other apps cannot read; every off-device request uses HTTPS; the recognition service identifies you only by a one-way hash of your purchase token and stores no account. No method of transmission or storage is completely secure, and a backup you export is yours to protect wherever you keep it.

## Your rights {#rights}

Where the GDPR applies, you have the rights of access, rectification, erasure, restriction, data portability and objection, the right to withdraw consent at any time without affecting earlier processing, and the right to lodge a complaint with a supervisory authority, in Poland the President of the Personal Data Protection Office (UODO). Because your personal data stays on your phone, you exercise most of these rights directly in the app: edit or delete any entry, export a backup from Settings → Data & backup, turn Advanced AI or Health Connect off, and uninstall to erase everything. The recognition service holds only pseudonymous records that we cannot link to you, so we may be unable to identify records as yours; write to the address above and we will explain what we can and cannot do. Your rights over data held by Google are exercised with Google.

## Children {#children}

Gramwise is intended for adults: the Terms of Use require users to be 18 or older, and the app enforces this at the date-of-birth entry. It is not directed at children and does not knowingly collect data from them; ads are requested as not child-directed with a general-audience content rating.

## What is live now {#future}

Advertising and the Pro subscription are live: a Free user may see the Today banner, and Google Play processes the Pro subscription. The recognition service described above is live, and an Advanced meal scan sends the whole meal photo. Advanced AI is opt-in and requires Pro; there is no trial, and any introductory offer would be Google Play's to show and to decide. Gramwise will not begin sending diary, profile or Health Connect data off the phone without updating this policy and the Play Store Data safety declaration first.

## Changes to this policy {#changes}

If this policy changes, the "Last updated" date changes with it; the new version ships with the next app update and is posted at the policy's public URL. Where a change materially affects how your data is used, we will draw attention to it in the app before it takes effect.
