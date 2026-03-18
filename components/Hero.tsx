"use client";

import Image from "next/image";
import HubSpotForm from "./HubSpotForm";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const trustBadges = [
    "10M+ Sq. Ft Delivered",
    "500+ Clients",
    "15+ Years Experience",
];

export default function Hero() {
    return (
        <section className="relative flex min-h-[680px] items-center justify-center overflow-hidden px-4 pb-10 pt-24 sm:min-h-[760px] sm:px-6 sm:pb-12 sm:pt-28 md:min-h-screen md:px-8">
            {/* Background Image without Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Atrium1.webp"
                    alt="AIHP Sector 32 Gurgaon"
                    fill
                    className="object-cover object-[62%_center] sm:object-center"
                    sizes="100vw"
                    priority
                    quality={60}
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

            <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:gap-16 xl:gap-20">
                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 sm:space-y-8"
                >
                    <div className="max-w-[760px] rounded-[32px] border border-white/45 bg-white/78 p-7 shadow-[0_24px_80px_rgba(5,22,34,0.24)] backdrop-blur-md sm:p-10 lg:p-12">
                        <div className="space-y-5 text-center sm:text-left">
                            <h1
                                className="mx-auto max-w-[10ch] text-3xl font-bold leading-[0.96] tracking-[-0.03em] text-balance text-brand-burgundy sm:mx-0 sm:max-w-[12ch] sm:text-4xl lg:text-[54px]"
                                style={{ fontFamily: 'Georgia, \"Times New Roman\", serif' }}
                            >
                                Office Space for Rent in <span className="text-brand-burgundy">Sector 32, Gurgaon</span>
                            </h1>
                            <p className="mx-auto max-w-[33rem] text-base leading-[1.7] text-brand-navy-grey/90 sm:mx-0 sm:text-lg md:text-[20px]">
                                AIHP delivers fully managed, brand-ready workspaces in Sector 32, Gurgaon. Every office is tailored to your operational needs and brand requirements, with move-in readiness in 60 days and zero capital expenditure.
                            </p>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start sm:gap-4">
                            {trustBadges.map((badge, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className={
                                        index === 0
                                            ? "flex items-center gap-2.5 rounded-full bg-brand-burgundy px-5 py-3 text-white shadow-[0_10px_25px_rgba(139,18,18,0.28)]"
                                            : index === 1
                                              ? "flex items-center gap-2.5 rounded-full bg-brand-muted-teal px-5 py-3 text-white shadow-[0_10px_25px_rgba(18,138,160,0.22)]"
                                              : "flex items-center gap-2.5 rounded-full bg-brand-navy-ink px-5 py-3 text-white shadow-[0_10px_25px_rgba(5,22,34,0.24)]"
                                    }
                                >
                                    <Check className="h-4 w-4" />
                                    <span className="text-sm font-bold sm:text-base">{badge}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex w-full justify-center scroll-mt-28 lg:ml-auto lg:justify-end"
                    id="lead-form"
                >
                    <HubSpotForm
                        className="max-w-[560px]"
                        minHeightClassName="min-h-[520px] sm:min-h-[560px]"
                        iframeHeight={560}
                        loading="eager"
                    />
                </motion.div>
            </div>
        </section>
    );
}
