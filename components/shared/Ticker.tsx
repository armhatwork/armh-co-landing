'use client';

interface TickerProps {
  items: string[];
}

const Ticker = ({ items }: TickerProps) => {
  // Duplicate items to ensure a seamless looping scroll
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden py-4 bg-charcoal-950 border-y border-white/5">
      {/* Mobile: Static 2-column grid */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-4 px-5">
          {items.map((item, index) => (
            <span key={index} className="font-sans text-text-on-dark-muted text-sm text-center">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop: Infinite CSS marquee */}
      <div className="hidden md:block relative w-full overflow-hidden">
        <div className="animate-marquee hover:[animation-play-state:paused] flex">
          {duplicatedItems.map((item, index) => (
            <span key={index} className="font-sans mx-12 text-text-on-dark-muted inline-flex items-center gap-2 text-sm md:text-base whitespace-nowrap">
              {item}
              <span className="text-gold-primary font-bold">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
