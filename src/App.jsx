import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componnts/Home";
import Contact from "./componnts/contact/Contact";
import Project from "./componnts/Project/Project";
import About from "./componnts/about/About";
import ProjectDetails from "./componnts/Project/ProjectDetails";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projectDetails" element={<ProjectDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
