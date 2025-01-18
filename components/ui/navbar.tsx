import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center p-6 font-sans">
      <div className="backdrop-blur-xl bg-black/30 rounded-full px-12 py-4 shadow-2xl border border-white/5 flex items-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 backdrop-blur-3xl"></div>
        <ul className="flex space-x-16 text-lg font-light relative z-10">
          <li>
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              <span className="relative">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link 
              href="#features" 
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              <span className="relative">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link 
              href="#about" 
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              <span className="relative">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link 
              href="#signup" 
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              <span className="relative">
                Signup
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}