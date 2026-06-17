"use client";

import { useTranslations } from "@/i18n";

const servicesIcons: Record<string, React.ReactNode> = {
  car: (
    <>
      <path d="M5 17h14M5 17a2 2 0 01-2-2v-3l2-5a2 2 0 011.9-1.4h10.2A2 2 0 0119 7l2 5v3a2 2 0 01-2 2M5 17v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2M19 17v2a1 1 0 001 1h1a1 1 0 001-1v-2M7 13h10" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  wallet: (
    <>
      <path d="M20 12V8H6a2 2 0 010-4h12v4" />
      <path d="M4 6v12a2 2 0 002 2h14v-4" />
      <path d="M18 12a2 2 0 000 4h4v-4z" />
    </>
  ),
  refresh: (
    <>
      <path d="M21 12a9 9 0 11-3-6.7L21 8" />
      <path d="M21 3v5h-5" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.4 2.4-2.6-2.6z" />
    </>
  ),
};

export default function ServicesSection() {
  const t = useTranslations();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50/30 via-background to-background px-5 py-24 sm:py-28 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Services
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.services.subtitle}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(t.services.items).map(([key, item], idx) => {
            const icon = servicesIcons[key as keyof typeof servicesIcons];
            return (
              <div
                key={key}
                className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 sm:p-8"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150 group-hover:bg-primary/10"
                />

                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-700 text-white shadow-lg shadow-primary/30 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <svg
                      className="h-7 w-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {icon}
                    </svg>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-primary sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary-300 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
