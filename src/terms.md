# Gramwise — Terms of Use

**Last updated: September 6, 2026**

<!--
  Canonical source for the Terms of Use. This ONE markdown file generates the hosted GitHub Pages
  HTML and apps/mobile/src/content/terms.ts, via apps/mobile/scripts/gen-legal.mjs. The app does
  NOT bundle the Terms any more (owner, 2026-09-06): it only links to the hosted page, so the
  generated .ts is parity-check + test data, not shipped copy. Edit here, re-run the generator
  (`node scripts/gen-legal.mjs` from apps/mobile), commit both. Each `##` heading's {#key} is the stable section key the app,
  the HTML anchors and the tests rely on — don't rename them. Each section body must be ONE
  paragraph: the generator joins paragraphs with a space and the app renders one block per section.

  Shape (2026-09-06 rewrite): a standard, production-grade Terms of Use in the order a reader
  expects — acceptance and age, the two health disclaimers up front (terms.test.ts pins
  #not-medical-advice inside the first three sections), assumption of risk, license, data and
  data loss, privacy, third parties, free/trial/Pro, billing, ads, acceptable use, IP and open
  licenses, availability, termination, warranties, liability, indemnity, governing law, general,
  changes, contact. Plain English, second person, no numbering (the app shows titles as headings).

  Load-bearing accuracy rules, each pinned by a test or by check-release-metadata.mjs:
   - Facts must match the Privacy Policy and the code, never promise more privacy or more
     accuracy than the app has. No dataset names here (they live on About & credits).
   - "18 or older" stays in #agreement; "no Gramwise account" and the word "cache" must appear;
     "no free Advanced-AI allowance" and "requires Gramwise Pro" must appear. NEVER promise a trial:
     the app has no trial period (owner, 2026-09-06) — any introductory offer is Google Play's to
     show, so the Terms name none (terms.test.ts pins "3-day" / "free trial" as forbidden).
   - Contact goes through the developer details on the Play listing, never an email address
     (owner, 2026-09-06). The generator then extracts no contact for the hosted footer — intended.
   - #purchases must describe
     Adaptive as self-applying with an undo and the "10% faster" pace bound, and must not
     re-promise the retired 50 kcal step / 150 kcal clamp or per-change consent.
   - A photo scan is ALWAYS network egress (ADR-0061): say "no on-device photo scanning", never
     "processed on your device".
   - "Up to 20 scans per day per tool" is metered in cost units (a scan with tagged boxes counts
     for more) — keep the "up to" and the caveat; see src/content/proFeatures.ts.
   - Governing law names Poland: the developer is registered in Poland (owner, 2026-09-06).
   - This text is not legal advice; have a lawyer review before relying on it in a dispute.
-->

## Acceptance of these terms {#agreement}

These Terms of Use (the "Terms") are a legal agreement between you and the developer of Gramwise, as identified on the app's Google Play listing ("we", "us", or the "developer"). They govern your use of the Gramwise mobile application, its bundled content, and the recognition service it connects to (together, the "App"). By installing, opening, or using the App you confirm that you have read, understood, and accept these Terms and the Privacy Policy. If you do not accept them, do not use the App. You must be 18 or older to use Gramwise; the App checks this when you enter your date of birth. The App is intended for adults making their own everyday food choices, not for use on behalf of another person.

## Not medical advice {#not-medical-advice}

Gramwise is a general wellness and nutrition-awareness tool. It is not a medical device, and nothing in the App — including calorie and macronutrient targets, weight projections, the Adaptive plan, the weekly report, or any other output — is medical, dietetic, nutritional, or other professional advice. The App does not diagnose, treat, cure, or prevent any disease or condition, and it does not know your medical history. Always consult a qualified healthcare professional before starting or changing a diet or weight-loss plan, and in particular if you have a medical condition, take medication (including weight-loss medication), are pregnant or breastfeeding, are underweight, or have a history of disordered eating. If tracking food, calories, or weight harms your wellbeing, stop using the App and seek support. Never delay or disregard professional advice because of something you read in the App.

## Estimates, not measurements {#estimates}

Food recognition, portion sizes, nutrition values, calorie targets, energy-expenditure figures, weight projections, and every other number the App shows are estimates. They come from generic databases, formulas, and — for Advanced AI — a third-party artificial-intelligence model that can misidentify a food, misread a label, or guess a portion wrongly. Generated results can be inaccurate, incomplete, out of date, or simply wrong, and no person verifies them. That is why every recognised food is a proposal you must review and can edit before it enters your diary, and why the App marks AI-provided values as unverified until you confirm them. Never rely on the App for decisions about allergies, intolerances, ingredient safety, food safety, or medication: check the actual packaging, ask the kitchen, or consult a professional.

## Your responsibility and assumption of risk {#your-risk}

You decide how to use the information the App gives you, and you do so at your own risk. You are solely responsible for choosing a goal, a calorie target, and an eating pattern that are appropriate for your health, for checking every entry before you log it, and for judging whether a plan is safe for you. You may set your own daily target, and the App will use whatever you enter: if you set it below your estimated resting energy or below the intake generally advised without medical supervision, the App says so but still lets you choose, and that choice — and the consequences of eating that little — are yours to discuss with a clinician first. Changes in weight, body composition, energy, or health that result from following any target, plan, or suggestion in the App are your responsibility, not the developer's.

## License to use the App {#license}

Subject to these Terms, we grant you a personal, limited, non-exclusive, non-transferable, and revocable license to install and use the App on an Android device that you own or control, for your own non-commercial use. All rights not expressly granted remain with the developer and its licensors. You may not sell, rent, lease, sublicense, or redistribute the App. The App is licensed to you, not sold.

## Your data, backups, and data loss {#your-data}

Gramwise has no account or login. Your diary, profile, weight history, saved foods, templates, and attached meal photos are stored only on your phone, and there is no Gramwise account or server copy of them. That means you are responsible for keeping backups: uninstalling the App, clearing its storage, losing or replacing your phone, or a failure of the device can permanently delete your data, and we cannot recover it. Export a backup from Settings → Data & backup whenever your diary matters to you, keep it somewhere safe, and check that it restores. To the extent the law allows, the developer is not responsible for any loss of, damage to, or inability to access your data, however it occurs. Optional integrations such as Android Health Connect or a photo album in your phone's gallery stay off until you turn them on and are governed by your phone's permissions.

## Privacy {#privacy}

The Gramwise Privacy Policy, available in the App under Settings → Legal & credits and at the App's public policy page, describes exactly what stays on your phone and what leaves it: nothing leaves without a network action you choose or that the policy discloses. Advanced AI is opt-in: nothing is sent until you turn it on in Settings and start a scan or an Advanced action. In short, an Advanced AI action sends your whole meal photo (with any optional hint you type or dictate, and any correction rectangles you draw, each with a wider surrounding rectangle), your nutrition-label photo, or the words you typed or dictated, together with your Google Play purchase token and the App's display language; the recognition service does not retain those submissions or any diary, but it keeps a shared cache of food names and nutrition plus pseudonymous records needed for quotas, subscription checks, and replay protection. The Privacy Policy forms part of these Terms, and by using the App you accept it.

## Third-party services {#third-party}

The App relies on services that the developer does not control, and your use of them is subject to their own terms and privacy policies. Google Play processes every purchase, offer, renewal, cancellation, and refund. Google AdMob may serve one banner to free users. Android Health Connect, if you connect it, supplies read-only weight, step, and exercise data. Your phone's own speech service turns dictation into text. The optional online barcode and product lookup queries a public food database. The recognition service behind Advanced AI is operated by the developer and uses a third-party AI model provider, and it may look up a food's name in a public web search to find published nutrition facts. We are not responsible for the availability, accuracy, or conduct of any third-party service, and a change or outage on their side may affect features of the App without notice.

## Free features and Gramwise Pro {#purchases}

The core tracker is free and needs no account: your whole diary, the bundled offline food search, describing a meal in words, saved foods and templates, manual entry, and the barcode scanner. Advanced AI — the meal-photo scan, the nutrition-label scan, and Advanced Describe — requires Gramwise Pro; there is no free Advanced-AI allowance. Any introductory or trial offer comes from Google Play, not from Gramwise: whether one is available to your account, and its length and price, are determined and displayed by Google Play before you subscribe. There is no on-device photo scanning: every meal-photo and nutrition-label scan is Advanced AI, so it needs Pro and a network connection, and without one it fails rather than answering from the phone. Gramwise Pro is an optional monthly or annual subscription that unlocks the Adaptive plan, the weekly report, deeper analytics, spreadsheet export, automatic Health Connect sync, an ad-free experience, and up to 20 successful Advanced AI scans per day for each of the three tools (a scan with tagged boxes counts as more than one). The Adaptive plan starts from the same formula target as Auto and then keeps it in step with your complete food logs and weight trend, adjusting no more than every 14 days; an adjustment applies on its own, is announced on Today with a one-tap undo, and never sets a weekly pace more than 10% faster than the pace you chose, while reaching your goal, or a weight at which a deficit would be unsafe, still waits for your approval. Features and allowances are those described in the App at the time of purchase and may change as set out under "Availability and changes to the App".

## Payment, renewal, cancellation, and refunds {#billing}

All purchases are made through Google Play, and the developer never sees or stores your payment details. The price, currency, billing period, and the terms of any introductory offer are shown by Google Play before you confirm. Unless you cancel before the end of the current period — including any introductory period — the subscription renews automatically at the price and period shown in Google Play, and Google Play charges your payment method. You can cancel at any time from the link in the App or in Google Play → Subscriptions; after cancelling, Pro normally remains active until the end of the period already paid for and is not renewed. Uninstalling the App does not cancel a subscription. Because Google Play processes the payment, refunds — including any statutory right of withdrawal — are requested from and decided by Google Play under Google Play's terms and applicable law; we cannot issue refunds directly. Your Pro entitlement is confirmed by Google's servers. If Google reports the subscription as on hold or paused, Pro features stop until you fix the payment method or resume it; if Google reports it as expired, Pro ends and a new purchase is needed. During Google's payment-retry grace period Pro keeps working. Prices may change; Google Play will notify you before a price change takes effect and, where required, ask for your consent.

## Advertising {#ads}

Free users may see a single banner advertisement on the Today screen, served by Google AdMob under Google's policies and, where required, only after you have made a choice in Google's consent form; where the advertising SDK offers it, you can change that choice from Settings. Ads never appear in the camera, Review Meal, or History. Gramwise Pro removes ads and does not initialise the advertising SDK. We are not responsible for the content of advertisements or for products and services advertised, and any dealing with an advertiser is between you and that advertiser.

## Acceptable use {#fair-use}

Use the App only for yourself, in accordance with the law and these Terms. You must not: use the App's output to give diet, nutrition, or medical advice to other people, or present it as professional advice; copy, modify, decompile, reverse engineer, or create derivative works of the App or its bundled data, except where the law or an open license expressly permits; bypass or interfere with Play Billing, the entitlement check, the scan allowance, or any other technical limit; access the recognition service by any means other than the App, or submit automated, bulk, or abusive requests to it; submit a photo or text that you have no right to share, that shows other people, or that is unlawful or unrelated to food; or use the App or its data in any way their licenses do not allow. We may suspend access to the recognition service, without notice, where we reasonably believe it is being abused.

## Intellectual property and open licenses {#open-data}

The App, including its name, logo, design, code, and original content, is owned by the developer and protected by copyright, trademark, and other laws. The App's nutrition database, fonts, and software libraries build on open data and open-source components, each under its own license; they are listed with their licenses under Settings → Legal & credits, and for that material those licenses travel with the data and code and take precedence over these Terms. Your own diary entries, photos, and notes remain yours: we claim no ownership of them, and because the recognition service does not retain them, we need no license to them beyond the processing required to return a result. If you send us feedback or suggestions, you agree that we may use them freely, without payment or attribution.

## Availability and changes to the App {#availability}

We work to keep the App and the recognition service available and accurate, but they are provided without any guarantee of uninterrupted or error-free operation. Advanced AI depends on a network connection, on Google Play, and on third-party providers, and may be slower, rate-limited, or temporarily unavailable. We may add, change, limit, or remove features, adjust allowances, change the underlying AI model, or discontinue the App or the recognition service at any time. Where a change materially reduces a paid feature during a period you have already paid for, your remedies are those provided by Google Play and applicable consumer law. Updates may be required to keep using the App or Advanced AI.

## Suspension and termination {#termination}

You may stop using the App at any time by uninstalling it, after exporting any backup you want to keep; this does not by itself cancel a Google Play subscription. We may suspend or terminate your access to the recognition service or to Gramwise Pro if you materially breach these Terms, abuse the service, or if Google Play reports that your subscription is no longer valid. Sections that by their nature should survive — including the disclaimers, the limitation of liability, intellectual property, governing law, and the general terms — continue to apply after termination.

## Disclaimer of warranties {#as-is}

To the maximum extent permitted by applicable law, the App and the recognition service are provided "as is" and "as available", without warranties of any kind, whether express, implied, or statutory, including implied warranties of merchantability, fitness for a particular purpose, accuracy, and non-infringement. We do not warrant that the App will meet your requirements or goals, that any estimate or plan will be accurate or produce any particular result, that the App will be secure, uninterrupted, or error-free, or that defects will be corrected. Some jurisdictions do not allow the exclusion of certain warranties, so some of these exclusions may not apply to you; in that case they apply to the fullest extent the law allows, and nothing in these Terms limits the statutory rights you have as a consumer.

## Limitation of liability {#liability}

To the maximum extent permitted by applicable law, the developer is not liable for any indirect, incidental, special, consequential, or punitive damages, for any loss of data, loss of profits, or loss of goodwill, or for any adverse health outcome resulting from a target, plan, estimate, or other output you chose to follow, arising out of or related to your use of or inability to use the App, your reliance on its output, or any third-party service, even if we have been advised of the possibility of such damages. To the same extent, our total aggregate liability for all claims relating to the App will not exceed the amount you paid for Gramwise Pro through Google Play in the twelve months before the event giving rise to the claim. Nothing in these Terms excludes or limits liability that cannot be excluded or limited by law, including liability for death or personal injury caused by negligence, for fraud, or for intentional or grossly negligent conduct, and nothing in them limits any mandatory consumer right.

## Indemnification {#indemnity}

To the extent permitted by law, you agree to defend, indemnify, and hold the developer harmless from any claim, loss, liability, or expense (including reasonable legal fees) that arises from your breach of these Terms, your unlawful use of the App or the recognition service, or your use of the App's output to advise or treat other people.

## Governing law and disputes {#governing-law}

These Terms are governed by the laws of Poland, without regard to its conflict-of-law rules, and disputes are subject to the jurisdiction of the Polish courts. If you are a consumer living in the European Union, the European Economic Area, or another country whose law gives you mandatory consumer protections, nothing in this section deprives you of those protections or of the right to bring proceedings in the courts of your own country. Before starting any formal proceeding, please contact us through the developer contact details on the App's Google Play listing so we can try to resolve the matter informally.

## General terms {#general}

These Terms, together with the Privacy Policy and the open-data and open-source licenses referenced under Legal & credits, are the entire agreement between you and the developer regarding the App and replace any earlier terms. If any provision is found unenforceable, it will be enforced to the extent permitted and the rest of the Terms remain in force. Our failure to enforce a provision is not a waiver of it. You may not assign these Terms; we may assign them to a successor who takes over the App. These Terms are written in English; the App's interface may be shown in other languages, but the English version of the Terms is the binding one. Google Play and Google are not parties to these Terms and have no obligations under them, except as stated in Google Play's own terms.

## Changes to these terms {#changes}

We may update these Terms from time to time — for example when the App gains or loses a feature, or when the law changes. The updated Terms ship inside the App with an update and are posted at the App's public terms page; the date at the top of these Terms tells you when they last changed. Continuing to use the App after an update means you accept the updated Terms. If you do not agree with a change, stop using the App and cancel any subscription in Google Play before the next renewal.

## Contact {#contact}

For questions about these Terms or the App, use the developer contact details published on the Gramwise page in the Google Play Store. For payment, refund, or subscription questions, contact Google Play support, because Google Play processes every purchase.
