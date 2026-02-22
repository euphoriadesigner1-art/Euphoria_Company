import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // TODO: Replace these with your actual IDs from EmailJS
        const SERVICE_ID = 'service_0r4mme8';
        const TEMPLATE_ID = 'template_ma5wy1a';
        const PUBLIC_KEY = 'UW2spK44Q4OkgLtJa';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset(); // Clear form on success
                // Reset status back to idle after 3 seconds
                setTimeout(() => setStatus('idle'), 3000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            });
    };

    return (
        <footer id="contact" className="relative border-t border-white/10 bg-black pt-24 pb-12 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-accent2/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

                    {/* Brand Col */}
                    <div>
                        <span className="inline-block mb-6 text-accent2 text-xs font-bold tracking-[0.3em] uppercase">
                            Initiate Contact
                        </span>
                        <h2 className="text-6xl md:text-8xl font-bold font-heading mb-6 tracking-tighter leading-[1.1]">
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
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-white/80" htmlFor="user_name">Name</label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    required
                                    placeholder="Jane Doe"
                                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent1/50 transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-white/80" htmlFor="user_email">Email</label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    required
                                    placeholder="jane@company.com"
                                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent1/50 transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-white/80" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent1/50 transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`w-full font-semibold py-4 rounded-xl transition-all mt-2 cursor-pointer
                                    ${status === 'sending' ? 'bg-white/20 text-white cursor-not-allowed' :
                                        status === 'success' ? 'bg-green-500 text-white' :
                                            status === 'error' ? 'bg-red-500 text-white' :
                                                'bg-accent1 hover:bg-yellow-400 text-black'
                                    }`}
                            >
                                {status === 'sending' ? 'Sending...' :
                                    status === 'success' ? 'Message Sent!' :
                                        status === 'error' ? 'Failed to Send' :
                                            'Send Message'}
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
