import { useState, useEffect } from 'react';
import { Flame, ShoppingCart } from 'lucide-react';

export default function StickyBar({ ctaLink }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const orderSection = document.getElementById('order');
      if (orderSection) {
        const rect = orderSection.getBoundingClientRect();
        // Hide when order form is in view
        const nearOrder = rect.top < window.innerHeight && rect.bottom > 0;
        setVisible(window.scrollY > 600 && !nearOrder);
      } else {
        setVisible(window.scrollY > 600);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-bar ${visible ? 'visible' : ''}`} id="sticky-bar" role="region" aria-label="Beli sekarang">
      <div className="sticky-bar-content">
        <div className="sticky-bar-text">
          <p>
            <Flame size={14} aria-hidden="true" />
            STOK TERHAD!
          </p>
          <p>RM10.90 je sebalang — grab sekarang!</p>
        </div>

        <a href={ctaLink} className="cta-button" id="sticky-cta">
          <ShoppingCart size={16} aria-hidden="true" />
          ORDER SEKARANG!
        </a>
      </div>
    </div>
  );
}
