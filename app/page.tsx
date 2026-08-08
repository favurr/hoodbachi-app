import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col bg-background">
      <div className="mx-auto max-w-6xl px-4 py-24 w-full">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Detroit Halal Hibachi
          </p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            HoodBachi Grill
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Fresh hibachi grilled to order. Find us around the city.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/schedule">
              <Button size="lg">Find the Truck</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Catering Request</Button>
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span>21509 Fenkell Ave, Detroit, MI</span>
            <span aria-hidden="true">•</span>
            <a href="tel:+13136298567" className="hover:text-foreground">
              (313) 629-8567
            </a>
            <span aria-hidden="true">•</span>
            <span>Wed–Sat 12:00 PM – 7:30 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
