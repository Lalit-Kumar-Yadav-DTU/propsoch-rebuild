import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">P</span>
          </div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">Propsoch</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#" className="hover:text-orange-500 transition">Properties</Link>
          <Link href="#" className="hover:text-orange-500 transition">Insights</Link>
          <Link href="#" className="px-5 py-2.5 bg-gray-900 text-white rounded-full hover:bg-orange-600 transition">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}