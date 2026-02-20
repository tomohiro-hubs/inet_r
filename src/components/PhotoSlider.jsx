import React from 'react';

const slideImages = Array.from({ length: 8 }, (_, i) => `${import.meta.env.BASE_URL}slide${i + 1}.jpg`);

export default function PhotoSlider({ className = '' }) {
    return (
        <section className={`overflow-hidden ${className}`}>
            <div className="flex w-max animate-loop-scroll hover:[animation-play-state:paused]">
                {[0, 1].map((set) => (
                    <div key={set} className="flex shrink-0 justify-start gap-8 px-4" aria-hidden={set === 1 ? 'true' : undefined}>
                        {slideImages.map((src, i) => (
                            <img key={i} src={src} className="h-48 md:h-64 aspect-[3/2] w-auto rounded-xl object-cover shadow-md flex-shrink-0" alt="施設風景" />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
