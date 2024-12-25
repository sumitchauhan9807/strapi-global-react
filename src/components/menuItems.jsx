import { GrAnalytics } from "react-icons/gr";
import { LuMousePointerClick } from "react-icons/lu";
import { GrShieldSecurity } from "react-icons/gr";
import { GrIntegration } from "react-icons/gr";
import { TbSettingsAutomation } from "react-icons/tb";
import i18next from 'src/i18n'

export const productMenuItems = [
  {
    icon: <GrAnalytics size={28} />,
    title: i18next.t("Global Dialer Phone Numbers"),
    description: i18next.t("Virtual phone numbers from Global Dialer for VoIP telephony (SIP)"),
    link: "/phonenumber",
  },
  {
    icon: <LuMousePointerClick size={28} />,
    title: i18next.t("SIP Trunk"),
    description:i18next.t("SIP Trunk is a virtual communication channel that connects the operator's telecommunications platform (CPaaS) to the customer's equipment"),
    link: "/siptrunk",
  },
	{
    icon: <LuMousePointerClick size={28} />,
    title: i18next.t("PBX"),
    description:i18next.t("Combining PBX and IP PBX with a single numbering plan"),
    link: "/pbx",
  },
  {
    icon: <GrShieldSecurity size={28} />,
    title: i18next.t("Automated calls"),
    description: i18next.t(`Software product which automates call center together with Virtual PBX services`),
    link: "/automatedcalls",
  },
  {
    icon: <GrIntegration size={28} />,
    title: i18next.t("AI Contact Center"),
    description: i18next.t(`Systematize dialogs with clients in a convenient interface`),
    link: "/aicontactcenter",
  },
  {
    icon: <TbSettingsAutomation size={28} />,
    title: i18next.t("Text To Speech"),
    description: i18next.t(`Software product which Converts text to speech`),
    link: "/texttospeach",
  },
	{
    icon: <GrShieldSecurity size={28} />,
    title: i18next.t("Voice Robots"),
    description: i18next.t("Voice Robot for inbound calls"),
    link: "/voicerobot",
  },
];

export const solutionsMenuItems = [
  {
    icon: <GrAnalytics size={28} />,
    title: i18next.t("Phone Numbers"),
    description: i18next.t("Phone numbers for corporate customers"),
    link: "/solutions/phone-numbers",
  },
	{
    icon: <GrAnalytics size={28} />,
    title: i18next.t("Home Office"),
    description: i18next.t("We plan, set up and turn it on in 1 day."),
    link: "/solutions/home-office",
  },
	{
    icon: <LuMousePointerClick size={28} />,
    title: i18next.t("Robot Controller"),
    description: i18next.t("No time for the controling sales managers? Do you miss calls and at the same time lose customers and company profits?"),
    link: "/solutions/robot-controller",
  },
	{
    icon: <GrShieldSecurity size={28} />,
    title: i18next.t("Voice Robots"),
    description: i18next.t("Do you want to spend less time and money processing incoming calls?"),
    link: "/solutions/voice-robots",
  },
	{
    icon: <GrShieldSecurity size={28} />,
    title: i18next.t("Call Recording"),
    description: i18next.t("Record any conversations for better customer service and lower liability risks."),
    link: "/callrecording",
  },
	{
    icon: <GrShieldSecurity size={28} />,
    title: i18next.t("Call Transcription"),
    description: i18next.t("Transcribe any recorded phone conversations into text in one click for in-depth analysis."),
    link: "/calltranscription",
  },
	{
    icon: <GrShieldSecurity size={28} />,
    title: i18next.t("Chatbot VS Newsletter"),
    description: i18next.t("Chatbot will improve conversion and make your strategy work."),
    link: "/chatbotnews",
  },
	{
    icon: <GrShieldSecurity size={28} />,
    title: i18next.t("Sales Acceleration"),
    description: i18next.t("Acceleration of sales supported by Chatbot"),
    link: "/accsales",
  },
	{
    icon: <GrShieldSecurity size={28} />,
    title: i18next.t("Chatbot Builder"),
    description: i18next.t("Chatbots give immediate answers, work 24/7, never get sick and tired. Stop losing your customers."),
    link: "/accsales",
  },
	{
    icon: <GrShieldSecurity size={28} />,
    title: i18next.t("Chatbot for freelancers"),
    description: i18next.t("Chatbot design for freelance developers."),
    link: "/freelancerchatbot",
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
