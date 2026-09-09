"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="font-serif text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brass-300 via-brass-400 to-bronze-500">
              {"Hello, I'm"}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Victor de Victa",
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
          <div className="mb-6">
            <p className="text-brass-100/70 text-sm sm:text-base lg:text-lg">
              {'"The day before yesterday I saw a rabbit, and yesterday I saw a deer, and today you."'}
            </p>
            <p className="text-brass-100/70 text-xs sm:text-xs lg:text-sm text-right mt-1">
              The Dandelion Girl - Robert F. Young
            </p>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/victor-de-victa-69686a56/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-brass-200 via-brass-400 to-bronze-600 hover:brightness-110 transition text-bronze-950 font-semibold shadow-brass text-center"
            >
              Hire Me
            </a>
            <a
              href="/docs/Victor%20de%20Victa%20-%20CV.pdf"
              download="Victor de Victa - CV.pdf"
              className="inline-block px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-brass-200 via-brass-400 to-bronze-600 hover:brightness-110 transition text-white mt-3"
            >
              <span className="block bg-bronze-950 hover:bg-bronze-900 rounded-full px-5 py-2 transition-colors text-center">
                Download CV
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="relative rounded-full p-[6px] bg-gradient-to-br from-brass-300 via-bronze-500 to-brass-600 shadow-brass w-fit mx-auto">
            <div className="rounded-full p-1 bg-bronze-950">
              <Image
                src={"/images/hero-image.png"}
                alt="hero image"
                width={300}
                height={300}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
