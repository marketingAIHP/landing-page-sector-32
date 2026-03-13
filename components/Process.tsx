"use client";

import { motion } from "framer-motion";

const steps = [
    {
        day: "Day 1",
        title: "Design Kick-off",
        description: "Custom layouts and finishes designed to reflect your brand identity. You approve the design.",
    },
    {
        day: "Days 2–59",
        title: "Approval & Build",
        description: "Quick approvals and expert construction by AIHP’s certified teams. Zero disruption to you.",
    },
    {
        day: "Day 60",
        title: "Move-in Day",
        description: "Walk into your fully furnished, technology-ready office space in Sector 32. Your team, day one.",
    },
];

export default function Process() {
    return (
        <section className="bg-brand-modern-beige overflow-hidden px-4 py-14 sm:px-6 sm:py-16">
            <div className="max-w-[1280px] mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold uppercase tracking-tight text-brand-navy-ink sm:text-3xl md:text-4xl">
                        Your Office Ready in <span className="text-brand-burgundy">60 Days</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-brand-navy-grey sm:text-lg">
                        Reassuringly fast and hassle-free move-in process tailored to your business timeline.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-3 lg:gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-brand-burgundy/20" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center space-y-5 text-center sm:space-y-6"
                        >
                            <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-full border-4 border-brand-burgundy/10 bg-white shadow-lg sm:mb-4 sm:h-24 sm:w-24">
                                <span className="text-brand-burgundy font-black text-xs uppercase tracking-widest text-center px-2">
                                    {step.day}
                                </span>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-brand-navy-ink sm:text-2xl">{step.title}</h3>
                                <p className="text-sm leading-relaxed text-brand-navy-grey sm:text-base">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
