import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blackandwhitebridalstudio.com"),

  title: {
    default: "Black & White Bridal Studio",
    template: "%s | Black & White Bridal Studio",
  },

  description:
    "Luxury Bridal Studio offering Bridal Makeup, Beauty Parlour Services, Hair Styling, Skincare, Fashion Designing, Designer Blouses, Bridal Wear, and Wedding Makeovers.",

  keywords: [
    "Black & White Bridal Studio",
    "Bridal Studio",
    "Bridal Makeup",
    "Wedding Makeup",
    "Beauty Parlour",
    "Beauty Salon",
    "Hair Styling",
    "Hair Spa",
    "Facial",
    "Skincare",
    "Fashion Designing",
    "Designer Blouse",
    "Bridal Wear",
    "Wedding Fashion",
    "Luxury Bridal Services",
  ],

  authors: [{ name: "Black & White Bridal Studio" }],
  creator: "Black & White Bridal Studio",
  publisher: "Black & White Bridal Studio",

  openGraph: {
    title: "Black & White Bridal Studio",
    description:
      "Luxury Bridal Makeup, Beauty Parlour & Fashion Designing Services.",
    url: "https://www.blackandwhitebridalstudio.com",
    siteName: "Black & White Bridal Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Black & White Bridal Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Black & White Bridal Studio",
    description:
      "Luxury Bridal Makeup, Beauty Parlour & Fashion Designing Services.",
    images: ["/images/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.blackandwhitebridalstudio.com",
  },

  category: "Beauty & Fashion",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Black & White Bridal Studio",
  image: "https://www.blackandwhitebridalstudio.com/images/logo.png",
  url: "https://www.blackandwhitebridalstudio.com",
  telephone: "+91-63803-42299",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ananganoor Corner Bus Stop, Salem Main Rd",
    addressLocality: "Komarapalayam",
    addressRegion: "Tamil Nadu",
    postalCode: "638183",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-63803-42299",
    contactType: "customer service",
    areaServed: "IN",
  },
  sameAs: ["https://instagram.com/blackandwhitebridalstudio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} bg-black text-white antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}