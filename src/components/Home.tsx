import { motion } from "framer-motion";
import ParallaxEffect from "./ui/parallax";
import ParallaxText from "./ui/scrollerParallax";
function Home() {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{
        ease: [0.17, 0.67, 0.83, 0.67],
        duration: 2,
        x: { duration: 1 },
      }}
    >
      <div className="h-screen w-screen bg-opacity-50">
        <ParallaxEffect />
        <div className="relative z-10 w-screen grid grid-flow-col justify-center mt-[-40px] space-x-8 md:space-x-48 lg:space-x-48 xl:space-x-48 animate-bounce">
          <div className="rounded-full justify-center items-center break-normal text-pretty bg-slate-200 dark:bg-slate-800 h-[115px] w-[115px] animate-wiggle p-4">
            <span>Modern Web Experiences</span>
          </div>
          <div className="rounded-full justify-center items-center break-normal text-pretty bg-slate-200 dark:bg-slate-800 h-[115px] w-[115px] animate-wiggle p-4">
            <span>Full Stack Development</span>
          </div>
          <div className="rounded-full justify-center items-center break-normal text-pretty bg-slate-200 dark:bg-slate-800 h-[115px] w-[115px] animate-wiggle p-4">
            <span>Learning and Innovation</span>
          </div>
        </div>
        <ParallaxText baseVelocity={-2}>Web Developer :: JavaScript Enthusiast :: Passionate about Frontend & Backend Development:: </ParallaxText>
        <ParallaxText baseVelocity={-5}>Let's build something amazing together! </ParallaxText>
      </div>
    </motion.div>
  );
}

export default Home;
