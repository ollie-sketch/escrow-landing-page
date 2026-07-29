import { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import WhoIsThisFor from '../components/WhoIsThisFor.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import EscrowAnimation from '../components/EscrowAnimation.jsx';
import LiveStats from '../components/LiveStats.jsx';
import ComparisonTable from '../components/ComparisonTable.jsx';
import TrustSecurity from '../components/TrustSecurity.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import Testimonials from '../components/Testimonials.jsx';
import FAQ from '../components/FAQ.jsx';
import FinalCTA from '../components/FinalCTA.jsx';
import Footer from '../components/Footer.jsx';

export default function BuyerLandingPage() {
  // Per-page document title/meta for SEO, since this is a client-rendered SPA route
  useEffect(() => {
    document.title = 'Holdfast — Buy Safely with Escrow Payment Protection';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Shop from independent vendors and pay through Holdfast. Your funds stay held in escrow until your order is confirmed delivered.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-base">
      <Navbar variant="buyer" />
      <main>
        <Hero variant="buyer" />
        <WhoIsThisFor variant="buyer" />
        <HowItWorks variant="buyer" />
        <EscrowAnimation variant="buyer" />
        <LiveStats variant="buyer" />
        <ComparisonTable />
        <TrustSecurity variant="buyer" />
        <FeatureGrid variant="buyer" />
        <Testimonials variant="buyer" />
        <FAQ variant="buyer" />
        <FinalCTA variant="buyer" />
      </main>
      <Footer variant="buyer" />
    </div>
  );
}
