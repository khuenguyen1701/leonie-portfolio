import { RevealOnScroll } from "../RevealOnScroll";
import contactAva from "./img/contactAva.jpg";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-[#d8e7ee]"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[#041a38] mb-6">
            contact me
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-12">
            Let's connect! I would love to hear from you!
          </p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center mt-12">
            <div className="flex justify-center">
                <img
                src={contactAva}
                alt="Leonie Nguyen avatar"
                className="w-40 sm:w-48 md:w-56 h-auto object-cover rounded-full shadow-md"
                />
            </div>

            {/* CONTACT INFO */}
            <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-8 text-[#041a38] space-y-6 text-center md:text-left">
                <div>
                <h3 className="text-2xl font-semibold mb-2">email</h3>
                <a
                    href="mailto:khuenguyen170105@gmail.com"
                    className="text-[#041a38] hover:text-[#4c988f] text-lg break-all"
                >
                    khuenguyen170105@gmail.com
                </a>
                </div>

                <div>
                <h3 className="text-2xl font-semibold mb-2">linkedin</h3>
                <a
                    href="https://www.linkedin.com/in/mkhuenguyen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#041a38] hover:text-[#4c988f] text-lg break-all"
                >
                    linkedin.com/in/mkhuenguyen
                </a>
                </div>

                <div>
                <h3 className="text-2xl font-semibold mb-2">github</h3>
                <a
                    href="https://github.com/khuenguyen1701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#041a38] hover:text-[#4c988f] text-lg break-all"
                >
                    github.com/khuenguyen1701
                </a>
                </div>
            </div>
            </div>


          {/* FOOTNOTE */}
          <p className="text-gray-600 mt-12 text-sm">
            © 2025 Leonie Nguyen
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
