import {RevealOnScroll} from "../RevealOnScroll";
import ava from "./img/ava.png"
import cake from "./img/cake.png"
import wicsFm from "./img/wics-fm.JPG";
import wicsGs from "./img/wics-gs.JPG";
import disa from "./img/disa.png";

export const About = () => {
    const languages = [
        "Python", 
        "Java", 
        "C/ C++", 
        "JavaScript", 
        "TypeScript",
        "HTML/ CSS",
        "Kotlin",
        "SQL",
        "Numpy",
        "Tensorflow",
        "Matplotlib",
        "Azure",
        "AWS",
        "React.js",
        "Vue.js",
        "Node.js",
        "MongoDB",
        "Flutter",
        "Bootstrap",
        "Git",
        "VS Code",
        "Jupyter",
        "Android Studio",
        "XCode"
    ];

    const developerTools = [
        "Figma", 
        "Adobe Animate",
        "Adobe Illustrator",
        "Adobe Photoshop", 
        "Davinci Resolve",
        "Procreate",
        "Canva"
    ];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-white">
        <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r text-[#394c5c] bg-clip-text text-center">
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
            <h2 style={{ color: "#041a38" }} className="text-3xl font-bold mb-8 bg-clip-text text-transparent text-center">
            {""}MY TECH STACK</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div className="rounded-xl p-4 bg-[#d8e7ee] hover:-translate-y-1 transition-all">
                <h3 className="text-2xl font-bold mb-3 text-[#041a38]">Coding Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {languages.map((tech, key) => (
                    <span
                    key={key}
                    className="bg-[#97d4f1] text-[#041a38] py-1 px-3 rounded-full text-sm 
                                hover:bg-[#041a38] hover:text-white transition"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl p-4 bg-[#d8e7ee] hover:-translate-y-1 transition-all">
                <h3 className="text-2xl font-bold mb-3 text-[#041a38]">Design Skills</h3>
                <div className="flex flex-wrap gap-2">
                {developerTools.map((tech, key) => (
                    <span
                    key={key}
                    className="bg-[#97d4f1] text-[#041a38] py-1 px-3 rounded-full text-sm 
                                hover:bg-[#041a38] hover:text-white transition"
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
              <h2 style={{ color: "#041a38" }} className="text-3xl font-bold mt-10 mb-8 bg-gradient-to-r from-rose-700 to-rose-300 bg-clip-text text-transparent text-center">
              {""}EXPERIENCE</h2>
                <div className="bg-[#d8e7ee] py-10 px-12 rounded-lg text-sm text-black space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-[#041a38]">Software Engineer Intern</h3>
                      <h3 className="text-lg text-gray-700 italic">Sep 25' - Present</h3>
                    </div>
                    <h3 className="text-lg text-gray-700 italic">IpserLab LLC</h3>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Build interactive React + Tailwind components for Tectra’s platform, integrating REST APIs for dynamic project and user data.</li>    
                      <li>Collaborate on modular frontend architecture for profiles, projects, and messaging, cutting code redundancy by 30%.</li>
                    </ul>
                </div>
              </div>

              <div className="border-white/10 border hover:-translate-y-1 transition-all">
                <div className="bg-[#d8e7ee] py-10 px-12 rounded-lg text-sm text-black space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-[#041a38]">Raspberry Pi Researcher </h3>
                      <h3 className="text-lg text-gray-700 italic">Aug 25' – Present</h3>
                    </div>
                    <h3 className="text-lg text-gray-700 italic">DePauw Computer Science Department </h3>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Design and deploy computer vision models on Raspberry Pi devices using Java and Python for real-time classification; developed
an object recognition model to track 100+ campus assets, reducing manual effort by 20%.</li>  
                      <li>Collect and annotated image datasets from various campus environments to train and evaluate model performance; improved
classification accuracy by 25%.</li>
                    </ul>
                </div>
              </div>

              <div className="border-white/10 border hover:-translate-y-1 transition-all">
                <div className="bg-[#d8e7ee] py-10 px-12 rounded-lg text-sm text-black space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-[#041a38]">Software Development Instructor</h3>
                      <h3 className="text-lg text-gray-700 italic">Jun 25' – Aug 25'</h3>
                    </div>
                    <h3 className="text-lg text-gray-700 italic">DePauw Computer Science Department </h3>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Led immersive workshops on Python, Java, Game Development, and Digital Art and Animation, providing individualized
guidance to groups of 8-12 students and mentoring 80+ learners in debugging, interface design, and version control.</li>  
                      <li>Guided 100% of students in developing end-to-end technical projects from AI Chatbots to Image/ Number Recognition Model
while managing multiple sessions and fostering creativity and problem-solving skills.</li>  
                    </ul>
                </div>
              </div>

              <div className="border-white/10 border hover:-translate-y-1 transition-all">
                <div className="bg-[#d8e7ee] py-10 px-12 rounded-lg text-sm text-black space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-[#041a38]">Computer Science Teaching Assistant</h3>
                      <h3 className="text-lg text-gray-700 italic">Sep 24' – Sep 25'</h3>
                    </div>
                    <h3 className="text-lg text-gray-700 italic">DePauw University</h3>
                    
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Facilitated 10 hours per week of one-on-one Java programming support for 60+ students in Introduction to
                      Computer Science courses; strengthened students’ core software development skills.</li>  
                      <li>Guided students through debugging code, and object-oriented programming concepts, achieving a 25% average
                      improvement in coding proficiency.</li>  
                    </ul>
                </div>
              </div>

              <div className="border-white/10 border hover:-translate-y-1 transition-all">
                <div className="bg-[#d8e7ee] py-10 px-12 rounded-lg text-sm text-black space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-[#041a38]">Technology Intern</h3>
                      <h3 className="text-lg text-gray-700 italic">Sep 23' – Sep. 24'</h3>
                    </div>
                    <h3 className="text-lg text-gray-700 italic">DePauw University</h3>
                    
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
    style={{ color: "#041a38" }}
    className="text-3xl font-bold mt-10 mb-8 bg-gradient-to-r 
             bg-clip-text text-transparent text-center"
  >
    LEADERSHIP
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* President */}
    <div className="border-white/10 border hover:-translate-y-1 transition-all">
      <div className="bg-[#d8e7ee] py-10 px-12 rounded-lg text-sm text-black space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-[#041a38]">President</h3>
          <h3 className="text-lg text-gray-700 italic">Jul 25'</h3>
        </div>
        <h3 className="text-lg text-gray-700 italic">
          ACM-W DePauw University Chapter
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Directed 15 exec board members to coordinate 30+ networking 
            opportunities; led the organization’s strategic planning and 
            initiatives to foster a supportive community for DePauw’s Women in Tech.
          </li>
        </ul>
        <div className="flex justify-center items-center mt-8">
        <div className="flex flex-col justify-center items-center mt-8 gap-4">
          <img
            src={wicsFm}
            alt="WICS Event 1"
            className="w-72 h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src={wicsGs}
            alt="WICS Event 2"
            className="w-72 h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      </div>
    </div>


    {/* Treasurer */}
    <div className="border-white/10 border hover:-translate-y-1 transition-all">
      <div className="bg-[#d8e7ee] py-10 px-12 rounded-lg text-sm text-black space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-[#041a38]">Treasurer</h3>
          <h3 className="text-lg text-gray-700 italic">Jul. 2025</h3>
        </div>
        <h3 className="text-lg text-gray-700 italic">
          DePauw International Student Association
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Collaborated with DePauw Student Government to coordinate $5000+ to events that promote inclusion and diversity around DePauw campus; compiled and kept track of organization's budget.
          </li>
        </ul>
        <img
          src={disa}
          alt="Disa"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>


    </div>
  </div>
</div>


      

      

        </div>
        </RevealOnScroll>
    </section>;
}