const extraServices = [
  "Home Loan Offers",
  "Legal Due Diligence",
  "Tax Planning",
  "Quality Inspection",
  "Vastu Advisors",
  "Interior Designers"
];

export default function Ancillary() {
  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto rounded-[40px] bg-white p-12 md:p-20 shadow-sm border border-gray-100 text-center">
        <span className="text-orange-500 font-bold mb-4 block">End-to-End Support</span>
        <h2 className="text-3xl md:text-4xl font-black mb-12 text-black">We’ve got you covered</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {extraServices.map((service, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                <div className="w-8 h-8 bg-orange-200 rounded-full group-hover:bg-white/30" />
              </div>
              <p className="text-sm font-bold text-gray-700 leading-tight">{service}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-black">Experience delightful home buying</h3>
            <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition">
                Book An Appointment
            </button>
        </div>
      </div>
    </section>
  );
}