import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Code2, Database, Shield, Globe } from 'lucide-react';
import { BeamsBackground } from './ui/beams-background';

const services = [
    {
        title: "AI Integration",
        description: "Embedding cutting-edge LLMs and custom machine learning models directly into your workflows.",
        icon: <Cpu className="w-8 h-8 text-accent2" />,
        colSpan: "md:col-span-2"
    },
    {
        title: "Process Automation",
        description: "Eliminating manual tasks with bulletproof, scalable automation pipelines.",
        icon: <Zap className="w-8 h-8 text-accent1" />,
        colSpan: "col-span-1"
    },
    {
        title: "Premium Web Dev",
        description: "High-performance, visually stunning architectures built for scale and conversion.",
        icon: <Code2 className="w-8 h-8 text-white/80" />,
        colSpan: "col-span-1"
    },
    {
        title: "Data Architecture",
        description: "Structuring chaotic data into accessible, secure, and actionable intelligence hubs.",
        icon: <Database className="w-8 h-8 text-white/80" />,
        colSpan: "md:col-span-2"
    }
];

const Services = () => {
    return (
        <section id="services" className="relative py-24 px-6 z-20 bg-black overflow-hidden">
            {/* Seamless Edge Glow Transition */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent2/20 to-transparent z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent2/5 blur-[120px] rounded-[100%] pointer-events-none -translate-y-1/2 z-0" />

            {/* Beams Background Overlay */}
            <BeamsBackground intensity="medium" className="opacity-60" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block mb-4 text-accent2 text-xs font-bold tracking-[0.3em] uppercase">
                        Capabilities
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tighter">Our Expertise</h2>
                    <p className="text-white/60 text-lg">Engineered for dominance in the digital age.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent1/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)] transition-all duration-300 cursor-pointer group ${service.colSpan}`}
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:bg-accent1/10 group-hover:scale-110 transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-white/60 leading-relaxed font-sans cursor-text">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
