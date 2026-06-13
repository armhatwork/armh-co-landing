'use client';


import ServiceHero from '@/components/shared/ServiceHero';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, Users, FileText, Calculator, ArrowRight, AlertCircle } from 'lucide-react';

export default function UAEPayrollWPSPage() {
  return (
    <div className="min-h-screen bg-off-white">
            <ServiceHero
        eyebrow="UAE Payroll Services"
        title="Payroll & WPS Compliance"
        description="Full payroll management with Wage Protection System (WPS) compliance across all Emirates. Our payroll experts ensure full compliance with UAE labor laws and WPS requirements."
        videoSrc="/service-videos/7947407-hd_1920_1080_30fps.mp4"
        primaryCta={{ label: 'Get a Quote', href: '/uae/contact' }}
        secondaryCta={{ label: 'Book Consultation', href: '/uae/contact' }}
      />

      {/* WPS Overview Section */}
      <section className="py-20 px-4 bg-gold-faint">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Wage Protection System (WPS)
              </h2>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                The Wage Protection System (WPS) is an electronic salary transfer system that allows employers to 
                pay wages through approved banks and financial institutions. WPS is mandatory for all UAE businesses 
                and ensures timely payment of employee salaries.
              </p>
              <p className="font-sans text-charcoal-600 mb-6 leading-relaxed">
                Our payroll service includes full WPS compliance, ensuring all salary payments are processed through 
                the WPS system with proper documentation and reporting to the Ministry of Human Resources and Emiratisation (MOHRE).
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gold-primary/20">
              <h3 className="font-semibold text-charcoal-900 mb-4">WPS Compliance Requirements</h3>
              <ul className="space-y-3">
                {[
                  'All employees must be registered in WPS',
                  'Salaries paid through approved banks',
                  'Salary file submission before payment date',
                  'Proof of payment within 15 days',
                  'Compliance with UAE labor law wage protection',
                  'Reporting to MOHRE for all transactions'
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
            Our Payroll Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator,
                title: 'Payroll Processing',
                description: 'Complete payroll processing including salary calculations, overtime, allowances, and deductions for all Emirates.'
              },
              {
                icon: FileText,
                title: 'WPS Filing',
                description: 'Preparation and submission of WPS salary files through approved banks with proper documentation.'
              },
              {
                icon: Shield,
                title: 'End of Service Benefits',
                description: 'Calculation of gratuity and end of service benefits in compliance with UAE labor law.'
              },
              {
                icon: AlertCircle,
                title: 'GOSI & Social Security',
                description: 'Management of GOSI contributions for UAE nationals and social insurance compliance.'
              },
              {
                icon: Users,
                title: 'Employee Onboarding',
                description: 'Complete onboarding including labor card processing, visa sponsorship, and WPS registration.'
              },
              {
                icon: Clock,
                title: 'Leave Management',
                description: 'Tracking and calculation of annual leave, sick leave, and other leave types per UAE labor law.'
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

      {/* Gratuity Section */}
      <section className="py-20 px-4 bg-charcoal-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-900 mb-12 text-center">
            Gratuity Calculation (End of Service Benefits)
          </h2>
          <div className="bg-white p-8 rounded-xl max-w-4xl mx-auto">
            <p className="text-charcoal-600 mb-6">
              Under UAE labor law, employees are entitled to gratuity (end of service benefits) upon termination 
              of employment. The calculation depends on the type of contract and length of service.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Limited Contract</h3>
                <ul className="space-y-2 text-charcoal-600 text-sm">
                  <li>• Less than 1 year: No gratuity</li>
                  <li>• 1-5 years: 21 days per year</li>
                  <li>• More than 5 years: 30 days per year</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-900 mb-3">Unlimited Contract</h3>
                <ul className="space-y-2 text-charcoal-600 text-sm">
                  <li>• Less than 1 year: No gratuity</li>
                  <li>• 1-5 years: 21 days per year</li>
                  <li>• More than 5 years: 30 days per year</li>
                </ul>
              </div>
            </div>
            <p className="text-text-muted text-xs mt-4">
              *Calculation based on basic salary. Specific rules apply for different termination scenarios.
            </p>
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
                tier: 'Start-up',
                price: 'AED 1,299/mo',
                description: 'For businesses with up to 10 employees',
                features: [
                  'Monthly payroll processing',
                  'WPS filing',
                  'Payslip generation',
                  'Basic leave tracking',
                  'Email support'
                ]
              },
              {
                tier: 'Growth',
                price: 'AED 2,499/mo',
                description: 'For businesses with up to 50 employees',
                features: [
                  'Everything in Start-up',
                  'GOSI management',
                  'Gratuity calculations',
                  'Multi-Emirate support',
                  'Priority support',
                  'Dedicated payroll specialist'
                ],
                highlighted: true
              },
              {
                tier: 'Enterprise',
                price: 'AED 4,999/mo',
                description: 'For businesses with unlimited employees',
                features: [
                  'Unlimited employees',
                  'Everything in Growth',
                  'Complex payroll structures',
                  'Integration with HR systems',
                  '24/7 support access',
                  'Custom reporting'
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
                question: 'Is WPS mandatory for all businesses?',
                answer: 'Yes. WPS is mandatory for all UAE businesses with employees. Non-compliance can result in fines, work permit suspensions, and other penalties. We ensure full WPS compliance.'
              },
              {
                question: 'What information do I need for payroll?',
                answer: 'We need employee details (name, passport, visa, labor card), salary information, working hours, allowances, and deductions. We provide a secure portal for data submission.'
              },
              {
                question: 'Do you handle GOSI for UAE nationals?',
                answer: 'Yes. We manage GOSI (General Organization for Social Insurance) contributions for UAE national employees, ensuring proper registration and monthly contributions.'
              },
              {
                question: 'Can you handle payroll for multiple Emirates?',
                answer: 'Yes. We have experience with payroll across all seven Emirates including Dubai, Abu Dhabi, Sharjah, and others. We understand the specific requirements of each Emirate.'
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
            Compliant Payroll Across All Emirates
          </h2>
          <p className="text-text-on-dark mb-8">
            Let us handle your payroll and WPS compliance while you focus on growing your business.
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
