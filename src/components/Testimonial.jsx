import useReveal from '../hooks/useReveal';

export default function Testimonial() {
  const ref = useReveal();

  return (
    <section className="testimonial" id="testimonial">
      <div className="container">
        <h2 className="section-title reveal" ref={ref}>
          APA ORANG <span className="accent">CAKAP?</span>
        </h2>

        <TestimonialCard />
      </div>
    </section>
  );
}

function TestimonialCard() {
  const ref = useReveal();

  return (
    <div className="testimonial-card reveal" ref={ref}>
      <div className="testimonial-quote-mark">&ldquo;</div>

      <p className="testimonial-text">
        Aku beli saja nak try... <strong>last-last habis 1 balang sorang
        makan!</strong> Memang tak boleh berhenti. Tabur atas mangga, atas
        jambu — semua sedap gila. Confirm beli lagi! 🤤
      </p>

      <div className="testimonial-stars">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} role="img" aria-label="star">⭐</span>
        ))}
      </div>

      <div className="testimonial-emoji">😂</div>

      <p className="testimonial-author">— Pelanggan setia dari KL</p>
    </div>
  );
}
