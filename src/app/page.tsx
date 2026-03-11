"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarCard from "@/components/CarCard";
import CarModal from "@/components/CarModal";
import { Car } from "@/lib/types";
import { motion } from "framer-motion";
import { API_BASE } from "@/lib/config";

export default function Home() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/cars`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch cars:", err);
        setLoading(false);
      });
  }, []);

  const handleViewDetails = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const availableCount = cars.filter((c) => c.available).length;

  return (
    <main className="min-h-screen bg-slate-950 text-white font-outfit selection:bg-blue-600/30 selection:text-blue-500">
      <Navbar />
      <Hero availableCount={availableCount} />

      <section id="cars" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Our Premium <span className="text-blue-500">Fleet</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Curated vehicles for every occasion. Experience the best in Kochi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 px-6 py-3 rounded-2xl shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-white font-bold text-lg">{cars.length}</span>
              <span className="text-sm uppercase tracking-widest font-medium">
                Vehicles available
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {loading ? (
            <div className="col-span-full py-20 text-center text-slate-500 animate-pulse font-medium text-xl uppercase tracking-widest">
              Loading Fleet...
            </div>
          ) : cars.length === 0 ? (
            <div className="col-span-full py-20 text-center text-slate-600 font-medium text-lg">
              No vehicles available at the moment. Check back soon!
            </div>
          ) : (
            cars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onViewDetails={handleViewDetails}
              />
            ))
          )}
        </div>
      </section>

      <footer id="contact" className="bg-slate-900/50 border-t border-slate-800 py-16 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl font-bold">
              Motorox <span className="text-blue-500">Kochi</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Leading self-drive rental service provider in Kochi. Dedicated to
            providing premium mobility solutions with transparency and ease.
          </p>
          <div className="mt-10 pt-10 border-t border-slate-800/50 text-slate-600 text-xs">
            © 2026 Motorox Kochi Car Rentals. All rights reserved.
          </div>
        </div>
      </footer>

      <CarModal
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
