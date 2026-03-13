"use client";

import Image from "next/image";
import HubSpotForm from "./HubSpotForm";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const trustBadges = [
    "5M Sq Ft Delivered",
    "500+ Clients",
    "12 Years Experience",
];

export default function Hero() {
    return (
        <section className="relative flex min-h-[760px] items-center justify-center overflow-hidden px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 md:min-h-screen md:px-8">
            {/* Background Image without Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Atrium1.webp"
                    alt="AIHP Sector 32 Gurgaon"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
            </div>

            {/* Overlay to improve text readability */}
            <div
                className="absolute inset-0 z-5"
                style={{
                    background:
                        "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 100%)",
                }}
            />

            <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-24 xl:gap-32">
                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 sm:space-y-8"
                >
                    <div className="space-y-4">
                        <h1
                            className="max-w-[12ch] text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[58px]"
                            style={{ textShadow: "0 10px 25px rgba(0,0,0,0.45)" }}
                        >
                            Office Space for Rent in <span className="text-brand-muted-teal">Sector 32, Gurgaon</span>
                        </h1>
                        <p
                            className="max-w-[36rem] text-base leading-relaxed text-white/90 sm:text-lg md:text-xl"
                            style={{ textShadow: "0 6px 18px rgba(0,0,0,0.35)" }}
                        >
                            AIHP delivers fully managed, brand-ready workspaces near NH8 & Medanta — move-in ready in 60 days, zero capital expenditure.
                        </p>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                        {trustBadges.map((badge, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md sm:px-4"
                            >
                                <div className="p-1 bg-brand-burgundy rounded-full text-white">
                                    <Check className="w-3 h-3" />
                                </div>
                                <span className="text-xs font-semibold text-white sm:text-sm">{badge}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex w-full justify-center lg:ml-auto lg:justify-end"
                >
                    <HubSpotForm />
                </motion.div>
            </div>
        </section>
    );
}
