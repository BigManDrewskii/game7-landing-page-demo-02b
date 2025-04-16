import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FlipCard } from "@/components/ui/flip-card";
import { RainbowPattern } from "@/components/ui/rainbow-pattern";
import { Logo } from "@/components/ui/logo";
import AnimatedPattern from "@/components/ui/animated-pattern";

// Note: In a Vite project, we'll load fonts via CSS instead of Next.js font loading

const PortalPage = () => {
  return (
    <>
      {/* Background Pattern - Positioned outside the main container */}
      <AnimatedPattern />
      
      <div className="text-white overflow-x-hidden w-full min-h-screen" style={{
        position: 'relative',
        backgroundColor: 'transparent'
      }}>
        
        
        {/* Full width container */}
        <div className="w-full relative z-10" data-section="page-container">
          {/* Content wrapper with max-width */}
          <div className="flex flex-col justify-center items-center gap-10 w-full max-w-[1080px] mx-auto px-4 py-6">
          {/* Set page title with document.title for a cleaner approach than using Next.js Head */}
          {/* Page title */}
          {/* Header/Navigation */}
          <header id="main-header" className="w-full inline-flex justify-between items-center" data-section="header">
            {/* Logo */}
            <div className="flex justify-start items-start">
              <Logo />
            </div>
            
            {/* Navigation Links */}
            <nav className="relative bg-neutral-900/60 rounded-[50px] backdrop-blur-[5px] hidden md:block">
              <div className="inline-flex justify-start items-center gap-8 px-8 py-5">
                <a href="#features" className="text-stone-300 text-base font-normal leading-tight hover:text-white transition-colors">Features</a>
                <a href="#how-it-works" className="text-stone-300 text-base font-normal leading-tight hover:text-white transition-colors">How it works</a>
                <a href="#testimonials" className="text-stone-300 text-base font-normal leading-tight hover:text-white transition-colors">Testimonials</a>
                <a href="#faqs" className="text-stone-300 text-base font-normal leading-tight hover:text-white transition-colors">FAQs</a>
              </div>
              <div className="absolute inset-0 rounded-[50px] border border-neutral-800"></div>
            </nav>
            
            {/* Notify Me Button */}
            <Button
              variant="rainbow"
              className="h-12 rounded-full text-base font-semibold"
            >
              <span className="text-black font-bold z-10 relative">Notify me</span>
            </Button>
          </header>
          
          {/* Hero Section */}
          <section id="hero" className="py-10 flex flex-col justify-start items-center gap-10 w-full mt-4" data-section="hero">
            <div className="flex flex-col justify-start items-center gap-8">
              <h1 className="font-unbounded text-center text-5xl sm:text-6xl md:text-7xl font-medium leading-tight sm:leading-tight md:leading-[90px] max-w-[830px] px-4">
                HyperFi Games Are Here
              </h1>
              
              <div className="w-full max-w-[672px] text-center px-4">
                <p className="text-center text-zinc-300 text-base sm:text-lg font-normal leading-7">
                  Game7 is accelerating the adoption of blockchain-enabled game economies<br className="hidden sm:block" />
                  through innovative, fast-paced, web3 enhanced games.
                </p>
              </div>
            </div>
                        {/* Call-to-action buttons */}
            <div className="inline-flex justify-center items-start gap-4 sm:gap-10 flex-wrap mt-2">
              <div className="relative">
                <Button
                  variant="rainbow"
                  className="h-12 px-6 rounded-full text-base font-semibold"
                  asChild
                >
                  <a href="https://app.game7.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <span className="text-black font-bold z-10 relative">Explore the Portal</span>
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                      <path d="M3.72363 8H13.057" stroke="#020817" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.39014 3.3335L13.0568 8.00016L8.39014 12.6668" stroke="#020817" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </Button>
              </div>
              
              <Button
                variant="secondary"
                className="h-12 rounded-full text-base font-semibold"
              >
                <span className="relative">Learn More</span>
              </Button>
            </div>
          </section>
          
          {/* Features Section */}
          <section id="features" className="w-full max-w-[1088px] py-14 md:py-20 flex flex-col justify-start items-center gap-12 md:gap-16 px-4 md:px-6" data-section="features">
            <div className="w-full max-w-[800px] flex flex-col justify-start items-center gap-6 px-4">
              <h2 className="font-unbounded self-stretch text-center text-white text-4xl sm:text-5xl font-medium leading-tight sm:leading-[48px]">
                Empowering Web3 Gaming
              </h2>
              <div className="w-full max-w-[672px] text-center">
                <p className="text-center text-zinc-300 text-base font-normal leading-normal">
                  Building the future of gaming through decentralized technologies and community
                  <span className="hidden sm:inline"><br /></span> governance.
                </p>
              </div>
            </div>
            
            {/* Feature Cards */}
            <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 w-full max-w-[1440px]">
              {/* Global Community Card */}
              <div className="cyber-card flex flex-col justify-between p-6 overflow-hidden relative">
                <div className="cyber-card-glow"></div>
                <span className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-2"></span>
                <h3 className="font-unbounded text-white text-xl font-normal leading-7 relative z-10">
                  Global Community
                </h3>
                <p className="text-zinc-400 text-base font-normal leading-normal pr-4 mt-1 relative z-10">
                  Join thousands of developers, gamers,
                  and creators building the future of
                  gaming together.
                </p>
              </div>
              
              {/* Powerful Tools Card */}
              <div className="cyber-card flex flex-col justify-between p-6 overflow-hidden relative">
                <div className="cyber-card-glow"></div>
                <span className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-2"></span>
                <h3 className="font-unbounded text-white text-xl font-normal leading-7 relative z-10">
                  Powerful Tools
                </h3>
                <p className="text-zinc-400 text-base font-normal leading-normal pr-4 mt-1 relative z-10">
                  Access open-source software and
                  development tools to build your
                  blockchain game faster.
                </p>
              </div>
              
              {/* Secure Architecture Card */}
              <div className="cyber-card flex flex-col justify-between p-6 overflow-hidden relative">
                <div className="cyber-card-glow"></div>
                <span className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-2"></span>
                <h3 className="font-unbounded text-white text-xl font-normal leading-7 relative z-10">
                  Secure Architecture
                </h3>
                <p className="text-zinc-400 text-base font-normal leading-normal pr-4 mt-1 relative z-10">
                  Leverage battle-tested smart contracts
                  and secure infrastructure for your game
                  economy.
                </p>
              </div>
              
              {/* Playtesting Platform Card */}
              <div className="cyber-card flex flex-col justify-between p-6 overflow-hidden relative">
                <div className="cyber-card-glow"></div>
                <span className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-2"></span>
                <h3 className="font-unbounded text-white text-xl font-normal leading-7 relative z-10">
                  Playtesting Platform
                </h3>
                <p className="text-zinc-400 text-base font-normal leading-normal pr-4 mt-1 relative z-10">
                  Get early feedback on your games with
                  our dedicated playtesting community
                  and rapid iteration tools.
                </p>
              </div>
            </div>
          </section>
          
          {/* Future of Gaming Section */}
          <section id="future-gaming" className="w-full py-20 md:py-24 overflow-hidden" data-section="future-gaming">
            {/* The Future of Gaming is Here Section - constrained to 1440px */}
            <div className="container max-w-[1440px] mx-auto px-4 md:px-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 lg:items-start">
              <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-8 lg:order-first lg:pt-8" data-section="future-gaming-text">
                <h2 className="font-unbounded text-white text-4xl sm:text-5xl font-medium leading-tight sm:leading-[50px] tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text">
                  <span className="text-transparent">The Future of<br />Gaming is Here</span>
                </h2>
                <div className="w-full">
                  <p className="text-zinc-300 text-base sm:text-lg font-normal leading-relaxed">
                    Game7 is bringing traditional gaming with blockchain technology,
                    creating new player-owned economies and experiences that put
                    gamers first.
                  </p>
                </div>
                
                {/* List items */}
                <div className="flex flex-col justify-start items-start gap-5 mt-4">
                  <div className="flex justify-start items-center gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-300">
                      <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.75 12.75L10 15.25L16.25 8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="text-white text-base sm:text-lg font-normal leading-tight group-hover:text-indigo-300 transition-colors duration-300">Grants for innovative gaming projects</div>
                  </div>
                  <div className="flex justify-start items-center gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                      <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.75 12.75L10 15.25L16.25 8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="text-white text-base sm:text-lg font-normal leading-tight group-hover:text-emerald-300 transition-colors duration-300">Open-source SDK for game developers</div>
                  </div>
                  <div className="flex justify-start items-center gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                      <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.75 12.75L10 15.25L16.25 8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="text-white text-base sm:text-lg font-normal leading-tight group-hover:text-amber-300 transition-colors duration-300">Educational resources and documentation</div>
                  </div>
                  <div className="flex justify-start items-center gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
                      <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.75 12.75L10 15.25L16.25 8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="text-white text-base sm:text-lg font-normal leading-tight group-hover:text-purple-300 transition-colors duration-300">Community-driven governance and decisions</div>
                  </div>
                </div>
              </div>
              
              {/* Flip Card Component */}
              <div id="flip-card-container" className="w-full lg:w-1/2 h-[500px] md:h-[550px] flex items-center justify-center lg:justify-end relative overflow-visible p-6 z-10 mx-auto lg:mx-0 lg:order-last" data-section="future-gaming-card">
                {/* Background glow effect */}
                <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent blur-xl opacity-70 z-0"></div>
                
                {/* The FlipCard Component - with constrained size */}
                <div className="relative z-10 flex items-center justify-center transform-gpu">
                  <div className="flip-card-wrapper pointer-events-auto" style={{ transform: 'scale(1.3)' }}>
                    <FlipCard 
                      frontImage="/images/card-01.png" 
                      backImage="/images/card-02.png"
                      alt="Game7 Card"
                      className="pointer-events-auto"
                    />
                  </div>
                </div>
                
                {/* Additional decorative elements */}
                <div className="absolute top-12 left-12 w-20 h-20 border border-white/10 rounded-full animate-ping opacity-20"></div>
                <div className="absolute bottom-12 right-20 w-16 h-16 border border-indigo-500/20 rounded-full animate-pulse opacity-30"></div>
              </div>
              </div>
            </div>
          </section>
          
          {/* Join our Community Section */}
          <section id="community" className="w-full bg-black/50 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-[2px] py-10 md:py-16 mt-4 mb-10 relative overflow-hidden" data-section="community">
            <RainbowPattern className="rounded-xl" />
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10">
              <div className="flex flex-col justify-start items-center gap-7">
                <h2 className="font-unbounded text-center text-white text-3xl sm:text-4xl font-medium leading-tight sm:leading-10">
                  Join our Community
                </h2>
                <div className="w-full max-w-[672px]">
                  <p className="text-center text-zinc-300 text-base font-normal leading-normal">
                    Be part of the community that's building the future of gaming. Sign up for updates and be
                    <span className="hidden sm:inline"><br /></span> the first to know about new features, grants, and opportunities.
                  </p>
                </div>
                
                {/* Discord Button */}
                <Button
                  variant="rainbow"
                  className="h-12 rounded-full text-base font-semibold"
                  asChild
                >
                  <a href="https://discord.com/invite/game7" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <span className="text-black font-bold z-10 relative">Join Our Discord</span>
                  </a>
                </Button>
              </div>
            </div>
          </section>
          
          {/* Footer */}
          <footer id="site-footer" className="w-full py-6 flex flex-col justify-start items-center gap-6" data-section="footer">
            <div className="w-full h-[1px] bg-white/10"></div>
            <div className="w-full flex justify-center items-center gap-10 px-4">
              <Link to="/portal" className="text-center text-zinc-400 hover:text-white transition-colors text-sm font-normal leading-normal">Portal</Link>
              <a href="https://twitter.com/G7_DAO" target="_blank" rel="noopener noreferrer" className="text-center text-zinc-400 hover:text-white transition-colors text-sm font-normal leading-normal">X</a>
              <a href="https://discord.com/invite/game7" target="_blank" rel="noopener noreferrer" className="text-center text-zinc-400 hover:text-white transition-colors text-sm font-normal leading-normal">Discord</a>
            </div>
          </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortalPage;
