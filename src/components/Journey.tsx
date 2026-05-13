const stages = [
  { title: "Stage 1 - Discovery", desc: "Tell us about you & your ideal home, budget, and family deal-breakers." },
  { title: "Stage 2 - Shortlisting", desc: "Explore curated homes with insights on return potential and floor plans." },
  { title: "Stage 3 - Site visits", desc: "Visit sites with market wizards to assess the builder, areas, and pricing." },
  { title: "Stage 4 - Analysis", desc: "Foresee design, legal, and financial risks including Lighting & Ventilation." },
  { title: "Stage 5 - Negotiation", desc: "Armed with insights, we negotiate on your behalf to secure the best offer." },
  { title: "Stage 6 - Home sweet Home", desc: "Connect with financial and legal experts for title checks and agreement reviews." },
];

export default function Journey() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 text-black">We're with you every step of the journey</h2>
          <p className="text-gray-500">Our experts will guide you home, protecting you from FOMO and deceit.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stages.map((stage, i) => (
            <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300">
              <span className="text-orange-500 font-bold text-sm mb-4 block uppercase tracking-widest">Step {i + 1}</span>
              <h3 className="text-xl font-bold mb-3 text-black">{stage.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}