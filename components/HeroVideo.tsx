"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Showcase player in the hero.
 *
 * The source is 848x478 (~1.774), so the frame uses a 16:9 box — near enough
 * that object-cover crops almost nothing, and the clip is shown sharp rather
 * than blurred behind text.
 */
export default function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [muted, setMuted] = useState(true);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // React can drop the muted attribute during hydration, and an unmuted
        // video is blocked from autoplaying. Set the property directly.
        video.muted = true;

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            // Autoplay can still be refused (low power mode, data saver), in
            // which case the play button below stays available.
            void video.play().catch(() => { });
        }
    }, []);

    const toggleSound = () => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = !video.muted;
        setMuted(video.muted);
        if (video.paused) void video.play().catch(() => { });
    };

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            void video.play().catch(() => { });
        } else {
            video.pause();
        }
    };

    return (
        <div className="w-full max-w-4xl mt-16 sm:mt-24 animate-reveal delay-300">
            <div className="relative group">
                {/* Ambient glow, breathing in time with the ring */}
                <div className="absolute -inset-5 bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-cyan-400/30 blur-3xl rounded-[3rem] animate-glow-breathe" />

                {/* Animated ring — the light runs down the border and back up */}
                <div className="video-frame relative rounded-[1.65rem] sm:rounded-[2.15rem] p-[2px] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.95)]">
                    <div className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-black">
                        <video
                            ref={videoRef}
                            src="/hero-bg.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            onClick={togglePlay}
                            onPlay={() => setPlaying(true)}
                            onPause={() => setPlaying(false)}
                            className="w-full aspect-video object-cover cursor-pointer"
                        />

                        {/* Paused affordance — only shown when the clip is not running */}
                        {!playing && (
                            <button
                                type="button"
                                onClick={togglePlay}
                                aria-label="Play video"
                                className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors hover:bg-black/25"
                            >
                                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 text-black shadow-lg">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </span>
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={toggleSound}
                            aria-label={muted ? "Unmute video" : "Mute video"}
                            className="absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-white/15 text-white backdrop-blur-md hover:bg-black/80 hover:border-white/30 transition-all"
                        >
                            {muted ? (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M11 5 6 9H2v6h4l5 4z" />
                                    <line x1="22" y1="9" x2="16" y2="15" />
                                    <line x1="16" y1="9" x2="22" y2="15" />
                                </svg>
                            ) : (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M11 5 6 9H2v6h4l5 4z" />
                                    <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                                    <path d="M19 5a9 9 0 0 1 0 14" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
