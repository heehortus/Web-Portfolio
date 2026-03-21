import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { siteData } from './data/siteData'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar name={siteData.name} />
      <main>
        <Hero data={siteData} />
        <Projects projects={siteData.projects} />
        <Contact data={siteData} />
      </main>
    </>
  )
}