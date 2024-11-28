import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Hero, Navbar, Works, Experience, StarsCanvas } from "./components";
import Footer from "./components/Footer";
// import UpButton from "./components/UpButton";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Works />} />
            <Route path="/work" element={<Experience />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <StarsCanvas />
        </div>
        <Works />
        <Experience />
        <About />
        <Footer />
        {/* <UpButton /> */}

      </div>
    </BrowserRouter>
  );
};

export default App;
