import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout.tsx";
import Home from "./Home.tsx";
import Contact from "./Contact.tsx";
import NotFound from "./NotFound.tsx";
import About from "./About.tsx";
import Ourstory from "./Ourstory.tsx";
import Coaches from "./ourcoaches.tsx";
import Testimonials from "./Testimonials.tsx";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="ourCoaches" element={<Coaches />} />
          <Route path="Ourstory" element={<Ourstory/>} />
          <Route path="Testimonials" element={<Testimonials/>} />
        </Route>
      </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
