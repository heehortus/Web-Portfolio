import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Particles from "./components/Particles";
import { siteData } from "./data/siteData";

export default function App() {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={["#7a7a7a"]}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <Cursor />
      <Navbar name={siteData.name} />
      <main>
        <Hero data={siteData} />
        <Projects projects={siteData.projects} />
        <Contact data={siteData} />
      </main>
    </>
  );
}
