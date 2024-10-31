import Link from "next/link";
import React from "react";
import { Button } from "./UI/Button";
import service from "../../public/images/packing-and-loading-icon.png";
import Image from "next/image";
import delivery from "../../public/images/deliveries-in-uae.png";
import specialty from "../../public/images/specialty-moving.png";
import Handyman from "../../public/images/Handyman.png";
import Dismantling from "../../public/images/dismantling.png";
import furniture from "../../public/images/furniture-fixing.png";
function Serivces() {
  return (
    <section className="md:w-11/12 md:pt-10 w-full mt-16">
      <div className="w-full grid md:grid-cols-2 grid-cols-1">
        <div>
          <p className="text-grd">Our Services</p>
          <h2>
            Explore Our Professional <br /> Moving Services
          </h2>
        </div>
        <div>
          <p className="text-lg text-neutral-600 md:mt-0 mt-4">
            We Are Providing Our Professional Moving Serivces In Dubai, Sharjah
            & Ajman With Latest IT Equipments and Expert Team.
          </p>
          <Link aria-label="Call Now" href={"tel:+971568741003"}>
            <Button className="mt-3">
              Call Now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center md:gap-x-7 gap-y-9 mt-16">
        <div className="md:w-[390px] w-full bg-white shadow-lg shadow-neutral-100 relative md:p-5 p-3 rounded-3xl overflow-hidden">
          <div className="absolute -top-1/4 -right-28 w-52 h-52 bg-[#ffdbbf]/50 blur-3xl rounded-full"></div>
          <div className="w-[70px] min-h-[70px] relative rounded-full mb-4">
            <Image
              alt="service image"
              src={service}
              fill
              className="object-scale-down drop-shadow-lg"
            />
          </div>
          <b className="text-2xl">Commercial Moving</b>
          <p className="text-neutral-700 mt-2">
            Trust us for office moves that reduce downtime and disruption, with
            fast, thorough service tailored to you.
          </p>
          <Button size="sm" variant="secondary" className="mt-3">
            See More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Button>
        </div>
        <div className="md:w-[390px] w-full bg-white shadow-lg shadow-neutral-100 relative md:p-5 p-3 rounded-3xl overflow-hidden">
          <div className="absolute -top-1/4 -right-28 w-52 h-52 bg-[#ffdbbf]/50 blur-3xl rounded-full"></div>
          <div className="w-[70px] min-h-[70px] relative rounded-full mb-4">
            <Image
              alt="Furniture Fixing"
              src={furniture}
              fill
              className="object-scale-down drop-shadow-lg"
            />
          </div>
          <b className="text-2xl">Residential Moving</b>
          <p className="text-neutral-700 mt-2">
            Let us handle the heavy lifting! Our skilled movers ensure your
            belongings arrive safely at your new home.
          </p>
          <Button size="sm" variant="secondary" className="mt-3">
            See More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Button>
        </div>
        <div className="md:w-[390px] w-full bg-white shadow-lg shadow-neutral-100 relative md:p-5 p-3 rounded-3xl overflow-hidden">
          <div className="absolute -top-1/4 -right-28 w-52 h-52 bg-[#ffdbbf]/50 blur-3xl rounded-full"></div>
          <div className="w-[70px] min-h-[70px] relative rounded-full mb-4">
            <Image
              alt="service image"
              src={delivery}
              fill
              className="object-scale-down drop-shadow-lg"
            />
          </div>
          <b className="text-2xl">Deliveries In UAE</b>
          <p className="text-neutral-700 mt-2">
            Reliable delivery services across the UAE, ensuring safe, on-time
            arrival of your belongings.
          </p>
          <Button size="sm" variant="secondary" className="mt-3">
            See More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Button>
        </div>
        <div className="md:w-[390px] w-full bg-white shadow-lg shadow-neutral-100 relative md:p-5 p-3 rounded-3xl overflow-hidden">
          <div className="absolute -top-1/4 -right-28 w-52 h-52 bg-[#ffdbbf]/50 blur-3xl rounded-full"></div>
          <div className="w-[70px] min-h-[70px] relative rounded-full mb-4">
            <Image
              alt="service image"
              src={specialty}
              fill
              className="object-scale-down drop-shadow-lg"
            />
          </div>
          <b className="text-2xl">Specialty Moving</b>
          <p className="text-neutral-700 mt-2">
            From valuable art to bulky furniture, our team handles all items
            with precision and the utmost care.
          </p>
          <Button size="sm" variant="secondary" className="mt-3">
            See More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Button>
        </div>
        <div className="md:w-[390px] w-full bg-white shadow-lg shadow-neutral-100 relative md:p-5 p-3 rounded-3xl overflow-hidden">
          <div className="absolute -top-1/4 -right-28 w-52 h-52 bg-[#ffdbbf]/50 blur-3xl rounded-full"></div>
          <div className="w-[70px] min-h-[70px] relative rounded-full mb-4">
            <Image
              alt="Handyman Services"
              src={Handyman}
              fill
              className="object-scale-down drop-shadow-lg"
            />
          </div>
          <b className="text-2xl">Packing Services</b>
          <p className="text-neutral-700 mt-2">
            Our expert packers use top-quality materials to secure your items,
            ensuring everything stays protected.
          </p>
          <Button size="sm" variant="secondary" className="mt-3">
            See More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Button>
        </div>
        <div className="md:w-[390px] w-full bg-white shadow-lg shadow-neutral-100 relative md:p-5 p-3 rounded-3xl overflow-hidden">
          <div className="absolute -top-1/4 -right-28 w-52 h-52 bg-[#ffdbbf]/50 blur-3xl rounded-full"></div>
          <div className="w-[70px] min-h-[70px] relative rounded-full mb-4">
            <Image
              alt="Dismantling Services"
              src={Dismantling}
              fill
              className="object-scale-down drop-shadow-lg"
            />
          </div>
          <b className="text-2xl">Dismantling Services</b>
          <p className="text-neutral-700 mt-2">
            Professional dismantling for bulky items, ensuring safe packing,
            moving, and reassembly on arrival.
          </p>
          <Button size="sm" variant="secondary" className="mt-3">
            See More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Serivces;
