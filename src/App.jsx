import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProofTicker from './components/SocialProofTicker';
import HowToEnjoy from './components/HowToEnjoy';
import Features from './components/Features';
import Pricing from './components/Pricing';
import TrustBadges from './components/TrustBadges';
import Urgency from './components/Urgency';
import Testimonial from './components/Testimonial';
import FinalCta from './components/FinalCta';
import StickyBar from './components/StickyBar';
import Particles from './components/Particles';
import Footer from './components/Footer';

const CTA_LINK = '#order';

export default function App() {
  return (
    <>
      <Particles />
      <Navbar />
      <Hero ctaLink={CTA_LINK} />
      <SocialProofTicker />
      <HowToEnjoy />
      <Features />
      <Pricing ctaLink={CTA_LINK} />
      <TrustBadges />
      <Urgency />
      <Testimonial />
      <FinalCta />
      <Footer />
      <StickyBar ctaLink={CTA_LINK} />
    </>
  );
}
