import { ArrowRight, Phone } from "lucide-react";

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
                            <span className="text-brand-burgundy font-black text-2xl">0%</span>
                            <p className="text-white/60 text-sm font-medium uppercase tracking-wider mt-1">Capital Expenditure</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                            <span className="text-brand-burgundy font-black text-2xl">60</span>
                            <p className="text-white/60 text-sm font-medium uppercase tracking-wider mt-1">Days Move-in</p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex w-full max-w-[620px] justify-center lg:mx-0 lg:justify-end">
                    <div className="w-full rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-10">
                        <div className="space-y-5">
                            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                                Speak With Leasing
                            </span>
                            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                                Get your proposal faster without loading another external form.
                            </h3>
                            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
                                Use the main enquiry form at the top of the page or call our team directly for immediate availability, pricing, and site visits.
                            </p>
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <a
                                href="#lead-form"
                                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-brand-burgundy px-6 py-4 text-center text-sm font-bold text-white transition-transform hover:-translate-y-0.5 sm:text-base"
                            >
                                Open Main Form
                                <ArrowRight className="h-5 w-5" />
                            </a>
                            <a
                                href="tel:+917303060067"
                                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-center text-sm font-bold text-white transition-colors hover:bg-white/15 sm:text-base"
                            >
                                <Phone className="h-5 w-5" />
                                Call Leasing Team
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
