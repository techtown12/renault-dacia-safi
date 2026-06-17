"use client";

import Link from "next/link";
import { useTranslations } from "@/i18n";

export default function NotFound() {
  const t = useTranslations();
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"
      />
      <div className="text-[14rem] font-extrabold leading-none tracking-tighter text-primary/10 sm:text-[18rem]">
        404
      </div>
      <h1 className="-mt-12 text-3xl font-bold text-primary sm:text-4xl">
        {t.notFound.title}
      </h1>
      <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
        {t.notFound.description}
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-700 hover:shadow-xl"
      >
        {t.notFound.back}
      </Link>
    </main>
  );
}
