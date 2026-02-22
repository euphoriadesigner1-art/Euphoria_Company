import React from 'react';
import { TestimonialsSection } from './ui/testimonials-with-marquee';

const testimonials = [
    {
        author: {
            name: "Sarah Jenkins",
            handle: "COO, Nexus FinTech",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
        },
        text: "Euphoria completely rewired our backend operations. By integrating custom LLMs, we cut our manual data processing time to zero. Absolute game-changers."
    },
    {
        author: {
            name: "Alex Mercer",
            handle: "Founder, www.viralyn.app",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        text: "Euphoria Company delivered an incredibly secure and high-performance architecture for our platform. They audited our systems, eliminated critical vulnerabilities, and built a flawless, scalable foundation for our growth."
    },
    {
        author: {
            name: "David Chen",
            handle: "Director of Ops, Automata",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        text: "Their process automation pipelines are bulletproof. We scaled our operations 300% without adding a single headcount to the administrative team."
    },
    {
        author: {
            name: "Elena Rodriguez",
            handle: "VP of CX, CloudScape",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
        },
        text: "The AI integrations they built for our customer support have increased our resolution speed by 40%. The ROI was visible in the first month."
    },
    {
        author: {
            name: "Marcus Sterling",
            handle: "CTO, Vanguard Dynamics",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
        },
        text: "We needed a data architecture that could handle millions of real-time events. Euphoria delivered a solution that not only scales effortlessly but looks stunning."
    },
    {
        author: {
            name: "Aisha Patel",
            handle: "Head of Product, SynthAI",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
        },
        text: "The premium web dev experience they provide is unmatched. They perfectly captured our brand's sleek, futuristic identity while ensuring lightning-fast load times."
    }
];

const Testimonials = () => {
    return (
        <TestimonialsSection
            title={<>Don't just take <br className="hidden sm:block" /><span className="text-accent2">our word for it.</span></>}
            description="We partner with ambitious companies to build scalable, AI-driven futures. Here's what they have to say."
            testimonials={testimonials}
        />
    );
};

export default Testimonials;
