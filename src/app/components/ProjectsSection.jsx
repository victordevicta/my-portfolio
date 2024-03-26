import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Pokedex",
    description:
      "A catalogue where we can see details from the first 250 pokemons",
    image: "/images/projects/pokedex.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "The Satanic Blog Project",
    description:
      "A catalogue where we can see details from the seven demons masters of the seven circles of hell and archetypes of the seven deadly sins",
    image: "/images/projects/satanic-blog2.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Next.js Portfolio Website",
    description: "My personal portifolio written in Next.js",
    image: "/images/projects/steampunk-computer.png",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
