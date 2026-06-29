import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useReveal } from '../hooks/useReveal';

const eventTypes = ['Wedding', 'Corporate Event', 'Festival', 'Private Party', 'Other'];

export default function Contact() {
  const { ref, visible } = useReveal();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    eventTime: '',
    location: '',
    guests: '',
    message: '',
  });

  const update = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const { error } = await supabase.from('inquiries').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        event_type: form.eventType,
        event_date: form.eventDate || null,
        event_time: form.eventTime || null,
        location: form.location || null,
        guests: form.guests ? parseInt(form.guests, 10) : null,
        message: form.message || null,
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', eventType: 'Wedding', eventDate: '', eventTime: '', location: '', guests: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-cream-100 bg-grain py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-lilac-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="container-luxe relative">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="eyebrow mb-5">Get in Touch</span>
          <h2 className="section-title">Let's plan your pour</h2>
          <p className="mt-5 text-lg leading-relaxed text-brown-600">
            Tell us about your event and we’ll design a custom, tailored slush bar experience just for you.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {[
              { icon: Mail, label: 'Email', value: 'chillandcheerstaion@gmail.com', href: 'mailto:chillandcheerstation@gmail.com' },
              { icon: Phone, label: 'Phone', value: '613.366.7811', href: 'tel:+16133667811' },
              { icon: MapPin, label: 'Based in', value: 'Hawkesbury · Serving Eastern Ontario and Western Quebec', href: null },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href ?? undefined}
                className={`flex items-center gap-4 rounded-2xl bg-cream-50 p-5 ring-1 ring-brown-700/5 transition-all duration-300 ${
                  c.href ? 'hover:ring-pink-500/30 hover:shadow-md' : 'cursor-default'
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/10 text-pink-500">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brown-600/60">{c.label}</p>
                  <p className="font-medium text-brown-700">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="mt-2 rounded-2xl bg-teal-500 p-6 text-cream-100">
              <p className="font-display text-lg font-semibold">Prefer to talk it through?</p>
              <p className="mt-1.5 text-sm text-cream-100/80">
                Book a free 15-minute consultation and we'll walk you through every option.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-cream-50 p-6 shadow-xl shadow-brown-700/10 ring-1 ring-brown-700/5 sm:p-8"
          >
            {status === 'success' && (
              <div className="mb-6 flex items-center gap-3 rounded-2xl bg-mint-300/30 p-4 text-brown-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-500" />
                <p className="text-sm font-medium">
                  Thank you! Your enquiry has been received — we'll be in touch within 24 hours.
                </p>
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 flex items-center gap-3 rounded-2xl bg-pink-500/10 p-4 text-brown-700">
                <AlertCircle className="h-5 w-5 shrink-0 text-pink-600" />
                <p className="text-sm font-medium">
                  Something went wrong. Please try again or email us directly.
                </p>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" required>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="input-luxe"
                  placeholder="Jane Doe"
                />
              </Field>
              <Field label="Email" required>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="input-luxe"
                  placeholder="jane@email.com"
                />
              </Field>
              <Field label="Phone">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="input-luxe"
                  placeholder="07123 456789"
                />
              </Field>
              <Field label="Event Type" required>
                <select
                  value={form.eventType}
                  onChange={(e) => update('eventType', e.target.value)}
                  className="input-luxe"
                >
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field label="Event Date">
                <input
                  type="date"
                  value={form.eventDate}
                  onChange={(e) => update('eventDate', e.target.value)}
                  className="input-luxe"
                />
              </Field>
              <Field label="Time">
                <input
                  type="text"
                  value={form.eventTime}
                  onChange={(e) => update('eventTime', e.target.value)}
                  className="input-luxe"
                  placeholder="e.g. 3:00 PM"
                />
              </Field>
              <Field label="Location">
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => update('location', e.target.value)}
                  className="input-luxe"
                  placeholder="Venue or city"
                />
              </Field>
              <Field label="Guests">
                <input
                  type="number"
                  min="1"
                  value={form.guests}
                  onChange={(e) => update('guests', e.target.value)}
                  className="input-luxe"
                  placeholder="100"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Tell us about your event">
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  rows={4}
                  className="input-luxe resize-none"
                  placeholder="Venue, theme, any special requests..."
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary mt-6 w-full disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Enquiry
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brown-600/70">
        {label} {required && <span className="text-pink-500">*</span>}
      </span>
      {children}
    </label>
  );
}
