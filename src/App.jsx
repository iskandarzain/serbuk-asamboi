import Hero from './components/Hero';
import HowToEnjoy from './components/HowToEnjoy';
import Features from './components/Features';
import Urgency from './components/Urgency';
import Testimonial from './components/Testimonial';
import FinalCta from './components/FinalCta';
import StickyBar from './components/StickyBar';
import Particles from './components/Particles';

const CTA_LINK = '#order';

export default function App() {
  return (
    <>
      <Particles />
      <Hero ctaLink={CTA_LINK} />
      <HowToEnjoy />
      <Features />
      <Urgency />
      <Testimonial />
      <FinalCta ctaLink={CTA_LINK} />
      <StickyBar ctaLink={CTA_LINK} />
    </>
  );
}
