# Gramwise — Terms of Use

**Last updated: September 8, 2026**

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
   - Governing law is Poland. The owner clarified on 2026-09-08 that the current Play account
     is held as an individual; business identity is pending transfer (see the release review).
   - This text is not legal advice; have a lawyer review before relying on it in a dispute.
-->

## Acceptance of these terms {#agreement}

These Terms of Use (the "Terms") are an agreement between you and the individual developer identified in the developer details on the [Gramwise Google Play listing](https://play.google.com/store/apps/details?id=com.tallybite.app) ("we", "us"). They govern the Gramwise mobile application and the recognition service it connects to (together, the "App"). Please read and save these Terms before using the App. By using the App after these Terms have been made available to you, you agree to them; if you do not agree, do not use the App. The Privacy Policy explains our data handling; accepting these Terms does not itself give consent to optional data processing. You must be 18 or older to use Gramwise. The App is intended for your own personal, non-commercial use.

## Not medical advice {#not-medical-advice}

Gramwise is not a medical provider and the App is not a medical device. Calorie and nutrient targets, weight projections, the Adaptive plan, reports and every other output are general nutrition information, not medical, dietetic or other professional advice, and they do not diagnose, treat, cure or prevent any condition. Consult a qualified healthcare professional before starting or changing a diet or weight-loss plan, especially if you have a medical condition, take medication, are pregnant or breastfeeding, are underweight, or have a history of disordered eating. If tracking food or weight harms your wellbeing, stop using the App and seek support. Never disregard or delay professional advice because of something in the App.

## Estimates and AI output {#estimates}

Food recognition, portions, nutrition values, calorie targets, energy expenditure and projections are estimates built from generic databases, formulas and, for Advanced AI, a third-party artificial-intelligence model. They are not verified by a person and can be incomplete, out of date or wrong; automated recognition can misidentify a food, misread a label or misjudge a portion. Every recognised food is a proposal that you must review and can edit before it enters your diary, and AI-provided values are marked unverified until you confirm them. Do not rely on the App for decisions about allergies, intolerances, food safety or medication: check the actual packaging or ask a professional.

## Your responsibility {#your-risk}

You decide how to use the App's information and you are responsible for that use; to the extent permitted by law, you use the App at your own risk. In particular you are responsible for choosing a goal, calorie target and eating pattern that are appropriate for your health, for checking each entry before you log it, and for judging whether a plan is safe for you. If you set a daily target below your estimated resting energy or below the intake generally advised without medical supervision, the App says so and still lets you choose; that choice, and its consequences, are yours to discuss with a clinician.

## License {#license}

Subject to these Terms, we grant you a non-exclusive, personal and non-transferable license to install and use the App on an Android device you own or control for your own non-commercial use. The license ends only as described under "Termination". All other rights are reserved, subject to applicable law and the open licenses listed under Legal & credits. You may not copy, modify, distribute, sell, rent, sublicense, reverse engineer or decompile our proprietary App or data except where applicable law or an open license permits it. These restrictions do not limit your rights in your own data or in open-source software and open data.

## Your data and backups {#your-data}

Gramwise has no account or login: your diary, profile, weight history, saved foods and meal photos are stored only on your phone (except the optional gallery copy described in the Privacy Policy), and there is no Gramwise account or server copy of them. You are responsible for keeping backups from Settings → Data & backup; uninstalling the App, clearing its storage, or losing or replacing your phone can permanently delete your data, and we cannot recover it. We are not responsible for loss of or damage to your data except as set out under "Limitation of liability".

## Privacy {#privacy}

The [Privacy Policy](https://hollownett.github.io/tallybite-legal/privacy.html), also available under Settings → Legal & credits, explains what stays on your phone, what leaves it, the recipients, retention and your choices and rights. Advanced AI is opt-in; when you use it, the meal photo and optional hint, nutrition-label photo or meal description you submit is sent to the recognition service with your Google Play purchase token and the app's display language. Our Worker keeps a shared cache of food facts and pseudonymous operational records, but does not store your submitted images, hints, descriptions or diary. Provider processing and retention are described in the Privacy Policy. You keep ownership of your data; optional processing requires the separate choices described in that policy.

## Third-party services {#third-party}

The App relies on services we do not control, each governed by its own terms and privacy policy: Google Play (purchases, renewals, cancellations and refunds), Google AdMob (advertising for free users), Android Health Connect (optional, read-only health data), your phone's speech service (dictation), a public food database (the optional online barcode and product lookup), and a third-party AI model provider used by the recognition service, which may also look up a food's name in a public web search. Provider changes or outages may affect the App; our use of third parties does not remove our obligations to you or your statutory remedies. Google is not a party to these Terms.

## Free features and Gramwise Pro {#purchases}

The core tracker is free and needs no account: the diary, the bundled offline food search, describing a meal in words, saved foods and templates, manual entry and the barcode scanner. Advanced AI (meal-photo scan, nutrition-label scan and Advanced Describe) requires Gramwise Pro; there is no free Advanced-AI allowance, and there is no on-device photo scanning, so a scan needs Pro and a network connection and fails without one. Only an offer explicitly shown to you by Google Play at checkout applies; these Terms promise no introductory allowance. Gramwise Pro is an optional monthly or annual subscription that unlocks the paid features described in the App and on the Google Play listing at the time of purchase, including the per-tool daily and weekly Advanced AI limits shown in the App; features and allowances may change as set out under "Availability and changes to the App". The Adaptive plan, a Pro feature, can adjust your calorie target automatically, announces each automatic change with a one-tap undo, and applies a routine change automatically only if its implied weekly pace is no more than 10% faster than the pace you chose; changes outside that guard require approval. It also asks for your approval before any change tied to reaching your goal or to a weight at which a deficit would be unsafe.

## Payment, renewal, cancellation and refunds {#billing}

Purchases are made through Google Play, which shows the price, currency, billing period, taxes and any offer terms before you confirm. Your payment contract and the applicable Google entity are identified by Google Play's terms and your purchase receipt; we do not receive your card or bank details. A subscription renews automatically at the end of each billing period unless you cancel before renewal. You can cancel at any time in [Google Play → Subscriptions](https://play.google.com/store/account/subscriptions) using the Google account that made the purchase; the App also links there. Cancellation normally stops future renewals and leaves Pro active until the end of the paid period; a refund, revocation or immediate termination under applicable law may end access earlier. Uninstalling the App or deleting its data does not cancel a subscription. Cancellation alone does not normally refund the current period, but statutory withdrawal and refund rights remain. Request a refund through [Google Play support](https://support.google.com/googleplay/answer/2479637) or contact us through the developer details on the Play listing; we can assist and process eligible refunds through Google Play. For EEA and UK consumers, withdrawal rights depend on whether the purchase is digital content or a digital service: for a digital service the statutory withdrawal period is generally 14 days from the contract, and merely starting the service does not automatically remove that right; where you expressly request early performance, a lawful proportionate charge may apply. For digital content, the withdrawal right may be lost only after the legally required express consent and acknowledgement before supply. Google Play's checkout and [EEA and UK refund policy](https://support.google.com/googleplay/answer/7659581) explain the applicable purchase conditions. These Terms do not waive withdrawal rights or remedies for a faulty or misdescribed service. Price changes follow Google Play's notice and consent requirements and apply to a future billing period. Google's servers confirm entitlement: a subscription on hold or paused loses paid access until payment is resolved or the subscription resumes; an expired subscription loses paid access; access continues during Google's payment-retry grace period. The free diary remains available after Pro ends.

## Advertising {#ads}

Free users may see one banner advertisement on the Today screen, served by Google AdMob under Google's policies and, where required, only after you have made a choice in Google's consent form. Gramwise Pro removes advertising. An advertisement is not our endorsement; any purchase from an advertiser is a separate transaction. This does not limit responsibilities imposed on us by law.

## Acceptable use {#fair-use}

You agree not to: use the App's output to give diet, nutrition or medical advice to others, or present it as professional advice; bypass or interfere with Play Billing, the entitlement check, the scan allowance or any other technical limit; access the recognition service other than through the App, or send it automated, bulk or abusive requests; submit a photo or text you have no right to share, that shows other people, or that is unlawful or unrelated to food; or use the App or its data in any way their licenses do not allow. We may suspend access to the recognition service where we reasonably believe it is being abused; where practicable we will tell you why and how to restore access, and a suspension that is not your fault does not deprive you of a period you have paid for.

## Intellectual property and open licenses {#open-data}

The App, including its name, logo, design, code and original content, is owned by the developer and protected by intellectual-property law. The App's nutrition database, fonts and software libraries incorporate open data and open-source components under their own licenses, listed under Settings → Legal & credits; for that material those licenses prevail over these Terms. Your diary entries, photos and notes remain yours; because the recognition service does not retain your submissions, we need no license to them beyond the processing required to return a result. If you send us feedback or suggestions, we may use them without obligation or attribution.

## Availability and changes to the App {#availability}

We aim to keep the App and the recognition service available. Advanced AI requires a network connection and working Google Play and provider services; it may be slow, rate-limited or temporarily unavailable. The App requires a compatible Android device and the Android version shown on its Google Play listing; available integrations also depend on your device and permissions. We provide updates, including security updates, required by applicable law to keep the service conforming and inform you when installation is needed. Beyond changes needed to maintain conformity, we may modify the service at no extra cost for a valid reason, such as a security or legal requirement, a necessary provider change or a feature improvement. We will explain such changes clearly. Where a change adversely affects your access or use more than insignificantly, we will give reasonable advance notice on a durable medium that you can retain, describing the change, timing and your rights. Where applicable law provides it, you may terminate free of charge within 30 days of receiving that notice or the change taking place, whichever is later, unless we let you keep the unchanged, conforming service at no extra cost. Contact us through the Play listing to exercise this right and arrange any refund due; simply cancelling renewal is not a substitute for this remedy. If we discontinue a paid service, we will stop future renewals and arrange refunds for the undelivered prepaid period through Google Play. None of this limits your statutory rights.

## Termination {#termination}

You may stop using the App at any time by uninstalling it, after exporting any backup you want to keep; this does not by itself cancel a Google Play subscription. We may restrict the recognition service proportionately for a material breach, abuse, or an immediate security or legal need, and will give a reason and an opportunity to remedy a breach where practicable. Paid access may end or pause according to Google Play's subscription status as described above. Restrictions do not delete your on-device diary or prevent use of the free tracker. Statutory remedies and any refund due remain available. Sections that by their nature should survive, including "Estimates and AI output", "Disclaimer of warranties", "Limitation of liability", "Intellectual property and open licenses" and "Governing law and disputes", continue to apply after termination.

## Disclaimer of warranties {#as-is}

Consumers retain their statutory rights to digital content and services that conform to the contract. If the App or a paid feature is faulty or not as described, contact us through the developer details on the Play listing. Where the law requires, we will bring it into conformity without charge, within a reasonable time and without significant inconvenience; you may also be entitled to a proportionate price reduction, termination and reimbursement if the legal conditions are met. These remedies are independent of any discretionary store refund policy. Beyond mandatory rights, and to the maximum extent permitted by law, we give no additional warranties: the App is provided "as is" and "as available", and we do not promise a particular weight, health outcome or accuracy for every AI estimate.

## Limitation of liability {#liability}

Nothing in these Terms excludes or limits liability that cannot be excluded or limited by law, including mandatory consumer rights and remedies, liability for intentional wrongdoing, gross negligence, death or personal injury, or mandatory product liability. We remain responsible for performing our contractual obligations, including where we use service providers. To the maximum extent permitted by law, we do not accept liability for business losses arising from commercial use of this personal-use App or losses that were not reasonably foreseeable when the contract was made. Health and AI limitations explain the App's intended use; they do not remove liability the law places on us for a defective service or our own acts or omissions.

## Indemnification {#indemnity}

You remain responsible under applicable law for harm caused by your unlawful use of the App. These Terms do not require you to indemnify us against all third-party claims, pay our costs regardless of fault, or compensate us for losses caused by us or our service providers. Any claim against you must meet the ordinary legal requirements for responsibility, causation and loss, with all applicable consumer protections preserved.

## Governing law and disputes {#governing-law}

These Terms are governed by the laws of Poland. If you are a consumer, you also keep the protection of the mandatory consumer-law provisions of the country where you live, and you may bring proceedings in the courts of that country as well as in Poland; a consumer may also use the out-of-court dispute-resolution bodies available in their country. You may contact us through the developer details on the Play listing to seek an informal resolution, but this is not a condition for exercising your rights and does not suspend legal time limits.

## General {#general}

These Terms describe the agreement for use of the App, together with applicable purchase terms and the open licenses referenced under Legal & credits. The Privacy Policy is a separate transparency notice. Nothing here overrides mandatory rights or binding information given to you before purchase. If a provision is unenforceable, the remainder continues where legally possible. Not enforcing a provision immediately is not a waiver. We may transfer the agreement to a successor only where permitted by law and without reducing your rights or guarantees; we will notify you of any change to the operator or data controller. Transferring an agreement does not itself authorise new uses of personal data. These Terms are provided in English; a translation does not diminish mandatory rights, including language rights in your country.

## Changes to these terms {#changes}

We may update these Terms for a valid reason, such as a legal requirement or a change to the service described under "Availability and changes to the App". We will publish the updated text with its date and provide legally required notice before a material change takes effect. A material change to an existing paid contract requires a lawful basis and any consent required by law; publishing a new page or your silence alone does not establish that consent. Changes do not remove accrued rights or apply retroactively. If you disagree, you may stop using the App and cancel future renewals in Google Play; any separate termination or refund right described above remains available. You can save or print the hosted Terms for your records.

## Contact {#contact}

For questions, complaints, statutory remedies or questions about these Terms, use the developer contact details on the [Gramwise Google Play listing](https://play.google.com/store/apps/details?id=com.tallybite.app). Include a description of the issue and, for a purchase issue, the relevant order reference if needed; do not send your purchase token, payment-card details or health diary. We will respond within any deadline required by applicable law. You may also contact [Google Play support](https://support.google.com/googleplay/answer/2479637) about payment, refund and subscription issues. Contacting us informally is optional and does not prevent you from using a regulator, court or other remedy.
