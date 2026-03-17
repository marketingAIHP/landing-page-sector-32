"use client";

import { CheckCircle2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
    "On NH8 National Highway — seamless access to Delhi, IGI Airport & all of Gurgaon",
    "10 minutes from HUDA City Centre Metro Station",
    "Adjacent to Medanta — The Medicity Hospital, a key landmark for business navigation",
    "Established corporate hub with multinational companies, banks & tech firms",
    "Premium retail, hospitality & dining options within 5 minutes",
];

const mapEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.765662705058!2d77.0345672!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c0ddb5a5b5%3A0x6e2c38d6a782a6f!2sSector%2032%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

export default function LocationBenefits() {
    return (
        <section className="bg-brand-almost-white px-4 py-14 sm:px-6 sm:py-16">
            <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6 sm:space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold uppercase tracking-tight text-brand-navy-ink sm:text-3xl md:text-4xl">
                            Why <span className="text-brand-burgundy">Sector 32, Gurgaon?</span>
                        </h2>
                        <p className="text-base text-brand-navy-grey sm:text-lg">
                            The most strategically positioned business district for enterprises seeking connectivity and visibility.
                        </p>
                    </div>

                    <ul className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="group flex items-start gap-3 sm:gap-4">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-muted-teal transition-transform group-hover:scale-110 sm:mt-1 sm:h-6 sm:w-6" />
                                <span className="leading-relaxed text-brand-navy-grey">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[340px] overflow-hidden rounded-2xl border-4 border-white bg-brand-modern-beige shadow-xl sm:h-[400px] lg:h-[450px]"
                >
                    <iframe
                        src={mapEmbedSrc}
                        title="AIHP Sector 32 location map"
                        className="h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Sector+32+Gurugram+Haryana"
                        target="_blank"
                        rel="noreferrer"
                        className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-brand-navy-ink shadow-lg transition-transform hover:-translate-y-0.5 sm:left-4 sm:top-4 sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                        Open in Maps
                        <ExternalLink className="h-4 w-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
