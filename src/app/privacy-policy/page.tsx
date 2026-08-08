"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20">
        <Link
          href="/"
          className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-brand-dark transition hover:bg-gray-100"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-6 md:mb-8 text-3xl md:text-4xl font-bold text-brand-dark leading-tight">
          Privacy Policy
        </h1>

        <p className="mb-6 md:mb-8 text-gray-600 text-sm md:text-base">
          Last updated: August 2026
        </p>

        <div className="space-y-6 md:space-y-8 text-gray-700 leading-relaxed md:leading-8 text-sm md:text-base">
          <section>
            <h2 className="mb-3 text-xl md:text-2xl font-semibold text-brand-dark">
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