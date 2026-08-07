export const metadata = {
  title: "Terms of Service | [Company Name]",
  description: "Terms of Service for [Company Name].",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold text-brand-dark mb-8">
          Terms of Service
        </h1>

        <p className="text-gray-600 mb-8">
          Last updated: August 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-8">

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Acceptance
            </h2>

            <p>
              By accessing this website, you agree to these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Website Content
            </h2>

            <p>
              All designs, images, text, graphics, branding, and other content
              displayed on this website are the property of RC Architecture +
              Design unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Permitted Use
            </h2>

            <p>You agree not to:</p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Copy website content without permission.</li>
              <li>Attempt unauthorized access to our systems.</li>
              <li>Use the contact form for spam or unlawful purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Disclaimer
            </h2>

            <p>
              Information presented on this website is provided for general
              informational purposes only and may be updated without prior
              notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Limitation of Liability
            </h2>

            <p>
              [Company Name] shall not be liable for any indirect,
              incidental, or consequential damages arising from the use of this
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Changes
            </h2>

            <p>
              We reserve the right to update these Terms of Service at any time.
              Continued use of the website constitutes acceptance of any
              revisions.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}