import { useState } from 'react';

const AccordionItem = ({ index, question, intention, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl overflow-hidden border border-slate-200 mb-4 shadow-sm hover:shadow-md transition-shadow">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none"
            >
                <div className="flex items-center space-x-4">
                    <span className="shrink-0 w-8 h-8 flex justify-center items-center rounded-lg bg-indigo-100 text-indigo-600 font-bold text-sm">
                        Q{index + 1}
                    </span>
                    <span className="text-slate-700 font-semibold text-[15px]">{question}</span>
                </div>
                <svg
                    className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="px-5 pb-5 bg-slate-50 border-t border-slate-100">
                    <div className="pt-4 space-y-4">
                        <div>
                            <span className="inline-block px-2.5 py-1 bg-violet-100 text-violet-700 text-xs font-bold rounded-md tracking-wider mb-2">INTENTION</span>
                            <p className="text-sm text-slate-600 leading-relaxed">{intention}</p>
                        </div>
                        <div>
                            <span className="inline-block px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-md tracking-wider mb-2">MODEL ANSWER</span>
                            <p className="text-sm text-slate-700 leading-relaxed">{answer}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccordionItem;
