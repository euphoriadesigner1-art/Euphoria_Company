import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background AI Core Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    className="w-[600px] h-[600px] bg-accent2/20 rounded-full blur-[100px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="w-[400px] h-[400px] bg-accent1/20 rounded-full blur-[80px] absolute"
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
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
                        className="group active:scale-95 mx-auto flex cursor-pointer items-center justify-center gap-1.5 rounded-full border-none bg-transparent px-0 py-1.5 font-normal shadow-none hover:bg-transparent"
                    >
                        <span className="rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition-all duration-500 ease-in-out group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-yellow-300 w-full h-full flex items-center justify-center">
                            Start Your Project
                        </span>
                        <div className="relative flex h-[48px] w-[48px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white text-black transition-all duration-500 ease-in-out group-hover:bg-yellow-300">
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
