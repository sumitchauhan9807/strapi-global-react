import Router from "src/router";
import TopMen from "src/components/TopMen.jsx";
import TopMen2 from "src/components/TopMen2.jsx";
import Footer from "./components/PageFooter";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopMen />
        <TopMen2 />
        <Router />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
