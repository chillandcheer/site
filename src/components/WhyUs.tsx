import { Tag, Users, UserCheck, MapPin } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const pillars = [
  {
    icon: Tag,
    title: 'Fully Branded',
    desc: 'Custom signage, branded glassware & colour-matched flavours for your event theme.',
    accent: 'pink',
  },
  {
    icon: Users,
    title: 'All Ages Welcome',
    desc: 'Zero-alcohol packages with creative mocktails that rival any cocktail menu.',
    accent: 'teal',
  },
  {
    icon: UserCheck,
    title: 'Professional Team',
    desc: 'Trained servers handle setup, operation, and cleanup – you enjoy the party.',
    accent: 'lilac',
  },
  {
    icon: MapPin,
    title: 'Region-Wide Service',
    desc: 'Serving Eastern Ontario & Western Quebec, from intimate backyards to large venues.',
    accent: 'mint',
  },
];

const accentMap: Record<string, { bg: string; text: string; bar: string }> = {
  pink:  { bg: 'bg-pink-500/10',   text: 'text-pink-500',   bar: 'bg-pink-500' },
  teal:  { bg: 'bg-teal-500/10',   text: 'text-teal-500',   bar: 'bg-teal-500' },
  lilac: { bg: 'bg-purple-400/10', text: 'text-purple-400', bar: 'bg-purple-400' },
  mint:  { bg: 'bg-teal-300/15',   text: 'text-teal-400',   bar: 'bg-teal-400' },
};

export default function WhyUs() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="whyus"
      className="relative bg-brown-700 py-24 lg:py-32 overflow-hidden scroll-mt-5"

    >
      {/* grain texture */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />

      {/* soft glow blobs */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="container-luxe relative">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl text-center`}
        >
          <span
            className="eyebrow mb-5"
            style={{
              borderColor: 'rgba(255,249,231,0.2)',
              backgroundColor: 'rgba(255,249,231,0.07)',
              color: '#F2F0DF',
            }}
          >
            Why Chill &amp; Cheer
          </span>

          <h2 className="section-title text-cream-50">
            Not just a drink station.{' '}
            <span className="whitespace-nowrap italic text-pink-400">
              A whole experience.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-cream-50/70">
            Forget the basic bar setup. Chill &amp; Cheer transforms your event with a fully branded
            mobile slush bar that guests actually remember. Every detail is curated – from custom
            signage to flavour profiles matched to your theme.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-cream-50/70">
            Whether you're planning a rustic vineyard wedding, a sleek corporate gala, or a vibrant
            festival, our team handles everything so you can focus on your guests.
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const a = accentMap[p.accent];

            return (
              <div
                key={p.title}
                className={`reveal ${
                  visible ? 'is-visible' : ''
                } group relative flex flex-col rounded-3xl border border-cream-50/8 bg-cream-50/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-cream-50/10 hover:border-cream-50/15`}
                style={{ transitionDelay: `${i * 100 + 150}ms` }}
              >
                {/* top accent bar */}
                <div
                  className={`mb-6 h-0.5 w-10 rounded-full ${a.bar} opacity-70 transition-all duration-500 group-hover:w-16 group-hover:opacity-100`}
                />

                <span
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${a.bg} ${a.text}`}
                >
                  <p.icon className="h-5 w-5" />
                </span>

                <h3 className="font-display text-xl font-bold text-cream-50">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-cream-50/65">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
