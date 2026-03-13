import { Building2, Users2, Calendar, Layout } from "lucide-react";

const stats = [
    {
        icon: Building2,
        stat: "5M+",
        label: "Sq Ft Delivered",
    },
    {
        icon: Users2,
        stat: "500+",
        label: "Happy Clients",
    },
    {
        icon: Calendar,
        stat: "12",
        label: "Years Experience",
    },
    {
        icon: Layout,
        stat: "20–500+",
        label: "Seats Available",
    },
];

export default function TrustBar() {
    return (
        <section className="bg-brand-modern-beige px-4 py-10 sm:px-6 sm:py-12">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:grid-cols-4">
                    {stats.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2 text-center lg:items-start lg:text-left">
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <item.icon className="h-5 w-5 text-brand-burgundy sm:h-6 sm:w-6" />
                                <span className="text-2xl font-black tracking-tight text-brand-navy-ink sm:text-3xl">
                                    {item.stat}
                                </span>
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-cool-grey sm:text-sm">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
