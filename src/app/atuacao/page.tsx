import type { Metadata } from "next";
import AtuacaoContent from "@/components/pages/AtuacaoContent";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
};

export default function AtuacaoPage() {
  return <AtuacaoContent />;
}
