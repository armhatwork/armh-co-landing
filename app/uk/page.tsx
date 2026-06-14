'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { CheckCircle, BookOpen, Receipt, FileText, Users, User, FlaskConical, Building2, Globe, BarChart3, TrendingUp, Star, ChevronRight } from 'lucide-react';
import { ukServices } from '@/lib/data/uk-services';
import { ukFAQ } from '@/lib/data/uk-faq';
import { ukTestimonials } from '@/lib/data/testimonials';
import { ukStats } from '@/lib/data/stats';
import { ukPricing } from '@/lib/data/pricing';

// Premium components - lazy loaded for better performance
const PremiumHero = dynamic(() => import('@/components/shared/PremiumHero'), { ssr: false, loading: () => <div className="min-h-[100dvh] bg-white-primary animate-pulse" /> });
const BentoGrid = dynamic(() => import('@/components/shared/BentoGrid'), { ssr: false });
const ScrollytellingSteps = dynamic(() => import('@/components/shared/ScrollytellingSteps'), { ssr: false });
const MarqueeSlider = dynamic(() => import('@/components/shared/MarqueeSlider'), { ssr: false });
const PricingSection = dynamic(() => import('@/components/shared/PricingSection'), { ssr: false });
const PremiumAccordion = dynamic(() => import('@/components/shared/PremiumAccordion'), { ssr: false });
const StatsBar = dynamic(() => import('@/components/shared/StatsBar'), { ssr: false });
const CredentialBadge = dynamic(() => import('@/components/shared/CredentialBadge'), { ssr: false });
const ServiceMarquee = dynamic(() => import('@/components/shared/ServiceMarquee'), { ssr: false });

const iconMap: Record<string, any> = {
  BookOpen,
  Receipt,
  FileText,
  Users,
  User,
  FlaskConical,
  Building2,
  CheckCircle,
  Globe,
  BarChart3,
  TrendingUp,
};

export default function UKHomepage() {
  const tickerItems = [
    'Bookkeeping',
    'VAT Returns',
    'Corporation Tax',
    'Payroll',
    'Self Assessment',
    'R&D Tax Credits',
    'Year-End Accounts',
    'Companies House',
    'HMRC Compliance',
    'MTD Ready',
  ];

  return (
    <div>
      {/* Hero Section */}
      <PremiumHero
        title="Accounting & Compliance Done Right — From Day One"
        subtitle="UK MARKET"
        description="Expert bookkeeping, VAT, corporation tax, and payroll for UK SMEs — with proactive HMRC compliance and fixed monthly pricing."
        ctaText="Book Free Consultation"
        ctaHref="/uk/contact"
        backgroundVideo="/UK MAKRET.mp4"
      />

      {/* Credential Strip */}
      <section className="bg-navy-primary py-4 md:py-5 px-5 md:px-4 shadow-2xl relative z-20">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-gold-primary tracking-[0.2em] text-[10px] font-semibold uppercase mb-2 text-center">
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
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.3 }}
            className="font-sans text-navy-primary tracking-[0.15em] text-xs font-medium uppercase mb-2 text-center"
          >
            Why ARMH & Co
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-navy-primary mb-8 md:mb-12 text-center tracking-tight"
          >
            Built for UK SMEs
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ staggerChildren: 0.05 }}
          >
            {[
              {
                number: '01',
                title: 'ACCA Qualified',
                description: 'Your accounts handled by chartered professionals with real UK SME experience — not automated tools or offshore junior staff.'
              },
              {
                number: '02',
                title: 'Proactive Deadline Management',
                description: 'We track every HMRC and Companies House deadline and notify you well in advance. Never miss a filing date again.'
              },
              {
                number: '03',
                title: 'Fixed Monthly Pricing',
                description: 'Transparent packages with no hidden fees. You know exactly what you pay from incorporation day — no year-end surprises.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
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

      {/* Services Grid */}
      <section id="services" className="py-16 md:py-20 lg:py-24 px-5 md:px-4 bg-white-primary">
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
            {ukServices.map((service) => {
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

      {/* Stats Bar */}
      <StatsBar stats={ukStats} market="uk" />

      {/* How It Works */}
      <ScrollytellingSteps
        title="Simple 4-Step Process"
        steps={[
          {
            number: 1,
            title: 'Free Consultation',
            description: 'Schedule a free 30-minute consultation to discuss your business needs and compliance requirements.'
          },
          {
            number: 2,
            title: 'System Setup & Onboarding',
            description: 'We set up your accounting systems, integrate with your preferred software, and onboard your team.'
          },
          {
            number: 3,
            title: 'We Handle All Filings',
            description: 'Our team manages all HMRC and Companies House filings, ensuring you never miss a deadline.'
          },
          {
            number: 4,
            title: 'Monthly Reporting',
            description: 'Receive comprehensive monthly reports with insights to help you make informed business decisions.'
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
            <span>FreeAgent</span>
            <span>Sage</span>
            <span>HMRC MTD Portal</span>
            <span>Dext</span>
            <span>Hubdoc</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <MarqueeSlider testimonials={ukTestimonials} />

      <PricingSection tiers={ukPricing} market="uk" />

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
          <PremiumAccordion items={ukFAQ} />
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
            Just incorporated? Let's talk before your first deadline.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.1 }}
            className="font-sans text-text-secondary mb-6 md:mb-8 leading-relaxed"
          >
            Free 30-minute consultation — no commitment, no jargon.
          </motion.p>
          <Link href="/uk/contact">
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
