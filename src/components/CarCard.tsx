"use client";

import { Car } from "@/lib/types";
import { Zap, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { API_BASE } from "@/lib/config";

interface CarCardProps {
    car: Car;
    onViewDetails: (car: Car) => void;
}

export default function CarCard({ car, onViewDetails }: CarCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 group hover:border-blue-500/50 transition-all duration-300 flex flex-col"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={`${API_BASE}${car.images[0]}`}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                    <span className={cn(
                        "px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-widest border backdrop-blur-md shadow-xl",
                        car.available
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                    )}>
                        {car.available ? "Available" : "Booked"}
                    </span>
                </div>
            </div>

            <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{car.name}</h3>
                    <div className="text-right">
                        <span className="text-3xl font-bold text-blue-500">₹{car.rate}</span>
                        <span className="text-slate-500 text-sm italic ml-1">/km</span>
                    </div>
                </div>

                <p className="text-slate-400 text-sm mb-8 line-clamp-2 leading-relaxed">
                    {car.desc}
                </p>

                <button
                    onClick={() => onViewDetails(car)}
                    className="w-full py-4 bg-slate-800 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg"
                >
                    View Details
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </motion.div>
    );
}
