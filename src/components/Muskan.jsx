import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from '../assets/background/bg.png';

const Muskan = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black"
    id="home">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Muskan Gupta"
        className="absolute right-0 bottom-0 h-[85%] md:h-[95%] lg:h-full w-auto object-contain z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10"></div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">

        {/* Left Side */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">

          {/* Heading */}
          <h1
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Hi, I'm Muskan Gupta.
            <br />
            <span className="text-transparent"style={{ WebkitTextStroke: "3px #800020" }}>
              A Full Stack Developer
            </span>
          </h1>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md"
          >
            I'm passionate about building scalable web applications using MERN Stack, Java, and modern frontend technologies.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <button
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-[#1A1A1A] text-white font-semibold hover:bg-[#2A2A2A] transition-all duration-300 transform hover:scale-105 shadow-lg">
              View My Work
            </button>

            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-xl"
            >
              Contact Me
            </button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

    </section>
  );
};

export default Muskan;