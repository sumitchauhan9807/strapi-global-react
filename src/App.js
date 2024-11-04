import Home from 'src/views/Home'
import Solutions from '../src/views/Solutions'
import TopMen from "src/components/TopMen.jsx";
import TopMen2 from "src/components/TopMen2.jsx";
import Footer from './components/PageFooter';
import ContactUs from '../src/views/ContactUs.jsx';
import PricingPage from '../src/views/PricingPage.jsx';
import  AutomatedCallsPage from '../src/views/AutoCalls.jsx'
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
    path: '/solutions',
    element: <Solutions />,
  },
  {
    path: '/contactus',
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
