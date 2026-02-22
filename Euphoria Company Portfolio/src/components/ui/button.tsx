"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border font-medium text-base outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 sm:text-sm [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:-mx-0.5 [&_svg]:shrink-0",
    {
        defaultVariants: {
            size: "default",
            variant: "default",
        },
        variants: {
            size: {
                default: "h-9 px-3 sm:h-8",
                icon: "size-9 sm:size-8",
                lg: "h-10 px-4 sm:h-9",
                sm: "h-8 gap-1.5 px-3 sm:h-7",
                xl: "h-11 px-6 text-lg sm:h-10 sm:text-base",
            },
            variant: {
                default: "border-transparent bg-white text-black hover:bg-white/90 shadow-sm",
                destructive: "border-transparent bg-red-500 text-white hover:bg-red-600 shadow-sm",
                ghost: "border-transparent bg-transparent hover:bg-white/10 text-white",
                link: "border-transparent bg-transparent underline-offset-4 hover:underline text-white",
                outline: "border-white/20 bg-transparent hover:bg-white/10 text-white",
                secondary: "border-transparent bg-accent1 text-black hover:bg-yellow-400",
            },
        },
    },
);

interface ButtonProps extends useRender.ComponentProps<"button"> {
    variant?: VariantProps<typeof buttonVariants>["variant"];
    size?: VariantProps<typeof buttonVariants>["size"];
}

function Button({ className, variant, size, render, ...props }: ButtonProps) {
    const typeValue: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] =
        render ? undefined : "button";

    const defaultProps = {
        className: cn(buttonVariants({ className, size, variant })),
        "data-slot": "button",
        type: typeValue,
    };

    return useRender({
        defaultTagName: "button",
        props: mergeProps<"button">(defaultProps, props),
        render,
    });
}

export { Button, buttonVariants };
