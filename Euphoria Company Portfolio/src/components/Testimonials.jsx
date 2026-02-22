import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Euphoria completely rewired our backend operations. By integrating custom LLMs, we cut our manual data processing time to zero. Absolute game-changers.",
        author: "Sarah Jenkins",
        role: "COO, Nexus FinTech",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
        quote: "Euphoria Company delivered an incredibly secure and high-performance architecture for our platform. They audited our systems, eliminated critical vulnerabilities, and built a flawless, scalable foundation for our growth.",
        author: "Alex Mercer",
        role: "Founder, www.viralyn.app",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 px-6 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Header Area */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                                Don't just take <br />
                                <span className="text-accent2">our word for it.</span>
                            </h2>
                            <p className="text-white/60 text-lg max-w-md">
                                We partner with ambitious companies to build scalable, AI-driven futures. Here is what they have to say.
                            </p>
                        </motion.div>
                    </div>

                    {/* Testimonials List */}
                    <div className="flex flex-col gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                                        <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white tracking-wide">{testimonial.author}</h4>
                                        <p className="text-sm font-medium text-white/50">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
