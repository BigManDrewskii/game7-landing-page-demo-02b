import React from 'react';
import '../../styles/flip-card.css';

interface FlipCardProps {
  frontImage: string;
  backImage: string;
  className?: string;
  alt?: string;
}

export function FlipCard({ 
  frontImage,
  backImage,
  className = "",
  alt = "Card image"
}: FlipCardProps) {
  return (
    <div className={`flip-card-container ${className}`}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={frontImage} alt={`${alt} (front)`} />
          </div>
          <div className="flip-card-back">
            <img src={backImage} alt={`${alt} (back)`} />
          </div>
        </div>
      </div>
    </div>
  );
}
