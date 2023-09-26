import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Error from "../Pages/Error";
import Projects from "../Pages/Projects";
import { AnimatePresence, motion } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path="*" element={<Error />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
        </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
