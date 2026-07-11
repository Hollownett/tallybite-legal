# TallyBite — Privacy Policy

**Last updated: July 11, 2026**

## The short version

TallyBite keeps your personal data on your device. There is no account, no login, and no TallyBite server: your food diary, your profile, the meal photos you attach and your weight history never leave your phone, and the app works fully offline. Two Google services do run automatically whenever you open the app — Google Play Billing, which checks whether your Google account owns a TallyBite Pro subscription, and Google AdMob, which uses your device's advertising ID and shows banner ads to users who are not subscribed. Everything else that touches the internet — online food lookups, AI-model downloads, backups — waits for you to tap it. Questions: hollownett@gmail.com.

## What stays on your device (and never leaves)

Your profile (age, height, sex, activity level, goals and targets), your food diary including meal notes, your weight and body-measurement history, your saved foods, and the meal photos you attach are all stored only in the app's private storage on your phone. On-device personalization runs locally over your own data: when a photo scan is torn between two similar foods, the foods you log most often are ranked first. Food and nutrition values come from a read-only database bundled inside the app — looking up a food needs no internet.

## When information leaves your phone

Some requests happen automatically, with no tap from you. (1) Each time the app starts, and each time you return to it, it asks Google Play Billing whether your Google account owns a TallyBite Pro subscription. (2) Each time the app starts, the Google AdMob SDK initialises: it reads your ads-consent status, may show Google's consent form, and requests banner ads for users who are not subscribed — see “Advertising and analytics” below. (3) If an AI-model download you started earlier was interrupted, it resumes on its own the next time the app opens. Everything else waits for you: tapping “Search online” sends that search term or barcode number — and nothing else — to the Open Food Facts public database to fetch nutrition facts; choosing to install an optional AI model downloads the model files to your device, sending none of your data; and creating a backup writes a single file and hands it to your phone's share sheet, where you decide where it goes, with the app itself never uploading it. No request TallyBite makes carries your diary, your profile, your meal photos, your weight, or your health data.

There is one more thing you can choose to send from the “Describe a meal” screen, and it is words, not a picture. If you turn on **Advanced AI** and use it there, the meal description you type — or speak, in which case your phone turns your voice into text on the device and sends **only that text** — is sent to the same TallyBite recognition service described under “Camera and photos”, which reads it and returns the foods it names, each with a typical serving size to get you started. **No photo and no audio ever leave your phone on this path: only the text.** Those servings are an **estimate** the app marks unverified for you to check before you log. Like every cloud feature it is opt-in, and for a free user each description counts against the same small shared allowance of **3 free Advanced AI scans per week** (Pro removes the cap); the Lite mode on the same screen parses your words entirely on your phone and sends nothing. The server stores neither your description nor the foods it returns.

## Camera and photos

The camera takes pictures of food and scans product barcodes. Photos you take or pick are processed on your device for food recognition and saved in the app's private storage so they can appear next to your diary entries.

Photos are not uploaded, with one exception that you control. If you turn on **Advanced AI recognition** (Settings → AI & recognition) — opt-in for everyone, not only Pro subscribers — you draw a rectangle around your meal, or several rectangles around individual foods, and tap Recognize. Every cropped rectangle you draw is sent together in one request, so a larger AI model can name every food in each one. Each rectangle is a box, not a cut-out: it can include several foods and some of the plate or table. For a meal photo the reply is **names only** — a scanned meal's calories and portion come from your phone's database, never from your picture. Scanning a nutrition label, described below, is the one exception.

Sent with each request is proof of who's asking: a random **ID for this app install**, so the server can count your **3 free Advanced AI scans per week** — a single weekly allowance shared across this meal scan, the label scan and the Describe feature — or, if you are Pro, your **Google Play purchase token** instead, which removes that weekly cap entirely. This install ID is not your name or your account, and it carries no link to any identifier used elsewhere in the app; it is cleared the moment you clear the app's data, uninstall, or reinstall.

There is a second thing the server can be asked, and it is not a photo. If the food the cloud just named is one the app's built-in nutrition database has never heard of, the app sends **the name of that food, on its own, with no image and no part of your photo**, and the server replies with a typical serving size and its calories. Those numbers are an **estimate**: the app marks them as unverified and asks you to check them before you rely on them. Ordinary foods never trigger this, because their nutrition is already on your phone.

There is one more thing you can point the camera at: a product's **nutrition-facts label**. If you choose to scan a nutrition label (an option on the barcode screen), a photo of that label is sent to the same server so it can read the nutrition facts printed on it, and the product name, serving size, calories and nutrients from the label come back for you to check. This is the one place where calories are read from a picture you send; everywhere else a scanned food's portion and calories come from your phone's database, not your photo. What comes back is still an **estimate** — a label can be misread — so the app marks it unverified and asks you to confirm it before you log it. Reading a label is opt-in like every cloud feature and counts against the same shared allowance of **3 free Advanced AI scans per week** (Pro removes the cap); it needs a connection, so with no internet the label is not read and you enter the food yourself.

The server stores neither the image, nor the names, nor the numbers. Nothing is sent when you scan offline: your phone tries to name the food itself first, and a photo it can name never leaves your device. Nothing is sent until you turn Advanced AI recognition on, and you can turn it off again at any time. Your diary, weight, profile and photo library are never sent.

The only other way a photo leaves your phone is if you turn on the optional “Include photos” setting and then share a backup yourself.

## Health Connect (optional)

If you connect Android Health Connect, TallyBite can read the weight and step data your other health apps have stored there, to show trends and improve calorie estimates. This is read-only and happens on your device — nothing is written back and nothing is transmitted. You can revoke this access at any time in your phone's settings.

## Advertising and analytics

TallyBite uses no analytics, attribution or crash-reporting SDK: the only usage data it keeps is local, on-device diagnostic counts (for example, how often a recognition step ran), which stay on your phone and never include your images, food entries, or personal details. It does use one advertising SDK, Google AdMob. AdMob starts when the app opens and can read your device's advertising ID together with your IP address and general device information; Google uses these to serve, cap and measure ads, and — only where you have given consent — to personalise them. Banner ads appear on the Today and History lists only, never during camera capture or a scan, and not at all for TallyBite Pro subscribers; the AdMob SDK still initialises on every launch regardless. You may also choose to watch a rewarded video ad to unlock an extra Advanced AI scan (added to the shared weekly allowance): that ad is opt-in — it never appears unless you tap “Watch an ad” — and uses the same AdMob SDK and advertising ID, with the extra scan credited by Google's verified ad-completion callback. In the EEA and the UK, Google's consent form asks your permission before any personalised ads are served. You can reset your advertising ID, or tell Android to stop apps from using it, in your phone's settings under Privacy. TallyBite never sends your diary, profile, photos, weight, or health data to Google, to AdMob, or to any advertiser. What Google does with the data it collects through AdMob and Google Play Billing is governed by Google's own privacy policy.

## Children

TallyBite is intended for adults: the Terms of use require users to be 18 or older, and the app enforces this at the date-of-birth entry. It is not directed at children and does not knowingly collect data from them. Ads are requested as not child-directed, and are limited to a general-audience content rating.

## Data retention and deletion

Your data stays on your device until you delete it: delete captured corrections from Settings, delete individual entries in the app, or remove everything by uninstalling the app or clearing its storage in Android settings. Because TallyBite has no server, we never receive that data and there is nothing for us to delete on our side. Data that Google collects through AdMob or Google Play Billing is held by Google, not by us, and is governed by Google's privacy policy; you can reset your advertising ID in your phone's settings.

## What is live now, and future changes

Advertising and in-app purchases are live in this version: banner ads for users who are not subscribed, and a Pro subscription processed by Google Play Billing. TallyBite runs exactly one server of its own — the recognition service described under “Camera and photos”, which receives the cropped rectangles you draw around your meal, a photo of a nutrition label if you scan one, and the words you type or speak to describe a meal (text only — never any audio) if you use Advanced AI on the Describe screen — whenever you turn Advanced AI on and tap to run it. That is opt-in for every user, not only a Pro subscriber; Pro simply removes the free tier's weekly scan cap. It holds no account, stores nothing, and never sees your diary. No version will begin sending your diary, profile, or health data off your phone without this policy and the Play Store data-safety details being updated before that feature ships.

## Changes to this policy

If this policy changes, the “Last updated” date above changes with it; the new version ships with the next app update and is posted at the policy's public URL once the app is distributed through an app store.
