import type { Metadata } from "next";
import Landing from "@/components/Landing";

export const metadata: Metadata = {
  title: "Gupta Cold Storage",
  description:
    "Cold storage in Sonipat, Haryana. Temperature-controlled storage for kiryana and dry fruits (0–25°C).",
};

export default function Home() {
  return <Landing />;
}
