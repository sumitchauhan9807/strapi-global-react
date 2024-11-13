import Home from 'src/views/Home'
import Solutions from '../src/views/Solutions'
import TopMen from "src/components/TopMen.jsx";
import TopMen2 from "src/components/TopMen2.jsx";
import Footer from './components/PageFooter';
import ContactUs from '../src/views/ContactUs.jsx';
import PricingPage from '../src/views/PricingPage.jsx';
import AutomatedCallsPage from '../src/views/AutoCalls.jsx'
import RobotController from './views/RobotController';
import HomeOffice from './views/HomeOffice';
import PhoneNumber from './views/PhoneNumber.jsx';
import SipTrunk from './views/SipTrunk';
// import AiContactcenter from './views/AiContactcenter';
import VoiceRobots from './views/VoiceRobots';
// import SipTrunk from './views/SipTrunk.jsx';
import AiContactcenter from './views/AiContactcenter.jsx';
import TextTospeach from './views/SpeachTotext.jsx';
import VoiceRobot from './views/VoiceRobot';
import PBx from './views/PBx';
import CallTranscription from './views/CallTranscription';
import CallRecording from './views/CallRecording';
import ChatbotNews from './views/ChatbotandNewsletter';
import AccSales from './views/AccelerationofSales';
import ChatBotbuilder from './views/ChatbotBuilder';
import FreelancerChatbot from './views/ChatbotdesignforFreelancers';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: 'solutions/phone-numbers',
    element: <Solutions />,
  },
  {
    path: 'solutions/robot-controller',
    element: <RobotController />,
  },
  {
    path: 'solutions/home-office',
    element: <HomeOffice />,
  },
  {
    path: 'solutions/voice-robots',
    element: <VoiceRobots />,
  },
  {
    path: 'contactus',
    element: <ContactUs />
  },
  {
    path: '/pricing',
    element: <PricingPage />,
  },
  {
    path: '/automatedcalls',
    element: <AutomatedCallsPage />,
  },
  {
    path: '/aicontactcenter',
    element: <AiContactcenter />,

  },
  {
    path: '/phonenumber',
    element: <PhoneNumber />,

  },
  {
    path: '/siptrunk',
    element: <SipTrunk />,
  },
  {
    path: '/texttospeach',
    element: <TextTospeach />,
  },
  {
    path: '/voicerobot',
    element: <VoiceRobot />,
  },
  {
    path: '/pbx',
    element: <PBx />,
  },
  {
    path: '/calltranscription',
    element: <CallTranscription />,
  },
  {
    path: '/callrecording',
    element: <CallRecording />,
  },
  {
    path: '/chatbotnews',
    element: <ChatbotNews />,
  },
  {
    path: '/accsales',
    element: <AccSales />,
  },
  {
    path: '/chatbotbuilder',
    element: <ChatBotbuilder />,
  },
  {
    path:'/freelancerchatbot',
    element:<FreelancerChatbot/>,
  }


]);

function App() {
  return (
    <div className="App">
      <TopMen />
      <TopMen2 />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
