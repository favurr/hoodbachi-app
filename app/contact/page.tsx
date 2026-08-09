"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-1 flex-col bg-background">
      <div className="mx-auto max-w-6xl px-4 py-24 w-full">
        <div ref={contentRef} className="max-w-3xl space-y-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Catering & events
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Tell us about your event. We handle the grill, the menu, and the cleanup.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Event type, date, guest count..." className="min-h-[140px]" />
              </div>
              <Button type="submit" size="lg" className="w-full">Send Request</Button>
            </form>

            <div className="space-y-6 rounded-xl border border-border p-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Truck</p>
                <p className="mt-2 font-medium text-foreground">21509 Fenkell Ave, Detroit, MI</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                <a href="tel:+13136298567" className="mt-2 block font-medium text-foreground hover:text-primary">
                  (313) 629-8567
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Hours</p>
                <p className="mt-2 font-medium text-foreground">Wed–Sat 12:00 PM – 7:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
