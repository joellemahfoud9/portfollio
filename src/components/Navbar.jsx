import {Link} from "react-scroll";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };
  return (
  <nav className='flex items-center justify-between py-20 px-8  '>
        <div className='text-5xl font-bold'>
            {/* <img className="mx-2 w-40" src={logo} alt='logo'/> */}
           
        </div>
        <div className="hidden md:flex space-x-6 text-3xl">
          
          <Link to="study" spy={true} smooth={true} offset={-100} duration={500}
           className="cursor-pointer text-[#64ffda]" >
            Study Case</Link>

          <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}
           className=" cursor-pointer text-[#64ffda]"> 
           Projects</Link>
{/* 
           <Link to="technologies" spy={true} smooth={true} offset={-100} duration={500}
           className="cursor-pointer text-[#64ffda]" >
            Technology</Link> */}

         <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}
          className="cursor-pointer text-[#64ffda]" >
            Contact</Link>

        </div>
        <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* //bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
        <Link to="study" spy={true} smooth={true} offset={-100} duration={500}
           className="cursor-pointer text-[#64ffda] " >
           Study Case</Link>

          <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}
           className=" cursor-pointer text-[#64ffda]"> 
           Projects</Link>

         <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}
          className="cursor-pointer text-[#64ffda]" >
            Contact</Link>
        </div>
      )}
  </nav>
  )
}

export default Navbar
