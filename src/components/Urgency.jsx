import useReveal from '../hooks/useReveal';

export default function Urgency() {
  const ref = useReveal();

  return (
    <section className="urgency" id="urgency">
      <div className="urgency-banner reveal" ref={ref}>
        <div className="urgency-stamp">
          <span className="urgency-stamp-text">🚨 STOK BATCH NI</span>
        </div>

        <h2 className="urgency-limited">LIMITED!</h2>

        <p className="urgency-sub">
          Ramai dah repeat sebab{' '}
          <strong>&ldquo;LAIN DARI YANG LAIN&rdquo;</strong>
          <br />
          Jangan menyesal kalau habis stok! 🏃‍♂️💨
        </p>
      </div>
    </section>
  );
}
