import Image from "next/image";
import { FaTshirt, FaCrown, FaRulerCombined, FaGem } from "react-icons/fa";

const designs = [
    {
        icon: FaTshirt,
        title: "Designer Blouses",
        description: "Custom-designed blouses crafted with elegance and precision.",
    },
    {
        icon: FaCrown,
        title: "Bridal Wear",
        description: "Exclusive bridal outfits tailored for your special moments.",
    },
    {
        icon: FaRulerCombined,
        title: "Custom Stitching",
        description: "Personalized stitching services for a perfect fit and finish.",
    },
    {
        icon: FaGem,
        title: "Wedding Collections",
        description: "Luxury wedding collections designed to make you stand out.",
    },
];

export default function FashionSection() {
    return (
        <section className="section-padding bg-luxury">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <p className="section-subtitle mb-5">Fashion Designing</p>

                        <h2 className="section-title mb-6">Black & White Fashion Creations</h2>

                        <div className="gold-divider mb-8 ml-0" />

                        <p className="muted-text text-lg mb-8">
                            From designer blouses to custom bridal wear, every piece is
                            thoughtfully created to reflect elegance, individuality, and
                            timeless style.
                        </p>

                        <div className="mb-10">
                            {designs.map((design) => {
                                const Icon = design.icon;
                                return (
                                    <div key={design.title} className="service-row">
                                        <div className="service-icon">
                                            <Icon />
                                        </div>
                                        <div>
                                            <h3 className="gold-text text-lg mb-1">
                                                {design.title}
                                            </h3>
                                            <p className="muted-text text-sm">
                                                {design.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <a href="/services" className="btn-primary">
                            View Fashion Services
                        </a>
                    </div>

                    <div className="order-1 lg:order-2 image-luxury gold-glow">
                        <Image
                            src="/images/fashion/fashion-showcase.jpg"
                            alt="Fashion Designing"
                            width={700}
                            height={700}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}