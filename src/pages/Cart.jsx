import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

export default function Cart() {
  const { items, removeItem, updateQty, clearCart, totalItems, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-ln-marble px-4">
        <div className="text-center max-w-md">
          <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto text-ln-terracotta/40 mb-6" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M6.5 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3.5-4H6.5zM3 6h18" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          <h1 className="text-3xl font-playfair text-ln-espresso mb-3">Your Cart is Empty</h1>
          <p className="text-ln-warm-gray mb-8">Looks like you haven't added any products yet.</p>
          <Link to="/packages"
            className="inline-block bg-ln-terracotta text-white px-8 py-3 rounded-full text-sm tracking-wider uppercase font-medium hover:brightness-110 transition-all shadow-[0_4px_16px_rgba(199,107,74,0.3)]">
            Browse Packages
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-ln-marble min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-espresso relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-ln-gold text-xs tracking-[0.2em] uppercase mb-6">
            <span className="w-6 h-px bg-ln-gold" />
            Review
            <span className="w-6 h-px bg-ln-gold" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-playfair text-ln-cream">Your Cart</h1>
          <p className="mt-4 text-ln-cream/50">{totalItems} item{totalItems !== 1 ? 's' : ''} &middot; ${totalPrice.toFixed(2)} total</p>
        </div>
      </section>

      {/* Cart items */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {items.map(item => (
            <div key={item.id}
              className="bg-ln-cream rounded-2xl border border-ln-terracotta/5 shadow-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-playfair text-ln-espresso">{item.name}</h3>
                <p className="text-sm text-ln-warm-gray mt-1">${item.price.toFixed(2)} each</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-ln-terracotta/20 rounded-full overflow-hidden">
                  <button onClick={() => updateQty(item.id, item.qty - 1)}
                    className="px-3 py-1.5 text-ln-warm-gray hover:text-ln-espresso hover:bg-ln-terracotta/5 transition-colors text-sm">−</button>
                  <span className="px-3 text-sm font-medium text-ln-espresso min-w-[2rem] text-center">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)}
                    className="px-3 py-1.5 text-ln-warm-gray hover:text-ln-espresso hover:bg-ln-terracotta/5 transition-colors text-sm">+</button>
                </div>
                <span className="text-ln-espresso font-medium min-w-[5rem] text-right">${(item.price * item.qty).toFixed(2)}</span>
                <button onClick={() => removeItem(item.id)}
                  className="p-2 text-ln-warm-gray hover:text-red-500 transition-colors" aria-label="Remove">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-10 bg-ln-cream rounded-2xl border border-ln-terracotta/5 shadow-sm p-6 sm:p-8">
          <div className="space-y-3">
            <div className="flex justify-between text-ln-warm-gray text-sm">
              <span>Subtotal ({totalItems} item{totalItems !== 1 ? 's' : ''})</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-ln-warm-gray text-sm">
              <span>Tax</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="border-t border-ln-terracotta/10 pt-3 flex justify-between text-lg font-playfair text-ln-espresso">
              <span>Estimated Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/checkout"
              className="flex-1 text-center bg-ln-terracotta text-white py-3.5 rounded-full text-sm tracking-wider uppercase font-medium hover:brightness-110 transition-all shadow-[0_4px_16px_rgba(199,107,74,0.3)]">
              Proceed to Checkout
            </Link>
            <button onClick={clearCart}
              className="px-6 py-3.5 border border-ln-terracotta/30 text-ln-warm-gray rounded-full text-sm tracking-wider uppercase hover:bg-ln-terracotta/5 transition-colors">
              Clear Cart
            </button>
          </div>
          <Link to="/packages"
            className="block mt-4 text-center text-sm text-ln-terracotta hover:text-ln-espresso transition-colors">
            &larr; Continue Shopping
          </Link>
        </div>
      </section>
    </div>
  )
}
