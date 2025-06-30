import React from "react";
import Image from "next/image";

export interface Hero8Props {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  blurDataURL?: string;
}

export function Hero8({
  title = "Copy & paste every day website sections directly into your react sites.",
  subtitle = "A modern frontend library of components to plug directly into your codebase to boost development time.",
  primaryCtaText = "Get Started Today",
  primaryCtaHref = "#",
  imageSrc = "/1.webp",
  imageAlt = "Abstract animation background",
  blurDataURL = "/hero8-thumb.jpg",
}: Hero8Props) {
  return (
    <section className="bg-[#051c31] px-4 sm:px-8 py-12 lg:py-24 ">
      <div className="max-w-7xl flex flex-col md:flex-row items-center gap-8 mx-auto">
        {/* Text */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl lg:text-5xl text-white font-bold leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-neutral-100">{subtitle}</p>
          <a
            href={primaryCtaHref}
            className="inline-block mt-5 bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-neutral-800 transition"
          >
            {primaryCtaText}
          </a>
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
