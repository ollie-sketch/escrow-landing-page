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

export default function VendorLandingPage() {
  useEffect(() => {
    document.title = 'Holdfast — Get Paid Reliably as a Vendor';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Accept Holdfast as a payment option and know your payout is reserved before you ship. Built for vendors who want guaranteed, on-time payment.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-base">
      <Navbar variant="vendor" />
      <main>
        <Hero variant="vendor" />
        <WhoIsThisFor variant="vendor" />
        <HowItWorks variant="vendor" />
        <EscrowAnimation variant="vendor" />
        <LiveStats variant="vendor" />
        <ComparisonTable />
        <TrustSecurity variant="vendor" />
        <FeatureGrid variant="vendor" />
        <Testimonials variant="vendor" />
        <FAQ variant="vendor" />
        <FinalCTA variant="vendor" />
      </main>
      <Footer variant="vendor" />
    </div>
  );
}
