"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "AIHP has transformed our office into a space that reflects our brand and impresses clients. Their expert design, attention to detail, and seamless blend of comfort and professionalism make them our trusted partner. Highly recommended.",
        name: "Mukesh Kumawat",
        title: "Executive Director & Unit Head - Gurgaon",
        company: "Anand Rathi Wealth Limited",
        avatar: "/Mukesh-Kumawat.webp",
    },
    {
        quote: "At AIHP, excellence is standard. From top-tier offices to tailored designs, every aspect exceeds expectations. Choosing AIHP was simple – simply exceptional.",
        name: "Sudhir Sharma",
        title: "Regional Head",
        company: "Arcelor Mittal Nippon Steel",
        avatar: "/Sudhir-Sharma.webp",
    },
    {
        quote: "AIHP created diverse spaces like conference rooms and collaboration zones with great amenities and natural light. AIHP's management and shared facilities are a huge plus, and their design team truly understood our needs!",
        name: "Harpreet Singh",
        title: "Co-founder",
        company: "ProcDNA",
        avatar: "/Harpreet-Singh.webp",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-brand-almost-white px-4 py-14 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-[1280px] space-y-12 sm:space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold uppercase tracking-tight text-brand-navy-ink sm:text-3xl md:text-4xl">
                        What Our <span className="text-brand-burgundy">Clients Say</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-brand-navy-grey sm:text-lg">
                        Real experiences from business leaders who chose AIHP for their Gurgaon offices.
                    </p>
                </div>

                <div className="-ml-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pl-4 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] md:ml-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pl-0 md:pr-0 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex min-h-full min-w-[88%] snap-start flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:min-w-[70%] md:min-w-0 md:p-8"
                        >
                            <div className="space-y-4">
                                <div className="h-1 w-12 bg-brand-burgundy/40 rounded-full" />
                                <blockquote className="border-l-4 border-brand-burgundy/40 pl-5 text-base italic leading-relaxed text-brand-navy-grey sm:pl-6 sm:text-lg">
                                    {item.quote}
                                </blockquote>
                            </div>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 relative">
                                    <Image
                                        src={item.avatar}
                                        alt={`${item.name} photo`}
                                        fill
                                        className="object-cover"
                                        sizes="56px"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-navy-ink">{item.name}</h4>
                                    <p className="text-sm text-brand-cool-grey">
                                        {item.title}, {item.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
