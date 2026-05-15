import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

export default function Checkout() {
  const { items, totalItems, totalPrice, clearCart } = useCart()
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' })
  const [card, setCard] = useState({ number: '', expiry: '', cvc: '' })
  const [submitted, setSubmitted] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleCardChange = (e) => setCard({ ...card, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)
    setError('')
    try {
      const res = await fetch('/api/place-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty })),
          customer: { name: form.name, email: form.email, phone: form.phone, notes: form.notes },
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to place order')
      clearCart()
      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setProcessing(false)
    }
  }

  if (items.length === 0 && !submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-ln-marble px-4">
        <div className="text-center max-w-md">
          <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto text-ln-terracotta/40 mb-6" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M6.5 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3.5-4H6.5zM3 6h18" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          <h1 className="text-3xl font-playfair text-ln-espresso mb-3">Nothing to Checkout</h1>
          <p className="text-ln-warm-gray mb-8">Your cart is empty. Add some items first.</p>
          <Link to="/packages"
            className="inline-block bg-ln-terracotta text-white px-7 py-3.5 font-medium text-base rounded-full shadow-[0_4px_16px_rgba(199,107,74,0.3)] hover:brightness-110 transition-all duration-200">
            Browse Packages
          </Link>
        </div>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-ln-marble px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 bg-ln-terracotta/10 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-ln-terracotta" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="text-3xl font-playfair text-ln-espresso mb-3">Order Placed!</h1>
          <p className="text-ln-warm-gray mb-2">Your order has been confirmed.</p>
          <p className="text-ln-warm-gray mb-8">We'll be in touch within 24 hours.</p>
          <Link to="/"
            className="inline-block bg-ln-terracotta text-white px-7 py-3.5 font-medium text-base rounded-full shadow-[0_4px_16px_rgba(199,107,74,0.3)] hover:brightness-110 transition-all duration-200">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-ln-marble min-h-screen">
      <section className="py-20 bg-gradient-espresso relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(201,169,110,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(199,107,74,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-ln-gold text-xs tracking-[0.2em] uppercase mb-6">
            <span className="w-6 h-px bg-ln-gold" />
            Secure
            <span className="w-6 h-px bg-ln-gold" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-playfair text-ln-cream">Checkout</h1>
          <p className="mt-4 text-ln-cream/50">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-ln-cream rounded-2xl border border-ln-terracotta/5 shadow-sm p-6 sm:p-8">
                <h2 className="text-xl font-playfair text-ln-espresso mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-ln-warm-gray mb-1.5">Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl border border-ln-terracotta/20 bg-ln-marble text-ln-espresso text-sm focus:outline-none focus:ring-2 focus:ring-ln-terracotta/40" />
                  </div>
                  <div>
                    <label className="block text-sm text-ln-warm-gray mb-1.5">Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl border border-ln-terracotta/20 bg-ln-marble text-ln-espresso text-sm focus:outline-none focus:ring-2 focus:ring-ln-terracotta/40" />
                  </div>
                  <div>
                    <label className="block text-sm text-ln-warm-gray mb-1.5">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-ln-terracotta/20 bg-ln-marble text-ln-espresso text-sm focus:outline-none focus:ring-2 focus:ring-ln-terracotta/40" />
                  </div>
                  <div>
                    <label className="block text-sm text-ln-warm-gray mb-1.5">Special Requests or Notes</label>
                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-ln-terracotta/20 bg-ln-marble text-ln-espresso text-sm focus:outline-none focus:ring-2 focus:ring-ln-terracotta/40 resize-none" />
                  </div>
                </div>
              </div>

              <div className="bg-ln-cream rounded-2xl border border-ln-terracotta/5 shadow-sm p-6 sm:p-8">
                <h2 className="text-xl font-playfair text-ln-espresso mb-6">Payment</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-ln-warm-gray mb-1.5">Card Number</label>
                    <input type="text" name="number" value={card.number} onChange={handleCardChange}
                      placeholder="1234 5678 9012 3456" maxLength={19} required
                      className="w-full px-4 py-3 rounded-xl border border-ln-terracotta/20 bg-ln-marble text-ln-espresso text-sm focus:outline-none focus:ring-2 focus:ring-ln-terracotta/40" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-ln-warm-gray mb-1.5">Expiry Date</label>
                      <input type="text" name="expiry" value={card.expiry} onChange={handleCardChange}
                        placeholder="MM/YY" maxLength={5} required
                        className="w-full px-4 py-3 rounded-xl border border-ln-terracotta/20 bg-ln-marble text-ln-espresso text-sm focus:outline-none focus:ring-2 focus:ring-ln-terracotta/40" />
                    </div>
                    <div>
                      <label className="block text-sm text-ln-warm-gray mb-1.5">CVC</label>
                      <input type="text" name="cvc" value={card.cvc} onChange={handleCardChange}
                        placeholder="123" maxLength={4} required
                        className="w-full px-4 py-3 rounded-xl border border-ln-terracotta/20 bg-ln-marble text-ln-espresso text-sm focus:outline-none focus:ring-2 focus:ring-ln-terracotta/40" />
                    </div>
                  </div>
                  <p className="text-xs text-ln-warm-gray mt-2">
                    This is a demo — no real payment will be processed. Your order will be recorded and we'll contact you to arrange payment.
                  </p>
                </div>
                {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
              </div>

              <button type="submit" disabled={processing}
                className="w-full bg-ln-terracotta text-white font-medium text-base py-3.5 rounded-full shadow-[0_4px_16px_rgba(199,107,74,0.3)] hover:brightness-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                {processing ? 'Placing Order…' : `Place Order — $${totalPrice.toFixed(2)}`}
              </button>

              <Link to="/cart" className="block text-center text-sm text-ln-terracotta hover:text-ln-espresso transition-colors">
                &larr; Back to Cart
              </Link>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-ln-cream rounded-2xl border border-ln-terracotta/5 shadow-sm p-6 sm:p-8 sticky top-28">
              <h2 className="text-lg font-playfair text-ln-espresso mb-6">Order Summary</h2>
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-ln-espresso truncate">{item.name}</p>
                      <p className="text-xs text-ln-warm-gray">Qty: {item.qty}</p>
                    </div>
                    <span className="text-sm text-ln-espresso font-medium ml-4">${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-ln-terracotta/10 mt-6 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-ln-warm-gray">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-playfair text-ln-espresso pt-2 border-t border-ln-terracotta/10">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
