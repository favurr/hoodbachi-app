import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="relative flex flex-1 flex-col items-center justify-center bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Detroit&apos;s Halal Hibachi Food Truck
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Fresh hibachi grilled to order. Find us around the city.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button>
            <Link href="/schedule">View Today&apos;s Schedule</Link>
          </Button>
          <Button variant="outline">
            <Link href="/contact">Catering Request</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
