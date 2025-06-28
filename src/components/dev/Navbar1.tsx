// src/components/dev/Navbar1.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface NavLink {
  label: string;
  href: string;
}

interface Navbar1Props {
  logoSrc?: string;
  logoAlt?: string;
  links?: NavLink[];
  primaryCtaText?: string;
  primaryCtaHref?: string;
}

export function Navbar1({
  logoSrc = "/black-text.png",
  logoAlt = "Logo",
  links = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
  ],
  primaryCtaText = "Get Started",
  primaryCtaHref = "/signup",
}: Navbar1Props) {
  return (
    <header className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4  flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={32}
            height={32}
            layout="fixed"
            className="mr-3"
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden lg:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-black font-medium transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA button */}
        <div className="hidden lg:block">
          <Link
            href={primaryCtaHref}
            className="px-5 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            {primaryCtaText}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
