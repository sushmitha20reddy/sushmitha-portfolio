import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050914] text-white">
      <Navbar />

      <Hero />

      <About />

    <Projects />

      <Skills />

      <Experience />

      <Certifications />

      <Resume /> 
  
    <Contact />
    
    </main>
  );
}