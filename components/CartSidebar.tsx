'use client'

import { X, Trash2, ShoppingCart, ChevronRight } from 'lucide-react'
import { CartItem } from '@/context/CartContext'
import { WhatsAppIcon } from './WhatsAppIcon'

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
  cart: CartItem[]
  onRemoveItem: (index: number) => void
  onSendWhatsApp: () => void
}

export default function CartSidebar({ isOpen, onClose, cart, onRemoveItem, onSendWhatsApp }: CartSidebarProps) {
  if (!isOpen) return null

  const totalEvents = cart.reduce((sum, item) => sum + item.selectedEvents.length, 0)
  const totalMediaTypes = cart.reduce((sum, item) =>
    sum + item.selectedEvents.reduce((s, event) => s + event.mediaTypes.length, 0), 0
  )

  return (
    <>
      {/* Enhanced Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 animate-fade-in transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Sidebar with Glassmorphism */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white/95 backdrop-blur-xl shadow-2xl z-50 flex flex-col animate-slide-left h-[100dvh] border-l border-white/20">

        {/* Header - Fixed at Top */}
        <div className="relative p-5 md:p-6 shrink-0 z-10 bg-white/50 backdrop-blur-md border-b border-slate-100">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-100/50 rounded-full blur-3xl -z-10"></div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100">
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 leading-tight">Your Cart</h2>
                <p className="text-slate-500 text-xs md:text-sm font-medium">{cart.length} service{cart.length !== 1 ? 's' : ''} added</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Cart Items - Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 pb-32 md:pb-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 -mt-10">
              <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <ShoppingCart className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Your cart is empty</h3>
              <p className="text-slate-500 text-sm max-w-xs mx-auto mb-8">
                Looks like you haven't added any photography services yet.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-slate-900 text-white rounded-full font-medium text-sm hover:bg-slate-800 transition-colors"
              >
                Browse Services
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base md:text-lg mb-1">{item.serviceTitle}</h3>
                    {item.religionTitle && (
                      <span className="inline-block px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-md border border-indigo-100">
                        {item.religionTitle}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="group-hover:opacity-100 opacity-100 md:opacity-0 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all focus:opacity-100" // Always visible on mobile, visible on hover for desktop
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5 text-red-400 md:text-slate-400 md:group-hover:text-red-500" />
                  </button>
                </div>

                {/* Details List */}
                <div className="space-y-3">
                  {item.selectedEvents.map((event, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-3 border border-slate-100/50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span className="text-xs font-bold text-slate-700">{event.eventName}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 ml-3">
                        {event.mediaTypes.map((type, j) => (
                          <span key={j} className="px-2 py-0.5 bg-white border border-slate-200 rounded-md text-[10px] font-medium text-slate-600 shadow-sm">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer - Sticky at Bottom */}
        {cart.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-white border-t border-slate-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-20">
            {/* Quick Summary */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="text-sm text-slate-500">
                Total Items: <strong className="text-slate-900">{cart.length}</strong>
              </div>
              <div className="flex items-center gap-3 text-xs md:text-sm font-medium text-slate-600">
                <span>{totalEvents} Events</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>{totalMediaTypes} Media</span>
              </div>
            </div>

            <button
              onClick={onSendWhatsApp}
              className="w-full group bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-green-200 transition-all duration-300 active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-6 h-6 fill-white" />
              <span>Request Quote</span>
              <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-center text-[10px] text-slate-400 mt-3">
              Directly chat with us on WhatsApp for pricing
            </p>
          </div>
        )}
      </div>
    </>
  )
}
