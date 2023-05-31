import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';

function App() {
  return (
    <div className="w-full h-[100%] bg-[url('https://res.cloudinary.com/djr22sgp3/image/upload/v1683277801/Light_ekxcia.svg')] dark:bg-[url('https://res.cloudinary.com/djr22sgp3/image/upload/v1683278025/Dark_b0r36s.svg')] bg-cover bg-center bg-no-repeat">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
