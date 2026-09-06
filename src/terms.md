# Gramwise — Terms of Use

**Last updated: September 6, 2026**

<!--
  Canonical source for the Terms of Use. This ONE markdown file generates the hosted GitHub Pages
  HTML (apps/mobile/dist/legal/terms.html via apps/mobile/scripts/gen-legal.mjs, and the site at
  Hollownett/tallybite-legal). The app stores NO copy of the Terms — no screen, no route, no
  generated data file (owner, 2026-09-06: "only a link to it"); check-release-metadata.mjs fails if
  src/content/terms.ts reappears, and terms.test.ts reads this markdown directly. Edit here,
  re-run the generator, republish the site. Each `##` heading's {#key} is a stable anchor the tests
  rely on — don't rename. Each section body is ONE paragraph.

  Shape (2026-09-06, second pass): modelled on the EU app-store pattern (YAZIO's structure at
  Lifesum's length, ~2,400 words) after the owner found the first pass "too descriptive". Standard
  clause language, no product narrative, no tier-by-tier feature list, no cancellation walkthrough
  — those live in the app and on the Play listing. EU-shaped liability (intent, gross negligence,
  essential duties, injury to life/body/health; product liability untouched) rather than a US cap.
  No arbitration, no DMCA, no export control. The EU ODR platform is NOT referenced: it was
  discontinued on 20 July 2025.

  Load-bearing rules, each pinned by terms.test.ts or check-release-metadata.mjs:
   - Facts must match the Privacy Policy and the code; no dataset names (they live on Credits).
   - "18 or older" in #agreement; "no Gramwise account" and "cache" must appear; "no free
     Advanced-AI allowance" and "requires Gramwise Pro" must appear; NEVER promise a trial (the
     app has none — owner, 2026-09-06; any introductory offer is Google Play's to show).
   - #purchases keeps the Adaptive-plan promise honest: applies on its own, "undo", never more
     than "10% faster" than the chosen pace; no retired 50 kcal / 150 kcal / per-change consent.
   - A photo scan is ALWAYS egress (ADR-0061): "no on-device photo scanning", never "processed on
     your device".
   - Contact goes through the developer details on the Play listing, never an email (owner).
   - Governing law is Poland: the developer is registered in Poland (owner, 2026-09-06).
   - This text is not legal advice; have a lawyer review before relying on it in a dispute.
-->

## Acceptance of these terms {#agreement}

These Terms of Use (the "Terms") are an agreement between you and the developer of Gramwise, identified on the app's Google Play listing ("we", "us"). They govern the Gramwise mobile application and the recognition service it connects to (together, the "App"). By installing or using the App you accept these Terms and the Privacy Policy; if you do not accept them, do not use the App. You must be 18 or older to use Gramwise. The App is intended for your own personal use, not for use on behalf of another person.

## Not medical advice {#not-medical-advice}

Gramwise is not a medical provider and the App is not a medical device. Calorie and nutrient targets, weight projections, the Adaptive plan, reports and every other output are general nutrition information, not medical, dietetic or other professional advice, and they do not diagnose, treat, cure or prevent any condition. Consult a qualified healthcare professional before starting or changing a diet or weight-loss plan, especially if you have a medical condition, take medication, are pregnant or breastfeeding, are underweight, or have a history of disordered eating. If tracking food or weight harms your wellbeing, stop using the App and seek support. Never disregard or delay professional advice because of something in the App.

## Estimates and AI output {#estimates}

Food recognition, portions, nutrition values, calorie targets, energy expenditure and projections are estimates built from generic databases, formulas and, for Advanced AI, a third-party artificial-intelligence model. They are not verified by a person and can be incomplete, out of date or wrong; automated recognition can misidentify a food, misread a label or misjudge a portion. Every recognised food is a proposal that you must review and can edit before it enters your diary, and AI-provided values are marked unverified until you confirm them. Do not rely on the App for decisions about allergies, intolerances, food safety or medication: check the actual packaging or ask a professional.

## Your responsibility {#your-risk}

You decide how to use the App's information and you are responsible for that use; to the extent permitted by law, you use the App at your own risk. In particular you are responsible for choosing a goal, calorie target and eating pattern that are appropriate for your health, for checking each entry before you log it, and for judging whether a plan is safe for you. If you set a daily target below your estimated resting energy or below the intake generally advised without medical supervision, the App says so and still lets you choose; that choice, and its consequences, are yours to discuss with a clinician.

## License {#license}

Subject to these Terms, we grant you a limited, revocable, non-exclusive, personal and non-transferable license to install and use the App on an Android device you own or control, for your own non-commercial use. All other rights are reserved. You may not copy, modify, distribute, sell, rent, sublicense, reverse engineer or decompile the App or its bundled data except where the law or an open license expressly permits, and you may not use the App or its data to train or build a competing product or model.

## Your data and backups {#your-data}

Gramwise has no account or login: your diary, profile, weight history, saved foods and meal photos are stored only on your phone (except the optional gallery copy described in the Privacy Policy), and there is no Gramwise account or server copy of them. You are responsible for keeping backups from Settings → Data & backup; uninstalling the App, clearing its storage, or losing or replacing your phone can permanently delete your data, and we cannot recover it. We are not responsible for loss of or damage to your data except as set out under "Limitation of liability".

## Privacy {#privacy}

The Privacy Policy, available under Settings → Legal & credits and on the App's public policy page, explains what stays on your phone and what leaves it. Advanced AI is opt-in; when you use it, the meal photo, nutrition-label photo or meal description you submit is sent to the recognition service with your Google Play purchase token, and the service keeps a shared cache of food names and nutrition facts plus pseudonymous operational records but no copy of your submissions or diary. The Privacy Policy forms part of these Terms.

## Third-party services {#third-party}

The App relies on services we do not control, each governed by its own terms and privacy policy: Google Play (purchases, renewals, cancellations and refunds), Google AdMob (advertising for free users), Android Health Connect (optional, read-only health data), your phone's speech service (dictation), a public food database (the optional online barcode and product lookup), and a third-party AI model provider used by the recognition service, which may also look up a food's name in a public web search. We are not responsible for the availability, accuracy or conduct of any third-party service, and a change or outage on their side may affect the App without notice. Google is not a party to these Terms.

## Free features and Gramwise Pro {#purchases}

The core tracker is free and needs no account: the diary, the bundled offline food search, describing a meal in words, saved foods and templates, manual entry and the barcode scanner. Advanced AI (meal-photo scan, nutrition-label scan and Advanced Describe) requires Gramwise Pro; there is no free Advanced-AI allowance, and there is no on-device photo scanning, so a scan needs Pro and a network connection and fails without one. Any introductory or trial offer comes from Google Play, not from Gramwise: whether one is available to your account, and its length and price, are determined and shown by Google Play before you subscribe. Gramwise Pro is an optional monthly or annual subscription that unlocks the paid features described in the App and on the Google Play listing at the time of purchase, including a daily allowance of Advanced AI scans per tool; features and allowances may change as set out under "Availability and changes to the App". The Adaptive plan, a Pro feature, adjusts your calorie target on its own no more than every 14 days, announces each change with a one-tap undo, never sets a weekly pace more than 10% faster than the pace you chose, and asks for your approval before any change tied to reaching your goal or to a weight at which a deficit would be unsafe.

## Payment, renewal, cancellation and refunds {#billing}

Purchases are made through Google Play, which shows the price, currency, billing period and any offer terms before you confirm; we never see or store your payment details. A subscription renews automatically at the end of each period, including any introductory period, unless you cancel before it ends. You can cancel at any time in Google Play → Subscriptions (the App links there); after cancelling, Pro remains active until the end of the paid period and is not renewed. Uninstalling the App does not cancel a subscription. Google Play is the seller of record for the subscription. If you are a consumer in the EEA you have a 14-day right of withdrawal from the purchase; Google Play's purchase flow explains how it applies, including that it is lost once you expressly agree to the subscription starting immediately and acknowledge that loss. Refunds, including any withdrawal, are handled by Google Play under Google Play's policies and applicable law; we cannot issue refunds directly. A price change takes effect only from the next billing period after Google Play has notified you and, where required, obtained your consent. Your entitlement is confirmed by Google's servers: if a subscription is reported on hold or paused, Pro features stop until you fix the payment method or resume it; if it is reported expired, Pro ends and a new purchase is needed; during Google's payment-retry grace period Pro keeps working.

## Advertising {#ads}

Free users may see one banner advertisement on the Today screen, served by Google AdMob under Google's policies and, where required, only after you have made a choice in Google's consent form. Gramwise Pro removes advertising. We are not responsible for the content of advertisements or for anything you buy from an advertiser.

## Acceptable use {#fair-use}

You agree not to: use the App's output to give diet, nutrition or medical advice to others, or present it as professional advice; bypass or interfere with Play Billing, the entitlement check, the scan allowance or any other technical limit; access the recognition service other than through the App, or send it automated, bulk or abusive requests; submit a photo or text you have no right to share, that shows other people, or that is unlawful or unrelated to food; or use the App or its data in any way their licenses do not allow. We may suspend access to the recognition service where we reasonably believe it is being abused; where practicable we will tell you why and how to restore access, and a suspension that is not your fault does not deprive you of a period you have paid for.

## Intellectual property and open licenses {#open-data}

The App, including its name, logo, design, code and original content, is owned by the developer and protected by intellectual-property law. The App's nutrition database, fonts and software libraries incorporate open data and open-source components under their own licenses, listed under Settings → Legal & credits; for that material those licenses prevail over these Terms. Your diary entries, photos and notes remain yours; because the recognition service does not retain your submissions, we need no license to them beyond the processing required to return a result. If you send us feedback or suggestions, we may use them without obligation or attribution.

## Availability and changes to the App {#availability}

We aim to keep the App and the recognition service available but do not guarantee uninterrupted or error-free operation. Advanced AI depends on a network connection, Google Play and third-party providers and may be slow, rate-limited or temporarily unavailable. We may modify the App and the recognition service beyond what is needed to keep them conforming, for a valid reason such as a change in a third-party service or model we depend on, a security or legal requirement, or a feature improvement; a modification is made at no extra cost to you and, where it negatively affects your use of a paid feature more than insignificantly, we will tell you in advance in the App or through Google Play, and you may terminate the subscription free of charge within 30 days of the notice, or of the modification if later, through Google Play. We may also discontinue the App or the recognition service, in which case a subscription is not renewed and any part of a paid period not delivered is refunded through Google Play. Updates may be required to keep using the App.

## Termination {#termination}

You may stop using the App at any time by uninstalling it, after exporting any backup you want to keep; this does not by itself cancel a Google Play subscription. We may suspend or terminate your access to the recognition service or to Gramwise Pro if you materially breach these Terms or abuse the service, or if Google Play reports that your subscription is no longer valid. Sections that by their nature should survive, including "Estimates and AI output", "Disclaimer of warranties", "Limitation of liability", "Intellectual property and open licenses" and "Governing law and disputes", continue to apply after termination.

## Disclaimer of warranties {#as-is}

As a consumer you have statutory rights to a conforming digital service, and nothing in this section limits them. Beyond those rights, and to the maximum extent permitted by applicable law, we give no additional warranties: the App and the recognition service are provided "as is" and "as available", and we do not warrant that the App will meet your goals, that any estimate or plan will be accurate or produce any result, or that the App will be secure, uninterrupted or error-free.

## Limitation of liability {#liability}

To the maximum extent permitted by applicable law, we are liable only for damage caused intentionally or by gross negligence, for injury to life, body or health, under mandatory product-liability law, and for breach of an essential contractual obligation (one whose performance makes proper use of the App possible at all), in which last case our liability is limited to the foreseeable damage typical for this kind of contract. Subject to that, we are not liable for indirect or consequential loss, loss of data, loss of profits, or any health outcome resulting from a target, plan, estimate or other output you chose to follow. Nothing in these Terms excludes or limits liability that cannot be excluded or limited by law, and nothing limits any mandatory consumer right.

## Indemnification {#indemnity}

To the extent permitted by law, you will compensate us for claims, losses and reasonable costs arising from your unlawful use of the App or the recognition service, or from your use of the App's output to advise or treat other people.

## Governing law and disputes {#governing-law}

These Terms are governed by the laws of Poland. If you are a consumer, you also keep the protection of the mandatory consumer-law provisions of the country where you live, and you may bring proceedings in the courts of that country as well as in Poland; a consumer may also use the out-of-court dispute-resolution bodies available in their country. Before starting any formal proceeding, please contact us through the developer contact details on the App's Google Play listing so we can try to resolve the matter informally.

## General {#general}

These Terms, the Privacy Policy and the open licenses referenced under Legal & credits are the entire agreement between you and us regarding the App. If any provision is unenforceable, the remainder stays in force. Our failure to enforce a provision is not a waiver. You may not assign these Terms; we may assign them to a successor who takes over the App. These Terms are provided in English. Where we publish a translation and it conflicts with the English text, the English text governs, without prejudice to your mandatory rights in your own language.

## Changes to these terms {#changes}

We may update these Terms for a valid reason, for example when the App gains or loses a feature, when a third-party service we depend on changes, or when the law changes; the updated Terms are posted on the App's public terms page with a new "Last updated" date. For a change that materially affects a paid feature we will give notice in the App or through Google Play before it takes effect. A change never applies retroactively to a period you have already paid for. If you do not agree to a change, stop using the App and cancel any subscription in Google Play before the next renewal.

## Contact {#contact}

For questions about these Terms or the App, use the developer contact details published on the Gramwise page in the Google Play Store. For payment, refund or subscription questions, contact Google Play support, which processes every purchase.
