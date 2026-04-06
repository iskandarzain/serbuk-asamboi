import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on outside click or resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={closeMenu}>SLURPPP</a>

        {/* Desktop links */}
        <div className="navbar-links">
          <a href="#features" className="nav-desktop-link">Kenapa Viral?</a>
          <a href="#pricing" className="nav-desktop-link">Pakej</a>
          <a href="#order" className="navbar-order-btn">Beli Sekarang</a>
        </div>

        {/* Hamburger toggle (mobile only) */}
        <button
          className="navbar-hamburger"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`navbar-mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <a href="#features" className="mobile-nav-link" onClick={closeMenu}>Kenapa Viral?</a>
        <a href="#how-to-enjoy" className="mobile-nav-link" onClick={closeMenu}>Sesuai Dengan?</a>
        <a href="#pricing" className="mobile-nav-link" onClick={closeMenu}>Pakej & Harga</a>
        <a href="#testimonial" className="mobile-nav-link" onClick={closeMenu}>Testimoni</a>
        <a href="#order" className="mobile-nav-cta" onClick={closeMenu}>Beli Sekarang →</a>
      </div>
    </nav>
  );
}
