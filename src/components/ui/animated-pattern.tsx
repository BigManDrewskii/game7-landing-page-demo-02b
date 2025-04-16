import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AnimatedPattern = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <PatternContainer>
      <StyledWrapper $mouseX={mousePosition.x} $mouseY={mousePosition.y} $isActive={isHovering} />
      <ShadowOverlay />
    </PatternContainer>
  );
};

const PatternContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
`;

const StyledWrapper = styled.div<{ $mouseX: number; $mouseY: number; $isActive: boolean }>`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  width: calc(100% + 40px);
  height: calc(100% + 40px);
  background-color: #000;
  --c: 7px;
  background-image: 
    /* Cursor following color effect */
    radial-gradient(
      circle at ${props => `${props.$mouseX}px ${props.$mouseY}px`},
      rgba(255, 0, 0, 0.4) 0%,
      rgba(255, 0, 0, 0) 30%
    ),
    radial-gradient(
      circle at ${props => `${props.$mouseX}px ${props.$mouseY}px`},
      rgba(255, 255, 0, 0.4) 0%,
      rgba(255, 255, 0, 0) 25%
    ),
    radial-gradient(
      circle at ${props => `${props.$mouseX}px ${props.$mouseY}px`},
      rgba(0, 255, 0, 0.4) 0%,
      rgba(0, 255, 0, 0) 35%
    ),
    radial-gradient(
      circle at ${props => `${props.$mouseX}px ${props.$mouseY}px`},
      rgba(0, 0, 255, 0.4) 0%,
      rgba(0, 0, 255, 0) 40%
    ),
    /* Dot pattern */
    radial-gradient(
      circle at 50% 50%,
      #0000 1.5px,
      #000 0 var(--c),
      #0000 var(--c)
    ),
    radial-gradient(
      circle at 50% 50%,
      #0000 1.5px,
      #000 0 var(--c),
      #0000 var(--c)
    ),
    /* Color gradients */
    radial-gradient(circle at 50% 50%, #f00, #f000 60%),
    radial-gradient(circle at 50% 50%, #ff0, #ff00 60%),
    radial-gradient(circle at 50% 50%, #0f0, #0f00 60%),
    radial-gradient(ellipse at 50% 50%, #00f, #00f0 60%);
  background-size:
    100% 100%,
    100% 100%,
    100% 100%,
    100% 100%,
    12px 20.7846097px,
    12px 20.7846097px,
    200% 200%,
    200% 200%,
    200% 200%,
    200% 20.7846097px;
  --p: 0px 0px, 6px 10.39230485px;
  background-position:
    center center,
    center center,
    center center,
    center center,
    var(--p),
    var(--p),
    0% 0%,
    0% 0%,
    0% 0%,
    0% 0px;
  opacity: ${props => (props.$isActive ? '1' : '0.2')};
  transition: opacity 0.3s ease-out;
  mix-blend-mode: screen;
  animation:
    wee 40s linear infinite,
    filt 6s linear infinite;

  @keyframes filt {
    0% {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(360deg);
    }
  }
  
  @keyframes wee {
    0% {
      background-position:
        center center,
        center center,
        center center,
        center center,
        var(--p),
        var(--p),
        800% 400%,
        1000% -400%,
        -1200% -600%,
        400% 41.5692194px;
    }
    to {
      background-position:
        center center,
        center center,
        center center,
        center center,
        var(--p),
        var(--p),
        0% 0%,
        0% 0%,
        0% 0%,
        0% 0%;
    }
  }
`;

const ShadowOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.2) 100%);
  pointer-events: none;
`;

export default AnimatedPattern;
