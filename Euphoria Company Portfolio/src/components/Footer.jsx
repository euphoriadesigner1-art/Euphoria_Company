import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="relative border-t border-white/10 bg-black pt-24 pb-12 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-accent2/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

                    {/* Brand Col */}
                    <div>
                        <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                            Ready to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-yellow-200">
                                Automate?
                            </span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-md mb-8">
                            Drop us a line to discuss how we can transform your operations with custom AI and web architectures.
                        </p>
                        <a href="mailto:hello@euphoriacompany.com" className="inline-flex items-center gap-2 text-xl font-medium hover:text-accent1 transition-colors cursor-pointer group">
                            hello@euphoriacompany.com
                            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Form Col */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-white/80" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Jane Doe"
                                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent1/50 transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-white/80" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="jane@company.com"
                                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent1/50 transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-white/80" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent1/50 transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-accent1 hover:bg-yellow-400 text-black font-semibold py-4 rounded-xl transition-colors mt-2 cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-white/40">
                    <p>© {new Date().getFullYear()} Euphoria Company. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors cursor-pointer">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors cursor-pointer">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors cursor-pointer">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
