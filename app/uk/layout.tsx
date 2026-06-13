import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/shared/Navbar'))
const Footer = dynamic(() => import('@/components/shared/Footer'))

export const metadata: Metadata = {
  title: 'ARMH & Co | UK Accounting & Tax Compliance Specialists | ACCA Regulated',
  description: 'Expert bookkeeping, VAT, corporation tax, and payroll for UK SMEs and newly incorporated businesses. ACCA & ICAEW qualified.',
}

export default function UKLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Navbar market="uk" />
      {children}
      <Footer market="uk" />
    </div>
  )
}
