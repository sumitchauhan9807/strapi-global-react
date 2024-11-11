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
import AiContactcenter from './views/AiContactcenter';
import VoiceRobots from './views/VoiceRobots';
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
    element: <PricingPage/>,
  },
  {
    path:'/automatedcalls',
    element: <AutomatedCallsPage/>,
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
