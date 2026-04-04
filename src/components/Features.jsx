import useReveal from '../hooks/useReveal';

const FEATURES = [
  {
    icon: '💧',
    text: 'RASA PADU SAMPAI ',
    highlight: 'BERAIR MULUT',
    color: '#ffd600',
  },
  {
    icon: '✨',
    text: 'SERBUK HALUS, ',
    highlight: 'MUDAH LEKAT KAT BUAH',
    color: '#ff9800',
  },
  {
    icon: '⚖️',
    text: 'BALANCE MASAM MANIS, ',
    highlight: 'TAK MUAK',
    color: '#4caf50',
  },
  {
    icon: '🔁',
    text: 'CONFIRM ',
    highlight: 'REPEAT ORDER!',
    color: '#e63946',
  },
];

export default function Features() {
  const titleRef = useReveal();

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title reveal" ref={titleRef}>
          KENAPA <span className="accent">SERBUK NI VIRAL?</span>
        </h2>

        <div className="features-grid">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={i} feature={feature} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, delay }) {
  const ref = useReveal();

  return (
    <div
      className={`feature-card reveal reveal-delay-${delay}`}
      ref={ref}
      style={{ '--card-accent': feature.color }}
    >
      <div className="feature-icon">{feature.icon}</div>
      <p className="feature-text">
        {feature.text}
        <span className="highlight">{feature.highlight}</span>
      </p>
    </div>
  );
}
