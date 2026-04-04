import useReveal from '../hooks/useReveal';

const PLANS = [
  {
    name: 'SOLO',
    qty: '1 Balang',
    price: '10.90',
    perUnit: null,
    tag: null,
    popular: false,
  },
  {
    name: 'COMBO',
    qty: '3 Balang',
    price: '28.90',
    perUnit: 'RM9.63 / balang',
    tag: '🔥 PALING POPULAR',
    popular: true,
  },
  {
    name: 'BORONG',
    qty: '5 Balang',
    price: '45.90',
    perUnit: 'RM9.18 / balang',
    tag: '💰 JIMAT GILA',
    popular: false,
  },
];

export default function Pricing({ ctaLink }) {
  const titleRef = useReveal();

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title reveal" ref={titleRef}>
          PILIH <span className="accent">PAKEJ ANDA:</span>
        </h2>
        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} delay={i + 1} ctaLink={ctaLink} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, delay, ctaLink }) {
  const ref = useReveal();

  return (
    <div
      className={`pricing-card ${plan.popular ? 'popular' : ''} reveal reveal-delay-${delay}`}
      ref={ref}
    >
      {plan.tag && <span className="pricing-tag">{plan.tag}</span>}
      <h3 className="pricing-name">{plan.name}</h3>
      <p className="pricing-qty">{plan.qty}</p>
      <div className="pricing-price">
        <span className="pricing-currency">RM</span>
        <span className="pricing-amount">{plan.price}</span>
      </div>
      {plan.perUnit && <p className="pricing-per-unit">{plan.perUnit}</p>}
      <a
        href={ctaLink}
        className={`cta-button ${!plan.popular ? 'cta-outline' : ''}`}
      >
        BELI SEKARANG 🛒
      </a>
    </div>
  );
}
