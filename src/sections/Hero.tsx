import React from 'react';
import Container from '../components/Container';
import { cn } from '../lib/utils'; // Keep import even if unused for now, good practice.

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-950 py-32 text-white md:py-52">
      {/* Background Glow Effect - Adjusted for reference mood */}
      <div className="absolute top-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-sky-600/10 blur-[120px] mix-blend-screen opacity-20 sm:h-[800px] sm:w-[800px]" />
      <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen opacity-20 sm:h-[700px] sm:w-[700px]" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <h1 className="mb-14 text-4xl font-extrabold tracking-tighter text-slate-200 sm:text-5xl md:text-6xl lg:text-7xl">
          Building{' '}
          <span className="bg-gradient-to-r from-sky-300 via-blue-600 to-indigo-600 bg-clip-text font-black text-transparent">
            scalable systems
          </span>
        </h1>

        <p className="mb-10 text-lg font-medium tracking-wide text-slate-300 sm:text-xl md:text-2xl">
          Full-Stack Engineer • Product-focused • Systems Architect
        </p>

        <p className="mb-14 max-w-2xl text-lg leading-relaxed text-slate-300/90 sm:text-xl">
          I design and build scalable, user-focused products that solve real problems.
          From APIs to interfaces, I&apos;m invested in every detail of the engineering experience.
        </p>

        <div className="flex flex-col gap-5 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex h-14 min-w-[170px] items-center justify-center rounded-full bg-sky-500 px-10 text-base font-bold text-slate-950 transition-all hover:-translate-y-1 hover:bg-sky-400 hover:shadow-[0_10px_30px_rgba(14,165,233,0.3)] focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex h-14 min-w-[170px] items-center justify-center rounded-full border border-slate-700 bg-transparent px-10 text-base font-bold text-sky-400 transition-all hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-500/10 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Get In Touch
          </a>
        </div>
      </Container>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
