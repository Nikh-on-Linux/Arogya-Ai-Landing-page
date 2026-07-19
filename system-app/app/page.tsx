"use client"
import Image from "next/image";
import Navbar from "@/components/navbar.component";
import HeroSection from "@/components/sections/hero.section.component";
import FlowSection from "@/components/sections/flow.section.component";
import WorkingSection from "@/components/sections/working.section.component";
import TracktionSection from "@/components/sections/tracktion.section.component";
import ValidationSection from "@/components/sections/validation.section.component";
import FieldSection from "@/components/sections/field.section.component";
import OutroSection from "@/components/sections/outro.section.component";
import FooterSection from "@/components/sections/footer.section.component";

export default function Home() {
  return (
    <>
      <div className="px-[84px] py-[15px]" >
        <header>
          <Navbar />
        </header>
        <main>
          <HeroSection />
          <FlowSection />
          <WorkingSection />
          <TracktionSection />
          <ValidationSection />
          <FieldSection />
          <OutroSection />
        </main>
      </div>

      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
