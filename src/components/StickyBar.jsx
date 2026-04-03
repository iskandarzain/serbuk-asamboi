import { useState, useEffect } from 'react';

export default function StickyBar({ ctaLink }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-bar ${visible ? 'visible' : ''}`} id="sticky-bar">
      <div className="sticky-bar-content">
        <div className="sticky-bar-text">
          <p>NAK CUBA? 🔥</p>
          <p>Jangan tunggu viral baru nak beli!</p>
        </div>

        <a href={ctaLink} className="cta-button" id="sticky-cta">
          KLIK SEKARANG! 🛒
        </a>
      </div>
    </div>
  );
}
