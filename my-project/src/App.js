import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import "./App.css";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop";
import {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Education from "./pages/Education";

//project section rem ; smooth scroo rem ;scroll effcet rem //aos problems
function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
       

        <div className="container">
        <Navbar />
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
