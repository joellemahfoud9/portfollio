// import React, { useEffect, useRef } from "react";
// import { motion, useAnimation } from "framer-motion";
// import ProjectCard from "./PorjectCard";
// import { PROJECTS } from "../constants";

// const Projects = () => {
//   const controls = useAnimation();
//   const ref = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           controls.start("visible");
//         } else {
//           controls.start("hidden");
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [controls]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 1,
//         when: "beforeChildren",
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };
//   return (
//     <section
//       id="projects"
//       className="py-16 border-b border-gray-400"
//       ref={ref}
//     >
//       <motion.div
//         className="container mx-auto"
//         initial="hidden"
//         animate={controls}
//         variants={containerVariants}
//       >
//         <motion.h2
//           className="text-4xl font-bold text-center text-white mb-8"
//           variants={itemVariants}
//         >
//           Projects
//         </motion.h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {PROJECTS.map((project, index) => (
//             <motion.div key={index} variants={itemVariants}>
//               <ProjectCard project={project} />
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Projects;

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { PROJECTS } from "../constants";
import { Link } from "react-router-dom";

const Projects = () => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="relative py-20 " ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto space-y-40"
      >
        {PROJECTS.map((project, index) => (
          <motion.div key={index} variants={itemVariants} className="relative">
            {/* Decorative circle */}
            <div
              className={`absolute ${
                index % 2 === 0
                  ? "top-0 right-0 translate-x-1/3"
                  : "top-0 left-0 -translate-x-1/3"
              }`}
            >
              <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-gradient-to-tr from-green-400 to-green-700 opacity-20"></div>
            </div>

            {/* Content Block */}
            <div className="max-w-4xl mx-auto text-center text-white space-y-6">
              <p className="text-green-400 text-sm lg:text-lg xl:text-xl">
                Project {index + 1}
              </p>
              <h3 className="text-3xl lg:text-5xl xl:text-6xl font-bold">
                {project.name}
              </h3>
              <p className="text-gray-300 text-base lg:text-xl xl:text-2xl leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-yellow-400 font-semibold hover:underline text-base lg:text-xl"
              >
                ➔ Visit Website
              </a>
            </div>

            {/* Image */}
            <div className="mt-10 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-xl  p-4 lg:p-8 ">
                <img
                  src={project.photos[0]}
                  alt={project.name}
                  className="w-80 lg:w-[600px] xl:w-[700px] object-contain"
                />
              </div>
            </div>
          </motion.div>
        ))}

        {/* View All Button */}
        {/* <div className="text-center mt-20">
          <Link
            to="/projects"
            className="bg-white text-black text-lg lg:text-xl px-8 py-4 rounded-xl shadow hover:scale-105 transition"
          >
            View All
          </Link>
        </div> */}
      </motion.div>
    </section>
  );
};

export default Projects;
