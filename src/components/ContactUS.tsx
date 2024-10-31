import Image from "next/image";
import React from "react";
import imageSrc from "../../public/images/contact-us.png";
import { Button } from "./UI/Button";
function ContactUS() {
  return (
    <section className="bg-grd md:w-11/12 w-full grid md:grid-cols-2 grid-cols-1 gap-1 md:px-5 px-2 md:py-8 rounded-3xl">
      <div className="flex flex-col md:pl-7 md:mt-14 mt-10 relative text-white md:ml-16 pb-32">
        <h2>Ready to Make Your Move?</h2>
        <p className="text-lg mt-2">
          Get in touch with us today for a no-obligation quote and discover how
          we can make your relocation seamless and stress-free!
        </p>
        <div className="flex gap-x-3 mt-3">
          <Button>Request A Quote</Button>
          <Button variant="secondary" className="text-black">
            Call Now
          </Button>
        </div>
        <div className="absolute bottom-0 md:left-9 ts w-full flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>

            <p className="font-medium">+971568741003</p>
          </div>
          <div className="flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <p className="font-medium">From 9:00 AM To 11:00 PM</p>
          </div>
          <div className="flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <p className="font-medium">Sharjha Al Yarmook Near Mega Mole</p>
          </div>
        </div>
      </div>
      <div className="relative md:h-[400px] h-96 md:ml-16 md:mt-0 mt-5">
        <Image
          alt="Contact Us | Al Khajista Movers"
          src={imageSrc}
          fill
          className="object-contain absolute right-0 bottom-0 drop-shadow-2xl"
        />
      </div>
    </section>
  );
}

export default ContactUS;
