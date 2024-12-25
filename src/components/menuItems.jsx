import { GrAnalytics } from "react-icons/gr";
import { LuMousePointerClick } from "react-icons/lu";
import { GrShieldSecurity } from "react-icons/gr";
import { GrIntegration } from "react-icons/gr";
import { TbSettingsAutomation } from "react-icons/tb";
import i18next from 'src/i18n'
import { useTranslation } from 'react-i18next';

export function useProductMenuItems() {
	const { t } = useTranslation();
  return [
    {
      icon: <GrAnalytics size={28} />,
      title: t("Global Dialer Phone Numbers"),
      description: ("Virtual phone numbers from Global Dialer for VoIP telephony (SIP)"),
      link: "/phonenumber",
    },
    {
      icon: <LuMousePointerClick size={28} />,
      title: t("SIP Trunk"),
      description:t("SIP Trunk is a virtual communication channel that connects the operator's telecommunications platform (CPaaS) to the customer's equipment"),
      link: "/siptrunk",
    },
    {
      icon: <LuMousePointerClick size={28} />,
      title: t("PBX"),
      description:t("Combining PBX and IP PBX with a single numbering plan"),
      link: "/pbx",
    },
    {
      icon: <GrShieldSecurity size={28} />,
      title: t("Automated calls"),
      description: t(`Software product which automates call center together with Virtual PBX services`),
      link: "/automatedcalls",
    },
    {
      icon: <GrIntegration size={28} />,
      title: t("AI Contact Center"),
      description: t(`Systematize dialogs with clients in a convenient interface`),
      link: "/aicontactcenter",
    },
    {
      icon: <TbSettingsAutomation size={28} />,
      title: t("Text To Speech"),
      description: t(`Software product which Converts text to speech`),
      link: "/texttospeach",
    },
    {
      icon: <GrShieldSecurity size={28} />,
      title: t("Voice Robots"),
      description: t("Voice Robot for inbound calls"),
      link: "/voicerobot",
    },
  ]
}

export function useSolutionsMenuItems() {
	const { t } = useTranslation();
  return [
    {
      icon: <GrAnalytics size={28} />,
      title: t("Phone Numbers"),
      description: t("Phone numbers for corporate customers"),
      link: "/solutions/phone-numbers",
    },
    {
      icon: <GrAnalytics size={28} />,
      title: t("Home Office"),
      description: t("We plan, set up and turn it on in 1 day."),
      link: "/solutions/home-office",
    },
    {
      icon: <LuMousePointerClick size={28} />,
      title: t("Robot Controller"),
      description: t("No time for the controling sales managers? Do you miss calls and at the same time lose customers and company profits?"),
      link: "/solutions/robot-controller",
    },
    {
      icon: <GrShieldSecurity size={28} />,
      title: t("Voice Robots"),
      description: t("Do you want to spend less time and money processing incoming calls?"),
      link: "/solutions/voice-robots",
    },
    {
      icon: <GrShieldSecurity size={28} />,
      title: t("Call Recording"),
      description: t("Record any conversations for better customer service and lower liability risks."),
      link: "/callrecording",
    },
    {
      icon: <GrShieldSecurity size={28} />,
      title: t("Call Transcription"),
      description: t("Transcribe any recorded phone conversations into text in one click for in-depth analysis."),
      link: "/calltranscription",
    },
    {
      icon: <GrShieldSecurity size={28} />,
      title: t("Chatbot VS Newsletter"),
      description: t("Chatbot will improve conversion and make your strategy work."),
      link: "/chatbotnews",
    },
    {
      icon: <GrShieldSecurity size={28} />,
      title: t("Sales Acceleration"),
      description: t("Acceleration of sales supported by Chatbot"),
      link: "/accsales",
    },
    {
      icon: <GrShieldSecurity size={28} />,
      title: t("Chatbot Builder"),
      description: t("Chatbots give immediate answers, work 24/7, never get sick and tired. Stop losing your customers."),
      link: "/accsales",
    },
    {
      icon: <GrShieldSecurity size={28} />,
      title: t("Chatbot for freelancers"),
      description: t("Chatbot design for freelance developers."),
      link: "/freelancerchatbot",
    },
  ]
}


