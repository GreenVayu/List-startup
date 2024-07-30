import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout.tsx";
import Home from "./home.tsx";
import Contact from "./contact.tsx";
import NotFound from "./NotFound.tsx";
import About from "./about.tsx";
import Ourstory from "./ourStory.tsx";
import Coaches from "./ourCoaches.tsx";
import Team from "./team.tsx";
import FAQ from "./faq.tsx";
import Resource from "./resource.tsx";
import Blog from "./blog.tsx";


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
          <Route path="Team" element={<Team/>} />
          <Route path="FAQ" element={<FAQ/>} />
          <Route path="Resource" element={<Resource/>} />
          <Route path="Blog" element={<Blog/>} />
        </Route>
      </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
