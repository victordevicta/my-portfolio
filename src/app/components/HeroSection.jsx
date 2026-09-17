"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { SOCIAL_LINKS } from "../utils/constants";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 font-serif text-4xl font-extrabold tracking-wide text-white sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-brass-300 via-brass-400 to-bronze-500 bg-clip-text text-transparent">
              {"Hello, I'm Victor de Victa"}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Backend Developer",
                1000,
                "Frontend Developer",
                1000,
                "Fullstack Developer",
                1000,
              ]}
              wrapper="span"
              className="inline-block min-h-[84px] align-top sm:min-h-[100px] lg:min-h-[124px] xl:min-h-0"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <div className="mb-6">
            <p className="text-brass-100/70 text-sm sm:text-base lg:text-lg">
              {
                '"The day before yesterday I saw a rabbit, and yesterday I saw a deer, and today you."'
              }
            </p>
            <p className="text-brass-100/70 mt-1 text-right text-xs sm:text-xs lg:text-sm">
              The Dandelion Girl - Robert F. Young
            </p>
          </div>
          <div>
            <a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 inline-block w-full rounded-full bg-gradient-to-br from-brass-200 via-brass-400 to-bronze-600 px-6 py-3 text-center font-semibold text-bronze-950 shadow-brass transition hover:brightness-110 sm:w-fit"
            >
              Hire Me
            </a>
            <a
              href="/docs/Victor%20de%20Victa%20-%20CV.pdf"
              download="Victor de Victa - CV.pdf"
              className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-brass-200 via-brass-400 to-bronze-600 px-0.5 py-0.5 text-white transition hover:brightness-110 sm:w-fit"
            >
              <span className="block rounded-full bg-bronze-950 px-5 py-2 text-center transition-colors hover:bg-bronze-900">
                Download CV
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-5 mt-4 place-self-center lg:mt-0">
          <div className="relative mx-auto w-fit rounded-full bg-gradient-to-br from-brass-300 via-bronze-500 to-brass-600 p-[6px] shadow-brass">
            <div className="rounded-full bg-bronze-950 p-1">
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
