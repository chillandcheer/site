import { Check, Crown } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const packages = [
  {
    name: 'The Signature',
    tagline: 'Perfect for intimate gatherings',
    price: 'Starting at $575 + Tax',
    features: [
      'Ideal for up to 50 guests',
      'Up to 3 hours of service',
      '2 signature slush flavours (10L each)',
      '2 standard toppings',
      'Cups & straws',
      '2 professional servers',
      'Setup and takedown included',
    ],
    accent: 'teal',
    featured: false,
  },
  {
    name: 'The Royal',
    tagline: 'Designed for elevated celebrations',
    price: 'Starting at $1,195 + Tax',
    features: [
      'Ideal for up to 100 guests',
      'Up to 4 hours of service',
      '2 signature slush flavours (15L each)',
      'Martini-style premium plastic glassware',
      '4 premium toppings',
      'Custom signage & styling',
      'Welcome drink station setup',
      '2 professional servers',
      'Setup and takedown included',
    ],
    accent: 'pink',
    featured: true,
  },
  {
    name: 'Add-Ons',
    tagline: 'Customize your experience',
    price: 'Priced per item',
    features: [
      'Additional service time: $100 / hr (Signature) | $150 / hr (Premium)',
      'Additional guests: $5 / guest (includes product & supplies)',
      'Premium candy topping: $30 each',
    ],
    accent: 'lilac',
    featured: false,
  },
];

const accentMap: Record<string, { border: string; badge: string; check: string; price: string }> = {
  teal: { border: 'border-teal-500/20', badge: 'bg-teal-500/10 text-teal-500', check: 'text-teal-500', price: 'text-teal-500' },
  pink: { border: 'border-pink-500', badge: 'bg-pink-500 text-cream-100', check: 'text-pink-500', price: 'text-pink-500' },
  lilac: { border: 'border-lilac-500/20', badge: 'bg-lilac-500/10 text-lilac-600', check: 'text-lilac-600', price: 'text-lilac-600' },
};

export default function Packages() {
  const { ref, visible } = useReveal();

  return (
    <section id="packages" className="relative overflow-hidden bg-brown-700 py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="container-luxe relative">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="eyebrow mb-5 border-teal-400/30 bg-teal-400/10 text-teal-300">Packages</span>
          <h2 className="font-display text-4xl font-bold leading-[1.1] text-cream-100 sm:text-5xl lg:text-6xl">
            Choose your experience
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream-100/70">
            Transparent pricing, fully inclusive. Every package is customizable — tell us about
            your event and we'll craft the perfect pour.
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {packages.map((p, i) => {
            const a = accentMap[p.accent];
            return (
              <div
                key={p.name}
                className={`reveal ${visible ? 'is-visible' : ''} relative flex flex-col rounded-3xl bg-cream-100 p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  p.featured ? `ring-2 ${a.border} lg:scale-105` : `border ${a.border}`
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {p.featured && (
                  <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full ${a.badge} px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-lg`}>
                    <Crown className="h-3.5 w-3.5" />
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-3xl font-bold text-brown-700">{p.name}</h3>
                <p className="mt-1.5 text-sm text-brown-600/70">{p.tagline}</p>
                <p className={`mt-5 font-display text-4xl font-bold ${a.price}`}>{p.price}</p>

                <ul className="mt-6 flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-brown-700">
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] ${a.badge.includes('cream') ? 'bg-pink-500/10' : a.badge}`}>
                        <Check className={`h-3 w-3 ${a.check}`} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    p.featured
                      ? 'bg-pink-500 text-cream-100 shadow-lg shadow-pink-500/30 hover:bg-pink-600 hover:-translate-y-0.5'
                      : 'border border-brown-700/15 text-brown-700 hover:border-pink-500 hover:text-pink-500'
                  }`}
                >
                  Enquire Now
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-cream-100/60">
         Alcohol Polidy: Chill & Cheer does not supply, serve, or handle alcohol. If alcohol is used at the event, the client is fully responsible for obtaining all required permits, licensing, and compliance with local regulations.
        </p>
      </div>
    </section>
  );
}
