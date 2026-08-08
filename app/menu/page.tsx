import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MENU_HIGHLIGHTS = [
  {
    title: "Chef's Hibachi Bowl",
    description: "Premium cuts, seasonal vegetables, fried rice, house sauce.",
    price: "$18.99",
  },
  {
    title: "Chicken Hibachi Plate",
    description: "Marinated chicken, grilled vegetables, noodles, soup.",
    price: "$15.99",
  },
  {
    title: "Shrimp & Steak Combo",
    description: "Layered steak and shrimp, garlic butter, fried rice.",
    price: "$22.99",
  },
];

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

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {MENU_HIGHLIGHTS.map((item) => (
            <Card key={item.title} className="border-border/70">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                <p className="text-sm font-semibold text-foreground">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Full menu available at the truck.
          </p>
        </div>
      </div>
    </section>
  );
}
