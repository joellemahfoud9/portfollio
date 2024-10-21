
import Contant from "../components/Contant"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import CaseStudy from "../components/study"

const HomePage = () => {
  return (
    
    <div className="overflow-x-hidden text-neutral-300 antialiased
     selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full bg-[#0a192f]">
      </div>
      
      <div className=" mx-auto px-9">
      <Navbar/>
      <Hero/>
      <CaseStudy/>
      <Projects/>
      <Contant/>
    </div>
    
    </div>
  )
}

export default HomePage
