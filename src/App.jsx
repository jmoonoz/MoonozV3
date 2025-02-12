import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/App.scss";

function App() {
  return (
    <Router>
      <NavBar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
