import ChooseUs from "@/components/ChooseUs";
import Companies from "@/components/Companies";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="mx-[80px] lg:w-280 flex-1 border-x-1 text-white border-x-gray-600">
      <Hero />
      <Companies />
      <Services />
      <ChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
