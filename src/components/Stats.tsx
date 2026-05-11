const stats = [
  { label: 'Advice Hours', value: '2750+' },
  { label: 'Sq. Ft. Analyzed', value: '520M+' },
  { label: 'Happy Families', value: '1000+' },
  { label: 'Expert Mentors', value: '50+' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{stat.value}</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}