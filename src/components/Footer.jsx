import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ln-espresso text-ln-cream/70">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-ln-terracotta via-ln-gold to-ln-olive" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-ln-terracotta rounded-full" />
              <span className="text-xl font-playfair text-ln-cream tracking-wide">la nuova</span>
            </Link>
            <p className="mt-3 text-sm text-ln-cream/50 leading-relaxed max-w-xs">
              Italian-inspired aesthetic medicine at Old Orchard Center, Skokie. Where medical science meets the art of meaningful care.
            </p>
          </div>
          {/* Navigate */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-ln-gold mb-4 font-medium">Navigate</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Facial Services' },
                { to: '/packages', label: 'Packages' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm hover:text-ln-terracotta transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-ln-gold mb-4 font-medium">Visit</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="w-4 h-4 mt-0.5 shrink-0 text-ln-terracotta" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>4905 Old Orchard Center, Unit L9<br />Skokie, IL 60077</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 text-ln-terracotta" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>(708) 853-6660</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 text-ln-terracotta" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <span>support@elcconsulting2.com</span>
              </li>
            </ul>
          </div>
          {/* Hours */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-ln-gold mb-4 font-medium">Hours</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { day: 'Mon–Thu', hours: '10 AM – 8 PM' },
                { day: 'Fri–Sat', hours: '10 AM – 9 PM' },
                { day: 'Sun', hours: '11 AM – 7 PM' },
              ].map(s => (
                <li key={s.day} className="flex justify-between gap-4">
                  <span className="text-ln-cream/50">{s.day}</span>
                  <span className="text-ln-cream/70">{s.hours}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-xs tracking-[0.15em] uppercase text-ln-gold mb-3 mt-8 font-medium">Follow</h4>
            <div className="flex gap-3">
              {['Instagram', 'Facebook', 'Yelp'].map(s => (
                <a key={s} href="#"
                  className="text-xs tracking-wider uppercase text-ln-cream/40 hover:text-ln-terracotta transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-ln-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ln-cream/30">&copy; {new Date().getFullYear()} la nuova. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-ln-cream/30">
            <span className="after-diamond" />
          </div>
        </div>
      </div>
    </footer>
  )
}
