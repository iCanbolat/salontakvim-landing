import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "../components/legal-page-shell";

export const metadata: Metadata = {
  title: "Terms of Service | Careify",
  description:
    "Terms and conditions governing the use of Careify's appointment and business management platform.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageShell
      title="Terms of Service"
      description="These Terms of Service define your rights and obligations when using Careify products, services, and website."
      lastUpdated="April 16, 2026"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Careify, you agree to be bound by these Terms of
          Service and our{" "}
          <Link className="text-(--primary) underline" href="/privacy-policy">
            Privacy Policy
          </Link>
          . If you do not agree, you must not use the platform.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Services We Provide</h2>
        <p>
          Careify provides appointment scheduling, staff planning, customer
          communication tools, reporting, and related features for
          appointment-based businesses.
        </p>
        <p>
          We may add, remove, or modify features from time to time to improve
          quality, security, and compliance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Account Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activity under your account.
        </p>
        <p>
          You agree to provide accurate information and keep it up to date,
          including billing details and contact information.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Billing and Subscriptions</h2>
        <p>
          Some Careify features require a paid subscription. Fees, billing
          cycles, and payment methods are shown at checkout.
        </p>
        <p>
          Unless otherwise stated, subscriptions renew automatically at the end
          of each billing cycle.
        </p>
        <p>
          Refund terms are described in our{" "}
          <Link className="text-(--primary) underline" href="/refund-policy">
            Refund Policy
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-1 pl-5 text-(--muted-foreground)">
          <li>
            Use the service for unlawful, fraudulent, or abusive purposes.
          </li>
          <li>Attempt unauthorized access to systems or other accounts.</li>
          <li>
            Interfere with service performance, security controls, or
            availability.
          </li>
          <li>
            Upload malware, harmful code, or content that violates third-party
            rights.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Intellectual Property</h2>
        <p>
          Careify and related branding, software, and content are owned by
          Careify or its licensors and protected by intellectual property laws.
        </p>
        <p>
          We grant you a limited, non-exclusive, non-transferable right to use
          the service while your account is active and compliant.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Service Availability</h2>
        <p>
          We aim for high availability but do not guarantee uninterrupted
          access. Planned maintenance or external factors may affect uptime.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Careify is not liable for
          indirect, incidental, special, or consequential damages, including
          loss of profits, data, or goodwill.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Termination</h2>
        <p>
          You may stop using the service at any time. We may suspend or
          terminate access if you violate these terms or applicable law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Changes to These Terms</h2>
        <p>
          We may update these terms periodically. Material changes will be
          published on this page with an updated revision date.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Contact</h2>
        <p>
          For legal questions, contact us at{" "}
          <a
            className="text-(--primary) underline"
            href="mailto:hello@careify.com"
          >
            hello@careify.com
          </a>
          .
        </p>
      </section>
    </LegalPageShell>
  );
}
