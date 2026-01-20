

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-slate-900">Terms of Service</h1>
        <p className="text-slate-500 mb-8">Last Updated: January 19, 2026</p>

        <div className="prose prose-slate max-w-none text-slate-700">
          {/* 1. Acceptance of Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and ThePolyhistor LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing, downloading, installing, or using the ThePolyhistor mobile application (the &quot;App&quot;) and related services (collectively, the &quot;Service&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
            <p className="font-semibold">
              IF you do not agree to these Terms, you must immediately uninstall the App and discontinue its use.
            </p>
          </section>

          {/* 2. Eligibility */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Eligibility</h2>
            <p className="mb-4">
              The Service is strictly intended for users who are 13 years of age or older. By using the Service, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You are at least 13 years old.</li>
              <li>You have the full right, power, and authority to enter into these Terms.</li>
              <li>You are not barred from using the Service under the laws of the United States or any other applicable jurisdiction.</li>
            </ul>
          </section>

          {/* 3. Accounts and Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Accounts and Security</h2>
            <p className="mb-4">
              To access certain features of the Service (such as creating trips, joining groups, or messaging), you may be required to register for an account.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Accuracy:</strong> You agree to provide accurate, current, and complete information during the registration process.</li>
              <li><strong>Security:</strong> You are responsible for safeguarding your password and account credentials. You agree to notify us immediately at <a href="mailto:apps@thepolyhistor.com" className="text-brand-blue hover:underline">apps@thepolyhistor.com</a> of any unauthorized use of your account.</li>
              <li><strong>Liability:</strong> You are solely responsible for all activities that occur under your account, whether or not you have authorized them.</li>
            </ul>
          </section>

          {/* 4. Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Privacy Policy</h2>
            <p>
              Your use of the Service is also governed by our Privacy Policy, which explains how we collect, use, and share your personal information. By using the Service, you consent to the data practices described in our Privacy Policy.
            </p>
          </section>

          {/* 5. User Content (UGC) */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. User Content (UGC)</h2>
            <p className="mb-4">
              The Service allows you to post, upload, transmit, or otherwise make available content, including but not limited to trip itineraries, photos, profile information, and chat messages (&quot;User Content&quot;).
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Ownership:</strong> You retain all rights and ownership of your User Content.</li>
              <li><strong>License to Us:</strong> By posting User Content, you grant ThePolyhistor LLC a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, display, and distribute your User Content solely for the purpose of operating, improving, and providing the Service.</li>
              <li><strong>Responsibility:</strong> You are solely responsible for your User Content. You represent that you own or have the necessary rights to use and authorize the use of your User Content.</li>
            </ul>
          </section>

          {/* 6. Prohibited Conduct */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Prohibited Conduct</h2>
            <p className="mb-4">You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Violate any applicable federal, state, local, or international law or regulation.</li>
              <li>Harass, abuse, defame, threaten, or defraud other users.</li>
              <li>Upload viruses, malicious code, or compromise the security of the Service.</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the App.</li>
              <li>Use the Service for any commercial purpose without our express written consent.</li>
              <li>Impersonate any person or entity or falsely state your affiliation with any person or entity.</li>
            </ul>
          </section>

          {/* 7. Location Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Location Services</h2>
            <p className="mb-4">
              The Service utilizes location-based features (e.g., navigation and map tracking). You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your location data is processed to provide these services.</li>
              <li>Navigation data, including routes and estimated times of arrival, are for planning purposes only. Actual conditions may vary.</li>
              <li>You must always exercise caution and obey all traffic laws while using the App. ThePolyhistor LLC is not liable for any accidents, fines, or damages resulting from your use of the navigation features.</li>
            </ul>
          </section>

          {/* 8. Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Third-Party Services</h2>
            <p>
              The Service integrates with third-party providers, including but not limited to Google Maps/Places, Mapbox, AWS, and OpenMeteo. Your use of the Service is subject to the terms and conditions of these third-party providers. We are not responsible for the availability or accuracy of such third-party services.
            </p>
          </section>

          {/* 9. Intellectual Property Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Intellectual Property Rights</h2>
            <p>
              The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of ThePolyhistor LLC and its licensors. The Service is protected by copyright, trademark, and other laws of the United States and foreign countries.
            </p>
          </section>

          {/* 10. DMCA Copyright Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. DMCA Copyright Policy</h2>
            <p>
              We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes a copyright or other intellectual property infringement. If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to <a href="mailto:apps@thepolyhistor.com" className="text-brand-blue hover:underline">apps@thepolyhistor.com</a>.
            </p>
          </section>

          {/* 11. Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation a breach of the Terms. Upon termination, your right to use the Service will immediately cease.
            </p>
          </section>

          {/* 12. Disclaimer of Warranties */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Disclaimer of Warranties</h2>
            <p className="uppercase text-sm leading-relaxed">
              THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. THEPOLYHISTOR LLC MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, REGARDING THE OPERATION OF THE SERVICE OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON THE SERVICE. TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
            </p>
          </section>

          {/* 13. Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Limitation of Liability</h2>
            <p className="uppercase text-sm leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THEPOLYHISTOR LLC, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (C) ANY CONTENT OBTAINED FROM THE SERVICE; AND (D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
            </p>
          </section>

          {/* 14. Governing Law and Venue */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Governing Law and Venue</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of Illinois, United States, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the state and federal courts located in Illinois for any actions for which the parties retain the right to seek injunctive or other equitable relief.
            </p>
          </section>

          {/* 15. Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          {/* 16. Contact Us */}
          <section className="mb-8 border-t border-slate-200 pt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at: <br /> Email: <a href="mailto:apps@thepolyhistor.com" className="text-brand-blue hover:underline">apps@thepolyhistor.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
