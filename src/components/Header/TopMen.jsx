import { FaUser } from "react-icons/fa6";
import { IoMdCreate } from "react-icons/io";
import { Link } from "react-router-dom";
import { GlobalData } from "src/context";
import { useContext } from "react";
import { SocialMedia } from "src/components/Header/SocialMedia.jsx";

export default function TopMen() {
  const globalData = useContext(GlobalData);

  return (
    <menu className="flex flex-col lg:flex-row items-center lg:justify-between lg:px-28 bg-[#141b24] p-4 text-white">
      {/* Left Section */}
      <div className="flex flex-wrap gap-6 lg:flex-row items-center ">
        <div className="uppercase text-center lg:text-left font-light">
          <span>About</span>
        </div>
        <div className="uppercase text-center lg:text-left font-light">
          <Link to="/contactus" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Middle Section (Social Media Icons) */}
      <div className="my-4 lg:my-0  hidden lg:block ml-4 justify-center">
        <SocialMedia />
      </div>

      {/* Right Section */}
      <div className="flex lg:flex-wrap items-center lg:items-end lg:py-2 py-3 text-sm gap-2">
        <span>📞 {globalData.Phonenumber}</span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`mailto:${globalData.Email}`}
          className="underline hover:text-gray-300 hidden lg:block transition"
        >
          {globalData.Email}
        </a> <br />
        
      </div><a
          target="_blank"
          rel="noopener noreferrer"
          href={`mailto:${globalData.Email}`}
          className="underline hover:text-gray-300 lg:hidden block transition"
        >
          {globalData.Email}
        </a>
      <div className="my-4 lg:my-0 flex lg:hidden block justify-center">
        <SocialMedia />
      </div>
    </menu>
  );
}