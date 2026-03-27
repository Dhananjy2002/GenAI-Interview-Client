import CircularProgress from './CircularProgress';

const MatchScore = ({ matchScore }) => {
    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-5">Match Score</p>
            <div className="flex flex-col items-center">
                <CircularProgress value={matchScore || 0} />
                <p className={`mt-4 text-sm font-bold text-center ${matchScore >= 75 ? 'text-emerald-600' : matchScore >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
                    {matchScore >= 75 ? 'Strong match for this role' : matchScore >= 50 ? 'Moderate match for this role' : 'Base match for this role'}
                </p>
            </div>
        </div>
    );
};

export default MatchScore;
