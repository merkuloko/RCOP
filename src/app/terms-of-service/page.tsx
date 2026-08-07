"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20">

        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-brand-dark transition hover:bg-gray-100"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-8 text-4xl font-bold text-brand-dark">
          Terms of Service
        </h1>

        <p className="mb-8 text-gray-600">
          Last updated: August 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-8">

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-brand-dark">
              Acceptance
            </h2>

            <p>
              By accessing this website, you agree to these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-brand-dark">
              Website Content
            </h2>

            <p>
              All designs, images, text, graphics, branding, and other content
              displayed on this website are the property of [Company Name] unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-brand-dark">
              Permitted Use
            </h2>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Copy website content without permission.</li>
              <li>Attempt unauthorized access to our systems.</li>
              <li>Use the contact form for spam or unlawful purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-brand-dark">
              Disclaimer
            </h2>

            <p>
              Information presented on this website is provided for general
              informational purposes only and may be updated without prior notice.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-brand-dark">
              Limitation of Liability
            </h2>

            <p>
              [Company Name] shall not be liable for any indirect,
              incidental, or consequential damages arising from the use of this
              website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-brand-dark">
              Changes
            </h2>

            <p>
              We reserve the right to update these Terms of Service at any time.
              Continued use of this website constitutes acceptance of any revisions.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}