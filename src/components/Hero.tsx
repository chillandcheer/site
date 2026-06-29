import { ArrowRight, Star, GlassWater } from 'lucide-react';

const pexels = (id: string, w = 900, h = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream-100 bg-grain pt-28 pb-20 sm:pt-36 lg:pb-28">
      {/* Decorative floating blobs */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-lilac-500/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-teal-400/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="container-luxe relative grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="eyebrow mb-6">
            <Star className="h-3.5 w-3.5 fill-teal-500 text-teal-500" />
            Premium Mobile Slush Bar
          </span>
          <h1 className="font-display text-5xl font-bold leading-[1.05] text-brown-700 text-balance sm:text-6xl lg:text-7xl">
            Bring the fun.
            <span className="block text-pink-500">Serve the Smiles.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-brown-600 lg:mx-0">
            A premium mobile slush bar experience for weddings, corporate events,
            festivals, and private parties — serving quality frozen drinks and mocktail favourites for all ages.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a href="#contact" className="btn-primary group">
              Book Your Bar
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#packages" className="btn-ghost">
              View Packages
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center justify-center gap-8 lg:justify-start">
            {[
              { n: '', l: '★★★★★' },
              { n: '', l: '' },
              { n: '', l: '' },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <p className="font-display text-3xl font-bold text-teal-500">{s.n}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brown-600/70">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image collage */}
        <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[520px] lg:h-[600px]">
          {/* Main image */}
          <div className="absolute right-0 top-0 h-[85%] w-[70%] overflow-hidden rounded-[1rem] shadow-2xl shadow-brown-700/20">
            <img
              src="https://images.pixieset.com/801255711/bf7ebc7167a133dfdd28076ccf954d2f-xxlarge.png"
              alt="Elegant mocktail bar at a luxury event"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          {/* Secondary image */}
          <div className="absolute bottom-0 left-0 w-[55%] overflow-hidden rounded-[1.0rem] border-4 border-cream-100 shadow-xl shadow-brown-700/20">
            <img
              src="https://images.pixieset.com/801255711/496f54cc765a7e90eaf5db2e708d47ee-xxlarge.png"
              alt="Frozen slush drinks being garnished"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Floating glass badge */}
          <div className="animate-float-slow absolute right-2 bottom-8 flex items-center gap-3 rounded-2xl bg-cream-100/95 px-4 py-3 shadow-lg shadow-brown-700/15 backdrop-blur-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/15 text-teal-500">
              <GlassWater className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-brown-700">Made with real juice.</p>
              <p className="text-xs text-brown-600/70">Favourite for all ages</p>
            </div>
          </div>

          {/* Floating decorative ring */}
          <div className="animate-spin-slow pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full border-2 border-dashed border-pink-500/40" />
        </div>
      </div>

      {/* Trust strip */}
      <div className="container-luxe mt-16 lg:mt-24">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-brown-700/10 pt-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brown-600/60">
             Trusted by event planners
          </span>
          {[].map((b) => (
            <span key={b} className="font-display text-lg font-medium text-brown-700/50">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
