import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-espresso relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(201,169,110,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(199,107,74,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-ln-gold text-xs tracking-[0.2em] uppercase mb-6">
            <span className="w-6 h-px bg-ln-gold" />
            Connect
            <span className="w-6 h-px bg-ln-gold" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-playfair text-ln-cream">Get in Touch</h1>
          <p className="mt-4 text-ln-cream/50 max-w-xl mx-auto text-sm">
            Whether you have a specific treatment in mind or are simply curious about where to start, our team is here to listen. Fill out the form below and we will reach out within 24 hours to arrange your complimentary skin consultation.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-24 bg-ln-marble">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ln-espresso mb-1.5">Full Name</label>
                      <input id="name" type="text" required
                        className="w-full px-4 py-3 rounded-xl border border-ln-terracotta/20 bg-ln-cream text-ln-espresso placeholder:text-ln-warm-gray/50 focus:outline-none focus:border-ln-terracotta focus:ring-1 focus:ring-ln-terracotta/30 transition-all"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ln-espresso mb-1.5">Email Address</label>
                      <input id="email" type="email" required
                        className="w-full px-4 py-3 rounded-xl border border-ln-terracotta/20 bg-ln-cream text-ln-espresso placeholder:text-ln-warm-gray/50 focus:outline-none focus:border-ln-terracotta focus:ring-1 focus:ring-ln-terracotta/30 transition-all"
                        placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ln-espresso mb-1.5">Phone Number</label>
                    <input id="phone" type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-ln-terracotta/20 bg-ln-cream text-ln-espresso placeholder:text-ln-warm-gray/50 focus:outline-none focus:border-ln-terracotta focus:ring-1 focus:ring-ln-terracotta/30 transition-all"
                      placeholder="(773) 900-5559" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-ln-espresso mb-1.5">Interested In</label>
                    <select id="service"
                      className="w-full px-4 py-3 rounded-xl border border-ln-terracotta/20 bg-ln-cream text-ln-espresso focus:outline-none focus:border-ln-terracotta focus:ring-1 focus:ring-ln-terracotta/30 transition-all">
                      <option value="">Select a service...</option>
                      <option>24K Nano Gold Recovery Facial</option>
                      <option>Oxygen Jet Facial</option>
                      <option>Collagen Regeneration Facial</option>
                      <option>Cryogenic Correction</option>
                      <option>LED Light Therapy</option>
                      <option>Lymphatic Facial Lift</option>
                      <option>Therapeutic Heat Facial</option>
                      <option>Package / Membership</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ln-espresso mb-1.5">Your Message</label>
                    <textarea id="message" rows={5} required
                      className="w-full px-4 py-3 rounded-xl border border-ln-terracotta/20 bg-ln-cream text-ln-espresso placeholder:text-ln-warm-gray/50 focus:outline-none focus:border-ln-terracotta focus:ring-1 focus:ring-ln-terracotta/30 transition-all resize-none"
                      placeholder="Tell us about your skincare goals or any questions..." />
                  </div>
                  <button type="submit"
                    className="w-full py-3.5 bg-ln-terracotta text-white font-medium tracking-wider uppercase text-sm rounded-full hover:brightness-110 transition-all duration-200 shadow-[0_4px_16px_rgba(199,107,74,0.3)]">
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-ln-terracotta/10 flex items-center justify-center mb-6">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-ln-terracotta" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <h3 className="text-2xl font-playfair text-ln-espresso">Thank You!</h3>
                  <p className="mt-3 text-ln-warm-gray text-sm max-w-sm">Thank you for reaching out. A member of our team will be in touch within 24 hours to schedule your consultation and answer any questions.</p>
                  <button onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-2.5 border border-ln-terracotta/30 text-ln-terracotta text-xs tracking-wider uppercase rounded-full hover:bg-ln-terracotta/5 transition-all">
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-playfair text-ln-espresso mb-6">Visit Us</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-ln-terracotta/10 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-ln-terracotta" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ln-espresso">Address</p>
                      <p className="text-sm text-ln-warm-gray mt-1">4905 Old Orchard Center, Unit L9<br />Skokie, IL 60077</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-ln-terracotta/10 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-ln-terracotta" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ln-espresso">Phone</p>
                      <p className="text-sm text-ln-warm-gray mt-1">(708) 853-6660</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-ln-terracotta/10 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-ln-terracotta" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ln-espresso">Email</p>
                      <p className="text-sm text-ln-warm-gray mt-1">support@elcconsulting2.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-ln-terracotta/10 pt-8">
                <h3 className="text-xl font-playfair text-ln-espresso mb-6">Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Sunday', hours: '11:00 AM – 7:00 PM' },
                    { day: 'Monday – Thursday', hours: '10:00 AM – 8:00 PM' },
                    { day: 'Friday – Saturday', hours: '10:00 AM – 9:00 PM' },
                  ].map(s => (
                    <div key={s.day} className="flex items-center justify-between py-2 border-b border-ln-terracotta/5 last:border-0">
                      <span className="text-sm text-ln-espresso">{s.day}</span>
                      <span className="text-sm text-ln-warm-gray">{s.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-ln-terracotta/10 pt-8">
                <h3 className="text-xl font-playfair text-ln-espresso mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {['Instagram', 'Facebook', 'Yelp', 'TikTok'].map(s => (
                    <a key={s} href="#"
                      className="w-10 h-10 rounded-full bg-ln-terracotta/10 flex items-center justify-center text-ln-terracotta hover:bg-ln-terracotta/20 hover:text-ln-espresso transition-all text-xs tracking-wider uppercase font-medium"
                      title={s}>{s[0]}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-ln-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-ln-olive text-xs tracking-[0.2em] uppercase">Directions</span>
            <h2 className="mt-3 text-4xl font-playfair text-ln-espresso">Find Us</h2>
            <p className="mt-3 text-ln-warm-gray text-sm max-w-xl mx-auto">Conveniently situated at Old Orchard Center in Skokie. Easy access from the Edens Expressway, with complimentary on-site parking.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-ln-terracotta/10 shadow-sm">
            <div className="aspect-[21/9] bg-ln-espresso flex items-center justify-center">
              <div className="text-center px-6">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-ln-terracotta/40 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-ln-cream/70 text-sm">4905 Old Orchard Center, Unit L9, Skokie, IL 60077</p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-ln-cream/50">
                  <span>Free parking available</span>
                  <span className="w-px h-4 bg-ln-terracotta/20" />
                  <span>Wheelchair accessible</span>
                  <span className="w-px h-4 bg-ln-terracotta/20" />
                  <span>Near Old Orchard Mall</span>
                </div>
                <a href="https://maps.google.com/?q=4905+Old+Orchard+Center+Skokie+IL+60077" target="_blank" rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-ln-terracotta text-white text-xs tracking-wider uppercase rounded-full font-medium hover:brightness-110 transition-all duration-200">
                  Open in Google Maps
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'By Car', desc: 'From the Edens Expressway (I-94), take Old Orchard Road east. Ample complimentary parking is available directly in front of the center.' },
              { title: 'By CTA', desc: 'Take the Yellow Line to Skokie station, then transfer to Pace bus routes 250, 422, or 410 — all stop within walking distance of the studio.' },
              { title: 'By Bus', desc: 'Pace routes 250, 422, and 410 serve Old Orchard Center directly. The bus stop is a short walk from our entrance at Unit L9.' },
            ].map(d => (
              <div key={d.title} className="p-5 rounded-xl bg-ln-marble border border-ln-terracotta/5 text-center">
                <h4 className="text-sm font-playfair text-ln-espresso">{d.title}</h4>
                <p className="mt-1.5 text-xs text-ln-warm-gray leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
