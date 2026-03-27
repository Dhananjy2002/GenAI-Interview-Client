import React, { useState } from 'react';
import { useInterview } from '../hooks/useInterview';
import { toast } from 'react-toastify';

const DownloadResume = ({ reportId }) => {
    const { downloadResume } = useInterview();
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        if (!reportId) return;
        setIsDownloading(true);
        try {
            await downloadResume(reportId);
            toast.success("Resume PDF downloaded successfully!");
        } catch (err) {
            console.error(err);
            toast.error("Failed to generate resume PDF. Please try again.");
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 overflow-hidden relative group">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 transition-all group-hover:bg-indigo-100" />
            
            <div className="relative">
                <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4">Export</p>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Tailored Resume</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    Download an AI-optimized resume specifically tailored for this job description.
                </p>
                
                <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all active:scale-[0.98] ${
                        isDownloading 
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-100'
                    }`}
                >
                    {isDownloading ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Generating...</span>
                        </>
                    ) : (
                        <>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Download PDF</span>
                        </>
                    )}
                </button>
                
                <p className="mt-3 text-[10px] text-center text-slate-400 font-medium italic">
                    Powered by Puppeteer & Gemini 2.5
                </p>
            </div>
        </div>
    );
};

export default DownloadResume;
