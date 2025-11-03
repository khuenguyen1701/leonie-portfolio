import {RevealOnScroll} from "../RevealOnScroll";
import homeAva from "./img/homeAva.png"
import prj from "./img/prj.png"
import resume from "./img/resume.png"
import about from "./img/about.png"
import contact from "./img/contact.png"

export const Home = () => {
    return (
        <section 
            id="home"
            className="min-h-screen flex items-center justify-center relative bg-[#d8e7ee]">
        
            <RevealOnScroll>
            <div className="mx-auto max-w-6xl grid grid-cols-2 gap-12 items-center">
            {/* LEFT: links */}
            <nav className="flex flex-col justify-center md:justify-start gap-6 text-2xl font-pixelify text-left md:pl-8">
                <a href="#projects" className="text-[#394c5c] hover:text-[#041a38] transition">projects</a>
                <a
                href="https://drive.google.com/file/d/1e7mJPeCmKgCbrYojQ2q1UFeHbSvVQyBB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#394c5c] hover:text-[#041a38] transition"
                >
                resume
                </a>
                <a href="#about" className="text-[#394c5c] hover:text-[#041a38] transition">about</a>
                <a href="#contact" className="text-[#394c5c] hover:text-[#041a38] transition">contact</a>
            </nav>

            {/* RIGHT: the rest */}
            <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-[#041a38] leading-tight">
                welcome to my portfolio
            </h1>

            <p
                className="text-gray-600 text-2xl max-w-lg"
            >
                I'm glad you're here!
            </p>

            <img
                src={homeAva}
                alt="avatar"
                className="w-60 h-auto object-cover rounded-xl transition-transform duration-300 hover:-translate-y-2"
            />
            </div>
        </div>
        </RevealOnScroll>
        </section>
    )
}