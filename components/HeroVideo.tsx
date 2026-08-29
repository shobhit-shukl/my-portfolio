"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ambient background clip for the hero.
 *
 * The source is 848x478, so it is scaled up and softened rather than shown
 * sharp — at full-bleed desktop widths the raw pixels would read as blurry
 * anyway. Dark scrims on top keep the headline at full contrast.
 */
export default function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // React can drop the muted attribute during hydration, and an unmuted
        // video is blocked from autoplaying. Set the property directly.
        video.muted = true;

        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

        const apply = () => {
            if (reduced.matches) {
                video.pause();
            } else {
                // Autoplay can still be refused (low power mode, data saver);
                // the static gradient underneath stays visible if so.
                void video.play().catch(() => { });
            }
        };

        apply();
        reduced.addEventListener("change", apply);
        return () => reduced.removeEventListener("change", apply);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <video
                ref={videoRef}
                src="/hero-bg.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onCanPlay={() => setReady(true)}
                className={`absolute inset-0 w-full h-full object-cover scale-110 blur-[3px] transition-opacity duration-1000 ${ready ? "opacity-45" : "opacity-0"
                    }`}
            />

            {/* Scrims: flatten the clip so text sits at full contrast and the
                section blends into the page background at both edges. */}
            <div className="absolute inset-0 bg-[#020617]/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,transparent_0%,rgba(2,6,23,0.75)_100%)]" />
        </div>
    );
}
