import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/App.css";
import SocialMenu from "./Components/SocialMenu";

function App() {
  return (
    <Router>
      <NavBar />
      <AnimatedRoutes />
      <SocialMenu />
    </Router>
  );
}

export default App;
