export default function MenuPage() {
  return (
    <section className="flex flex-1 flex-col bg-background">
      <div className="mx-auto max-w-6xl px-4 py-24 w-full">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            The Menu
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Hibachi, made fresh
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Bowls, plates, and sides grilled to order with halal ingredients.
          </p>
        </div>

        <div className="mt-12 rounded-xl border border-border p-10 text-center text-sm text-muted-foreground">
          Full menu coming soon.
        </div>
      </div>
    </section>
  );
}
