import NotFound from './components/NotFound'
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Particles from "./components/Particles";
import ProjectDetail from "./components/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";
import { siteData } from "./data/siteData";

function AppRoutes() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document
          .getElementById(location.state.scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState({}, "");
      }, 300);
    }
  }, [location]);

  return (
    <>
      {isHome && (
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
      )}
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <main className="relative z-10 overflow-x-hidden">
              <Hero data={siteData} />
              <Projects projects={siteData.projects} />
              <Contact data={siteData} />
            </main>
          }
        />
        <Route
          path="/project/:slug"
          element={
            <ProjectDetail
              key={location.pathname}
              projects={siteData.projects}
            />
          }
        />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Cursor />
      <Navbar name={siteData.name} />
      <AppRoutes />
    </>
  );
}
