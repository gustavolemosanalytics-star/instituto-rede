import type { Metadata } from "next";
import TransparenciaContent from "@/components/pages/TransparenciaContent";

export const metadata: Metadata = {
  title: "Transparência",
};

export default function TransparenciaPage() {
  return <TransparenciaContent />;
}
