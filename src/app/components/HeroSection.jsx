import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            {"Hello, I'm Lucifer's Heritage"}
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Take a place on the dark ride. Slowly creeping up, quickly coming
            down. Take a spin on the dark ride... may too far from the other
            side.
          </p>
        </div>
        <div className="col-span-5">
          <Image
            src={"/images/projects/hero-image.png"}
            alt="hero image"
            width={300}
            height={300}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "2px 5px 8px 5px black",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
