import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  text: string | string[];
  className?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  by?: 'word' | 'letter' | 'line';
}

const AnimatedText = (props: Props) => {
  const {
  text,
  className = "",
  once = true,
  delay = 0,
  duration = 0.05,
  by = "letter"
} = props;

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  // Normalize text to array of lines
  const textArray = Array.isArray(text) ? text : [text];

  const splitByLetter = (word: string) => {
    return Array.from(word).map((letter, index) => (
      <motion.span
        key={index}
        className="inline-block overflow-hidden char-animation"
        style={{ display: "inline-block" }}
        custom={index}
        variants={{
          hidden: {
            y: "100%",
            opacity: 0,
          },
          visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: delay + i * duration,
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1]
            }
          })
        }}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ));
  };

  const splitByWord = (line: string) => {
    return line.split(" ").map((word, index, array) => (
      <motion.span
        key={index}
        className="inline-block overflow-hidden whitespace-pre"
        style={{ display: "inline-block" }}
        custom={index}
        variants={{
          hidden: { 
            y: "100%", 
            opacity: 0 
          },
          visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: delay + i * duration,
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1]
            }
          })
        }}
      >
        {word}{index !== array.length - 1 ? "\u00A0" : ""}
      </motion.span>
    ));
  };

  const splitByLine = (lines: string[]) => {
    return lines.map((line, index) => (
      <motion.div
        key={index}
        className="overflow-hidden"
        custom={index}
        variants={{
          hidden: { 
            y: "100%", 
            opacity: 0 
          },
          visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
              delay: delay + i * duration * 10,
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1]
            }
          })
        }}
      >
        {line}
      </motion.div>
    ));
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {by === "letter" && textArray.map((line, lineIndex) => (
        <div key={lineIndex} className="overflow-hidden">
          {splitByLetter(line)}
        </div>
      ))}

      {by === "word" && textArray.map((line, lineIndex) => (
        <div key={lineIndex} className="overflow-hidden">
          {splitByWord(line)}
        </div>
      ))}

      {by === "line" && splitByLine(textArray)}
    </motion.div>
  );
};

export default AnimatedText;
