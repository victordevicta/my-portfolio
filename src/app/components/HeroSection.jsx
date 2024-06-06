"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-700">
              {"Hello, I'm"}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Lucifer's Heritage",
                1000,
                "Software Engineer",
                1000,
                "Backend Developer",
                1000,
                "Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Take a place on the dark ride. Slowly creeping up, quickly coming
            down. Take a spin on the dark ride... may too far from the other
            side.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-white via-yellow-500 to-orange-700 hover:bg-slate-200 text-black">
              Hire Me
            </button>
            <button className="px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br  from-white via-yellow-500 to-orange-700 hover:bg-slate-200 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <Image
            src={"/images/hero-image.png"}
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
