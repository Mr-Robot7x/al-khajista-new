import React from "react";
import Image, { StaticImageData } from "next/image";
function WhyChooseUs({
  content,
}: {
  content: {
    title: string;
    desc: string;
    points: string[];
    image: StaticImageData;
  }[];
}) {
  return (
    <section className="md:w-11/12 w-full min-h-screen">
      <h2 className="text-center">Why Choose Us !</h2>
      <h3 className="text-center mt-3">Commitment to Quality and Care</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-14">
        {content.map((box, i) => (
          <div
            key={i}
            className={`bg-white md:py-5 py-3 pb-10 px-4 rounded-3xl ${
              i === 1
                ? "shadow-2xl shadow-neutral-200"
                : "shadow-xl shadow-neutral-100"
            } `}
          >
            <div className="w-20 h-20 rounded-full mx-auto mb-7 mt-4 relative">
              <Image
                alt={box.title}
                src={box.image}
                fill
                className="object-contain drop-shadow-md"
              />
            </div>
            <h3 className="text-center mb-4 md:text-2xl font-semibold">
              {box.title}
            </h3>
            <p>{box.desc}</p>
            <ul className="flex flex-col  drop-shadow-sm items-start mt-5 gap-y-2">
              {box.points.map((point, i) => (
                <li key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#E80019"
                    className="size-[22px] inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                  <b className="pl-2">{point}</b>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
