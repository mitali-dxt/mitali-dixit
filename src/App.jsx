import { BrowserRouter } from "react-router-dom"
import useIsMobile from "./hooks/useIsMobile"
import {About, Contact, Experience, Hero, Tech,Navbar, Works, StarsCanvas} from "./components"

const App = () => {
  const isMobile = useIsMobile();
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        </div>
        {!isMobile && <Tech />}
        <Works />
        {!isMobile && <StarsCanvas />}
        <div className="relative z-0">
          <Contact />
        
        </div>
    </div>
      
    </BrowserRouter>
  )
}

export default App
