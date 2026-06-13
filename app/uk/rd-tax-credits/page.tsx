'use client';


import ServiceHero from '@/components/shared/ServiceHero';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, FlaskConical, FileText, Calculator, ArrowRight, TrendingUp } from 'lucide-react';

export default function RDTaxCreditsPage() {
  return (
    <div className="min-h-screen bg-off-white">
            <ServiceHero
        eyebrow="UK Tax Incentives"
        title="R&D Tax Credits"
        description="Maximize your R&D tax credit claims with our specialist technical and financial expertise. Our team has secured millions in R&D relief for innovative UK businesses across all sectors."
        videoSrc="/service-videos/7947424-hd_1920_1080_30fps.mp4"
        primaryCta={{ label: 'Get a Quote', href: '/uk/contact' }}
        secondaryCta={{ label: 'Book Consultation', href: '/uk/contact' }}
      />

      {/* What is R&D Section */}
      <section className="py-20 px-4 bg-gold-faint">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
                What Qualifies as R&D?
              </h2>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                R&D tax credits are designed to reward UK companies that invest in innovation. The definition 
                is broader than many realise - it's not just for scientists in laboratories. Any project that 
                seeks to achieve an advance in science or technology through the resolution of scientific or 
                technological uncertainty may qualify.
              </p>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                Our technical specialists work alongside our tax experts to identify qualifying activities within 
                your business. We have successfully claimed R&D relief for software development, engineering, 
                manufacturing, food production, and many other sectors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gold-primary/20">
              <h3 className="font-semibold text-charcoal-900 mb-4">Qualifying Activities Include</h3>
              <ul className="space-y-3">
                {[
                  'Developing new products or processes',
                  'Improving existing technology',
                  'Overcoming technical uncertainties',
                  'Creating innovative software solutions',
                  'Advancing materials or manufacturing techniques',
                  'Resolving scientific or technological problems'
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

      {/* Schemes Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-12 text-center tracking-tight">
            R&D Tax Credit Schemes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'SME Scheme',
                description: 'For companies with fewer than 500 employees and turnover under €100m or balance sheet under €43m.',
                benefit: 'Up to 33.35% creditable for loss-making companies',
                relief: 'Enhanced deduction of 186% for qualifying expenditure',
                cash: 'Can receive cash repayment even if profitable'
              },
              {
                title: 'RDEC Scheme',
                description: 'For larger companies or those receiving other state aid. Also used by SMEs above the subsidy limits.',
                benefit: '20% creditable above the line (as of April 2024)',
                relief: 'Expenditure deducted at 100%',
                cash: 'Credit used to offset corporation tax liability'
              }
            ].map((scheme, index) => (
              <div key={index} className="bg-charcoal-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-charcoal-900 mb-4">{scheme.title}</h3>
                <p className="text-charcoal-600 mb-6">{scheme.description}</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal-600"><strong>Benefit:</strong> {scheme.benefit}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calculator className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal-600"><strong>Relief:</strong> {scheme.relief}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-gold-primary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal-600"><strong>Cash:</strong> {scheme.cash}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifying Expenditure Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Qualifying Expenditure
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FlaskConical,
                title: 'Staff Costs',
                description: 'Salaries, NICs, and pension contributions for employees directly engaged in R&D activities.'
              },
              {
                icon: FileText,
                title: 'Subcontractors',
                description: 'Payments to UK subcontractors for R&D work (60% of costs qualify under SME scheme).'
              },
              {
                icon: Calculator,
                title: 'Materials',
                description: 'Consumable items used in R&D, including raw materials, utilities, and prototype costs.'
              },
              {
                icon: Shield,
                title: 'Software',
                description: 'Licence fees or subscription costs for software used directly in R&D activities.'
              },
              {
                icon: Clock,
                title: 'Clinical Trials',
                description: 'Costs associated with clinical trial volunteers and related expenses for pharmaceutical R&D.'
              },
              {
                icon: TrendingUp,
                title: 'Prototype Costs',
                description: 'Costs of creating and testing prototypes, including materials and specialist equipment.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl"
                >
                  <Icon className="w-10 h-10 text-gold-primary mb-4" />
                  <h3 className="font-semibold text-charcoal-900 mb-2">{item.title}</h3>
                  <p className="text-charcoal-600 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Our R&D Claim Process
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Initial Assessment', description: 'Free assessment of your R&D activities and potential claim value.' },
              { step: '02', title: 'Technical Review', description: 'Our technical specialists document qualifying projects and activities.' },
              { step: '03', title: 'Financial Analysis', description: 'We calculate qualifying expenditure and prepare detailed calculations.' },
              { step: '04', title: 'Claim Preparation', description: 'We prepare and submit your R&D claim to HMRC with full supporting documentation.' },
              { step: '05', title: 'HMRC Enquiry', description: 'We handle any HMRC enquiries and defend your claim if required.' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gold-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-charcoal-900 mb-2">{item.title}</h3>
                <p className="text-charcoal-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
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
                question: 'How far back can I claim?',
                answer: 'You can claim R&D relief for accounting periods ending within the last two years. For loss-making SMEs, you may be able to surrender losses for a three-year period.'
              },
              {
                question: 'What if HMRC enquires into my claim?',
                answer: 'We provide full support during HMRC enquiries. Our technical documentation and calculations are robust and defensible. We have a 100% success rate defending claims.'
              },
              {
                question: 'How long does a claim take?',
                answer: 'Once we have all necessary information, we typically prepare claims within 4-6 weeks. HMRC processing time varies but is usually 4-8 weeks. We track progress throughout.'
              },
              {
                question: 'Do I need to be profitable to claim?',
                answer: 'No. Loss-making SMEs can receive a payable tax credit of up to 33.35% of qualifying expenditure. Profitable companies benefit from enhanced deductions reducing their tax liability.'
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
            Claim Your R&D Tax Credits
          </h2>
          <p className="text-text-on-dark mb-8">
            Many businesses miss out on R&D relief they're entitled to. Let us identify and claim your entitlement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-secondary transition-colors">
              Book Free Assessment
            </button>
            <Link href="/uk/contact" className="border border-gold-primary text-gold-primary px-8 py-3 rounded-lg font-semibold hover:bg-gold-primary hover:text-charcoal-950 transition-colors text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
