import { Link } from 'react-router-dom'

const team = [
  {
    name: 'Dr. Sarah Chen', role: 'Medical Director',
    bio: 'Double board-certified with over fifteen years in aesthetic medicine, Dr. Chen is the clinical backbone of La Nuova. She approaches every face as both a science and an art — balancing precision with intuition to create bespoke treatment protocols.',
  },
  {
    name: 'Maya Williams', role: 'Lead Aesthetician',
    bio: 'With nearly a decade of specialized experience, Maya has honed her craft across advanced facial therapies, chemical peels, and transformative skin treatments. Guests return for her gentle technique, meticulous attention, and gift for making even a first visit feel familiar.',
  },
  {
    name: 'James Park', role: 'Clinical Specialist',
    bio: 'James brings deep expertise in advanced facial technologies and non-invasive skin therapies, paired with a rare ability to demystify complex treatments. Guests appreciate his thoroughness, patience, and knack for turning clinical jargon into clear, reassuring guidance.',
  },
]

const values = [
  { title: 'Evidence-Based Care', desc: 'Every protocol we offer is grounded in peer-reviewed research and delivered with FDA-cleared devices. We let the science lead — no trends, no shortcuts.' },
  { title: 'Italian-Inspired Design', desc: 'Our studio is a study in warmth and intention. From the earthy palette to the sculptural details, every element is chosen to make you feel cared for.' },
  { title: 'Natural Results', desc: 'We believe the best results look like you — only brighter, fresher, and more confident. Our philosophy is enhancement, not transformation.' },
  { title: 'Personalized Programs', desc: 'Your skin is as unique as your fingerprint. We invest the time to understand it fully before designing a treatment plan that is yours alone.' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-espresso relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(201,169,110,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(199,107,74,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-ln-gold text-xs tracking-[0.2em] uppercase mb-6">
            <span className="w-6 h-px bg-ln-gold" />
            About Us
            <span className="w-6 h-px bg-ln-gold" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-playfair text-ln-cream">Our Story</h1>
          <p className="mt-4 text-ln-cream/50 max-w-xl mx-auto text-sm">A story of science, sensibility, and the transformative power of personalized care — unfolding at Old Orchard Center in Skokie.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-ln-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-playfair text-ln-espresso leading-tight">Advanced Aesthetics, <span className="text-gradient-terracotta">Personal Touch</span></h2>
              <div className="mt-6 space-y-4 text-ln-warm-gray leading-relaxed text-sm">
                <p>La Nuova was born from a simple but powerful idea: that the best aesthetic care is both clinically excellent and deeply human. Our founders envisioned a space where advanced technology and genuine warmth coexist — a place where every treatment feels personal, not transactional.</p>
                <p>Situated at Old Orchard Center, our studio channels the spirit of Italian design — warm, crafted, and enduring. The terracotta tones, natural textures, and soft lighting are intentional: we wanted a space that feels more like a sophisticated retreat than a medical clinic. Every detail, from the consultation lounge to the treatment suite, is designed to put you at ease.</p>
                <p>Our practitioners are educators at heart. They take the time to understand your history, your concerns, and your aspirations before recommending a single step. Whether you are a first-time visitor or a returning guest, every interaction is anchored in transparency, respect, and clinical integrity.</p>
                <p>We measure our success not in procedures performed, but in the confidence our clients carry with them when they walk out our doors.</p>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square rounded-2xl overflow-hidden border border-ln-terracotta/10">
                <img src="/images/spa-1.jpg" alt="La Nuova studio interior, Skokie" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-ln-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ln-olive text-xs tracking-[0.2em] uppercase">Our Philosophy</span>
            <h2 className="mt-3 text-4xl font-playfair text-ln-espresso">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(v => (
              <div key={v.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-ln-terracotta/10 mx-auto flex items-center justify-center mb-5">
                  <div className="w-3 h-3 rounded-full bg-ln-terracotta" />
                </div>
                <h3 className="text-lg font-playfair text-ln-espresso">{v.title}</h3>
                <p className="mt-2 text-sm text-ln-warm-gray">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-ln-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ln-terracotta text-xs tracking-[0.2em] uppercase">Team</span>
            <h2 className="mt-3 text-4xl font-playfair text-ln-espresso">Meet Our Practitioners</h2>
            <p className="mt-3 text-ln-warm-gray max-w-xl mx-auto text-sm">A team united by expertise, driven by curiosity, and dedicated to helping you look and feel your absolute best.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map(member => (
              <div key={member.name}
                className="bg-ln-marble rounded-2xl p-8 border border-ln-terracotta/5 shadow-sm text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-ln-terracotta/20 to-ln-gold/20 flex items-center justify-center mb-5">
                  <span className="text-2xl font-playfair text-ln-terracotta">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-lg font-playfair text-ln-espresso">{member.name}</h3>
                <p className="text-sm text-ln-terracotta mt-1 font-medium">{member.role}</p>
                <p className="mt-4 text-sm text-ln-warm-gray leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-espresso relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair text-ln-cream">Experience the La Nuova Difference</h2>
          <p className="mt-3 text-ln-cream/50 text-sm">Experience the difference personalized, Italian-inspired care can make. Schedule your complimentary consultation and discover what La Nuova can do for your skin.</p>
          <Link to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-ln-terracotta text-white font-medium text-base rounded-full hover:brightness-110 transition-all duration-200 shadow-[0_4px_16px_rgba(199,107,74,0.3)]">
            Book Your Visit
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
