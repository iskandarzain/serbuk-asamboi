// Social proof ticker — scrolling purchase notifications
const NOTIFICATIONS = [
  { name: 'Aina', city: 'KL', qty: '3 balang' },
  { name: 'Razak', city: 'Pulau Pinang', qty: '1 balang' },
  { name: 'Nurul', city: 'Selangor', qty: '5 balang' },
  { name: 'Syafiq', city: 'JB', qty: '3 balang' },
  { name: 'Hafizah', city: 'Kedah', qty: '1 balang' },
  { name: 'Amirul', city: 'Perak', qty: '5 balang' },
  { name: 'Suraya', city: 'Melaka', qty: '3 balang' },
  { name: 'Darwisyah', city: 'Terengganu', qty: '1 balang' },
];

// Duplicate for seamless loop
const ITEMS = [...NOTIFICATIONS, ...NOTIFICATIONS];

export default function SocialProofTicker() {
  return (
    <div className="ticker-wrapper" aria-hidden="true">
      <div className="ticker-track">
        {ITEMS.map((n, i) => (
          <div className="ticker-item" key={i}>
            <span className="ticker-dot" />
            <span className="ticker-text">
              <strong>{n.name}</strong> dari {n.city} baru je tempah{' '}
              <strong>{n.qty}</strong>!
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
