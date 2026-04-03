export default function Hero({ ctaLink }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">🔥 TRENDING NOW</span>

          <h1 className="hero-headline">
            <span className="line-1">SEKALI RASA...</span>
            <span className="line-2">CONFIRM KETAGIH!</span>
          </h1>

          <p className="hero-sub">
            <span>Serbuk Asamboi Viral:</span> Masam, Manis, Pedas Padu!
          </p>

          <p className="hero-tagline">
            Tabur sikit je... terus SLURPPP! 🤤
          </p>

          <a href={ctaLink} className="cta-button" id="hero-cta">
            NAK CUBA? KLIK SEKARANG! 🛒
          </a>
        </div>

        <div className="hero-image">
          <img
            src="/images/hero-product.png"
            alt="SLURPPP Serbuk Asamboi jar with floating mango and guava"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
