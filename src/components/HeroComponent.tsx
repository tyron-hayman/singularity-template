import * as motion from "motion/react-client";
import TextAnimation from "./TextAnimationComponent";
import { MapPin } from "lucide-react";

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
    <div className="w-full h-screen flex items-center justify-center">
      <div className="container">
        <h1 className="mainHeadings text-[7vw] leading-[7vw] font-black text-[var(--color-foreground)]">
          <TextAnimation phrase={title} />
        </h1>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: animationTiming,
              delay: 0.75,
              ease: "anticipate",
            },
          }}
          className="text-xl leading-relaxed font-normal text-[var(--color-foreground)] mt-5"
        >
          <MapPin className="inline-block" color="#F05454" strokeWidth={2} /> {subTitle}
        </motion.h2>
      </div>
    </div>
  );
};

export default HeroComponent;
