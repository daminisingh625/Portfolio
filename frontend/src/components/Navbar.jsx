import "./style.css";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/experience">Certifications</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}
