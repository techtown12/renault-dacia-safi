"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "@/i18n";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const formatPrice = (n: number, locale: "fr" | "ar") => {
  if (locale === "ar") {
    return n.toLocaleString("ar-MA");
  }
  return n.toLocaleString("fr-MA");
};

export default function VehiclesSection() {
  const t = useTranslations();
  const { locale, pick } = useLocale();
  const [activeFilter, setActiveFilter] = useState<"all" | "Dacia" | "Renault">(
    "all"
  );

  const brands: Array<"all" | "Dacia" | "Renault"> = [
    "all",
    "Dacia",
    "Renault",
  ];

  const brandLabels: Record<"all" | "Dacia" | "Renault", { fr: string; ar: string }> = {
    all: { fr: "Tous", ar: "الكل" },
    Dacia: { fr: "Dacia", ar: "داسيا" },
    Renault: { fr: "Renault", ar: "رينو" },
  };

  const filtered =
    activeFilter === "all"
      ? siteConfig.vehicles
      : siteConfig.vehicles.filter((v) => v.brand === activeFilter);

  return (
    <section
      id="vehicles"
      className="bg-background px-5 py-24 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            2026
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            {t.vehicles.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.vehicles.subtitle}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {brands.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setActiveFilter(b)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-all",
                activeFilter === b
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "border border-border bg-white text-foreground hover:border-primary hover:bg-primary hover:text-white"
              )}
            >
              {pick(brandLabels[b])}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((vehicle, idx) => (
            <article
              key={vehicle.key}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-accent-100">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${vehicle.image})` }}
                  aria-label={vehicle.name}
                  role="img"
                />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md",
                      vehicle.brand === "Renault"
                        ? "bg-primary"
                        : "bg-accent-700"
                    )}
                  >
                    {vehicle.brand}
                  </span>
                  <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-md">
                    {vehicle.year}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary sm:text-2xl">
                  {vehicle.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {pick(vehicle.category)}
                </p>

                <ul className="mt-5 grid grid-cols-2 gap-3 border-y border-border py-4 text-xs">
                  <li className="flex flex-col gap-0.5">
                    <span className="font-bold uppercase tracking-wide text-muted-foreground">
                      {t.vehicles.specs.fuel}
                    </span>
                    <span className="font-semibold text-foreground">
                      {pick(vehicle.fuel)}
                    </span>
                  </li>
                  <li className="flex flex-col gap-0.5">
                    <span className="font-bold uppercase tracking-wide text-muted-foreground">
                      {t.vehicles.specs.transmission}
                    </span>
                    <span className="font-semibold text-foreground">
                      {pick(vehicle.transmission)}
                    </span>
                  </li>
                  <li className="flex flex-col gap-0.5">
                    <span className="font-bold uppercase tracking-wide text-muted-foreground">
                      {t.vehicles.specs.power}
                    </span>
                    <span className="font-semibold text-foreground" dir="ltr">
                      {vehicle.power}
                    </span>
                  </li>
                  <li className="flex flex-col gap-0.5">
                    <span className="font-bold uppercase tracking-wide text-muted-foreground">
                      {t.vehicles.specs.year}
                    </span>
                    <span className="font-semibold text-foreground" dir="ltr">
                      {vehicle.year}
                    </span>
                  </li>
                </ul>

                <div className="mt-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {t.vehicles.from}
                    </p>
                    <p className="mt-0.5 flex items-baseline gap-1">
                      <span
                        className="text-2xl font-black text-primary sm:text-3xl"
                        dir="ltr"
                      >
                        {formatPrice(vehicle.price, locale)}
                      </span>
                      <span className="text-sm font-bold text-primary">
                        MAD
                      </span>
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground">
                      {t.vehicles.credit}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-primary/30 transition hover:bg-primary-700 hover:shadow-primary/50"
                  >
                    {t.vehicles.testDrive}
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-white px-7 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg"
          >
            {t.vehicles.cta}
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
