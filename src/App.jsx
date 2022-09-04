import React from "react";
import { ReactDOM } from "react";
import Navbar from "./Pages/Navbar";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Skills from "./Pages/Skills";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import './App.css';
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter ,Routes, Route, useLocation} from "react-router-dom";
function App()  {
  // const location = useLocation();
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Navbar />}>
          <Route index element = {<Home />}/>
          <Route path = 'blog' element = {<Blog />}/>
          <Route path = 'contact' element = {<Contact />}/>
          <Route path = 'about' element = {<About />}/>
          <Route path = 'education' element = {<Education />}/>
          <Route path = 'experience' element = {<Experience/>}/>
          <Route path = 'services' element = {<Services/>}/>
          <Route path = 'skills' element = {<Skills/>}/>
          <Route path = 'work' element = {<Work/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;