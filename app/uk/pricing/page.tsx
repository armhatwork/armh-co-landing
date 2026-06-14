'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, Zap, Shield } from 'lucide-react';
import PremiumPricingCard from '@/components/shared/PremiumPricingCard';
import { ukPricing } from '@/lib/data/pricing';

export default function UKPricingPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-charcoal-950 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gold-primary text-sm font-semibold uppercase tracking-wider mb-4">
              UK Pricing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent, Custom Pricing
            </h1>
            <p className="text-text-on-dark text-lg max-w-3xl mb-8">
              Custom pricing tailored to your business needs. We provide transparent quotes based on your 
              specific requirements, transaction volume, and complexity. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Packages */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Comprehensive Accounting Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {ukPricing.map((tier, index) => (
              <PremiumPricingCard
                key={tier.tier}
                title={tier.tier}
                price={tier.price}
                description={tier.note}
                features={tier.features}
                ctaText={tier.ctaText}
                ctaHref={tier.ctaHref}
                featured={tier.highlighted}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Add-On Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { service: 'R&D Tax Credits', price: 'Custom' },
              { service: 'HMRC Investigation Support', price: 'Custom' },
              { service: 'International Tax Advisory', price: 'Custom' },
              { service: 'CFO Advisory (Part-Time)', price: 'Custom' },
              { service: 'Business Valuation', price: 'Custom' },
              { service: 'Due Diligence Support', price: 'Custom' },
              { service: 'Grant Applications', price: 'Custom' },
              { service: 'Software Implementation', price: 'Custom' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-charcoal-200">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.service}</h3>
                <p className="text-gold-primary font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Pricing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Industry-Specific Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Technology & SaaS',
                description: 'Specialized pricing for tech companies including R&D credits, EIS/SEIS planning, and investor reporting.',
                highlight: 'R&D Tax Credits Included'
              },
              {
                industry: 'Real Estate & Property',
                description: 'Tailored for property developers including capital allowances, VAT on property, and portfolio accounting.',
                highlight: 'Capital Allowances Expertise'
              },
              {
                industry: 'Professional Services',
                description: 'Designed for consulting firms, legal practices, and professional partnerships with LLP compliance.',
                highlight: 'Partnership Specialists'
              }
            ].map((item, index) => (
              <div key={index} className="bg-charcoal-50 p-6 rounded-xl">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.industry}</h3>
                <p className="text-charcoal-600 text-sm mb-3">{item.description}</p>
                <span className="text-gold-primary text-xs font-semibold">{item.highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom Pricing */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Why Custom Pricing?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tailored to Your Needs',
                description: 'Every business is unique. We assess your specific requirements and provide pricing that reflects your actual needs.'
              },
              {
                title: 'Transparent & Fair',
                description: "No hidden fees or surprise charges. You know exactly what you're paying for and what's included."
              },
              {
                title: 'Scalable Solutions',
                description: 'Pricing scales with your business. As you grow, your accounting package can grow with you.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.title}</h3>
                <p className="text-charcoal-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-charcoal-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Your Custom Quote
          </h2>
          <p className="text-text-on-dark mb-8">
            Tell us about your business and we'll provide a tailored quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/uk/contact" className="bg-gold-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-secondary transition-colors text-center">
              Request Quote
            </Link>
            <Link href="/uk/contact" className="border border-gold-primary text-gold-primary px-8 py-3 rounded-lg font-semibold hover:bg-gold-primary hover:text-charcoal-950 transition-colors text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
