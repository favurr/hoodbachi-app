"use client";

import { PublicNav } from "@/components/public/nav";

export default function ContactPage() {
  return (
    <section className="flex flex-1 flex-col bg-background">
      <PublicNav />
      <div className="mx-auto max-w-6xl px-4 py-20 w-full">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">Contact</h1>
        <p className="mt-3 text-muted-foreground">Catering and event requests.</p>
        <div className="mt-8 rounded-lg border border-border p-8 text-center text-sm text-muted-foreground">
          Contact form coming soon.
        </div>
      </div>
    </section>
  );
}
