import { FaUser } from "react-icons/fa6";
import { IoMdCreate } from "react-icons/io";
import { LuIndianRupee } from "react-icons/lu";
import { Link } from "react-router-dom";
import { GlobalData } from "src/context";
import { useContext } from 'react';

export default function TopMen() {
  const globalData = useContext(GlobalData);

    return (
      <menu className="flex items-center justify-between bg-[#141b24] p-4 px-16 text-white">
          <div className="flex items-center gap-6 font-light">
              <span>About</span>
              {/* <span>NewsRoom</span>
              <span>Reseller</span> */}
              <span><Link to="/contactus">Contact Us</Link></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="glow"><b>**Still under construction**</b></span>

              <span>{globalData.Phonenumber}</span>

              <a target="_blank" href={`mailto:${globalData.Email}`}><span><u>{globalData.Email}</u></span></a>

              {/* <span className="flex gap-2 items-center"><LuIndianRupee /><span></span>
              </span> */}
              <span className="flex gap-2 items-center"><FaUser />Log in</span>
              <span className="flex gap-2 items-center"><IoMdCreate />Sign up</span>
          </div>
      </menu>
    )
}