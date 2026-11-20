import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Services from './components/Services'
import WhyBlockMint from './components/WhyBlockMint'
import Approach from './components/Approach'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-copper focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Overview />
        <Services />
        <WhyBlockMint />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
