import PageTop from "@/components/PageTop";
import Serivces from "@/components/Serivces";
import ServicesLocations from "@/components/ServicesLocations";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";
import local from "../../../public/images/local-knowlage.png";
import demage from "../../../public/images/demage.png";
import pricing from "../../../public/images/pricing.png";
import { Button } from "@/components/UI/Button";

function page() {
  return (
    <main className="w-full flex flex-col gap-y-16 justify-center items-center mt-24 md:px-0 px-2 pb-20">
      <PageTop
        title1="Our Moving & Packing "
        title2="Services in UAE"
        subtitle="Simplifying Your Business Relocation Across UAE With Al Khajista Shifting Movers. Professional Commercial Moving for Dubai, Sharjah, and Ajman Businesses."
      />
      <Serivces />
      <ServicesLocations
        title="Your Trusted Movers"
        desc="Offering comprehensive moving and packing solutions throughout the UAE, encompassing key regions such as Dubai, Sharjah, Ajman, and more. Rely on our expertise for meticulous and dependable relocation services."
      />
      <WhyChooseUs
        content={[
          {
            title: "Safe and Secure Moving",
            desc: "We prioritize the safety of your belongings. Our expert team uses top-quality packing materials and handles your items with the utmost care.",
            points: [
              "Expert Handling, Secure Packing",
              "Professional Care, Perfect Packing",
              "Safe Transport, Secure Delivery",
            ],
            image: demage,
          },
          {
            title: "Local Expertise",
            desc: "Being local experts, we understand the unique challenges of moving within Dubai, Sharjah, and Ajman, ensuring a smooth and efficient relocation.",
            points: [
              "Expert in Local Business Districts",
              "Tailored for UAE Businesses",
              "Compliant with Local Standards",
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
      <div className="md:w-11/12 md:-mt-10 w-full bg-grd relative md:py-16 pt-10 pb-32 md:px-10 px-3 rounded-[50px] text-white ts">
        <h2>
          Contact Us for Reliable Commercial <br /> Moving Services in UAE
        </h2>
        <p className="max-w-3xl md:text-xl text-lg md:mt-4 mt-5">
          Ready to make your business move stress-free? Contact Al Khajista
          Shifting Movers today to get a free quote or learn more about our
          commercial moving services in Dubai, Sharjah, and Ajman.
        </p>
        <Button
          size="lg"
          className="absolute bottom-10 right-20 border border-white"
        >
          Request For Quote
        </Button>
      </div>
    </main>
  );
}

export default page;
