"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Briefcase, User, Grid, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar Component
 * Renders the main navigation bar with the brand logo and scroll-to links.
 * Features a mobile responsive menu and scroll-aware background styling.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Services', href: '#services', icon: Briefcase },
    { name: 'About', href: '#about', icon: User },
    { name: 'Portfolio', href: '#portfolio', icon: Grid },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-4",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo Placeholder as requested */}
        <Link href="#home" className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-brand-dark flex items-center justify-center rounded text-white font-bold text-xl">
            [Logo dito]
          </div>
          <div className="flex flex-col">
            <span className={cn("font-bold text-lg leading-none", scrolled ? "text-brand-dark" : "text-white")}>[Company Name Dito]</span>
            <span className={cn("text-xs", scrolled ? "text-brand-teal" : "text-gray-200")}>[Pangalan ni Archi.]</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium hover:text-brand-teal transition-colors",
                scrolled ? "text-gray-700" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={cn(scrolled ? "text-brand-dark" : "text-white")}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden z-50 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-4 text-gray-800 hover:text-brand-teal font-semibold py-4 px-2 border-b border-gray-50 last:border-0 transition-colors"
                  >
                    <link.icon size={22} className="text-brand-teal" />
                    <span className="text-lg">{link.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
