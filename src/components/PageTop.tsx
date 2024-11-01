import React from "react";
import { Button } from "./UI/Button";
import imageSrc from "../../public/images/service-image.png";
import Image from "next/image";
function PageTop({
  title1,
  title2,
  subtitle,
}: {
  title1: string;
  title2: string;
  subtitle: string;
}) {
  return (
    <section className="w-full md:w-11/12 mt-10 grid md:grid-cols-3 grid-cols-1 md:ml-[85px]">
      <div className="col-span-1 bg-grd md:h-[450px] h-[400px] relative rounded-[60px]">
        <Image
          alt="Moving Services | Al Khajista"
          src={imageSrc}
          className="object-contain absolute drop-shadow-2xl"
          fill
          loading="eager"
          priority
        />
      </div>

      <div className="col-span-2 md:pl-14 bg-white/90 md:mt-0 -mt-32 z-10 rounded-3xl md:text-start text-center">
        <h1 className="pt-8">
          {title1} <br /> <span className="text-grd">{title2}</span>
        </h1>
        <p className="max-w-xl md:text-2xl text-xl mt-3">{subtitle}</p>
        <Button size="lg" className="md:mt-8 mt-5" title="Request A Quote">
          Request A Quote
        </Button>
      </div>
      {/* <div className="md:pt-28 md:pl-[75px] bg-white col-span-2">
        <h1>
          {title1} <br /> {title2}
        </h1>
        <p className="max-w-xl text-xl mt-3">{subtitle}</p>
       
      </div>
      <div className=" relative">
        <Image
          alt="Moving Services | Al Khajista"
          src={imageSrc}
          className="object-contain absolute mt-7 mr-10"
          fill
        />
      </div> */}
    </section>
  );
}

export default PageTop;
