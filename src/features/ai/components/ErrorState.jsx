import { useNavigate } from 'react-router';

const ErrorState = ({ error }) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-indigo-50 flex flex-col items-center justify-center font-sans px-4">
            <div className="text-center space-y-4 bg-white p-10 rounded-2xl shadow-xl border border-slate-100 max-w-md w-full">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
                    <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-800">{error ? 'Error loading report' : 'No report data found.'}</h2>
                <p className="text-slate-500 text-sm">{error || 'Go back to the dashboard to generate a new report.'}</p>
                <button onClick={() => navigate('/reports')} className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition">
                    Go to Reports
                </button>
            </div>
        </div>
    );
};

export default ErrorState;
