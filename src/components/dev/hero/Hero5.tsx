// src/components/dev/Hero5.tsx
"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";

export interface Hero5Props {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string; // label for the submit button
  videoSrc?: string;
  backgroundSrc?: string;
  backgroundAlt?: string;
  videoType?: string;
  posterSrc?: string;
  blurDataURL?: string;
  primaryCtaHref?: string;
}

export function Hero5({
  title = "Copy & paste every day website sections directly into your React sites.",
  subtitle = "A modern frontend library of components to plug directly into your codebase to boost development time.",
  primaryCtaText = "Get Started Today",
  backgroundSrc = "/1.webp",
  backgroundAlt = "Abstract animation background",
  blurDataURL = "/hero1-thumb.jpg",
  primaryCtaHref = "#",
}: Hero5Props) {
  return (
    <section className="relative w-full h-[90vh] sm:px-8 flex flex-col md:flex-row justify-center items-start md:items-center">
      {/* Background Image */}
      <Image
        src={backgroundSrc}
        alt={backgroundAlt}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority
        className="z-0"
      />

      {/* Overlay (optional slight darkening) */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4">
        {/* Left / Text + Form */}
        <div className="md:w-1/2 space-y-6 text-left">
          <h1 className="text-3xl  md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            {title}
          </h1>
          <p className="mt-4 text-lg text-white/90">{subtitle}</p>

          <a
            href={primaryCtaHref}
            className="inline-block mt-5 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-neutral-800 transition"
          >
            {primaryCtaText}
          </a>
        </div>
        {/* Right spacer (empty on mobile) */}
        <div className="md:w-1/2 hidden md:block" />
      </div>
    </section>
  );
}
