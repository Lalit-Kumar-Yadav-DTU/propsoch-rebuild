export default function Comparison() {
  const data = [
    { label: "Information Depth", propsoch: "80+ data points", portals: "20-40 data points" },
    { label: "Transparency", propsoch: "Detailed pros & cons", portals: "Only pros highlighted" },
    { label: "Data Accuracy", propsoch: "Verified by architects", portals: "Loose verification" },
    { label: "Service Validity", propsoch: "Till you find your home", portals: "Based on no. of contacts" },
    { label: "Data Sources", propsoch: "RERA, GMaps, CDP etc.", portals: "Added by developer & broker" },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12 text-black">Compare our services with Online Portals</h2>
        <div className="overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-6 font-bold">What you care about</th>
                <th className="p-6 font-bold text-orange-500">Propsoch</th>
                <th className="p-6 font-bold opacity-70">Online Portals</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-orange-50 transition-colors">
                  <td className="p-6 font-medium text-gray-700">{item.label}</td>
                  <td className="p-6 text-gray-900 font-bold">{item.propsoch}</td>
                  <td className="p-6 text-gray-500">{item.portals}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}