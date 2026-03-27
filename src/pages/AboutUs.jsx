import React from 'react';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="h-48 bg-indigo-600 flex items-center justify-center">
                        <h1 className="text-4xl font-extrabold text-white tracking-tight">About Interview Master</h1>
                    </div>
                    <div className="p-8 sm:p-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4 items-center flex gap-2">
                                <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg">💡</span>
                                Our Mission
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                At Interview Master, we believe that everyone deserves the chance to land their dream job. 
                                Our mission is to bridge the gap between talented individuals and their professional goals 
                                by leveraging the power of Artificial Intelligence to provide personalized, actionable interview preparation.
                            </p>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 transition-hover hover:border-indigo-200">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">What We Do</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We analyze job descriptions and resumes to identify key skill gaps and generate 
                                    realistic interview questions, helping you prepare for technical and behavioral assessments with confidence.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 transition-hover hover:border-indigo-200">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">Why It Works</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    By using state-of-the-art AI models, we provide feedback that is specific to your background 
                                    and the exact role you're applying for, saving you hours of manual research.
                                </p>
                            </div>
                        </section>

                        <section className="text-center pt-8 border-t border-slate-100">
                            <p className="text-slate-500 italic font-medium">
                                "Helping thousands of professionals navigate their career paths since 2024."
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
