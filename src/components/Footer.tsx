export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-black text-orange-500 mb-4 italic">PROPSOCH.</h2>
            <p className="text-gray-500 text-sm leading-relaxed">India's most advanced real estate research platform for homebuyers.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-gray-900 uppercase text-xs tracking-widest">Developers in Bengaluru</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li>Prestige Developers</li>
              <li>Godrej Properties</li>
              <li>Brigade Developers</li>
              <li>Sobha Developers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-gray-900 uppercase text-xs tracking-widest">Top Areas</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li>Whitefield</li>
              <li>Sarjapur Road</li>
              <li>Bellandur</li>
              <li>HSR Layout</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-gray-900 uppercase text-xs tracking-widest">Filters</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li>Luxury Homes</li>
              <li>Properties &lt; 2Cr</li>
              <li>Ready To Move In</li>
              <li>Townships</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
          © 2026 Propsoch Rebuild | Built by Lalit Kumar Yadav (DTU)
        </div>
      </div>
    </footer>
  );
}