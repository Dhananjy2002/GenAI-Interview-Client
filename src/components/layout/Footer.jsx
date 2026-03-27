import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: 'Platform',
            links: [
                { name: 'Dashboard', path: '/' },
                { name: 'My Reports', path: '/reports' },
                { name: 'About Us', path: '/about' },
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Terms & Conditions', path: '/terms' },
                { name: 'Privacy Policy', path: '/privacy' },
            ]
        },
        {
            title: 'Support',
            links: [
                { name: 'Help Center', path: '/help' },
                { name: 'Contact Us', path: '/contact' },
            ]
        }
    ];

    return (
        <footer className="bg-white border-t border-slate-200 pt-16 pb-8 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6 group cursor-default">
                            <div className="group-hover:scale-110 transition-transform duration-300 w-10 h-10 flex items-center justify-center overflow-hidden shrink-0">
                                <img src="/logo.png?v=2" alt="Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xl font-extrabold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
                                Interview Master
                            </span>
                        </div>
                        <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
                            Empowering professionals with AI-driven interview preparation. 
                            Enhance your performance and land your dream job with personalized insights.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons */}
                            <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-all cursor-pointer border border-slate-100 shadow-xs" title="LinkedIn">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-all cursor-pointer border border-slate-100 shadow-xs" title="Twitter (X)">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-all cursor-pointer border border-slate-100 shadow-xs" title="GitHub">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Link Sections */}
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 border-l-4 border-indigo-600 pl-3">
                                {section.title}
                            </h3>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            to={link.path} 
                                            className="text-slate-500 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center group"
                                        >
                                            <span className="w-0 h-0.5 bg-indigo-600 group-hover:w-3 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm font-medium text-slate-400">
                    <p>© {currentYear} Interview Master. All rights reserved.</p>
                    <div className="flex items-center space-x-2">
                        <span>Made with</span>
                        <svg className="w-4 h-4 text-red-400 animate-pulse fill-current" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>for professionals worldwide</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
