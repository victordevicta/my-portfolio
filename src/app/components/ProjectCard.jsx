import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Rivet = ({ className }) => (
  <span
    aria-hidden="true"
    className={`absolute z-10 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-brass-200 via-brass-400 to-bronze-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.7)] ${className}`}
  />
);

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="relative isolate rounded-xl bg-bronze-900/60 border-2 border-brass-500/40 shadow-brass overflow-hidden hover:border-brass-400/70 transition-colors">
      <Rivet className="top-2 left-2" />
      <Rivet className="top-2 right-2" />
      <Rivet className="bottom-2 left-2" />
      <Rivet className="bottom-2 right-2" />
      <div
        className="aspect-square relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-bronze-950 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
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
        <p className="text-brass-100/70 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
