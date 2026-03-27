import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-100 ring-1 ring-slate-100">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">Privacy Policy</h1>
                    <p className="text-slate-400 text-sm mb-12">Effective Date: March 27, 2026</p>

                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-12 rounded-r-2xl">
                        <p className="text-indigo-800 font-bold text-lg">Your Privacy is Our Priority</p>
                        <p className="text-indigo-600 font-medium">We treat your professional information with the utmost security and confidentiality.</p>
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">1. Data Collection</h2>
                            <p className="text-slate-600 leading-relaxed text-lg mb-4">
                                In order to provide our services, we collect information that is explicitly provided by you during 
                                resume uploads and profile creation.
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-3 font-medium">
                                <li>Account information (email, username, password hashes).</li>
                                <li>Professional data (resume content, job descriptions).</li>
                                <li>Technical logs (IP addresses, browser type, usage behavior).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">2. Use of Information</h2>
                            <p className="text-slate-600 leading-relaxed text-lg mb-4">
                                We use your information strictly to provide and improve our services.
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 space-y-3 font-medium">
                                <li>Generating tailored interview preparation materials.</li>
                                <li>Personalizing your user experience.</li>
                                <li>Providing support and responding to user inquiries.</li>
                                <li>We do not sell your personal data to third parties.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">3. Data Security</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                We implement state-of-the-art security measures to protect your information. 
                                Your uploaded data is stored securely and is only accessible by authorized systems 
                                to generate reports. However, no electronic transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 tracking-tight text-red-600">4. Your Rights</h2>
                            <p className="text-slate-600 leading-relaxed text-lg mb-4">You have several rights regarding your professional data:</p>
                            <ul className="flex flex-wrap gap-4 pt-4 font-bold text-sm">
                                <li className="bg-slate-100 px-4 py-2 rounded-lg text-slate-700">Right to Access Data</li>
                                <li className="bg-slate-100 px-4 py-2 rounded-lg text-slate-700">Right to Delete Account</li>
                                <li className="bg-slate-100 px-4 py-2 rounded-lg text-slate-700">Right to Correct Errors</li>
                            </ul>
                        </section>
                    </div>

                    <div className="mt-16 pt-12 border-t border-slate-100 text-center">
                        <p className="text-slate-500 font-medium italic">Your confidence and trust is what drives Interview Master forward.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
