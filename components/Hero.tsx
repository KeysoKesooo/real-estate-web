import MasonryBackground from './MasonryBackground';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <MasonryBackground />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tighter">
          Find Your <br />
          <span className="text-blue-600 italic font-light">Signature</span> Home
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Experience luxury living curated by experts. From penthouse lofts to private islands.
        </p>
        
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-center bg-white p-2 rounded-3xl shadow-2xl border border-slate-100 max-w-2xl mx-auto">
          <input 
            type="text" 
            placeholder="Where do you want to live?" 
            className="w-full px-6 py-4 outline-none text-slate-700 bg-transparent"
          />
          <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}