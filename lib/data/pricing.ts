export interface PricingTier {
  tier: string;
  price: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
  note: string;
  ctaHref: string;
}

export const ukPricing: PricingTier[] = [
  {
    tier: 'Starter',
    price: '£300 / month',
    features: [
      'Up to 100 transactions',
      'Monthly bookkeeping',
      'VAT returns (MTD-compliant)',
      'Year-end accounts',
      'Corporation tax filing',
      'Basic payroll (up to 5 employees)',
      'Companies House compliance',
      'Email support',
    ],
    highlighted: false,
    ctaText: 'Get Started →',
    note: 'Perfect for small businesses with low transaction volume',
    ctaHref: '/uk/contact'
  },
  {
    tier: 'Growth',
    price: '£600 / month',
    features: [
      'Up to 400 transactions',
      'Everything in Starter',
      'Management accounts',
      'Self Assessment for directors',
      'R&D tax credit claims',
      'Payroll (up to 20 employees)',
      'HMRC correspondence handling',
      'Priority support',
      'Quarterly strategy calls',
    ],
    highlighted: true,
    ctaText: 'Get Started →',
    note: 'Ideal for growing businesses with moderate activity',
    ctaHref: '/uk/contact'
  },
  {
    tier: 'Complete',
    price: '£1,000 / month',
    features: [
      '400+ transactions',
      'Everything in Growth',
      'CFO advisory (monthly)',
      'International tax planning',
      'Unlimited payroll',
      'Audit preparation',
      'Dedicated account manager',
      '24/7 support access',
      'Custom reporting',
    ],
    highlighted: false,
    ctaText: 'Get Started →',
    note: 'Comprehensive solution for high-volume businesses',
    ctaHref: '/uk/contact'
  }
];

export const uaePricing: PricingTier[] = [
  {
    tier: 'Starter',
    price: 'AED 999/mo',
    features: [
      'Monthly bookkeeping (IFRS)',
      'VAT registration & filing',
      'Corporate tax compliance',
      'Basic payroll (up to 5 employees)',
      'ESR notification',
      'UBO register maintenance',
      'Email support',
    ],
    highlighted: false,
    ctaText: 'Get Started →',
    note: 'All prices exclude 5% UAE VAT',
    ctaHref: '/uae/contact'
  },
  {
    tier: 'Growth',
    price: 'AED 1,999/mo',
    features: [
      'Everything in Starter',
      'Management accounts',
      'Financial forecasting',
      'Payroll (up to 20 employees)',
      'ESR annual report',
      'FTA correspondence handling',
      'Priority support',
      'Quarterly strategy calls',
    ],
    highlighted: true,
    ctaText: 'Get Started →',
    note: 'All prices exclude 5% UAE VAT',
    ctaHref: '/uae/contact'
  },
  {
    tier: 'Enterprise',
    price: 'AED 3,999/mo',
    features: [
      'Everything in Growth',
      'CFO advisory (monthly)',
      'Free zone optimization',
      'International tax planning',
      'Unlimited payroll',
      'Audit preparation',
      'Dedicated account manager',
      '24/7 support access',
    ],
    highlighted: false,
    ctaText: 'Get Started →',
    note: 'All prices exclude 5% UAE VAT',
    ctaHref: '/uae/contact'
  }
];
