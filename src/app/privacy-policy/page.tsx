export const metadata = {
  title: "Privacy Policy | RC Architecture + Design",
  description: "Privacy Policy for [Clients Companys Name]",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold text-brand-dark mb-8">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-8">
          Last updated: August 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-8">

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Introduction
            </h2>

            <p>
                [Cmpany Name] respects your privacy. This Privacy
              Policy explains how we collect, use, and protect the information
              you provide through this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Information We Collect
            </h2>

            <p>When you submit our contact form, we may collect:</p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Project details or inquiry</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              How We Use Your Information
            </h2>

            <p>Your information is used solely to:</p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Respond to your inquiries.</li>
              <li>Provide architectural consultation.</li>
              <li>Communicate regarding requested services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Data Protection
            </h2>

            <p>
              We implement appropriate technical and organizational measures to
              protect your information against unauthorized access, disclosure,
              alteration, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Third-Party Services
            </h2>

            <p>
              This website uses trusted third-party services such as Resend for
              email delivery and Cloudflare Turnstile to protect against spam
              submissions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Contact
            </h2>

            <p>
              If you have questions regarding this Privacy Policy, please
              contact [Company Name] through the contact information
              provided on this website.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}