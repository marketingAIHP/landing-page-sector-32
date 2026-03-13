"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

declare global {
    interface Window {
        google?: GoogleMapsApi;
        __googleMapsLoader?: Promise<GoogleMapsApi>;
        __initGoogleMapsForAIHP?: () => void;
        gm_authFailure?: () => void;
    }
}

type GoogleMapInstance = object;

type GoogleMapsOverlayPanes = {
    overlayMouseTarget: Element;
};

type GoogleMapsProjection = {
    fromLatLngToDivPixel: (latLng: GoogleMapsLatLng) => { x: number; y: number } | null;
};

type GoogleMapsLatLng = object;

type GoogleMapsLatLngLiteral = {
    lat: number;
    lng: number;
};

type GoogleMapsMapOptions = {
    center: GoogleMapsLatLngLiteral;
    zoom: number;
    mapTypeControl: boolean;
    streetViewControl: boolean;
    fullscreenControl: boolean;
    clickableIcons: boolean;
    gestureHandling: string;
};

type GoogleMapsOverlayViewInstance = {
    setMap: (map: GoogleMapInstance | null) => void;
    getPanes: () => GoogleMapsOverlayPanes | null;
    getProjection: () => GoogleMapsProjection;
};

type GoogleMapsOverlayViewClass = new () => GoogleMapsOverlayViewInstance;

type GoogleMapsApi = {
    maps: {
        Map: new (element: HTMLElement, options: GoogleMapsMapOptions) => GoogleMapInstance;
        LatLng: new (lat: number, lng: number) => GoogleMapsLatLng;
        OverlayView: GoogleMapsOverlayViewClass;
    };
};

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const benefits = [
    "On NH8 National Highway — seamless access to Delhi, IGI Airport & all of Gurgaon",
    "10 minutes from HUDA City Centre Metro Station",
    "Adjacent to Medanta — The Medicity Hospital (a key landmark for business navigation)",
    "Established corporate hub with multinational companies, banks & tech firms",
    "Premium retail, hospitality & dining options within 5 minutes",
];

const sites = [
    { name: "AIHP SCO 27", lat: 28.4549, lng: 77.0465 },
    { name: "AIHP Broadway", lat: 28.4535, lng: 77.0472 },
    { name: "AIHP Executive Center", lat: 28.4552, lng: 77.0487 },
    { name: "AIHP Atrium", lat: 28.4639, lng: 77.0588 },
    { name: "AIHP Spectra", lat: 28.4662, lng: 77.0607 },
    { name: "AIHP Skyline", lat: 28.4689, lng: 77.0619 },
];

const mapCenter = { lat: 28.4602, lng: 77.0538 };
const fallbackMapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.765662705058!2d77.0345672!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c0ddb5a5b5%3A0x6e2c38d6a782a6f!2sSector%2032%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

function hasUsableGoogleMapsKey(key: string | undefined): key is string {
    if (!key) return false;

    const trimmedKey = key.trim();
    if (!trimmedKey.startsWith("AIza")) return false;
    if (trimmedKey.endsWith("--------")) return false;

    return true;
}

type SiteLabelOverlay = {
    setMap: (map: GoogleMapInstance | null) => void;
};

function createSiteLabelOverlay(
    googleApi: GoogleMapsApi,
    position: GoogleMapsLatLngLiteral,
    title: string,
) : SiteLabelOverlay {
    class SiteLabelOverlayImpl extends googleApi.maps.OverlayView {
        private div: HTMLDivElement | null = null;

        onAdd() {
            const div = document.createElement("div");
            div.className = "aihp-map-label google-map-label";
            div.innerHTML = `
                <span class="aihp-map-label__dot"></span>
                <span class="aihp-map-label__text">${title}</span>
            `;
            this.div = div;

            const panes = this.getPanes();
            panes?.overlayMouseTarget.appendChild(div);
        }

        draw() {
            if (!this.div) return;

            const projection = this.getProjection();
            const point = projection.fromLatLngToDivPixel(
                new googleApi.maps.LatLng(position.lat, position.lng),
            );

            if (!point) return;

            this.div.style.left = `${point.x}px`;
            this.div.style.top = `${point.y}px`;
        }

        onRemove() {
            this.div?.remove();
            this.div = null;
        }
    }

    return new SiteLabelOverlayImpl();
}

function loadGoogleMaps() {
    if (typeof window === "undefined") {
        return Promise.reject(new Error("Google Maps can only load in the browser."));
    }

    if (!hasUsableGoogleMapsKey(GOOGLE_MAPS_API_KEY)) {
        return Promise.reject(new Error("Missing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY."));
    }

    if (window.google?.maps) {
        return Promise.resolve(window.google);
    }

    if (window.__googleMapsLoader) {
        return window.__googleMapsLoader;
    }

    window.__googleMapsLoader = new Promise((resolve, reject) => {
        const existingScript = document.querySelector('script[data-google-maps="true"]') as HTMLScriptElement | null;

        if (existingScript) {
            existingScript.addEventListener("load", () => {
                if (window.google?.maps) {
                    resolve(window.google);
                    return;
                }
                reject(new Error("Google Maps failed to initialize."));
            });
            existingScript.addEventListener("error", () => reject(new Error("Google Maps failed to load.")));
            return;
        }

        window.__initGoogleMapsForAIHP = () => {
            if (window.google?.maps) {
                resolve(window.google);
                return;
            }
            reject(new Error("Google Maps failed to initialize."));
        };

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=weekly&loading=async&callback=__initGoogleMapsForAIHP`;
        script.async = true;
        script.defer = true;
        script.dataset.googleMaps = "true";
        script.onerror = () => reject(new Error("Google Maps failed to load."));
        document.body.appendChild(script);
    });

    return window.__googleMapsLoader;
}

export default function LocationBenefits() {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const overlaysRef = useRef<SiteLabelOverlay[]>([]);
    const [mapError, setMapError] = useState<string | null>(null);

    useEffect(() => {
        let map: GoogleMapInstance | null = null;
        const previousAuthFailureHandler = window.gm_authFailure;

        const mountMap = async () => {
            if (!mapRef.current) return;

            try {
                window.gm_authFailure = () => {
                    setMapError("Google Maps authentication failed.");
                };

                const googleApi = await loadGoogleMaps();

                map = new googleApi.maps.Map(mapRef.current, {
                    center: mapCenter,
                    zoom: 14,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                    clickableIcons: false,
                    gestureHandling: "greedy",
                });

                overlaysRef.current = sites.map((site) => {
                    const overlay = createSiteLabelOverlay(
                        googleApi,
                        { lat: site.lat, lng: site.lng },
                        site.name,
                    );
                    overlay.setMap(map);
                    return overlay;
                });
            } catch (error) {
                setMapError(error instanceof Error ? error.message : "Unable to load Google Maps.");
            }
        };

        void mountMap();

        return () => {
            overlaysRef.current.forEach((overlay) => overlay.setMap(null));
            overlaysRef.current = [];
            window.gm_authFailure = previousAuthFailureHandler;
            map = null;
        };
    }, []);

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
                    {mapError ? (
                        <iframe
                            src={fallbackMapSrc}
                            title="AIHP Sector 32 map fallback"
                            className="h-full w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    ) : (
                        <div ref={mapRef} className="h-full w-full" aria-label="AIHP Sector 32 map" />
                    )}

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Sector+32+Gurugram+Haryana"
                        target="_blank"
                        rel="noreferrer"
                        className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-brand-navy-ink shadow-lg transition-transform hover:-translate-y-0.5 sm:left-4 sm:top-4 sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                        Open in Maps
                        <ExternalLink className="h-4 w-4" />
                    </a>

                    {mapError ? (
                        <div className="absolute inset-x-4 bottom-4 z-10 rounded-2xl bg-white/95 px-4 py-3 text-sm text-brand-navy-grey shadow-lg">
                            Interactive Google Maps could not load. Showing a fallback map instead.
                        </div>
                    ) : null}
                </motion.div>
            </div>
        </section>
    );
}
