"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroPhoto = () => {
  return (
    <div className="h-full w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
        opacity: 1,
          transition: { delay: 0.5, duration: 0.3, ease: "easeIn" }
        }}
      >
        <div className="w-[298px] h-[298px] xl:h-[498px] xl:w-[498px] mix-blend-lighten">
          <Image
            src="/profile.png"
            alt="puran ban"
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
export default HeroPhoto;
