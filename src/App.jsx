import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Hero, Tech,Navbar, Works, StarsCanvas} from "./components"

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        </div>
        <Tech/>
        <Works />
        
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
    </div>
      
    </BrowserRouter>
  )
}

export default App
