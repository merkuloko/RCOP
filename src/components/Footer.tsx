"use client";

import React, { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

/**
 * Footer & ContactSection Component
 * Provides a lead-capture form and final brand presence.
 * Form is mapped to the dark teal color palette.
 */
const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Turnstile state added here
  const [turnstileToken, setTurnstileToken] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="bg-brand-dark text-white pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-12 md:mb-20">
          {/* Contact Information */}
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Let's build something <br className="hidden md:block" /> extraordinary.</h2>
              <p className="text-gray-400 text-base md:text-lg max-w-md">
                Ready to start your next project? Get in touch with us for a consultation and let's bring your vision to life.
              </p>
            </div>

            <div className="space-y-5 md:space-y-6">

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-teal transition-colors shrink-0">
                <FaFacebook className="h-5 w-5 md:h-6 md:w-6 text-brand-teal group-hover:text-white" />
              </div>

              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">
                  Visit our Facebook Page
                </p>

                <a
                  href="[Link sa FB Page]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg font-medium hover:text-brand-teal transition-colors"
                >
                  [FB Page Name]
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-teal transition-colors shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-teal group-hover:text-white" />
              </div>

              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">
                  Call Us
                </p>

                <a
                  href="tel:+1234567890"
                  className="text-base md:text-lg font-medium hover:text-brand-teal transition-colors"
                >
                  [Number dito]
                </a>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-teal transition-colors shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-teal group-hover:text-white" />
              </div>

              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">
                  Office
                </p>

                <p className="text-base md:text-lg font-medium">
                  [Saan kayo located?]
                </p>
              </div>
            </div>

           </div>
            {/* Close Contact Information */}
            </div>
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[10px] md:text-sm font-bold text-brand-dark uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jose Riz."
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm md:text-base text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[10px] md:text-sm font-bold text-brand-dark uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jriz@gmail.com"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm md:text-base text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[10px] md:text-sm font-bold text-brand-dark uppercase tracking-wider">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm md:text-base text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all resize-none"
                />
              </div>

              {/* Turnstile Widget */}
              <div className="overflow-hidden flex justify-center sm:justify-start">
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={(token) => setTurnstileToken(token)}
                  options={{ size: 'normal' }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand-teal hover:bg-brand-accent text-white font-bold py-3.5 md:py-4 rounded-xl shadow-lg shadow-brand-teal/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
              >
                {status === 'loading' ? (
                  <>Sending... <div className="animate-spin h-4 w-4 md:h-5 md:w-5 border-2 border-white border-t-transparent rounded-full" /></>
                ) : (
                  <>Send Message <Send size={18} className="md:w-5 md:h-5" /></>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-600 font-medium justify-center animate-in fade-in slide-in-from-top-1">
                  <CheckCircle size={20} />
                  Message sent successfully!
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 font-medium justify-center animate-in fade-in slide-in-from-top-1">
                  <AlertCircle size={20} />
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-gray-500 font-medium text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded overflow-hidden bg-brand-dark shrink-0">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span>© 2026 [Company Name]. All rights reserved.</span>
          </div>
          <div className="flex gap-6 md:gap-8">
            <Link
              href="/privacy-policy"
              className="hover:text-brand-teal transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="hover:text-brand-teal transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;