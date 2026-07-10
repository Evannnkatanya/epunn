import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certs from './components/Certs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Parallax moving background blobs */}
      <Background />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certs />
      <Contact />
      <Footer />
    </div>
  )
}


