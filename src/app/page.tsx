import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import AboutPreview from "@/components/sections/AboutPreview";
import AreasOfAction from "@/components/sections/AreasOfAction";
import PublicManagement from "@/components/sections/PublicManagement";
import ImpactNumbers from "@/components/sections/ImpactNumbers";
import CTABanner from "@/components/sections/CTABanner";
import WaveDivider from "@/components/shared/WaveDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <WaveDivider className="text-white -mt-1" />
      <WhatWeDo />
      <WaveDivider className="text-neutral-50 -mt-1" />
      <AreasOfAction />
      <WaveDivider className="text-neutral-50 -mt-1" flip />
      <AboutPreview />
      <WaveDivider className="text-primary -mt-1" />
      <PublicManagement />
      <WaveDivider className="text-primary -mt-1" flip />
      <ImpactNumbers />
      <CTABanner />
    </>
  );
}
