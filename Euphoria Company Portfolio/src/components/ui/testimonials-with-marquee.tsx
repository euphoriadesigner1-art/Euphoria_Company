import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

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
            <div className="mx-auto flex w-full max-w-container flex-col items-center gap-16 text-center">
                <div className="flex flex-col items-center gap-6 px-6">
                    <h2 className="max-w-[720px] text-3xl font-bold font-heading tracking-tight sm:text-5xl sm:leading-tight">
                        {title}
                    </h2>
                    <p className="max-w-2xl text-lg text-white/60 font-medium">
                        {description}
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center">
                    <div className="group flex overflow-hidden p-4 gap-8 flex-row">
                        <div className="flex shrink-0 justify-around gap-8 animate-marquee flex-row group-hover:[animation-play-state:paused]">
                            {testimonials.map((testimonial, i) => (
                                <TestimonialCard
                                    key={`set1-${i}`}
                                    {...testimonial}
                                />
                            ))}
                        </div>
                        <div className="flex shrink-0 justify-around gap-8 animate-marquee flex-row group-hover:[animation-play-state:paused]" aria-hidden="true">
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
