// src/components/Hero.tsx
import React from "react";
import { Logo } from "../../assets/SVG/logo";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col bg-[#f5f7fb] w-full min-h-screen"
      style={{
        backgroundImage: "url('/nurse.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Navbar */}
      <header className="z-20 relative flex justify-between items-center bg-blue-900 bg-opacity-90 backdrop-blur-sm px-6 py-4 w-full">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-white text-xl">
          <span role="img" aria-label="logo" className="p-2, pl-5">
            <Logo width={50} height={50} />
          </span>{" "}
          SG Enfermería
        </div>

        {/* Links */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 font-medium text-white">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#department" className="hover:underline">
                Department
              </a>
            </li>
            <li>
              <a href="#pages" className="hover:underline">
                Pages
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Botón */}
        <a
          href="#appointment"
          className="bg-white ml-4 px-4 py-2 rounded-lg font-bold text-blue-900 text-sm"
        >
          Reserva tu cita
        </a>
      </header>

      {/* Hero Content */}
      <div className="z-10 relative flex flex-1 justify-start items-start px-6 md:px-16 py-10">
        {/* Texto */}
        <div className="pt-8 md:pt-16 pl-8 md:pl-28 max-w-4xl text-left">
          <h5 className="mb-2 font-medium font-semibold text-indigo-700 text-lg italic">Nurse And Health</h5>
          <h1 className="drop-shadow-lg mb-6 font-bold text-azul text-3xl md:text-7xl leading-snug">
            Amplia experiencia en <br />
            cuidados domiciliarios
            //Amplia experiencia en cuidados domiciliarios.
          </h1>
          <a
            href="#doctors"
            className="inline-block bg-blue-800 hover:bg-blue-950 shadow-lg px-6 py-3 rounded-lg text-white transition"
          >
            Nuestros profesionales →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
