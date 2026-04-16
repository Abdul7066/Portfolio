import { useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useTheme } from './hooks/useTheme';

/**
 * App — root component that assembles the full portfolio page.
 * Initialises theme and scroll-reveal as top-level side effects.
 */
export default function App() {
  // Ensure theme attribute is set on first render
  useTheme();

  // Scroll-reveal on the same elements as the original JS
  useScrollReveal('.exp-item, .proj-card, .skill-group, .contact-item, .stat-card');

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
