import HeroSection from "@/Components/HeroSection";
import VideoSection from "@/Components/VideoSection";
import { ServicesSection } from "@/Components/ServicesSection";
import { ServicesIcons } from "@/Components/ServicesIcons";
import { OurClients } from "@/Components/OurClients";
import Testomonial from "@/Components/Testomonial";
import SomeNumbersSection from "@/Components/SomeNumbersSection";
import FooterSection from "@/Components/FooterSection";
export default function Home() {
  return (
    <div>
      <main className="h-screen antialiased bg-black/10">
        <HeroSection />
        <VideoSection />
        {/* <SatisfationSection /> */}
        <ServicesSection />
        <ServicesIcons />
        <OurClients />
        <Testomonial />
        <SomeNumbersSection />  
        <FooterSection />
      </main>
    </div>
  );
}
