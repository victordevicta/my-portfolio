"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { PROJECT_TAG, SECTION_ID } from "../utils/constants";
import { projectsList } from "../utils/projects-list";

const FILTER_TAGS = Object.values(PROJECT_TAG);

const ProjectsSection = () => {
  const [tag, setTag] = useState(PROJECT_TAG.ALL);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsList.filter((project) =>
    project.tag.includes(tag),
  );

  return (
    <section id={SECTION_ID.PROJECTS} className="scroll-mt-[185px]">
      <h2 className="mb-4 text-center font-serif text-4xl font-bold tracking-wide text-brass-300 md:text-left">
        My Projects
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-2 py-6 text-white">
        {FILTER_TAGS.map((filterTag) => (
          <ProjectTag
            key={filterTag}
            onClick={handleTagChange}
            name={filterTag}
            isSelected={tag === filterTag}
          />
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            status={project.status}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
