"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <Image
        src="/images/hero/hero-bg.jpg"
        alt="Black & White Bridal Studio"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex justify-center w-full">
        <div className="w-full max-w-4xl px-6 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={140}
              height={140}
            />
          </div>

          <p className="section-subtitle mb-6">Luxury Beauty & Fashion</p>

          <h1 className="text-white hero-title mb-2">Black & White</h1>

          <h2 className="gold-text hero-subtitle mb-8">Bridal Studio</h2>

          <div className="gold-divider mb-10" />

          <p className="muted-text text-lg md:text-xl mb-12">
            Creating timeless beauty experiences through luxury bridal
            makeovers, premium beauty services, and bespoke fashion
            designing.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a href="/services" className="btn-outline">
              Explore Services
            </a>
            <a href="/gallery" className="btn-primary">
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}