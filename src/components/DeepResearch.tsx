import { Ruler, Sun, Waves, Construction, TrendingUp, ReceiptText } from 'lucide-react';

const researchPoints = [
  { title: "Floor Plan Analysis", icon: <Ruler /> },
  { title: "Lighting & Ventilation", icon: <Sun /> },
  { title: "Flood & Air Quality Risk", icon: <Waves /> },
  { title: "Future Development", icon: <Construction /> },
  { title: "Investment Potential", icon: <TrendingUp /> },
  { title: "Cost Sheet Breakdown", icon: <ReceiptText /> },
];

export default function DeepResearch() {
  return (
    <section className="py-24 bg-gray-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">We deliver deeply researched insights</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {researchPoints.map((point, i) => (
            <div key={i} className="p-8 bg-gray-800 rounded-3xl hover:bg-orange-500 transition-colors group cursor-pointer">
              <div className="w-10 h-10 mb-6 text-orange-500 group-hover:text-white transition-colors">{point.icon}</div>
              <h3 className="text-xl font-bold">{point.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}