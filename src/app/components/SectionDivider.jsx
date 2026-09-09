import { CogIcon } from "@heroicons/react/24/solid";

const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center gap-4 py-10" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brass-500/60 to-brass-500/60" />
      <CogIcon className="h-6 w-6 text-brass-400" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-brass-500/60 to-brass-500/60" />
    </div>
  );
};

export default SectionDivider;
