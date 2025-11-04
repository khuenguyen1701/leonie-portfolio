import { RevealOnScroll } from "../RevealOnScroll";
import homeAva from "./img/homeAva.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#d8e7ee] pt-12 sm:pt-16 md:pt-24"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center px-6 md:px-12">
          {/* LEFT COLUMN */}
          <div className="relative flex flex-col items-center justify-center text-center translate-y-4 sm:translate-y-6">
            {/* TEXT ABOVE IMAGE */}
            <div className="absolute -top-8 md:-top-12 z-10 w-full flex flex-col items-center">
              <h1 className="text-5xl md:text-6xl font-bold text-[#041a38] leading-tight">
                welcome to my portfolio
              </h1>
              <p className="text-gray-700 text-2xl mt-3">
                I'm glad you're here!
              </p>
            </div>

            {/* IMAGE BELOW */}
            <img
              src={homeAva}
              alt="avatar"
              className="w-[20rem] sm:w-[24rem] md:w-[28rem] lg:w-[30rem] h-auto object-cover rounded-2xl mt-24"
            />
          </div>

          {/* RIGHT COLUMN */}
          <nav className="flex flex-col items-center justify-center gap-8 text-3xl font-pixelify text-center translate-y-4 sm:translate-y-6">
            <a
              href="#projects"
              className="text-[#041a38] hover:text-rose-700 transition"
            >
              projects
            </a>
            <a
              href="https://drive.google.com/file/d/1zxF_td3WLaTobiZpPT_2bt_ZAyrJhO4T/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#041a38] hover:text-rose-700 transition"
            >
              resume
            </a>
            <a
              href="#about"
              className="text-[#041a38] hover:text-rose-700 transition"
            >
              about
            </a>
            <a
              href="#contact"
              className="text-[#041a38] hover:text-rose-700 transition"
            >
              contact
            </a>
          </nav>
        </div>
      </RevealOnScroll>
    </section>
  );
};
