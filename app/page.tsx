import { StackingFeatures } from "./components/stacking-features";
import { InteractiveAdminTour } from "./components/admin-tour/interactive-admin-tour";
import { PricingSection } from "./components/pricing-section";

export default function Home() {
  const clientBaseUrl =
    process.env.NEXT_PUBLIC_CLIENT_URL || "http://localhost:3000";
  const loginUrl = `${clientBaseUrl}/login`;
  const registerUrl = `${clientBaseUrl}/register`;

  return (
    <div className="min-h-screen bg-(--background) text-(--foreground)">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-(--primary) text-(--primary-foreground) font-semibold">
            ST
          </div>
          <div>
            <p className="text-lg font-semibold">SalonTakvim</p>
            <p className="text-xs text-(--muted-foreground)">
              Appointment and business management
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-(--muted-foreground) md:flex">
          <a className="transition hover:text-(--foreground)" href="#features">
            Features
          </a>
          <a className="transition hover:text-(--foreground)" href="#workflow">
            How it works
          </a>
          <a className="transition hover:text-(--foreground)" href="#pricing">
            Pricing
          </a>
          <a className="transition hover:text-(--foreground)" href="#cta">
            Demo
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden rounded-full border border-(--border) px-4 py-2 text-sm font-semibold text-(--foreground) transition hover:bg-(--accent) sm:inline-flex"
            href={loginUrl}
          >
            Login
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full bg-(--primary) px-5 py-2 text-sm font-semibold text-(--primary-foreground) shadow-md transition hover:opacity-90"
            href={registerUrl}
          >
            Try for free
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-20">
        <section className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2 text-sm text-(--muted-foreground) shadow-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-(--primary)" />
            Single panel for salons and appointment-based businesses
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight text-(--foreground) sm:text-5xl lg:text-6xl">
              Appointments, team, and customer management on one platform.
            </h1>
            <p className="text-lg leading-8 text-(--muted-foreground) sm:text-xl">
              SalonTakvim combines appointment scheduling, staff availability,
              customer notifications, and revenue tracking in one fluid panel.
              Simplify operations while growing your business.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              className="inline-flex items-center justify-center rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-(--primary-foreground) shadow-md transition hover:opacity-90"
              href={registerUrl}
            >
              Start free demo
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-(--border) bg-(--card) px-6 py-3 text-sm font-semibold text-(--foreground) shadow-sm transition hover:bg-(--accent)"
              href={loginUrl}
            >
              See live examples
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-(--border) bg-(--card)/70 p-4 shadow-sm">
              <p className="text-sm text-(--muted-foreground)">
                Appointment Occupancy
              </p>
              <p className="text-2xl font-semibold">92%</p>
            </div>
            <div className="rounded-2xl border border-(--border) bg-(--card)/70 p-4 shadow-sm">
              <p className="text-sm text-(--muted-foreground)">
                Auto Reminders
              </p>
              <p className="text-2xl font-semibold">24h & 1h</p>
            </div>
            <div className="rounded-2xl border border-(--border) bg-(--card)/70 p-4 shadow-sm">
              <p className="text-sm text-(--muted-foreground)">
                Cancellation Drop
              </p>
              <p className="text-2xl font-semibold">-38%</p>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-140">
          <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-(--primary)/35 blur-3xl animate-[blob_18s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[oklch(0.6231_0.188_259.8145/0.25)] blur-3xl animate-[blob_20s_ease-in-out_infinite]" />
          <div className="absolute -bottom-16 -left-6 h-52 w-52 rounded-full bg-[oklch(0.7686_0.1647_70.0804/0.22)] blur-3xl animate-[blob_22s_ease-in-out_infinite]" />

          <div className="relative rounded-[28px] border border-(--border) bg-(--card)/80 p-6 shadow-xl backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-(--muted-foreground)">
                  Today&apos;s Appointments
                </p>
                <p className="text-2xl font-semibold">12 appointments</p>
              </div>
              <div className="rounded-full bg-(--primary)/15 px-3 py-1 text-xs font-semibold text-(--primary)">
                Live
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                {
                  name: "Selin A.",
                  service: "Haircut + Blow Dry",
                  time: "10:30",
                  status: "Confirmed",
                },
                {
                  name: "Mehmet K.",
                  service: "Beard Care",
                  time: "11:15",
                  status: "Reminder sent",
                },
                {
                  name: "Derya T.",
                  service: "Skin Care",
                  time: "12:00",
                  status: "Paid",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-(--border) bg-(--background)/80 px-4 py-3 shadow-sm"
                >
                  <div>
                    <p className="font-medium text-(--foreground)">
                      {item.name}
                    </p>
                    <p className="text-sm text-(--muted-foreground)">
                      {item.service}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-(--foreground)">
                      {item.time}
                    </p>
                    <p className="text-xs text-(--muted-foreground)">
                      {item.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -left-10 top-10 w-48 rounded-2xl border border-(--border) bg-(--background)/80 p-4 shadow-lg backdrop-blur animate-[float_6s_ease-in-out_infinite]">
            <p className="text-xs uppercase text-(--muted-foreground)">
              Reminder
            </p>
            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              SMS sent 24 hours ago
            </p>
          </div>

          <div className="absolute -right-8 top-24 w-52 rounded-2xl border border-(--border) bg-(--background)/80 p-4 shadow-lg backdrop-blur animate-[float_7s_ease-in-out_infinite]">
            <p className="text-xs uppercase text-(--muted-foreground)">
              Revenue
            </p>
            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              Today ₺14,200
            </p>
          </div>

          <div className="absolute right-4 -bottom-10 w-56 rounded-2xl border border-(--border) bg-(--background)/80 p-4 shadow-lg backdrop-blur animate-[float_8s_ease-in-out_infinite]">
            <p className="text-xs uppercase text-(--muted-foreground)">Staff</p>
            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              5 active experts, 96% occupancy
            </p>
          </div>
        </section>
      </main>

      <section id="features" className="mx-auto w-full max-w-6xl px-6 pb-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-widest text-(--muted-foreground)">
            Features
          </p>
          <h2 className="text-3xl font-semibold">
            Unify appointment and operation management in one flow
          </h2>
          <p className="max-w-2xl text-sm text-(--muted-foreground)">
            Manage all processes from customer notifications to staff planning
            with data-driven insights. Make business operations effortless.
          </p>
        </div>
      </section>

      <InteractiveAdminTour />

      <StackingFeatures
        features={[
          {
            key: "planning",
            title: "Smart appointment scheduling",
            description:
              "Manage appointment density seamlessly with fully customizable widget, automatic conflict check, and fast approval flow.",
            highlight: "Saves time",
            accent: "primary",
            images: ["/a1.png", "/a2.png", "/a3.png"],
          },
          {
            key: "team",
            title: "Staff and service management",
            description:
              "Organize team, service packages, and working hours from a single panel, optimize capacity.",
            highlight: "Team performance",
            accent: "indigo",
            images: ["/b1.png", "/b2.png", "/b3.png"],
          },
          {
            key: "communication",
            title: "Customer communication",
            description:
              "SMS/Email reminders reduce cancellations and strengthen customer loyalty.",
            highlight: "Satisfaction increase",
            accent: "amber",
            images: ["/c1.png", "/c2.png"],
          },
        ]}
      />

      <section id="workflow" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-(--border) bg-(--card) p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-3">
              <p className="text-sm uppercase tracking-widest text-(--muted-foreground)">
                How it works
              </p>
              <h2 className="text-3xl font-semibold">
                Digitalize appointment management in 3 steps
              </h2>
              <p className="text-sm text-(--muted-foreground)">
                After setup, add your teams, services, and locations. Receive
                online appointments automatically, manage reminders, and handle
                daily operations from a single panel.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Service & team definition",
                "Online appointment flow",
                "Reminders and reporting",
              ].map((step, idx) => (
                <div
                  key={step}
                  className="rounded-2xl border border-(--border) bg-(--background) p-4 text-sm"
                >
                  <p className="text-xs text-(--muted-foreground)">
                    Step {idx + 1}
                  </p>
                  <p className="mt-2 font-semibold text-(--foreground)">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PricingSection registerUrl={registerUrl} />

      <section id="faq" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-(--border) bg-(--card) p-8 shadow-sm">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest text-(--muted-foreground)">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold">
              Frequently asked questions
            </h2>
            <p className="text-sm text-(--muted-foreground)">
              Quick answers to common questions about SalonTakvim.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[
              {
                q: "How long does setup take?",
                a: "After adding your business info and services, you can start taking appointments within 10 minutes.",
              },
              {
                q: "Can I customize SMS and email reminders?",
                a: "Yes. Templates and sending times can be edited from the management panel.",
              },
              {
                q: "Is there multi-branch management?",
                a: "The Enterprise plan offers multi-location support, role-based permissions, and reporting.",
              },
              {
                q: "Can I migrate my existing customer data?",
                a: "We provide fast data migration with CSV import and team support.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-(--border) bg-(--background) p-5"
              >
                <h3 className="text-base font-semibold text-(--foreground)">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm text-(--muted-foreground)">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-(--border) bg-(--card) p-8 text-center shadow-sm">
          <h2 className="text-3xl font-semibold">
            Start growing your business today
          </h2>
          <p className="mt-3 text-sm text-(--muted-foreground)">
            Move your appointment flow to digital in 10 minutes with a free
            demo.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-(--primary-foreground) shadow-md transition hover:opacity-90">
              Schedule a demo
            </button>
            <button className="rounded-full border border-(--border) px-6 py-3 text-sm font-semibold text-(--foreground) transition hover:bg-(--accent)">
              Contact sales
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-(--border) bg-(--background)">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-(--primary) text-(--primary-foreground) font-semibold">
                ST
              </div>
              <div>
                <p className="text-lg font-semibold">SalonTakvim</p>
                <p className="text-xs text-(--muted-foreground)">
                  Appointment and business management
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm text-(--muted-foreground)">
              Modern solution to accelerate your business in appointment, team,
              and customer management.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-(--foreground)">Product</p>
              <a
                className="block text-(--muted-foreground) hover:text-(--foreground)"
                href="#features"
              >
                Features
              </a>
              <a
                className="block text-(--muted-foreground) hover:text-(--foreground)"
                href="#workflow"
              >
                How it works
              </a>
              <a
                className="block text-(--muted-foreground) hover:text-(--foreground)"
                href="#pricing"
              >
                Pricing
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-(--foreground)">Support</p>
              <a
                className="block text-(--muted-foreground) hover:text-(--foreground)"
                href="#faq"
              >
                FAQ
              </a>
              <a
                className="block text-(--muted-foreground) hover:text-(--foreground)"
                href="#cta"
              >
                Demo
              </a>
              <a
                className="block text-(--muted-foreground) hover:text-(--foreground)"
                href="mailto:destek@salontakvim.com"
              >
                help@salontakvim.com
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-(--foreground)">Legal</p>
              <span className="block text-(--muted-foreground)">
                Privacy Policy
              </span>
              <span className="block text-(--muted-foreground)">
                Terms of Use
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-(--border)">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-(--muted-foreground) md:flex-row md:items-center md:justify-between">
            <span>© 2026 SalonTakvim. All rights reserved.</span>
            <span>Istanbul, Turkey</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
