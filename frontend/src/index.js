import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CustomBackground from "./components/CustomBackground";
import NotFound from "./Pages/NotFound";
import HomePage from "./Pages/HomePage";
import ProjectsPage from "./Pages/ProjectsPage";
import Header from "./components/Header";
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <CustomBackground>
      <Header />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CustomBackground>
  </Router>
);
