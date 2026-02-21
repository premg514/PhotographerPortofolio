"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface SelectedEvent {
    eventName: string;
    mediaTypes: string[];
}

export interface CartItem {
    serviceTitle: string;
    religionTitle?: string;
    selectedEvents: SelectedEvent[];
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (items: CartItem[]) => void;
    removeFromCart: (index: number) => void;
    isCartOpen: boolean;
    toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (items: CartItem[]) => {
        setCart((prev) => [...prev, ...items]);
        setIsCartOpen(true);
    };

    const removeFromCart = (index: number) => {
        setCart((prev) => prev.filter((_, i) => i !== index));
    };

    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, isCartOpen, toggleCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
