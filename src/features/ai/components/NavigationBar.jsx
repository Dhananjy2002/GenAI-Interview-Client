import { useNavigate } from 'react-router';

const NavigationBar = ({ title }) => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
            <div 
                className="flex items-center space-x-3 cursor-pointer group"
                onClick={() => navigate('/')}
            >
                <div className="bg-indigo-600 p-2.5 rounded-xl shadow-md shadow-indigo-100 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>
                <div>
                    <h1 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">Interview Master</h1>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{title || 'Analysis'}</p>
                </div>
            </div>
            <button
                onClick={() => navigate('/reports')}
                className="text-sm font-semibold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors border border-slate-200"
            >
                ← Back to Reports
            </button>
        </div>
    );
};

export default NavigationBar;
