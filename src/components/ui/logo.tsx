import React from "react";

export function Logo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<svg id="18469:6485" layer-name="Content" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-icon"> <rect width="64" height="64" rx="16" fill="white"></rect> <rect width="64" height="64" rx="16" fill="url(#paint0_linear_18469_6485)"></rect> <path d="M12 18L12.0103 18.0166L12 18L20.1039 30.3797H30.6028L30.58 30.3466L30.6028 30.3797L28.2182 26.7353H35.786L26.7526 40.5388L32 48.5539L52 18H12Z" fill="black"></path> <defs> <linearGradient id="paint0_linear_18469_6485" x1="40.6519" y1="-45.443" x2="-35.9969" y2="-6.06179" gradientUnits="userSpaceOnUse"> <stop offset="0.0855094" stop-color="#FFFFF7"></stop> <stop offset="1" stop-color="#727267"></stop> </linearGradient> </defs> </svg>',
      }}
      aria-label="Game7 Logo"
      role="img"
    />
  );
}
