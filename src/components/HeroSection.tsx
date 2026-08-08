import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * HeroSection Component
 * The first section visible to users. Features a high-impact architectural background,
 * main brand messaging, and primary calls to action.
 */
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(25, 51, 51, 0.7), rgba(25, 51, 51, 0.7)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")' 
        }}
      />
      
      <div className="relative z-10 max-w-5xl px-4 md:px-6 py-20 md:py-0 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.1] md:leading-tight">
          [Quote Here] <br className="hidden md:block" />
          [Quote Here] <br className="hidden md:block" />
          <span className="text-brand-teal">[Quote Here]</span>
        </h1>
        <p className="text-base md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          [Paragraph Dito]
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto sm:max-w-none">
          <a 
            href="#portfolio" 
            className="px-8 py-4 bg-brand-teal hover:bg-brand-accent text-white font-semibold rounded-lg transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold rounded-lg transition-all w-full sm:w-auto justify-center text-center"
          >
            Get a Consultation
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/50" />
      </div>
    </section>
  );
};

export default HeroSection;
