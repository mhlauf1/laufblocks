// src/components/dev/Hero7.tsx
"use client";
import React, { useState, FormEvent } from "react";

export interface Hero7Props {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string; // label for the submit button
  videoSrc?: string;
  videoType?: string;
  posterSrc?: string;
  onSubmit?: (email: string) => void;
}

export function Hero7({
  title = "Copy & paste every day website sections directly into your React sites.",
  subtitle = "A modern frontend library of components to plug directly into your codebase to boost development time.",
  primaryCtaText = "Get Started Today",
  videoSrc = "/demo-video.mp4",
  posterSrc = "/demo-poster.jpg",
  onSubmit,
}: Hero7Props) {
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
    <section className="relative w-full h-[90vh] sm:px-8  flex flex-col md:flex-row justify-center items-start md:items-center">
      {/* Background Video */}
      <video
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

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
        <div className="md:w-1/2 hidden lg:block" />
      </div>
    </section>
  );
}
