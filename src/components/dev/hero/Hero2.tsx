"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";

export interface Hero2Props {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  blurDataURL?: string;
  onSubmit?: (email: string) => void;
}

export function Hero2({
  title = "Copy & paste every day website sections directly into your React sites.",
  subtitle = "A modern frontend library of components to plug directly into your codebase to boost development time.",
  primaryCtaText = "Get Started Today",
  imageSrc = "/1.webp",
  imageAlt = "Abstract animation background",
  blurDataURL = "/hero1-thumb.jpg",
  onSubmit,
}: Hero2Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      // call the user‐supplied handler if provided
      await (onSubmit ? onSubmit(email) : Promise.resolve());
      setStatus("sent");
    } catch {
      setStatus("idle");
      // you could set an error state here
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
          className="mt-6 flex flex-col lg:flex-row gap-4"
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
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-neutral-800 transition disabled:opacity-50"
          >
            {status === "sending"
              ? "Sending…"
              : status === "sent"
              ? "Sent!"
              : primaryCtaText}
          </button>
        </form>
      </div>

      {/* Image */}
      <div className="md:w-1/2 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={800}
          layout="responsive"
          placeholder="blur"
          blurDataURL={blurDataURL}
          priority
          className="rounded-lg object-cover"
        />
      </div>
    </section>
  );
}
