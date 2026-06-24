import { Heart, Building2, Music2, Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    desc: 'A signature slush bar that becomes a centerpiece of your reception — elegant glassware, bespoke flavor pairings, and a team that blends seamlessly into your celebration.',
    accent: 'pink',
    img: 'https://images.pexels.com/photos/18005581/pexels-photo-18005581.jpeg?_gl=1*i21ah8*_ga*MTMwMjQ1NzkwMi4xNzgyMjM4OTc1*_ga_8JE65Q40S6*czE3ODIzMTQyNzkkbzMkZzEkdDE3ODIzMTQyNzkkajYwJGwwJGgw?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    desc: 'Brand-activated slush bars for product launches, conferences, and team off-sites. Custom signage, branded menus, and a polished service team in uniform.',
    accent: 'teal',
    img: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
  },
  {
    icon: Music2,
    title: 'Festivals',
    desc: 'High-volume slush stations built for crowds. Fast-pour taps, durable setups, and crowd-pleasing flavors that keep the energy flowing all day long.',
    accent: 'lilac',
    img: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
  },
  {
    icon: Sparkles,
    title: 'Private Parties',
    desc: 'Intimate gatherings deserve a touch of theatre. From garden parties to milestone birthdays, we bring a curated slush experience to your doorstep.',
    accent: 'mint',
    img: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
  },
];

const accentMap: Record<string, { bg: string; text: string; ring: string }> = {
  pink: { bg: 'bg-pink-500/10', text: 'text-pink-500', ring: 'group-hover:ring-pink-500/30' },
  teal: { bg: 'bg-teal-500/10', text: 'text-teal-500', ring: 'group-hover:ring-teal-500/30' },
  lilac: { bg: 'bg-lilac-500/10', text: 'text-lilac-600', ring: 'group-hover:ring-lilac-500/30' },
  mint: { bg: 'bg-mint-300/20', text: 'text-teal-500', ring: 'group-hover:ring-teal-400/30' },
};

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="relative bg-cream-50 py-24 lg:py-32">
      <div className="container-luxe">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="eyebrow mb-5">What We Do</span>
          <h2 className="section-title">A bar for every occasion</h2>
          <p className="mt-5 text-lg leading-relaxed text-brown-600">
            From black-tie weddings to high-energy festivals, we tailor every detail of our
            mobile slush bars to match the tone and style of your event.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const a = accentMap[s.accent];
            return (
              <article
                key={s.title}
                className={`reveal group flex flex-col overflow-hidden rounded-3xl bg-cream-100 shadow-sm ring-1 ring-brown-700/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brown-700/10 ${a.ring} ${
                  visible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-700/40 to-transparent" />
                  <span className={`absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full ${a.bg} ${a.text} backdrop-blur-sm`}>
                    <s.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold text-brown-700">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brown-600">{s.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
