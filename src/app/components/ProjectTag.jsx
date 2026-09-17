import React from "react";
import clsx from "clsx";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={clsx(
        "cursor-pointer rounded-full border-2 px-6 py-3 text-xl transition-colors",
        isSelected
          ? "border-brass-400 bg-gradient-to-br from-brass-300 to-brass-500 text-bronze-950"
          : "border-brass-500/40 text-brass-200/80 hover:border-brass-300 hover:text-brass-300",
      )}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
