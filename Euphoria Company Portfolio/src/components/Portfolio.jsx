import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const projects = [
    {
        title: "FinTech Data Pipeline",
        category: "Data Architecture & Automation",
        metrics: "Reduced processing time by 84%",
        icon: <Clock className="w-5 h-5 text-accent1" />,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "E-Commerce AI Chatbot",
        category: "AI Integration",
        metrics: "Increased conversion rate by 22%",
        icon: <TrendingUp className="w-5 h-5 text-accent2" />,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Healthcare Portal Redesign",
        category: "Premium Web Dev",
        metrics: "100% HIPAA compliant infrastructure",
        icon: <ShieldCheck className="w-5 h-5 text-white" />,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="relative py-24 px-6 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Featured Work</h2>
                        <p className="text-white/60 max-w-lg">
                            We don't just build websites; we engineer systems that drive measurable growth and operational efficiency.
                        </p>
                    </div>
                    <button className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-medium transition-colors cursor-pointer group">
                        View All Projects
                        <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-500" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Content Overlay */}
                            <div className="relative p-6 z-20 bg-gradient-to-t from-black via-black/90 to-transparent -mt-20 pt-20">
                                <p className="text-accent2 text-sm font-medium tracking-wide mb-2">
                                    {project.category}
                                </p>
                                <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-accent1 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Metric Badge */}
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 border border-white/5 backdrop-blur-md">
                                    {project.icon}
                                    <span className="text-sm font-medium text-white/90">{project.metrics}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-medium transition-colors cursor-pointer group">
                        View All Projects
                        <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
