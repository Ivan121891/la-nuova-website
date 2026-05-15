import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/packages', label: 'Packages' },
  { to: '/about', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { totalItems, toggleDrawer } = useCart()

  return (
    <nav className="sticky top-0 z-50 bg-ln-marble/95 backdrop-blur-md border-b border-ln-terracotta/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="w-1.5 h-6 bg-ln-terracotta rounded-full" />
            <span className="text-xl lg:text-2xl font-playfair text-ln-espresso tracking-wide">la nuova</span>
          </Link>
          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <NavLink key={l.to} to={l.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                    isActive
                      ? 'text-ln-terracotta border-b-2 border-ln-terracotta font-medium'
                      : 'text-ln-warm-gray hover:text-ln-espresso'
                  }`
                }>{l.label}</NavLink>
            ))}
            {/* Cart icon */}
            <button onClick={toggleDrawer}
              className="relative ml-3 p-2 rounded-full text-ln-warm-gray hover:text-ln-terracotta hover:bg-ln-terracotta/5 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6.5 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3.5-4H6.5zM3 6h18" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-ln-terracotta text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>
          </div>
          {/* Mobile hamburger + cart */}
          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={toggleDrawer} className="relative p-2 text-ln-warm-gray transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6.5 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3.5-4H6.5zM3 6h18" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-ln-terracotta text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={() => setOpen(!open)}
              className="text-ln-espresso p-2" aria-label="Menu">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                {open
                  ? <path d="M6 18L18 6M6 6l12 12" />
                  : <path d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-ln-terracotta/10 bg-ln-marble/98">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-3 text-xs tracking-[0.15em] uppercase transition-colors ${
                  isActive
                    ? 'text-ln-terracotta bg-ln-terracotta-light/20 border-l-2 border-ln-terracotta font-medium'
                    : 'text-ln-warm-gray hover:text-ln-espresso hover:bg-ln-terracotta/5'
                }`
              }>{l.label}</NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
