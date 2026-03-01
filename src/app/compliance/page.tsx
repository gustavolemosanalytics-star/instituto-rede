import type { Metadata } from "next";
import ComplianceContent from "@/components/pages/ComplianceContent";

export const metadata: Metadata = {
  title: "Compliance",
};

export default function CompliancePage() {
  return <ComplianceContent />;
}
