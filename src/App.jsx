import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const marginRange = isMobile ? ['0rem', '0rem'] : ['4rem', '0rem'];
  const animatedMargin = useTransform(scrollYProgress, [0, 1], marginRange);

  return (
    <div className='bg-white border-slate-200 dark:bg-slate-900'>
      <Router>
        <Navbar />
        <motion.div
          className='mt-0 md:mt-2 md:rounded-t-3xl overflow-hidden'
          style={{
            marginLeft: animatedMargin,
            marginRight: animatedMargin
          }}
        >
          <div className="w-full h-[100%] bg-[url('https://res.cloudinary.com/djr22sgp3/image/upload/v1683277801/Light_ekxcia.svg')] dark:bg-[url('https://res.cloudinary.com/djr22sgp3/image/upload/v1683278025/Dark_b0r36s.svg')] bg-cover bg-center bg-no-repeat">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </motion.div>
      </Router>
    </div>
  );
}

export default App;
