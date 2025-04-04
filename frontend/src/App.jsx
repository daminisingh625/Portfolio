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
import Signup from './admin/Signup';
import Login from './admin/Login';

export default function App() {
  return (
    <>
      <Header />
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
          {/* adminRoutes */}
          <Route path="/admin/signup" element={<Signup/>}/>
          <Route path="/admin/login" element={<Login/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}
