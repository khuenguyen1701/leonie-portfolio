import {RevealOnScroll} from "../RevealOnScroll";
import pawrides from "./img/pawrides.png";
import closetLoop from "./img/closetLoop.png";
import healthPocket from "./img/healthPocket.png";
import cet from "./img/cet.png";
import heartpeak from "./img/heartpeak.png";
import pictograms from "./img/pictograms.png";
import theatre from "./img/theatre.png";


export const Projects = () => {

    return <section 
    id="projects" 
    className="min-h-screen flex items-center justify-center py-20 bg-rose-100">
        <RevealOnScroll>
        <div className="w-full mx-auto px-10">
        <h2 className="text-5xl font-bold mb-15 bg-gradient-to-r from-rose-700 to-rose-300 bg-clip-text text-transparent text-center">
            {""}
        PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className=" flex flex-col p-5 rounded-xl border border-white/10 bg-gray-500 hover:-translate-y-1 hover:border-rose-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"> 
            <h3 className="text-2xl font-bold text-white flex justify-center">PawRides</h3>
            <img src={pawrides} alt="avatar" className="my-5 w-100 h-50 object-cover rounded-lg"/>
            <p className="text-white mb-3">A website that helps navigate transportation for students at DePauw. Students will be able to search for rides and match with 
            drivers to local destinations.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
            {["HTML", "CSS", "JavaScript", "Firebase"].map((tech, key) => (
                <span 
                key={key}
                className="bg-white text-rose-700 py-1 px-3 rounded-full text-sm hover:bg-rose-700 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                {tech}
                </span>
            ))}
            </div>
            <div className="flex justify-center items-center mt-auto">
            <a href="https://github.com/Quantr10/Pawrides" className="bg-white text-rose-700 py-2 px-4 rounded-lg text-sm hover:bg-rose-700 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                {" "}View Project{" "}
            </a>
            </div>
        </div>

        <div className="flex flex-col p-5 rounded-xl border border-white/10 bg-rose-300/50 hover:-translate-y-1 hover:border-rose-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"> 
            <h3 className="text-2xl font-bold text-white flex justify-center">HealthPocket</h3>
            <img src={healthPocket} alt="avatar" className="my-5 w-100 h-50 object-cover rounded-lg"/>
            <p className="text-gray-700 mb-3">An Android app to manage encrypted medical records and control data sharing between
            patients, families, hospitals, and doctors in order to maintain privacy for all parties.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
            {["Kotlin", "Firebase", "Node.js", "Azure Key Vault"].map((tech, key) => (
                <span 
                key={key}
                className="bg-white text-rose-700 py-1 px-3 rounded-full text-sm hover:bg-rose-700 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                {tech}
                </span>
            ))}
            </div>
            <div className="flex justify-center items-center mt-auto">
            <a href="https://github.com/minhngoc24/HealthPocket" className="bg-white text-rose-700 py-2 px-4 rounded-lg text-sm hover:bg-rose-700 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                {" "}View Project{" "}
            </a>
            </div>
        </div>

        <div className=" flex flex-col p-5 rounded-xl border border-white/10 bg-gray-500 hover:-translate-y-1 hover:border-rose-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"> 
            <h3 className="text-2xl font-bold text-white flex justify-center">ClosetLoop</h3>
            <img src={closetLoop} alt="avatar" className="my-5 w-100 h-50 object-cover rounded-lg"/>
            <p className="text-white mb-3">A website that helps navigate transportation for students at DePauw. Students will be able to search for rides and match with 
            drivers to local destinations.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
            {["Flutter", "Firebase", "OpenAI", "Google Cloud"].map((tech, key) => (
                <span 
                key={key}
                className="bg-white text-rose-700 py-1 px-3 rounded-full text-sm hover:bg-rose-700 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                {tech}
                </span>
            ))}
            </div>
            <div className="flex justify-center items-center mt-auto">
            <a href="https://github.com/Quantr10/Pawrides" className="bg-white text-rose-700 py-2 px-4 rounded-lg text-sm hover:bg-rose-700 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                {" "}View Project{" "}
            </a>
            </div>
        </div>

        <div className="flex flex-col p-5 rounded-xl border border-white/10 bg-rose-300/50 hover:-translate-y-1 hover:border-rose-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"> 
            <h3 className="text-2xl font-bold text-white flex justify-center">CET</h3>
            <img src={cet} alt="avatar" className="my-5 w-100 h-50 object-cover rounded-lg"/>
            <p className="text-gray-700 mb-3">An Android app to manage encrypted medical records and control data sharing between
            patients, families, hospitals, and doctors in order to maintain privacy for all parties.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
            {["Figma"].map((tech, key) => (
                <span 
                key={key}
                className="bg-white text-rose-700 py-1 px-3 rounded-full text-sm hover:bg-rose-700 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                {tech}
                </span>
            ))}
            </div>
            <div className="flex justify-center items-center mt-auto">
            <a href="https://www.figma.com/design/PbeipP71vor7oToolmzfAM/CET?node-id=0-1&t=Y3wbL4Xv2Xxha516-1" className="bg-white text-rose-700 py-2 px-4 rounded-lg text-sm hover:bg-rose-700 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                {" "}View Project{" "}
            </a>
            </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col p-5 rounded-xl border border-white/10 bg-rose-300/50 hover:-translate-y-1 hover:border-rose-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"> 
            <h3 className="text-2xl font-bold text-white flex justify-center">HeartPeak</h3>
            <img src={heartpeak} alt="avatar" className="my-5 w-100 h-50 object-cover rounded-lg"/>
            <p className="text-gray-700 mb-3">A product storytelling graphic design projects about four friends with different characteristics.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
            {["Readymag", "Adobe Illustrator", "Tinkercad", "3D Printing", "Character Design", "Typography", "Packaging Design", "Web Development"].map((tech, key) => (
                <span 
                key={key}
                className="bg-white text-rose-700 py-1 px-3 rounded-full text-sm hover:bg-rose-700 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                {tech}
                </span>
            ))}
            </div>
            <div className="flex justify-center items-center mt-auto">
            <a href="https://readymag.website/u1043701121/4763104/" className="bg-white text-rose-700 py-2 px-4 rounded-lg text-sm hover:bg-rose-700 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                {" "}View Project{" "}
            </a>
            </div>
        </div>

        <div className=" flex flex-col p-5 rounded-xl border border-white/10 bg-gray-500 hover:-translate-y-1 hover:border-rose-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"> 
            <h3 className="text-2xl font-bold text-white flex justify-center">Fairytale Icons</h3>
            <img src={pictograms} alt="avatar" className="my-5 w-100 h-50 object-cover rounded-lg"/>
            <p className="text-white mb-3">A project turns fairytales into icons and illustrations.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
            {["Adobe Illustrator", "Pictograms Design"].map((tech, key) => (
                <span 
                key={key}
                className="bg-white text-rose-700 py-1 px-3 rounded-full text-sm hover:bg-rose-700 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                {tech}
                </span>
            ))}
            </div>
            <div className="flex justify-center items-center mt-auto">
            <a href="https://drive.google.com/file/d/1-1jkXYV9BpzPFsphc8t33BFKJjd4WbDD/view?usp=sharing" className="bg-white text-rose-700 py-2 px-4 rounded-lg text-sm hover:bg-rose-700 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                {" "}View Project{" "}
            </a>
            </div>
        </div>

        <div className="flex flex-col p-5 rounded-xl border border-white/10 bg-rose-300/50 hover:-translate-y-1 hover:border-rose-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"> 
            <h3 className="text-2xl font-bold text-white flex justify-center">Theatre Promotion</h3>
            <img src={theatre} alt="avatar" className="my-5 w-100 h-50 object-cover rounded-lg"/>
            <p className="text-gray-700 mb-3">A compilation of theatre promotion work for the play Vinegar Tom.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
            {["Graphic Design", "Photography", "Painting"].map((tech, key) => (
                <span 
                key={key}
                className="bg-white text-rose-700 py-1 px-3 rounded-full text-sm hover:bg-rose-700 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                {tech}
                </span>
            ))}
            </div>
            <div className="flex justify-center items-center mt-auto">
            <a href="https://drive.google.com/file/d/1H5_IHLT5W20OCS605tlk3Bs4nluNrZqw/view?usp=sharing" className="bg-white text-rose-700 py-2 px-4 rounded-lg text-sm hover:bg-rose-700 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                {" "}View Project{" "}
            </a>
            </div>
        </div>

        </div>

        
        </div>
        </RevealOnScroll>
    </section>
}