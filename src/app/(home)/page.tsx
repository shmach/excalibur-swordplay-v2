import type { Metadata } from "next";
import { HomePage } from "./_components/HomePage";

export const metadata: Metadata = {
  title: "Início",
};

export default async function Home() {
  return <HomePage />
}

export const dynamic = "force-static";
