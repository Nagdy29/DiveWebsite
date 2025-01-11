import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componnts/Home";
import Contact from "./componnts/contact/Contact";
import About from "./componnts/about/About";
import Skils from "./componnts/skils/Skils";
import Service from "./componnts/service/Service";
import { NotFound } from "./componnts/Not Found/NotFoundPage";
import { Work } from "./componnts/Works/Works";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skils" element={<Skils />} />
          <Route path="/service" element={<Service />} />
          <Route path="/works" element={<Work />} />
          <Route path="*" element={<NotFound />} /> {/* توجيه إلى صفحة الخطأ */}
        </Routes>
      </div>
    </>
  );
}

export default App;
