import { useEffect } from 'react';
import useReveal from '../hooks/useReveal';

export default function FinalCta() {
  const ref = useReveal();

  useEffect(() => {
    const id = 'bcl-embed-script';
    if (document.getElementById(id)) return;

    const script = document.createElement('script');
    script.id = id;
    script.src = 'https://bcl.my/js/bc-encrypted-payment-embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="final-cta reveal" ref={ref} id="order">
      <h2 className="section-title">
        NAK <span className="accent">ORDER?</span>
      </h2>

      <p className="final-cta-sub">
        Isi borang di bawah untuk tempah sekarang!
      </p>

      <div className="bcl-form-wrapper">
        <div
          id="bcl-payment-form"
          data-url="https://aiditnoh.bcl.my/embed/form/serbuk-asamboi"
        />
      </div>
    </section>
  );
}
