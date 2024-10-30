
import { BrowserRouter, Form } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from './components'
import Footer from './components/Footer'; // Import Footer

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
        {/* <Tech /> */}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer /> 
      </div>

    </BrowserRouter>
  )
}

export default App
