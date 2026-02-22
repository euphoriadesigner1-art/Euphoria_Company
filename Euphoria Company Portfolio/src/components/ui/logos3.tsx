"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/embla-carousel";

interface Logo {
    id: string;
    description: string;
    image: string;
    className?: string;
}

interface Logos3Props {
    heading?: string;
    logos?: Logo[];
    className?: string;
}

const Logos3 = ({
    heading = "Trusted by these companies",
    logos = [
        {
            id: "logo-1",
            description: "Astro",
            image: "https://www.shadcnblocks.com/images/block/logos/astro.svg",
            className: "h-7 w-auto",
        },
        {
            id: "logo-2",
            description: "Figma",
            image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
            className: "h-7 w-auto",
        },
        {
            id: "logo-3",
            description: "Next.js",
            image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
            className: "h-7 w-auto",
        },
        {
            id: "logo-4",
            description: "React",
            image: "https://www.shadcnblocks.com/images/block/logos/react.png",
            className: "h-7 w-auto hover:grayscale-0",
        },
        {
            id: "logo-5",
            description: "shadcn/ui",
            image: "https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg",
            className: "h-7 w-auto",
        },
        {
            id: "logo-6",
            description: "Supabase",
            image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
            className: "h-7 w-auto",
        },
        {
            id: "logo-7",
            description: "Tailwind CSS",
            image: "https://www.shadcnblocks.com/images/block/logos/tailwind.svg",
            className: "h-4 w-auto",
        },
        {
            id: "logo-8",
            description: "Vercel",
            image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
            className: "h-7 w-auto",
        },
    ],
    className,
}: Logos3Props) => {
    return (
        <section className={`py-12 md:py-24 ${className}`}>
            <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
                <span className="inline-block mb-4 text-accent2 text-xs font-bold tracking-[0.3em] uppercase">
                    Our Stack
                </span>
                <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tighter text-white">
                    {heading}
                </h2>
            </div>
            <div className="pt-10 md:pt-16 lg:pt-20">
                <div className="relative mx-auto flex items-center justify-center lg:max-w-7xl px-4 md:px-0">
                    <Carousel
                        opts={{ loop: true }}
                        plugins={[AutoScroll({ playOnInit: true })]}
                        className="w-full"
                    >
                        <CarouselContent className="ml-0 flex items-center">
                            {logos.map((logo) => (
                                <CarouselItem
                                    key={logo.id}
                                    className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                                >
                                    <div className="mx-6 md:mx-10 flex shrink-0 items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 invert">
                                        <img
                                            src={logo.image}
                                            alt={logo.description}
                                            className={logo.className}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export { Logos3 };
