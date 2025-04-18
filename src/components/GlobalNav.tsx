import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

const GlobalNav = () => {
  const variants: Variants | undefined = {
    initial: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div className="fixed inset-x-0 y-0 z-[50] bg-[var(--background)]" variants={variants} initial="initial" animate="visible">
      <div className="container mx-auto py-5">
        <p className="text-lg text-[var(--color-foreground)] font-black p-0 m-0">
          TYRON<span className="opacity-50">HAYMAN</span>
        </p>
      </div>
    </motion.div>
  );
};

export default GlobalNav;
