import { EnvelopeIcon } from "@heroicons/react/24/outline";

const GitHubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.26 5.7.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45Z" />
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="scroll-mt-[175px] text-white px-4 xl:px-16 pb-10"
    >
      <div className="flex flex-col items-center text-center gap-4 py-6">
        <p className="font-serif text-xl text-brass-200">
          Victor de Victa
          <span className="text-brass-100/60 font-sans text-base">
            {" "}
            — Software Engineer by trade. Pirate and vampire hunter in his spare
            time.
          </span>
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/victordevicta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-brass-300/80 hover:text-brass-200 transition-colors"
          >
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/victor-de-victa-69686a56/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-brass-300/80 hover:text-brass-200 transition-colors"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a
            href="mailto:victordevicta@gmail.com"
            aria-label="Email"
            className="text-brass-300/80 hover:text-brass-200 transition-colors"
          >
            <EnvelopeIcon className="h-6 w-6" />
          </a>
        </div>

        <p className="text-brass-100/50 text-sm">
          © {year} Victor de Victa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
