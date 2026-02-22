import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { ShootingStars } from "@/components/ui/shooting-stars"

interface TestimonialsSectionProps {
    title: React.ReactNode
    description: string
    testimonials: Array<{
        author: TestimonialAuthor
        text: string
        href?: string
    }>
    className?: string
}

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}: TestimonialsSectionProps) {
    return (
        <section id="testimonials" className={cn(
            "bg-black text-white border-t border-white/5",
            "py-24 px-0 overflow-hidden relative",
            className
        )}>
            {/* Background with stars */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.03)_0%,rgba(0,0,0,0)_80%)]" />
                <div className="stars absolute inset-0" />
            </div>

            <ShootingStars
                starColor="#00F0FF"
                trailColor="#FFD700"
                minSpeed={12}
                maxSpeed={32}
                minDelay={1500}
                maxDelay={3500}
                className="z-0"
            />
            <ShootingStars
                starColor="#ffffff"
                trailColor="#00F0FF"
                minSpeed={15}
                maxSpeed={40}
                minDelay={2500}
                maxDelay={4500}
                className="z-0"
            />

            <div className="mx-auto flex w-full max-w-container flex-col items-center gap-16 text-center relative z-10">
                <div className="flex flex-col items-center gap-6 px-6">
                    <span className="inline-block text-accent1 text-xs font-bold tracking-[0.3em] uppercase">
                        Client Success
                    </span>
                    <h2 className="max-w-[800px] text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tighter sm:leading-[1.1]">
                        {title}
                    </h2>
                    <p className="max-w-2xl text-lg text-white/60 font-medium">
                        {description}
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center">
                    <div className="group flex overflow-hidden p-4 gap-8 flex-row">
                        <div className="flex shrink-0 justify-around gap-8 animate-marquee-custom flex-row group-hover:[animation-play-state:paused]">
                            {testimonials.map((testimonial, i) => (
                                <TestimonialCard
                                    key={`set1-${i}`}
                                    {...testimonial}
                                />
                            ))}
                        </div>
                        <div className="flex shrink-0 justify-around gap-8 animate-marquee-custom flex-row group-hover:[animation-play-state:paused]" aria-hidden="true">
                            {testimonials.map((testimonial, i) => (
                                <TestimonialCard
                                    key={`set2-${i}`}
                                    {...testimonial}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[15%] bg-gradient-to-r from-black via-black/80 to-transparent sm:block" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[15%] bg-gradient-to-l from-black via-black/80 to-transparent sm:block" />
                </div>
            </div>
        </section>
    )
}
