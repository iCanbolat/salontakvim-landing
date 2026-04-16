import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageShellProps = {
  title: string;
  description: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalPageShell({
  title,
  description,
  lastUpdated,
  children,
}: LegalPageShellProps) {
  return (
    <div className="min-h-screen bg-(--background) text-(--foreground)">
      <header className="border-b border-(--border) bg-(--background)">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
          <Link className="flex items-center gap-3" href="/">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-(--primary) font-semibold text-(--primary-foreground)">
              C
            </div>
            <div>
              <p className="text-base font-semibold">Careify</p>
              <p className="text-xs text-(--muted-foreground)">Legal Center</p>
            </div>
          </Link>

          <nav className="flex items-center gap-4 text-xs text-(--muted-foreground) sm:gap-6 sm:text-sm">
            <Link
              className="transition hover:text-(--foreground)"
              href="/terms-of-service"
            >
              Terms
            </Link>
            <Link
              className="transition hover:text-(--foreground)"
              href="/privacy-policy"
            >
              Privacy
            </Link>
            <Link
              className="transition hover:text-(--foreground)"
              href="/refund-policy"
            >
              Refunds
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-10 sm:py-14">
        <section className="rounded-3xl border border-(--border) bg-(--card) p-6 shadow-sm sm:p-8">
          <div className="space-y-3 border-b border-(--border) pb-6">
            <p className="text-xs uppercase tracking-widest text-(--muted-foreground)">
              Legal Policy
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h1>
            <p className="max-w-3xl text-sm leading-6 text-(--muted-foreground)">
              {description}
            </p>
            <p className="text-xs text-(--muted-foreground)">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="space-y-8 pt-6 text-sm leading-7 text-(--foreground)">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}
