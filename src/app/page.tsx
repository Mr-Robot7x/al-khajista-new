import ContactUS from "@/components/ContactUS";
import About from "@/components/Home/About";
import HeroSection from "@/components/Home/HeroSection";
import Process from "@/components/Process";
import Serivces from "@/components/Serivces";
import ServicesLocations from "@/components/ServicesLocations";
import Slider from "@/components/Slider";
import WhyChooseUs from "@/components/WhyChooseUs";
import local from "../../public/images/local-knowlage.png";
import demage from "../../public/images/demage.png";
import pricing from "../../public/images/pricing.png";
export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col gap-y-16 justify-center items-center mt-24 md:px-0 px-2 pb-20">
        <HeroSection />
        <About />
        <Serivces />
        <ServicesLocations
          title="We Covers Major Areas"
          desc="Providing expert moving and packing services across major areas in
            the UAE, including Dubai, Sharjah, Ajman, and beyond. Trust us for
            seamless, reliable moves across the Emirates."
        />
        <Slider />
        <Process />
        <WhyChooseUs
          content={[
            {
              title: "Zero Damage Promise",
              desc: "Moving with care is our top priority. Our skilled team handles every item with attention and precision, safeguarding your belongings from start to finish.",
              points: [
                "Quality Packing Materials",
                "Careful Handling",
                "Trained Professionals",
              ],
              image: demage,
            },
            {
              title: "Local Knowledge",
              desc: "As a locally-owned business, we know the ins and outs of moving in Dubai, Sharjah, and Ajman, allowing us to offer the best routes and solutions.",
              points: [
                "Expertise in Local Routes",
                "Understanding of Community Needs",
                "Familiar with Local Regulations",
              ],
              image: local,
            },
            {
              title: "Transparent Pricing",
              desc: "Get competitive rates without surprises. With clear pricing and no hidden fees, you’ll know exactly what to expect from the moment you receive your quote.",
              points: [
                "Clear Cost Breakdown",
                "Customizable Plans",
                "Competitive Rates",
              ],
              image: pricing,
            },
          ]}
        />
        <ContactUS />
      </main>
    </>
  );
}
