"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Pokedex",
    description:
      "A catalogue where we can see details from the first 250 pokemons.",
    image: "/images/projects/pokedex.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/victordevicta/pokedex",
    // previewUrl: "/",
  },
  {
    id: 2,
    title: "Next.js Portfolio Website",
    description: "My personal portifolio written in Next.js.",
    image: "/images/projects/steampunk-atom.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/victordevicta/my-portfolio",
    // previewUrl: "/",
  },
  {
    id: 3,
    title: "Macrocounter O' Doom and Dispair",
    description:
      "A mobile app for tracking daily calories and macronutrients with a dark fantasy twist.",
    image: "/images/projects/macrocounter.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/victordevicta/macro-counter-o-doom-and-dispair",
    // previewUrl: "/",
  },
  {
    id: 4,
    title: "Eldertable",
    description:
      "A virtual tabletop platform for creating and playing tabletop RPG campaigns online.",
    image: "/images/projects/eldertable.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/victordevicta/rpg-tabletop",
    // previewUrl: "/",
  },
  {
    id: 5,
    title: "LumiMotion",
    description:
      "An AI-powered web app that turns static images into seamless animated wallpapers.",
    image: "/images/projects/lumiMotion.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/victordevicta/lumi-motion",
    // previewUrl: "/",
  },
  {
    id: 6,
    title: "Password Generator",
    description:
      "A simple desktop app for generating secure and customizable random passwords.",
    image: "/images/projects/password-generator.png",
    tag: ["All", "Desktop"],
    gitUrl: "https://github.com/victordevicta/password-generator",
    // previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  return (
    <section id="projects" className="scroll-mt-[185px]">
      <h2 className="font-serif text-4xl font-bold text-brass-300 mb-4 tracking-wide text-center md:text-left">
        My Projects
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            // previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
