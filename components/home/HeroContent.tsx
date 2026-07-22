"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="order-2 lg:order-1">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Premium Honeycomb Cooling Pads
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-7xl">
          Engineered for
          <span className="text-blue-700"> Maximum Cooling </span>
          Efficiency
        </h1>

        <p className="mt-8 max-w-xl text-base sm:text-lg leading-8 text-slate-600">
          RU Honeycomb Industries manufactures premium-quality honeycomb
          cooling pads designed for industrial, commercial and agricultural
          cooling systems with exceptional durability and performance.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <button className="w-full sm:w-auto group flex items-center text-center gap-2 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800">
            Explore Products

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>

          <button className="w-full sm:w-auto rounded-xl border-2 border-blue-700 px-7 py-4 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white">
            Request Quote
          </button>

        </div>

        <div className="mt-12 grid gap-4">

          {[
            "Premium Kraft Paper",
            "High Cooling Efficiency",
            "Custom Sizes Available",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">

              <CheckCircle
                className="text-green-500"
                size={22}
              />

              <span className="font-medium text-slate-700">
                {item}
              </span>

            </div>
          ))}

        </div>
      </motion.div>
    </div>
  );
}