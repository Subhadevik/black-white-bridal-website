import Image from "next/image";
import { FaPaintBrush, FaCut, FaLeaf, FaSpa } from "react-icons/fa";

const services = [
    {
        icon: FaPaintBrush,
        title: "Bridal Makeup",
        description: "Luxury bridal makeup tailored for your special day.",
    },
    {
        icon: FaCut,
        title: "Hair Styling",
        description: "Elegant hairstyles and bridal updos.",
    },
    {
        icon: FaLeaf,
        title: "Facial Treatments",
        description: "Premium skincare and rejuvenation services.",
    },
    {
        icon: FaSpa,
        title: "Hair Spa",
        description: "Deep nourishment and professional hair care.",
    },
];

export default function BeautySection() {
    return (
        <section className="section-padding bg-luxury-alt">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="image-luxury gold-glow">
                        <Image
                            src="/images/beauty/beauty-showcase.jpg"
                            alt="Luxury Beauty Parlour"
                            width={700}
                            height={700}
                            className="w-full"
                        />
                    </div>

                    <div>
                        <p className="section-subtitle mb-5">Beauty Services</p>

                        <h2 className="section-title mb-6">Black & White Beauty Services</h2>

                        <div className="gold-divider mb-8 ml-0" />

                        <p className="muted-text text-lg mb-8">
                            Experience premium beauty treatments designed to bring out your
                            confidence and elegance. From bridal makeovers to luxury
                            skincare, every service is crafted with attention to detail.
                        </p>

                        <div className="mb-10">
                            {services.map((service) => {
                                const Icon = service.icon;
                                return (
                                    <div key={service.title} className="service-row">
                                        <div className="service-icon">
                                            <Icon />
                                        </div>
                                        <div>
                                            <h3 className="gold-text text-lg mb-1">
                                                {service.title}
                                            </h3>
                                            <p className="muted-text text-sm">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <a href="/services" className="btn-outline">
                            Explore Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}