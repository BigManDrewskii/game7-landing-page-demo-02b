import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Logo() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <motion.a
      href="https://app.game7.io/"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      whileHover={{
        boxShadow: ["0 0 15px rgba(0,0,0,0.4), 0 0 1px rgba(255,255,255,0.05)", "0 0 25px rgba(255,255,255,0.15), 0 0 2px rgba(255,255,255,0.15)"],
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      initial={{ boxShadow: "0 0 15px rgba(0,0,0,0.4), 0 0 1px rgba(255,255,255,0.05)" }}
      className="relative z-20 backdrop-blur-md rounded-2xl overflow-hidden border border-zinc-700/25 shadow-[0_0_15px_rgba(0,0,0,0.4),0_0_1px_rgba(255,255,255,0.05)] group cursor-pointer"
    >
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<svg id="18469:6485" layer-name="Content" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-icon transition-all duration-300 group-hover:filter-none" style="filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.1));"> <rect width="64" height="64" rx="16" fill="rgba(13, 13, 13, 0.6)" class="transition-all duration-300 group-hover:fill-[rgba(20,20,20,0.75)]"></rect> <rect width="64" height="64" rx="16" fill="url(#paint0_linear_18469_6485)" style="opacity: 0.45" class="transition-opacity duration-500 group-hover:opacity-70"></rect> <rect width="64" height="64" rx="16" stroke="rgba(255, 255, 255, 0.07)" stroke-width="1" fill="none" class="group-hover:stroke-[rgba(255,255,255,0.15)]" style="transition: stroke 0.3s ease"></rect> <path d="M12 18L12.0103 18.0166L12 18L20.1039 30.3797H30.6028L30.58 30.3466L30.6028 30.3797L28.2182 26.7353H35.786L26.7526 40.5388L32 48.5539L52 18H12Z" fill="rgba(255, 255, 255, 0.95)" class="transition-all duration-300 group-hover:fill-white"></path> <defs> <linearGradient id="paint0_linear_18469_6485" x1="40.6519" y1="-45.443" x2="-35.9969" y2="-6.06179" gradientUnits="userSpaceOnUse"> <stop offset="0.0855094" stop-color="rgba(255, 255, 247, 0.5)" class="group-hover:stop-color-[rgba(255,255,247,0.7)]"></stop> <stop offset="1" stop-color="rgba(114, 114, 103, 0.25)" class="group-hover:stop-color-[rgba(114,114,103,0.4)]"></stop> </linearGradient> </defs> </svg>',
        }}
        aria-label="Game7 Logo"
        role="img"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none"></div>
      <div className="absolute -inset-[100%] bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] group-hover:animate-[spin_15s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      {/* Elegant tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            className="fixed top-[90px] left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-xl px-4 py-2 rounded-md text-white font-medium border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] z-[9999] whitespace-nowrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-black/90"></div>
            Head to G7 Portal
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-blue-500/20 rounded-md opacity-70"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
