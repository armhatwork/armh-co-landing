'use client';


import ServiceHero from '@/components/shared/ServiceHero';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, TrendingUp, Users, FileText, ArrowRight, Target } from 'lucide-react';

export default function UAECFOAdvisoryPage() {
  return (
    <div className="min-h-screen bg-off-white">
            <ServiceHero
        eyebrow="UAE Strategic Advisory"
        title="CFO Advisory (Part-Time)"
        description="Strategic financial guidance from experienced CFOs on a flexible, part-time basis. Get senior-level financial expertise without the cost of a full-time executive."
        videoSrc="/service-videos/8348900-uhd_3840_2160_25fps.mp4"
        primaryCta={{ label: 'Get a Quote', href: '/uae/contact' }}
        secondaryCta={{ label: 'Book Consultation', href: '/uae/contact' }}
      />

      {/* Overview Section */}
      <section className="py-20 px-4 bg-gold-faint">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal-900 mb-6">
                Senior-Level Expertise, Fractional Cost
              </h2>
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                Many growing businesses need CFO-level strategic guidance but cannot justify the cost of a full-time 
                executive. Our part-time CFO service provides you with experienced financial leaders on a flexible 
                basis, giving you access to senior expertise when you need it.
              </p>
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                Our CFO advisors have decades of combined experience across various industries in the UAE and 
                internationally. They understand the unique challenges of UAE businesses and provide practical, 
                actionable strategic guidance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gold-primary/20">
              <h3 className="font-semibold text-charcoal-900 mb-4">Ideal For</h3>
              <ul className="space-y-3">
                {[
                  'Growing SMEs needing strategic guidance',
                  'Companies preparing for investment or exit',
                  'Businesses entering new markets',
                  'Organizations requiring financial restructuring',
                  'Companies needing board-level financial representation',
                  'Businesses with complex financial operations'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Our CFO Advisory Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Strategic Planning',
                description: 'Development and execution of financial strategies aligned with business objectives and market opportunities.'
              },
              {
                icon: FileText,
                title: 'Financial Modeling',
                description: 'Complex financial modeling for business planning, investment analysis, M&A, and scenario planning.'
              },
              {
                icon: Users,
                title: 'Board Representation',
                description: 'Professional representation at board meetings providing financial insights and strategic recommendations.'
              },
              {
                icon: Shield,
                title: 'Risk Management',
                description: 'Identification and mitigation of financial risks including liquidity, market, and operational risks.'
              },
              {
                icon: Target,
                title: 'Performance Optimization',
                description: 'Analysis of business performance and implementation of strategies to improve profitability and efficiency.'
              },
              {
                icon: Clock,
                title: 'Fundraising Support',
                description: 'Assistance with fundraising including investor presentations, due diligence support, and deal negotiation.'
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-charcoal-50 p-6 rounded-xl"
                >
                  <Icon className="w-10 h-10 text-gold-primary mb-4" />
                  <h3 className="font-semibold text-charcoal-900 mb-2">{service.title}</h3>
                  <p className="text-charcoal-600 text-sm">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Flexible Engagement Models
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                model: 'Monthly Retainer',
                description: 'Fixed monthly retainer for ongoing advisory with regular meetings and continuous support.',
                hours: 'Flexible hours per month',
                bestFor: 'Ongoing strategic guidance'
              },
              {
                model: 'Project-Based',
                description: 'Fixed fee for specific projects such as fundraising, financial restructuring, or M&A support.',
                hours: 'Project duration',
                bestFor: 'Specific initiatives'
              },
              {
                model: 'Ad-Hoc',
                description: 'Pay-as-you-go for specific advisory needs without long-term commitment.',
                hours: 'Hourly billing',
                bestFor: 'Occasional advisory needs'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-charcoal-200">
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.model}</h3>
                <p className="text-charcoal-600 text-sm mb-4">{item.description}</p>
                <div className="space-y-2 text-xs">
                  <span className="text-gold-primary"><strong>Hours:</strong> {item.hours}</span>
                  <br />
                  <span className="text-gold-primary"><strong>Best For:</strong> {item.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                tier: 'Advisory',
                price: 'AED 4,999/mo',
                description: 'For businesses requiring monthly CFO advisory',
                features: [
                  'Monthly strategy calls',
                  'Financial review meetings',
                  'Strategic planning support',
                  'Board meeting attendance',
                  'Email support'
                ]
              },
              {
                tier: 'Strategic',
                price: 'AED 8,999/mo',
                description: 'For businesses requiring comprehensive CFO support',
                features: [
                  'Everything in Advisory',
                  'Financial modeling',
                  'Fundraising support',
                  'Investor presentations',
                  'Priority support',
                  'Weekly check-ins'
                ],
                highlighted: true
              },
              {
                tier: 'Executive',
                price: 'AED 14,999/mo',
                description: 'For businesses requiring full-time equivalent support',
                features: [
                  'Everything in Strategic',
                  'On-site presence as needed',
                  'Team leadership',
                  'M&A support',
                  '24/7 availability',
                  'Dedicated CFO advisor'
                ]
              }
            ].map((tier, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl ${tier.highlighted ? 'border-2 border-gold-primary' : 'border border-charcoal-200'}`}
              >
                {tier.highlighted && (
                  <span className="bg-gold-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-charcoal-900 mt-4 mb-2">{tier.tier}</h3>
                <p className="text-3xl font-bold text-gold-primary mb-2">{tier.price}</p>
                <p className="text-charcoal-600 text-sm mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold-primary" />
                      <span className="text-charcoal-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-charcoal-900 text-white py-3 rounded-lg font-semibold hover:bg-charcoal-800 transition-colors">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-text-muted text-sm mt-6">
            *All prices exclude 5% UAE VAT
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'How much time does a part-time CFO dedicate?',
                answer: 'This depends on your needs. Our engagements range from 5-10 hours per month for advisory support to 20+ hours for strategic projects. We customize the engagement to your requirements.'
              },
              {
                question: 'What qualifications do your CFO advisors have?',
                answer: 'Our CFO advisors have extensive experience including CFO roles at multinational corporations, Big 4 background, and UAE market expertise. They hold professional qualifications including ACCA, CA, CPA, and CFA.'
              },
              {
                question: 'Can you help with fundraising?',
                answer: 'Yes. We have extensive experience helping UAE businesses raise capital from VCs, private equity, and strategic investors. We prepare investor materials, support due diligence, and assist with deal negotiation.'
              },
              {
                question: 'Do you work with specific industries?',
                answer: 'We have experience across all major UAE industries including technology, real estate, healthcare, retail, manufacturing, and professional services. Our advisors have sector-specific expertise.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold text-charcoal-900 mb-2">{faq.question}</h3>
                <p className="text-charcoal-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-charcoal-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Strategic Financial Leadership
          </h2>
          <p className="text-text-on-dark mb-8">
            Get senior-level financial expertise on a flexible, cost-effective basis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-secondary transition-colors">
              Book Free Consultation
            </button>
            <Link href="/uae/contact" className="border border-gold-primary text-gold-primary px-8 py-3 rounded-lg font-semibold hover:bg-gold-primary hover:text-charcoal-950 transition-colors text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
