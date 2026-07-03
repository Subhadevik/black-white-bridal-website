export default function BookAppointment() {
    return (
        <section className="bg-luxury-alt section-padding border-t border-[rgba(212,175,55,0.1)]">
            <div className="flex justify-center">
                <div className="w-full max-w-4xl px-6 text-center">
                    <p className="section-subtitle mb-6">Book Consultation</p>

                    <h2 className="section-title mb-8">Begin Your Bridal Journey</h2>

                    <div className="gold-divider mb-10" />

                    <div className="flex justify-center mb-12">
                        <p className="muted-text text-lg leading-9 max-w-2xl">
                            Reserve your consultation with Black & White Bridal Studio and
                            discover personalized beauty services, bridal makeovers, and
                            bespoke fashion designing tailored exclusively for you.
                        </p>
                    </div>


                    <a href="https://wa.me/916380342299"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
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
    );
}