import { FaUser } from "react-icons/fa6";
import { IoMdCreate } from "react-icons/io";
import { LuIndianRupee } from "react-icons/lu";

export default function TopMen() {
    return (
        <menu className="flex items-center justify-between bg-[#141b24] p-4 px-16 text-white">
            <div className="flex items-center gap-6 font-light">
                <span>About</span>
                <span>NewsRoom</span>
                <span>Reseller</span>
                <span>Contacts</span>
            </div>
            <div className="flex items-center gap-4">
                <span>+1 929 999 4176</span>
                <span className="flex gap-2 items-center"><LuIndianRupee /><span>IND</span>
                </span>
                <span className="flex gap-2 items-center"><FaUser />Log in</span>
                <span className="flex gap-2 items-center"><IoMdCreate />Sign up</span>
            </div>
        </menu>
    )
}