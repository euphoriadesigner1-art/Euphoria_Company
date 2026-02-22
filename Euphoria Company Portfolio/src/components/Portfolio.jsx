import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Clock, ShieldCheck, Zap, Database, Globe } from 'lucide-react';

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
    return (
        <section id="portfolio" className="relative py-24 px-6 bg-black overflow-hidden">
            {/* Seamless Edge Glow Transition */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent1/10 blur-[120px] rounded-[100%] pointer-events-none -translate-y-1/2 z-0" />

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <span className="inline-block mb-4 text-accent2 text-xs font-bold tracking-[0.3em] uppercase">
                            Our Portfolio
                        </span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tighter">Featured Work</h2>
                        <p className="text-white/60 max-w-lg text-lg">
                            We don't just build websites; we engineer systems that drive measurable growth and operational efficiency.
                        </p>
                    </div>
                    <a href="#portfolio" className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-medium transition-all active:scale-95 cursor-pointer group">
                        View All Projects
                        <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
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

                <div className="mt-12 w-full md:hidden flex justify-center px-2">
                    <a href="#portfolio" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-medium transition-all active:scale-95 cursor-pointer group">
                        View All Projects
                        <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
