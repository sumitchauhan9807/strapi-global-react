import { FaUser } from "react-icons/fa6";
import { IoMdCreate } from "react-icons/io";
import { Link } from "react-router-dom";
import { GlobalData } from "src/context";
import { useContext } from "react";
import { SocialMedia } from "src/components/Header/SocialMedia.jsx";

export default function TopMen() {
  const globalData = useContext(GlobalData);

  return (
    <menu className="flex flex-wrap items-center lg:justify-between justify-center lg:px-24  bg-[#141b24] p-4 text-white">
      {/* Left Section */}
      {/* <span className="text-xl glow block py-2 lg:hidden  md:text-base uppercase text-center bg-transparent">
        <b>**Still under construction**</b>
      </span> */}
      <div className="lg:hidden block grid grid-cols-1">
      <div className="flex items-center justify-center uppercase text-center py-4 px-2 gap-4 sm:gap-6 font-light">

          <span>About</span>
          <span>
            <Link to="/contactus" className="hover:underline">
              Contact Us
            </Link>
          </span>
        </div>  
        <span className="text-xs px-2  text-center">{globalData.Phonenumber}</span> 
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`mailto:${globalData.Email}`}
          className="underline text-xs hover:text-gray-300 py-2 transition  text-center"
        >
          {globalData.Email}
        </a>
     < SocialMedia />
     </div>
        <div className=" items-center lg:flex hidden lg:block uppercase text-center py-4 px-4 gap-4 sm:gap-6 font-light">

        <div><span>About</span></div>  <div>
        <span>
          <Link to="/contactus" className="hover:underline">
            Contact Us
          </Link>
        </span></div>
      </div>
      <br />
      
      {/* Middle Section (Hidden on small screens, visible on large) */}
      <div className="lg:block hidden pl-6">
      < SocialMedia />
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto mt-4 lg:mt-0">
        {/* Construction Notice */}
        {/* <span className="text-xl glow lg:block hidden  md:text-base text-center bg-transparent">
          <b>**Still under construction**</b>
        </span> */}

        {/* Responsive Contact Info (Visible on small screens) */}
        <div className="flex flex-col  items-center lg:block hidden text-sm gap-4">
          <span className="px-6">📞 {globalData.Phonenumber}</span>
          <a target="_blank" rel="noopener noreferrer" href={`mailto:${globalData.Email}`} className="underline hover:text-gray-300 transition">
            {globalData.Email}
          </a>
        </div>

        {/* Log In Button */}
        {/* <button className="flex gap-2 items-center text-sm md:text-base bg-gray-700 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer">
          <FaUser className="text-lg" />
          Log in
        </button> */}

        {/* Sign Up Button */}
        {/* <button className="flex gap-2 items-center text-sm md:text-base bg-gray-600 px-4 py-2 rounded-md hover:bg-green-500 transition duration-300 cursor-pointer">
          <IoMdCreate className="text-lg" />
          Sign up
        </button> */}
      </div>
    </menu>
  );
}
