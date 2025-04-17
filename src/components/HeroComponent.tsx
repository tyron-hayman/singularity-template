import * as motion from "motion/react-client";

const HeroComponent = ({
  title = "This is a title",
  subTitle = "This is a subtitle",
  nav,
}: {
  title?: string;
  subTitle?: string;
  nav?: Array<{ id: number; text: string; anchor: string }>;
}) => {
  const animationTiming: number = 0.75;

  return (
    <div className="container mx-auto">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: animationTiming, ease: "easeOut" },
        }}
        className="mainHeadings text-[7vw] leading-[7vw] font-black text-[var(--color-foreground)]"
      >
        {title}
      </motion.h1>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: animationTiming, delay: 0.25, ease: "easeOut" },
        }}
        className="text-3xl leading-relaxed font-normal text-[var(--accent-color)] mt-5"
      >
        {subTitle}
      </motion.h2>
      <ul className="block mt-20 flex gap-5 items-center sticky top-[20px]">
        {nav?.map(
          (
            navItem: { id: number; text: string; anchor: string },
            index: number
          ) => {
            return (
              <motion.li
                key={navItem.id}
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: animationTiming,
                    delay: 0.275 * (index + 1),
                    ease: "easeOut",
                  },
                }}
              >
                <a
                  href={navItem.anchor}
                  className="border-[var(--color-foreground)] border-solid border-2 rounded-full text-[var(--color-foreground)] text-2xl block px-10 py-2"
                >
                  {navItem.text}
                </a>
              </motion.li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default HeroComponent;
