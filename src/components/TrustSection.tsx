import React from 'react';
import { Award, ShieldCheck, MapPin } from 'lucide-react';

/**
 * TrustSection Component
 * Establishes authority by showing credentials and professional affiliations.
 * Contains a specific placeholder for the Architect's official photo.
 */
const TrustSection = () => {
  return (
    <section className="py-20 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Architect Photo Placeholder */}
          <div className="relative group w-full lg:w-1/3 max-w-sm">
            <div className="absolute inset-0 bg-brand-teal rounded-2xl transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="aspect-[3/4] rounded-2xl bg-gray-200 overflow-hidden flex items-center justify-center border-2 border-brand-dark">
              <img 
                src="Picture ni Archi."
                alt="[Architect Photo Here]" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-brand-dark text-white p-4 md:p-6 rounded-lg shadow-xl">
              <p className="font-bold text-lg md:text-xl">[Name ni Archi]</p>
              <p className="text-brand-teal text-xs md:text-sm font-semibold tracking-wider">[Professional Title/s]</p>
            </div>
          </div>

          {/* Trust Content */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Credentials & Expertise</h2>
              <p className="text-gray-600 text-lg">
                [Credentials and Expertise ni Archi.]
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-brand-teal/10 rounded-lg text-brand-teal">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">[CE1]</h4>
                  <p className="text-sm text-gray-500 italic">[Sa'n galing?]</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-brand-teal/10 rounded-lg text-brand-teal">
                  <Award size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">[CE2]</h4>
                  <p className="text-sm text-gray-500 italic">[Sa'n galing?]</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-brand-teal/10 rounded-lg text-brand-teal">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">[CE3]</h4>
                  <p className="text-sm text-gray-500 italic">[Sa'n galing]</p>
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
