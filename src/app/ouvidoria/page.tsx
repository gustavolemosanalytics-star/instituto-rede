import type { Metadata } from "next";
import OuvidoriaContent from "@/components/pages/OuvidoriaContent";

export const metadata: Metadata = {
  title: "Ouvidoria",
};

export default function OuvidoriaPage() {
  return <OuvidoriaContent />;
}
