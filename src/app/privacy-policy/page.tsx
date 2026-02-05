
export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-slate-900">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last Updated: January 30, 2026</p>

        <div className="prose prose-slate max-w-none text-slate-700">
          <p className="mb-6">
            Polyhistor LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This policy describes how we collect, use, and protect your information when you use the Polyhistor mobile application.
          </p>

          {/* 1. Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-2">A. Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Account Data:</strong> Name, email, username, password, and profile details (bio, gender, hometown).</li>
              <li><strong>Trip Data:</strong> Itineraries, budgets, dates, and invited friends.</li>
              <li><strong>User Content:</strong> Photos, chat messages, and reviews.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-2">B. Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Location Data:</strong> We collect precise real-time location to enable navigation and &quot;Live Tracking&quot; features.</li>
              <li><strong>Navigation History:</strong> Details of your trips (Origin, Destination, Waypoints) are processed to provide routing.</li>
              <li><strong>Device & Analytics:</strong> IP address, device model, and usage logs to improve the App.</li>
            </ul>
          </section>

          {/* 2. Artificial Intelligence (AI) Processing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Artificial Intelligence (AI) Processing</h2>
            <p className="mb-4">We use AI technologies (including Google Gemini) to provide travel recommendations.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Embeddings:</strong> We may process your preferences and past trips to create &quot;embeddings&quot; (mathematical representations) that help our AI understand your travel style.</li>
              <li><strong>Processing:</strong> Anonymized query data may be sent to our AI partners to generate itinerary responses.</li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use your data to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide travel navigation and itinerary planning.</li>
              <li>Facilitate social features (group chats, friend location sharing).</li>
              <li>Connect you with Travel Agencies (if you accept an Agency invite).</li>
              <li>Enforce our safety and moderation policies.</li>
            </ul>
          </section>

          {/* 4. Sharing of Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Sharing of Information</h2>
            <p className="mb-4">We do not sell your personal data. We share data only as follows:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>With Travel Agencies:</strong> If you join an &quot;Agency Trip,&quot; that specific Agency will have access to your profile and real-time location during that trip.</li>
              <li><strong>Service Providers:</strong> We use third-party vendors for hosting (AWS, Supabase), maps (Mapbox, Google Places), AI (Google), and communication (Resend, Firebase).</li>
              <li><strong>Legal Compliance:</strong> We may disclose information if required by law or to protect user safety (e.g., in response to a court order).</li>
            </ul>
          </section>

          {/* 5. Data Retention & Deletion */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Retention & Deletion</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Account Data:</strong> Retained until you request account deletion.</li>
              <li><strong>Chat Messages (Auto-Purge):</strong> To protect privacy, deleted messages are removed from view immediately. We retain message backups for safety auditing for a maximum of 90 days before permanent erasure.</li>
              <li><strong>Location History:</strong> Retained to provide your personal travel history unless you manually delete specific trips.</li>
            </ul>
          </section>

          {/* 6. Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Security</h2>
            <p className="mb-4">
              We implement robust security measures, including Encryption-at-Rest for sensitive message data. However, no transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 7. Children’s Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Children’s Privacy</h2>
            <p className="mb-4">
              The App is strictly for users 13 years of age or older. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          {/* 8. Your Illinois Privacy Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Your Illinois Privacy Rights</h2>
            <p className="mb-4">
              If you are an Illinois resident, you have specific rights regarding your data. We do not currently collect &quot;Biometric Information&quot; (like face scans) as defined by the Illinois Biometric Information Privacy Act (BIPA).
            </p>
          </section>

          {/* 9. Contact Us */}
          <section className="mb-8 border-t border-slate-200 pt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
            <p>
              For questions about this policy or to request account deletion, contact: Polyhistor LLC <br /> Email: <a href="mailto:legal@thepolyhistor.com" className="text-brand-blue hover:underline">legal@thepolyhistor.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
