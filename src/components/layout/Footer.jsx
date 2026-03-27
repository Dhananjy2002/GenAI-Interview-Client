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
                            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
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
                            {/* Social Icons Placeholder */}
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-all cursor-pointer border border-slate-100">
                                    <span className="sr-only">Social Link</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                    </svg>
                                </div>
                            ))}
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
