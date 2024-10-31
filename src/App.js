import Home from 'src/views/Home'
import Solutions from '../src/views/Solutions'
import TopMen from "src/components/TopMen.jsx";
import TopMen2 from "src/components/TopMen2.jsx";
import Footer from './components/PageFooter';
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
