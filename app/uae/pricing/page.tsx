'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, Zap, Shield } from 'lucide-react';
import PremiumPricingCard from '@/components/shared/PremiumPricingCard';
import { uaePricing } from '@/lib/data/pricing';

export default function UAEPricingPage() {
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
              UAE Pricing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent, Competitive Pricing
            </h1>
            <p className="text-text-on-dark text-lg max-w-3xl mb-8">
              Competitive pricing tailored to UAE businesses. We provide transparent quotes based on your 
              specific requirements, transaction volume, and free zone or mainland setup. No hidden fees.
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
            {uaePricing.map((tier, index) => (
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
          <p className="text-center text-text-muted text-sm mt-6">
            *All prices exclude 5% UAE VAT
          </p>
        </div>
      </section>

      {/* Free Zone Packages */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Free Zone Specialized Packages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { zone: 'DMCC', price: 'AED 3,999/mo', features: 'DMCC audit compliance, commodity trading accounting' },
              { zone: 'DIFC', price: 'AED 4,499/mo', features: 'DFSA compliance, IFRS financial statements' },
              { zone: 'JAFZA', price: 'AED 3,499/mo', features: 'JAFZA compliance, logistics accounting' },
              { zone: 'ADGM', price: 'AED 4,499/mo', features: 'FSRA compliance, financial services accounting' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-charcoal-200">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.zone}</h3>
                <p className="text-gold-primary font-bold mb-2">{item.price}</p>
                <p className="text-charcoal-600 text-xs">{item.features}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Add-On Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { service: 'CFO Advisory (Part-Time)', price: 'AED 6,999/mo' },
              { service: 'FTA Audit Support', price: 'AED 5,999/project' },
              { service: 'Corporate Tax Planning', price: 'AED 3,999/project' },
              { service: 'ESR & UBO Compliance', price: 'AED 2,499/year' },
              { service: 'Free Zone License Renewal', price: 'AED 1,499/renewal' },
              { service: 'Business Valuation', price: 'AED 7,999/project' },
              { service: 'Due Diligence Support', price: 'AED 4,999/project' },
              { service: 'Software Implementation', price: 'Custom' }
            ].map((item, index) => (
              <div key={index} className="bg-charcoal-50 p-6 rounded-xl border border-charcoal-200">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.service}</h3>
                <p className="text-gold-primary font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Pricing */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Industry-Specific Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Real Estate & Construction',
                description: 'Specialized for property developers and construction companies with VAT on property expertise.',
                highlight: 'Property VAT Specialists'
              },
              {
                industry: 'Technology & Startups',
                description: 'Tailored for tech companies and startups with free zone setup and corporate tax planning.',
                highlight: 'Startup Experts'
              },
              {
                industry: 'Trading & Commodities',
                description: 'Designed for DMCC companies and commodity traders with inventory valuation expertise.',
                highlight: 'DMCC Specialists'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.industry}</h3>
                <p className="text-charcoal-600 text-sm mb-3">{item.description}</p>
                <span className="text-gold-primary text-xs font-semibold">{item.highlight}</span>
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
            Tell us about your UAE business and we'll provide a tailored quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/uae/contact" className="bg-gold-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-secondary transition-colors text-center">
              Request Quote
            </Link>
            <Link href="/uae/contact" className="border border-gold-primary text-gold-primary px-8 py-3 rounded-lg font-semibold hover:bg-gold-primary hover:text-charcoal-950 transition-colors text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
