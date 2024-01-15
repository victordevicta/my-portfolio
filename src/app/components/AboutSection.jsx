"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/projects/steampunk-computer.png"}
          alt="steampunk computer"
          width={500}
          height={500}
        />

        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Software developer with experience in the following areas: Project
            development, data analysis, team management, offshore work, Autocad,
            PLC, VBA, Microcontrollers PIC, Assembly, Arduino, C, C#,
            JavaScript, Node.js, Typescript, Nest.js, Bootstrap, Git, Gitlab CI,
            Azure Devops CI, DynamoDB, Agile, React, Flutter, Next.js, Vercel,
            HTML, Python, AWS, MySQL, PostgreSQL, WCF, SAP and ABAP;
            <br />
            <br />
            Languages: Native speaker of portuguese, fluent in english and
            advanced in spanish.
          </p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-yellow-700">
              Skills
            </span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
