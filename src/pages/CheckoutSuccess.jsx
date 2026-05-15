import { Link } from 'react-router-dom'

export default function CheckoutSuccess() {
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
