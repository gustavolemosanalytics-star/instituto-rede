import type { Metadata } from "next";
import ProjetosContent from "@/components/pages/ProjetosContent";

export const metadata: Metadata = {
  title: "Projetos",
};

export default function ProjetosPage() {
  return <ProjetosContent />;
}
