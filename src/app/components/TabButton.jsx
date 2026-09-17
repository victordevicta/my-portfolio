import React from "react";
import clsx from "clsx";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button onClick={selectTab}>
      <p
        className={clsx(
          "mr-3 pb-1 font-semibold transition-colors hover:text-brass-300",
          active
            ? "border-b-2 border-brass-400 text-brass-300"
            : "text-brass-100/60",
        )}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
