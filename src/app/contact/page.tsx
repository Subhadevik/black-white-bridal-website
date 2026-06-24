import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us | Black & White Bridal Studio",
  description:
    "Contact Black & White Bridal Studio for bridal makeup, beauty services, and fashion design. Reach us on WhatsApp or Instagram.",
};

const hours = [
  { day: "Monday", time: "10:00 AM – 8:00 PM" },
  { day: "Tuesday", time: "10:00 AM – 8:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 8:00 PM" },
  { day: "Thursday", time: "10:00 AM – 8:00 PM" },
  { day: "Friday", time: "10:00 AM – 8:00 PM" },
  { day: "Saturday", time: "9:00 AM – 9:00 PM" },
  { day: "Sunday", time: "10:00 AM – 6:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="contact-hero">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl px-6 text-center">
            <p className="section-subtitle mb-4">We'd Love to Hear From You</p>
            <h1 className="section-title text-white mb-6">Get In Touch</h1>
            <div className="gold-divider mb-6" />
            <p className="muted-text text-lg">
              Reach us on WhatsApp or Instagram to book your appointment or ask anything.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="section-container">
          <div className="contact-layout">

            <div className="contact-details">

              <div className="mb-10">
                <p className="section-subtitle mb-6">Reach Us</p>

                <a href="https://wa.me/916380342299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-card"
                >
                  <span className="contact-link-icon contact-link-icon--wa">
                    <FaWhatsapp size={20} />
                  </span>
                  <div>
                    <p className="contact-link-label">WhatsApp</p>
                    <p className="contact-link-value">+91 63803 42299</p>
                  </div>
                </a>

                <a href="https://instagram.com/blackandwhitebridalstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-card"
                >
                  <span className="contact-link-icon contact-link-icon--ig">
                    <FaInstagram size={20} />
                  </span>
                  <div>
                    <p className="contact-link-label">Instagram</p>
                    <p className="contact-link-value">@blackandwhitebridalstudio</p>
                  </div>
                </a>

                <div className="contact-link-card contact-link-card--static">
                  <span className="contact-link-icon">
                    <FaMapMarkerAlt size={18} />
                  </span>
                  <div>
                    <p className="contact-link-label">Location</p>
                    <p className="contact-link-value">
                      Ananganoor Corner Bus Stop, Salem Main Rd,<br />
                      Komarapalayam, Tamil Nadu 638183
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="section-subtitle mb-6">
                  <FaClock style={{ display: "inline", marginRight: "8px" }} />
                  Business Hours
                </p>
                <div className="contact-hours">
                  {hours.map((h) => (
                    <div key={h.day} className="contact-hours-row">
                      <span className="contact-hours-day">{h.day}</span>
                      <span className="contact-hours-time">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="contact-map-wrap">
              <iframe
                title="Black & White Bridal Studio Location"
                src="https://maps.google.com/maps?q=Ananganoor+Corner+Bus+Stop,+Salem+Main+Rd,+Komarapalayam,+Tamil+Nadu+638183&t=m&z=15&output=embed&iwloc=near"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "460px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="section-padding bg-luxury-alt border-t border-[rgba(212,175,55,0.1)]">
        <div className="flex justify-center">
          <div className="w-full max-w-xl px-6 text-center">
            <p className="section-subtitle mb-4">Book Now</p>
            <h2 className="section-title mb-6">Begin Your Bridal Journey</h2>
            <div className="gold-divider mb-8" />
            <p className="muted-text mb-10">
              Message us on WhatsApp to book your appointment — we'll get back to you promptly.
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