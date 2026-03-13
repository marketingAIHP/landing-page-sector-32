"use client";

import { Wallet, MapPin, ShieldCheck, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Wallet,
        title: "Zero Capital Expenditure",
        description: "Maximize resources without any upfront construction costs. Pay only for the space you use.",
    },
    {
        icon: MapPin,
        title: "Prime Sector 32 Location",
        description: "Near NH8, Medanta & metro. Strategically positioned for maximum business visibility.",
    },
    {
        icon: ShieldCheck,
        title: "360° Facility Management",
        description: "All-inclusive staff & facility management. We handle the office, you focus on business.",
    },
    {
        icon: PenTool,
        title: "Customized Design",
        description: "Tailored office interiors designed to reflect your unique brand identity and team culture.",
    },
];

export default function PremiumFeatures() {
    return (
        <section className="bg-white px-4 py-14 sm:px-6 sm:py-16">
            <div className="max-w-[1280px] mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold uppercase tracking-tight text-brand-navy-ink sm:text-3xl md:text-4xl">
                        Premium <span className="text-brand-burgundy">Managed Features</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-brand-navy-grey sm:text-lg">
                        Everything you need for a world-class business presence in Gurgaon.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group rounded-2xl border border-slate-100 bg-brand-almost-white/50 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl sm:p-8"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-burgundy/10 text-brand-burgundy transition-colors group-hover:bg-brand-burgundy group-hover:text-white sm:mb-6 sm:h-14 sm:w-14">
                                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                            </div>
                            <h3 className="mb-3 text-lg font-bold leading-tight text-brand-navy-ink sm:text-xl">
                                {feature.title}
                            </h3>
                            <p className="text-brand-navy-grey text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
