"use client";

import React, { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Image from 'next/image';

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
        // We include the turnstileToken alongside the rest of the form data
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
    <footer id="contact" className="bg-brand-dark text-white pt-24 pb-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's build something <br className="hidden md:block" /> extraordinary.</h2>
              <p className="text-gray-400 text-lg max-w-md">
                Ready to start your next project? Get in touch with us for a consultation and let's bring your vision to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-teal transition-colors">
                  <Mail className="text-brand-teal group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Us</p>
                  <a href="mailto:hello@rcad.com" className="text-lg font-medium hover:text-brand-teal transition-colors">[email dito]</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-teal transition-colors">
                  <Phone className="text-brand-teal group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Call Us</p>
                  <a href="tel:+1234567890" className="text-lg font-medium hover:text-brand-teal transition-colors">[Number dito]</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-teal transition-colors">
                  <MapPin className="text-brand-teal group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Office</p>
                  <p className="text-lg font-medium">[Saan kayo located?]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jose Riz."
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jriz@gmail.com"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-dark uppercase tracking-wider">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all resize-none"
                />
              </div>

              {/* Turnstile Widget placed right before the submit button */}
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={(token) => setTurnstileToken(token)}
              />

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand-teal hover:bg-brand-accent text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-teal/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>Sending... <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" /></>
                ) : (
                  <>Send Message <Send size={20} /></>
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
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-medium">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded overflow-hidden bg-brand-dark">
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
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-teal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-teal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;