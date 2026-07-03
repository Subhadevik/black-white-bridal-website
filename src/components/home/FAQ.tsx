"use client";

import { useState } from "react";
import { faqs } from "./faqData";

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