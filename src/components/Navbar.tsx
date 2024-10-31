"use client";
import Link from "next/link";
import { Button } from "./UI/Button";
import { useEffect, useState } from "react";
import logo from "../../public/images/KSM-LOGO.png";
import Image from "next/image";
function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileSize, setMobileSize] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
    return;
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setMobileSize(true);
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
          setMobileSize(true);
        } else {
          setMobileSize(false);
        }
      });
    }
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 left-0 z-30 w-full min-h-16  bg-white py-3 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }  shadow-lg shadow-neutral-100`}
      >
        {!mobileSize ? (
          <nav className=" items-center justify-between md:w-11/12 w-full mx-auto md:flex hidden">
            <div>
              <Image
                src={logo}
                width={130}
                height={70}
                loading="eager"
                priority
                alt="Al Khajista Shifting Movers"
              />
            </div>
            <div>
              <Link
                className="hover:bg-neutral-100 px-4 py-3 rounded-full transition-colors mx-1 font-semibold"
                href={"/services"}
              >
                Services
              </Link>
              <Link
                className="hover:bg-neutral-100 px-4 py-3 rounded-full transition-colors mx-1 font-semibold"
                href={"/services-locations"}
              >
                Locations
              </Link>
              <Link
                className="hover:bg-neutral-100 px-4 py-3 rounded-full transition-colors mx-1 font-semibold"
                href={"/about-us"}
              >
                About Us
              </Link>
              <Link
                className="hover:bg-neutral-100 px-4 py-3 rounded-full transition-colors mx-1 font-semibold"
                href={"/contact-us"}
              >
                Contact Us
              </Link>
            </div>
            <Link aria-label="Call Now" href={"tel:+971568741003"}>
              <Button>
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
          </nav>
        ) : (
          <nav className="flex items-center px-2 justify-between w-full bg-white ">
            <Image
              src={logo}
              width={120}
              height={60}
              loading="eager"
              priority
              alt="Al Khajista Shifting Movers"
            />
            <div className="flex items-center gap-x-3">
              <Link aria-label="Call Now" href={"tel:+971568741003"}>
                <Button variant="secondary">Call Now</Button>
              </Link>
              <Button size="icon" onClick={() => setSideMenu((prev) => !prev)}>
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Button>
            </div>
          </nav>
        )}
      </header>
      {mobileSize && sideMenu ? (
        <div className="min-h-screen bg-neutral-50 shadow-2xl w-[70%] fixed top-0 right-0 z-40 transition-transform sideAni">
          <Button
            size="icon"
            className="absolute top-3 right-2"
            onClick={() => setSideMenu(false)}
          >
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </Button>
          <div className="mt-24 w-full min-h-36 flex flex-col justify-start items-center  gap-y-3 pl-5">
            <Link
              className="block font-semibold text-2xl p-3 rounded-l-3xl w-full shadow-md shadow-neutral-100 bg-white"
              href={"/services"}
            >
              Services
            </Link>
            <Link
              className="block font-semibold text-2xl p-3 rounded-l-3xl w-full shadow-md shadow-neutral-100 bg-white"
              href={"/services-locations"}
            >
              Locations
            </Link>
            <Link
              className="block font-semibold text-2xl p-3 rounded-l-3xl w-full shadow-md shadow-neutral-100 bg-white"
              href={"/about-us"}
            >
              About Us
            </Link>
            <Link
              className="block font-semibold text-2xl p-3 rounded-l-3xl w-full shadow-md shadow-neutral-100 bg-white"
              href={"/contact-us"}
            >
              Contact Us
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
