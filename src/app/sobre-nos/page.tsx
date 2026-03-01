import type { Metadata } from "next";
import SobreNosContent from "@/components/pages/SobreNosContent";

export const metadata: Metadata = {
  title: "Sobre Nós",
};

export default function SobreNosPage() {
  return <SobreNosContent />;
}
