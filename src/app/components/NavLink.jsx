import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-brass-200/80 sm:text-xl rounded md:p-0 hover:text-brass-300 transition-colors"
    >
      {title}
    </Link>
  );
};

export default NavLink;
