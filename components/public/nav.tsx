"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function PublicNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-primary">
          HoodBachi
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground">
          <Link href="/menu" className="hover:text-primary">Menu</Link>
          <Link href="/schedule" className="hover:text-primary">Schedule</Link>
          <Link href="/gallery" className="hover:text-primary">Gallery</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
          <a href="tel:+13136298567" className="hover:text-primary">Call</a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            {open && (
              <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setOpen(false)}>
                <div className="absolute right-0 top-0 h-full w-64 bg-background p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
                  <Button variant="ghost" size="icon" className="mb-6" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                  <div className="flex flex-col gap-4 text-base font-medium">
                    <Link href="/menu" onClick={() => setOpen(false)}>Menu</Link>
                    <Link href="/schedule" onClick={() => setOpen(false)}>Schedule</Link>
                    <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
                    <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
                    <a href="tel:+13136298567" onClick={() => setOpen(false)}>Call</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
