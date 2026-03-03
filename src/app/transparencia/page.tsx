import type { Metadata } from "next";
import TransparenciaContent from "@/components/pages/TransparenciaContent";

export const metadata: Metadata = {
  title: "Portal da Transparência",
};

export default function TransparenciaPage() {
  return <TransparenciaContent />;
}
