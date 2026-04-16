import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "../components/legal-page-shell";

export const metadata: Metadata = {
  title: "Refund Policy | Careify",
  description:
    "Careify refund terms for subscriptions, billing cycles, and cancellation requests.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPageShell
      title="Refund Policy"
      description="This policy explains when subscription payments may be refunded and how to request a refund from Careify."
      lastUpdated="April 16, 2026"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Scope</h2>
        <p>
          This Refund Policy applies to paid subscriptions and add-on services
          purchased directly from Careify.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Trial and First Purchase</h2>
        <p>
          If a free trial is offered, you may cancel before trial end to avoid
          charges.
        </p>
        <p>
          For first-time subscription payments, refund requests may be
          considered within 14 days of payment date, provided there is no
          substantial product usage.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Renewal Charges</h2>
        <p>
          Subscription renewals are generally non-refundable once processed. You
          can prevent renewal charges by canceling before the next billing date.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Non-Refundable Items</h2>
        <p>The following are non-refundable unless required by law:</p>
        <ul className="list-disc space-y-1 pl-5 text-(--muted-foreground)">
          <li>Partially used billing periods.</li>
          <li>One-time setup or onboarding services already delivered.</li>
          <li>Third-party fees or taxes charged by payment processors.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. How to Request a Refund</h2>
        <p>
          To request a refund, contact us at{" "}
          <a
            className="text-(--primary) underline"
            href="mailto:hello@careify.com"
          >
            hello@careify.com
          </a>{" "}
          and include:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-(--muted-foreground)">
          <li>Your account email.</li>
          <li>Invoice number or transaction reference.</li>
          <li>Reason for the request.</li>
        </ul>
        <p>
          We review requests within 5 business days. If approved, refunds are
          returned to the original payment method.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Chargebacks</h2>
        <p>
          Before initiating a chargeback, please contact our support team so we
          can investigate and resolve the issue quickly.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Policy Changes</h2>
        <p>
          We may update this policy periodically. Updates are published on this
          page with an updated effective date.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Related Documents</h2>
        <p>
          Please also review our{" "}
          <Link className="text-(--primary) underline" href="/terms-of-service">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="text-(--primary) underline" href="/privacy-policy">
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </LegalPageShell>
  );
}
