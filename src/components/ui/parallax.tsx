import React, { useRef } from "react";
import { motion } from "framer-motion";

const ParallaxEffect = () => {
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const parallax = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      transition: {
        type: "keyframes",
        values: [0, 50, 100],
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // const { clientX: x, clientY: y } = e;
    // const { innerWidth: width, innerHeight: height } = window;
    // const moveX = ((x - width / 2) / width) * 40; // Adjust 40 for more/less parallax effect
    // const moveY = ((y - height / 2) / height) * 40; // Adjust 40 for more/less parallax effect

    if (parallaxRef.current) {
      //   const constrainedX = Math.min(Math.max(moveX, -0), 0); // Constrain movement to [-10, 10]
      //   const constrainedY = Math.min(Math.max(moveY, -0), 0); // Constrain movement to [-10, 10]
      parallaxRef.current.style.transform = `translate(${0}px, ${0}px)`;
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-screen h-2/3 flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-opacity-50 dark:bg-opacity-50"
        style={{
          opacity: 0.65,
          backgroundImage:
            "url(https://source.unsplash.com/random/1280×1366/?code)",
        }}
        ref={parallaxRef}
        initial="initial"
        whileHover="hover"
        variants={parallax}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-600 dark:from-slate-600 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 p-10 bg-white dark:bg-slate-800 bg-opacity-50 dark:bg-opacity-50 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-semibold text-slate-800 dark:text-slate-50 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg">Explore my work and projects.</p>
        <p className="text-lg">Shubham Nath </p>
        <p className="text-lg">Web Developer</p>
      </div>
      
    </div>
  );
};

export default ParallaxEffect;
