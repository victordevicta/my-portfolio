import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { PROJECT_STATUS, PROJECT_STATUS_LABELS } from "../utils/constants";

const Rivet = ({ className }) => (
  <span
    aria-hidden="true"
    className={`absolute z-10 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-brass-200 via-brass-400 to-bronze-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.7)] ${className}`}
  />
);

const StatusBadge = ({ status }) => {
  const label = PROJECT_STATUS_LABELS[status];
  if (!label) return null;

  const isCompleted = status === PROJECT_STATUS.COMPLETED;
  return (
    <span
      className={clsx(
        "absolute right-7 top-4 rounded-full border px-2.5 py-1 text-xs font-semibold shadow-[0_1px_4px_rgba(0,0,0,0.6)] backdrop-blur-sm",
        isCompleted
          ? "border-patina/80 bg-bronze-950/85 text-patina"
          : "border-brass-400/80 bg-bronze-950/85 text-brass-300",
      )}
    >
      {label}
    </span>
  );
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  status,
}) => {
  return (
    <div className="relative isolate overflow-hidden rounded-xl border-2 border-brass-500/40 bg-bronze-900/60 shadow-brass transition-colors hover:border-brass-400/70">
      <Rivet className="left-2 top-2" />
      <Rivet className="right-2 top-2" />
      <Rivet className="bottom-2 left-2" />
      <Rivet className="bottom-2 right-2" />
      <div
        className="group relative aspect-square"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-bronze-950 bg-opacity-0 transition-all duration-500 group-hover:flex group-hover:bg-opacity-80">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "group/link relative h-14 w-14 rounded-full border-2 border-brass-300/60 hover:border-brass-300",
              previewUrl && "mr-2",
            )}
          >
            <CodeBracketIcon className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-brass-300/80 group-hover/link:text-white" />
          </Link>
          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link relative h-14 w-14 rounded-full border-2 border-brass-300/60 hover:border-brass-300"
            >
              <EyeIcon className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-brass-300/80 group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="px-4 py-6 text-white">
        <StatusBadge status={status} />
        <h5 className="mb-2 font-serif text-xl font-semibold text-brass-200">
          {title}
        </h5>
        <p className="text-brass-100/70 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
