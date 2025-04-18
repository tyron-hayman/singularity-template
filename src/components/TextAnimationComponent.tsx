import * as motion from "motion/react-client";
import { easeOut, stagger } from "motion";
import type { Variants } from "motion/react";

const TextAnimation = ({ phrase }: { phrase: string }) => {
  const phraseDeconstruct: Array<string> = phrase.split(" ");
  const variants: Variants | undefined = {
    initial: { opacity: 0, y: 100, rotateX: "45deg" },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      rotateX: "0deg",
      transition: {
        duration: 1,
        delay: index * 0.05,
        ease: "anticipate",
      },
    }),
  };
  return (
    <>
      {phraseDeconstruct.map((text: string, index: number) => {
        return (
          <span
            key={`phrase${index}`}
            className="inline-block pr-5 overflow-hidden"
          >
            <motion.span
              className="block"
              custom={index}
              variants={variants}
              initial="initial"
              animate="visible"
            >
              {text}
            </motion.span>
          </span>
        );
      })}
    </>
  );
};

export default TextAnimation;
