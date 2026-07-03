import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceMenu from "./ServiceMenu";
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
      { name: "Diamond Facial", price: "₹999" },
      { name: "Silver Facial", price: "₹999" },
      { name: "Wine Facial", price: "₹1499" },
      { name: "Briming Facial", price: "₹1399" },
      { name: "Skin Miracle Facial", price: "₹3499" },
    ],
  },
  {
    title: "De-Tan & Bleach",
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
    title: "Hair Spa & Treatments",
    services: [
      { name: "Hair Spa", price: "₹799" },
      { name: "Hair Botox", price: "₹5999" },
      { name: "Hair Smoothing", price: "₹4999" },
      { name: "Hair Straightening", price: "₹5999" },
      { name: "Dandruff Treatment", price: "₹1499" },
      { name: "Hot Oil Massage", price: "₹499" },
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
    title: "Hair Wash & Styling",
    services: [
      { name: "Hair Wash (Medium)", price: "₹149" },
      { name: "Hair Wash (Super)", price: "₹199" },
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
    title: "Henna",
    services: [
      { name: "Black Henna (Medium)", price: "₹399" },
      { name: "Black Henna (Super)", price: "₹549" },
    ],
  },
];

const fashionCategories = [
  {
    title: "Salwar Collection",
    services: [
      { name: "Straight Cut Salwar Suit", price: null },
      { name: "Simple Salwar Suit", price: null },
      { name: "Patiala Salwar Suit", price: null },
      { name: "Palazzo Salwar Suit", price: null },
      { name: "Front Slit Salwar Suit", price: null },
      { name: "Side Slit Salwar Suit", price: null },
      { name: "C-Cut Salwar Suit", price: null },
      { name: "Bandhani Design Salwar Suit", price: null },
      { name: "Anarkali Salwar Suit", price: null },
      { name: "Floor Length Anarkali Suit", price: null },
      { name: "Long Jacket Salwar Suit", price: null },
    ],
  },
  {
    title: "Blouse Collection",
    services: [
      { name: "Print Cut Blouse", price: null },
      { name: "Round Neck Blouse", price: null },
      { name: "U Neck Blouse", price: null },
      { name: "V Neck Blouse", price: null },
      { name: "Square Neck Blouse", price: null },
      { name: "Cold Shoulder Blouse", price: null },
      { name: "Jacket Style Blouse", price: null },
      { name: "Shirt Collar Blouse", price: null },
      { name: "Key Hole Blouse", price: null },
      { name: "Belt Blouse", price: null },
      { name: "Cut Work Blouse", price: null },
    ],
  },
  {
    title: "Aari Embroidery Work",
    services: [
      { name: "Chain Stitch", price: null },
      { name: "Knot Stitch", price: null },
      { name: "Stem Stitch", price: null },
      { name: "Satin Stitch", price: null },
      { name: "Inside Filling", price: null },
      { name: "Outside Filling", price: null },
      { name: "Magic Chain", price: null },
      { name: "Zig Zag Chain", price: null },
      { name: "Scroll Chain", price: null },
      { name: "Chain in Chain", price: null },
    ],
  },
  {
    title: "Wedding Collection",
    services: [
      { name: "Lehenga", price: null },
      { name: "Anarkali Suit", price: null },
      { name: "Sharara Suit", price: null },
      { name: "Jacket Gown", price: null },
    ],
  },
];

const comboOffers = [
  {
    title: "Bridal Care Combo",
    price: "₹3,999",
    popular: false,
    services: ["Skin Miracle Facial", "Hair Spa", "Full Leg Pedicure", "Full Arms Wax", "Threading"],
  },
  {
    title: "Diamond Beauty Combo",
    price: "₹2,999",
    popular: false,
    services: ["Diamond Facial", "Hair Spa", "Pedicure", "Full Arms Wax", "Blow Dry"],
  },
  {
    title: "Bridal Pre-Glow Combo",
    price: "₹3,499",
    popular: true,
    services: ["Skin Miracle Facial", "Fruit De-Tan", "Threading", "Hair Spa", "Pedicure"],
  },
  {
    title: "Wedding Ready Combo",
    price: "₹4,499",
    popular: false,
    services: ["Briming Facial", "Hair Spa", "Manicure", "Pedicure", "Blow Dry"],
  },
  {
    title: "Hair Revival Combo",
    price: "₹1,499",
    popular: false,
    services: ["Hair Spa", "Hot Oil Massage", "Hair Wash", "Blow Dry", "Threading"],
  },
];

function ComboTicket({
  combo,
}: {
  combo: { title: string; price: string; popular: boolean; services: string[] };
}) {
  return (
    <div
      className="group transition-all duration-300 ease-out hover:-translate-y-0.5"
      style={{
        display: "flex",
        flexWrap: "wrap",
        border: combo.popular
          ? "1px solid rgba(212,175,55,.5)"
          : "1px solid rgba(212,175,55,.18)",
        borderRadius: "12px",
        overflow: "hidden",
        background: combo.popular
          ? "linear-gradient(180deg, rgba(212,175,55,.06), transparent 60%)"
          : "transparent",
      }}
    >
      <div style={{ flex: "1 1 260px", padding: "22px 26px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
          <h4 style={{ color: "#f2f2f2", fontSize: "17px", fontWeight: 600 }}>{combo.title}</h4>
          {combo.popular && (
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "1px",
                color: "#050505",
                background: "#d4af37",
                padding: "3px 9px",
                borderRadius: "999px",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Popular
            </span>
          )}
        </div>
        <p style={{ color: "#8f8f8f", fontSize: "13.5px", lineHeight: 1.7 }}>
          {combo.services.join(" · ")}
        </p>
      </div>

      <div
        style={{
          flex: "0 0 140px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderLeft: "1px dashed rgba(212,175,55,.3)",
          padding: "18px 16px",
        }}
      >
        <span style={{ color: "#6f6f6f", fontSize: "10.5px", letterSpacing: "0.5px", marginBottom: "6px" }}>
          PACKAGE
        </span>
        <span style={{ color: "#d4af37", fontSize: "22px", fontWeight: 700 }}>{combo.price}</span>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          paddingTop: "150px",
          paddingBottom: "70px",
          background:
            "radial-gradient(circle at top,#1a1405 0%,#050505 40%,#000 100%)",
          textAlign: "center",
        }}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-2xl px-6 text-center">
            <p className="section-subtitle mb-3">Our Offerings</p>
            <h1 className="section-title text-white mb-4">Services & Pricing</h1>
            <div className="gold-divider mb-5" />
            <p className="muted-text text-base">
              Premium beauty and fashion services crafted exclusively for you.
            </p>
          </div>
        </div>
      </section>

      {/* Beauty */}
      <section className="bg-black" style={{ padding: "70px 24px" }}>
        <div className="section-container">
          <div className="services-section-header" style={{ marginBottom: "40px" }}>
            <p className="section-subtitle mb-2">Beauty Parlour</p>
            <h2 className="section-title mb-2">Black & White Beauty Services</h2>
          </div>
          <ServiceMenu categories={beautyCategories} />
        </div>
      </section>

      {/* Fashion */}
      <section className="bg-luxury-alt" style={{ padding: "70px 24px" }}>
        <div className="section-container">
          <div className="services-section-header" style={{ marginBottom: "40px" }}>
            <p className="section-subtitle mb-2">Fashion Designing</p>
            <h2 className="section-title mb-2">Black & White Fashion Creations</h2>
          </div>
          <ServiceMenu categories={fashionCategories} />
        </div>
      </section>

      {/* Combo Offers */}
      <section className="bg-black" style={{ padding: "70px 24px" }}>
        <div className="section-container">
          <div className="services-section-header" style={{ marginBottom: "40px" }}>
            <p className="section-subtitle mb-2">Special Packages</p>
            <h2 className="section-title mb-2">Combo Offers</h2>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {comboOffers.map((combo) => (
              <ComboTicket key={combo.title} combo={combo} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "90px 24px",
          background: "#050505",
          borderTop: "1px solid rgba(212,175,55,.15)",
          textAlign: "center",
        }}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-xl px-6 text-center">
            <p className="section-subtitle mb-3">Book Now</p>
            <h2 className="section-title mb-4">Ready to Begin?</h2>
            <div className="gold-divider mb-6" />
            <p className="muted-text mb-8">
              Contact us on WhatsApp to book your appointment or ask about any service.
            </p>

            <a
              href="https://wa.me/916380342299"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary transition-transform duration-200 hover:scale-105"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.4 1.32-1.93 1.4-.49.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08 1-2.37.24-.26.54-.32.72-.32h.51c.16 0 .38-.03.59.45.24.55.81 1.94.88 2.08.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.19-.28.37-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.53.33.07.12.07.68-.17 1.36z" />
              </svg>
              Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}