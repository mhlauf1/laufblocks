"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";

export interface Hero9Props {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  blurDataURL?: string;
  onSubmit?: (email: string) => void;
}

export function Hero9({
  title = "Copy & paste every day website sections directly into your react sites.",
  subtitle = "A modern frontend library of components to plug directly into your codebase to boost development time.",
  primaryCtaText = "Get Started Today",
  imageSrc = "/1.webp",
  imageAlt = "Abstract animation background",
  blurDataURL = "/hero9-thumb.jpg",
  onSubmit,
}: Hero9Props) {
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
    <section className="bg-[#6F8EE9] px-4 sm:px-8 py-12 lg:py-24 ">
      <div className="max-w-7xl flex flex-col md:flex-row items-center gap-8 mx-auto">
        {/* Text */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-slate-900">{subtitle}</p>
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
      </div>
    </section>
  );
}
