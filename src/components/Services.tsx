const services = [
  {
    title: "Investment Potential",
    description: "Deep dive into the financial growth of the property and locality over the next 5-10 years.",
    icon: "📈",
  },
  {
    title: "Future Development",
    description: "Analysis of upcoming infrastructure like metros, parks, and malls that impact value.",
    icon: "🏗️",
  },
  {
    title: "Technical Due Diligence",
    description: "Verification of RERA, land titles, and construction quality to keep your money safe.",
    icon: "🛡️",
  },
  {
    title: "Smart Negotiation",
    description: "Data-backed negotiation strategies to get you the best price possible for your home.",
    icon: "🤝",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-gray-900">Expert guidance for your biggest investment.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}