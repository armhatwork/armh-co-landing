export interface Testimonial {
  quote: string;
  client: string;
  company: string;
  location: string;
}

export const ukTestimonials: Testimonial[] = [
  {
    quote: "ARMH & Co transformed our financial operations. Their proactive approach to deadline management means we never miss a filing date.",
    client: "Sarah Mitchell",
    company: "TechStart UK Ltd",
    location: "London, UK"
  },
  {
    quote: "The R&D tax credit expertise saved us over £45,000 in our first year. Highly recommend for any UK SME.",
    client: "James Wilson",
    company: "Innovate Manufacturing",
    location: "Manchester, UK"
  },
  {
    quote: "Fixed monthly pricing with no surprises. Exactly what we needed as a newly incorporated business.",
    client: "Emma Thompson",
    company: "Digital Agency Pro",
    location: "Bristol, UK"
  }
];

export const uaeTestimonials: Testimonial[] = [
  {
    quote: "ARMH & Co's FTA registration expertise saved us from significant penalties. Their knowledge of UAE tax regulations is unmatched.",
    client: "Ahmed Al-Rashid",
    company: "Dubai Trading Co",
    location: "Dubai, UAE"
  },
  {
    quote: "The free zone accounting guidance was invaluable. They understand DMCC requirements inside and out.",
    client: "Sarah Johnson",
    company: "TechHub DMCC",
    location: "Dubai, UAE"
  },
  {
    quote: "Zero penalties across all our entities. That's the kind of compliance partner every UAE business needs.",
    client: "Mohammed Hassan",
    company: "Gulf Logistics",
    location: "Abu Dhabi, UAE"
  }
];
