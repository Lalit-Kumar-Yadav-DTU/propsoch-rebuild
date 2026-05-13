import { ChevronRight } from 'lucide-react';

const audits = [
  { id: "01", title: "Floor Plan Analysis", desc: "See every floor plan’s design, privacy, efficiency & compare with peer projects" },
  { id: "02", title: "Lighting & Ventilation", desc: "Scientific assessment of natural light and cross-ventilation for every room." },
  { id: "03", title: "Flood & Air Quality Risk", desc: "Real-time data on air quality (AQI) and flood history of the area." },
  { id: "04", title: "Future Development", desc: "Mapping upcoming Metro stations and flyovers near the project." },
  { id: "05", title: "Investment Potential", desc: "Predictive modeling for capital appreciation based on market trends." },
  { id: "06", title: "Cost Sheet Breakdown", desc: "Detailed analysis of hidden charges and total cost of ownership." },
];

export default function TechnicalAudit() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Technical Audit</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-8 leading-tight">
            We deliver deeply <br /> researched <span className="text-orange-500">insights</span>
          </h2>
          <div className="space-y-4">
            {audits.map((item) => (
              <div key={item.id} className="border-b border-gray-100 pb-4 group cursor-pointer">
                <div className="flex justify-between items-center py-2">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                    <span className="text-gray-300 mr-4">{item.id}.</span> {item.title}
                  </h3>
                  <ChevronRight className="text-gray-400 group-hover:rotate-90 group-hover:text-orange-500 transition-all" />
                </div>
                <p className="text-gray-500 text-sm pl-10 hidden group-hover:block transition-all animate-in slide-in-from-top-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 rounded-[40px] aspect-video flex items-center justify-center overflow-hidden shadow-2xl border-8 border-white">
             <div className="text-center p-10">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
                <p className="font-bold text-gray-400">Audit Video Preview</p>
             </div>
        </div>
      </div>
    </section>
  );
}