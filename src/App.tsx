import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./Home.tsx";
import Contact from "./Contact.tsx";
import NotFound from "./NotFound.tsx";
import About from "./About.tsx";
import Newsletter from "./newsletter.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="Newsletter" element={<Newsletter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
