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

// import React from 'react';

// const AboutMe = () => {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#0B0C10] to-[#1F2833] text-white py-16 px-4 flex justify-center items-center">
//       <div className="max-w-4xl w-full space-y-12">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center md:text-left">About Me.</h1>

//         <div className="relative border-l border-gray-600 space-y-12 pl-8 md:pl-12">
//           {/* Green Dots */}
//           <span className="absolute -left-[0.5rem] top-1 w-4 h-4 rounded-full bg-green-500 border-2 border-green-400"></span>
//           <span className="absolute -left-[0.5rem] top-[8.5rem] md:top-[7.5rem] w-4 h-4 rounded-full bg-green-500 border-2 border-green-400"></span>
//           <span className="absolute -left-[0.5rem] top-[19rem] md:top-[17rem] w-4 h-4 rounded-full bg-green-500 border-2 border-green-400"></span>
//           <span className="absolute -left-[0.5rem] top-[31rem] md:top-[26.5rem] w-4 h-4 rounded-full bg-green-500 border-2 border-green-400"></span>

//           {/* Who Am I */}
//           <div>
//             <h2 className="text-lg md:text-xl font-semibold mb-2">Who Am I</h2>
//             <p className="text-gray-300 leading-relaxed text-sm md:text-base">
//               My name is Omar Jbair, I am a dedicated and motivated with a strong commitment to excellence in my work. I possess excellent communication and interpersonal skills, which enable me to collaborate effectively with colleagues and clients. My attention to detail and problem-solving abilities allow me to approach tasks with a meticulous and analytical mindset. My goal is to contribute my skills and expertise to a team or organization while continuing striving for personal and professional growth.
//             </p>
//           </div>

//           {/* Education */}
//           <div>
//             <h2 className="text-lg md:text-xl font-semibold mb-2">Education</h2>
//             <p className="text-gray-300 leading-relaxed text-sm md:text-base">
//               I have a Bachelor's degree in Computer Engineering from Damascus University with a focus on web development. I have honed my skills in HTML, CSS, JavaScript, and front-end frameworks like React. I also hold certifications in responsive web design and user experience (UX) design.
//             </p>
//           </div>

//           {/* Skills */}
//           <div>
//             <h2 className="text-lg md:text-xl font-semibold mb-2">Skills</h2>
//             <p className="text-gray-300 leading-relaxed text-sm md:text-base">
//               HTML5, CSS3, JavaScript, Tailwind CSS, React, Redux Toolkit, React-router-dom, React-query, React Formik & Yup, Framer Motion, Competitive Programming, git & GitHub
//             </p>
//           </div>

//           {/* Volunteering */}
//           <div>
//             <h2 className="text-lg md:text-xl font-semibold mb-2">Volunteering</h2>
//             <p className="text-gray-300 leading-relaxed text-sm md:text-base">
//               I've worked with organizations like RBCs team on various projects, developing skills like communication and teamwork. I'm driven by the positive impact I can make and grateful for the opportunities to help others in my University.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;