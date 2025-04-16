import React from 'react';

interface RainbowPatternProps {
  className?: string;
}

export function RainbowPattern({ className = "" }: RainbowPatternProps) {
  return (
    <div 
      className={`absolute inset-0 -z-10 ${className}`}
      style={{
        backgroundImage: `radial-gradient(black 64%, transparent), 
          linear-gradient(
            135deg,
            #ff0000,
            #ff8000,
            #ffff00,
            #00ff00,
            #00ffff,
            #0000ff,
            #8b00ff,
            #ff1493
          )`,
        backgroundSize: '100% 0.5%, contain',
        opacity: 0.5,
        mixBlendMode: 'screen',
      }}
    />
  );
}
