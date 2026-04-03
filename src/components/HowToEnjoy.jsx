import useReveal from '../hooks/useReveal';

const FRUITS = [
  { name: 'MANGGA', subtitle: 'Mango', image: '/images/mango.png' },
  { name: 'JAMBU', subtitle: 'Guava', image: '/images/guava.png' },
  { name: 'KEDONDONG', subtitle: 'Ambarella', image: '/images/kedondong.png' },
  { name: 'BUAH POTONG', subtitle: 'Mixed Cut Fruits', image: '/images/buah-potong.png' },
];

export default function HowToEnjoy() {
  const ref = useReveal();

  return (
    <section className="how-to-enjoy" id="how-to-enjoy">
      <div className="container">
        <h2 className="section-title reveal" ref={ref}>
          SESUAI MAKAN <span className="accent">DENGAN:</span>
        </h2>

        <div className="fruit-grid">
          {FRUITS.map((fruit, i) => (
            <FruitCard key={fruit.name} fruit={fruit} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FruitCard({ fruit, delay }) {
  const ref = useReveal();

  return (
    <div
      className={`fruit-card reveal reveal-delay-${delay}`}
      ref={ref}
      id={`fruit-${fruit.name.toLowerCase().replace(/\s/g, '-')}`}
    >
      <img
        className="fruit-card-image"
        src={fruit.image}
        alt={`${fruit.name} with Serbuk Asamboi`}
        loading="lazy"
      />
      <div className="fruit-card-label">
        {fruit.name}
        <span className="fruit-card-malay">{fruit.subtitle}</span>
      </div>
    </div>
  );
}
