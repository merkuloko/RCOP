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
    <section id="services" className="py-24 bg-gray-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-dark">Comprehensive Architectural Solutions</h3>
        </div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {coreServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-brand-dark/5 text-brand-teal rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                <service.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Visualization Services Block */}
        <div className="bg-brand-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-brand-teal font-bold mb-4 uppercase tracking-wider">Visualization Services</h4>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">See the Future of Your Project</h3>
              <p className="text-gray-300 text-lg mb-8">
                We utilize industry-leading technology to provide high-fidelity 3D renderings and virtual walkthroughs, 
                ensuring complete clarity and confidence in the design direction.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {visualizationServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <service.icon className="text-brand-teal mb-4" size={32} />
                  <h5 className="font-bold text-xl mb-2">{service.title}</h5>
                  <p className="text-gray-400 text-sm">{service.description}</p>
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
