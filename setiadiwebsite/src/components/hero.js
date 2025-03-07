import logo from '../assets/images/Julian Setiadi Logo.png';
import heroLogo from '../assets/images/Hero.jpg';

export default function Hero() {
    return (
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          {/* Add an image above the text */}
          <img src={heroLogo} alt="Hero" className="w-40 h-80 shadow-lg"/>
          <div>
            <h4 className="text-center text-xl font-bold">
                Hi and welcome to
            </h4>
            <h2 className="text-center text-green-800 text-5xl font-bold">
              My Portfolio Website
            </h2>
          </div>
          <p className="text-center">
            Software Engineer | Web Developer | Content Creator
          </p>
        </div>
        <div className="flex-1">
          <img src={logo}
               alt="Hello.svg"
               className="w-full h-full bg-cover"/>
        </div>
      </section>
    );
}
