import { Instagram, Facebook, ArrowUp } from 'lucide-react';

const cols = [
  { title: 'Explore', links: ['Services', 'Packages', 'Gallery', 'Reviews', 'FAQ'] },
  { title: 'Events', links: ['Weddings', 'Corporate', 'Festivals', 'Private Parties'] },
  { title: 'Company', links: ['About Us', 'Our Flavors', 'Careers', 'Privacy Policy'] },
];
const socialLinks = [
  {
    icon: Instagram,
    url: "https://instagram.com/chillncheerstation",
    label: "Instagram",
  },
  {
    icon: Facebook,
    url: "https://facebook.com/chillncheerstation",
    label: "Facebook",
  },
];
export default function Footer() {
  return (
    <footer className="bg-brown-700 text-cream-100">
      <div className="container-luxe py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center">
              <img
                src="/Logo+Icons_Horizontal.svg"
                alt="Logo"
                className="h-10 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-100/60">
              Premium mobile slush bar experience for life's most memorable moments.
              Elegant, modern, and always a little playful.
            </p>
           <div className="mt-6 flex gap-3">
  {socialLinks.map(({ icon: Icon, url, label }) => (
    <a
      key={label}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-100/5 text-cream-100/70 transition-all duration-300 hover:bg-pink-500 hover:text-cream-100"
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
    </a>
  ))}
</div>
            
          </div>

          {/* Social Links*/}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-cream-100/90">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase().split(' ')[0]}`}
                      className="text-sm text-cream-100/60 transition-colors duration-200 hover:text-pink-500"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-100/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream-100/50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-xs font-medium text-cream-100/60 transition-colors hover:text-pink-500"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream-100/5">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
