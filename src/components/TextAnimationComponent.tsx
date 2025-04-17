import * as motion from "motion/react-client";
import { easeOut, stagger } from "motion";
import type { Variants } from "motion/react";

const TextAnimation = ({ phrase }: { phrase: string }) => {
  const phraseDeconstruct: Array<string> = phrase.split(" ");
  const variants: Variants | undefined = {
    initial: { opacity: 0, y: 100 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: index * 0.1,
        ease: "anticipate",
      },
    }),
  };
  return (
    <>
      {phraseDeconstruct.map((text: string, index: number) => {
        return (
          <motion.span
            key={`phrase${index}`}
            className="inline-block pr-5"
            custom={index}
            variants={variants}
            initial="initial"
            animate="visible"
          >
            {text}
          </motion.span>
        );
      })}
    </>
  );
};

export default TextAnimation;
