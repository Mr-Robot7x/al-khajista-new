import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <section className="py-5 bg-gray-50 sm:pt-16">
      <div className="md:px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl px-2">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 md:gap-x-12">
          <div className="col-span-3 lg:pr-16">
            <Image
              alt="al khajista logo"
              src={"/images/KSM-LOGO.png"}
              width={180}
              height={180}
            />

            <p className="text-base leading-relaxed text-gray-600 mt-4">
              We are Licensed Moving Company in UAE and provide reliable movers
              and packers services for the last 6 years to our valuable
              customers.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="https://www.facebook.com/"
                  title="Al Khajista Facebook"
                >
                  <Image
                    alt="Al Khajista Facebook"
                    src="/images/facebook.png"
                    width={32}
                    height={32}
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/"
                  title="Whatsapp Al Khajista"
                >
                  <Image
                    alt="Al Khajista Whatsapp"
                    src="/images/whatsapp.png"
                    width={32}
                    height={32}
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/"
                  title="Al Khajista Facebook"
                >
                  <Image
                    alt="Al Khajista Facebook"
                    src="/images/phone-call.png"
                    width={32}
                    height={32}
                  />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-gray-600 uppercase">Services</h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#ff2c07] focus:text-[#ff2c07]"
                >
                  Our Services
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#ff2c07] focus:text-[#ff2c07]"
                >
                  Movers in Dubai
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#ff2c07] focus:text-[#ff2c07]"
                >
                  Movers in Sharjah
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#ff2c07] focus:text-[#ff2c07]"
                >
                  Movers in Ajman
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-gray-600 uppercase">Company</h3>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#ff2c07] focus:text-[#ff2c07]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#ff2c07] focus:text-[#ff2c07]"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#ff2c07] focus:text-[#ff2c07]"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-[#ff2c07] focus:text-[#ff2c07]"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright 2021, All Rights Reserved by Al Khajista Shifting Movers.{" "}
          <br /> Develop By{" "}
          <span className="text-[#ff2c07]">Mashal Huraira</span>
        </p>
      </div>
    </section>
  );
}

export default Footer;
