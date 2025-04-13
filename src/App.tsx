
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import NavBar  from "./components/NavBar";


// import "locomotive-scroll/src/locomotive-scroll.scss";

import Contact from "./components/Contact";
import FloatingImage from "./components/Story";
import Pin from "./components/Pin";
import Stats   from "./components/Stats";
import Discover from "./components/Discover";
import Partners from "./components/Partners";
//import LastUpdate from "./components/LastUpdate";

export  const  MainContainer   = '.main-container';


function App() {
    
    
    return (
            < >
                <NavBar /> 
                <div  className={` main-container  overflow-hidden `}     >
                    <Hero />
                    <AboutUs   />
                    <Features />
                    <FloatingImage />
                    
                    <Pin /> 
                    
                    <Discover />
                    <Stats />
                    <Partners />

                    {/* <LastUpdate /> */}
                    <Contact />

                </div>

                <Footer />
            </> 
    )}

export default App;
