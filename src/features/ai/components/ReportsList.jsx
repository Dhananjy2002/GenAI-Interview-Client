import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getAllReports } from '../services/interview.api';
import { toast } from 'react-toastify';
import { useInterview } from '../hooks/useInterview';

const ScoreBadge = ({ score }) => {
    const color =
        score >= 75 ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
            score >= 50 ? 'bg-amber-100 text-amber-700 border-amber-200' :
                'bg-red-100 text-red-700 border-red-200';
    return (
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${color}`}>
            {score}% match
        </span>
    );
};

const ActionTooltip = ({ text, children }) => (
    <div className="group/tooltip relative flex items-center">
        {children}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block z-50">
            <div className="bg-slate-800 text-white text-[10px] whitespace-nowrap px-2 py-1 rounded shadow-lg font-bold">
                {text}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-slate-800"></div>
            </div>
        </div>
    </div>
);

const ReportsList = () => {
    const navigate = useNavigate();
    const [reports, setReports] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { downloadResume } = useInterview();
    const [downloadingId, setDownloadingId] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await getAllReports();
                setReports(data.interviewReports || []);
            } catch (err) {
                const errorMsg = err.response?.data?.message || "Failed to load reports. Please try again.";
                setError(errorMsg);
                toast.error(errorMsg);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    const handleOpen = (report) => navigate(`/report/${report._id}`);

    const handleDownload = async (e, id) => {
        e.stopPropagation();
        setDownloadingId(id);
        try {
            await downloadResume(id);
            toast.success("Resume PDF downloaded!");
        } catch (err) {
            toast.error("Failed to download PDF.");
        } finally {
            setDownloadingId(null);
        }
    };

    const handleGenerateAgain = (e, report) => {
        e.stopPropagation();
        navigate("/", {
            state: {
                jobDescription: report.jobDescription,
                selfDescription: report.selfDescription,
                reportId: report._id
            }
        });
        toast.info("Form pre-filled with existing report data! Just upload a resume to start.");
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-8">
            {/* Header / Nav removed and moved to AppLayout */}

            {/* Loading */}
            {isLoading && (
                <div className="flex flex-col items-center justify-center py-32 space-y-4">
                    <svg className="animate-spin h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <p className="text-slate-400 text-sm font-medium">Loading your reports...</p>
                </div>
            )}

            {/* Error */}
            {error && !isLoading && (
                <div className="flex flex-col items-center justify-center py-32 space-y-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                        <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className="text-red-600 font-semibold">{error}</p>
                    <button onClick={() => window.location.reload()} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-slate-200 transition border border-slate-200">Retry</button>
                </div>
            )}

            {/* Empty */}
            {!isLoading && !error && reports.length === 0 && (
                <div className="flex flex-col items-center justify-center py-32 space-y-5 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-indigo-100 flex items-center justify-center border border-indigo-200">
                        <svg className="w-10 h-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">No reports yet</h3>
                        <p className="text-slate-500 text-sm max-w-sm">Generate your first interview report by uploading your resume and a job description.</p>
                    </div>
                    <button onClick={() => navigate('/')} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition shadow-md shadow-indigo-200">
                        Generate Report ✨
                    </button>
                </div>
            )}

            {/* Reports list */}
            {!isLoading && !error && reports.length > 0 && (
                <>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">All Reports</h2>
                            <p className="text-slate-500 text-sm mt-1">{reports.length} report{reports.length !== 1 ? 's' : ''} generated</p>
                        </div>
                        <button
                            onClick={() => navigate('/')}
                            className="inline-flex items-center px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition shadow-md shadow-indigo-200 self-start sm:self-auto"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            New Report
                        </button>
                    </div>

                    <div className="space-y-4">
                        {reports.map((report, idx) => (
                            <button
                                key={report._id || idx}
                                onClick={() => handleOpen(report)}
                                className="w-full text-left bg-white hover:bg-slate-50 border border-slate-200 hover:border-indigo-300 rounded-2xl p-4 sm:p-6 transition-all group shadow-sm hover:shadow-md hover:-translate-y-0.5"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1 min-w-0">
                                        {/* Title row */}
                                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2.5">
                                            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                                                <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2" />
                                                </svg>
                                            </div>
                                            <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                                                {report.title || 'Interview Report'}
                                            </h3>
                                            <ScoreBadge score={report.matchScore || 0} />
                                        </div>

                                        {/* Job description preview */}
                                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 ml-11">
                                            {report.jobDescription?.slice(0, 160)}
                                            {report.jobDescription?.length > 160 ? '...' : ''}
                                        </p>

                                        {/* Meta row */}
                                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 ml-11">
                                            <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                                {report.technicalQuestions?.length || 0} technical
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                                </svg>
                                                {report.behavioralQuestions?.length || 0} behavioral
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {report.createdAt
                                                    ? new Date(report.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                                                    : '—'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="shrink-0 flex items-center space-x-1 sm:space-x-2">
                                        <ActionTooltip text="Re-generate Report">
                                            <button
                                                onClick={(e) => handleGenerateAgain(e, report)}
                                                className="p-2 rounded-xl border border-slate-200 text-slate-400 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all shadow-xs"
                                            >
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                            </button>
                                        </ActionTooltip>

                                        <ActionTooltip text="Download Resume PDF">
                                            <button
                                                onClick={(e) => handleDownload(e, report._id)}
                                                disabled={downloadingId === report._id}
                                                className={`p-2 rounded-xl border transition-all ${downloadingId === report._id
                                                    ? 'bg-slate-50 border-slate-200 text-slate-300'
                                                    : 'bg-white border-slate-200 text-slate-400 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 shadow-xs'
                                                    }`}
                                            >
                                                {downloadingId === report._id ? (
                                                    <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </ActionTooltip>

                                        <ActionTooltip text="View Full Report">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center transition-colors">
                                                <svg className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </ActionTooltip>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ReportsList;
