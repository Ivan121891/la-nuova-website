import { useState } from 'react'
import { useCart } from '../contexts/CartContext'

const packages = [
  {
    id: 'north-shore-glow',
    name: 'The North Shore Glow',
    price: '1500',
    original: '1800',
    desc: 'The perfect first step into medical aesthetics. A luminous blend of deep-cleansing HydraFacial MD and LED therapy for radiant, balanced skin.',
    items: ['HydraFacial MD (Full Session)', 'LED Light Therapy — Red & Blue', 'Custom Brightening Enzyme Mask'],
    popular: true,
    image: 'facial-1.jpg',
  },
  {
    id: 'old-orchard',
    name: 'The Old Orchard',
    price: '1700',
    original: '2000',
    desc: 'A luxurious resurfacing ritual — HydraFacial MD deeply cleanses and infuses antioxidants, followed by a custom clinical facial that reveals fresh, luminous skin.',
    items: ['Full HydraFacial MD Session', 'Custom Clinical Facial', 'Calming Post-Treatment Recovery Mask'],
    popular: false,
    image: 'facial-2.jpg',
  },
  {
    id: 'laser-renewal',
    name: 'Facial Renewal Course',
    price: '2000',
    original: '2400',
    desc: 'Three sessions of our advanced HydraFacial MD, spaced for optimal cumulative results. Each visit deep-cleanses, infuses, and rejuvenates — texture refines, tone brightens, and luminosity builds.',
    items: ['3 Full HydraFacial MD Sessions', 'Personalized Home-Care Prescription', 'Progress Tracking & Photo Analysis'],
    popular: false,
    image: 'facial-4.jpg',
  },
  {
    id: 'monthly-membership',
    name: 'Monthly Membership',
    price: '129',
    original: null,
    desc: 'Consistency is the secret to great skin. One advanced treatment monthly, member-only pricing, and the flexibility to pause whenever life gets busy.',
    items: ['One Advanced Treatment Monthly (up to $169 value)', '20% Off All Add-On Services', '15% Off Medical-Grade Retail', 'Complimentary Birthday Treatment'],
    popular: false,
    monthly: true,
    image: 'spa-1.jpg',
  },
  {
    id: 'clear-skin',
    name: 'Clear Skin Protocol',
    price: '1600',
    original: '1900',
    desc: 'A clinically driven protocol for congested and acne-prone skin. Salicylic peel exfoliates deeply, blue LED calms inflammation, and clay draws impurities to the surface.',
    items: ['Medical-Grade Salicylic Acid Peel', 'LED Blue Light Therapy Session', 'Purifying Clay Mask Treatment', 'Home-Care Starter Kit (Travel-Size)'],
    popular: false,
    image: 'facial-5.jpg',
  },
  {
    id: 'age-defy',
    name: 'Age-Defy Ritual',
    price: '1800',
    original: '2150',
    desc: 'The gold-standard HydraFacial MD deep-cleans and infuses, while LED red light therapy and a collagen-boosting enzyme peel work synergistically to restore firmness and glow.',
    items: ['Full HydraFacial MD Session', 'LED Red Light Therapy — Collagen Boost', 'Anti-Aging Enzyme & Peptide Mask'],
    popular: false,
    image: 'facial-6.jpg',
  },
]

export default function Packages() {
  const { addItem } = useCart()
  const [added, setAdded] = useState({})

  const handleAdd = (pkg) => {
    addItem({ id: pkg.id, name: pkg.name, price: Number(pkg.price) })
    setAdded(prev => ({ ...prev, [pkg.id]: true }))
    setTimeout(() => setAdded(prev => ({ ...prev, [pkg.id]: false })), 2000)
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-espresso relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(201,169,110,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(199,107,74,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-ln-gold text-xs tracking-[0.2em] uppercase mb-6">
            <span className="w-6 h-px bg-ln-gold" />
            Value
            <span className="w-6 h-px bg-ln-gold" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-playfair text-ln-cream">Packages & Memberships</h1>
          <p className="mt-4 text-ln-cream/50 max-w-xl mx-auto text-sm">
            Great treatments are even better together. Our packages pair complementary services for enhanced results and exceptional value — with the flexibility you deserve.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-ln-marble">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {packages.map(pkg => (
              <div key={pkg.name}
                className={`relative rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  pkg.popular
                    ? 'bg-ln-espresso text-ln-cream border-ln-terracotta/30 shadow-xl scale-105 lg:scale-105'
                    : 'bg-ln-cream text-ln-espresso border-ln-terracotta/10'
                }`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={'/images/' + pkg.image} alt={pkg.name}
                    className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  {pkg.popular && (
                    <div className="bg-ln-terracotta text-white text-[10px] tracking-widest uppercase font-semibold px-3 py-0.5 rounded-full inline-block mb-2">Most Popular</div>
                  )}
                  {pkg.monthly && (
                    <div className="bg-ln-olive text-white text-[10px] tracking-widest uppercase font-semibold px-3 py-0.5 rounded-full inline-block mb-2">Membership</div>
                  )}
                  <h3 className={`text-base font-playfair ${pkg.popular ? 'text-ln-cream' : 'text-ln-espresso'}`}>{pkg.name}</h3>
                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className={`text-2xl font-playfair ${pkg.popular ? 'text-ln-terracotta' : 'text-ln-espresso'}`}>${pkg.price}</span>
                    {pkg.original && <span className="text-xs line-through text-ln-warm-gray">${pkg.original}</span>}
                    {!pkg.monthly && <span className="text-xs text-ln-warm-gray">/ total</span>}
                    {pkg.monthly && <span className="text-xs text-ln-warm-gray">/ month</span>}
                  </div>
                  <p className={`mt-2 text-xs leading-relaxed ${pkg.popular ? 'text-ln-cream/60' : 'text-ln-warm-gray'}`}>{pkg.desc}</p>
                  <ul className="mt-3 space-y-1.5">
                    {pkg.items.map(item => (
                      <li key={item} className="flex items-start gap-1.5 text-xs">
                        <svg viewBox="0 0 24 24" className={`w-3 h-3 mt-0.5 shrink-0 ${pkg.popular ? 'text-ln-terracotta' : 'text-ln-olive'}`} fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span className={pkg.popular ? 'text-ln-cream/70' : 'text-ln-warm-gray'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleAdd(pkg)}
                    className={`block w-full text-center py-2.5 mt-4 rounded-full text-sm font-medium transition-all duration-200 hover:brightness-110 ${
                      added[pkg.id]
                        ? 'bg-green-600 text-white'
                        : pkg.popular
                          ? 'bg-ln-terracotta text-white'
                          : 'bg-ln-espresso text-ln-cream'
                    }`}>
                    {added[pkg.id] ? 'Added ✓' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fine print */}
      <section className="py-16 bg-ln-cream border-t border-ln-terracotta/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs text-ln-warm-gray leading-relaxed">
            * All package prices listed pre-tax. Packages must be redeemed within six months of purchase and are non-refundable but transferable to another individual. Membership auto-renews monthly and may be canceled with 30 days written notice. Gift cards are available for any amount — contact us to order.
          </p>
        </div>
      </section>
    </div>
  )
}
