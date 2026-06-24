"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
    return (
        <a href="https://wa.me/916380342299"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#1ea952] border-2 border-[rgba(212,175,55,0.6)] shadow-lg transition-transform duration-300 hover:scale-110"
        >
            <FaWhatsapp size={26} className="text-white" />
        </a>
    );
}