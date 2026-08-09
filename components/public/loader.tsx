"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function PageLoader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current?.children || [],
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
        HoodBachi
      </p>
      <p className="mt-2 text-xs text-muted-foreground">Loading...</p>
    </div>
  );
}
