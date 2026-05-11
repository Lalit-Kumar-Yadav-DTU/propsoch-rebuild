import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />      {/* Additional Section 1 */}
      <Services />   {/* Additional Section 2 */}
      
      {/* Final Call to Action Section */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to buy intelligently?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join 1000+ happy families who saved lakhs and avoided risky investments with Propsoch.
          </p>
          <button className="px-10 py-4 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-500/20">
            Get Free Consultation
          </button>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-100 px-6 text-center text-gray-400 text-sm">
        <p>© 2026 Propsoch Rebuild. Built for NxtWave Assessment.</p>
      </footer>
    </main>
  );
}