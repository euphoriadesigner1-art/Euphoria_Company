import React from 'react';
import { motion } from 'framer-motion';
import { StaggerTestimonials } from './ui/stagger-testimonials';

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

                    {/* Testimonials Interactive Component */}
                    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto lg:mx-0">
                        <StaggerTestimonials />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
