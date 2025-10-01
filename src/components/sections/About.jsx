import {RevealOnScroll} from "../RevealOnScroll";
import ava from "./img/ava.png"
import cake from "./img/cake.png"

export const About = () => {
    const languages = [
        "Java", 
        "Python", 
        "C/ C++", 
        "JavaScript", 
        "HTML/ CSS",
        "Kotlin",
    ];

    const developerTools = [
        "Azure", 
        "AWS",
        "React",
        "MongoDB", 
        "Flutter",
        "Bootstrap",
        "Git",
        "pandas",
        "NumPy",
        "Tensorflow",
        "Matplotlib",
        "Vercel",
    ];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-white">
        <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-rose-700 to-rose-300 bg-clip-text text-transparent text-center">
                {""}ABOUT ME</h2>
            <div className="flex justify-center mt-20">
                <div className="relative -top-10 w-65 h-65">
                    <img src={ava} alt="avatar" className="w-full h-full object-cover rounded-full"/>
                    <img src={cake} alt="cake" className="absolute bottom-0 w-30 h-30 transform -rotate-12"/>
                </div>

                <div className="relative -top-10">
                  <p className="text-black text-bold mt-10 mb-6 ml-6 max-w-sm">
                  Hey there, Leonie's here! <br/>
                  🇻🇳 Born and raised in Ho Chi Minh City, Vietnam. <br/>
                  🇺🇸 Based in Indiana.<br/>
                  💻 CS & Design Studies Junior @DePauw University<br/>
                  💻 I love coding 👩🏻‍💻, painting 🎨, traveling ✈️, and crocheting 🧶.<br/>
                  💻 Interests: Full-stack Software Engineering & Web Developing <br/>
                  </p>
                </div>
        </div>

{/* glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all */}
        <div className="">
            <h2 style={{ color: "#a8042f" }} className="text-3xl font-bold mb-8 bg-gradient-to-r from-rose-700 to-rose-300 bg-clip-text text-transparent text-center">
            {""}MY TECH STACK</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div className="rounded-xl p-4 bg-rose-100 hover:-translate-y-1 transition-all">
                <h3 className="text-2xl font-bold mb-3 text-rose-700">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                    {languages.map((tech, key) => (
                    <span
                    key={key}
                    className="bg-rose-500/10 text-rose-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-rose-600 hover:text-white transition"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl p-4 bg-rose-100 hover:-translate-y-1 transition-all">
                <h3 className="text-2xl font-bold mb-3 text-rose-700">Backend</h3>
                <div className="flex flex-wrap gap-2">
                {developerTools.map((tech, key) => (
                    <span
                    key={key}
                    className="bg-rose-500/10 text-rose-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-rose-600 hover:text-white transition"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </div>
        </div>

        </div>
            <div className="space-y-6">
              {/* EXPERIENCE */}
              <div className="border-white/10 border hover:-translate-y-1 transition-all">
              <h2 style={{ color: "#a8042f" }} className="text-3xl font-bold mt-10 mb-8 bg-gradient-to-r from-rose-700 to-rose-300 bg-clip-text text-transparent text-center">
              {""}EXPERIENCE</h2>
                <div className="bg-rose-500/10 text-rose-500 py-10 px-3 rounded-lg text-sm text-black space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-rose-700">Software Engineer Intern</h3>
                      <h3 className="text-xl text-gray-500 italic">Sept. 2025</h3>
                    </div>
                    <h3 className="text-xl text-gray-500 italic">IpserLab LLC</h3>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Program and test website; implement web features in React that aligns with company’s business goals.</li>    
                    </ul>
                </div>
              </div>

              <div className="border-white/10 border hover:-translate-y-1 transition-all">
                <div className="bg-rose-500/10 text-rose-500 py-10 px-3 rounded-lg text-sm text-black space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-rose-700">Raspberry Pi Researcher </h3>
                      <h3 className="text-xl text-gray-500 italic">Aug. 2025 – Present</h3>
                    </div>
                    <h3 className="text-xl text-gray-500 italic">DePauw Computer Science Department </h3>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Designed and deployed Raspberry Pi-based prototypes integrating Java for image recognition and data analysis.</li>    
                    </ul>
                </div>
              </div>

              <div className="border-white/10 border hover:-translate-y-1 transition-all">
                <div className="bg-rose-500/10 text-rose-500 py-10 px-3 rounded-lg text-sm text-black space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-rose-700">Software Development Instructor</h3>
                      <h3 className="text-xl text-gray-500 italic">Jun. 2025 – Aug. 2025</h3>
                    </div>
                    <h3 className="text-xl text-gray-500 italic">DePauw Computer Science Department </h3>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Delivered hands-on coding workshops with one-on-one support to groups of 8-12 students on Python and Java
                      Programming, AI/ML, Game Design, and Digital Art and Animation with Adobe.</li>  
                      <li>Guided 100% of students in developing end-to-end technical projects, including AI Chatbots, Image/ Number
                      Recognition Model; managed 80+ students across multiple sessions utilizing effective classroom strategies.</li>  
                    </ul>
                </div>
              </div>

              <div className="border-white/10 border hover:-translate-y-1 transition-all">
                <div className="bg-rose-500/10 text-rose-500 py-10 px-3 rounded-lg text-sm text-black space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-rose-700">Computer Science Teaching Assistant</h3>
                      <h3 className="text-xl text-gray-500 italic">Sep. 2024 – Sep. 2025</h3>
                    </div>
                    <h3 className="text-xl text-gray-500 italic">DePauw University</h3>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Facilitated 10 hours per week of one-on-one Java programming support for 60+ students in Introduction to
                      Computer Science courses; strengthened students’ core software development skills.</li>  
                      <li>Guided students through debugging code, and object-oriented programming concepts, achieving a 25% average
                      improvement in coding proficiency.</li>  
                    </ul>
                </div>
              </div>

              <div className="border-white/10 border hover:-translate-y-1 transition-all">
                <div className="bg-rose-500/10 text-rose-500 py-10 px-3 rounded-lg text-sm text-black space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-rose-700">Technology Intern</h3>
                      <h3 className="text-xl text-gray-500 italic">Sep. 2023 – Sep. 2024</h3>
                    </div>
                    <h3 className="text-xl text-gray-500 italic">DePauw University</h3>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Built 15+ multidisciplinary projects integrating data analysis (Tableau Visualization), spatial storytelling (ArcGIS
                        StoryMaps), VR development, 3D printing, and multimedia design tools.</li>  
                    </ul>
                </div>
              </div>
        </div>

        <div>
  {/* LEADERSHIP */}
  <h2
    style={{ color: "#a8042f" }}
    className="text-3xl font-bold mt-10 mb-8 bg-gradient-to-r 
               from-rose-700 to-rose-300 bg-clip-text text-transparent text-center"
  >
    LEADERSHIP
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* President */}
    <div className="border-white/10 border hover:-translate-y-1 transition-all">
      <div className="bg-rose-500/10 text-rose-500 py-10 px-3 rounded-lg text-sm text-black space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-rose-700">President</h3>
          <h3 className="text-xl text-gray-500 italic">Jul. 2025</h3>
        </div>
        <h3 className="text-xl text-gray-500 italic">
          DePauw Women in Computer Science Club (ACM-W Chapter)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Directed 15 exec board members to coordinate 30+ networking 
            opportunities; led the organization’s strategic planning and 
            initiatives to foster a supportive community for DePauw’s Women in Tech.
          </li>
        </ul>
      </div>
    </div>

    {/* Treasurer */}
    <div className="border-white/10 border hover:-translate-y-1 transition-all">
      <div className="bg-rose-500/10 text-rose-500 py-10 px-3 rounded-lg text-sm text-black space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-rose-700">Treasurer</h3>
          <h3 className="text-xl text-gray-500 italic">Jul. 2025</h3>
        </div>
        <h3 className="text-xl text-gray-500 italic">
          DePauw International Student Association
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


      

      

        </div>
        </RevealOnScroll>
    </section>;
}