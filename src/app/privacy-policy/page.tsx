"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>

        <p className="mb-8 text-gray-600">
          Last updated: August 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-8">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-brand-dark">
              Introduction
            </h2>

            <p>
              [Company Name] respects your privacy. This Privacy
              Policy explains how we collect, use, and protect the information
              you provide through this website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-brand-dark">
              Information We Collect
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Project details or inquiry</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-brand-dark">
              Contact
            </h2>

            <p>
              If you have questions regarding this Privacy Policy, please
              contact [Company Name] through the contact information
              available on this website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}