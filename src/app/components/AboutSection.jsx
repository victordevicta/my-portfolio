"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {
  skillsList,
  educationList,
  experienceList,
} from "../utils/tab-data-lists";

const TimelineList = ({ items }) => (
  <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 w-full">
    {items.map((item) => (
      <li key={item.key} className="border-l-2 border-brass-500/50 pl-4">
        <p className="font-semibold text-brass-200">{item.title}</p>
        {item.subtitle && (
          <p className="text-sm text-brass-100/60 mb-2">{item.subtitle}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs rounded-full border border-brass-500/40 px-2 py-0.5 text-brass-100/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </li>
    ))}
  </ul>
);

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <TimelineList
        items={skillsList.map((skill) => ({
          key: skill.category,
          title: skill.category,
          subtitle: skill.description,
          tags: skill.techs,
        }))}
      />
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <TimelineList
        items={educationList.map((education) => ({
          key: education.degree,
          title: `${education.degree} · ${education.institution}`,
          subtitle: [education.period, education.location]
            .filter(Boolean)
            .join(" — "),
          tags: education.details,
        }))}
      />
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <TimelineList
        items={experienceList.map((experience) => ({
          key: `${experience.company}-${experience.period}`,
          title: `${experience.role} · ${experience.company}`,
          subtitle: [experience.period, experience.location]
            .filter(Boolean)
            .join(" — "),
          tags: experience.techs,
        }))}
      />
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white scroll-mt-[175px]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative self-start rounded-lg p-1.5 bg-gradient-to-br from-brass-400 via-bronze-600 to-brass-500 shadow-brass w-fit mx-auto md:mx-0">
          <Image
            src={"/images/steampunk-computer.png"}
            alt="steampunk computer"
            width={500}
            height={500}
            className="rounded-md"
            priority
          />
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="font-serif text-4xl font-bold text-brass-300 mb-4 tracking-wide">
            About Me
          </h2>
          <p className="text-base md:text-lg text-brass-100/80 text-justify">
            Full-stack developer with experience building enterprise web
            applications, backend services, integrations and internal business
            systems across healthcare, finance, media, real estate and offshore
            operations. I work mainly with React, Next.js, Angular, TypeScript,
            Node.js, NestJS, Java, AWS, .NET and CMS like AEM and DatoCMS.
            I&apos;ve contributed to business-critical systems for companies
            such as TV Globo, Prudential do Brasil, TOTVS, Petrobras operations,
            HostPlus and Urban-Rest. I&apos;m especially comfortable in complex
            environments where frontend, backend, APIs and legacy systems need
            to work together cleanly.
            <br />
            <br />
            Languages: Native Portuguese speaker, fluent in English, advanced in
            Spanish and basic French.
          </p>
        </div>
      </div>

      <div className="px-4 xl:px-16">
        <div className="flex flex-row justify-start mt-8">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            Education
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("experience")}
            active={tab === "experience"}
          >
            Experience
          </TabButton>
        </div>
        <div className="flex mt-8">
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
