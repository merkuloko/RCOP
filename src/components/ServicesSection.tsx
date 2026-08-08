import React from 'react';
import { Home, Building2, Landmark, PenTool, RefreshCw, Box, Move } from 'lucide-react';

/**
 * ServicesSection Component
 * Renders the core services grid extracted from the promotional flyers.
 * Includes Residential, Commercial, Institutional, Interior Space Planning, and Renovation.
 * Also highlights Visualization Services like 3D Rendering and Walkthroughs.
 */
const ServicesSection = () => {
  const coreServices = [
    {
      title: 'Residential',
      description: 'Custom home designs that balance aesthetics with personal comfort.',
      icon: Home
    },
    {
      title: 'Commercial',
      description: 'Innovative workspaces and retail environments designed for business growth.',
      icon: Building2
    },
    {
      title: 'Institutional',
      description: 'Functional and safe designs for schools, healthcare, and public facilities.',
      icon: Landmark
    },
    {
      title: 'Interior Space Planning',
      description: 'Optimizing interior layouts for better flow, utility, and ambiance.',
      icon: PenTool
    },
    {
      title: 'Renovation',
      description: 'Transforming existing structures into modern, updated spaces.',
      icon: RefreshCw
    }
  ];

  const visualizationServices = [
    {
      title: '3D Rendering',
      description: 'Photorealistic visualizations to see your project before construction.',
      icon: Box
    },
    {
      title: 'Walkthroughs',
      description: 'Immersive virtual tours that provide a real sense of space and scale.',
      icon: Move
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-brand-teal font-bold tracking-widest uppercase text-[10px] md:text-sm mb-3">Our Expertise</h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-dark leading-tight">Comprehensive Architectural Solutions</h3>
        </div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-20">
          {coreServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-dark/5 text-brand-teal rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                <service.icon size={28} className="md:w-8 md:h-8" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-brand-dark mb-2 md:mb-3">{service.title}</h4>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Visualization Services Block */}
        <div className="bg-brand-dark rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h4 className="text-brand-teal font-bold mb-3 md:mb-4 uppercase tracking-wider text-xs md:text-sm">Visualization Services</h4>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">See the Future of Your Project</h3>
              <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                We utilize industry-leading technology to provide high-fidelity 3D renderings and virtual walkthroughs, 
                ensuring complete clarity and confidence in the design direction.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {visualizationServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-5 md:p-6 rounded-xl border border-white/10">
                  <service.icon className="text-brand-teal mb-3 md:mb-4" size={28} />
                  <h5 className="font-bold text-lg md:text-xl mb-1 md:mb-2">{service.title}</h5>
                  <p className="text-gray-400 text-xs md:text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
