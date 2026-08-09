import React from 'react';
import { Award, ShieldCheck, MapPin } from 'lucide-react';

/**
 * TrustSection Component
 * Establishes authority by showing credentials and professional affiliations.
 * Contains a specific placeholder for the Ar.tect's official photo.
 */
const TrustSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          {/* Ar. Photo Placeholder */}
          <div className="relative group w-full lg:w-1/3 max-w-[280px] sm:max-w-sm">
            <div className="absolute inset-0 bg-brand-teal rounded-2xl transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="aspect-[3/4] rounded-2xl bg-gray-200 overflow-hidden flex items-center justify-center border-2 border-brand-dark">
              <img 
                src="[Picture ni Ar.]"
                alt="[Ar. Photo Here]" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 bg-brand-dark text-white p-3 sm:p-4 md:p-6 rounded-lg shadow-xl">
              <p className="font-bold text-base sm:text-lg md:text-xl">[Name ni Ar.]</p>
              <p className="text-brand-teal text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase">[Professional Title/s]</p>
            </div>
          </div>

          {/* Trust Content */}
          <div className="flex-1 space-y-6 md:space-y-8 mt-8 lg:mt-0">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">Credentials & Expertise</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                [Credentials and Expertise ni Ar.]
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow bg-gray-50/30">
                <div className="p-3 bg-brand-teal/10 rounded-lg text-brand-teal shrink-0">
                  <ShieldCheck size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm md:text-base">[CE1]</h4>
                  <p className="text-xs md:text-sm text-gray-500 italic">[Sa'n galing?]</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow bg-gray-50/30">
                <div className="p-3 bg-brand-teal/10 rounded-lg text-brand-teal shrink-0">
                  <Award size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm md:text-base">[CE2]</h4>
                  <p className="text-xs md:text-sm text-gray-500 italic">[Sa'n galing?]</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow bg-gray-50/30">
                <div className="p-3 bg-brand-teal/10 rounded-lg text-brand-teal shrink-0">
                  <MapPin size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm md:text-base">[CE3]</h4>
                  <p className="text-xs md:text-sm text-gray-500 italic">[Sa'n galing]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
