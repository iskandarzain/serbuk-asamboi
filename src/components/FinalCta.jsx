import useReveal from '../hooks/useReveal';

export default function FinalCta({ ctaLink }) {
  const ref = useReveal();

  return (
    <section className="final-cta reveal" ref={ref} id="order">
      <h2 className="section-title">
        NAK <span className="accent">CUBA?</span>
      </h2>

      <p className="final-cta-sub">
        Jangan tunggu viral baru nak beli! 🔥
      </p>

      <a href={ctaLink} className="cta-button" id="final-cta">
        KLIK LINK SEKARANG! 🛒
      </a>
    </section>
  );
}
