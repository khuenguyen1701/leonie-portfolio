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
            className="min-h-screen flex items-center justify-center relative bg-red-100">
        
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
               {/* Project Button */}
                <a href="#projects" className="">
                    <img src={prj} alt="View Projects" className="absolute -top-60 -left-80 w-100 h-100 object-cover rotate-[-15deg] rounded-lg transition-transform duration-300 hover:-translate-y-3"/>
                </a>
                {/* Resume Button */}
                <a href="https://drive.google.com/file/d/1ufypBgUhtkeEYKSbFgcV3Wl3kP_540mz/view?usp=sharing" className="">
                    <img src={resume} alt="View Resume" className="absolute -top-60 -right-80 w-100 h-100 object-cover rotate-[15deg] rounded-lg transition-transform duration-300 hover:-translate-y-3"/>
                </a>
                {/* About Button */}
                <a href="#about" className="">
                    <img src={about} alt="View About" className="absolute top-25 -left-70 w-100 h-100 object-cover rotate-[10deg] rounded-lg transition-transform duration-300 hover:-translate-y-3"/>
                </a>
                {/* Contact Buton */}
                <a href="#about" className="">
                    <img src={contact} alt="View Contact" className="absolute top-25 -right-80 w-100 h-100 object-cover rotate-[-10deg] rounded-lg transition-transform duration-300 hover:-translate-y-3"/>
                </a>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-700 to-rose-300 bg-clip-text text-transparent leading-tight">Xin chào!<br/>Leonie nè.</h1>

                <p style={{ fontFamily: "Pixelify Sans, sans-serif" }} className="text-gray-600 text-2xl mb-8 max-w-lg mx-auto">I'm glad you're here!</p>

                <img src={homeAva} alt="View Contact" className="absolute top-35 right-0 w-100 h-100 object-cover rotate-[-5deg] rounded-lg transition-transform duration-300 hover:-translate-y-3"/>
            </div>
        </RevealOnScroll>
        </section>
    )
}