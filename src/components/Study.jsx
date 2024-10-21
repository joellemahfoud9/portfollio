import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const CaseStudy = () => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
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

  return (
    <div id="study" className="py-16 px-2 text-white border-b border-gray-400">
      <motion.h2
        className="text-4xl font-bold mb-20 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        Case Studies & Knowledge
      </motion.h2>
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Case Study 2 */}
        <motion.div className="mb-12" variants={itemVariants}>
          <h3 className="text-2xl font-semibold mb-2">Front-End Development Best Practices:</h3>
          <h5 className="mb-4">
            <strong>Overview:</strong> A solid understanding of front-end technologies is crucial for delivering seamless user experiences. I have a comprehensive grasp of HTML, CSS, and JavaScript, along with popular frameworks like React.
          </h5>
          <h5 className="mb-4">
            <strong>Key Concepts:</strong>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Responsive Design:</strong> Knowledge of CSS frameworks (like Tailwind CSS) and techniques (like Flexbox and Grid) to create responsive layouts that work on various devices.</li>
              <li><strong>Performance Optimization:</strong> Best practices such as lazy loading, code splitting, and minimizing reflows to enhance web application performance.</li>
            </ul>
          </h5>
        </motion.div>
        {/* Case Study 4 */}
        <motion.div className="mb-12" variants={itemVariants}>
          <h3 className="text-2xl font-semibold mb-2">Professional Development Practices:</h3>
          <h5 className="mb-4">
            <strong>Overview:</strong> Continuous learning and adopting best practices in development is crucial for career growth. I prioritize several professional practices to enhance my skills and effectiveness as a web developer.
          </h5>
          <h5 className="mb-4">
            <strong>Key Practices:</strong>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Version Control with Git:</strong> Proficient in using Git for version control, ensuring code quality and enabling collaborative development.</li>
            </ul>
          </h5>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CaseStudy;