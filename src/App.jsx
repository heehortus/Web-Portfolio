import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { siteData } from './data/siteData'

export default function App() {
  return (
    <>
      <Navbar name={siteData.name} />
      <main>
        <Hero data={siteData} />
        <About data={siteData} />
        <Skills skills={siteData.skills} />
        <Projects projects={siteData.projects} />
        <Contact data={siteData} />
      </main>
      <Footer name={siteData.name} />
    </>
  )
}
