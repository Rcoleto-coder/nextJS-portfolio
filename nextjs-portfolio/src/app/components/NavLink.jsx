import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#b4c5d1] sm:text-xl md:p-0 rounded  hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
