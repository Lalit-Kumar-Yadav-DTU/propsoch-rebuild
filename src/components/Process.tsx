const steps = [
  {
    num: "01",
    title: "The Discovery Session",
    desc: "We dive deep into your lifestyle requirements, budget, and long-term goals."
  },
  {
    num: "02",
    title: "Proprietary Shortlisting",
    desc: "Our engine filters 100+ projects down to the top 3 that match your technical needs."
  },
  {
    num: "03",
    title: "The Reality Check",
    desc: "Guided site visits where we point out the flaws and risks most builders hide."
  },
  {
    num: "04",
    title: "Wizard Negotiation",
    desc: "Our experts step in to negotiate the final price, saving you lakhs on the market rate."
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-gray-900 text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-black mb-20 text-center">Your Road to a <span className="text-orange-500">Perfect Home</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <span className="text-8xl font-black text-gray-800 absolute -top-10 -left-4 z-0 opacity-50">{step.num}</span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 mt-4">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Visual Connector Line for Desktop */}
        <div className="hidden md:block absolute top-[60%] left-0 w-full h-[1px] bg-gray-800 z-0"></div>
      </div>
    </section>
  );
}