import React from "react";
import { Hero1 } from "@/components/dev/hero/Hero1";

export default function HomePage() {
  return (
    <>
      <Hero1
        title="Pre-built React & Next.js UI Blocks for Faster Website Development"
        subtitle="A curated library of reusable components that cuts development time, keeps your code clean, and helps you launch marketing sites with ease."
        primaryCtaText="Get Started Free"
        primaryCtaHref="/signup"
        imageSrc="/hero-img.png"
        imageAlt="Lauf Blocks Hero"
        blurDataURL="/custom-hero-thumb.jpg"
      />
    </>
  );
}
