import { Link } from 'react-router-dom'

const allServices = [
  {
    name: 'Signature Micro-Needling',
    desc: 'Controlled micro-injuries awaken your skin\'s innate repair mechanisms, stimulating collagen and elastin production. Fine lines soften, scars diminish, and texture transforms over a series of sessions.',
    price: '$199',
    duration: '60 min',
    tag: 'Collagen Boost',
    image: 'facial-1.jpg',
  },
  {
    name: 'HydraFacial MD',
    desc: 'The vortex-cleansing technology extracts impurities while infusing the skin with antioxidants, peptides, and hyaluronic acid. Instant luminosity with zero downtime.',
    price: '$169',
    duration: '45 min',
    tag: 'Hydrating',
    image: 'facial-2.jpg',
  },
  {
    name: 'Laser Genesis',
    desc: 'A gentle, warming laser that works beneath the surface to calm diffuse redness, tighten enlarged pores, and restore uniform tone. Comfortable enough for a lunch break.',
    price: '$249',
    duration: '45 min',
    tag: 'Laser',
    image: 'facial-3.jpg',
  },
  {
    name: 'Medical-Grade Chemical Peel',
    desc: 'Clinical-strength solutions, artfully selected for your unique concerns. Pigmentation, acne scarring, and surface dullness are visibly improved after the first application.',
    price: '$179',
    duration: '45 min',
    tag: 'Deep Resurfacing',
    image: 'facial-4.jpg',
  },
  {
    name: 'LED Light Therapy',
    desc: 'Red light stimulates cellular repair and collagen synthesis; blue light targets acne-causing bacteria. Combined or solo, LED therapy is a powerful, painless boost for any skin type.',
    price: '$89',
    duration: '25 min',
    tag: 'Therapeutic',
    image: 'facial-5.jpg',
  },
  {
    name: 'PRP Microneedling (Vampire Facial)',
    desc: 'Your blood\'s own growth factors — concentrated and delivered precisely into the skin via micro-needling. This advanced treatment triggers a profound healing response for dramatic rejuvenation.',
    price: '$399',
    duration: '75 min',
    tag: 'Advanced',
    image: 'facial-6.jpg',
  },
  {
    name: 'HydraFacial + LED Boost',
    desc: 'The ultimate one-two punch. Start with the deep-cleansing, antioxidant-rich HydraFacial MD, then lock in results with LED light therapy. Glowing skin in under an hour.',
    price: '$229',
    duration: '60 min',
    tag: 'Power Combo',
    image: 'spa-1.jpg',
  },
  {
    name: 'Dermaplaning + Enzyme Mask',
    desc: 'A gentle physical exfoliation removes vellus hair and surface debris, allowing a brightening enzyme mask to penetrate deeply. The result is impossibly smooth, camera-ready skin.',
    price: '$129',
    duration: '40 min',
    tag: 'Photo Prep',
    image: 'facial-2.jpg',
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-espresso relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(201,169,110,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(199,107,74,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-ln-gold text-xs tracking-[0.2em] uppercase mb-6">
            <span className="w-6 h-px bg-ln-gold" />
            Treatments
            <span className="w-6 h-px bg-ln-gold" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-playfair text-ln-cream">Medical Aesthetic Services</h1>
          <p className="mt-4 text-ln-cream/50 max-w-xl mx-auto text-sm">
            Every treatment we offer is rooted in clinical evidence and delivered with an artist's sensibility — because your skin deserves nothing less than exceptional care.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-ln-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allServices.map(s => (
              <div key={s.name}
                className="group bg-ln-cream rounded-2xl overflow-hidden border border-ln-terracotta/5 hover:shadow-lg transition-all duration-300">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={'/images/' + s.image} alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-playfair text-ln-espresso">{s.name}</h3>
                      <span className="inline-block mt-2 text-[10px] tracking-wider uppercase px-3 py-1 rounded-full bg-ln-terracotta/10 text-ln-terracotta font-medium">{s.tag}</span>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="text-2xl font-playfair text-ln-terracotta">{s.price}</p>
                      <p className="text-xs text-ln-warm-gray">{s.duration}</p>
                    </div>
                  </div>
                  <p className="text-sm text-ln-warm-gray leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ln-cream border-t border-ln-terracotta/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair text-ln-espresso">Every Skin Deserves a Custom Approach</h2>
          <p className="mt-3 text-ln-warm-gray text-sm">Book a complimentary consultation and let our specialists design a roadmap tailored to your unique skin concerns and aspirations.</p>
          <Link to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-ln-terracotta text-white font-medium text-base rounded-full hover:brightness-110 transition-all duration-200 shadow-[0_4px_16px_rgba(199,107,74,0.3)]">
            Schedule a Consultation
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
