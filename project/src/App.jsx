import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Cursor from './components/Cursor';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`${darkMode ? 'dark' : 'white'}`}>
      <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
        <Cursor />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <footer className="py-6 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} | Designed & Built with ❤️</p>
          <p className="mt-1 text-xs opacity-50">Press "K" to discover a secret</p>
        </footer>
      </div>
    </div>
  );
}

export default App;