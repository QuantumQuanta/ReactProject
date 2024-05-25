
import { Route, Routes, useLocation } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
// import { AnimatePresence } from "./dist/framer-motion";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
