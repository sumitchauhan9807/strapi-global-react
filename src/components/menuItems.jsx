import { GrAnalytics } from "react-icons/gr";
import { LuMousePointerClick } from "react-icons/lu";
import { GrShieldSecurity } from "react-icons/gr";
import { GrIntegration } from "react-icons/gr";
import { TbSettingsAutomation } from "react-icons/tb";



export const productMenuItems = [
    {
        icon: <GrAnalytics size={28}/>,
        title: 'Analytics',
        description: 'Get better understanding of traffic'
    },
    {
        icon: <LuMousePointerClick size={28}/>,
        title: 'Engagement',
        description: 'Speak directly to your customers'
    },
    {
        icon: <GrShieldSecurity size={28}/>,
        title: 'Security',
        description: `Your customers' data will be safe and secure`
    },
    {
        icon: <GrIntegration size={28}/>,
        title: 'Integrations',
        description: `Connect with third-party tools`
    },
    {
        icon: <TbSettingsAutomation size={28}/>,
        title: 'Automations',
        description: `Build strategic funnels that will convert`
    },
]