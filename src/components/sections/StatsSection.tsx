"use client";

import { useTranslations } from "@/i18n";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ReactNode> = {
  car: (
    <path d="M5 17h14M5 17a2 2 0 01-2-2v-3l2-5a2 2 0 011.9-1.4h10.2A2 2 0 0119 7l2 5v3a2 2 0 01-2 2M5 17v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2M19 17v2a1 1 0 001 1h1a1 1 0 001-1v-2M7 13h10" />
  ),
  trending: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </>
  ),
};

export default function StatsSection() {
  const t = useTranslations();

  return (
    <section
      id="stats"
      className="relative -mt-16 z-10 px-5 sm:-mt-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-primary/15 ring-1 ring-border">
          <div className="border-b border-border bg-gradient-to-r from-primary-50 to-primary-100/60 px-6 py-6 text-center sm:px-10 sm:py-8">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              {t.stats.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              {t.stats.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 divide-x divide-y divide-border lg:grid-cols-4 lg:divide-y-0">
            {siteConfig.stats.map((stat, idx) => (
              <div
                key={stat.key}
                className="group relative p-6 transition-colors hover:bg-primary-50/40 sm:p-8"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {iconMap[stat.icon]}
                  </svg>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-primary sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="text-lg font-bold text-accent-600 sm:text-xl">
                    {stat.suffix}
                  </span>
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm">
                  {
                    t.stats.items[
                      stat.key as keyof typeof t.stats.items
                    ]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
