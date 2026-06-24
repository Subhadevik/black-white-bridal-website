"use client";

export default function GoldParticles() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {[...Array(25)].map((_, i) => (
                <span
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </div>
    );
}