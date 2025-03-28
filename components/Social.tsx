"use client";

import Link from "next/link";

import { motion } from "framer-motion";
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

interface Props {
  orientation: "vertical" | "horizontal";
}

const Social = (props: Props) => {
  const { orientation= "vertical" } = props;

  const isVertical = orientation === "vertical";

  return (
    <motion.div
      className={`flex ${isVertical ? 'flex-col' : 'flex-row'} items-center gap-6`}
      initial={{ opacity: 0, x: isVertical ? -10 : 0, y: isVertical ? 0 : 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
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
      {isVertical && (
        <>
          <span className="w-px h-24 bg-foreground/20 mt-2"></span>
        </>
      )}
    </motion.div>
  );
}
export default Social;
