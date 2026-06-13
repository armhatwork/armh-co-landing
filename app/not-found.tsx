import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-charcoal-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-sans text-gold-primary tracking-[0.25em] text-xs font-semibold uppercase mb-4">
          404
        </p>
        <h1 className="font-serif text-4xl font-bold text-white mb-4 tracking-tight">
          Page not found
        </h1>
        <p className="font-sans text-text-on-dark-muted mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-gold-primary text-charcoal-950 px-8 py-3 rounded-lg font-semibold hover:bg-gold-secondary transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
