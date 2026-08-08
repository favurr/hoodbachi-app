"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(contentRef.current?.children || [], 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.12,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative flex min-h-[calc(100vh-4rem)] flex-col bg-background">
      <div className="absolute inset-0 bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900" />
      
      <div className="relative mx-auto max-w-6xl px-4 py-32 w-full flex-1 flex items-center">
        <div ref={contentRef} className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <p className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-red-600 border border-red-600/20 rounded-full px-4 py-1.5">
              Detroit Halal Hibachi
            </p>
            <h1 className="text-6xl font-bold tracking-tight font-serif text-foreground md:text-8xl leading-[0.95]">
              HoodBachi
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl max-w-2xl leading-relaxed">
              Premium <span>hibachi</span> grilled to order. Fresh ingredients, bold flavors, served around Detroit.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/schedule">
              <Button size="lg" className="h-12 px-8 text-base">
                Find the Truck
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                Book Catering
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Location</p>
              <p className="text-sm font-medium text-foreground">21509 Fenkell Ave</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Hours</p>
              <p className="text-sm font-medium text-foreground">Wed–Sat 12–7:30 PM</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Call</p>
              <a href="tel:+13136298567" className="text-sm font-medium text-foreground hover:text-primary">
                (313) 629-8567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
