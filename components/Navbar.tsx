import { Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-4 py-4 sm:px-6 md:px-12 md:py-6 bg-transparent">
            <div className="max-w-[1280px] mx-auto flex justify-between items-center">
                <div className="relative h-14 w-36 sm:h-16 sm:w-44 md:w-64 md:h-20">
                    <Image
                        src="/logo.png"
                        alt="AIHP Logo"
                        fill
                        className="object-contain object-left"
                        sizes="256px"
                        priority
                    />
                </div>

                {/* Contact Info */}
                <div className="hidden md:flex items-center">
                    <a
                        href="tel:+917303060067"
                        className="flex items-center gap-2 rounded-full bg-brand-burgundy/80 px-4 py-2 border border-white/30 text-white font-semibold hover:bg-brand-burgundy transition-colors"
                    >
                        <Phone className="w-6 h-6" />
                        <span>+91 7303060067</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
