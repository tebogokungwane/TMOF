import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer"; // Import Footer
import UpButton from "./components/UpButton"; // Import Up Button

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <div className="relative z-0">
            <Navbar />
            <Hero />
            <StarsCanvas />
          </div>
        </div>
        <Works />
        <Experience />
        <About />
        <Footer />

        {/* Up Button */}
        <UpButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
