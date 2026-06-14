'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  market: 'uk' | 'uae';
}

const Footer = ({ market }: FooterProps) => {
  const contactEmail = market === 'uk' ? 'uk@armhco.com' : 'uae@armhco.com';
  const address = market === 'uk'
    ? 'London, United Kingdom'
    : 'JLT Cluster M, Dubai, UAE';
  const phoneNumber = market === 'uk' ? '+441234567890' : '+971412345678';
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <footer className="bg-charcoal-950 text-white pb-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 tracking-tight">ARMH & Co</h3>
            <p className="font-sans text-text-on-dark-muted text-sm mb-6 leading-relaxed">
              Compliance Specialist Accountants & Tax Advisors
            </p>
            <div className="flex flex-wrap gap-3 text-text-on-dark-muted text-xs font-sans">
              <span>Xero</span>
              <span className="text-gold-primary">·</span>
              <span>QuickBooks</span>
              <span className="text-gold-primary">·</span>
              <span>SECP</span>
            </div>
          </div>

          <div>
            <h4 className="font-sans tracking-[0.25em] text-xs font-semibold uppercase text-gold-primary mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-text-on-dark-muted font-sans">
              <li><Link href={`/${market}/about`} className="hover:text-gold-primary transition-colors">About Us</Link></li>
              <li><Link href={`/${market}/case-studies`} className="hover:text-gold-primary transition-colors">Case Studies</Link></li>
              <li><Link href={`/${market}/resources`} className="hover:text-gold-primary transition-colors">Resources</Link></li>
              <li><Link href={`/${market}/faq`} className="hover:text-gold-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans tracking-[0.25em] text-xs font-semibold uppercase text-gold-primary mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-text-on-dark-muted font-sans">
              {market === 'uk' ? (
                <>
                  <li><Link href="/uk/bookkeeping" className="hover:text-gold-primary transition-colors">Bookkeeping</Link></li>
                  <li><Link href="/uk/vat-returns" className="hover:text-gold-primary transition-colors">VAT Returns</Link></li>
                  <li><Link href="/uk/corporation-tax" className="hover:text-gold-primary transition-colors">Corporation Tax</Link></li>
                  <li><Link href="/uk/payroll" className="hover:text-gold-primary transition-colors">Payroll</Link></li>
                </>
              ) : (
                <>
                  <li><Link href="/uae/bookkeeping" className="hover:text-gold-primary transition-colors">Bookkeeping</Link></li>
                  <li><Link href="/uae/vat-compliance" className="hover:text-gold-primary transition-colors">VAT Compliance</Link></li>
                  <li><Link href="/uae/corporate-tax" className="hover:text-gold-primary transition-colors">Corporate Tax</Link></li>
                  <li><Link href="/uae/payroll-wps" className="hover:text-gold-primary transition-colors">Payroll & WPS</Link></li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-sans tracking-[0.25em] text-xs font-semibold uppercase text-gold-primary mb-6">Quick Contact</h4>
            {isSubmitted ? (
              <div className="bg-gold-subtle border border-gold-primary/30 rounded-lg p-4 text-center">
                <p className="text-gold-primary font-medium">Message sent successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-charcoal-900 border border-white/10 text-white placeholder-charcoal-500 text-base focus:outline-none focus:border-gold-primary/50 transition-all duration-300 focus:shadow-[0_0_12px_rgba(201,162,39,0.1)] min-h-[48px]"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-charcoal-900 border border-white/10 text-white placeholder-charcoal-500 text-base focus:outline-none focus:border-gold-primary/50 transition-all duration-300 focus:shadow-[0_0_12px_rgba(201,162,39,0.1)] min-h-[48px]"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-charcoal-900 border border-white/10 text-white placeholder-charcoal-500 text-base focus:outline-none focus:border-gold-primary/50 transition-all duration-300 focus:shadow-[0_0_12px_rgba(201,162,39,0.1)] resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gold-primary text-charcoal-950 px-4 py-3 min-h-[48px] rounded-lg font-semibold hover:bg-gold-secondary active:scale-[0.98] hover:shadow-[0_4px_20px_rgba(201,162,39,0.25)] transition-all duration-300 text-base tracking-wide touch-manipulation"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-text-on-dark-subtle text-sm">
            © 2025 ARMH & Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-on-dark-subtle font-sans">
            <Link href="/privacy" className="hover:text-gold-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
