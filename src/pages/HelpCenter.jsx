import React, { useState } from 'react';

const HelpCenter = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const faqs = [
        {
            category: 'Getting Started',
            questions: [
                { q: "How do I upload my resume?", a: "You can upload your resume directly on the dashboard. Simply click 'Upload resume' or drag and drop your PDF file into the designated area." },
                { q: "Is Interview Master free to use?", a: "We offer both free and premium tiers. The free tier allows you to generate basic reports, while the premium tier offers in-depth analysis and unlimited technical question repositories." }
            ]
        },
        {
            category: 'Report Generation',
            questions: [
                { q: "How long does it take to generate a report?", a: "Most reports are generated within 30-60 seconds depending on the length of your resume and the complexity of the job description." },
                { q: "Can I regenerate a report for the same job?", a: "Yes, you can. If you update your resume, you can return to the report list and select 'Regenerate' to get updated insights." }
            ]
        },
        {
            category: 'Account & Billing',
            questions: [
                { q: "How do I reset my password?", a: "Simply go to the login page and click 'Forgot Password'. Follow the link sent to your registered email to set a new password." },
                { q: "Can I download my reports as PDF?", a: "Currently, you can download your optimized resume as a PDF. We are working on adding full report PDF downloads soon." }
            ]
        }
    ];

    const filteredFaqs = faqs.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
            q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
            q.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.questions.length > 0);

    return (
        <div className="min-h-screen bg-slate-50 font-sans py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-6">
                        Help Center
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium mb-10">
                        Search or browse our FAQs to find answers to common questions.
                    </p>

                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="How do I..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg font-medium text-slate-800"
                        />
                    </div>
                </div>

                <div className="space-y-12">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((category) => (
                            <div key={category.category} className="space-y-6">
                                <h2 className="text-2xl font-bold text-slate-900 border-b border-indigo-100 pb-3">
                                    {category.category}
                                </h2>
                                <div className="grid grid-cols-1 gap-6">
                                    {category.questions.map((faq, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                            <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-3">
                                                <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm shrink-0 font-extrabold italic">Q</span>
                                                {faq.q}
                                            </h3>
                                            <div className="flex items-start gap-3">
                                                <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm shrink-0 font-extrabold italic">A</span>
                                                <p className="text-slate-600 leading-relaxed font-medium pt-0.5">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                             <p className="text-slate-500 font-bold text-xl">No results found for "{searchQuery}"</p>
                             <button onClick={() => setSearchQuery('')} className="mt-4 text-indigo-600 font-bold hover:underline">Clear search and browse all</button>
                        </div>
                    )}
                </div>

                <div className="mt-20 p-10 bg-indigo-600 rounded-3xl shadow-xl shadow-indigo-100 text-center text-white">
                    <h2 className="text-3xl font-extrabold mb-4 pb-2">Still need help?</h2>
                    <p className="text-indigo-100 text-lg mb-8 max-w-xl mx-auto font-medium">
                        Can't find the answer you're looking for? Our support team is ready to assist you.
                    </p>
                    <a href="/contact" className="inline-block px-8 py-3.5 bg-white text-indigo-600 rounded-xl font-extrabold text-lg shadow-lg hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all">
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
