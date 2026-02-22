import React from 'react';
import { ShootingStars } from './ui/shooting-stars';

const steps = [
    {
        number: "01",
        title: "Discovery & Blueprint",
        description: "We analyze your existing workflows and technical debt to architect a scalable, AI-first solution.",
    },
    {
        number: "02",
        title: "Rapid Integration",
        description: "Our engineers build and integrate custom automations and platforms with zero disruption to your current operations.",
    },
    {
        number: "03",
        title: "Optimization & Scale",
        description: "Post-launch, we monitor performance metrics and refine AI models to ensure continuous operational dominance.",
    }
];

const Process = () => {
    return (
        <section id="process" className="relative py-24 px-6 bg-black overflow-hidden">
            {/* Background with stars */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_80%)]" />
                <div className="stars absolute inset-0" />
            </div>

            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent1/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2 z-0" />

            <ShootingStars
                starColor="#FFD700"
                trailColor="#00F0FF"
                minSpeed={15}
                maxSpeed={35}
                minDelay={1000}
                maxDelay={3000}
                className="z-0"
            />
            <ShootingStars
                starColor="#ffffff"
                trailColor="#FFD700"
                minSpeed={10}
                maxSpeed={30}
                minDelay={2000}
                maxDelay={4000}
                className="z-0"
            />

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="text-center mb-20">
                    <span className="inline-block mb-4 text-accent1 text-xs font-bold tracking-[0.3em] uppercase">
                        The Process
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tighter">How We Work</h2>
                    <p className="text-white/60 text-lg">An elite process designed for speed and impact.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[40px] left-0 w-full h-[1px] bg-white/10" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group/card"
                            >
                                {/* Active Scanner Line Decoration */}
                                <div className="absolute -top-4 -left-4 -right-4 h-[1px] bg-transparent overflow-hidden opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
                                    <motion.div
                                        className="w-[150px] h-full bg-gradient-to-r from-transparent via-accent1 to-transparent"
                                        animate={{ x: [-100, 500] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 2,
                                            ease: "linear"
                                        }}
                                    />
                                </div>

                                {/* Node/Circle */}
                                <div className="w-20 h-20 rounded-full bg-black border border-white/20 flex items-center justify-center mb-8 relative z-10 group cursor-default shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                    <div className="absolute inset-0 rounded-full bg-accent1/0 group-hover:bg-accent1/20 transition-colors duration-500" />
                                    <span className="text-2xl font-bold font-heading text-white/50 group-hover:text-accent1 transition-colors duration-300">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="relative z-10 p-6 rounded-3xl bg-transparent border border-transparent group-hover/card:bg-white/[0.02] group-hover/card:border-white/5 transition-all duration-500">
                                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-white/60 leading-relaxed font-sans">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Process;
