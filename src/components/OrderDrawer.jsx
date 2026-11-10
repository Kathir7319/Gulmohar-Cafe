import React from 'react';
import { 
  X, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  PhoneCall, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

export default function OrderDrawer({ 
  isOpen, 
  onClose, 
  orderItems = [], 
  onUpdateQty, 
  onRemoveItem, 
  onClearOrder 
}) {
  if (!isOpen) return null;

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.0725; // NC sales tax
  const total = subtotal + tax;

  const orderSummaryText = orderItems
    .map(i => `${i.quantity}x ${i.name} ($${(i.price * i.quantity).toFixed(2)})`)
    .join(', ');

  const whatsappMessage = encodeURIComponent(
    `Hello Gulmohar Cafe! I would like to place an order for pickup at NetSports Morrisville:\n\n${orderItems.map(i => `• ${i.quantity}x ${i.name} ($${(i.price * i.quantity).toFixed(2)})`).join('\n')}\n\nEstimated Total: $${total.toFixed(2)}\n\nPlease confirm availability and prep time. Thank you!`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-chai-100 flex items-center justify-between bg-chai-50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gulmohar-100 text-gulmohar-700 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-chai-900 leading-tight">
                  Your Order Tray
                </h3>
                <p className="text-xs text-chai-500">
                  {orderItems.length} {orderItems.length === 1 ? 'item' : 'items'} selected for NetSports Pickup
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-chai-400 hover:text-chai-900 hover:bg-chai-100 rounded-lg transition-colors"
              aria-label="Close tray"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body items */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {orderItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-chai-400">
                <div className="w-16 h-16 rounded-full bg-chai-100 flex items-center justify-center mb-4 text-chai-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-base text-chai-800 mb-1">
                  Your tray is currently empty
                </h4>
                <p className="text-xs text-chai-500 max-w-xs mb-4">
                  Browse our authentic street chaats, lunch wraps, or drinks and click "+ Add to Tray".
                </p>
                <button
                  onClick={onClose}
                  className="bg-gulmohar-600 hover:bg-gulmohar-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {orderItems.map((item) => (
                    <div 
                      key={item.id}
                      className="flex items-center justify-between gap-3 p-3 bg-chai-50 rounded-2xl border border-chai-200/60 transition-all hover:border-gulmohar-200"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs sm:text-sm text-chai-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gulmohar-600 font-semibold mt-0.5">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-white border border-chai-200 rounded-xl px-1.5 py-1">
                        <button
                          onClick={() => onUpdateQty(item.id, Math.max(0, item.quantity - 1))}
                          className="w-6 h-6 flex items-center justify-center text-chai-600 hover:text-gulmohar-600 rounded-lg hover:bg-chai-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-chai-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-chai-600 hover:text-gulmohar-600 rounded-lg hover:bg-chai-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-chai-400 hover:text-red-500 p-1.5 rounded-lg transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={onClearOrder}
                    className="text-xs text-chai-400 hover:text-red-500 underline"
                  >
                    Clear all items
                  </button>
                </div>

                {/* NetSports Notice */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Pickup Location:</strong>
                    Gulmohar Cafe counter inside NetSports lobby (3717 Davis Dr, Morrisville). Ready in approx. 15–20 minutes!
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer with Calculations and Action */}
          {orderItems.length > 0 && (
            <div className="p-5 border-t border-chai-100 bg-chai-50/80 space-y-3">
              <div className="space-y-1.5 text-xs text-chai-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-chai-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated NC Sales Tax (7.25%)</span>
                  <span className="font-semibold text-chai-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-chai-900 pt-2 border-t border-chai-200">
                  <span>Estimated Total</span>
                  <span className="text-gulmohar-600">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href="tel:2163949743"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gulmohar-600 to-gulmohar-500 hover:from-gulmohar-700 hover:to-gulmohar-600 text-white py-3.5 rounded-xl font-bold text-sm shadow-warm transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call (216) 394-9743 to Order</span>
                </a>

                <a
                  href={`https://wa.me/12163949743?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-chutney-600 hover:bg-chutney-700 text-white py-2.5 rounded-xl font-semibold text-xs shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Order via WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
