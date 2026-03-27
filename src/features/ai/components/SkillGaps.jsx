const SkillGaps = ({ skillGaps }) => {
    const gapStyle = {
        high: 'bg-red-50 border-red-200 text-red-700',
        medium: 'bg-amber-50 border-amber-200 text-amber-700',
        low: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    };
    const dotStyle = {
        high: 'bg-red-400', medium: 'bg-amber-400', low: 'bg-emerald-400',
    };

    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4">Skill Gaps</p>
            <div className="space-y-2.5">
                {skillGaps?.map((gap, idx) => {
                    const sev = gap.severity?.toLowerCase();
                    return (
                        <div key={`gap-${idx}`} className={`p-3 rounded-xl border flex items-start space-x-2.5 ${gapStyle[sev] || gapStyle.low}`}>
                            <div className={`mt-1 shrink-0 w-2 h-2 rounded-full ${dotStyle[sev] || dotStyle.low}`} />
                            <div>
                                <p className="text-sm font-semibold leading-tight">{gap.skill}</p>
                                <p className="text-[10px] uppercase font-bold tracking-wider opacity-70 mt-0.5">{gap.severity} impact</p>
                            </div>
                        </div>
                    );
                })}
                {(!skillGaps || skillGaps.length === 0) && (
                    <p className="text-sm text-slate-400 text-center py-2">No major skill gaps! ✨</p>
                )}
            </div>
        </div>
    );
};

export default SkillGaps;
