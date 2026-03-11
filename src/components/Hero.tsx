"use client";

export default function Hero({ availableCount }: { availableCount: number }) {
    return (
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2600"
                    alt="Luxury Car"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-950"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wider">{availableCount} Cars Ready to Drive</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight text-white">
                    Self-Drive <span className="text-blue-500">Freedom</span> <br className="hidden md:block" /> in Kochi
                </h1>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                    Experience premium mobility with our curated fleet. Simple pricing, pay per kilometer, and zero hidden costs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#cars" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20 text-lg">
                        Browse Our Fleet
                    </a>
                    <a href="https://wa.me/917356282445" target="_blank" className="bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-md border border-white/10 text-lg">
                        Contact Support
                    </a>
                </div>
            </div>
        </section>
    );
}
