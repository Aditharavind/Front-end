"use client";

import { useState } from "react";
import { Car } from "@/lib/types";
import { X, MessageCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { API_BASE } from "@/lib/config";

interface CarModalProps {
    car: Car | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function CarModal({ car, isOpen, onClose }: CarModalProps) {
    const [activeImage, setActiveImage] = useState(0);

    if (!car) return null;

    const whatsappMessage = encodeURIComponent(
        `Hey Motorox Kochi! 👋\nI'm enquiring about the ${car.name}.\nRate: ₹${car.rate}/km\nAvailability: ${car.available ? 'Available' : 'Not Available'}\nPlease send details & booking process. Thanks!`
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => { onClose(); setActiveImage(0); }}
                        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
                    >
                        <button
                            onClick={() => { onClose(); setActiveImage(0); }}
                            className="absolute top-6 right-6 z-10 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all backdrop-blur-md"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="grid lg:grid-cols-2">
                            <div className="h-80 lg:h-[600px] relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeImage}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        src={`${API_BASE}${car.images[activeImage]}`}
                                        className="w-full h-full object-cover"
                                        alt={car.name}
                                    />
                                </AnimatePresence>
                            </div>

                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={cn(
                                        "px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-widest border shadow-sm",
                                        car.available
                                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                            : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                                    )}>
                                        {car.available ? 'Available' : 'Booked'}
                                    </span>
                                    <span className="text-slate-200 font-bold tracking-tight">Price: ₹{car.rate} per km</span>
                                </div>

                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-tight">{car.name}</h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light italic">
                                    {car.desc}
                                </p>

                                <div className="bg-rose-500/5 border border-rose-500/10 p-5 rounded-2xl mb-8 flex items-start gap-4 text-left">
                                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                                        <span className="text-rose-400 font-bold">Important:</span> Any damage occurring to the car during the rental period will need to be funded by the person who rented it.
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-3 mb-10">
                                    {car.images.map((img, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setActiveImage(idx)}
                                            className={cn(
                                                "aspect-square rounded-2xl overflow-hidden border-2 cursor-pointer transition-all",
                                                idx === activeImage
                                                    ? "border-blue-500 shadow-lg shadow-blue-500/20"
                                                    : "border-white/5 hover:border-white/20"
                                            )}
                                        >
                                            <img src={`${API_BASE}${img}`} className="w-full h-full object-cover" alt={`${car.name} view ${idx + 1}`} />
                                        </motion.div>
                                    ))}
                                </div>

                                <a
                                    href={`https://wa.me/917306161026?text=${whatsappMessage}`}
                                    target="_blank"
                                    className={cn(
                                        "w-full py-5 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-2xl text-lg",
                                        "bg-blue-600 hover:bg-blue-700 shadow-blue-600/30 active:scale-[0.98]"
                                    )}
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    Enquire on WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
