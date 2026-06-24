"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">

        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <Image
            src="/images/logo.png"
            alt="Black & White Bridal Studio"
            width={40}
            height={40}
            className="navbar-logo-img"
          />
          <div className="navbar-logo-text">
            <span className="navbar-logo-name">Black & White</span>
            <span className="navbar-logo-sub">Bridal Studio</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </Link>
          ))}
          
          <a  href="https://wa.me/916380342299"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-book"
          >
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="navbar-toggle"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="navbar-drawer">
          <div className="navbar-drawer-inner">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="navbar-drawer-link"
              >
                {link.label}
              </Link>
            ))}
            
            <a  href="https://wa.me/916380342299"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-book navbar-book--mobile"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}