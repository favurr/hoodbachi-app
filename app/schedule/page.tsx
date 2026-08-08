import { Card } from "@/components/ui/card";
import { Map, MapMarker, MarkerContent, MarkerPopup, MapControls } from "@/components/ui/map";

const LOCATION = {
  name: "HoodBachi Grill",
  address: "21509 Fenkell Ave, Detroit, MI",
  phone: "(313) 629-8567",
  hours: "Wed–Sat 12:00 PM – 7:30 PM",
  lng: -83.253264,
  lat: 42.400295,
};

export default function SchedulePage() {
  return (
    <section className="flex flex-1 flex-col bg-background">
      <div className="mx-auto max-w-6xl px-4 py-24 w-full">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Find Us
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Schedule
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Catch the truck around Detroit this week, or plan your catering drop-off.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 h-105 w-full overflow-hidden rounded-xl border border-border">
            <Map center={[LOCATION.lng, LOCATION.lat]} zoom={9}>
              <MapControls />
              <MapMarker longitude={LOCATION.lng} latitude={LOCATION.lat}>
                <MarkerContent>
                  <div className="bg-primary size-5 rounded-full border-2 border-white shadow-lg" />
                </MarkerContent>
                <MarkerPopup>
                  <div className="space-y-1">
                    <p className="text-foreground font-medium">{LOCATION.name}</p>
                    <p className="text-muted-foreground text-xs">{LOCATION.address}</p>
                    <p className="text-muted-foreground text-xs">{LOCATION.hours}</p>
                    <p className="text-muted-foreground text-xs">{LOCATION.phone}</p>
                  </div>
                </MarkerPopup>
              </MapMarker>
            </Map>
          </div>

          
    <Card className="h-80 p-0 overflow-hidden">
      <Map center={[-74.006, 40.7128]} zoom={11}>
        <MapControls />
      </Map>
    </Card>

          <div className="space-y-4">
            <div className="rounded-xl border border-border p-5">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Location</p>
              <p className="mt-2 font-medium text-foreground">{LOCATION.address}</p>
            </div>
            <div className="rounded-xl border border-border p-5">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Hours</p>
              <p className="mt-2 font-medium text-foreground">{LOCATION.hours}</p>
            </div>
            <div className="rounded-xl border border-border p-5">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Call</p>
              <a href={`tel:${LOCATION.phone.replace(/[^0-9]/g, "")}`} className="mt-2 block font-medium text-foreground hover:text-primary">
                {LOCATION.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
