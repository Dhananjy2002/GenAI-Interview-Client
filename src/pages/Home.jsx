import React, { useState, useEffect } from 'react';
import { useAuth } from '../features/auth/hooks/useAuth';
import { useNavigate, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { useInterview } from '../features/ai/hooks/useInterview';


const Home = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const { state } = useLocation();
    const { createReport, loading } = useInterview();

    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
    const [selfDescription, setSelfDescription] = useState("");
    const [reportId, setReportId] = useState(null);

    // Handle "Generate Again" - pre-fill form from route state
    useEffect(() => {
        if (state?.jobDescription) {
            setJobDescription(state.jobDescription);
        }
        if (state?.selfDescription) {
            setSelfDescription(state.selfDescription);
        }
        if (state?.reportId) {
            setReportId(state.reportId);
        }
    }, [state]);

    const handleLogout = async () => {
        try {
            await logout();
            toast.info("You have securely signed out.");
            navigate('/login');
        } catch (error) {
            toast.error(error.response?.data?.message || "Could not log out properly.");
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setResume(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!resume || !jobDescription) return;

        try {
            const response = await createReport({
                resume,
                jobDescription,
                selfDescription,
                reportId
            });

            toast.success(reportId ? "Report updated successfully!" : "Report generated successfully!");
            // Reset the reportId after successful update to avoid accidental overwrite on next submit
            setReportId(null);
            // Navigate to the newly created report by ID
            if (response.interviewReport?._id) {
                navigate(`/report/${response.interviewReport._id}`);
            } else {
                // Fallback: show report in state if ID not available
                navigate('/report', { state: { report: response.interviewReport } });
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Error generating the report. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-indigo-50 font-sans py-8 px-4 sm:px-6 lg:px-8">
            {/* Header / Nav */}
            <div className="max-w-4xl mx-auto flex flex-wrap justify-between items-center mb-10 bg-white/70 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white gap-3">
                <div
                    className="flex items-center space-x-3 cursor-pointer group"
                    onClick={() => navigate('/')}
                >
                    <div className="bg-indigo-600 p-2.5 rounded-xl shadow-md shadow-indigo-100 group-hover:scale-105 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h1 className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">Interview Master</h1>
                </div>
                <div className="flex items-center flex-wrap gap-3">
                    <span className="text-sm font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                        {user ? user.username || user.name || user.email : "Guest"}
                    </span>
                    <button
                        onClick={() => navigate('/reports')}
                        className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-2 group"
                    >
                        <div className="p-1.5 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        My Reports
                    </button>
                    <button
                        onClick={handleLogout}
                        className="text-sm font-bold text-red-500 hover:text-red-700 transition-colors"
                    >
                        Sign out
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white overflow-hidden ring-1 ring-black/5">
                    {/* Form Header */}
                    <div className="px-8 py-8 bg-linear-to-r from-indigo-600 to-violet-600 border-b border-indigo-700">
                        <h2 className="text-2xl font-extrabold text-white tracking-tight">
                            {reportId ? "Re-Generate Analysis" : "Generate Interview Report"}
                        </h2>
                        <p className="mt-2 text-indigo-100 text-sm font-medium">
                            {reportId
                                ? "Re-upload your resume to refine this existing analysis."
                                : "Upload your resume and the job description. Our AI will analyze the gap and construct a personalized roadmap."
                            }
                        </p>
                    </div>

                    <div className="p-8 sm:p-10">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* File Upload Section */}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Resume file (PDF)</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-2xl hover:border-indigo-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 transition-all bg-slate-50/50">
                                    <div className="space-y-2 text-center">
                                        <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-slate-600 justify-center">
                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-bold text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 px-1">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf" onChange={handleFileChange} required />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-slate-500">PDF up to 5MB</p>
                                        {resume && (
                                            <p className="text-sm font-bold text-emerald-600 mt-2 bg-emerald-50 inline-block px-3 py-1 rounded-full border border-emerald-200">
                                                Selected: {resume.name}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Text Areas */}
                            <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="jobDescription" className="block text-sm font-bold text-slate-700">
                                        Job Description <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="jobDescription"
                                            name="jobDescription"
                                            rows={5}
                                            className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow bg-white/50 focus:bg-white resize-none"
                                            placeholder="Paste the target job description here..."
                                            value={jobDescription}
                                            onChange={(e) => setJobDescription(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <p className="mt-2 text-xs text-slate-500">Include all responsibilities and requirements from the listing for best results.</p>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="selfDescription" className="block text-sm font-bold text-slate-700">
                                        Self Description (Optional)
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="selfDescription"
                                            name="selfDescription"
                                            rows={3}
                                            className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow bg-white/50 focus:bg-white resize-none"
                                            placeholder="Tell us a bit more about yourself, unique skills, or areas you want to highlight..."
                                            value={selfDescription}
                                            onChange={(e) => setSelfDescription(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={loading || !resume || !jobDescription}
                                    className={`inline-flex items-center justify-center px-8 py-3.5 border border-transparent rounded-xl shadow-md text-sm font-bold text-white transition-all active:scale-[0.98] ${loading || !resume || !jobDescription
                                        ? 'bg-slate-400 cursor-not-allowed'
                                        : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        }`}
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            {reportId ? 'Updating...' : 'Generating Analysis...'}
                                        </>
                                    ) : (
                                        reportId ? 'Re-Generate Report ⚡' : 'Generate My Report ✨'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
