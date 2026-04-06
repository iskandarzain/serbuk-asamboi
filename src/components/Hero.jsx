import { ShoppingCart, Flame, TrendingUp } from 'lucide-react';

export default function Hero({ ctaLink }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">
            <Flame size={14} aria-hidden="true" />
            TRENDING NOW
          </span>

          <h1 className="hero-headline">
            <span className="line-1">SEKALI RASA...</span>
            <span className="line-2">CONFIRM KETAGIH!</span>
          </h1>

          <p className="hero-sub">
            <span>Serbuk Asamboi Viral:</span> Masam, Manis, Pedas Padu!
          </p>

          <p className="hero-tagline">
            Tabur sikit je... terus SLURPPP!
          </p>

          <a href={ctaLink} className="cta-button" id="hero-cta">
            <ShoppingCart size={20} aria-hidden="true" />
            NAK CUBA? KLIK SEKARANG!
          </a>
        </div>

        <div className="hero-image">
          <img
            src="/images/hero-product.png"
            alt="SLURPPP Serbuk Asamboi jar with floating mango and guava"
            loading="eager"
          />
          {/* Floating social proof badge */}
          <div className="hero-social-badge" aria-label="500 lebih terjual bulan ini">
            <TrendingUp size={14} aria-hidden="true" />
            <span>500+ terjual bulan ini</span>
          </div>
        </div>
      </div>
    </section>
  );
}
