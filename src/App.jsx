import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import CurrentFocus from './components/CurrentFocus';
import About from './components/About';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Capabilities from './components/Capabilities';
import Experience from './components/Experience';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import './styles/global.css';

const HomePage = () => (
  <>
    <Hero />
    <CurrentFocus />
    <About />
    <Projects />
    <Philosophy />
    <Experience />
    <Capabilities />
    <Leadership />
    <Education />
    <Contact />
  </>
);

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="App">
      <Cursor />
      <Navbar />
      <div className="grid-bg"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
