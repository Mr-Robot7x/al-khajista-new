import { Button } from "../UI/Button";
import heroImage from "../../../public/images/main2.png";
import experinec from "../../../public/images/years-experience.png";
import moves from "../../../public/images/moves-complete.png";
import reviews from "../../../public/images/clients-reivews.png";
import Image from "next/image";
import Link from "next/link";
function HeroSection() {
  return (
    <section
      id="Hero-Section"
      className="md:w-11/12 w-full p-1 md:mt-6 mt-9 grid md:grid-cols-2 grid-cols-1 items-center md:ml-12 md:gap-0 gap-y-5"
    >
      <div>
        <h1>
          <span className="text-grd"> Al Khajista</span> <br /> Shifting Movers
          And Packers
        </h1>
        <p className="mt-3 text-xl">
          <span className="font-medium">
            Your Trusted Partner for Seamless Relocation in Dubai, Sharjah, and
            Ajman.
          </span>{" "}
          We are Licensed Moving Company in UAE and provide reliable movers and
          packers services for the last 6 years to our valuable customers.
        </p>
        <div className="md:mt-10 mt-5 flex gap-x-5">
          <Link href={"/services"} title="Moving Services">
            <Button variant="secondary">Our Services</Button>
          </Link>
          <Button>About Us</Button>
        </div>
      </div>
      <div>
        <div className="md:w-96 w-full md:h-[500px] h-[470px] mx-auto bg-grd mt-5 rounded-t-full relative  -z-10">
          <div className="md:w-72 w-72 md:p-0 p-3 md:h-14 h-13 bg-white shadow-xl rounded-3xl absolute md:top-36 md:-right-16 -right-0 z-20 flex items-center justify-center gap-x-3 top-[55%] left-1/2 md:-translate-x-0 -translate-x-1/2 md:-translate-y-0 -translate-y-1/2">
            <div className="w-10 h-10 rounded-full relative">
              <Image
                src={experinec}
                fill
                className="object-contain"
                alt="6+ years experience"
              />
            </div>
            <p className="font-bold">
              <span className="text-grd">6+</span> years experience
            </p>
          </div>
          <div className="md:w-[315px] w-72 md:p-0 p-3 md:h-14 h-13 bg-white shadow-xl rounded-3xl absolute md:top-60 md:-left-16 z-20 flex items-center justify-center gap-x-3 top-[70%] left-1/2 md:-translate-x-0 -translate-x-1/2 md:-translate-y-0 -translate-y-1/2">
            <div className="w-10 h-10 rounded-full relative">
              <Image
                src={moves}
                fill
                className="object-contain"
                alt="900+ moves completed"
              />
            </div>
            <p className="font-bold">
              <span className="text-grd">900+</span> moves completed
            </p>
          </div>
          <div className="md:w-[315px] w-72 md:p-0 p-3 md:h-14 h-13 bg-white shadow-xl rounded-3xl absolute md:-right-16 -right-0 z-20 flex items-center justify-center gap-x-3 md:top-[67%] top-[85%] left-1/2 md:-translate-x-0 -translate-x-1/2 md:-translate-y-0 -translate-y-1/2">
            <div className="w-10 h-10 rounded-full relative">
              <Image
                src={reviews}
                fill
                className="object-contain"
                alt="700+ client reviews"
              />
            </div>
            <p className="font-bold">
              <span className="text-grd">600+</span> clients reviews
            </p>
          </div>
          <Image
            alt="Al Khajista Movers"
            src={heroImage}
            fill
            priority
            loading="eager"
            className="object-contain drop-shadow-2xl mt-0 "
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
