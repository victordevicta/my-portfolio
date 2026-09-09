import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="rounded-xl bg-bronze-900/60 border border-brass-500/25 shadow-brass overflow-hidden hover:border-brass-400/60 transition-colors">
      <div
        className="h-52 md:h-72 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-bronze-950 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-brass-300/60 hover:border-brass-300 group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-brass-300/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white py-6 px-4">
        <h5 className="font-serif text-xl font-semibold mb-2 text-brass-200">
          {title}
        </h5>
        <p className="text-brass-100/70">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
