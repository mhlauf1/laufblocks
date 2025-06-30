// src/components/dev/Hero6.tsx
"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";

export interface Hero6Props {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string; // label for the submit button
  videoSrc?: string;
  backgroundSrc?: string;
  backgroundAlt?: string;
  videoType?: string;
  posterSrc?: string;
  blurDataURL?: string;
  onSubmit?: (email: string) => void;
}

export function Hero6({
  title = "Copy & paste every day website sections directly into your React sites.",
  subtitle = "A modern frontend library of components to plug directly into your codebase to boost development time.",
  primaryCtaText = "Get Started Today",
  backgroundSrc = "/1.webp",
  backgroundAlt = "Abstract animation background",
  blurDataURL = "/hero1-thumb.jpg",

  onSubmit,
}: Hero6Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      await (onSubmit ? onSubmit(email) : Promise.resolve());
      setStatus("sent");
    } catch {
      setStatus("idle");
    }
  };

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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            {title}
          </h1>
          <p className="mt-4 text-lg text-white/90">{subtitle}</p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 text-neutral-600 bg-neutral-50 border border-neutral-100 placeholder-black/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-200"
            />
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition disabled:opacity-50"
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                ? "Sent!"
                : primaryCtaText}
            </button>
          </form>
        </div>
        {/* Right spacer (empty on mobile) */}
        <div className="md:w-1/2 hidden md:block" />
      </div>
    </section>
  );
}
