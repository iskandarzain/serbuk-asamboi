import { Truck, Leaf, Package, Zap } from 'lucide-react';

const BADGES = [
  {
    Icon: Truck,
    label: 'Penghantaran ke seluruh Malaysia',
    color: '#ffd600',
  },
  {
    Icon: Leaf,
    label: '100% Bahan Semula Jadi',
    color: '#4caf50',
  },
  {
    Icon: Package,
    label: 'Packaging Selamat & Rapi',
    color: '#ff9800',
  },
  {
    Icon: Zap,
    label: 'Pos Laju 1-3 Hari Bekerja',
    color: '#e63946',
  },
];

export default function TrustBadges() {
  return (
    <div className="trust-badges" aria-label="Jaminan pembelian">
      {BADGES.map(({ Icon, label, color }, i) => (
        <div className="trust-badge" key={i} style={{ '--badge-color': color }}>
          <div className="trust-badge-icon">
            <Icon size={20} aria-hidden="true" strokeWidth={1.75} />
          </div>
          <span className="trust-badge-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
