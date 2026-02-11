
import BackToTop from "@/components/BackToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Polyhistor",
  description: "Learn how Polyhistor collects, uses, and protects your personal data. Our commitment to your privacy and security.",
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-slate-900">PRIVACY POLICY</h1>
        <div className="text-slate-500 mb-8">
          <p><strong>Last Updated:</strong> February 11, 2026</p>
          <p><strong>Effective Date:</strong> February 11, 2026</p>
        </div>

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
                  <span><strong>Data We Collect:</strong> Account info, trip details, user content, and real-time location (for navigation).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>AI Usage:</strong> We use Google Gemini to generate itinerary suggestions.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Agencies:</strong> If you join an Agency trip, they can see your location &amp; profile during that trip.</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Privacy Controls:</strong> Use &quot;Ghost Mode&quot; to pause location sharing anytime.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Security:</strong> Direct messages are encrypted-at-rest. We auto-purge deleted messages.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>No Selling:</strong> We do not sell your personal data to third parties.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-white border border-slate-200 rounded-lg shadow-sm no-print">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Table of Contents</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <a href="#collect" className="text-brand-blue hover:underline">1. Information We Collect</a>
              <a href="#ai" className="text-brand-blue hover:underline">2. AI & Automated Processing</a>
              <a href="#use" className="text-brand-blue hover:underline">3. How We Use Your Info</a>
              <a href="#sharing" className="text-brand-blue hover:underline">4. Data Sharing</a>
              <a href="#messaging" className="text-brand-blue hover:underline">5. Messaging & Encryption</a>
              <a href="#control" className="text-brand-blue hover:underline">6. Control Over Your Data</a>
              <a href="#retention" className="text-brand-blue hover:underline">7. Data Retention</a>
              <a href="#security" className="text-brand-blue hover:underline">8. Security</a>
              <a href="#children" className="text-brand-blue hover:underline">9. Children’s Privacy</a>
              <a href="#jurisdiction" className="text-brand-blue hover:underline">10. Jurisdiction</a>
              <a href="#contact" className="text-brand-blue hover:underline">11. Contact Us</a>
            </div>
          </div>

          <p className="mb-6">
            <strong>Polyhistor Inc</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a corporation organized under the laws of the State of Delaware, is committed to protecting your privacy. This Privacy Policy describes how we collect, process, and safeguard your information when you use the Polyhistor mobile application and associated services (collectively, the &quot;Service&quot;).
          </p>
          <p className="mb-6">
            By creating an account or using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>

          {/* 1. Information We Collect */}
          <section className="mb-8" id="collect">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect data to provide accurate navigation, AI-driven recommendations, and social connectivity.</p>

            <h3 className="text-xl font-semibold text-slate-800 mb-2">A. Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Account Registration:</strong> When you create an account, we collect your <strong>username</strong>, <strong>email address</strong>, and <strong>password</strong> (hashed for security).</li>
              <li><strong>Profile Information:</strong> You may provide a display name, bio, date of birth, gender, hometown, language, and timezone settings.</li>
              <li><strong>Trip & Itinerary Data:</strong> We collect trip details including destination, budget, start/end dates, and itinerary items (flights, hotels, activities).</li>
              <li><strong>User Content:</strong> This includes messages, photos (profile pictures, trip covers), comments on itineraries, and votes.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-2">B. Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Real-Time Location & Navigation History:</strong> To provide routing and &quot;Live Tracking,&quot; we collect your precise latitude, longitude, speed, and heading. We store <strong>Navigation Sessions</strong> (origin, destination, waypoints) and <strong>Location History</strong> timestamps.</li>
              <li><strong>Device & Usage Data:</strong> We use analytics tools (PostHog and Sentry) to collect device models, IP addresses, operating systems, crash logs, and interaction metrics to improve App stability.</li>
              <li><strong>Media Metadata:</strong> When you upload images, we may process metadata associated with the file.</li>
            </ul>
          </section>

          {/* 2. Artificial Intelligence (AI) & Automated Processing */}
          <section className="mb-8" id="ai">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Artificial Intelligence (AI) & Automated Processing</h2>
            <p className="mb-4">We use advanced AI to personalize your travel experience.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Generative AI (Google Gemini):</strong> We utilize Google’s Gemini models to generate itinerary suggestions and travel advice. Anonymized query data is sent to our AI partners to generate responses.</li>
              <li><strong>Vector Embeddings:</strong> We process your travel preferences and historical trip data to create &quot;embeddings&quot; (mathematical vector representations). These are stored in our database to help our AI &quot;understand&quot; your travel style and find semantically similar locations.</li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="mb-8" id="use">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Navigation:</strong> To calculate routes, provide lane guidance, and estimate arrival times using Mapbox and Google Places.</li>
              <li><strong>Social Connectivity:</strong> To facilitate Friend requests, Group chats, and location sharing between connected users.</li>
              <li><strong>Agency Integration:</strong> If you accept an invite from a Travel Agency, we link your account to that Agency to facilitate professional trip planning.</li>
              <li><strong>Communication:</strong> To send push notifications (via Firebase) and emails (via Resend) regarding trip updates, friend requests, or security alerts.</li>
              <li><strong>Safety & Moderation:</strong> We employ automated and manual moderation to detect hate speech, harassment, or unsafe content in compliance with our community standards.</li>
            </ul>
          </section>

          {/* 4. Data Sharing and Third Parties */}
          <section className="mb-8" id="sharing">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Sharing and Third Parties</h2>
            <p className="mb-4">We do not sell your personal data. We share data only with the specific infrastructure providers necessary to run the Service:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Cloud Infrastructure:</strong> AWS (Amazon Web Services) and Supabase for secure database hosting and file storage.</li>
              <li><strong>Maps & Location:</strong> Mapbox, Google Places, and OpenMeteo (weather data) to provide map interfaces and environmental context.</li>
              <li><strong>Analytics & Stability:</strong> PostHog (analytics) and Sentry (error tracking).</li>
              <li><strong>Travel Agencies:</strong> <strong>Important:</strong> If you join a trip organized by an Agency or link your account to an Agency, that Agency’s staff will have access to your name, profile, real-time location <em>during the trip</em>, and itinerary details.</li>
            </ul>
          </section>

          {/* 5. Messaging and Encryption */}
          <section className="mb-8" id="messaging">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Messaging and Encryption</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Encryption:</strong> We implement encryption for your direct messages. Your messages are stored with an Initialization Vector (IV) and Auth Tag, adding a layer of security to your private conversations.</li>
              <li><strong>Retention:</strong> We implement an auto-purge policy for deleted messages. While a message is removed from the user interface immediately upon deletion, a backup may be retained for up to <strong>90 days</strong> for safety and moderation auditing before being permanently erased.</li>
            </ul>
          </section>

          {/* 6. Control Over Your Data */}
          <section className="mb-8" id="control">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Control Over Your Data</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Ghost Mode:</strong> You can toggle &quot;Ghost Mode&quot; within the application to pause real-time location sharing with friends and groups.</li>
              <li><strong>Privacy Settings:</strong> You can manage notification preferences (Push/Email) and friend request settings in your User Settings.</li>
              <li><strong>Blocking:</strong> You have the right to block other users. Blocked users cannot see your location or send you messages.</li>
            </ul>
          </section>

          {/* 7. Data Retention */}
          <section className="mb-8" id="retention">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Retention</h2>
            <p className="mb-4">We retain your personal data only as long as necessary:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Account Data:</strong> Retained until you request deletion.</li>
              <li><strong>Navigation History:</strong> Retained to provide your personal travel history logs. You may delete specific trips from your history.</li>
              <li><strong>Inactive Accounts:</strong> We reserve the right to delete accounts that have been inactive for an extended period.</li>
            </ul>
          </section>

          {/* 8. Security */}
          <section className="mb-8" id="security">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Security</h2>
            <p className="mb-4">
              We use industry-standard security measures, including HTTPS encryption in transit and database encryption at rest. However, no method of transmission over the Internet is 100% secure. You are responsible for maintaining the secrecy of your unique password and account information.
            </p>
          </section>

          {/* 9. Children’s Privacy */}
          <section className="mb-8" id="children">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Children’s Privacy</h2>
            <p className="mb-4">
              The Service is intended for general audiences and is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will delete such information from our files.
            </p>
          </section>

          {/* 10. Jurisdiction and International Transfers */}
          <section className="mb-8" id="jurisdiction">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Jurisdiction and International Transfers</h2>
            <p className="mb-4">
              Polyhistor Inc is a Delaware corporation. Your information may be transferred to—and maintained on—computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section className="mb-8 border-t border-slate-200 pt-8" id="contact">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:
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
