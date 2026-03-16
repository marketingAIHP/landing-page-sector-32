import Image from "next/image";

export default function TrustedBy() {
    const clients = [
        { name: "Cordelia Cruises", image: "/Group-279.jpg" },
        { name: "OLX", image: "/Group-274.jpg" },
        { name: "Mahindra", image: "/Group-276.jpg" },
        { name: "Advatix", image: "/Sites/Sector 32/AIHP Executive Centre/Brand/advatix-logo-header-1.png" }
    ];

    return (
        <section className="bg-white px-4 py-14 sm:px-6 sm:py-16">
            <div className="max-w-[1280px] mx-auto space-y-12">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight uppercase text-brand-navy-ink sm:text-4xl md:text-5xl">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="flex flex-wrap justify-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-brand-cool-grey sm:gap-4 sm:text-base md:text-lg">
                        {[
                            "12 years",
                            "500+ clients",
                            "5M sq ft",
                        ].map((label) => (
                            <span
                                key={label}
                                className="inline-block font-bold transition duration-300 hover:text-brand-burgundy hover:scale-105"
                            >
                                {label}
                            </span>
                        ))}
                    </p>
                </div>

                <div className="grid grid-cols-2 items-center gap-4 sm:gap-8 md:gap-12 lg:grid-cols-4 lg:gap-16">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="relative flex h-24 justify-center rounded-xl border border-slate-100 px-4 py-4 opacity-100 transition-all duration-300 sm:h-28 sm:px-8 sm:py-6 md:grayscale md:opacity-60 md:hover:scale-105 md:hover:grayscale-0 md:hover:opacity-100"
                        >
                            <Image
                                src={client.image}
                                alt={`${client.name} Logo`}
                                fill
                                className="object-contain p-2"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
