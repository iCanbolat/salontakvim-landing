"use client";

import { useMemo, useState } from "react";

type BillingCycle = "monthly" | "annual";
type PlanKey = "starter" | "pro" | "enterprise";

interface PlanCard {
  key: PlanKey;
  name: string;
  desc: string;
  monthlyPrice: string;
  annualPrice: string;
  features: string[];
  highlight?: boolean;
}

const plans: PlanCard[] = [
  {
    key: "starter",
    name: "Starter",
    desc: "For small teams getting started",
    monthlyPrice: "$39",
    annualPrice: "$29",
    features: [
      "Digital appointment management",
      "Customizable booking widget",
      "Customer management (CRM)",
      "SMS & Email reminders",
      "Basic reporting",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    desc: "For growing businesses with advanced needs",
    monthlyPrice: "$59",
    annualPrice: "$45",
    features: [
      "Everything in Starter",
      "Advanced service/staff management",
      "Smart conflict check",
      "Coupons and promotions",
      "Detailed performance analytics",
      "Multiple staff calendars",
    ],
    highlight: true,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    desc: "For multi-location and custom operational workflows",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: [
      "Multi-location support",
      "Role-based permissions",
      "Custom data migration",
      "Dedicated account manager",
      "Custom integrations & API",
      "Advanced security features",
    ],
  },
];

function buildRegisterHref(
  registerUrl: string,
  plan: PlanKey,
  billingCycle: BillingCycle,
): string {
  const url = new URL(registerUrl);
  url.searchParams.set("plan", plan);
  url.searchParams.set("billing", billingCycle);
  return url.toString();
}

export function PricingSection({ registerUrl }: { registerUrl: string }) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const billingCopy = useMemo(
    () =>
      billingCycle === "monthly"
        ? "Billed monthly"
        : "Billed annually (best value)",
    [billingCycle],
  );

  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="text-sm uppercase tracking-widest text-(--muted-foreground)">
          Pricing
        </p>
        <h2 className="mt-4 text-3xl font-semibold">
          Simple, transparent pricing
        </h2>
        <p className="mt-2 text-sm text-(--muted-foreground)">{billingCopy}</p>

        <div
          role="radiogroup"
          aria-label="Billing period"
          className="mt-8 inline-flex rounded-full border border-(--border) bg-(--background) p-1"
        >
          <button
            type="button"
            role="radio"
            aria-checked={billingCycle === "monthly"}
            onClick={() => setBillingCycle("monthly")}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
              billingCycle === "monthly"
                ? "bg-(--primary) text-(--primary-foreground)"
                : "text-(--muted-foreground) hover:text-(--foreground)"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={billingCycle === "annual"}
            onClick={() => setBillingCycle("annual")}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
              billingCycle === "annual"
                ? "bg-(--primary) text-(--primary-foreground)"
                : "text-(--muted-foreground) hover:text-(--foreground)"
            }`}
          >
            Annual
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const isEnterprise = plan.key === "enterprise";
          const showComparison = !isEnterprise && billingCycle === "annual";

          return (
            <div
              key={plan.name}
              className={`flex h-full flex-col rounded-3xl border border-(--border) p-6 shadow-sm ${
                plan.highlight
                  ? "bg-(--primary) text-(--primary-foreground)"
                  : "bg-(--card)"
              }`}
            >
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-widest opacity-80">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-semibold">
                    {isEnterprise
                      ? "Custom"
                      : billingCycle === "monthly"
                        ? plan.monthlyPrice
                        : plan.annualPrice}
                  </p>
                  {showComparison && (
                    <span className="text-lg line-through opacity-50">
                      {plan.monthlyPrice}
                    </span>
                  )}
                </div>
                <p className="text-sm opacity-80">{plan.desc}</p>
              </div>

              <ul className="my-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-(--accent)" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                className={`mt-auto inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition ${
                  plan.highlight
                    ? "bg-(--background) text-(--foreground)"
                    : "bg-(--primary) text-(--primary-foreground)"
                }`}
                href={buildRegisterHref(registerUrl, plan.key, billingCycle)}
              >
                {plan.key === "enterprise"
                  ? "Sign up for Enterprise"
                  : "Sign up and continue"}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
