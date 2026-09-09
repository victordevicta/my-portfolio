import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-brass-300 border-b-2 border-brass-400"
    : "text-brass-100/60";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 pb-1 font-semibold hover:text-brass-300 transition-colors ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
