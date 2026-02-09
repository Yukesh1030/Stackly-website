import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <Link to="/home" className="stackly-logo">
        <img src="/logo.png" alt="Stackly" />
      </Link>

      <div className={`nav-links ${open ? 'active' : ''}`}>
        <Link to="/home" className="link" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" className="link" onClick={() => setOpen(false)}>About</Link>
        <Link to="/service" className="link" onClick={() => setOpen(false)}>Services</Link>
        <Link to="/career#career-top" className="link" onClick={() => setOpen(false)}>Careers</Link>
        <Link to="/contact" className="link" onClick={() => setOpen(false)}>Contact</Link>
      </div>

      <div className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
