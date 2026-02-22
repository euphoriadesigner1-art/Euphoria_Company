import React from 'react';
import { Cpu, Zap, Code2, Database, Shield, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <section className="relative py-24 px-6 z-20 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Our Expertise</h2>
                    <p className="text-white/60">Engineered for dominance in the digital age.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent1/50 transition-colors duration-300 cursor-pointer group ${service.colSpan}`}
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:bg-accent1/10 transition-colors duration-300">
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
