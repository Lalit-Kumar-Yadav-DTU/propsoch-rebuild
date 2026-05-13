import { Ruler, Wind, Droplets, MapPin, TrendingUp, ShieldAlert } from 'lucide-react';

const researchPoints = [
  {
    title: "Privacy & Floor Plan",
    desc: "We analyze unit-to-unit privacy and circulation efficiency to ensure no wasted space.",
    icon: <Ruler className="w-6 h-6 " />
  },
  {
    title: "Lighting & Ventilation",
    desc: "Scientific assessment of natural light and cross-ventilation for every room.",
    icon: <Wind className="w-6 h-6" />
  },
  {
    title: "Environmental Risk",
    desc: "Real-time data on air quality (AQI), noise pollution, and flood history of the area.",
    icon: <Droplets className="w-6 h-6" />
  },
  {
    title: "Future Connectivity",
    desc: "Mapping upcoming Metro stations, flyovers, and commercial hubs near the project.",
    icon: <MapPin className="w-6 h-6" />
  },
  {
    title: "Investment Arbitrage",
    desc: "Predictive modeling for capital appreciation based on historical micro-market trends.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Legal Due Diligence",
    desc: "Verifying RERA compliance, title deeds, and builder track records for 0% risk.",
    icon: <ShieldAlert className="w-6 h-6" />
  }
];

export default function ResearchGrid() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Technical Audit</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">
            Our 50-Point <br /> <span className="text-orange-500">Project Analysis</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {researchPoints.map((point, i) => (
            <div key={i} className="group p-8 border-b-2 border-transparent hover:border-orange-500 bg-gray-50 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}