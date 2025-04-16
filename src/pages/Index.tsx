
import React, { useEffect, useState } from "react";
import { Logo } from "@/components/ui/logo";
import { Footer } from "@/components/ui/footer";
import { NotificationForm } from "@/components/notification-form";
import { Link } from "react-router-dom";

export default function Index() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure the video element is ready
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="max-w-none flex flex-col justify-between items-center w-full min-h-screen bg-[#0D0D0D] box-border mx-auto px-6 py-10 sm:px-8 sm:py-14 md:px-10 md:py-18 selection:bg-white/10 selection:text-white relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {/* Gradient overlay from bottom to top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent z-10"></div>
        {/* Additional subtle darken effect */}
        <div className="absolute inset-0 bg-black/30 z-5"></div>
        <div className="w-full h-full">
          <iframe 
            className={`w-[200%] h-[200%] md:w-[150%] md:h-[150%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ${videoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/zWzwPwJf5_I?autoplay=1&mute=1&controls=0&loop=1&playlist=zWzwPwJf5_I&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1" 
            title="Background Video" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
            onLoad={() => setVideoLoaded(true)}
          ></iframe>
        </div>
      </div>
      <section className="flex flex-col items-center gap-4 sm:gap-5 max-w-3xl w-full space-y-2 md:space-y-3 relative z-20">
        <header className="flex items-center justify-center animate-fade-in opacity-0 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          <Logo />
        </header>

        <h1 className="font-unbounded text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium leading-tight sm:leading-tight md:leading-tight lg:leading-[1.15] text-center text-white tracking-[-0.02em] animate-fade-in opacity-0 hover:text-white/90 transition-colors duration-300 text-shadow-lg" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          Be the first to know.
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-center text-zinc-300 max-w-xl px-4 animate-fade-in opacity-0 hover:text-white/90 transition-colors duration-300" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          Game7 is accelerating the adoption of blockchain-enabled game economies. Sign up to get notified about our latest updates and offerings.
        </p>

        <div className="w-full animate-fade-in opacity-0 group" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
          <NotificationForm />
        </div>

        <div className="animate-fade-in opacity-0" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>
          <Link 
            to="/showcase" 
            className="inline-block mt-6 text-sm text-zinc-400 hover:text-white underline underline-offset-4 transition-colors duration-300"
          >
            View our showcase page
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
