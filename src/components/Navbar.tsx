"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-900/70 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-white">
                            Motorox <span className="text-blue-500">Kochi</span>
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/" className="text-slate-300 hover:text-blue-500 px-3 py-2 transition-colors font-medium">Home</Link>
                            <Link href="#cars" className="text-slate-300 hover:text-blue-500 px-3 py-2 transition-colors font-medium">Cars</Link>
                            <Link href="#contact" className="text-slate-300 hover:text-blue-500 px-3 py-2 transition-colors font-medium">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
