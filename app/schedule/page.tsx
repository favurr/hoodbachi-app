"use client";

import { PublicNav } from "@/components/public/nav";
import { Map, MapMarker, MarkerContent, MarkerPopup, MapControls } from "@/components/ui/map";

const LOCATION = {
  name: "HoodBachi Grill",
  address: "21509 Fenkell Ave, Detroit, MI",
  phone: "(313) 629-8567",
  hours: "Wed–Sat 12:00 PM – 7:30 PM",
  lng: -83.1532,
  lat: 42.4296,
};

export default function SchedulePage() {
  return (
    <section className="flex flex-1 flex-col bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 w-full">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">Schedule</h1>
        <p className="mt-3 text-muted-foreground">Find us around Detroit this week.</p>

        <div className="mt-8 h-[420px] w-full overflow-hidden rounded-lg border border-border">
          <Map center={[LOCATION.lng, LOCATION.lat]} zoom={13}>
            <MapControls />
            <MapMarker longitude={LOCATION.lng} latitude={LOCATION.lat}>
              <MarkerContent>
                <div className="bg-primary size-4 rounded-full border-2 border-white shadow-lg" />
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

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border p-4">
            <p className="font-semibold">Location</p>
            <p className="text-sm text-muted-foreground">{LOCATION.address}</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="font-semibold">Hours</p>
            <p className="text-sm text-muted-foreground">{LOCATION.hours}</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="font-semibold">Call</p>
            <p className="text-sm text-muted-foreground">{LOCATION.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
