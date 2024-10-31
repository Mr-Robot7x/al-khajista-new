// components/TestimonialSlider.js
"use client";

import { useState, useRef, TouchEvent, useEffect } from "react";
import imgSro from "../../public/images/testimonial.png";
import Image from "next/image";
const testimonials = [
  {
    Name: "Emily Carter",
    Review:
      "Efficient and hassle-free! They handled all my belongings with great care.",
    Date: "Tuesday / 05 / 2019",
  },
  {
    Name: "Michael Lee",
    Review: "Quick, professional, and very accommodating. Highly recommended!",
    Date: "Thursday / 10 / 2021",
  },
  {
    Name: "Sarah Khan",
    Review: "From start to finish, everything went smoothly. Great service!",
    Date: "Monday / 03 / 2020",
  },
  {
    Name: "James Wilson",
    Review:
      "The movers were punctual and handled my items with care. Very pleased!",
    Date: "Friday / 08 / 2022",
  },
  {
    Name: "Olivia Brown",
    Review: "Friendly staff and smooth moving process. Would use again.",
    Date: "Saturday / 02 / 2023",
  },
  {
    Name: "David Johnson",
    Review: "Reliable and fast service. They made my move stress-free.",
    Date: "Wednesday / 12 / 2019",
  },
  {
    Name: "Linda Martinez",
    Review: "Handled everything professionally. Excellent experience!",
    Date: "Sunday / 07 / 2021",
  },
  {
    Name: "Robert King",
    Review: "Top-notch service! They made my relocation so easy.",
    Date: "Tuesday / 04 / 2022",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const translateX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);
  // Handle drag start
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
  };

  // Handle dragging
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const diffX = e.touches[0].clientX - startX.current;
    translateX.current = diffX;
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(calc(-${
        currentIndex * 100
      }% + ${translateX.current}px))`;
    }
  };

  // Handle drag end
  const handleTouchEnd = () => {
    if (translateX.current > 50) {
      prevSlide();
    } else if (translateX.current < -50) {
      nextSlide();
    } else if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    translateX.current = 0;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full md:w-11/12 grid md:grid-cols-2 grid-cols-1 mt-10">
      <div>
        <h2>
          What Our Clients Says <br /> About Us
        </h2>
        <p className="mt-2 text-lg">
          Discover what our clients have to say about their experiences with us.
          Read real feedback and testimonials to see how we&apos;ve made moving
          simple, efficient, and stress-free.
        </p>
        <div className="relative w-full max-w-xl mx-auto overflow-hidden shadow-lg rounded-xl md:mt-10">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-4 flex flex-col items-center justify-center bg-white  rounded-xl"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-grd text-3xl text-white  ts">
                  {testimonial.Name.split("")[0]}
                </div>
                <p className="text-gray-700 text-lg text-center">
                  {testimonial.Review}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {testimonial.Name}
                </h3>
                <small className="text-start text-[#E80019]">
                  Moved On : {testimonial.Date}
                </small>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
        </div>
      </div>
      <div className="relative w-full md:h-full h-96">
        <Image
          alt="Clients Reviews | Al Khajista"
          src={imgSro}
          fill
          quality={50}
          className="object-contain dd absolute"
        />
      </div>
    </section>
  );
}
