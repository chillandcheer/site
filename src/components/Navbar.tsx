import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#whyus' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/85 backdrop-blur-md shadow-[0_4px_30px_-12px_rgba(70,36,23,0.18)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-luxe flex items-center justify-between py-4">
        <a href="#home" className="group flex items-center">
          <img
            src="/Logo+Icons_Horizontal.png"
            alt="Logo"
            className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-brown-700/80 transition-colors duration-200 hover:text-pink-500 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden btn-primary lg:inline-flex">
          Book Your Bar
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brown-700/15 text-brown-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-400 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container-luxe bg-cream-100/95 pb-6 pt-2 backdrop-blur-md">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-brown-700 transition-colors hover:bg-pink-500/10 hover:text-pink-500"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Book Your Bar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
