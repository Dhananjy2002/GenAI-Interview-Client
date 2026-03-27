const ContentHeader = ({ activeSection, technicalQuestions, behavioralQuestions, preparationPlan }) => {
    return (
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                {activeSection === 'technical' && 'Technical Questions'}
                {activeSection === 'behavioral' && 'Behavioral Questions'}
                {activeSection === 'roadmap' && 'Preparation Road Map'}
            </h2>
            {activeSection !== 'roadmap' && (
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full">
                    {activeSection === 'technical' ? technicalQuestions?.length : behavioralQuestions?.length} questions
                </span>
            )}
            {activeSection === 'roadmap' && (
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                    {preparationPlan?.length} days
                </span>
            )}
        </div>
    );
};

export default ContentHeader;
