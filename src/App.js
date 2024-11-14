import Router from "src/router";
import Menu from 'src/components/Menu'
import Footer from "./components/PageFooter";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Router />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
