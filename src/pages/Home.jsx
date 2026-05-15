import { Link } from 'react-router-dom'

const services = [
  { name: 'Signature Micro-Needling', desc: 'Precision collagen induction therapy that gently awakens your skin\'s natural renewal process. Fine lines soften, scars fade, and texture transforms.', price: '$199', icon: 'sparkles' },
  { name: 'HydraFacial MD', desc: 'The gold standard in medical-grade facials. Vortex-cleansing, gentle extraction, and antioxidant infusion reveal a glow that lasts for days.', price: '$169', icon: 'droplet' },
  { name: 'Laser Genesis', desc: 'Soothing laser energy works beneath the surface to calm redness, refine pores, and restore even tone. Zero downtime, radiant results.', price: '$249', icon: 'shield' },
  { name: 'Medical-Grade Chemical Peel', desc: 'Clinically formulated solutions tailored to your skin\'s unique needs. Pigmentation, scarring, and dullness meet their match in days, not weeks.', price: '$179', icon: 'heart' },
]

const featuredPackages = [
  { name: 'The North Shore Glow', price: '$349', original: '$445', desc: 'A radiant duo — HydraFacial meets LED therapy for skin that seems to light from within.', image: 'facial-2.jpg' },
  { name: 'The Old Orchard', price: '$549', original: '$690', desc: 'Powerful resurfacing: micro-needling paired with a medical-grade peel for deep collagen renewal.', image: 'facial-4.jpg' },
  { name: 'Monthly Membership', price: '$129/mo', desc: 'One advanced treatment every month, 20% off add-ons, and exclusive perks. Self-care made effortless.', image: 'spa-1.jpg' },
]

const testimonials = [
  { quote: 'I have tried countless med-spas around Chicago, but nothing compares to the thoughtfulness and expertise at La Nuova. My skin has never looked this radiant.', name: 'Rebecca T.', title: 'Regular since 2024' },
  { quote: 'What sets La Nuova apart is how deeply they listen. Instead of pushing treatments, they crafted a plan tailored exactly to my skin — and the results speak volumes.', name: 'David L.', title: 'Monthly member' },
  { quote: 'Walking into La Nuova feels like stepping into a retreat in Tuscany. The space is stunning, the team is warm, and my skin has genuinely never looked better.', name: 'Monica R.', title: 'New client' },
]

const highlights = [
  { title: 'Board-Certified Expertise', desc: 'Every procedure is supervised by licensed medical professionals with rigorous advanced training and a passion for aesthetic medicine.' },
  { title: 'Italian-Inspired Studio', desc: 'Warmth, texture, and intention — our space at Old Orchard Center is designed to feel like a sanctuary from the moment you walk in.' },
  { title: 'Custom Treatment Plans', desc: 'No two faces are the same. Every protocol is individually crafted around your skin type, concerns, and aspirations.' },
  { title: 'Medical-Grade Technology', desc: 'We invest in the most advanced aesthetic devices and clinical-grade products — because your results deserve nothing less than the best.' },
]

export default function Home() {
  return (
    <div>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-ln-marble">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
            {/* Left */}
            <div className="flex items-center px-4 sm:px-8 lg:px-12 py-20 relative">
              <div className="w-full max-w-xl">
                <div className="flex items-center gap-2 text-ln-terracotta text-xs tracking-[0.2em] uppercase mb-6">
                  <span className="w-6 h-px bg-ln-terracotta" />
                  Skokie's Finest Medical Aesthetic Studio
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair text-ln-charcoal leading-[1.1]">
                  Where Italian Artistry<br />
                  <span className="text-gradient-terracotta">Meets Modern Science</span>
                </h1>
                <p className="mt-6 text-base text-ln-warm-gray leading-relaxed max-w-lg">
                  From the heart of Old Orchard Center, La Nuova brings a fresh perspective to aesthetic medicine — where clinical precision meets the warmth of Italian design. Every treatment is an experience.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/services"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-ln-terracotta text-white font-medium text-base rounded-full hover:brightness-110 transition-all duration-200 shadow-[0_4px_16px_rgba(199,107,74,0.3)]">
                    Explore Treatments
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-ln-terracotta/30 text-ln-espresso font-medium text-base rounded-full bg-ln-cream/60 hover:bg-ln-cream transition-all duration-200">
                    Book a Consultation
                  </Link>
                </div>
                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-8">
                  {[
 { number: '10+', label: 'Years of Excellence' },
                  { number: '3,500+', label: 'Clients Transformed' },
                  { number: '97%', label: 'Would Recommend Us' },
                  ].map(s => (
                    <div key={s.label}>
                      <p className="text-2xl sm:text-3xl font-playfair text-ln-terracotta">{s.number}</p>
                      <p className="mt-1 text-xs text-ln-warm-gray">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative terracotta bar */}
              <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/12 bg-gradient-to-b from-ln-terracotta/20 via-ln-terracotta/5 to-transparent" />
            </div>

            {/* Right: Image area */}
            <div className="relative min-h-[50vh] lg:min-h-full overflow-hidden">
              <img src="/images/hero-portrait.jpg" alt="Medical aesthetic experience at La Nuova"
                className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-ln-marble/20" />
              {/* Consultation card */}
              <div className="absolute bottom-8 left-8 right-8 lg:left-auto lg:w-72">
                <div className="bg-ln-cream/95 backdrop-blur-sm rounded-2xl border border-ln-terracotta/10 shadow-xl p-6">
                  <p className="text-sm font-medium text-ln-espresso">Begin Your <span className="text-gradient-terracotta">Journey</span></p>
                  <p className="mt-1 text-xs text-ln-warm-gray">Complimentary 15-minute skin assessment with one of our specialists.</p>
                  <Link to="/contact"
                    className="mt-3 block w-full text-center py-2.5 bg-ln-terracotta text-white font-medium text-sm rounded-full hover:brightness-110 transition-all duration-200">
                    Book Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY LA NUOVA ═══════════ */}
      <section className="py-24 bg-gradient-espresso relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(201,169,110,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(199,107,74,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-ln-gold text-xs tracking-[0.2em] uppercase">Why La Nuova</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-ln-cream">Crafted for <span className="text-gradient-terracotta">You</span></h2>
            <p className="mt-4 text-ln-cream/50 max-w-xl mx-auto text-sm">Science-backed artistry, delivered with Italian warmth — that is the La Nuova promise.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(h => (
              <div key={h.title} className="group p-6 rounded-2xl border border-ln-cream/10 bg-ln-espresso-light/50 hover:bg-ln-espresso-light/70 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-ln-terracotta/10 flex items-center justify-center mb-4 group-hover:bg-ln-terracotta/20 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-ln-terracotta" />
                </div>
                <h3 className="text-base font-playfair text-ln-cream">{h.title}</h3>
                <p className="mt-2 text-xs text-ln-cream/50 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES PREVIEW ═══════════ */}
      <section className="py-24 bg-ln-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ln-olive text-xs tracking-[0.2em] uppercase">Treatments</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-ln-espresso">Advanced Aesthetic Services</h2>
            <p className="mt-4 text-ln-warm-gray max-w-xl mx-auto text-sm">Every service is an intersection of dermatological science and genuine care — tailored, not templated.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <div key={s.name}
                className="group bg-ln-cream rounded-2xl p-7 border border-ln-terracotta/5 hover:border-ln-terracotta/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-ln-terracotta/10 flex items-center justify-center mb-5 group-hover:bg-ln-terracotta/20 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-ln-terracotta" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-playfair text-ln-espresso">{s.name}</h3>
                <p className="mt-2 text-sm text-ln-warm-gray leading-relaxed">{s.desc}</p>
                <p className="mt-4 text-ln-terracotta font-medium">{s.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services"
              className="inline-flex items-center gap-2 text-ln-olive hover:text-ln-terracotta transition-colors text-xs tracking-[0.15em] uppercase font-medium">
              View All Treatments
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURED PACKAGES ═══════════ */}
      <section className="py-24 bg-ln-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ln-terracotta text-xs tracking-[0.2em] uppercase">Save More</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-ln-espresso">Featured Packages</h2>
            <p className="mt-4 text-ln-warm-gray max-w-xl mx-auto text-sm">Thoughtfully paired treatments that work together beautifully — for better results and better value.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPackages.map(pkg => (
              <div key={pkg.name}
                className="group bg-ln-marble rounded-2xl overflow-hidden border border-ln-terracotta/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={'/images/' + pkg.image} alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-playfair text-ln-espresso">{pkg.name}</h3>
                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className="text-2xl font-playfair text-ln-terracotta">{pkg.price}</span>
                    {pkg.original && <span className="text-xs line-through text-ln-warm-gray">{pkg.original}</span>}
                  </div>
                  <p className="mt-2 text-xs text-ln-warm-gray leading-relaxed">{pkg.desc}</p>
                  <Link to="/packages"
                    className="mt-4 block w-full text-center py-2.5 rounded-full text-sm font-medium bg-ln-espresso text-ln-cream hover:bg-ln-espresso-light transition-all duration-200">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT PREVIEW ═══════════ */}
      <section className="py-24 bg-gradient-espresso relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(201,169,110,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(199,107,74,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-ln-gold text-xs tracking-[0.2em] uppercase">Our Story</span>
              <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-ln-cream">Artistry Rooted in Science</h2>
              <p className="mt-6 text-ln-cream/50 leading-relaxed text-sm">
                Born from the belief that exceptional skincare is built on exceptional science, La Nuova was created to redefine the aesthetic experience in Skokie. Our approach draws from Italian design philosophy — intentional, warm, and enduring — paired with the most advanced medical technology available.
              </p>
              <p className="mt-4 text-ln-cream/50 leading-relaxed text-sm">
                Every detail matters. From the calming interiors to the clinical precision of our treatments, we have created a space where you can exhale, trust the process, and emerge transformed.
              </p>
              <Link to="/about"
                className="mt-8 inline-flex items-center gap-2 text-ln-terracotta hover:text-ln-terracotta-soft transition-colors text-xs tracking-[0.15em] uppercase font-medium">
                Learn More About Us
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl border border-ln-cream/10 p-10 flex items-center justify-center bg-ln-espresso-light/30">
                <div className="text-center">
                  <span className="text-6xl text-ln-terracotta/20 font-playfair">"</span>
                  <p className="text-ln-cream/40 text-sm italic max-w-xs mx-auto -mt-4">&ldquo;True beauty is not about changing who you are — it's about revealing the best version of yourself.&rdquo;</p>
                  <p className="mt-3 text-ln-gold text-sm font-playfair">— La Nuova Philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="py-24 bg-ln-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ln-olive text-xs tracking-[0.2em] uppercase">Testimonials</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-ln-espresso">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="bg-ln-cream rounded-2xl p-8 border border-ln-terracotta/5 shadow-sm">
                <span className="text-4xl text-ln-terracotta/20 font-playfair leading-none">"</span>
                <p className="text-ln-espresso/80 text-sm leading-relaxed italic -mt-2">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 pt-4 border-t border-ln-terracotta/10">
                  <p className="text-sm font-medium text-ln-espresso">{t.name}</p>
                  <p className="text-xs text-ln-warm-gray">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY ═══════════ */}
      <section className="py-24 bg-gradient-espresso relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(201,169,110,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(199,107,74,0.04)_0%,transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-ln-gold text-xs tracking-[0.2em] uppercase">Follow Us</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-ln-cream">La Nuova Life</h2>
            <p className="mt-4 text-ln-cream/50 max-w-xl mx-auto text-sm">Follow @lanuovaskokie for a glimpse into studio life, treatment transformations, and the faces behind our practice.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              '/images/facial-1.jpg', '/images/facial-2.jpg', '/images/facial-3.jpg',
              '/images/facial-4.jpg', '/images/facial-5.jpg', '/images/facial-6.jpg',
            ].map((src, i) => (
              <a key={i} href="#" className="group relative aspect-square overflow-hidden rounded-xl">
                <img src={src} alt={`La Nuova treatment ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-ln-espresso/0 group-hover:bg-ln-espresso/40 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="py-20 bg-ln-cream relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-6xl text-ln-terracotta/10 font-playfair">✦</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-playfair text-ln-espresso">Ready to <span className="text-gradient-terracotta">Transform</span>?</h2>
          <p className="mt-4 text-ln-warm-gray text-sm">Every great transformation begins with a conversation. Book your consultation and let us take it from here.</p>
          <Link to="/contact"
            className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 bg-ln-terracotta text-white font-medium text-base rounded-full hover:brightness-110 transition-all duration-200 shadow-[0_4px_16px_rgba(199,107,74,0.3)]">
            Book Your Consultation
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
