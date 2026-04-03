import { useMemo } from 'react';

const PARTICLE_COLORS = ['#ffd600', '#e63946', '#4caf50', '#ff9800'];

export default function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => {
      const size = Math.random() * 6 + 3;
      const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
      const left = Math.random() * 100;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 10;

      return (
        <div
          key={i}
          className="particle"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            left: `${left}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    });
  }, []);

  return <div className="particles-container">{particles}</div>;
}
