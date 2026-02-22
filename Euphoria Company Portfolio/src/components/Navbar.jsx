import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
            <div className="flex items-center justify-between px-6 py-4 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">

                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent1 to-yellow-200 flex items-center justify-center">
                        <span className="text-black font-bold font-heading text-lg">E</span>
                    </div>
                    <span className="text-xl font-bold font-heading tracking-wide">Euphoria</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {['Services', 'Portfolio', 'Process', 'Testimonials'].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* CTA & Mobile Menu */}
                <div className="flex items-center gap-4">
                    <button className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-medium transition-all cursor-pointer">
                        Contact Us
                    </button>
                    <button className="md:hidden p-2 text-white/70 hover:text-white cursor-pointer">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
