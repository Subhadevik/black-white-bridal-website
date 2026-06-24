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
                    >
                        Book via WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}