import { useEffect, useRef, useState } from 'react';
import { Star, Heart } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const TESTIMONIALS = [
  {
    text: 'Aku beli saja nak try... last-last habis 1 balang sorang makan! Memang tak boleh berhenti. Tabur atas mangga, atas jambu — semua sedap gila. Confirm beli lagi!',
    initials: 'AS',
    avatarColor: '#ffd600',
    author: 'Aina S.',
    location: 'Kuala Lumpur',
  },
  {
    text: 'Beli untuk anak-anak, last-last bapak yang habiskan. Memang padu rasa dia — masam, manis, pedas semua ada. Satu keluarga ketagih sekarang!',
    initials: 'ER',
    avatarColor: '#e63946',
    author: 'Encik Razak',
    location: 'Pulau Pinang',
  },
  {
    text: 'Bawa pergi kelas, semua kawan nak rasa. Sekarang setiap minggu ada je yang suruh tolong belikan. Dah jadi pengedar tak rasmi dah ni!',
    initials: 'SM',
    avatarColor: '#ff9800',
    author: 'Syafiq M.',
    location: 'Johor Bahru',
  },
];

// Animated count-up hook
function useCountUp(target, duration = 1600) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

export default function Testimonial() {
  const titleRef = useReveal();
  const { count, ref: countRef } = useCountUp(500);

  return (
    <section className="testimonial" id="testimonial">
      <div className="container">
        <h2 className="section-title reveal" ref={titleRef}>
          APA ORANG <span className="accent">CAKAP?</span>
        </h2>

        <p className="testimonial-count" ref={countRef}>
          <Heart size={16} aria-hidden="true" strokeWidth={0} fill="#ffd600" />
          {count}+ pelanggan gembira
        </p>

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

      <div className="testimonial-stars" aria-label="5 bintang">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} size={16} aria-hidden="true" strokeWidth={0} fill="#ffd600" />
        ))}
      </div>

      <div className="testimonial-author-row">
        <div
          className="testimonial-avatar"
          style={{ background: testimonial.avatarColor }}
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="testimonial-author">{testimonial.author}</p>
          <p className="testimonial-location">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
