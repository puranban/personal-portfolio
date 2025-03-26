"use client";

import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const links = [
  {
    icon: <IoLogoLinkedin />,
    path: "",
  },
  {
    icon: <IoLogoGithub />,
    path: "",
  },
  {
    icon: <IoLogoTwitter />,
    path: "",
  },
];

const Social = () => {
  return (
    <div className="flex gap-5">
      {links?.map((item, i) => (
        <Link
          className="flex border border-accent rounded-full p-2 text-hover justify-center items-center
          hover:bg-hover hover:text-background hover:transition-all duration-300"
          key={i}
          href={item.path}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
export default Social;
