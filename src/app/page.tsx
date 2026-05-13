import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Journey from '@/components/Journey'; // The 6-Stage one we wrote earlier
import Comparison from '@/components/Comparison';
import TechnicalAudit from '@/components/TechnicalAudit'; // New
import Services from '@/components/Services';
import Ancillary from '@/components/Ancillary';           // New
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-orange-100">
      <Navbar />
      <Hero />
      <Stats />
      <Journey />
      <TechnicalAudit />
      <Comparison />
      <Services />
      <Ancillary />
      <Footer />
    </main>
  );
}