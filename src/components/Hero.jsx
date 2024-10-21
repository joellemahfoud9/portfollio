import { HERO_CONTENT } from "../constants"
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
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
    <div ref={ref} className="border-b border-gray-400 pb-12 flex items-center justify-center text-white font-sans">
      <motion.div
        className="max-w-4xl px-4 text-left"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Intro */}
        <motion.p
          className="text-[#64ffda]"
          variants={itemVariants}
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          className="text-5xl sm:text-7xl font-bold mt-2 text-white"
          variants={itemVariants}
        >
          Joelle Mahfoud.
        </motion.h1>
        <motion.h2
          className="text-4xl sm:text-6xl font-bold mt-2 text-gray-400"
          variants={itemVariants}
        >
          A Web Developer.
        </motion.h2>
        {/* Description */}
        <motion.p
          className="text-gray-400 mt-6 max-w-lg"
          variants={itemVariants}
        >
          {HERO_CONTENT}
        </motion.p>
        {/* Button */}
        <motion.button
          className="mt-7"
          variants={itemVariants}
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="px-4 py-4 border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f]"
          >
            Get In Touch
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;

