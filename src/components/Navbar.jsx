import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo">SLURPPP</a>
        <div className="navbar-links">
          <a href="#features">Kenapa Viral?</a>
          <a href="#order" className="navbar-order-btn">Beli Sekarang</a>
        </div>
      </div>
    </nav>
  );
}
