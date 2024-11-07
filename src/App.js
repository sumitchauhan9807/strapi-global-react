import Home from 'src/views/Home'
import Solutions from '../src/views/Solutions'
import TopMen from "src/components/TopMen.jsx";
import TopMen2 from "src/components/TopMen2.jsx";
import Footer from './components/PageFooter';
import ContactUs from '../src/views/ContactUs.jsx';
import PricingPage from '../src/views/PricingPage.jsx';
import AutomatedCallsPage from '../src/views/AutoCalls.jsx'
import RobotController from './views/RobotController';
import PhoneNumber from './views/PhoneNumber.jsx';
import SipTrunk from './views/SipTrunk';
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
    path: '/solutions/phone-numbers',
    element: <Solutions />,
  },
  {
    path: '/robot-controller',
    element: <RobotController />,
  },
  {
    path: '/contactus',
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
    path: '/phonenumber',
    element: <PhoneNumber />,
  },
  {
    path: '/siptrunk',
    element: <SipTrunk />,
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
