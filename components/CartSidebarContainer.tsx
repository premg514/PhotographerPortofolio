'use client'

import CartSidebar from './CartSidebar'
import { useCart } from '@/context/CartContext'

export default function CartSidebarContainer() {
    const { cart, isCartOpen, toggleCart, removeFromCart } = useCart()

    const handleSendWhatsApp = () => {
        // Replace with the actual business number
        const WHATSAPP_NUMBER = "916302903019"

        // Calculate totals for summary
        const totalServices = cart.length
        const totalEvents = cart.reduce((sum, item) => sum + item.selectedEvents.length, 0)

        // Construct a professional message
        let message = `*Hello! I'm interested in your photography services.*\n\n`
        message += `Here is the summary of my requirements:\n\n`

        // Summary Section
        message += `*SUMMARY*\n`
        message += `--------------------------------\n`
        message += `Total Services: *${totalServices}*\n`
        message += `Total Events: *${totalEvents}*\n`
        message += `--------------------------------\n\n`

        // Detailed Services List
        message += `*DETAILED REQUIREMENTS*\n`

        cart.forEach((item, index) => {
            message += `\n*${index + 1}. ${item.serviceTitle.toUpperCase()}*\n`

            if (item.religionTitle) {
                message += `   • Style: ${item.religionTitle}\n`
            }

            if (item.selectedEvents.length > 0) {
                message += `   • Events & Media:\n`
                item.selectedEvents.forEach(event => {
                    message += `     - ${event.eventName}: ${event.mediaTypes.join(", ")}\n`
                })
            }
        })

        message += `\n--------------------------------\n`
        message += `*Please provide a quote for the above requirements.*`

        // Encode and open WhatsApp
        const encodedMessage = encodeURIComponent(message)
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank")
    }

    return (
        <CartSidebar
            isOpen={isCartOpen}
            onClose={toggleCart}
            cart={cart}
            onRemoveItem={removeFromCart}
            onSendWhatsApp={handleSendWhatsApp}
        />
    )
}
