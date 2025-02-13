import type { Metadata } from "next";
import EventsPage from "./_components/EventsPage";

export const metadata: Metadata = {
  title: "Eventos",
};

export default async function Events() {
  return <EventsPage />;
}


export const dynamic = "force-static";
