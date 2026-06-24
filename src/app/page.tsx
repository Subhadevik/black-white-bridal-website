import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import BeautySection from "@/components/home/BeautySection";
import FashionSection from "@/components/home/FashionSection";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import BookAppointment from "@/components/home/BookAppointment";
import WhatsappButton from "@/components/ui/WhatsappButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black & White Bridal Studio | Beauty Parlour & Fashion Designing",
  description:
    "Black & White Bridal Studio offers bridal makeup, beauty parlour services, hair styling, skincare, and fashion designing.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <BeautySection />
      <FashionSection />
      <Testimonials />
      <FAQ />
      <BookAppointment />
      <WhatsappButton />
      <Footer />
    </>
  );
}