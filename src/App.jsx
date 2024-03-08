import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componnts/Home";
import Contact from "./componnts/contact/Contact";
import Project from "./componnts/Project/Project";
import About from "./componnts/about/About";
import ProjectDetails from "./componnts/Project/ProjectDetails";
import Skils from "./componnts/skils/Skils";
import Courses from "./componnts/Courses/Courses";

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
          <Route path="/skils" element={<Skils />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
