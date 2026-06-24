import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

type Category = 'All' | 'Weddings' | 'Corporate' | 'Festivals' | 'Private';

const images: { src: string; alt: string; cat: Category; span?: string }[] = [
  { src: 'https://images.pexels.com/photo/newlyweds-kissing-under-veil-18005581/?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', alt: 'Wedding slush bar setup', cat: 'Weddings', span: 'sm:col-span-2 sm:row-span-2' },
  { src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'Corporate event bar', cat: 'Corporate' },
  { src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'Festival slush station', cat: 'Festivals' },
  { src: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'Private party drinks', cat: 'Private' },
  { src: 'https://images.pexels.com/photos/1283217/pexels-photo-1283217.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'Cocktail being poured', cat: 'Weddings' },
  { src: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', alt: 'Garnished slush drinks', cat: 'Private', span: 'sm:col-span-2' },
  { src: 'https://images.pexels.com/photos/1268555/pexels-photo-1268555.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'Festival crowd enjoying drinks', cat: 'Festivals' },
  { src: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop', alt: 'Corporate branded bar', cat: 'Corporate' },
];

const categories: Category[] = ['All', 'Weddings', 'Corporate', 'Festivals', 'Private'];

export default function Gallery() {
  const [active, setActive] = useState<Category>('All');
  const { ref, visible } = useReveal();

  const filtered = active === 'All' ? images : images.filter((i) => i.cat === active);

  return (
    <section id="gallery" className="bg-cream-100 py-24 lg:py-32">
      <div className="container-luxe">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="eyebrow mb-5">Gallery</span>
          <h2 className="section-title">A taste of the experience</h2>
          <p className="mt-5 text-lg leading-relaxed text-brown-600">
            A glimpse into the bars we've built and the moments we've poured.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active === c
                  ? 'bg-pink-500 text-cream-100 shadow-md shadow-pink-500/30'
                  : 'bg-cream-50 text-brown-700 ring-1 ring-brown-700/10 hover:ring-pink-500/40 hover:text-pink-500'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((img) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl shadow-sm ${img.span ?? ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-700/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 translate-y-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="rounded-full bg-cream-100/90 px-3 py-1 text-xs font-semibold text-brown-700 backdrop-blur-sm">
                  {img.cat}
                </span>
                <p className="mt-2 font-display text-lg font-medium text-cream-100">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
