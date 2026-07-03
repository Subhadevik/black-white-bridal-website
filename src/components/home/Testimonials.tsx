import { FaStar } from "react-icons/fa";

const reviews = [
    {
        quote:
            "Wonderful bridal makeover and excellent service from start to finish.",
        name: "Priya S.",
        role: "Bridal Client",
    },
    {
        quote:
            "Excellent fashion designing and a perfect fit for my reception outfit.",
        name: "Ananya R.",
        role: "Fashion Client",
    },
    {
        quote:
            "Highly professional team — the whole experience felt premium and personal.",
        name: "Meera K.",
        role: "Wedding Client",
    },
    {
        quote:
            "They understood exactly the look I wanted and made me feel so confident on my wedding day.",
        name: "Divya M.",
        role: "Bridal Client",
    },
    {
        quote:
            "The blouse fitting was flawless and the embroidery work exceeded what I imagined.",
        name: "Kavya N.",
        role: "Fashion Client",
    },
    {
        quote:
            "From the trial to the final look, everything was on time and stress-free. Highly recommend.",
        name: "Sneha T.",
        role: "Bridal Client",
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
                        <div key={review.quote} className="testimonial-card">
                            <Stars />
                            <p className="muted-text mb-2 leading-8">{review.quote}</p>
                            <p className="testimonial-name gold-text text-sm uppercase tracking-[2px]">
                                {review.name}
                            </p>
                            <p className="muted-text text-xs uppercase tracking-[1.5px] opacity-70">
                                {review.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}