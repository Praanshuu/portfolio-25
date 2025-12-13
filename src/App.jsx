import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Cursor from './components/Cursor';
import AudioPlayer from './components/AudioPlayer';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import './styles/global.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" setLoading={setLoading} />}
      </AnimatePresence>
      {!loading && (
        <>
          <Cursor />
          <Navbar />
          <AudioPlayer />
          <div className="grid-bg"></div>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certificates />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
