import React from "react";

export function Footer() {
  return (
    <footer className="w-full flex justify-center items-center py-6 mt-auto opacity-0 animate-fade-in" style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}>
      <div className="absolute h-[0.25px] w-48 top-0 bg-white/5 rounded-full"></div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
        <a 
          href="https://app.game7.io/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4 text-zinc-400 hover:text-white/90"
        >
          Portal
        </a>
        
        <span className="hidden sm:inline-block text-zinc-800 mx-1 text-xs opacity-40">•</span>
        
        <a 
          href="https://x.com/G7_DAO" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4 text-zinc-400 hover:text-white/90"
        >
          X
        </a>
        
        <span className="hidden sm:inline-block text-zinc-800 mx-1 text-xs opacity-40">•</span>
        
        <a 
          href="#" 
          onClick={(e) => e.preventDefault()}
          className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4 text-zinc-400 hover:text-white/90"
        >
          Discord
        </a>
      </div>
    </footer>
  );
}
