import "./App.css";
import Navbar from "./Componet/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
// import Footer from "./Componet/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
