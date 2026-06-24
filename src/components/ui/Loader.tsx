"use client";

import Image from "next/image";

export default function Loader() {
    return (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-[9999]">

            <Image
                src="/images/logo.png"
                alt="logo"
                width={180}
                height={180}
                className="animate-pulse"
            />

        </div>
    );
}