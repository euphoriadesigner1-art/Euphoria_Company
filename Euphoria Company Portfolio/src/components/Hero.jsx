import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero_section_v2.png"
                    alt="Euphoria Company AI Architecture"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black pointer-events-none" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent2 text-sm font-medium tracking-wide mb-6">
                        ENTER THE NEXUS
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We Build <br className="hidden md:block" /> The Future
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-sans"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Euphoria Company bridges the gap between imagination and execution.
                    Elite AI development, seamless automation, and premium digital experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button
                        render={<a href="#contact" />}
                        className="group active:scale-95 mx-auto w-fit inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full border-none bg-transparent px-0 py-0 font-normal shadow-none hover:bg-transparent !h-auto !w-auto"
                    >
                        <span className="rounded-full bg-white px-6 py-3 text-sm sm:text-base font-semibold text-black transition-all duration-500 ease-in-out group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-yellow-300 flex items-center justify-center shrink-0">
                            Start Your Project
                        </span>
                        <div className="relative flex h-[44px] w-[44px] sm:h-[48px] sm:w-[48px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white text-black transition-all duration-500 ease-in-out group-hover:bg-yellow-300 border border-transparent">
                            <ArrowUpRight className="absolute h-5 w-5 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                            <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                        </div>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
