import { useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal';

export default function PaymentForm() {
  const containerRef = useRef(null);
  const titleRef = useReveal();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const formDiv = document.createElement('div');
    formDiv.id = 'bcl-payment-form';
    formDiv.setAttribute('data-url', 'https://aiditnoh.bcl.my/embed/form/serbuk-asamboi');
    el.appendChild(formDiv);

    const script = document.createElement('script');
    script.src = 'https://bcl.my/js/bc-encrypted-payment-embed.js';
    script.async = true;
    el.appendChild(script);

    return () => {
      el.innerHTML = '';
    };
  }, []);

  return (
    <section className="payment-section" id="order">
      <div className="container">
        <h2 className="section-title reveal" ref={titleRef}>
          ORDER <span className="accent">SEKARANG!</span>
        </h2>
        <p className="payment-subtitle">
          Isi borang di bawah untuk buat pesanan anda 👇
        </p>
        <div className="payment-form-wrapper" ref={containerRef} />
      </div>
    </section>
  );
}
