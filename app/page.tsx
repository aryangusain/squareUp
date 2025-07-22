import ChooseUs from "@/components/ChooseUs";
import Companies from "@/components/Companies";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FooterBanner from "@/components/FooterBanner";

export default function Home() {
  return (
    <div>
      <Hero />
      <Companies />
      <Services />
      <ChooseUs />
      <Testimonials />
      <FAQ />
      <FooterBanner />
    </div>
  );
}
