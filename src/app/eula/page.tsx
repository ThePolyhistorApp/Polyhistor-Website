

export default function EULA() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-slate-900">End User License Agreement (EULA)</h1>
        <p className="text-slate-500 mb-8">Last Updated: January 19, 2026</p>

        <div className="prose prose-slate max-w-none text-slate-700">
          <p className="mb-6">
            This End User License Agreement (&quot;Agreement&quot;) is a binding legal agreement between you (&quot;User&quot; or &quot;You&quot;) and ThePolyhistor LLC (&quot;Company,&quot; &quot;We,&quot; &quot;Us,&quot; or &quot;Our&quot;). This Agreement governs your use of the ThePolyhistor mobile application (the &quot;App&quot;) on any platform (iOS, Android, etc.).
          </p>
          <p className="font-bold mb-6">
            BY DOWNLOADING, INSTALLING, OR USING THE APP, YOU AGREE TO BE BOUND BY THIS AGREEMENT. IF YOU DO NOT AGREE, DO NOT DOWNLOAD OR USE THE APP.
          </p>

          {/* 1. Scope of License */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Scope of License</h2>
            <p>
              ThePolyhistor LLC grants you a limited, non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial purposes strictly in accordance with the terms of this Agreement and the Usage Rules set forth in the Apple Media Services Terms and Conditions and the Google Play Terms of Service.
            </p>
          </section>

          {/* 2. User Generated Content & Objectionable Content (Zero Tolerance) */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. User Generated Content & Objectionable Content (Zero Tolerance)</h2>
            <p className="mb-4">The App allows users to post content, message groups, and share itineraries. To ensure a safe community, we have a Zero Tolerance Policy for objectionable content.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Prohibited Content:</strong> You may not upload, share, or transmit content that is offensive, defamatory, pornographic, hateful, discriminatory, or promotes illegal acts.</li>
              <li><strong>Reporting & Blocking:</strong> Users can report abusive content or block other users directly within the App.</li>
              <li><strong>Action:</strong> ThePolyhistor LLC will act on reported content within 24 hours. We reserve the right to remove any content and immediately terminate the account of any user found violating these standards without prior notice.</li>
            </ul>
          </section>

          {/* 3. Location Data & Safety */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Location Data & Safety</h2>
            <p className="mb-4">The App provides location-based services for navigation and social coordination.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Voluntary Sharing:</strong> You acknowledge that sharing your location with other users is a voluntary action at your own risk.</li>
              <li><strong>Safety:</strong> Do not use the App in a way that distracts you from obeying traffic or safety laws. ThePolyhistor LLC is not liable for any accidents, injuries, or damages resulting from your use of the App while operating a vehicle or walking.</li>
            </ul>
          </section>

          {/* 4. Updates and Maintenance */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Updates and Maintenance</h2>
            <p>
              ThePolyhistor LLC may generally provide updates to the App but is under no obligation to provide support or maintenance. You acknowledge that Apple and Google have no obligation whatsoever to furnish any maintenance and support services with respect to the App.
            </p>
          </section>

          {/* 5. External Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. External Services</h2>
            <p>
              The App enables access to third-party services (e.g., Maps, Weather). Use of these services is at your sole risk. We are not responsible for the content or accuracy of any third-party service.
            </p>
          </section>

          {/* 6. No Warranty */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. No Warranty</h2>
            <p className="uppercase text-sm leading-relaxed">
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; TO THE MAXIMUM EXTENT PERMITTED BY LAW, THEPOLYHISTOR LLC DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT WARRANT THAT THE APP WILL BE ERROR-FREE OR UNINTERRUPTED.
            </p>
          </section>

          {/* 7. Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p className="uppercase text-sm leading-relaxed">
              TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL THEPOLYHISTOR LLC BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING LOSS OF PROFITS OR DATA, ARISING OUT OF YOUR USE OR INABILITY TO USE THE APP.
            </p>
          </section>

          {/* 8. Specific Terms for Apple iOS Users */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Specific Terms for Apple iOS Users</h2>
            <p className="mb-4">If you downloaded the App from the Apple App Store, you acknowledge and agree that:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Parties:</strong> This Agreement is between You and ThePolyhistor LLC only, not Apple. Apple is not responsible for the App or its content.</li>
              <li><strong>Product Claims:</strong> Apple is not responsible for addressing any claims relating to the App, including product liability claims or failure to conform to legal requirements.</li>
              <li><strong>Intellectual Property:</strong> In the event of any third-party claim that the App infringes solely on their intellectual property rights, ThePolyhistor LLC, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such claim.</li>
              <li><strong>Third-Party Beneficiary:</strong> Apple and its subsidiaries are third-party beneficiaries of this Agreement. Upon your acceptance of this Agreement, Apple will have the right to enforce this Agreement against you.</li>
            </ul>
          </section>

          {/* 9. Legal Compliance */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Legal Compliance</h2>
            <p>
              You represent and warrant that: (i) You are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a &quot;terrorist supporting&quot; country; and (ii) You are not listed on any U.S. Government list of prohibited or restricted parties.
            </p>
          </section>

          {/* 10. Contact Information */}
          <section className="mb-8 border-t border-slate-200 pt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Information</h2>
            <p>
              If you have any questions, complaints, or claims with respect to the App, please contact us at: ThePolyhistor LLC <br /> Email: <a href="mailto:apps@thepolyhistor.com" className="text-brand-blue hover:underline">apps@thepolyhistor.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
