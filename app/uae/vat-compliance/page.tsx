'use client';


import ServiceHero from '@/components/shared/ServiceHero';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, Receipt, FileText, AlertCircle, ArrowRight, Database } from 'lucide-react';

export default function UAEVATCompliancePage() {
  return (
    <div className="min-h-screen bg-off-white">
            <ServiceHero
        eyebrow="UAE VAT Services"
        title="VAT Registration & Filing"
        description="Complete VAT registration, periodic filing, and FTA correspondence management. Our FTA-registered tax agents ensure full compliance with UAE VAT regulations."
        videoSrc="/service-videos/6266262-uhd_3840_2160_25fps.mp4"
        primaryCta={{ label: 'Get a Quote', href: '/uae/contact' }}
        secondaryCta={{ label: 'Book Consultation', href: '/uae/contact' }}
      />

      {/* VAT Overview Section */}
      <section className="py-20 px-4 bg-gold-faint">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
                UAE VAT Compliance
              </h2>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                The UAE introduced VAT at 5% in January 2018. Businesses with taxable supplies exceeding AED 375,000 
                per year must register for VAT. Our FTA-registered tax agents handle all aspects of VAT compliance 
                including registration, filing, and correspondence with the Federal Tax Authority.
              </p>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                We ensure your business remains compliant with all VAT regulations, avoiding penalties and ensuring 
                smooth operations. Our team has extensive experience with VAT across all Emirates and free zones.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gold-primary/20">
              <h3 className="font-semibold text-charcoal-900 mb-4">VAT Registration Thresholds</h3>
              <ul className="space-y-3">
                {[
                  'Mandatory registration: AED 375,000+ taxable supplies',
                  'Voluntary registration: AED 187,500+ taxable supplies',
                  'Registration deadline: 30 days after threshold reached',
                  'VAT rate: 5% standard rate',
                  'Zero-rated supplies: Exports, international transport, certain healthcare',
                  'Exempt supplies: Residential property, certain financial services'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-12 text-center tracking-tight">
            Our VAT Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Receipt,
                title: 'VAT Registration',
                description: 'Complete VAT registration process including threshold assessment, application submission, and VAT certificate issuance.'
              },
              {
                icon: Database,
                title: 'VAT Return Filing',
                description: 'Preparation and filing of periodic VAT returns with accurate calculations and proper documentation.'
              },
              {
                icon: Shield,
                title: 'FTA Correspondence',
                description: 'Handling all FTA correspondence including information requests, clarifications, and audit responses.'
              },
              {
                icon: AlertCircle,
                title: 'VAT Audit Support',
                description: 'Full support during FTA VAT audits including document preparation and representation.'
              },
              {
                icon: FileText,
                title: 'VAT Refund Claims',
                description: 'Identification and claiming of VAT refunds including input tax recovery and refund applications.'
              },
              {
                icon: Clock,
                title: 'Voluntary Disclosure',
                description: 'Assistance with voluntary disclosures for past VAT errors to minimize penalties and interest.'
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

      {/* Penalties Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            VAT Penalties
          </h2>
          <div className="bg-red-50 p-8 rounded-xl max-w-4xl mx-auto">
            <p className="text-charcoal-600 mb-6">
              The FTA imposes penalties for VAT non-compliance. These penalties can be significant and increase 
              with the severity and duration of non-compliance. We track all deadlines and ensure timely filing to avoid penalties.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Late Registration Penalties</h3>
                <ul className="space-y-2 text-charcoal-600 text-sm">
                  <li>• AED 10,000 for first violation</li>
                  <li>• AED 20,000 for subsequent violations</li>
                  <li>• Additional penalties for continued non-compliance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Late Filing Penalties</h3>
                <ul className="space-y-2 text-charcoal-600 text-sm">
                  <li>• 2% of unpaid tax per month (up to 50%)</li>
                  <li>• Minimum AED 1,000 per return</li>
                  <li>• Administrative penalties of AED 1,000-10,000</li>
                </ul>
              </div>
            </div>
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
                tier: 'Standard',
                price: 'AED 1,499/mo',
                description: 'For businesses with standard VAT affairs',
                features: [
                  'Quarterly VAT return preparation',
                  'FTA filing',
                  'VAT reconciliation',
                  'Basic compliance review',
                  'Email support'
                ]
              },
              {
                tier: 'Complex',
                price: 'AED 2,999/mo',
                description: 'For businesses with complex VAT arrangements',
                features: [
                  'Everything in Standard',
                  'Mixed supply calculations',
                  'Cross-border VAT advice',
                  'Exempt supply handling',
                  'Priority support',
                  'VAT health check'
                ],
                highlighted: true
              },
              {
                tier: 'Audit Support',
                price: 'AED 5,999/mo',
                description: 'For businesses under FTA investigation',
                features: [
                  'Full audit representation',
                  'Document preparation',
                  'FTA correspondence handling',
                  'Negotiation support',
                  'Dedicated VAT specialist',
                  '24/7 emergency support'
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
                question: 'When is VAT registration mandatory?',
                answer: 'VAT registration is mandatory when your taxable supplies exceed AED 375,000 in a 12-month period. You must register within 30 days of reaching this threshold.'
              },
              {
                question: 'How often are VAT returns due?',
                answer: 'VAT returns are typically filed quarterly. The deadline is the 28th day of the month following the tax period end. We track all deadlines and ensure timely submission.'
              },
              {
                question: 'What is the difference between zero-rated and exempt supplies?',
                answer: 'Zero-rated supplies are taxable at 0% VAT, meaning you can recover input tax. Exempt supplies are not subject to VAT, but you cannot recover input tax related to exempt supplies.'
              },
              {
                question: 'Can you help with voluntary disclosure?',
                answer: 'Yes. If you have made past VAT errors, we can assist with voluntary disclosure to the FTA. This can significantly reduce penalties compared to being discovered during an audit.'
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
            Ensure Your VAT Compliance
          </h2>
          <p className="text-text-on-dark mb-8">
            Get expert VAT support from FTA-registered tax agents and avoid costly penalties.
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
