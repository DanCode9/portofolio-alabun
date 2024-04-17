import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Veille from "./components/Veille.jsx";
import Stages from "./components/Stages.jsx";
import Stage1 from "./components/Stage1.jsx";
import Stage2 from "./components/Stage2.jsx";
import CartApp from "./components/CartApp.jsx";
import MovieDB from "./components/MovieDB.jsx";
import Resto from "./components/Resto.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projets" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/veille" element={<Veille />} />
      <Route path="/stages" element={<Stages />} />
      <Route path="/page-projet-cart" element={<CartApp />} />
      <Route path="/page-projet-films" element={<MovieDB />} />
      <Route path="/page-projet-resto" element={<Resto />} />
      <Route path="/stage1" element={<Stage1 />} />
      <Route path="/stage2" element={<Stage2 />} />
    </Routes>
    <Footer />
  </Router>
);
