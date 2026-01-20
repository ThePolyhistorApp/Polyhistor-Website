
import { Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
          Get in Touch
        </h1>
        <p className="text-lg text-slate-600 mb-12 max-w-lg mx-auto">
          Have questions about ThePolyhistor? Whether you're a tour agency looking for a demo or just curious, we're here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Contact Card */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
            <p className="text-slate-500 text-sm mb-4">
              For general inquiries, support, or legal questions.
            </p>
            <a
              href="mailto:apps@thepolyhistor.com"
              className="text-brand-blue font-semibold hover:underline"
            >
              apps@thepolyhistor.com
            </a>
          </div>

          {/* LinkedIn / Social Card */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Social Media</h3>
            <p className="text-slate-500 text-sm mb-4">
              Follow us for updates and industry insights.
            </p>
            <a
              href="https://www.linkedin.com/company/thepolyhistor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 font-semibold hover:text-brand-blue transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Alternative CTA */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to modernize your agency?</h2>
          <p className="text-slate-600 mb-6">
            Join 85+ organizers on the waitlist building the future of safe travel.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-brand-blue text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </main>
  );
}
