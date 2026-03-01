import type { Metadata } from "next";
import ContatoContent from "@/components/pages/ContatoContent";

export const metadata: Metadata = {
  title: "Contato",
};

export default function ContatoPage() {
  return <ContatoContent />;
}
