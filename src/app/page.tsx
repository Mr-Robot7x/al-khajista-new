import ContactUS from "@/components/ContactUS";
import About from "@/components/Home/About";
import HeroSection from "@/components/Home/HeroSection";
import Process from "@/components/Process";
import Serivces from "@/components/Serivces";
import ServicesLocations from "@/components/ServicesLocations";
import Slider from "@/components/Slider";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col gap-y-16 justify-center items-center mt-24 md:px-0 px-2 pb-20">
        <HeroSection />
        <About />
        <Serivces />
        <ServicesLocations />
        <Slider />
        <Process />
        <WhyChooseUs />
        <ContactUS />
      </div>
    </>
  );
}
