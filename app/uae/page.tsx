'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { BookOpen, Receipt, FileText, Users, Building2, BarChart3, TrendingUp, CheckCircle, User, Star } from 'lucide-react';
import { uaeServices } from '@/lib/data/uae-services';
import { uaeFAQ } from '@/lib/data/uae-faq';
import { uaeTestimonials } from '@/lib/data/testimonials';
import { uaeStats } from '@/lib/data/stats';
import { uaePricing } from '@/lib/data/pricing';

// Premium components
const PremiumHero = dynamic(() => import('@/components/shared/PremiumHero'), { ssr: true });
const BentoGrid = dynamic(() => import('@/components/shared/BentoGrid'), { ssr: true });
const ScrollytellingSteps = dynamic(() => import('@/components/shared/ScrollytellingSteps'), { ssr: true });
const MarqueeSlider = dynamic(() => import('@/components/shared/MarqueeSlider'), { ssr: true });
const PremiumPricingCard = dynamic(() => import('@/components/shared/PremiumPricingCard'), { ssr: true });
const PremiumAccordion = dynamic(() => import('@/components/shared/PremiumAccordion'), { ssr: true });
const StatsBar = dynamic(() => import('@/components/shared/StatsBar'), { ssr: true });
const CredentialBadge = dynamic(() => import('@/components/shared/CredentialBadge'), { ssr: true });
const ServiceMarquee = dynamic(() => import('@/components/shared/ServiceMarquee'), { ssr: true });

const iconMap: Record<string, any> = {
  BookOpen,
  Receipt,
  FileText,
  Users,
  Building2,
  BarChart3,
  TrendingUp,
  CheckCircle,
  User,
};

export default function UAEHomepage() {
  const tickerItems = [
    'Bookkeeping',
    'VAT Registration & Filing',
    'Corporate Tax 9%',
    'Payroll & WPS',
    'Free Zone Accounting',
    'ESR Reporting',
    'UBO Registration',
    'CFO Advisory',
    'FTA Compliance',
  ];

  const freeZones = [
    'DMCC',
    'DIFC',
    'JAFZA',
    'ADGM',
    'SAIF Zone',
    'RAK ICC',
    'KIZAD',
    'Dubai Silicon Oasis',
    'Abu Dhabi Mainland',
    'Dubai Mainland',
    'Sharjah',
    'Northern Emirates',
  ];

  return (
    <div>
      {/* Hero Section */}
      <PremiumHero
        title="Financial Clarity for UAE SMEs — Across All 7 Emirates"
        subtitle="UAE MARKET"
        description="Expert VAT, corporate tax, payroll, and CFO advisory built for mainland and free zone businesses across the UAE."
        ctaText="Book Free Consultation"
        ctaHref="/uae/contact"
        backgroundVideo="/ARMH&CO video.mp4"
      />

      {/* Credential Strip */}
      <section className="bg-navy-primary py-4 md:py-5 px-5 md:px-4 shadow-2xl relative z-20">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-gold-primary tracking-[0.15em] text-[10px] font-semibold uppercase mb-2 text-center">
            Regulated & Certified
          </p>
          <CredentialBadge variant="dark" />
        </div>
      </section>

      {/* Why ARMH & Co */}
      <section className="py-16 md:py-20 lg:py-24 px-5 md:px-4 bg-white-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="font-sans text-navy-primary tracking-[0.15em] text-xs font-medium uppercase mb-2 text-center"
          >
            Why ARMH & Co
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-navy-primary mb-8 md:mb-12 text-center tracking-tight"
          >
            Built for UAE Businesses
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              {
                number: '01',
                title: 'Expert FTA Compliance',
                description: 'We manage all FTA correspondence, filing, and audit support so your business stays fully compliant with UAE tax regulations.'
              },
              {
                number: '02',
                title: 'Deep UAE Regulatory Expertise',
                description: 'From Dubai Mainland to DMCC, DIFC, ADGM, JAFZA and all major free zones — we know every zone\'s specific requirements.'
              },
              {
                number: '03',
                title: 'Zero Penalty Track Record',
                description: 'Three consecutive years with zero FTA penalties across all clients. That\'s the standard we hold ourselves — and your business — to.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white-primary border border-border-light rounded-sm p-6 md:p-8 shadow-subtle hover:shadow-medium transition-all"
              >
                <div className="font-sans text-navy-primary text-4xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight">{feature.number}</div>
                <h3 className="font-sans text-lg md:text-xl font-semibold text-navy-primary mb-2 md:mb-3 tracking-tight">{feature.title}</h3>
                <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* UAE Compliance Coverage */}
      <section id="services" className="py-12 md:py-16 lg:py-20 px-5 md:px-4 bg-white-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="font-sans text-navy-primary tracking-[0.15em] text-xs font-medium uppercase mb-2 text-center"
          >
            Staying Ahead of Compliance
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-navy-primary mb-8 md:mb-12 text-center tracking-tight"
          >
            UAE Compliance Coverage
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              {
                title: 'VAT — 5% Standard Rate',
                description: 'Active since Jan 2018. Mandatory above AED 375,000 taxable supplies.'
              },
              {
                title: 'Corporate Tax — 9%',
                description: 'Active from June 2023 FY. First AED 375,000 at 0%. Free zone qualifying income at 0%.'
              },
              {
                title: 'Economic Substance Regulations (ESR)',
                description: 'Annual notifications and reports for regulated sector entities.'
              },
              {
                title: 'Ultimate Beneficial Ownership (UBO)',
                description: 'Mandatory register submissions for all UAE-incorporated entities.'
              }
            ].map((compliance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: index * 0.1 }}
                className="bg-white-primary border border-border-light rounded-sm p-4 md:p-6 lg:p-8"
              >
                <h3 className="font-sans text-lg md:text-xl font-semibold text-navy-primary mb-2 tracking-tight">{compliance.title}</h3>
                <p className="font-sans text-text-secondary text-sm md:text-base">{compliance.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 lg:py-24 px-5 md:px-4 bg-white-primary">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="font-sans text-navy-primary tracking-[0.15em] text-xs font-medium uppercase mb-2 text-center"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-navy-primary mb-8 md:mb-12 text-center tracking-tight"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 auto-rows-fr">
            {uaeServices.map((service) => {
              const Icon = iconMap[service.icon] || BookOpen;
              return (
                <BentoGrid
                  key={service.id}
                  icon={Icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  video={service.video}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Free Zone Coverage */}
      <section className="py-16 md:py-20 px-4 bg-navy-primary">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-gold-primary tracking-[0.2em] text-xs font-semibold uppercase mb-2 text-center">
            Free Zone Coverage
          </p>
          <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 text-center tracking-tight">
            We Serve Every Major UAE Free Zone
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {freeZones.map((zone, index) => (
              <span
                key={index}
                className="font-sans bg-gold-primary/10 text-gold-primary px-4 py-2 rounded-full text-sm md:text-base font-medium border border-gold-primary/20"
              >
                {zone}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-navy-secondary/60 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="font-sans text-lg font-semibold text-white mb-2 tracking-tight">Dubai Mainland & Free Zones</h3>
              <p className="font-sans text-text-muted text-sm md:text-base">
                Complete accounting and compliance for Dubai Mainland businesses and all Dubai free zones including DMCC, DIFC, JAFZA, and Dubai Silicon Oasis.
              </p>
            </div>
            <div className="bg-navy-secondary/60 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="font-sans text-lg font-semibold text-white mb-2 tracking-tight">Abu Dhabi & Northern Emirates</h3>
              <p className="font-sans text-text-muted text-sm md:text-base">
                Full-service accounting for Abu Dhabi Mainland, ADGM, and all Northern Emirates including Sharjah, RAK, and Fujairah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar stats={uaeStats} />

      {/* How It Works */}
      <ScrollytellingSteps
        title="5-Step Onboarding Process"
        steps={[
          {
            number: 1,
            title: 'Free Consultation',
            description: 'Schedule a free 30-minute consultation to discuss your business needs and UAE compliance requirements.'
          },
          {
            number: 2,
            title: 'Tailored Proposal (24hr)',
            description: 'Receive a customized proposal within 24 hours with transparent pricing and service scope.'
          },
          {
            number: 3,
            title: 'Document Handover',
            description: 'Share your business documents securely. We handle all FTA and free zone registrations.'
          },
          {
            number: 4,
            title: 'System Setup',
            description: 'We set up your accounting systems, integrate with your preferred software, and onboard your team.'
          },
          {
            number: 5,
            title: 'Go Live',
            description: 'Start your compliance journey. Up and running in as little as 5 business days.'
          }
        ]}
      />

      {/* Software */}
      <section className="py-12 md:py-16 px-5 md:px-4 bg-navy-primary">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-gold-primary tracking-[0.2em] text-xs font-semibold uppercase mb-8 text-center">
            Software We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-text-on-dark-muted font-sans font-medium text-sm md:text-base">
            <span>Xero</span>
            <span>QuickBooks</span>
            <span>Zoho Books</span>
            <span>Tally ERP</span>
            <span>Sage</span>
            <span>Dext</span>
            <span>A2X</span>
            <span>Hubdoc</span>
            <span>ADP</span>
            <span>Gusto</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <MarqueeSlider testimonials={uaeTestimonials} />

      {/* Pricing */}
      <section className="py-12 md:py-16 lg:py-20 px-5 md:px-4 bg-white-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="font-sans text-navy-primary tracking-[0.15em] text-xs font-medium uppercase mb-2 text-center"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-navy-primary mb-8 md:mb-12 text-center tracking-tight"
          >
            Transparent Pricing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {uaePricing.map((tier, index) => (
              <PremiumPricingCard
                key={index}
                title={tier.tier}
                price={tier.price}
                description={tier.note}
                features={tier.features}
                ctaText={tier.ctaText}
                ctaHref={tier.ctaHref}
                featured={tier.highlighted}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 px-5 md:px-4 bg-white-secondary">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="font-sans text-navy-primary tracking-[0.15em] text-xs font-medium uppercase mb-2 text-center"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-navy-primary mb-8 md:mb-12 text-center tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <PremiumAccordion items={uaeFAQ} />
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 md:py-16 lg:py-20 px-5 md:px-4 bg-white-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
            className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-navy-primary mb-3 md:mb-4 tracking-tight leading-[1.5]"
          >
            Ready to take control of your UAE financial compliance?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-sans text-text-secondary mb-6 md:mb-8 leading-relaxed"
          >
            Book a free 30-minute consultation — no obligation, no sales pressure.
          </motion.p>
          <Link href="/uae/contact">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="font-sans bg-gold-primary hover:bg-gold-secondary text-white px-6 sm:px-8 py-3 min-h-[48px] rounded-lg font-semibold transition-colors tracking-wide"
            >
              Book Free Call →
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
