import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useMediaQuery from "./MediaQuery";

function Contact() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const positions = [
    { pos: { x: -80, y: -100 } }, // Top-left
    { pos: { x: 0, y: -160 } }, // Top-center
    { pos: { x: 80, y: -100 } }, // Top-right
    { pos: { x: -60, y: 100 } }, // Bottom-left
    { pos: { x: 60, y: 100 } }, // Bottom-right
  ];

  const cndataArr = [
    {
      mobpos: { x: -80, y: -100 },// Top-left
      pos: { x: -160, y: -117 }, // Top-left
      heading: "Git-Hub",
      content:
        "Explore my projects and contributions on GitHub. Follow me to stay updated on my latest coding adventures and open-source contributions.",
      url: "https://github.com/QuantumQuanta",
      imagePathname: "./src/assets/github-square.svg",
    },
    {
      mobpos:{ x: 0, y: -160 }, // Top-center
      pos: { x: 160, y: -117 }, // Top-right
      heading: "Email",
      content:
        "Feel free to send me an email at nathshubham2@gmail.com. I check my inbox regularly and will get back to you as soon as possible",
      url: "nathshubham2@gmail.com",
      imagePathname: "./src/assets/gmail.svg",
    },
    {
      mobpos: { x: 80, y: -100 },// Top-right
      pos: { x: -255, y: 117 }, // Bottom-left
      heading: "LinkedIn",
      content:
        "Connect with me on LinkedIn for professional networking, updates, and more. I'm always open to discussing new opportunities and expanding my professional network.",
      url: "https://www.linkedin.com/in/shubham-nath-2b190a199/",
      imagePathname: "./src/assets/linkedin-in.svg",
    },
    {
      mobpos: { x: -60, y: 100 },// Bottom-left
      pos: { x: 255, y: 117 }, // Bottom-right
      heading: "Call",
      content:
        "If you prefer to speak directly, you can reach me at [Your Contact Number]. Whether it's a quick question or a detailed discussion, I'm here to help.",
      url: "+91 9563262964",
      imagePathname: "./src/assets/call.svg",
    },
    {
      mobpos: { x: 60, y: 100 } , // Bottom-right
      pos: { x: 0, y: 117 }, // Bottom-center
      heading: "Social Media",
      content:
        "If you prefer to speak directly, you can reach me at [Your Contact Number]. Whether it's a quick question or a detailed discussion, I'm here to help.",
      url: "https://www.facebook.com/bullet.raja.7503",
      imagePathname: "./src/assets/facebook.png",
    },
  ];

  if (isMobile) {
    /*For mobile iphone 11*/
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
        className="flex items-center justify-center w-full h-screen bg-transparent "
      >
        <div className="flex justify-center items-center h-screen">
          <motion.div
            onClick={handleToggle}
            className={`flex relative justify-center items-center cursor-pointer ${
              isOpen ? "w-[200px] h-[95px]" : "w-[150px] h-[100px]"
            } bg-opacity-40 dark:bg-opacity-40 bg-slate-200 dark:bg-slate-800 rounded-lg`}
            initial={{ scale: 1 }}
            animate={{ scale: isOpen ? 1.5 : 1 }}
            transition={{ duration: 0.5 }}
          >
            {isOpen && (
              <>
                <span className="text-xs text-center text-slate-800 dark:text-slate-50 p-2">
                  Feel free to reach out for web development inquiries, project
                  collaborations, or support. Contact me via email or any of
                  these today!
                </span>
                <AnimatePresence>
                  {cndataArr.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex absolute justify-center items-center rounded-full bg-opacity-40 dark:bg-opacity-40 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-50 w-[90px] h-[90px] p-3"
                      initial={{ opacity: 0, x: 0, y: 0 }}
                      animate={{ opacity: 1, x: item.mobpos.x, y: item.mobpos.y }}
                      exit={{ opacity: 0, x: 0, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Content {index + 1} */}
                      <div className="h-[50px] w-full text-xs">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex animate-wiggle justify-center items-center"
                        >
                          <img
                            src={item.imagePathname}
                            alt="#errorPic"
                            className="w-[50px] h-[50px]"
                          />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </>
            )}
            {!isOpen && (
              <span className="text-slate-800 dark:text-slate-50">
                Contact With Me
              </span>
            )}
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    /*For Default*/
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{
        ease: [0.17, 0.67, 0.83, 0.67],
        duration: 2,
        x: { duration: 1 },
      }}
      className="flex items-center justify-center w-[480px] h-[480px] bg-transparent "
    >
      <div className="flex justify-center items-center h-screen">
        <motion.div
          onClick={handleToggle}
          className={`flex relative justify-center items-center cursor-pointer ${
            isOpen ? "w-[300px] h-[100px]" : "w-[150px] h-[50px]"
          } bg-opacity-40 dark:bg-opacity-40 bg-slate-200 dark:bg-slate-800 rounded-lg`}
          initial={{ scale: 1 }}
          animate={{ scale: isOpen ? 1.5 : 1 }}
          transition={{ duration: 0.5 }}
        >
          {isOpen && (
            <>
              <span className="text-xs text-slate-800 dark:text-slate-50 px-3">
                Feel free to reach out for web development inquiries, project
                collaborations, or support. Contact me via email or any of these
                today!
              </span>
              <AnimatePresence>
                {cndataArr.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex absolute justify-center items-center rounded-lg bg-opacity-40 dark:bg-opacity-40 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-50 w-[250px] h-[130px] p-3"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{ opacity: 1, x: item.pos.x, y: item.pos.y }}
                    exit={{ opacity: 0, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Content {index + 1} */}
                    <div className="h-full w-full text-xs">
                      <h1 className="font-bold bg-gradient-to-b from-blue-900 to-blue-500 dark:from-white to-[#e900ff] text-transparent bg-clip-text">
                        {item.heading}
                      </h1>
                      <p>{item.content}</p>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex animate-bounce p-2"
                      >
                        <img
                          src={item.imagePathname}
                          alt="#errorPic"
                          className="w-[10px] h-[10px]"
                        />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </>
          )}
          {!isOpen && (
            <span className="text-slate-800 dark:text-slate-50">
              Contact With Me
            </span>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
