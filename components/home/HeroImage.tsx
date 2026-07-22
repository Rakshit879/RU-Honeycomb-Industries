"use client";

import { motion } from "framer-motion";
import { Package } from "lucide-react";

export default function HeroImage() {
  return (
    <div className="order-1 flex justify-center lg:order-2">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <div className="relative">

          <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl" />

          <div className="relative flex w-full max-w-md h-[320px] sm:h-[420px] lg:h-[520px] items-center justify-center rounded-3xl border border-blue-100 bg-white shadow-2xl">

            <div className="text-center">

              <Package
                size={80}
                className="mx-auto text-blue-600"
              />

              <h3 className="mt-6 text-2xl font-bold">
                Product Image
              </h3>

              <p className="mt-2 text-slate-500">
                Replace with your cooling pad photo later
              </p>

            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}