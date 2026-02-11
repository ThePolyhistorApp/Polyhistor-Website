import BackToTop from "@/components/BackToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EULA | Polyhistor",
  description: "End User License Agreement for the Polyhistor mobile application. Read about your rights and responsibilities when using our service.",
};

export default function EULA() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-slate-900">END USER LICENSE AGREEMENT (EULA)</h1>
        <p className="text-slate-500 mb-8">Last Updated: February 11, 2026</p>

        <div className="prose prose-slate max-w-none text-slate-700">

          {/* Quick Summary Box */}
          <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 mb-10 no-print">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 not-prose">
              At a Glance ✨
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600 not-prose">
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>License:</strong> You get a limited, personal, non-commercial license to use the App.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Zero Tolerance:</strong> We strictly ban hate speech, harassment, and illegal content.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>AI Features:</strong> Verify all AI suggestions. We aren&apos;t liable for &quot;hallucinations.&quot;</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Safety First:</strong> Never use the App while driving. Focus on the road.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Agencies:</strong> Travel Agencies are independent. We don&apos;t control them.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>No Warranty:</strong> The App is provided &quot;as is&quot; without guarantees.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-white border border-slate-200 rounded-lg shadow-sm no-print">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Table of Contents</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <a href="#scope" className="text-brand-blue hover:underline">1. Scope of License</a>
              <a href="#ugc" className="text-brand-blue hover:underline">2. User Generic Content & Policy</a>
              <a href="#ai" className="text-brand-blue hover:underline">3. AI Disclaimer</a>
              <a href="#location" className="text-brand-blue hover:underline">4. Location & Navigation</a>
              <a href="#agencies" className="text-brand-blue hover:underline">5. Agency & Group Travel</a>
              <a href="#updates" className="text-brand-blue hover:underline">6. Updates & Maintenance</a>
              <a href="#external" className="text-brand-blue hover:underline">7. External Services</a>
              <a href="#warranty" className="text-brand-blue hover:underline">8. No Warranty</a>
              <a href="#liability" className="text-brand-blue hover:underline">9. Limitation of Liability</a>
              <a href="#apple" className="text-brand-blue hover:underline">10. Apple iOS Terms</a>
              <a href="#legal" className="text-brand-blue hover:underline">11. Legal Compliance</a>
              <a href="#contact" className="text-brand-blue hover:underline">12. Contact Information</a>
            </div>
          </div>

          <p className="mb-6">
            This End User License Agreement (&quot;Agreement&quot;) is a binding legal contract between you (&quot;User,&quot; &quot;You,&quot; or &quot;Your&quot;) and <strong>Polyhistor Inc</strong> (&quot;Company,&quot; &quot;We,&quot; &quot;Us,&quot; or &quot;Our&quot;), a corporation organized under the laws of the State of Delaware. This Agreement governs your access to and use of the Polyhistor mobile application (the &quot;App&quot;) on iOS and Android platforms.
          </p>
          <p className="font-bold mb-6">
            BY DOWNLOADING, INSTALLING, OR USING THE APP, YOU AGREE TO BE BOUND BY THIS AGREEMENT. IF YOU DO NOT AGREE, DO NOT DOWNLOAD OR USE THE APP.
          </p>

          {/* 1. Scope of License */}
          <section className="mb-8" id="scope">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Scope of License</h2>
            <p>
              Polyhistor Inc grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to download, install, and use the App for your personal, non-commercial purposes strictly in accordance with this Agreement and the Usage Rules set forth in the Apple Media Services Terms and Conditions and/or the Google Play Terms of Service.
            </p>
          </section>

          {/* 2. User Generated Content & Zero Tolerance Policy */}
          <section className="mb-8" id="ugc">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. User Generated Content & Zero Tolerance Policy</h2>
            <p className="mb-4">The App contains interactive features (Group Chats, Itinerary Comments, Photo Uploads) that allow users to post content. To ensure a safe community, we enforce a strict Zero Tolerance Policy for objectionable content.</p>
            <p className="mb-4"><strong>Prohibited Content:</strong> You are strictly prohibited from uploading, sharing, or transmitting content that is:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Defamatory, harassed, abusive, or threatening.</li>
              <li>Pornographic, sexually explicit, or obscene.</li>
              <li>Hateful, discriminatory, or promoting violence against any individual or group.</li>
              <li>Illegal or promotes illegal acts.</li>
            </ul>
            <p className="mb-4"><strong>Content Moderation:</strong> Polyhistor Inc employs both automated AI detection and manual review to monitor content.</p>
            <p className="mb-4"><strong>Reporting & Blocking:</strong> You agree to use the in-app &quot;Report&quot; and &quot;Block&quot; features to flag inappropriate content or abusive users.</p>
            <p className="mb-4"><strong>Enforcement:</strong> We review reported content within 24 hours. We reserve the right to remove any content and immediately terminate the account of any user found violating these standards without prior notice.</p>
          </section>

          {/* 3. Artificial Intelligence (AI) Disclaimer */}
          <section className="mb-8" id="ai">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Artificial Intelligence (AI) Disclaimer</h2>
            <p className="mb-4">The App utilizes Generative AI technologies, including Google Gemini, to provide travel recommendations, itinerary planning, and chat assistance.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>No Warranty of Accuracy:</strong> AI is experimental and may produce &quot;hallucinations,&quot; errors, or outdated information. You acknowledge that opening hours, prices, and location descriptions generated by AI may be incorrect.</li>
              <li><strong>User Responsibility:</strong> You must independently verify all AI-generated suggestions. Polyhistor Inc is not liable for missed flights, closed venues, visa issues, or financial losses resulting from reliance on AI data.</li>
              <li><strong>Prohibited AI Use:</strong> You may not use the AI features to generate harmful, fraudulent, or illegal content.</li>
            </ul>
          </section>

          {/* 4. Location Services & Navigation Safety */}
          <section className="mb-8" id="location">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Location Services & Navigation Safety</h2>
            <p className="mb-4">The App integrates third-party mapping services (including Mapbox and Google Places) to provide real-time navigation and location sharing.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Distracted Driving:</strong> NEVER interact with the App while driving. You agree to use the App’s navigation features only when it is safe and legal to do so.</li>
              <li><strong>Data Accuracy:</strong> Navigation routes are for planning purposes only. Actual road conditions, weather, and traffic laws always take precedence over App instructions.</li>
              <li><strong>Battery Usage:</strong> You acknowledge that continued use of GPS running in the background can dramatically decrease battery life.</li>
            </ul>
          </section>

          {/* 5. Agency & Group Travel */}
          <section className="mb-8" id="agencies">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Agency & Group Travel</h2>
            <p className="mb-4">If you use the App to participate in a trip organized by a third-party Travel Agency (&quot;Agency&quot;):</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Independent Entities:</strong> The Agency is an independent third party. Polyhistor Inc provides the software platform but does not control the Agency’s staff, itinerary decisions, or safety protocols.</li>
              <li><strong>Data Sharing:</strong> By accepting an Agency Invite, you consent to that Agency viewing your profile, itinerary status, and real-time location during the active dates of that trip.</li>
            </ul>
          </section>

          {/* 6. Updates and Maintenance */}
          <section className="mb-8" id="updates">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Updates and Maintenance</h2>
            <p className="mb-4">
              Polyhistor Inc may generally provide updates to the App to improve performance or fix bugs. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>We are under no obligation to provide support or maintenance.</li>
              <li>Apple and Google have no obligation whatsoever to furnish any maintenance and support services with respect to the App.</li>
            </ul>
          </section>

          {/* 7. External Services */}
          <section className="mb-8" id="external">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. External Services</h2>
            <p>
              The App enables access to third-party services and websites (collectively and individually, &quot;External Services&quot;), including Mapbox, Google Maps, OpenMeteo, and others. Use of External Services is at your sole risk. We are not responsible for the content, accuracy, or privacy practices of any External Service.
            </p>
          </section>

          {/* 8. NO WARRANTY */}
          <section className="mb-8" id="warranty">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. NO WARRANTY</h2>
            <p className="uppercase text-sm leading-relaxed font-bold mb-4">
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND.
            </p>
            <p className="uppercase text-sm leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, POLYHISTOR INC DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE AI/NAVIGATION DATA WILL BE ACCURATE.
            </p>
          </section>

          {/* 9. LIMITATION OF LIABILITY */}
          <section className="mb-8" id="liability">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. LIMITATION OF LIABILITY</h2>
            <p className="uppercase text-sm leading-relaxed">
              TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL POLYHISTOR INC BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, HOWEVER CAUSED.
            </p>
          </section>

          {/* 10. Specific Terms for Apple iOS Users */}
          <section className="mb-8" id="apple">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Specific Terms for Apple iOS Users</h2>
            <p className="mb-4">If you accessed or downloaded the App from the Apple App Store, you acknowledge and agree that:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Parties:</strong> This Agreement is between You and Polyhistor Inc only, not Apple. Polyhistor Inc, not Apple, is solely responsible for the App and the content thereof.</li>
              <li><strong>Product Claims:</strong> Apple is not responsible for addressing any claims by you or any third party relating to the App, including: (i) product liability claims; (ii) any claim that the App fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation.</li>
              <li><strong>Intellectual Property:</strong> In the event of any third-party claim that the App infringes that third party’s intellectual property rights, Polyhistor Inc, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such claim.</li>
              <li><strong>Third-Party Beneficiary:</strong> Apple and Apple’s subsidiaries are third-party beneficiaries of this Agreement. Upon your acceptance of this Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this Agreement against you as a third-party beneficiary.</li>
            </ul>
          </section>

          {/* 11. Legal Compliance */}
          <section className="mb-8" id="legal">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Legal Compliance</h2>
            <p className="mb-4">
              You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a &quot;terrorist supporting&quot; country.</li>
              <li>You are not listed on any U.S. Government list of prohibited or restricted parties.</li>
            </ul>
          </section>

          {/* 12. Contact Information */}
          <section className="mb-8 border-t border-slate-200 pt-8" id="contact">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Information</h2>
            <p>
              If you have any questions, complaints, or claims with respect to the App, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Polyhistor Inc</strong><br />
              <strong>Email:</strong> <a href="mailto:naveengali@thepolyhistor.com" className="text-brand-blue hover:underline">naveengali@thepolyhistor.com</a>
            </p>
          </section>

        </div>
      </div>
      <BackToTop />
    </main>
  );
}
