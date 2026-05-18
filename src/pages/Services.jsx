import { Link } from 'react-router-dom'

const allServices = [
  {
    name: 'HydraFacial MD',
    desc: 'The gold standard in medical-grade facials. Vortex-cleansing technology extracts impurities while infusing antioxidants, peptides, and hyaluronic acid deep into the skin. Instant luminosity with zero downtime.',
    price: '$169',
    duration: '45 min',
    tag: 'Hydrating',
    image: 'facial-2.jpg',
  },
  {
    name: 'Custom Clinical Facial',
    desc: 'A fully personalized facial experience curated to your skin\'s exact needs. Advanced serums, therapeutic massage, and targeted mask therapy deliver visible renewal — no harsh chemicals, no needles, just pure results.',
    price: '$179',
    duration: '45 min',
    tag: 'Clinical Grade',
    image: 'facial-4.jpg',
  },
  {
    name: 'Dermaplaning + Enzyme Mask',
    desc: 'A gentle physical exfoliation removes vellus hair and surface debris, allowing a brightening enzyme mask to penetrate deeply. The result is impossibly smooth, camera-ready skin — pure and simple.',
    price: '$129',
    duration: '40 min',
    tag: 'Photo Prep',
    image: 'facial-2.jpg',
  },
  {
    name: 'HydraFacial + LED Boost',
    desc: 'The ultimate facial duo. Start with the deep-cleansing, antioxidant-rich HydraFacial MD, then lock in results with LED light therapy. Glowing, refreshed skin in under an hour — no downtime, no needles.',
    price: '$229',
    duration: '60 min',
    tag: 'Power Combo',
    image: 'spa-1.jpg',
  },
  {
    name: 'Vitamin C Brightening Facial',
    desc: 'A luminous awakening facial that combines gentle enzymatic exfoliation with a potent vitamin C infusion. Uneven tone fades, dullness lifts, and your natural radiance emerges after a single session.',
    price: '$149',
    duration: '50 min',
    tag: 'Brightening',
    image: 'facial-3.jpg',
  },
  {
    name: 'Deep Pore Cleansing Facial',
    desc: 'A thorough, results-driven facial for congested skin. Steam, gentle extraction, purifying mask, and calming serum work together to clear pores and restore balance — without irritation or needles.',
    price: '$139',
    duration: '50 min',
    tag: 'Clarifying',
    image: 'facial-5.jpg',
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
          <h1 className="text-5xl sm:text-6xl font-playfair text-ln-cream">Pure Facial Services</h1>
          <p className="mt-4 text-ln-cream/50 max-w-xl mx-auto text-sm">
            Needle-free, microneedling-free — just pure, transformative facial treatments. Every service is rooted in clinical evidence and delivered with an artist's sensibility for radiant, healthy skin.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-ln-marble">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
