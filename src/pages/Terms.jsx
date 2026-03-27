import React from 'react';

const Terms = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-slate-100 overflow-hidden ring-1 ring-black/5">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">Terms and Conditions</h1>
                    <p className="text-slate-500 text-sm mb-12">Last Updated: March 27, 2026</p>

                    <nav className="mb-12 flex flex-wrap gap-x-6 gap-y-4 text-sm font-bold text-indigo-600 border-b border-indigo-50 pb-8">
                        <a href="#acceptance" className="hover:text-indigo-800">1. Acceptance</a>
                        <a href="#services" className="hover:text-indigo-800">2. Services</a>
                        <a href="#accounts" className="hover:text-indigo-800">3. Accounts</a>
                        <a href="#limitations" className="hover:text-indigo-800">4. Limitations</a>
                    </nav>

                    <div className="space-y-12">
                        <section id="acceptance">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">1. Acceptance of Terms</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                By accessing and using the Interview Master platform ("the Service"), you agree to be bound by these Terms and Conditions. 
                                We reserve the right to modify these terms at any time, so please check back regularly.
                            </p>
                        </section>

                        <section id="services">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">2. Description of Services</h2>
                            <p className="text-slate-600 leading-relaxed text-lg mb-4">
                                Interview Master provides an AI-powered interview preparation platform that analyzes resumes 
                                and job descriptions to generate tailored training materials.
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-3 font-medium">
                                <li>The AI output is for guidance only and doesn't guarantee employment results.</li>
                                <li>Services are provided as is, contingent on AI model availability.</li>
                                <li>Users are responsible for the accuracy of uploaded data.</li>
                            </ul>
                        </section>

                        <section id="accounts">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">3. User Accounts</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                You are responsible for maintaining the confidentiality of your account credentials. 
                                Any activity under your account is your sole responsibility. We reserve the right to 
                                suspend accounts that violate our usage policies.
                            </p>
                        </section>

                        <section id="limitations">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">4. Limitations of Liability</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Interview Master shall not be liable for any direct, indirect, or incidental damages resulting 
                                from the use or inability to use the platform. Our AI generation is based on external models 
                                and we do not guarantee 100% accuracy in every analysis.
                            </p>
                        </section>
                    </div>

                    <div className="mt-16 pt-12 border-t border-slate-100 flex items-center gap-4 text-slate-400">
                        <div className="bg-slate-100 p-2 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium italic">For further questions, please contact our support team.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
