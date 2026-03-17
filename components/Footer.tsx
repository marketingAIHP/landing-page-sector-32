import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-brand-navy-ink border-t border-white/5 px-4 py-14 sm:px-6 sm:py-16">
            <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-16 lg:gap-24">
                {/* Logo & About */}
                <div className="space-y-6">
                    <div className="relative w-56 h-14">
                        <Image
                            src="/logo.png"
                            alt="AIHP Logo"
                            fill
                            className="object-contain object-left"
                            sizes="224px"
                        />
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed text-white/60">
                        Gurgaon&apos;s leading institutional managed workspace provider. Delivering value through architectural precision and operational excellence.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold uppercase tracking-[0.04em] text-white sm:text-xl">Contact Us</h4>
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="tel:+917303060067"
                                className="group flex items-center gap-4 text-base text-white/70 transition-colors hover:text-white"
                            >
                                <Phone className="h-5 w-5 flex-shrink-0 text-brand-burgundy" />
                                <span>+91 7303060067</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:leasing@aihp.in"
                                className="group flex items-center gap-4 text-base text-white/70 transition-colors hover:text-white"
                            >
                                <Mail className="h-5 w-5 flex-shrink-0 text-brand-burgundy" />
                                <span>leasing@aihp.in</span>
                            </a>
                        </li>
                        <li className="group flex items-start gap-4 text-base text-white/70 transition-colors hover:text-white">
                            <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-brand-burgundy" />
                            <span className="max-w-sm leading-relaxed">
                                AIHP Tower, 249 G, Udyog Vihar, Phase 4, Gurgaon 122015
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">Quick Links</h4>
                    <ul className="space-y-3 mt-4">
                        <li>
                            <a href="https://aihp.in/about/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="https://aihp.in/location/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                                Locations
                            </a>
                        </li>
                        <li>
                            <a href="https://aihp.in/our-clients/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                                Clients
                            </a>
                        </li>
                        <li>
                            <a href="https://aihp.in/gallery/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                                Gallery
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto mt-10 pt-5 border-t border-white/5 flex justify-center items-center sm:mt-12 sm:pt-6">
                <p className="text-white/55 text-sm font-bold text-center">
                    © {new Date().getFullYear()} AIHP Adding Value. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
