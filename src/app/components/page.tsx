"use client";
import { Hero1 } from "@/components/dev/hero/Hero1";
import { Hero2 } from "@/components/dev/hero/Hero2";
import { Hero3 } from "@/components/dev/hero/Hero3";
import { Hero4 } from "@/components/dev/hero/Hero4";
import { Hero5 } from "@/components/dev/hero/Hero5";
import { Hero6 } from "@/components/dev/hero/Hero6";
import { Hero7 } from "@/components/dev/hero/Hero7";
import { Hero8 } from "@/components/dev/hero/Hero8";
import { Hero9 } from "@/components/dev/hero/Hero9";

const handleSignUp = async (email: string) => {
  // e.g. await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
  console.log("Sign up: ", email);
};

export default function ComponentsPage() {
  return (
    <>
      <Hero1 />
      <Hero2 onSubmit={handleSignUp} />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero7 />
      <Hero8 />
      <Hero9 />
    </>
  );
}
