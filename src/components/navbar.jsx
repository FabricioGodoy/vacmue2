import React, { useState, useEffect, useRef } from 'react';
import './styles/navBar.css';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Cierra el menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  // Cierra el menú al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header" ref={navRef}>
      <div className="header-top">
        <a href="/">
          <img src="../../img/VACAMUERTA.avif" alt="logo" className="logo" />
        </a>
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div />
          <div />
          <div />
        </div>
      </div>

      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="/" className="nav-link">Inicio</a>
        <a href="#nosotros" className="nav-link">Sobre Nosotros</a>
        <a href="/services" className="nav-link">Servicios</a>
        <a href="/contact" className="nav-link">Contacto</a>
      </nav>
    </header>
  );
};
