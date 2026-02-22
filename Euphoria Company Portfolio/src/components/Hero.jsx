import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { SplineScene } from './ui/spline-scene';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Spline 3D Background */}
            <div className="absolute inset-0 z-0 bg-black">
                <SplineScene
                    scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                    className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black pointer-events-none" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-16 text-center">
                <div className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 py-16 md:p-24 shadow-2xl relative overflow-hidden">
                    {/* Inner subtle glow for the glass card */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-accent1/30 to-transparent" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block mb-8 text-accent1 text-xs font-bold tracking-[0.3em] uppercase">
                            Enter the Nexus
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 leading-[1.1]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We Build <br className="hidden md:block" /> The Future
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-sans tracking-wide leading-relaxed"
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
                            <span className="rounded-full bg-white px-8 py-4 text-sm sm:text-base font-semibold text-black transition-all duration-500 ease-in-out group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-yellow-300 flex items-center justify-center shrink-0">
                                Start Your Project
                            </span>
                            <div className="relative flex h-[52px] w-[52px] sm:h-[56px] sm:w-[56px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white text-black transition-all duration-500 ease-in-out group-hover:bg-yellow-300 border border-transparent">
                                <ArrowUpRight className="absolute h-6 w-6 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:-translate-y-10" />
                                <ArrowUpRight className="absolute h-6 w-6 -translate-x-10 translate-y-10 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
                            </div>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
