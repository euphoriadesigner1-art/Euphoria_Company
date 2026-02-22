"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

interface GalleryHoverCarouselItem {
    id: string;
    title: string;
    summary: string;
    url: string;
    image: string;
    category?: string;
}

export default function GalleryHoverCarousel({
    heading = "Featured Projects",
    kicker = "Our Portfolio",
    description = "Explore our collection of innovative solutions and cutting-edge technologies designed to transform your business.",
    items = [],
}: {
    heading?: string;
    kicker?: string;
    description?: string;
    items?: GalleryHoverCarouselItem[];
}) {
    const [index, setIndex] = useState(0);
    const itemsCount = items ? items.length : 0;

    return (
        <section id="portfolio" className="relative py-24 px-6 bg-black overflow-hidden">
            {/* Seamless Edge Glow Transition */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent1/10 blur-[120px] rounded-[100%] pointer-events-none -translate-y-1/2 z-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
                    <div className="max-w-2xl">
                        <span className="inline-block mb-4 text-accent2 text-xs font-bold tracking-[0.3em] uppercase">
                            {kicker}
                        </span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tighter text-white">
                            {heading}
                        </h2>
                        <p className="text-white/60 max-w-lg text-lg">
                            {description}
                        </p>
                    </div>
                    <div className="flex gap-2 mt-8 md:mt-0">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setIndex(Math.max(0, index - 1))}
                            disabled={index === 0}
                            className="h-12 w-12 rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setIndex(Math.min(itemsCount - 1, index + 1))}
                            disabled={index >= itemsCount - 1}
                            className="h-12 w-12 rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div className="w-full max-w-full">
                    <Carousel
                        index={index}
                        onIndexChange={setIndex}
                        className="relative w-full max-w-full"
                    >
                        <CarouselContent className="hide-scrollbar w-full max-w-full md:-ml-4">
                            {items.map((item) => (
                                <CarouselItem key={item.id} className="pl-4 md:max-w-[400px]">
                                    <a href={item.url} className="group block relative w-full h-[350px] md:h-[450px]">
                                        <Card className="overflow-hidden h-full w-full rounded-3xl bg-white/5 border-white/10 border-0">
                                            {/* Image */}
                                            <div className="relative h-full w-full transition-all duration-500 group-hover:h-3/4">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                                />
                                                {/* Fade overlay at bottom */}
                                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-500" />
                                                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent opacity-100 z-20" />
                                            </div>

                                            {/* Text Section (Static position inside image normally, slides up on hover) */}
                                            <div className="absolute bottom-0 left-0 w-full p-6 transition-all duration-500 group-hover:h-1/4 group-hover:flex flex-col justify-center bg-black/95 backdrop-blur-sm z-30">
                                                <p className="text-accent2 text-sm font-medium tracking-wide mb-2 group-hover:hidden md:group-hover:block transition-all duration-300">
                                                    {item.category || "Case Study"}
                                                </p>
                                                <h3 className="text-2xl font-bold font-heading mb-2 text-white group-hover:text-accent1 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-white/60 text-sm md:text-base line-clamp-2 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-2 transition-all duration-500">
                                                    {item.summary}
                                                </p>

                                                {/* Corner Arrow Icon */}
                                                <div className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 group-hover:-rotate-45 transition-all duration-500 text-white group-hover:text-accent1 hidden md:flex">
                                                    <ArrowRight className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </Card>
                                    </a>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
