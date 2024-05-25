import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
    transition={{
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 2,
      x: { duration: 1 }
    }}
    >
      <h1>This is Home</h1>
    </motion.div>
  );
}

export default Home;
