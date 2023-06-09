import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Services from './assets/pages/Services';
import Contact from './assets/pages/Contact';

function App() {
  return (
    <div className='bg-white border-slate-200 dark:bg-slate-900'>
      <Router>
        <Navbar />
        <div
        id="content-div"
          className='mt-0 md:mt-2 md:rounded-t-3xl md:mx-14 shadow-2xl overflow-hidden z-50'
        >
          <div className="w-full h-[100%] bg-[url('https://res.cloudinary.com/djr22sgp3/image/upload/v1683277801/Light_ekxcia.svg')] dark:bg-[url('https://res.cloudinary.com/djr22sgp3/image/upload/v1683278025/Dark_b0r36s.svg')] bg-cover bg-center bg-no-repeat">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
