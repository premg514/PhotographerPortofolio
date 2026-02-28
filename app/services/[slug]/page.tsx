"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    Check,
    Star,
    Calendar,
    Image as ImageIcon,
    ShoppingCart,
    Plus,
    ChevronRight,
    Info
} from "lucide-react";
import { services } from "@/lib/services";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/context/CartContext";

// Icons mapping
import { Baby, Cake, Mountain, Heart, Home, User, Music, Scissors } from "lucide-react";

const serviceIcons: { [key: string]: any } = {
    "baby-shower": Baby,
    "cradle-ceremony": Baby,
    birthday: Cake,
    "half-saree": Mountain,
    wedding: Heart,
    "house-warming": Home,
    "celebrities-shoots": User,
    "song-shoots": Music,
    fashion: Scissors,
    engagement: Heart,
};

const serviceImages: { [key: string]: string } = {
    "baby-shower": "https://res.cloudinary.com/deeejohfw/image/upload/v1772272344/baby_shower.jpg_1_ax0fp8.jpg",
    "cradle-ceremony": "https://res.cloudinary.com/deeejohfw/image/upload/v1772271912/cradile.jpg_iauy3z.jpg",
    birthday: "https://res.cloudinary.com/deeejohfw/image/upload/v1772272469/birthday.jpg_adnx1l.jpg",
    "half-saree": "https://res.cloudinary.com/deeejohfw/image/upload/v1772272528/hafsare.jpg_nirtqp.jpg",
    wedding: "https://res.cloudinary.com/deeejohfw/image/upload/v1772271912/wedding.jpg_kfhoez.jpg",
    "house-warming": "https://res.cloudinary.com/deeejohfw/image/upload/v1772272634/house.jpg_yydirv.jpg",
    "celebrities-shoots": "https://res.cloudinary.com/deeejohfw/image/upload/v1772271931/cele.jpg_adrj8e.jpg",
    "song-shoots": "https://res.cloudinary.com/deeejohfw/image/upload/v1772271912/song.jpg_w9qe0l.jpg",
    fashion: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800",
    engagement: "https://res.cloudinary.com/deeejohfw/image/upload/v1772271934/ENG.jpg_rwqrpn.jpg",
};

export default function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const router = useRouter();
    const { addToCart, cart, toggleCart } = useCart();

    const service = services.find((s) => s.slug === slug);

    const [selectedReligion, setSelectedReligion] = useState<string | null>(null);
    const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
    const [eventMediaTypes, setEventMediaTypes] = useState<{ [eventName: string]: string[] }>({});
    const [error, setError] = useState<string | null>(null);
    const [activeStep, setActiveStep] = useState(1); // 1: Style, 2: Events, 3: Media

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center p-6">
                    <h1 className="text-2xl font-bold text-slate-800 mb-4">Service Not Found</h1>
                    <button
                        onClick={() => router.push("/")}
                        className="text-indigo-600 hover:text-indigo-800 font-semibold"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    const hasReligions = service.religions && service.religions.length > 0;
    const currentEvents =
        hasReligions && selectedReligion
            ? service.religions?.find((r) => r.slug === selectedReligion)?.events || []
            : service.events || [];

    // Auto-advance step logic
    useEffect(() => {
        if (activeStep === 1 && (!hasReligions || selectedReligion)) {
            // If religions are selected or not applicable, we can consider step 1 done visually
        }
    }, [selectedReligion, hasReligions, activeStep]);


    const toggleEvent = (event: string) => {
        setSelectedEvents((prev) => {
            const isSelected = prev.includes(event);
            const newEvents = isSelected ? prev.filter((e) => e !== event) : [...prev, event];

            // Manage eventMediaTypes mapping
            setEventMediaTypes(prevMapping => {
                const nextMapping = { ...prevMapping };
                if (isSelected) {
                    delete nextMapping[event];
                } else {
                    // Initialize with empty media types for the new event
                    nextMapping[event] = [];
                }
                return nextMapping;
            });

            return newEvents;
        });
        setError(null);
    };

    const toggleMediaType = (event: string, type: string) => {
        setEventMediaTypes((prev) => {
            const currentMediaTypes = prev[event] || [];
            const newMediaTypes = currentMediaTypes.includes(type)
                ? currentMediaTypes.filter((t) => t !== type)
                : [...currentMediaTypes, type];

            return {
                ...prev,
                [event]: newMediaTypes
            };
        });
        setError(null);
    };

    const handleSelectAll = (type: "events" | "media", eventName?: string) => {
        if (type === "events") {
            const newEvents = currentEvents.length === selectedEvents.length ? [] : [...currentEvents];
            setSelectedEvents(newEvents);

            setEventMediaTypes(prev => {
                if (newEvents.length === 0) return {};
                const nextMapping = { ...prev };
                newEvents.forEach(e => {
                    if (!nextMapping[e]) nextMapping[e] = [];
                });
                return nextMapping;
            });
        } else if (eventName) {
            setEventMediaTypes(prev => {
                const currentMediaTypes = prev[eventName] || [];
                const allTypes = service.mediaTypes;
                return {
                    ...prev,
                    [eventName]: currentMediaTypes.length === allTypes.length ? [] : [...allTypes]
                };
            });
        }
    };

    const handleAddToCart = () => {
        const hasEmptyMedia = selectedEvents.some(event => !eventMediaTypes[event] || eventMediaTypes[event].length === 0);

        if (selectedEvents.length === 0 || hasEmptyMedia) {
            setError(selectedEvents.length === 0
                ? "Please select at least one Event"
                : "Please select at least one Media Type for each selected Event");
            setTimeout(() => setError(null), 3000);
            return;
        }

        const cartItem: CartItem = {
            serviceTitle: service.title,
            religionTitle: hasReligions && selectedReligion
                ? service.religions?.find((r) => r.slug === selectedReligion)?.title
                : undefined,
            selectedEvents: selectedEvents.map(event => ({
                eventName: event,
                mediaTypes: eventMediaTypes[event] || []
            })),
        };

        addToCart([cartItem]);

        // Reset
        setSelectedReligion(null);
        setSelectedEvents([]);
        setEventMediaTypes({});
        setError(null);
        setActiveStep(1);
    };

    const Icon = serviceIcons[service.slug] || Star;
    const imageUrl = serviceImages[service.slug];

    return (
        <div className="min-h-screen bg-slate-50 pb-32 md:pb-24">
            {/* Mobile-Optimized Header */}
            <div className="relative h-[35vh] min-h-[300px] lg:h-[45vh] overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/30 z-10"></div>
                <img
                    src={imageUrl}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10"></div>

                <div className="container-custom relative z-20 h-full flex flex-col justify-between py-6">
                    <div className="flex justify-between items-start">
                        <button
                            onClick={() => router.push("/#services")}
                            className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/20 transition-all"
                            aria-label="Back"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={toggleCart}
                            className="relative p-2 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/20 transition-all"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            {cart.length > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full text-xs font-bold flex items-center justify-center border-2 border-slate-900">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    </div>

                    <div className="animate-slide-up">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-amber-500/90 text-white text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm">
                                Premium Service
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-slate-200 text-sm md:text-lg font-light leading-relaxed max-w-xl line-clamp-2 md:line-clamp-none">
                            {service.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-custom -mt-6 relative z-30">
                <div className="bg-white rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden border-x border-t border-slate-100 min-h-[60vh]">
                    <div className="p-5 md:p-10">

                        {/* Step Progress (Visual Only) */}
                        <div className="flex items-center justify-between mb-8 px-2">
                            {[1, 2, 3].map((step) => (
                                <div key={step} className="flex flex-col items-center relative w-1/3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 z-10 ${step <= (selectedEvents.length > 0 ? 2 : (selectedReligion || !hasReligions ? 1 : 0)) + 1
                                        ? 'bg-slate-900 border-slate-900 text-white'
                                        : 'bg-white border-slate-200 text-slate-400'
                                        }`}>
                                        {step}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase mt-2 text-slate-500 tracking-wider">
                                        {step === 1 ? 'Style' : step === 2 ? 'Events' : 'Media Options'}
                                    </span>
                                    {step < 3 && (
                                        <div className="absolute top-4 left-[50%] w-full h-0.5 bg-slate-100 -z-0"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 animate-pulse">
                                <Info className="w-5 h-5 text-red-500" />
                                <p className="text-red-600 font-medium text-sm">{error}</p>
                            </div>
                        )}

                        <div className="space-y-10">
                            {/* Step 1: Wedding Style */}
                            {hasReligions && (
                                <section>
                                    <div className="flex items-center gap-2 mb-4">
                                        <h3 className="text-lg font-bold text-slate-900">1. Select Ceremony Style</h3>
                                        {selectedReligion && <Check className="w-5 h-5 text-green-500" />}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        {service.religions?.map((religion) => (
                                            <button
                                                key={religion.slug}
                                                onClick={() => {
                                                    setSelectedReligion(religion.slug);
                                                    setSelectedEvents([]); // clear events if style changes
                                                    setError(null);
                                                }}
                                                className={`p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between active:scale-[0.98] ${selectedReligion === religion.slug
                                                    ? "border-indigo-600 bg-indigo-50 shadow-sm"
                                                    : "border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-200"
                                                    }`}
                                            >
                                                <div>
                                                    <span className={`block font-bold ${selectedReligion === religion.slug ? 'text-indigo-900' : 'text-slate-700'}`}>
                                                        {religion.title}
                                                    </span>
                                                    <span className="text-xs text-slate-500 mt-1 block">
                                                        {religion.events.length} Events Included
                                                    </span>
                                                </div>
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedReligion === religion.slug ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300'
                                                    }`}>
                                                    {selectedReligion === religion.slug && <div className="w-2 h-2 bg-white rounded-full" />}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Step 2: Events */}
                            {(!hasReligions || selectedReligion) && (
                                <section className="animate-fade-in">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-lg font-bold text-slate-900">
                                                {hasReligions ? '2. Customize Events' : '1. Select Events'}
                                            </h3>
                                            {selectedEvents.length > 0 && (
                                                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full font-bold">
                                                    {selectedEvents.length}
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => handleSelectAll("events")}
                                            className="text-xs font-bold text-purple-600 uppercase tracking-wider py-1 px-2 hover:bg-purple-50 rounded"
                                        >
                                            {selectedEvents.length === currentEvents.length ? "Clear" : "All"}
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                        {currentEvents.map((event) => (
                                            <button
                                                key={event}
                                                onClick={() => toggleEvent(event)}
                                                className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between active:scale-[0.98] ${selectedEvents.includes(event)
                                                    ? "border-purple-500 bg-purple-50 shadow-sm"
                                                    : "border-slate-100 bg-white hover:border-purple-200"
                                                    }`}
                                            >
                                                <span className={`font-medium ${selectedEvents.includes(event) ? 'text-purple-900' : 'text-slate-700'}`}>
                                                    {event}
                                                </span>
                                                {selectedEvents.includes(event) ? (
                                                    <Check className="w-5 h-5 text-purple-600" />
                                                ) : (
                                                    <Plus className="w-4 h-4 text-slate-300" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Step 3: Media */}
                            {selectedEvents.length > 0 && (
                                <section className="animate-fade-in pb-8">
                                    <div className="flex items-center gap-2 mb-6">
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {hasReligions ? '3. Media Selection per Event' : '2. Media Selection per Event'}
                                        </h3>
                                        <div className="h-px flex-1 bg-slate-100 ml-2"></div>
                                    </div>

                                    <div className="space-y-8">
                                        {selectedEvents.map((event) => (
                                            <div key={event} className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold text-sm">
                                                            {selectedEvents.indexOf(event) + 1}
                                                        </div>
                                                        <h4 className="font-bold text-slate-800">{event}</h4>
                                                    </div>
                                                    <button
                                                        onClick={() => handleSelectAll("media", event)}
                                                        className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-purple-600 transition-colors"
                                                    >
                                                        {(eventMediaTypes[event] || []).length === service.mediaTypes.length ? "Clear All" : "Select All"}
                                                    </button>
                                                </div>

                                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                                    {service.mediaTypes.map((type) => (
                                                        <button
                                                            key={type}
                                                            onClick={() => toggleMediaType(event, type)}
                                                            className={`relative p-3 h-20 rounded-xl border-2 text-center transition-all duration-200 flex flex-col items-center justify-center active:scale-[0.95] ${(eventMediaTypes[event] || []).includes(type)
                                                                ? "border-pink-500 bg-white shadow-md ring-4 ring-pink-50"
                                                                : "border-white bg-white hover:border-pink-100"
                                                                }`}
                                                        >
                                                            <span className={`text-xs font-bold leading-tight ${(eventMediaTypes[event] || []).includes(type) ? 'text-pink-600' : 'text-slate-500'}`}>
                                                                {type}
                                                            </span>
                                                            {(eventMediaTypes[event] || []).includes(type) && (
                                                                <div className="absolute -top-2 -right-2 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                                                                    <Check className="w-3 h-3" />
                                                                </div>
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Mobile Footer */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 pb-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-40 md:static md:bg-transparent md:border-0 md:shadow-none md:p-0 md:mt-8 md:mb-12">
                <div className="container-custom">
                    <div className="flex items-center gap-4 justify-between md:justify-end">
                        <div className="md:hidden flex flex-col">
                            <span className="text-xs text-slate-500 uppercase tracking-wide">Selection</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg font-bold text-slate-900">{selectedEvents.length}</span>
                                <span className="text-xs text-slate-500">Events</span>
                                <span className="mx-1 text-slate-300">|</span>
                                <span className="text-lg font-bold text-slate-900">
                                    {Object.values(eventMediaTypes).flat().length}
                                </span>
                                <span className="text-xs text-slate-500">Options</span>
                            </div>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            disabled={selectedEvents.length === 0 || selectedEvents.some(e => !eventMediaTypes[e] || eventMediaTypes[e].length === 0)}
                            className="flex-1 md:flex-none md:w-auto bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold text-lg shadow-lg shadow-slate-900/20 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                        >
                            <Plus className="w-5 h-5" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
