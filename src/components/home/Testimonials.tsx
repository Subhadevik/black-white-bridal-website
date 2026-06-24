import { FaStar } from "react-icons/fa";

const reviews = [
    {
        quote:
            "Wonderful bridal makeover and excellent service from start to finish.",
        name: "Bridal Client",
    },
    {
        quote:
            "Excellent fashion designing and a perfect fit for my reception outfit.",
        name: "Fashion Client",
    },
    {
        quote:
            "Highly professional team — the whole experience felt premium and personal.",
        name: "Wedding Client",
    },
];

function Stars() {
    return (
        <div className="flex gap-1 gold-text mb-4">
            {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="section-padding bg-luxury-alt">
            <div className="flex justify-center">
                <div className="w-full max-w-2xl px-6 text-center mb-16">
                    <p className="section-subtitle mb-5">Client Love</p>
                    <h2 className="section-title mb-6">What Our Brides Say</h2>
                    <div className="gold-divider mb-6" />
                    <p className="muted-text text-sm">
                        Rated 4.9 / 5 based on client reviews on Google
                    </p>
                </div>
            </div>

            <div className="section-container">
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div key={review.name} className="testimonial-card">
                            <Stars />
                            <p className="muted-text mb-2 leading-8">{review.quote}</p>
                            <p className="testimonial-name gold-text text-sm uppercase tracking-[2px]">
                                {review.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}