import * as motion from "motion/react-client";

const HeroComponent = ({
  title = "This is a title",
  nav,
}: {
  title?: string;
  nav?: Array<{ id: number; text: string; anchor: string }>;
}) => {
  return (
    <div className="container mx-auto">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeOut" },
        }}
        className="mainHeadings text-[7vw] leading-[7vw] font-black text-[var(--color-foreground)]"
      >
        {title}
      </motion.h1>
      <motion.ul
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, delay: 0.25, ease: "easeOut" },
        }}
        className="my-20 flex gap-5 items-center"
      >
        {nav?.map(
          (
            navItem: { id: number; text: string; anchor: string },
            index: number
          ) => {
            return (
              <li key={navItem.id}>
                <a
                  href={navItem.anchor}
                  className="border-[var(--color-foreground)] border-solid border-2 rounded-full text-[var(--color-foreground)] text-2xl block px-10 py-2"
                >
                  {navItem.text}
                </a>
              </li>
            );
          }
        )}
      </motion.ul>
    </div>
  );
};

export default HeroComponent;
