"use client";

import { useState } from "react";

const faqs = [
    {
        question: "Do you provide bridal makeup?",
        answer:
            "Yes, we specialize in bridal makeup, reception makeup, engagement makeup, and complete bridal styling. Our artists use premium products to ensure your look lasts all day.",
    },
    {
        question: "Do you offer fashion designing?",
        answer:
            "Yes, we provide designer blouses, bridal wear, custom stitching, and bespoke fashion designing services tailored to your measurements and style.",
    },
    {
        question: "How can I book an appointment?",
        answer:
            "You can reach us directly through WhatsApp or Instagram to schedule your consultation. We recommend booking at least 2–4 weeks in advance for bridal services.",
    },
    {
        question: "Do you offer a trial session before the wedding day?",
        answer:
            "Yes, we strongly recommend a trial session for bridal makeup and hairstyling so we can finalize your look together before the big day. Trials can be booked separately during your consultation.",
    },
    {
        question: "How far in advance should I book for my wedding?",
        answer:
            "For bridal makeup and fashion designing, we recommend booking 4–6 weeks in advance, especially during peak wedding season, to ensure your preferred date and enough time for fittings and trials.",
    },
    {
        question: "Do you provide services at home or only at the studio?",
        answer:
            "We primarily operate out of our studio for the best results and access to our full range of equipment, but home service may be available for bridal makeup on request — message us on WhatsApp to check availability.",
    },
    {
        question: "Can you accommodate bridesmaids or family bookings?",
        answer:
            "Yes, we offer group bookings for bridesmaids, mothers, and family members alongside the bride. Let us know your group size in advance so we can plan the timing accordingly.",
    },
    {
        question: "What is your cancellation or rescheduling policy?",
        answer:
            "We understand plans can change. We ask for at least 48 hours' notice to reschedule or cancel an appointment so we can accommodate other clients. Please reach out via WhatsApp as early as possible.",
    },
    {
        question: "How long does custom stitching or fashion designing take?",
        answer:
            "Turnaround time depends on the design and detailing involved, typically ranging from 1–3 weeks for custom stitching and bridal wear. We'll confirm an exact timeline during your consultation.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="faq-section section-padding">
            <div className="flex justify-center">
                <div className="w-full max-w-2xl px-6">

                    <div className="text-center mb-12">
                        <p className="section-subtitle mb-4">Good to Know</p>
                        <h2 className="section-title mb-6">Frequently Asked Questions</h2>
                        <div className="gold-divider" />
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={faq.question}
                                    className={`faq-row ${isOpen ? "faq-row--open" : ""}`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="faq-trigger"
                                    >
                                        <span className="faq-question">{faq.question}</span>
                                        <span className="faq-plus">{isOpen ? "−" : "+"}</span>
                                    </button>

                                    <div
                                        className="faq-panel"
                                        style={{
                                            gridTemplateRows: isOpen ? "1fr" : "0fr",
                                            opacity: isOpen ? 1 : 0,
                                        }}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="faq-answer-text">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}