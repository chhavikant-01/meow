"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full text-white font-medium 
        shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] 
        transition-all duration-300 hover:scale-105"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        Get Started
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.75, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-x-0 top-[50%] translate-y-[-50%] mx-auto max-w-2xl bg-slate-900 
              border border-slate-800 rounded-2xl p-8 z-50 shadow-[0_0_25px_rgba(34,211,238,0.2)]"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                Welcome to Financial Literacy
              </h2>
              <p className="text-slate-300 mb-6">
                Get started with our AI-powered financial assistant. Learn about:
                <br />• Budgeting and Saving
                <br />• Investment Basics
                <br />• Debt Management
                <br />• Financial Security
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
                >
                  Close
                </button>
                <button
                  className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 
                  transition-colors shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                >
                  Start Learning
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};