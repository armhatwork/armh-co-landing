'use client';

interface CredentialBadgeProps {
  variant?: 'dark' | 'light';
}

const CredentialBadge = ({ variant = 'dark' }: CredentialBadgeProps) => {
  const credentials = [
    'Xero Partner',
    'QuickBooks Certified',
    'SECP Recognized',
    'MTD Ready',
    'GDPR Compliant',
  ];

  const baseClasses = variant === 'dark' ? 'text-text-on-dark-muted' : 'text-text-secondary';

  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-2 gap-y-1 ${baseClasses} text-[10px] md:text-xs`}>
      {credentials.map((cred, index) => (
        <span key={cred} className="font-medium inline-flex items-center gap-2">
          {cred}
          {index < credentials.length - 1 && (
            <span className="text-gold-primary/60 hidden sm:inline">·</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default CredentialBadge;
