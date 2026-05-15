import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQty, totalItems, totalPrice } = useCart()

  return (
    <>
      {drawerOpen && (
        <div className="fixed inset-0 z-[60] bg-ln-espresso/40 backdrop-blur-sm transition-opacity" onClick={closeDrawer} />
      )}
      <div className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-ln-marble shadow-2xl transform transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-ln-terracotta/10">
          <h2 className="text-lg font-playfair text-ln-espresso">
            Cart
            {totalItems > 0 && <span className="ml-2 text-sm text-ln-warm-gray">({totalItems})</span>}
          </h2>
          <button onClick={closeDrawer} className="p-2 text-ln-warm-gray hover:text-ln-espresso transition-colors" aria-label="Close">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col h-[calc(100%-140px)] overflow-hidden">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <svg viewBox="0 0 24 24" className="w-14 h-14 text-ln-terracotta/30 mb-4" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M6.5 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3.5-4H6.5zM3 6h18" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <p className="text-ln-warm-gray text-sm">Your cart is empty</p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex items-start gap-3 bg-ln-cream rounded-xl p-4 border border-ln-terracotta/5 shadow-sm">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-ln-espresso truncate">{item.name}</h4>
                    <p className="text-xs text-ln-warm-gray mt-0.5">${item.price.toFixed(2)} each</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-7 h-7 rounded-full border border-ln-terracotta/20 text-xs text-ln-warm-gray hover:text-ln-espresso hover:border-ln-terracotta/40 transition-colors">−</button>
                      <span className="text-sm font-medium text-ln-espresso min-w-[1.5rem] text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-7 h-7 rounded-full border border-ln-terracotta/20 text-xs text-ln-warm-gray hover:text-ln-espresso hover:border-ln-terracotta/40 transition-colors">+</button>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-medium text-ln-espresso">${(item.price * item.qty).toFixed(2)}</p>
                    <button onClick={() => removeItem(item.id)}
                      className="text-xs text-ln-warm-gray hover:text-red-500 transition-colors mt-1">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {items.length > 0 && (
            <div className="border-t border-ln-terracotta/10 px-6 py-5 bg-ln-cream">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-ln-warm-gray">Subtotal</span>
                <span className="text-lg font-playfair text-ln-espresso">${totalPrice.toFixed(2)}</span>
              </div>
              <Link to="/checkout" onClick={closeDrawer}
                className="block w-full text-center bg-ln-terracotta text-white py-3 rounded-full text-sm tracking-wider uppercase font-medium hover:brightness-110 transition-all shadow-[0_4px_16px_rgba(199,107,74,0.3)] mb-2">
                Checkout
              </Link>
              <Link to="/cart" onClick={closeDrawer}
                className="block w-full text-center py-2.5 text-sm text-ln-terracotta hover:text-ln-espresso transition-colors">
                View Full Cart
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
