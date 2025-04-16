import React from "react";
import { Link } from "react-router-dom";

export function Logo({ linkToPortal = false }: { linkToPortal?: boolean }) {
  // For external links, we'll use <a>, for internal links we'll use <Link>
  
  return (
    <div className="relative w-14 h-14 md:w-16 md:h-16">
      {linkToPortal ? (
        <Link to="/portal" className="block">
          <div className="w-16 h-16 relative group animate-rainbow cursor-pointer rounded-2xl overflow-hidden
                bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] 
                bg-[length:200%] 
                [background-clip:padding-box,border-box,border-box] 
                [background-origin:border-box] 
                [border:calc(0.2*1rem)_solid_transparent] 
                transition-transform hover:scale-105 active:scale-95
                before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[25%] before:w-[70%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))]">
            <div className="absolute inset-0 bg-white z-10"></div>
            <div className="w-10 h-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
              <svg width="36" height="28" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L0.0103498 0.0165559L0 0L8.10391 12.3797H18.6028L18.58 12.3466L18.6028 12.3797L16.2182 8.73531H23.786L14.7526 22.5388L20 30.5539L40 0H0Z" fill="black"/>
              </svg>
            </div>
          </div>
        </Link>
      ) : (
        <a 
          href="https://app.game7.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
        <div className="w-16 h-16 relative group animate-rainbow cursor-pointer rounded-2xl overflow-hidden
                bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] 
                bg-[length:200%] 
                [background-clip:padding-box,border-box,border-box] 
                [background-origin:border-box] 
                [border:calc(0.2*1rem)_solid_transparent] 
                transition-transform hover:scale-105 active:scale-95
                before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[25%] before:w-[70%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))]">
          <div className="absolute inset-0 bg-white z-10"></div>
          <div className="w-10 h-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
            <svg width="36" height="28" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L0.0103498 0.0165559L0 0L8.10391 12.3797H18.6028L18.58 12.3466L18.6028 12.3797L16.2182 8.73531H23.786L14.7526 22.5388L20 30.5539L40 0H0Z" fill="black"/>
            </svg>
          </div>
        </div>
        </a>
      )}
    </div>
  );
}
