import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="p-10 bg-emerald-200 flex justify-center space-x-6">
            <a href="https://github.com/juliansetiadi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-6 h-6 text-gray-800 hover:text-gray-600 transition" />
            </a>
            <a href="https://www.linkedin.com/in/juliansetiadi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 text-gray-800 hover:text-gray-600 transition" />
            </a>
            <a href="mailto:juliansetiadi@gmail.com" aria-label="Email">
                <Mail className="w-6 h-6 text-gray-800 hover:text-gray-600 transition" />
            </a>
        </footer>
    );
}