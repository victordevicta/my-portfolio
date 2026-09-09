import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-bronze-950 bg-gradient-to-br from-brass-300 to-brass-500 border-brass-400"
    : "text-brass-200/80 border-brass-500/40 hover:border-brass-300 hover:text-brass-300";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition-colors`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
