"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { skillsList } from "../utils/skills-list";
import { educationList } from "../utils/education-list";
import { experienceList } from "../utils/experience-list";
import { ABOUT_TAB, ABOUT_TAB_LABELS, SECTION_ID } from "../utils/constants";

const TimelineList = ({ items }) => (
  <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3">
    {items.map((item) => (
      <li key={item.key} className="border-l-2 border-brass-500/50 pl-4">
        <p className="font-semibold text-brass-200">{item.title}</p>
        {item.subtitle && (
          <p className="text-brass-100/60 mb-2 text-sm">{item.subtitle}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-brass-100/80 rounded-full border border-brass-500/40 px-2 py-0.5 text-xs"
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
    id: ABOUT_TAB.SKILLS,
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
    id: ABOUT_TAB.EDUCATION,
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
    id: ABOUT_TAB.EXPERIENCE,
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

const ABOUT_TABS = Object.values(ABOUT_TAB);

const AboutSection = () => {
  const [tab, setTab] = useState(ABOUT_TAB.SKILLS);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="scroll-mt-[175px] text-white" id={SECTION_ID.ABOUT}>
      <div className="items-start gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        <div className="relative mx-auto w-fit self-start rounded-lg bg-gradient-to-br from-brass-400 via-bronze-600 to-brass-500 p-1.5 shadow-brass md:mx-0">
          <Image
            src={"/images/steampunk-computer.png"}
            alt="steampunk computer"
            width={500}
            height={500}
            className="rounded-md"
            priority
          />
        </div>

        <div className="mt-4 flex h-full flex-col text-left md:mt-0">
          <h2 className="mb-4 font-serif text-4xl font-bold tracking-wide text-brass-300">
            About Me
          </h2>
          <p className="text-brass-100/80 text-justify text-base md:text-lg">
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
        <div className="mt-8 flex flex-row justify-start">
          {ABOUT_TABS.map((tabId) => (
            <TabButton
              key={tabId}
              selectTab={() => handleTabChange(tabId)}
              active={tab === tabId}
            >
              {ABOUT_TAB_LABELS[tabId]}
            </TabButton>
          ))}
        </div>
        <div className="mt-8 flex">
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
