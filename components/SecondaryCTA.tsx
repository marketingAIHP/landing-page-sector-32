import HubSpotForm from "./HubSpotForm";

export default function SecondaryCTA() {
    return (
        <section className="relative overflow-hidden bg-brand-navy-ink px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            {/* Decorative Background Element */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-burgundy/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-muted-teal/10 rounded-full blur-3xl" />

            <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(500px,620px)] lg:gap-24 xl:gap-32">
                <div className="space-y-6 sm:space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                            Need Your Tailored, Fully Serviced Office in <span className="text-brand-burgundy">Sector 32?</span>
                        </h2>
                        <p className="text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
                            AIHP’s build-to-suit process makes it easy. 20 to 500+ seats. Zero upfront costs. Just move-in ready in 60 days.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2 sm:gap-6 sm:pt-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                            <span className="text-brand-burgundy font-black text-2xl">0</span>
                            <p className="text-white/60 text-sm font-medium uppercase tracking-wider mt-1">Capital Expenditure</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                            <span className="text-brand-burgundy font-black text-2xl">60</span>
                            <p className="text-white/60 text-sm font-medium uppercase tracking-wider mt-1">Days Move-in</p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex w-full max-w-[620px] justify-center lg:mx-0 lg:justify-end">
                    <HubSpotForm
                        maxWidthClassName="max-w-[620px]"
                        minHeightClassName="min-h-[500px] sm:min-h-[540px]"
                        iframeHeight={540}
                    />
                </div>
            </div>
        </section>
    );
}
