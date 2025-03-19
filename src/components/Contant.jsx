import { CONTACT } from "../constants";
 import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";

const Contant = () => {
  return (
    <div id="contact" className=" border-b border-gray-400  bg-[#273a57] w-full">
     {/* <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div> */}
      <h1 className=" py-10 text-center text-4xl">Contant Us</h1>
      <div className="text-center tracking-tighter ">
        <p className="text-xl ">{CONTACT.phoneNo}</p>
        <a  className="border-b text-xl ">{CONTACT.email}</a>
        <div className="m-11 flex items-center justify-center gap-6 text-5xl">

        <a
        href="https://wa.me/+963984199366" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-700 transition"
      >
        <FaWhatsapp size={40} />
      </a>
      <a
        href="https://www.github.com/joellemahfoud9" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-600 transition"
      >
        <FaGithub size={40} />
      </a>
        <a
        href="https://www.linkedin.com/in/joelle-mahfoud-350239331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-600 transition"
      >
        <FaLinkedin size={40} />
      </a>
        
        </div>
       
      </div>
    </div>
  )
}

export default Contant
