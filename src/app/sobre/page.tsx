import type { Metadata } from "next";
import { AboutPage } from "./_components/AboutPage";

export const metadata: Metadata = {
  title: "Sobre",
};

export default async function About() {
  return <AboutPage />;
}

export const dynamic = "force-static";
