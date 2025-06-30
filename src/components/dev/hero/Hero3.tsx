import React from "react";

export interface Hero3Props {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  videoSrc?: string;
  videoType?: string;
  posterSrc?: string;
}

export function Hero3({
  title = "Copy & paste every day website sections directly into your React sites.",
  subtitle = "A modern frontend library of components to plug directly into your codebase to boost development time.",
  primaryCtaText = "Get Started Today",
  primaryCtaHref = "#",
}: Hero3Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center gap-8">
      {/* Text */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-neutral-700">{subtitle}</p>
        <a
          href={primaryCtaHref}
          className="inline-block mt-5 bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-neutral-800 transition"
        >
          {primaryCtaText}
        </a>
      </div>

      {/* Video */}
      <div className="md:w-1/2 w-full">
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full rounded-md md:rounded-xl object-cover"
          >
            <source src="/demo-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
