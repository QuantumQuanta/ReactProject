import { motion } from "framer-motion";
import useMediaQuery from "./MediaQuery";
import { useState } from "react";
function About() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [isHovered, setIsHovered] = useState(false);
  const [isTap, setIsTap] = useState(false);
  const renderMotionDivs = () => {
    if (isMobile) {
      {
        /*Mobile content */
      }
      return (
        <div className="flex flex-col h-screen">
          <div className="flex h-1/3 justify-center items-center pr-36">
            <div className="relative w-full h-screen [perspective:1000px]">
              <div className="font-sans h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] absolute top-[40%] left-[50%] sm:top-[30%] sm:left-[30%] transform -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] animate-[roll_5s_infinite]">
                <div className="h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] text-center text-white bg-transparent text-3xl box-border absolute [transition:all_1s] [transform:translateZ(75px)] sm:[transform:translateZ(125px)]">
                  <img
                    src="./src/assets/react-2.svg"
                    alt="reactLogo"
                    className="object-fit h-full w-full"
                  />
                </div>
                <div className="h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] text-center text-white bg-transparent text-3xl box-border absolute [transition:all_1s] [transform:translateZ(-75px)] sm:[transform:translateZ(-125px)]">
                  <img
                    src="./src/assets/framer-motion.svg"
                    alt="framer-motion"
                    className="object-fit h-full w-full"
                  />
                </div>
                <div className="h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] text-center text-white bg-transparent text-3xl box-border absolute [transition:all_1s] [transform:rotateY(-90deg)] right-[75px] sm:right-[125px]">
                  <img
                    src="./src/assets/express-109.svg"
                    alt="expressLogo"
                    className="object-fit h-full w-full"
                  />
                </div>
                <div className="h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] text-center text-white bg-transparent text-3xl box-border absolute [transition:all_1s] [transform:rotateY(90deg)] left-[75px] sm:left-[125px]">
                  <img
                    src="./src/assets/bootstrap-5-1.svg"
                    alt="bootstrapLogo"
                    className="object-fit h-full w-full"
                  />
                </div>
                <div className="h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] text-center text-white bg-transparent text-3xl box-border absolute [transition:all_1s] [transform:rotateX(90deg)] bottom-[75px] sm:bottom-[125px]">
                  <img
                    src="./src/assets/tailwind-css-2.svg"
                    alt="tailwindLogo"
                    className="object-fit h-full w-full"
                  />
                </div>
                <div className="h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] text-center text-white bg-transparent text-3xl box-border absolute [transition:all_1s] [transform:rotateX(-90deg)] top-[75px] sm:top-[125px]">
                  <img
                    src="./src/assets/mysqlTransLg.png"
                    alt="mysqlTransLgLogo"
                    className="object-fit h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col h-2/3 overflow-y-scroll invisible-scrollbar justify-center items-center p-5"
            style={{ gap: isTap ? "0.25rem" : "0 rem" }}
          >
            <motion.div
              className="w-11/12 h-fit text-justify border-0 rounded-lg bg-slate-200 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-40 shadow hover:shadow-2xl pt-3"
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.8 }}
              onTapStart={() => setIsTap(true)}
              onTapCancel={() => setIsTap(false)}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <div>
                <h1 className="text-2xl text-center font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text animate-bounce pb-2 pt-2 ">
                  Personal Details
                </h1>
                <div className="pl-6 pb-3">
                  <p>Shubham Nath</p>
                  <p>Email: nathshubham2@gmail.com</p>
                  <p>Phone: +919563262964</p>
                  <p>Location: Kolkata, India</p>
                  <p>Date of Birth: July 30th, 1997</p>
                  <p>Status: Single</p>
                  <p>Pronouns: he/him</p>
                  <p>Nationality: Indian</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-11/12 h-fit text-justify border-0 rounded-lg bg-slate-200 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-40 shadow hover:shadow-2xl pt-3"
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.8 }}
              onTapStart={() => setIsTap(true)}
              onTapCancel={() => setIsTap(false)}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <div>
                <h1 className="text-2xl text-center font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text animate-bounce pb-2 pt-2 ">
                  PROFILE
                </h1>
                <div className="pl-6 pb-3 pr-6">
                  <p>
                    Dynamic and driven PHP developer with one year of work
                    experience, as well as a strong foundation in process
                    analysis and optimization from Firstsource 2.5 years as an
                    Associate Analyst in the US mortgage ALTA process. Has an
                    undergraduate degree in computer science engineering from
                    Kolkata's University of Engineering and Management. A track
                    record of successfully creating PHP-based apps and using
                    analytical abilities to improve productivity and streamline
                    processes.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-11/12 h-fit text-justify border-0 rounded-lg bg-slate-200 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-40 shadow hover:shadow-2xl pt-3"
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.8 }}
              onTapStart={() => setIsTap(true)}
              onTapCancel={() => setIsTap(false)}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <div>
                <h1 className="text-2xl text-center font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text animate-bounce pb-2 pt-2 ">
                  PROFESSIONAL EXPERIENCE
                </h1>
                <div className="pl-6 pb-3 pr-6">
                  <div>
                    <h2>Envolta Renewal Energy Resources LLP, Web Developer</h2>
                    <p>2023 – 2024 | Kolkata</p>
                    <p>
                      Built Internal CRM using core PHP, JavaScript, JQuery,
                      Ajax, MySql, Bootstrap
                    </p>
                  </div>
                  <div>
                    <h2>Firstsource, Associate Analyst</h2>
                    <p>2020 – 2022 | Bangalore</p>
                    <p>Payoff & Tax Calculation, Title Search (Full Owner)</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-11/12 h-fit text-justify border-0 rounded-lg bg-slate-200 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-40 shadow hover:shadow-2xl pt-3"
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.8 }}
              onTapStart={() => setIsTap(true)}
              onTapCancel={() => setIsTap(false)}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <div>
                <h1 className="text-2xl text-center font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text animate-bounce pb-2 pt-2 ">
                  SKILLS
                </h1>
                <div className="pl-3 pb-3 pr-6">
                  <p>
                    HTML5, CSS3, Tailwindcss, PHP, JavaScript, Typescript,
                    JQuery, AJAX, ReactJS, Bootstrap 5, Shadcn UI, Framer-motion, Zod, MySql,
                    PHPMyAdmin, ExpressJS
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-11/12 h-fit text-justify border-0 rounded-lg bg-slate-200 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-40 shadow hover:shadow-2xl pt-3"
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.8 }}
              onTapStart={() => setIsTap(true)}
              onTapCancel={() => setIsTap(false)}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <div>
                <h1 className="text-2xl text-center font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text animate-bounce pb-2 pt-2 ">
                  EDUCATION
                </h1>
                <div className="pl-3 pb-3 pr-6">
                  <div>
                    <h2>
                      Kalna Ambika Mahismardini High School, Higher Secondary
                    </h2>
                    <p>2014 – 2015 | Kalna</p>
                  </div>
                  <div>
                    <h2>Kalna Ambika Mahismardini High School, Secondary</h2>
                    <p>2012 – 2013 | Kalna</p>
                  </div>
                  <div>
                    <h2>
                      University of Engineering and Management Kolkata, Bachelor
                      of Technology(B.Tech) in Computer Science & Engineering
                    </h2>
                    <p>2015 – 2019 | Kolkata</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-11/12 h-fit text-justify border-0 rounded-lg bg-slate-200 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-40 shadow hover:shadow-2xl pt-3"
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.8 }}
              onTapStart={() => setIsTap(true)}
              onTapCancel={() => setIsTap(false)}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <div>
                <h1 className="text-2xl text-center font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text animate-bounce pb-2 pt-2 ">
                  INTERESTS
                </h1>
                <div className="pl-6 pb-3 pr-6">
                  <p>Chess, PC Games</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-11/12 h-fit text-justify border-0 rounded-lg bg-slate-200 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-40 shadow hover:shadow-2xl pt-3"
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.8 }}
              onTapStart={() => setIsTap(true)}
              onTapCancel={() => setIsTap(false)}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <div>
                <h1 className="text-2xl text-center font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text animate-bounce pb-2 pt-2 ">
                  STRENGTHS
                </h1>
                <div className="pl-3 pb-3 pr-6">
                  <p>
                    Fast Learner, Good Communication Ability, Strong Research
                    Skills, Excellent Team Player, Adaptive Nature
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }
    {
      /*Default content */
    }
    return (
      <div className="flex w-full h-screen">
        <div
          className="grid grid-row-8 grid-col-1 w-1/2 h-full overflow-y-auto invisible-scrollbar justify-center items-center pt-10 pl-14 pr-5 pb-5"
          style={{ gap: isHovered ? "2.5rem" : "1rem" }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="w-4/5 text-justify border-0 rounded-lg bg-slate-200 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-40 shadow hover:shadow-2xl p-5 "
          >
            <div>
              <h1 className="text-2xl text-center font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text animate-bounce pb-2 pt-2 ">
                Personal Details
              </h1>
              <p>Shubham Nath</p>
              <p>Email: nathshubham2@gmail.com</p>
              <p>Phone: +919563262964</p>
              <p>Location: Kolkata, India</p>
              <p>Date of Birth: July 30th, 1997</p>
              <p>Status: Single</p>
              <p>Pronouns: he/him</p>
              <p>Nationality: Indian</p>
              <a
                href="https://www.linkedin.com/in/shubham-nath-2b190a199/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="w-4/5 text-justify border-0 rounded-lg bg-slate-200 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-40 shadow hover:shadow-2xl p-5"
          >
            <div className="">
              <h1 className="text-2xl text-center font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text animate-bounce pb-2 pt-2 ">
                PROFILE
              </h1>
              <p className="text-justify">
                Dynamic and driven PHP developer with one year of work
                experience, as well as a strong foundation in process analysis
                and optimization from Firstsource 2.5 years as an Associate
                Analyst in the US mortgage ALTA process. Has an undergraduate
                degree in computer science engineering from Kolkata's University
                of Engineering and Management. A track record of successfully
                creating PHP-based apps and using analytical abilities to
                improve productivity and streamline processes.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="w-4/5 text-justify border-0 rounded-lg bg-slate-200 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-40 shadow hover:shadow-2xl p-5"
          >
            <div className="">
              <h1 className="text-2xl text-center font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text animate-bounce pb-2 pt-2 ">
                PROFESSIONAL EXPERIENCE
              </h1>
              <div>
                <h2>Envolta Renewal Energy Resources LLP, Web Developer</h2>
                <p>2023 – 2024 | Kolkata</p>
                <p>
                  Built Internal CRM using core PHP, JavaScript, JQuery, Ajax,
                  MySql, Bootstrap
                </p>
              </div>
              <div>
                <h2>Firstsource, Associate Analyst</h2>
                <p>2020 – 2022 | Bangalore</p>
                <p>Payoff & Tax Calculation, Title Search (Full Owner)</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="w-4/5 text-justify border-0 rounded-lg bg-slate-200 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-40 shadow hover:shadow-2xl p-5"
          >
            <div className="">
              <h1 className="text-2xl text-center font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text animate-bounce pb-2 pt-2 ">
                SKILLS
              </h1>
              <p>
                HTML5, CSS3, Tailwindcss, PHP, JavaScript, Typescript, JQuery,
                AJAX, ReactJS, Bootstrap 5, Shadcn UI, Framer-motion, Zod,
                MySql, PHPMyAdmin, ExpressJS
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="w-4/5 text-justify border-0 rounded-lg bg-slate-200 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-40 shadow hover:shadow-2xl p-5"
          >
            <div className="">
              <h1 className="text-2xl text-center font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text animate-bounce pb-2 pt-2 ">
                EDUCATION
              </h1>
              <div>
                <h2>Kalna Ambika Mahismardini High School, Higher Secondary</h2>
                <p>2014 – 2015 | Kalna</p>
              </div>
              <div>
                <h2>Kalna Ambika Mahismardini High School, Secondary</h2>
                <p>2012 – 2013 | Kalna</p>
              </div>
              <div>
                <h2>
                  University of Engineering and Management Kolkata, Bachelor of
                  Technology(B.Tech) in Computer Science & Engineering
                </h2>
                <p>2015 – 2019 | Kolkata</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="w-4/5 text-justify border-0 rounded-lg bg-slate-200 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-40 shadow hover:shadow-2xl p-5"
          >
            <div className="">
              <h1 className="text-2xl text-center font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text animate-bounce pb-2 pt-2 ">
                INTERESTS
              </h1>
              <p>Chess, PC Games</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="w-4/5 text-justify border-0 rounded-lg bg-slate-200 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-40 shadow hover:shadow-2xl p-5"
          >
            <div className="">
              <h1 className="text-2xl text-center font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text animate-bounce pb-2 pt-2 ">
                STRENGTHS
              </h1>
              <p>
                Fast Learner, Good Communication Ability, Strong Research
                Skills, Excellent Team Player, Adaptive Nature
              </p>
            </div>
          </motion.div>
        </div>
        <div className="w-1/2 h-full flex">
          <div className="w-full h-screen [perspective:1000px]">
            <div className="font-sans sm:h-[250px] sm:w-[250px] xs:h-[150px] xs:w-[150px] absolute sm:top-[30%] sm:left-[30%] xs:top-[40%] xs:left-[30%] [transform-style:preserve-3d] animate-[roll_5s_infinite]">
              <div className="sm:h-[250px] sm:w-[250px] xs:h-[150px] xs:w-[150px] text-center text-white bg-transparent text-3xl box-border absolute [transition:all_1s] sm:[transform:translateZ(125px)] xs:[transform:translateZ(75px)]">
                <img
                  src="./src/assets/react-2.svg"
                  alt="reactLogo"
                  className="object-fit h-full w-full"
                />
              </div>
              <div className="sm:h-[250px] sm:w-[250px] xs:h-[150px] xs:w-[150px] text-center text-white bg-transparent text-3xl box-border absolute [transition:all_1s] sm:[transform:translateZ(-125px)] xs:[transform:translateZ(-75px)]">
                <img
                  src="./src/assets/framer-motion.svg"
                  alt="framer-motion"
                  className="object-fit h-full w-full"
                />
              </div>
              <div className="sm:h-[250px] sm:w-[250px] xs:h-[150px] xs:w-[150px] text-center text-white bg-transparent text-3xl box-border absolute [transition:all_1s] sm:right-[125px] xs:right-[75px] [transform:rotateY(-90deg)]">
                <img
                  src="./src/assets/express-109.svg"
                  alt="expressLogo"
                  className="object-fit h-full w-full"
                />
              </div>
              <div className="sm:h-[250px] sm:w-[250px] xs:h-[150px] xs:w-[150px] text-center text-white bg-transparent text-3xl box-border absolute [transition:all_1s] sm:left-[125px] xs:left-[75px] [transform:rotateY(90deg)]">
                <img
                  src="./src/assets/bootstrap-5-1.svg"
                  alt="bootstrapLogo"
                  className="object-fit h-full w-full"
                />
              </div>
              <div className="sm:h-[250px] sm:w-[250px] xs:h-[150px] xs:w-[150px] text-center text-white bg-transparent text-3xl box-border absolute [transition:all_1s] sm:bottom-[125px] xs:bottom-[75px] [transform:rotateX(90deg)]">
                <img
                  src="./src/assets/tailwind-css-2.svg"
                  alt="tailwindLogo"
                  className="object-fit h-full w-full"
                />
              </div>
              <div className="sm:h-[250px] sm:w-[250px] xs:h-[150px] xs:w-[150px] text-center text-white bg-transparent text-3xl box-border absolute [transition:all_1s] sm:top-[125px] xs:top-[75px] [transform:rotateX(-90deg)]">
                <img
                  src="./src/assets/mysqlTransLg.png"
                  alt="mysqlTransLgLogo"
                  className="object-fit h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
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
      {renderMotionDivs()}
    </motion.div>
  );
}

export default About;
