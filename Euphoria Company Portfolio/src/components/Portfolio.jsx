import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Clock, ShieldCheck, Zap, Database, Globe } from 'lucide-react';

import GalleryHoverCarousel from './ui/gallery-hover-carousel';
const projects = [
    {
        title: "FinTech Data Pipeline",
        category: "Data Architecture & Automation",
        metrics: "Reduced processing time by 84%",
        icon: <Clock className="w-5 h-5 text-accent1" />,
        image: "/fintech.png",
    },
    {
        title: "E-Commerce AI Chatbot",
        category: "AI Integration",
        metrics: "Increased conversion rate by 22%",
        icon: <TrendingUp className="w-5 h-5 text-accent2" />,
        image: "/ecommerce.png",
    },
    {
        title: "Healthcare Portal Redesign",
        category: "Premium Web Dev",
        metrics: "100% HIPAA compliant infrastructure",
        icon: <ShieldCheck className="w-5 h-5 text-white" />,
        image: "/health.png",
    },
    {
        title: "Logistics Routing Engine",
        category: "AI Integration",
        metrics: "Decreased fuel costs by 18%",
        icon: <Zap className="w-5 h-5 text-accent1" />,
        image: "/logistics.png",
    },
    {
        title: "Cloud Infrastructure Audit",
        category: "Data Architecture & Automation",
        metrics: "Zero critical exploits found post-launch",
        icon: <Database className="w-5 h-5 text-accent2" />,
        image: "/cloud_audit.png",
    },
    {
        title: "SaaS Platform Migration",
        category: "Premium Web Dev",
        metrics: "Handled 1M+ concurrent users",
        icon: <Globe className="w-5 h-5 text-white" />,
        image: "/saas.png",
    }
];

const Portfolio = () => {
    // Transform existing projects array into the format expected by the Carousel
    const transformedProjects = projects.map((p, i) => ({
        id: `project-${i}`,
        title: p.title,
        summary: p.metrics,
        category: p.category,
        url: "#portfolio",
        image: p.image
    }));

    return (
        <GalleryHoverCarousel
            heading="Featured Work"
            kicker="Our Portfolio"
            description="We don't just build websites; we engineer systems that drive measurable growth and operational efficiency."
            items={transformedProjects}
        />
    );
};

export default Portfolio;
