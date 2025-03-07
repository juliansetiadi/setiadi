import { useEffect, useState } from 'react';
import headshot from "../assets/images/navbar/headshot.jpeg";

// Navbar.js
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`w-full px-5 sm:px-10 py-5 shadow-xl fixed top-0 z-10 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg' : 'black'}`}>
            <div className="container flex flex-col lg:flex-row gap-5 justify-between w-full items-center max-w-5xl mx-auto">
                <div className="flex items-center gap-3">
                    <img className="w-10 h-15" src={headshot} alt="Headshot" />
                    <h3 className="text-3xl text-white font-bold">
                        Julian Setiadi
                    </h3>
                </div>
                <ul className="flex gap-3 align-center p-1 flex-wrap">
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded text-white hover:bg-green-700" href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded text-white hover:bg-green-700" href="#resume">
                            Resumes
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded text-white hover:bg-green-700" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}