import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import "./App.css"

export default function App() {
  return (
    <>
      <Header />
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
