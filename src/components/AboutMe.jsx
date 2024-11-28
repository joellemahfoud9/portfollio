import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const AboutMe = () => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const lineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5, 
      },
    },
  };

  return (
    <div id="aboutme" className="border-b border-gray-400 text-white p-8 font-sans">
       <motion.h2
        className="text-4xl font-bold mb-9 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        About ME
      </motion.h2>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="mb-8"
      >
        <motion.h2
          className="text-2xl font-semibold pb-2"
          variants={itemVariants}
        >
          Education:
        </motion.h2>
        <motion.div
          className="relative pl-8"
          variants={lineVariants} 
        >
          <div className="absolute left-4 top-0 h-full border-l-2 border-[#64ffda]">
            <div className="w-5 h-5 bg-white border-2 border-[#64ffda] rounded-full absolute -left-[0.6rem] top-0"></div>
          </div>
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div className="ml-8" variants={itemVariants}>
              <h3 className="font-bold pb-2">
                INFORMATION TECHNOLOGY. DAMASCUS UNIVERSITY.
              </h3>
              <p className="text-gray-400">2021 - Expected 2026</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="mb-8"
      >
        <motion.h2
          className="text-2xl font-semibold pt-2 pb-2"
          variants={itemVariants}
        >
          Professional Experience
        </motion.h2>
        <motion.div
          className="relative pl-8"
          variants={lineVariants} 
        >
          <div className="absolute left-4 top-0 h-full border-l-2 border-[#64ffda]">
            <div className="w-5 h-5 bg-white border-2 border-[#64ffda] rounded-full absolute -left-[0.6rem] top-0"></div>
          </div>
          <motion.div className="space-y-6" variants={containerVariants}>
        
            <motion.div className="ml-8" variants={itemVariants}>
                <h3 className="font-bold pb-2">SKILLS:</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>HTML, CSS, JavaScript</li>
                <li>React, TypeScript, Next.js</li>
                <li>PHP Laravel, MySQL</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutMe;