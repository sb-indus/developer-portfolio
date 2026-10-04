import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <ScrollProgress />

      <CursorGlow />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;