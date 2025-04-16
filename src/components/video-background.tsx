import React, { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  blurAmount?: string; // Optional CSS blur value, e.g., "5px"
}

export function VideoBackground({ src, blurAmount = "0px" }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isPlayingForward, setIsPlayingForward] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle the initial video load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsLoaded(true);
      });
    }
  }, []);

  // This effect handles the elegant looping with direction change
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Function to handle time update and direction changes
    const handleTimeUpdate = () => {
      const duration = videoElement.duration;
      const currentTime = videoElement.currentTime;

      // When playing forward and reaching near the end
      if (isPlayingForward && currentTime >= duration * 0.95) {
        // Start transition to backward playback
        setPlaybackRate((prev) => Math.max(prev - 0.01, -1)); // Gradually slow down
        if (playbackRate <= 0) {
          setIsPlayingForward(false);
        }
      }
      
      // When playing backward and reaching near the beginning
      else if (!isPlayingForward && currentTime <= duration * 0.05) {
        // Start transition to forward playback
        setPlaybackRate((prev) => Math.min(prev + 0.01, 1)); // Gradually speed up
        if (playbackRate >= 0) {
          setIsPlayingForward(true);
        }
      }
    };

    // Apply the current playback rate
    videoElement.playbackRate = Math.abs(playbackRate);
    
    // If playing backward, we need to manually seek backward
    if (!isPlayingForward && videoElement.currentTime > 0) {
      videoElement.currentTime -= 1/30; // Move backward by one frame (approximation)
    }

    videoElement.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [isPlayingForward, playbackRate]);

  // Set up video properties
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // If video ever ends, restart it
    const handleEnded = () => {
      videoElement.currentTime = 0;
      videoElement.play().catch(() => {
        // Auto-play might be blocked, add a play button if needed
        setIsPlaying(false);
      });
    };

    videoElement.addEventListener("ended", handleEnded);
    
    // Start playing when component mounts
    videoElement.play().catch(() => {
      setIsPlaying(false);
    });

    return () => {
      videoElement.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Gradient overlay from bottom to top */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent z-10"></div>
      
      {/* Additional subtle darken effect */}
      <div className="absolute inset-0 bg-black/30 z-5"></div>
      
      {/* Video container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          className={`absolute min-w-[100%] min-h-[100%] w-auto h-auto object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: `blur(${blurAmount})` }}
          autoPlay
          playsInline
          muted
          loop
        />
      </div>
      
      {/* Optional play button that appears if autoplay is blocked */}
      {!isPlaying && (
        <button
          onClick={() => {
            videoRef.current?.play();
            setIsPlaying(true);
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 rounded-full p-6 z-20"
          aria-label="Play video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </div>
  );
}
