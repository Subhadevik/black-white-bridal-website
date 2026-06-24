import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Black & White Bridal Studio",
  description:
    "Explore our beauty parlour and fashion designing services including facials, hair spa, bridal makeup, and custom stitching.",
};

const beautyCategories = [
  {
    title: "Facial",
    services: [
      { name: "Threading", price: "₹49" },
      { name: "Clean Up", price: "₹449" },
      { name: "Papaya Facial", price: "₹499" },
      { name: "Fruit Facial", price: "₹749" },
      { name: "Golden Facial", price: "₹999" },
      { name: "Wine Facial", price: "₹1499" },
      { name: "Diamond Facial", price: "₹999" },
      { name: "Silver Facial", price: "₹999" },
      { name: "Skin Miracle Facial", price: "₹3499" },
      { name: "Briming Facial", price: "₹1399" },
    ],
  },
  {
    title: "Detan & Bleach",
    services: [
      { name: "Fruit De-Tan", price: "₹349" },
      { name: "Herbal De-Tan", price: "₹349" },
      { name: "Charcoal De-Tan", price: "₹349" },
      { name: "Bleach", price: "₹249" },
    ],
  },
  {
    title: "Hair Cut",
    services: [
      { name: "Straight Cut", price: "₹199" },
      { name: "U Cut", price: "₹249" },
      { name: "Deep U Cut", price: "₹299" },
      { name: "V Cut", price: "₹349" },
      { name: "Feather Cut", price: "₹449" },
      { name: "Butterfly Cut", price: "₹699" },
      { name: "Long Butterfly Cut", price: "₹749" },
      { name: "Step Cut", price: "₹699" },
      { name: "Dora Cut", price: "₹149" },
    ],
  },
  {
    title: "Waxing",
    services: [
      { name: "Hand Wax", price: "₹299" },
      { name: "Leg Wax", price: "₹249" },
      { name: "Full Arms Wax", price: "₹299" },
      { name: "Full Legs Wax", price: "₹449" },
    ],
  },
  {
    title: "Hair Spa",
    services: [
      { name: "Hair Spa", price: "₹799" },
      { name: "Smoothing", price: "₹4999" },
      { name: "Straightening", price: "₹5999" },
      { name: "Hair Botox", price: "₹5999" },
    ],
  },
  {
    title: "Hair Colouring",
    services: [
      { name: "Shoulder Length", price: "₹299" },
      { name: "Medium Length", price: "₹349" },
      { name: "Waist Length", price: "₹449" },
      { name: "Super Length", price: "₹799" },
    ],
  },
  {
    title: "Hair Services & Styling",
    services: [
      { name: "Hair Wash (Medium Length)", price: "₹149" },
      { name: "Hair Wash (Super Length)", price: "₹199" },
      { name: "Blow Dry", price: "₹599" },
    ],
  },
  {
    title: "Hand & Foot Care",
    services: [
      { name: "Manicure", price: "₹399" },
      { name: "Full Hand Manicure", price: "₹799" },
      { name: "Pedicure", price: "₹499" },
      { name: "Full Leg Pedicure", price: "₹999" },
    ],
  },
  {
    title: "Hair Care Treatments",
    services: [
      { name: "Dandruff Treatment", price: "₹1499" },
      { name: "Hot Oil Massage", price: "₹499" },
    ],
  },
  {
    title: "Henna",
    services: [
      { name: "Black Henna Medium Length", price: "₹399" },
      { name: "Black Henna Super Length", price: "₹549" },
    ],
  },
];

const fashionCategories = [
  {
    title: "Fashion Designing",
    services: [
      { name: "Designer Blouses", price: null },
      { name: "Bridal Wear", price: null },
      { name: "Custom Stitching", price: null },
      { name: "Wedding Collections", price: null },
    ],
  },
];

function ServiceCard({
  title,
  services,
}: {
  title: string;
  services: { name: string; price: string | null }[];
}) {
  return (
    <div className="service-card">
      <h3 className="service-card-title">{title}</h3>
      <div className="service-card-divider" />
      <ul className="service-card-list">
        {services.map((s) => (
          <li key={s.name} className="service-card-item">
            <span className="service-card-name">{s.name}</span>
            {s.price && (
              <span className="service-card-price">{s.price}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="services-hero">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl px-6 text-center">
            <p className="section-subtitle mb-4">Our Offerings</p>
            <h1 className="section-title text-white mb-6">Services & Pricing</h1>
            <div className="gold-divider mb-6" />
            <p className="muted-text text-lg">
              Premium beauty and fashion services crafted exclusively for you.
            </p>
          </div>
        </div>
      </section>

      {/* Beauty */}
      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="services-section-header">
            <p className="section-subtitle mb-3">Beauty Parlour</p>
            <h2 className="section-title mb-2">Black & White Beauty Services</h2>
            <div className="gold-divider mt-6" />
          </div>
          <div className="services-grid">
            {beautyCategories.map((cat) => (
              <ServiceCard
                key={cat.title}
                title={cat.title}
                services={cat.services}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fashion */}
      <section className="section-padding bg-luxury-alt">
        <div className="section-container">
          <div className="services-section-header">
            <p className="section-subtitle mb-3">Fashion Designing</p>
            <h2 className="section-title mb-2">Black & White Fashion Creations</h2>
            <div className="gold-divider mt-6" />
          </div>
          <div className="services-grid services-grid--narrow">
            {fashionCategories.map((cat) => (
              <ServiceCard
                key={cat.title}
                title={cat.title}
                services={cat.services}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black border-t border-[rgba(212,175,55,0.1)]">
        <div className="flex justify-center">
          <div className="w-full max-w-xl px-6 text-center">
            <p className="section-subtitle mb-4">Book Now</p>
            <h2 className="section-title mb-6">Ready to Begin?</h2>
            <div className="gold-divider mb-8" />
            <p className="muted-text mb-10">
              Contact us on WhatsApp to book your appointment or ask about any service.
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