import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const testimonials = [
  {
    quote: 'The slush bar was the talk of our wedding. Every guest was mesmerised by the display, and the flavors were absolutely divine — it felt like a luxury cocktail bar with a playful twist.',
    name: 'Eleanor & James Whitfield',
    role: 'Wedding · Oxfordshire',
    img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote: 'We hired Frost & Fête for our annual product launch and they completely elevated the event. The branded menu and the professionalism of the team exceeded every expectation.',
    name: 'Marcus Delaney',
    role: 'Brand Director, Halo Cosmetics',
    img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote: 'Our festival needed a bar that could handle thousands of people without compromising on quality. The Grand package delivered flawlessly — fast pours, happy crowds, zero stress.',
    name: 'Priya Nakamura',
    role: 'Festival Director, Solstice Sounds',
    img: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    quote: 'Hosted a milestone birthday in our garden and the slush bar transformed the whole evening. Elegant, fun, and the team was an absolute joy to work with. Already booked again.',
    name: 'Charles & Amelia Hartley',
    role: 'Private Party · Surrey',
    img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const { ref, visible } = useReveal();

  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[idx];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-mint-200/40 py-24 lg:py-32">
      <div className="pointer-events-none absolute left-10 top-10 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-52 w-52 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="container-luxe relative">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="eyebrow mb-5">Kind Words</span>
          <h2 className="section-title">Loved by our clients</h2>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="relative rounded-[2.5rem] bg-cream-100 p-8 shadow-xl shadow-brown-700/10 sm:p-12 lg:p-16">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-pink-500/10" />

            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-pink-500 text-pink-500" />
              ))}
            </div>

            <blockquote
              key={idx}
              className="mt-6 animate-fade-up font-display text-2xl font-medium leading-relaxed text-brown-700 sm:text-3xl"
            >
              "{t.quote}"
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <img
                src={t.img}
                alt={t.name}
                className="h-14 w-14 rounded-full border-2 border-pink-500/20 object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-bold text-brown-700">{t.name}</p>
                <p className="text-sm text-brown-600/70">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brown-700/15 text-brown-700 transition-colors hover:border-pink-500 hover:bg-pink-500 hover:text-cream-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === idx ? 'w-8 bg-pink-500' : 'w-2.5 bg-brown-700/20 hover:bg-pink-500/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brown-700/15 text-brown-700 transition-colors hover:border-pink-500 hover:bg-pink-500 hover:text-cream-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
