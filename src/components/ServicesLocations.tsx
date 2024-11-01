import Link from "next/link";
import { Button } from "./UI/Button";
import Image from "next/image";
import imgSrc from "../../public/images/cities.png";
function ServicesLocations({ title, desc }: { title: string; desc: string }) {
  return (
    <section className="md:mt-24 mt-10 w-full flex justify-center md:pt-10">
      <div className="md:w-11/12 w-full grid md:grid-cols-2 grid-cols-1 md:gap-x-5 gap-y-10">
        <div className="mt-10 relative">
          <Image
            alt="AI Movers Image"
            src={imgSrc}
            className="absolute bottom-14 right-0 md:block hidden"
          />
          <h2 className="md:text-5xl text-3xl">
            {title} <br /> In UAE
          </h2>
          <p className="md:text-xl text-lg mt-6">{desc}</p>
          <Link aria-label="Discover Now" href={"/about"}>
            <Button className="md:mt-8 mt-5 px-5 py-4 rounded-[50px] text-lg">
              Discover Now
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-end gap-y-6 md:pr-10">
          <div className="md:w-[450px] w-full relative min-h-44 hover:bg-white transition-colors p-5 border-t-2 border-[#E80019]">
            <h3>
              Moving Services In
              <br /> <span className="font-semibold text-grd">Dubai</span>
            </h3>
            <p className="mt-3">Explore</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 bg-white drop-shadow-md absolute right-7 md:bottom-8 bottom-4 rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <div className="md:w-[450px] w-full relative min-h-44 hover:bg-white transition-colors p-5 border-t-2 border-[#E80019]">
            <h3>
              Moving Services In
              <br /> <span className="font-semibold text-grd">Sharjah</span>
            </h3>
            <p className="mt-3">Explore</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 bg-white drop-shadow-md absolute right-7 md:bottom-8 bottom-4 rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <div className="md:w-[450px] w-full relative min-h-44 hover:bg-white transition-colors p-5 border-t-2 border-[#E80019]">
            <h3>
              Moving Services In
              <br /> <span className="font-semibold text-grd">Ajman</span>
            </h3>
            <p className="mt-3">Explore</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 bg-white drop-shadow-md absolute right-7 md:bottom-8 bottom-4 rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesLocations;
