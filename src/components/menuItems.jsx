import { GrAnalytics } from "react-icons/gr";
import { LuMousePointerClick } from "react-icons/lu";
import { GrShieldSecurity } from "react-icons/gr";
import { GrIntegration } from "react-icons/gr";
import { TbSettingsAutomation } from "react-icons/tb";

export const productMenuItems = [
  {
    icon: <GrAnalytics size={28} />,
    title: "USA Phone Numbers",
    description: "Virtual phone numbers from KOMPaaS for VoIP telephony (SIP)",
  },
  {
    icon: <LuMousePointerClick size={28} />,
    title: "SIP Trunk",
    description:
      "SIP Trunk is a virtual communication channel that connects the operator's telecommunications platform (CPaaS) to the customer's equipment",
  },
  {
    icon: <GrShieldSecurity size={28} />,
    title: "Automated calls",
    description: `Software product which automates call center together with Virtual PBX services`,
  },
  {
    icon: <GrIntegration size={28} />,
    title: "Call Tracking",
    description: `Call-tracking without extra charge directly form the telecom operator`,
  },
  {
    icon: <TbSettingsAutomation size={28} />,
    title: "Multichat",
    description: `Full chat service for customers with free callback feature`,
  },
];

export const solutionsMenuItems = [
  {
    icon: <GrAnalytics size={28} />,
    title: "Phone Numbers",
    description: "Phone numbers for corporate customers",
    link: "/solutions/phone-numbers",
  },
  {
    icon: <LuMousePointerClick size={28} />,
    title: "Virtual PBX",
    description: "Robot controller,Home Office,Call Recording",
    link: "/solutions/phone-numbers",
  },
  {
    icon: <GrShieldSecurity size={28} />,
    title: "Automated calls",
    description: `Automatic calls for online pharmacies`,
    link: "/solutions/phone-numbers",
  },
];

export const pricingMenuItems = [
  {
    icon: <GrAnalytics size={28} />,
    title: "Virtual PBX",
    description: "Virtual PBX Pricing",
  },
  {
    icon: <GrAnalytics size={28} />,
    title: "USA Phone Numbers",
    description: "USA Phone Numbers",
  },
  {
    icon: <GrAnalytics size={28} />,
    title: "Foreign Phone Numbers",
    description: "Foreign Phone Numbers",
  },
  {
    icon: <GrAnalytics size={28} />,
    title: "SIP Trunk",
    description: "SIP Trunk Pricing",
  },
  {
    icon: <GrAnalytics size={28} />,
    title: "Multichat",
    description: "Multichat Pricing",
  },
  {
    icon: <GrAnalytics size={28} />,
    title: "Automated Calls",
    description: "Automated Calls Pricing",
  },
  {
    icon: <GrAnalytics size={28} />,
    title: "Chatbot",
    description: "Chatbot Pricing",
  },
  {
    icon: <GrAnalytics size={28} />,
    title: "Integrations",
    description: "Integrations Pricing",
  },
];
