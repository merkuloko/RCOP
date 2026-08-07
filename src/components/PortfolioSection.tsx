import React from 'react';
import { ExternalLink } from 'lucide-react';

/**
 * PortfolioSection Component
 * Showcases a grid of featured architectural projects.
 * Features hover effects and clean presentation to let architectural images pop.
 */
const PortfolioSection = () => {
  const projects = [
    {
      title: "[Title dito]",
      category: "[Anong Category?]",
      image: ""
    },
    {
      title: "[Title dito]",
      category: "[Anong Category?]",
      image: ""
    },
    {
      title: "[Title dito]",
      category: "[Anong Category?]",
      image: ""
    },
    {
      title: "[Title dito]",
      category: "[Anong Category?]",
      image: ""
    },
    {
      title: "[Title dito]",
      category: "[Anong Category?]",
      image: ""
    },
    {
      title: "[Title dito]",
      category: "[Anong Category?]",
      image: ""
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4">Featured Work</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-dark">Our Portfolio</h3>
          </div>
          <p className="text-gray-500 max-w-md">
            A selection of our most impactful designs across residential, commercial, and institutional sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md aspect-[4/3]"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-teal font-bold text-xs uppercase tracking-widest mb-2">{project.category}</span>
                <h4 className="text-white text-2xl font-bold mb-4">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
