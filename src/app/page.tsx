import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import AboutPreview from "@/components/sections/AboutPreview";
import AreasOfAction from "@/components/sections/AreasOfAction";
import PublicManagement from "@/components/sections/PublicManagement";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <AreasOfAction />
      <AboutPreview />
      <PublicManagement />
    </>
  );
}
