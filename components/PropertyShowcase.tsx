"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const properties = [
    {
        name: "AIHP Spectra",
        location: "Sector 32, Gurgaon",
        description: "1-acre workspace campus with fully managed offices | 3500 seats | Prime Sector 32 frontage.",
        image: "/spectra.webp",
        // Update this when you have a page or external link for this property
        href: "https://aihp.in/location/sector-32/spectra/",
    },
    {
        name: "AIHP Atrium",
        location: "Sector 32, Gurgaon",
        description: "Seven-storey landmark with hotel-inspired lobby | 1500+ Seat Capacity | Scalable seating | 3 signature terraces.",
        image: "/Atrium1.webp",
        href: "https://aihp.in/location/sector-32/atrium/",
    },
    {
        name: "AIHP SCO 27",
        location: "Sector 32, Gurgaon",
        description: "Located along NH8 | Shuttle service to Metro  | 600+ Seat Capacity | 250-vehicle parking | Terrace cafeterias.",
        image: "/sco.webp",
        href: "https://aihp.in/location/sector-32/aihp-sco-27/",
    },
    {
        name: "AIHP Skyline",
        location: "NH8, Sector 32",
        description: "LEED Gold certified | Shuttle service to Metro  | 1500+ Seat Capacity | Along NH8.",
        image: "/skyline.webp",
        href: "https://aihp.in/location/sector-32/skyline/",
    },
    {
        name: "AIHP Executive Centre",
        location: "Sector 32, Gurgaon",
        description: "Built-to-suit fully serviced offices | Spacious 300+ seater common cafeteria | Shuttle service to Metro",
        image: "/executive.webp",
        href: "https://aihp.in/location/sector-32/executive-center/",
    },
    {
        name: "AIHP Broadway",
        location: "Sector 32, Gurgaon",
        description: "Lush green open spaces | Vibrant cafeteria on LGF | Shuttle service to Metro | Ample basement parking.",
        image: "/broadway.webp",
        href: "https://aihp.in/location/sector-32/broadway/",
    }
];

export default function PropertyShowcase() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: false,
        skipSnaps: false,
        dragFree: true,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const syncScrollSnaps = () => setScrollSnaps(emblaApi.scrollSnapList());
        const frame = window.requestAnimationFrame(() => {
            onSelect();
            syncScrollSnaps();
        });
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("reInit", syncScrollSnaps);

        return () => {
            window.cancelAnimationFrame(frame);
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
            emblaApi.off("reInit", syncScrollSnaps);
        };
    }, [emblaApi, setScrollSnaps, onSelect]);

    const isExternalLink = (href?: string) =>
        typeof href === "string" && /^(https?:)?\/\//.test(href);

    return (
        <section className="bg-brand-almost-white px-4 py-14 sm:px-6 sm:py-16">
            <div className="max-w-[1280px] mx-auto space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-2xl font-bold uppercase tracking-tight leading-tight text-brand-navy-ink sm:text-3xl md:text-[3rem] md:whitespace-nowrap">
                            AIHP<span className="align-super text-[0.6em]">{"'s"}</span> Premium Managed <span className="text-brand-burgundy">Offices in Sector 32</span>
                        </h2>
                        <p className="text-lg text-brand-navy-grey">
                            Explore our portfolio of institutional-grade office spaces. Designed for excellence, managed for growth.
                        </p>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                            className={cn(
                                "w-12 h-12 flex items-center justify-center rounded-full border border-brand-slate-grey/20 bg-white text-brand-navy-ink transition-all shadow-sm group",
                                canScrollPrev ? "hover:bg-brand-burgundy hover:text-white" : "opacity-30 cursor-not-allowed"
                            )}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
                        </button>
                        <button
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                            className={cn(
                                "w-12 h-12 flex items-center justify-center rounded-full border border-brand-slate-grey/20 bg-white text-brand-navy-ink transition-all shadow-sm group",
                                canScrollNext ? "hover:bg-brand-burgundy hover:text-white" : "opacity-30 cursor-not-allowed"
                            )}
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6 group-active:scale-90 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative overflow-hidden -ml-4 sm:-ml-6" ref={emblaRef}>
                    <div className="flex">
                        {properties.map((property, index) => {
                            const href = property.href ?? "#";
                            const isExternal = isExternalLink(href);

                            return (
                                <div
                                    key={index}
                                    className="min-w-0 flex-[0_0_88%] pl-4 sm:flex-[0_0_50%] sm:pl-6 lg:flex-[0_0_33.33%]"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="bg-white rounded-2xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col"
                                    >
                                        <div className="relative h-52 overflow-hidden sm:h-60">
                                            <Image
                                                src={property.image}
                                                alt={property.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 50vw, 420px"
                                                quality={60}
                                            />
                                        </div>
                                        <div className="p-7 flex-grow flex flex-col justify-between">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-1.5 text-brand-burgundy">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    <span className="text-[10px] font-black uppercase tracking-[0.15em]">{property.location}</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-brand-navy-ink group-hover:text-brand-burgundy transition-colors">{property.name}</h3>
                                                <p className="text-brand-navy-grey text-base leading-relaxed">
                                                    {property.description}
                                                </p>
                                            </div>

                                            <div className="pt-3 border-t border-slate-50">
                                                <a
                                                    href={href}
                                                    target={isExternal ? "_blank" : undefined}
                                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                                    className="flex items-center gap-2 text-brand-burgundy font-bold text-sm hover:gap-3 transition-all group/btn"
                                                >
                                                    View Space Details
                                                    <ChevronRight className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-300",
                                selectedIndex === index
                                    ? "w-8 bg-brand-burgundy"
                                    : "w-2 bg-brand-slate-grey/20 hover:bg-brand-slate-grey/40"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
