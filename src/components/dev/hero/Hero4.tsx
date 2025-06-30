"use client";
import React, { useState, FormEvent } from "react";

export interface Hero4Props {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string; // label for the submit button
  videoSrc?: string;
  videoType?: string;
  posterSrc?: string;
  onSubmit?: (email: string) => void;
}

export function Hero4({
  title = "Copy & paste every day website sections directly into your React sites.",
  subtitle = "A modern frontend library of components to plug directly into your codebase to boost development time.",
  primaryCtaText = "Get Started Today",
  onSubmit,
}: Hero4Props) {
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
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center gap-8">
      {/* Text */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-neutral-700">{subtitle}</p>

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
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-white/90 transition disabled:opacity-50"
          >
            {status === "sending"
              ? "Sending…"
              : status === "sent"
              ? "Sent!"
              : primaryCtaText}
          </button>
        </form>
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
