import useReveal from '../hooks/useReveal';

const TESTIMONIALS = [
  {
    text: 'Aku beli saja nak try... last-last habis 1 balang sorang makan! Memang tak boleh berhenti. Tabur atas mangga, atas jambu — semua sedap gila. Confirm beli lagi!',
    emoji: '🤤',
    author: 'Aina S.',
    location: 'Kuala Lumpur',
  },
  {
    text: 'Beli untuk anak-anak, last-last bapak yang habiskan. Memang padu rasa dia — masam, manis, pedas semua ada. Satu keluarga ketagih sekarang!',
    emoji: '😂',
    author: 'Encik Razak',
    location: 'Pulau Pinang',
  },
  {
    text: 'Bawa pergi kelas, semua kawan nak rasa. Sekarang setiap minggu ada je yang suruh tolong belikan. Dah jadi pengedar tak rasmi dah ni!',
    emoji: '🔥',
    author: 'Syafiq M.',
    location: 'Johor Bahru',
  },
];

export default function Testimonial() {
  const titleRef = useReveal();

  return (
    <section className="testimonial" id="testimonial">
      <div className="container">
        <h2 className="section-title reveal" ref={titleRef}>
          APA ORANG <span className="accent">CAKAP?</span>
        </h2>

        <p className="testimonial-count">💛 500+ pelanggan gembira</p>

        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, delay }) {
  const ref = useReveal();

  return (
    <div className={`testimonial-card reveal reveal-delay-${delay}`} ref={ref}>
      <div className="testimonial-quote-mark">&ldquo;</div>
      <p className="testimonial-text">{testimonial.text}</p>

      <div className="testimonial-stars">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} role="img" aria-label="star">⭐</span>
        ))}
      </div>

      <div className="testimonial-author-row">
        <span className="testimonial-emoji">{testimonial.emoji}</span>
        <div>
          <p className="testimonial-author">{testimonial.author}</p>
          <p className="testimonial-location">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
