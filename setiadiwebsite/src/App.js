// App.js
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Acting from "./components/acting";
import Resume from "./components/resume";

import Curtains from './assets/images/acting/curtains_flannel.jpeg';


export default function App() {

    const images = require.context('./assets/images/acting', true);
    const slides = images.keys().map(image => images(image));

    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <div className="relative">
                <Acting autoSlide={true} autoSlideInterval={3000}>
                    {slides.map((slide, index) => (
                        <img key={index} src={slide} alt={`Slide ${index + 1}`} />
                    ))}
                </Acting>
            </div>
            <Contact />
            <Footer />
        </>
    );
}