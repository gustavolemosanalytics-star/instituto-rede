import type { Metadata } from "next";
import ComplianceContent from "@/components/pages/ComplianceContent";

export const metadata: Metadata = {
  title: "Governança e Integridade",
};

export default function GovernancaIntegridadePage() {
  return <ComplianceContent />;
}
