import Navbar from '@/src/components/Navbar';
import Hero from '@/src/sections/Hero';
import Projects from '@/src/sections/Projects';
import Skills from '@/src/sections/Skills';
import Approach from '@/src/sections/HowIBuild';
import About from '@/src/sections/About';
import Contact from '@/src/sections/Contact';
import Footer from '@/src/sections/Footer';

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Approach />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
