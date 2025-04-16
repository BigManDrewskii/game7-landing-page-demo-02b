import React from 'react';

interface CyberCardProps {
  title?: string;
  subtitle?: string;
  highlight?: string;
  prompt?: string;
  className?: string;
}

export function CyberCard({ 
  title = "GAME7", 
  subtitle = "INTERACTIVE", 
  highlight = "3D CARD", 
  prompt = "HOVER ME",
  className = ""
}: CyberCardProps) {
  return (
    <div className={`cyber-card-container noselect relative w-[190px] h-[254px] transition-all duration-200 ${className}`}>
      {/* This overlay ensures we can capture hover events properly */}
      <div className="canvas perspective-[800px] inset-0 z-[200] absolute grid grid-cols-5 grid-rows-5 pointer-events-auto">
        {/* Trackers for 3D effect - 9 is enough for a good effect */}
        <div className="tracker tr-1"></div>
        <div className="tracker tr-2"></div>
        <div className="tracker tr-3"></div>
        <div className="tracker tr-4"></div>
        <div className="tracker tr-5"></div>
        <div className="tracker tr-6"></div>
        <div className="tracker tr-7"></div>
        <div className="tracker tr-8"></div>
        <div className="tracker tr-9"></div>
        
        <div id="card" className="absolute inset-0 z-0 flex justify-center items-center rounded-[20px] transition-all duration-700 bg-gradient-to-br from-[#1a1a1a] to-[#262626] border-2 border-white/10 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(0,0,0,0.2)] will-change-transform">

          <div className="card-content relative w-full h-full">
            {/* Card glare effect */}
            <div className="card-glare absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300"></div>
            
            {/* Cyber lines animation */}
            <div className="cyber-lines">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            
            {/* Hover prompt */}
            <p id="prompt" className="absolute bottom-[100px] left-1/2 -translate-x-1/2 z-20 text-base font-semibold tracking-[2px] transition-all duration-300 text-center text-white/70 text-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              {prompt}
            </p>
            
            {/* Card title */}
            <div className="title absolute opacity-0 transition-all duration-300 text-[28px] font-extrabold tracking-[4px] text-center w-full pt-5 bg-gradient-to-r from-[#00ffaa] to-[#00a2ff] bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(0,255,170,0.3)] text-shadow-[0_0_10px_rgba(92,103,255,0.5),0_0_20px_rgba(92,103,255,0.3)]">
              {title}
            </div>
            
            {/* Glowing elements */}
            <div className="glowing-elements absolute inset-0 pointer-events-none">
              <div className="glow-1 absolute w-[100px] h-[100px] rounded-full bg-radial-gradient-teal opacity-0 transition-opacity duration-300 top-[-20px] left-[-20px]"></div>
              <div className="glow-2 absolute w-[100px] h-[100px] rounded-full bg-radial-gradient-teal opacity-0 transition-opacity duration-300 top-1/2 right-[-30px] -translate-y-1/2"></div>
              <div className="glow-3 absolute w-[100px] h-[100px] rounded-full bg-radial-gradient-teal opacity-0 transition-opacity duration-300 bottom-[-20px] left-[30%]"></div>
            </div>
            
            {/* Subtitle */}
            <div className="subtitle absolute bottom-[40px] w-full text-center text-xs tracking-[2px] translate-y-[30px] text-white/60">
              <span>{subtitle}</span>
              <span className="highlight ml-[5px] bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">{highlight}</span>
            </div>
            
            {/* Floating particles */}
            <div className="card-particles">
              <span className="absolute w-[3px] h-[3px] bg-[#00ffaa] rounded-full opacity-0 transition-opacity duration-300 top-[40%] left-[20%]" style={{"--x": "1", "--y": "-1"} as React.CSSProperties}></span>
              <span className="absolute w-[3px] h-[3px] bg-[#00ffaa] rounded-full opacity-0 transition-opacity duration-300 top-[60%] right-[20%]" style={{"--x": "-1", "--y": "-1"} as React.CSSProperties}></span>
              <span className="absolute w-[3px] h-[3px] bg-[#00ffaa] rounded-full opacity-0 transition-opacity duration-300 top-[20%] left-[40%]" style={{"--x": "0.5", "--y": "1"} as React.CSSProperties}></span>
              <span className="absolute w-[3px] h-[3px] bg-[#00ffaa] rounded-full opacity-0 transition-opacity duration-300 top-[80%] right-[40%]" style={{"--x": "-0.5", "--y": "1"} as React.CSSProperties}></span>
              <span className="absolute w-[3px] h-[3px] bg-[#00ffaa] rounded-full opacity-0 transition-opacity duration-300 top-[30%] left-[60%]" style={{"--x": "1", "--y": "0.5"} as React.CSSProperties}></span>
              <span className="absolute w-[3px] h-[3px] bg-[#00ffaa] rounded-full opacity-0 transition-opacity duration-300 top-[70%] right-[60%]" style={{"--x": "-1", "--y": "0.5"} as React.CSSProperties}></span>
            </div>
            
            {/* Corner decoration elements */}
            <div className="corner-elements">
              <span className="absolute w-[15px] h-[15px] border-2 border-indigo-500/30 top-[10px] left-[10px] border-r-0 border-b-0 transition-all duration-300"></span>
              <span className="absolute w-[15px] h-[15px] border-2 border-indigo-500/30 top-[10px] right-[10px] border-l-0 border-b-0 transition-all duration-300"></span>
              <span className="absolute w-[15px] h-[15px] border-2 border-indigo-500/30 bottom-[10px] left-[10px] border-r-0 border-t-0 transition-all duration-300"></span>
              <span className="absolute w-[15px] h-[15px] border-2 border-indigo-500/30 bottom-[10px] right-[10px] border-l-0 border-t-0 transition-all duration-300"></span>
            </div>
            
            {/* Scanning line animation */}
            <div className="scan-line absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent -translate-y-full animate-[scanMove_2s_linear_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
