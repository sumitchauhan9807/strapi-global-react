import { NavLink } from "react-router-dom";
// icons 
import { GrAnalytics } from "react-icons/gr";
import { LuMousePointerClick } from "react-icons/lu";
import { GrShieldSecurity } from "react-icons/gr";
import { GrIntegration } from "react-icons/gr";
import { TbSettingsAutomation } from "react-icons/tb";
import { MdDialpad } from "react-icons/md";
import { VscRobot } from "react-icons/vsc";
import { RiHomeOfficeLine } from "react-icons/ri";
import { RiUserVoiceLine } from "react-icons/ri";
import { IoCloudDoneOutline } from "react-icons/io5";


export const productMenuItems = [
    {
        icon: <GrAnalytics size={28} />,
        title: 'USA Phone Numbers',
        description: 'Virtual phone numbers from KOMPaaS for VoIP telephony (SIP)'
    },
    {
        icon: <LuMousePointerClick size={28} />,
        title: 'SIP Trunk',
        description: "SIP Trunk is a virtual communication channel that connects the operator's telecommunications platform (CPaaS) to the customer's equipment"
    },
    {
        icon: <GrShieldSecurity size={28} />,
        title: 'Automated calls',
        description: `Software product which automates call center together with Virtual PBX services`
    },
    {
        icon: <GrIntegration size={28} />,
        title: 'Call Tracking',
        description: `Call-tracking without extra charge directly form the telecom operator`
    },
    {
        icon: <TbSettingsAutomation size={28} />,
        title: 'Multichat',
        description: `Full chat service for customers with free callback feature`
    },
]

export const pricingMenuItems = [
    {
        icon: <GrAnalytics size={28} />,
        title: 'Virtual PBX',
        description: 'Virtual PBX Pricing'
    },
    {
        icon: <GrAnalytics size={28} />,
        title: 'USA Phone Numbers',
        description: 'USA Phone Numbers'
    },
    {
        icon: <GrAnalytics size={28} />,
        title: 'Foreign Phone Numbers',
        description: 'Foreign Phone Numbers'
    },
    {
        icon: <GrAnalytics size={28} />,
        title: 'SIP Trunk',
        description: 'SIP Trunk Pricing'
    },
    {
        icon: <GrAnalytics size={28} />,
        title: 'Multichat',
        description: 'Multichat Pricing'
    },
    {
        icon: <GrAnalytics size={28} />,
        title: 'Automated Calls',
        description: 'Automated Calls Pricing'
    },
    {
        icon: <GrAnalytics size={28} />,
        title: 'Chatbot',
        description: 'Chatbot Pricing'
    },
    {
        icon: <GrAnalytics size={28} />,
        title: 'Integrations',
        description: 'Integrations Pricing'
    },


]

export function SolutionMenuList() {
    return (
        <section className="grid grid-cols-2 gap-8 absolute left-[-10rem] top-[90%] bg-[#24282e] w-[500px] overflow-hidden z-20 p-8 rounded-2xl text-white">
            <section className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <span>Phone numbers</span>
                    <a href="/solutions/phone-numbers"
                        className="flex gap-4 p-2 hover:bg-[#242424] transition-all duration-300">
                        <figure className="mt-2"><MdDialpad size={24} /></figure>
                        <small>Phone numbers for corporate customers</small>
                    </a>
                </div>
                <div className="flex flex-col gap-4">
                    <span>Virtual PBX</span>
                    <a href="/solutions/robot-controller" className="flex gap-4 p-2 hover:bg-[#242424]">
                        <figure><VscRobot size={28} /></figure>
                        <small>Robot controllers</small>
                    </a>
                    <a href="/solutions/home-office" className="flex gap-4 p-2 hover:bg-[#242424]">
                        <figure><RiHomeOfficeLine size={28} /></figure>
                        <small>Home office</small>
                    </a>
                    <a href='/solutions/voice-robots' className="flex gap-4 p-2 hover:bg-[#242424]">
                        <figure><RiUserVoiceLine size={28} /></figure>
                        <small>Voice robot for inbound calls</small>
                    </a>
                    <a href='/' className="flex gap-4 p-2 hover:bg-[#242424]">
                        <figure><IoCloudDoneOutline size={28} /></figure>
                        <small>Combining PBX and IP PBX</small>
                    </a>
                </div>
            </section>
            <section> </section>

        </section>
    )
}