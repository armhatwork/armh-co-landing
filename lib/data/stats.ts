export interface Stat {
  number: string;
  label: string;
  icon: string;
}

export const ukStats: Stat[] = [
  { number: '50+', label: 'SME Clients', icon: 'users' },
  { number: '100%', label: 'Filing Accuracy', icon: 'check' },
  { number: '24h', label: 'Response Time', icon: 'clock' },
  { number: '8+', label: 'Years Experience', icon: 'briefcase' },
];

export const uaeStats: Stat[] = [
  { number: '250+', label: 'SME Clients', icon: 'users' },
  { number: 'AED 2B+', label: 'Revenue Managed', icon: 'trending' },
  { number: '0', label: 'FTA Penalties', icon: 'shield' },
  { number: '18+', label: 'Industries Served', icon: 'building' },
];
