
import React, { useEffect, useState } from "react";
import { Logo } from "@/components/ui/logo";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Showcase() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    // Add a small delay to ensure the video element is ready
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 1000);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionIndex = parseInt(entry.target.getAttribute('data-section-index') || '0');
          setVisibleSections(prev => [...prev, sectionIndex].filter((v, i, a) => a.indexOf(v) === i));
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('[data-section-index]').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="max-w-none flex flex-col w-full min-h-screen bg-[#0D0D0D] box-border mx-auto selection:bg-white/10 selection:text-white relative overflow-hidden">
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

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-8 sm:px-10 md:px-16 lg:px-24 relative z-20">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          <Logo />
        </div>
        <Link 
          to="/" 
          className="text-white hover:text-white/80 transition-colors duration-300 text-sm sm:text-base animate-fade-in opacity-0"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section 
        data-section-index="0"
        className="flex flex-col items-center gap-6 px-6 py-16 md:py-24 lg:py-32 max-w-6xl mx-auto relative z-20"
      >
        <h1 className={`font-unbounded text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-center text-white tracking-[-0.02em] ${visibleSections.includes(0) ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          Community Owned <br />
          <span className="text-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Gaming Protocol</span>
        </h1>

        <p className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed text-center text-zinc-300 max-w-2xl ${visibleSections.includes(0) ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          Game7 is accelerating the adoption of blockchain-enabled game economies through grants, education, and open-source software.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 mt-4 ${visibleSections.includes(0) ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          <Button variant="rainbow" className="group">
            Explore the Portal
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section 
        data-section-index="1"
        className="px-6 py-16 sm:px-10 md:px-16 lg:px-24 md:py-24 lg:py-32 max-w-7xl mx-auto relative z-20"
      >
        <div className="mb-16 text-center">
          <h2 className={`font-unbounded text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 ${visibleSections.includes(1) ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Empowering Web3 Gaming
          </h2>
          <p className={`text-zinc-300 max-w-2xl mx-auto ${visibleSections.includes(1) ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Building the future of gaming through decentralized technologies and community governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="h-8 w-8 mb-4 text-white" />,
              title: "Global Community",
              description: "Join thousands of developers, gamers, and creators building the future of gaming together."
            },
            {
              icon: <Zap className="h-8 w-8 mb-4 text-white" />,
              title: "Powerful Tools",
              description: "Access open-source software and development tools to build your blockchain game faster."
            },
            {
              icon: <Shield className="h-8 w-8 mb-4 text-white" />,
              title: "Secure Architecture",
              description: "Leverage battle-tested smart contracts and secure infrastructure for your game economy."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 ${visibleSections.includes(1) ? 'animate-fade-in' : 'opacity-0'}`} 
              style={{ animationDelay: `${600 + index * 200}ms`, animationFillMode: "forwards" }}
            >
              {feature.icon}
              <h3 className="text-xl font-unbounded text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      <section 
        data-section-index="2"
        className="px-6 py-16 sm:px-10 md:px-16 lg:px-24 md:py-24 lg:py-32 max-w-7xl mx-auto relative z-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`font-unbounded text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 ${visibleSections.includes(2) ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              The Future of Gaming is Here
            </h2>
            <p className={`text-zinc-300 mb-8 ${visibleSections.includes(2) ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              Game7 is bridging traditional gaming with blockchain technology, creating new player-owned economies and experiences that put gamers first.
            </p>
            <ul className={`space-y-4 ${visibleSections.includes(2) ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
              {[
                "Grants for innovative gaming projects",
                "Open-source SDK for game developers",
                "Educational resources and documentation",
                "Community-driven governance and decisions"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`relative h-[400px] ${visibleSections.includes(2) ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-blue-500/20 opacity-70"></div>
              <div className="absolute inset-0 backdrop-blur-[2px] flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-white/60 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-black" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        data-section-index="3"
        className="px-6 py-16 sm:px-10 md:px-16 lg:px-24 md:py-24 lg:py-32 max-w-5xl mx-auto text-center relative z-20"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <h2 className={`font-unbounded text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 ${visibleSections.includes(3) ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          Join the Revolution
        </h2>
        <p className={`text-zinc-300 max-w-2xl mx-auto mb-8 ${visibleSections.includes(3) ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          Be part of the community that's building the future of gaming. Sign up for updates and be the first to know about new features, grants, and opportunities.
        </p>
        <div className={`${visibleSections.includes(3) ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          <Button variant="rainbow" className="group text-lg px-8 py-6">
            Join Our Discord
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
