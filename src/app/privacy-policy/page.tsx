

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-slate-900">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last Updated: January 19, 2026</p>

        <div className="prose prose-slate max-w-none text-slate-700">
          <p className="mb-6">
            ThePolyhistor LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you use the ThePolyhistor mobile application (the &quot;App&quot;) and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>

          {/* 1. Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect several types of information from and about users of our App, including:</p>

            <h3 className="text-xl font-semibold text-slate-800 mb-2">A. Information You Provide to Us</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Account Information:</strong> When you register, we collect your name, email address, date of birth, and password.</li>
              <li><strong>User Content:</strong> Information you post to the App, including profile photos, trip itineraries, and messages sent to other users or groups.</li>
              <li><strong>Correspondence:</strong> Records and copies of your correspondence (including email addresses) if you contact us for support.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-2">B. Information We Collect Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Real-Time Location Data:</strong> The App requires access to your device&apos;s location to provide core features, such as navigation, route planning, and &quot;active friends&quot; visibility.</li>
              <li><strong>Note:</strong> While we process this data in real-time to provide the service, we do not continuously store your historical location movements by default. We may introduce features in the future that allow you to voluntarily save location history (e.g., &quot;Trip Journals&quot;), which will be stored only with your explicit permission.</li>
              <li><strong>Device Information:</strong> We collect information about your mobile device and internet connection, including the device&apos;s unique device identifier, IP address, operating system, and browser type.</li>
              <li><strong>Usage Details:</strong> Details of your access to and use of the App, including traffic data, logs, and other communication data and the resources that you access and use on the App.</li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use information that we collect about you or that you provide to us:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>To present our App and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us (e.g., generating travel itineraries).</li>
              <li>To fulfill our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.</li>
              <li>To notify you about changes to our App or any products or services we offer or provide though it.</li>
              <li>To allow you to participate in interactive features on our App, such as group trips and shared navigation.</li>
              <li>To improve our App, verify accounts, and maintain security.</li>
            </ul>
          </section>

          {/* 3. Disclosure of Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Disclosure of Your Information</h2>
            <p className="mb-4">
              We do not sell your personal information. We may disclose aggregated information about our users (which does not identify any individual) without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>To Our Service Providers:</strong> We use third-party contractors to support our business. These partners are authorized to use your personal information only as necessary to provide these services to us. These include:
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li>Hosting & Database: AWS (Amazon Web Services), Supabase.</li>
                  <li>Mapping & Navigation: Mapbox, Google Places API.</li>
                  <li>Analytics: PostHog.</li>
                  <li>Notifications & Communication: Firebase, Resend.</li>
                  <li>Weather Services: OpenMeteo.</li>
                </ul>
              </li>
              <li><strong>To Comply with the Law:</strong> If we are required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
              <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            </ul>
          </section>

          {/* 4. Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
            <p className="mb-4">We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Encryption:</strong> Sensitive data is encrypted while at rest in our databases using industry-standard encryption protocols.</li>
              <li><strong>Access Control:</strong> Access to your data is restricted to authorized employees and contractors who need to know that information in order to operate, develop, or improve our Service.</li>
            </ul>
            <p className="text-sm italic bg-yellow-50 p-4 border-l-4 border-yellow-400 text-yellow-800">
              <strong>Disclaimer:</strong> Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our App. Any transmission of personal information is at your own risk.
            </p>
          </section>

          {/* 5. Children Under the Age of 13 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Children Under the Age of 13</h2>
            <p>
              Our App is strictly intended for users who are 13 years of age or older. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this App. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us at <a href="mailto:apps@thepolyhistor.com" className="text-brand-blue hover:underline">apps@thepolyhistor.com</a>.
            </p>
          </section>


          {/* 6. Your State Privacy Rights (Illinois) */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your State Privacy Rights (Illinois)</h2>
            <p className="mb-4">If you are a resident of Illinois, you may have specific rights regarding your personal information.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Biometric Data:</strong> We do not currently collect or store biometric identifiers or biometric information (such as face scans or fingerprints) as defined by the Illinois Biometric Information Privacy Act (BIPA).</li>
              <li><strong>Consumer Fraud:</strong> We comply with the Illinois Consumer Fraud and Deceptive Business Practices Act regarding the collection and use of your data.</li>
            </ul>
          </section>

          {/* 7. Account Deletion */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Account Deletion</h2>
            <p>
              You may request to delete your account at any time. Upon deletion, your personal profile data will be removed from our active databases. However, we may retain certain information in our archives as required by law or for legitimate business purposes (such as fraud prevention or resolving disputes). To request deletion, please contact us at <a href="mailto:apps@thepolyhistor.com" className="text-brand-blue hover:underline">apps@thepolyhistor.com</a>.
            </p>
          </section>

          {/* 8. Changes to Our Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Changes to Our Privacy Policy</h2>
            <p>
              It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users&apos; personal information, we will notify you through an in-app alert or via email. The date the privacy policy was last revised is identified at the top of the page.
            </p>
          </section>

          {/* 9. Contact Information */}
          <section className="mb-8 border-t border-slate-200 pt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at: ThePolyhistor LLC <br /> Email: <a href="mailto:apps@thepolyhistor.com" className="text-brand-blue hover:underline">apps@thepolyhistor.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
