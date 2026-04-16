import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "../components/legal-page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy | Careify",
  description:
    "How Careify collects, uses, stores, and protects personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      description="This Privacy Policy explains how Careify handles personal data when you use our website and appointment management platform."
      lastUpdated="April 16, 2026"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p>We may collect the following categories of data:</p>
        <ul className="list-disc space-y-1 pl-5 text-(--muted-foreground)">
          <li>
            Account data such as name, email address, phone number, and company
            details.
          </li>
          <li>
            Booking and customer records you create and manage through the
            platform.
          </li>
          <li>
            Payment-related metadata provided by payment processors (we do not
            store full card details).
          </li>
          <li>
            Usage and technical data such as browser type, device information,
            and log events.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How We Use Information</h2>
        <p>We use personal information to:</p>
        <ul className="list-disc space-y-1 pl-5 text-(--muted-foreground)">
          <li>Provide and maintain Careify services.</li>
          <li>Process bookings, reminders, and operational workflows.</li>
          <li>Provide support, account notifications, and service updates.</li>
          <li>Improve platform performance, reliability, and security.</li>
          <li>Meet legal, tax, and regulatory obligations.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Legal Bases and Permissions
        </h2>
        <p>
          Where required by applicable law, we process personal data based on
          contract performance, legitimate interests, legal obligations, or your
          consent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Data Sharing</h2>
        <p>We may share data with trusted third parties, including:</p>
        <ul className="list-disc space-y-1 pl-5 text-(--muted-foreground)">
          <li>Cloud hosting and infrastructure providers.</li>
          <li>Payment providers and invoicing services.</li>
          <li>Email and SMS delivery providers.</li>
          <li>Analytics, monitoring, and fraud prevention services.</li>
        </ul>
        <p>
          These providers are contractually required to handle data securely and
          only for authorized purposes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Data Retention</h2>
        <p>
          We retain personal data as long as needed to provide services, comply
          with legal obligations, resolve disputes, and enforce agreements.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Security</h2>
        <p>
          We use administrative, technical, and physical safeguards designed to
          protect personal data from unauthorized access, disclosure,
          modification, or destruction.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have rights to access,
          correct, delete, restrict, or export personal data, and to object to
          certain processing activities.
        </p>
        <p>
          You can submit requests by emailing{" "}
          <a
            className="text-(--primary) underline"
            href="mailto:hello@careify.com"
          >
            hello@careify.com
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Cookies and Tracking</h2>
        <p>
          We may use cookies and similar technologies for authentication,
          performance analytics, and product improvements.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Children&apos;s Privacy</h2>
        <p>
          Careify is not directed to children under 13. We do not knowingly
          collect personal data from children under 13.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Updates to This Policy</h2>
        <p>
          We may revise this Privacy Policy from time to time. Updated versions
          will be posted on this page with a revised "Last updated" date.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Related Policies</h2>
        <p>
          For account and billing conditions, see our{" "}
          <Link className="text-(--primary) underline" href="/terms-of-service">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="text-(--primary) underline" href="/refund-policy">
            Refund Policy
          </Link>
          .
        </p>
      </section>
    </LegalPageShell>
  );
}
