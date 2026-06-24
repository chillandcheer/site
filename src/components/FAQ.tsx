import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const faqs = [
  {
    q: 'How far in advance should I book?',
    a: 'We recommend booking 3–6 months in advance for weddings and peak-season events, though we do accommodate last-minute requests when our calendar allows. Get in touch and we\'ll do our best to make it work.',
  },
  {
    q: 'Do you offer both alcoholic and non-alcoholic options?',
    a: 'We don’t provide alcohol ourselves. If you’d like alcoholic slush, the host would need to arrange the required liquor permit and supply the alcohol. Once you have it, we’re happy to help mix everything on-site and can suggest the right proportions so the flavour stays balanced and tastes great in slush form.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We’re based in Hawkesbury, Ontario and mainly service Ottawa, Gatineau, Cornwall, and surrounding areas in Eastern Ontario and Western Quebec. We’re also happy to travel for events whenever possible — generally within about a 1-hour drive, and sometimes a bit further for special occasions. For locations outside that range, just reach out and we can provide a custom travel quote.',
  },
  {
    q: 'How long does setup take?',
    a: 'A typical setup takes 60 minutes depending on the package. We arrive well before your guests and handle everything — delivery, assembly, styling, and cleanup at the end of the night.',
  },
  {
    q: 'Can you customize the bar to match our theme or brand?',
    a: 'Yes — this is where we shine. From custom signage and branded wraps to color-matched garnishes and themed glassware, we tailor every visual detail to your event or brand identity.',
  },
  {
    q: 'What is included in the pricing?',
    a: 'All of our packages are fully inclusive — we take care of delivery, setup, glassware, garnishes, toppings, and cleanup so you don’t have to worry about a thing. There are no hidden fees. Any add-ons (like extra service time or special requests) are optional and can be arranged in advance.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, visible } = useReveal();

  return (
    <section id="faq" className="bg-cream-50 py-24 lg:py-32">
      <div className="container-luxe grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow mb-5">FAQ</span>
          <h2 className="section-title">Questions, answered</h2>
          <p className="mt-5 text-lg leading-relaxed text-brown-600">
            Everything you need to know before booking. Can't find your answer?
            Our team is one message away.
          </p>
          <a href="#contact" className="btn-primary mt-8">
            Ask a Question
          </a>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-pink-500/30 bg-cream-100 shadow-md shadow-pink-500/5'
                    : 'border-brown-700/10 bg-cream-100/50 hover:border-brown-700/20'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold text-brown-700">{f.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen ? 'bg-pink-500 text-cream-100' : 'bg-brown-700/5 text-brown-700'
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-400 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-brown-600">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
