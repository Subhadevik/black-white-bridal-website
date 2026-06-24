import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import Image from "next/image";
import { readdir } from "fs/promises";
import path from "path";

export const metadata: Metadata = {
    title: "Gallery | Black & White Bridal Studio",
    description:
        "Browse our bridal makeup, beauty parlour, and fashion designing gallery.",
};

async function getGalleryImages(): Promise<string[]> {
    try {
        const galleryDir = path.join(process.cwd(), "public/images/gallery");
        const files = await readdir(galleryDir);
        return files
            .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
            .map((f) => `/images/gallery/${f}`);
    } catch {
        return [];
    }
}

export default async function GalleryPage() {
    const images = await getGalleryImages();

    return (
        <>
            <Navbar />

            {/* Hero */}
            <section className="gallery-hero">
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl px-6 text-center">
                        <p className="section-subtitle mb-4">Our Work</p>
                        <h1 className="section-title text-white mb-6">Gallery</h1>
                        <div className="gold-divider mb-6" />
                        <p className="muted-text text-lg">
                            A glimpse into our world of bridal beauty and bespoke fashion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="section-padding bg-black">
                <div className="section-container">
                    {images.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="muted-text text-lg">
                                No images yet — add photos to{" "}
                                <code className="gold-text">/public/images/gallery/</code>
                            </p>
                        </div>
                    ) : (
                        <div className="gallery-grid">
                            {images.map((src, index) => (
                                <div key={index} className="gallery-item">
                                    <Image
                                        src={src}
                                        alt={`Black & White Bridal Studio — ${index + 1}`}
                                        fill
                                        className="gallery-img"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-luxury-alt border-t border-[rgba(212,175,55,0.1)]">
                <div className="flex justify-center">
                    <div className="w-full max-w-xl px-6 text-center">
                        <p className="section-subtitle mb-4">Book Now</p>
                        <h2 className="section-title mb-6">Love What You See?</h2>
                        <div className="gold-divider mb-8" />
                        <p className="muted-text mb-10">
                            Book your appointment and let us create something beautiful for you.
                        </p>

                        <a href="https://wa.me/916380342299"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Book via WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}