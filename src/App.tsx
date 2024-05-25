import { NavLink } from "react-router-dom";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";

import { useEffect, useState } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setColor("#e900ff");

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center w-100% h-screen">
      <ClimbingBoxLoader
        color={color}
        loading={isLoading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
    <>
      <header className="grid grid-cols-2 sticky top-0 z-40 bg-slate-200 dark:bg-slate-800 h-12 sm:h-6 md:h-10 lg:h-12 xl:h-12 2xl:h-24 font-merriweather">
        <div className="flex justify-start items-center">
          <img
            src="./src/assets/logicloomLogo.png"
            alt="logo"
            className="w-12 h-12"
          />
          <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#e900ff] to-blue-500 bg-clip-text animate-pulse">
            LOGICLOOM
          </h1>
        </div>
        <div className="flex justify-end items-center">
          {/* Popover Button (Only visible on small screens) */}
          <button className="lg:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
            {/* Menu Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Menu Bar (Visible on large screens) */}
          <div className="hidden lg:flex">
            {/* Your existing menu bar code */}
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  <NavLink
                    to="/"
                    className="block p-4 text-sky-800 dark:text-sky-100 text-opacity-50 font-merriweather font-light tracking-wide  bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text animate-pulse"
                  >
                    Home
                  </NavLink>
                </MenubarTrigger>
                <MenubarTrigger>
                  <NavLink
                    to="about"
                    className="block p-4 text-sky-800 dark:text-sky-100 text-opacity-50 font-merriweather font-light tracking-wide  bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text animate-pulse"
                  >
                    About
                  </NavLink>
                </MenubarTrigger>
                <MenubarTrigger>
                  <NavLink
                    to="contact"
                    className="block p-4 text-sky-800 dark:text-sky-100 text-opacity-50 font-merriweather font-light tracking-wide  bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text animate-pulse"
                  >
                    Contact
                  </NavLink>
                </MenubarTrigger>
                <MenubarTrigger>
                  <NavLink
                    to="signup"
                    className="block p-4 text-sky-800 dark:text-sky-100 text-opacity-50 font-merriweather font-light tracking-wide  bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text animate-pulse"
                  >
                    Signup
                  </NavLink>
                </MenubarTrigger>
                <MenubarTrigger>
                  <NavLink
                    to="login"
                    className="block p-4 text-sky-800 dark:text-sky-100 text-opacity-50 font-merriweather font-light tracking-wide  bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text animate-pulse"
                  >
                    Login
                  </NavLink>
                </MenubarTrigger>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                  <ModeToggle />
                </ThemeProvider>
              </MenubarMenu>
            </Menubar>
          </div>

          {/* Popover Content (Visible on small screens when isOpen is true) */}
          {isOpen && (
            <>
              <div className="absolute flex top-10 w-full z-10 bg-slate-200 dark:bg-slate-800 border-none shadow-lg lg:hidden ">
                <NavLink
                  to="/"
                  className="block p-4 dark:text-transparent bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text animate-pulse"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="block p-4 dark:text-transparent bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text animate-pulse"
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="block p-4 dark:text-transparent bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text animate-pulse"
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/signup"
                  className="block p-4 dark:text-transparent bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text animate-pulse"
                >
                  Signup
                </NavLink>
                <NavLink
                  to="/login"
                  className="block p-4 dark:text-transparent bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text animate-pulse"
                >
                  Login
                </NavLink>
              </div>
              <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ModeToggle />
              </ThemeProvider>
            </>
          )}
        </div>
      </header>
      <main>
        <div className="flex items-center justify-center h-screen">
          <div className="area">
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div
            className="relative flex justify-center items-center w-full  bg-transparent-gradient-to-r from-[#e900ff] to-[#7b2cbf] z-0 "
              
          >
            <AnimatedRoutes />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
