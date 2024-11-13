import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "src/views/Home";
import Solutions from "src/views/Solutions";
import ContactUs from "src/views/ContactUs.jsx";
import PricingPage from "src/views/PricingPage.jsx";
import AutomatedCallsPage from "src/views/AutoCalls.jsx";
import RobotController from "src/views/RobotController";
import HomeOffice from "src/views/HomeOffice";
import PhoneNumber from "src/views/PhoneNumber.jsx";
import SipTrunk from "src/views/SipTrunk";
import VoiceRobots from "src/views/VoiceRobots";
import AiContactcenter from "src/views/AiContactcenter.jsx";
import TextTospeach from "src/views/SpeachTotext.jsx";
import VoiceRobot from "src/views/VoiceRobot";
import PBx from "src/views/PBx";
import CallTranscription from "src/views/CallTranscription";
import CallRecording from "src/views/CallRecording";
import ChatbotNews from "src/views/ChatbotandNewsletter";
import AccSales from "src/views/AccelerationofSales";
import ChatBotbuilder from "src/views/ChatbotBuilder";
import FreelancerChatbot from "src/views/ChatbotdesignforFreelancers";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: 'solutions/phone-numbers',
//     element: <Solutions />,
//   },
//   {
//     path: 'solutions/robot-controller',
//     element: <RobotController />,
//   },
//   {
//     path: 'solutions/home-office',
//     element: <HomeOffice />,
//   },
//   {
//     path: 'solutions/voice-robots',
//     element: <VoiceRobots />,
//   },
//   {
//     path: 'contactus',
//     element: <ContactUs />
//   },
//   {
//     path: '/pricing',
//     element: <PricingPage />,
//   },
//   {
//     path: '/automatedcalls',
//     element: <AutomatedCallsPage />,
//   },
//   {
//     path: '/aicontactcenter',
//     element: <AiContactcenter />,

//   },
//   {
//     path: '/phonenumber',
//     element: <PhoneNumber />,

//   },
//   {
//     path: '/siptrunk',
//     element: <SipTrunk />,
//   },
//   {
//     path: '/texttospeach',
//     element: <TextTospeach />,
//   },
//   {
//     path: '/voicerobot',
//     element: <VoiceRobot />,
//   },
//   {
//     path: '/pbx',
//     element: <PBx />,
//   },
//   {
//     path: '/calltranscription',
//     element: <CallTranscription />,
//   },
//   {
//     path: '/callrecording',
//     element: <CallRecording />,
//   },
//   {
//     path: '/chatbotnews',
//     element: <ChatbotNews />,
//   },
//   {
//     path: '/accsales',
//     element: <AccSales />,
//   },
//   {
//     path: '/chatbotbuilder',
//     element: <ChatBotbuilder />,
//   },
//   {
//     path:'/freelancerchatbot',
//     element:<FreelancerChatbot/>,
//   }


// ]);

function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/solutions/phone-numbers" element={<Solutions />} />
        <Route exact path="/solutions/robot-controller" element={<RobotController />} />
        <Route exact path="/solutions/home-office" element={<HomeOffice />} />
        <Route exact path="/solutions/voice-robots" element={<VoiceRobots />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/pricing" element={<PricingPage />} />
        <Route exact path="/automatedcalls" element={<AutomatedCallsPage />} />
        <Route exact path="/aicontactcenter" element={<AiContactcenter />} />
        <Route exact path="/phonenumber" element={<PhoneNumber />} />
        <Route exact path="/siptrunk" element={<SipTrunk />} />
        <Route exact path="/texttospeach" element={<TextTospeach />} />
        <Route exact path="/voicerobot" element={<VoiceRobot />} />
        <Route exact path="/pbx" element={<PBx />} />
        <Route exact path="/calltranscription" element={<CallTranscription />} />
        <Route exact path="/callrecording" element={<CallRecording />} />
        <Route exact path="/chatbotnews" element={<ChatbotNews />} />
        <Route exact path="/accsales" element={<AccSales />} />
        <Route exact path="/chatbotbuilder" element={<ChatBotbuilder />} />
        <Route exact path="/freelancerchatbot" element={<FreelancerChatbot />} />
      </Routes>
    </>
  );
}

export default Router
