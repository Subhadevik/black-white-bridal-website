import Image from "next/image";

const socialLinks = [
  { href: "https://wa.me/916380342299", label: "WhatsApp" },
  { href: "https://instagram.com/blackandwhitebridalstudio", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-luxury border-t border-[rgba(212,175,55,0.15)] mt-24">
      <div className="container-custom py-16">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl text-center">

            <div className="flex justify-center mb-6">
              <Image
                src="/images/logo.png"
                alt="Black & White Bridal Studio"
                width={80}
                height={80}
              />
            </div>

            <p className="section-subtitle mb-3">Luxury Beauty & Fashion</p>

            <h2 className="text-white text-3xl md:text-4xl mb-4">
              Black & White Bridal Studio
            </h2>

            <p className="muted-text leading-8 mb-8">
              A destination for bridal beauty, luxury makeovers, fashion
              designing, and unforgettable wedding experiences.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              {socialLinks.map((link) => {
                const href = link.href;
                const label = link.label;
                const key = label;
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#d4af37] transition-colors"
                  >
                    {label}
                  </a>
                );
              })}
            </div>

            <div className="gold-divider mb-8" />

            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Black & White Bridal Studio. All Rights Reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}