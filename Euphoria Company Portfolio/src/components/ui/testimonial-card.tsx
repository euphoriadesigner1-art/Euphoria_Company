import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
    name: string
    handle: string
    avatar: string
}

export interface TestimonialCardProps {
    author: TestimonialAuthor
    text: string
    href?: string
    className?: string
}

export function TestimonialCard({
    author,
    text,
    href,
    className
}: TestimonialCardProps) {
    const Card = href ? 'a' : 'div'

    return (
        <Card
            {...(href ? { href } : {})}
            className={cn(
                "flex flex-col rounded-2xl border border-white/10",
                "bg-white/5",
                "p-6 text-start",
                "hover:bg-white/10 hover:border-accent1/50",
                "w-[320px] shrink-0",
                "transition-colors duration-300 backdrop-blur-sm",
                className
            )}
        >
            <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border border-white/20">
                    <AvatarImage src={author.avatar} alt={author.name} />
                </Avatar>
                <div className="flex flex-col items-start">
                    <h3 className="text-md font-bold text-white tracking-wide leading-none mb-1.5">
                        {author.name}
                    </h3>
                    <p className="text-xs font-medium text-white/50">
                        {author.handle}
                    </p>
                </div>
            </div>
            <p className="mt-6 text-sm md:text-md text-white/80 leading-relaxed font-sans">
                "{text}"
            </p>
        </Card>
    )
}
