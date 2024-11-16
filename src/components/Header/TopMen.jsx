import { FaUser } from "react-icons/fa6";
import { IoMdCreate } from "react-icons/io";
import { Link } from "react-router-dom";
import { GlobalData } from "src/context";
import { useContext } from "react";

export default function TopMen() {
  const globalData = useContext(GlobalData);

  return (
    <menu className="flex flex-wrap items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900 p-4 md:px-16 text-white shadow-lg">
      {/* Left Section */}
      <div className="flex items-center gap-4 md:gap-6 font-medium w-full lg:text-sm text-xs md:w-auto mb-4 md:mb-0">
        <span className="hover:text-blue-300 transition uppercase duration-300 cursor-pointer">
          About
        </span>
        <span className="hover:text-blue-300 transition uppercase duration-300 lg:text-sm text-xs cursor-pointer">
          <Link to="/contactus">Contact Us</Link>
        </span>
        {/* mobile section */}
        <span className="lg:text-sm text-sm text-bold block lg:hidden uppercase text-sans bg-gray-600 px-2 py-2 rounded-sm  items-center gap-2">
          📞
          <span className="font-light">{globalData.Phonenumber}</span>
        </span>
        {/* mobile section */}

      </div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center gap-3 md:gap-6 w-full md:w-auto">
        {/* Phone Number */}
        <span className="lg:text-sm text-xs lg:block hidden md:text-base  items-center gap-2">
          📞
          <span className="font-light">{globalData.Phonenumber}</span>
        </span>

        {/* Email */}
        <a
          target="_blank"
          href={`mailto:${globalData.Email}`}
          className="lg:text-sm text-xs md:text-base  text-center  decoration-blue-500 hover:decoration-blue-300 transition duration-300"
        >
          {globalData.Email}
        </a>

        {/* Log In */}
        <span className="flex gap-2 items-center text-sm md:text-base bg-gray-700 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer">
          <FaUser className="text-lg" />
          Log in
        </span>

        {/* Sign Up */}
        <span className="flex gap-2 items-center text-sm md:text-base bg-gray-600 px-4 py-2 rounded-md hover:bg-green-500 transition duration-300 cursor-pointer">
          <IoMdCreate className="text-lg" />
          Sign up
        </span>
      </div>
    </menu>
  );
}
