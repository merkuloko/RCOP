import React from 'react';
import { FileText, CheckCircle, GraduationCap } from 'lucide-react';

/**
 * AboutSection Component
 * Includes placeholders for academic and professional certifications as requested.
 */
const AboutSection = () => {
  const achievements = [
    { title: "[Anong Achievement?]", year: "[Anong Year?]" },
    { title: "[Anong Achievement?]", year: "[Anong Year?]" },
    { title: "[Anong Achievement?]", year: "[Anong Year?]" },
    { title: "[Anong Achievement?]", year: "[Anong Year?]" },
    { title: "[Anong Achievement?]", year: "[Anong Year?]" },
  ];

  return (
    <section id="about" className="py-24 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2 space-y-8">
            <div>
              <h2 className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4">Ar. Profile</h2>
              <h3 className="text-4xl font-bold text-brand-dark mb-6">[Pangalan ni Ar.]</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
               [Describe si Ar. dito]
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-brand-dark flex items-center gap-2">
                <GraduationCap className="text-brand-teal" /> Achievements & Accreditations
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle size={16} className="text-brand-teal shrink-0" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Diploma and Certificate Placeholders */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center aspect-square hover:border-brand-teal transition-colors group">
              <FileText size={48} className="text-gray-300 mb-4 group-hover:text-brand-teal transition-colors" />
              <p className="text-gray-500 font-medium">[Insert Diploma/Certification Dito]</p>
              <p className="text-xs text-gray-400 mt-2">[Sa'n galing yung Dimploma/Certificate?]</p>
            </div>
            
            <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center aspect-square hover:border-brand-teal transition-colors group">
              <FileText size={48} className="text-gray-300 mb-4 group-hover:text-brand-teal transition-colors" />
              <p className="text-gray-500 font-medium">[Insert Diploma/Certification Dito]</p>
              <p className="text-xs text-gray-400 mt-2">[Sa'n galing yung Dimploma/Certificate?]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
