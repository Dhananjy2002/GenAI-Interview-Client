const RoadmapSection = ({ preparationPlan }) => {
    return (
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
            {/* Header */}
            <div className="flex items-center mb-12">
                <h2 className="text-2xl font-black text-slate-800 mr-4 tracking-tight">Preparation Road Map</h2>
                <span className="bg-slate-100 text-slate-500 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200 uppercase tracking-widest">
                    {preparationPlan?.length || 0}-day plan
                </span>
            </div>

            {/* Timeline */}
            <div className="relative pl-7 sm:pl-9 border-l-2 border-indigo-100 pb-4 space-y-12 sm:space-y-14 ml-3 sm:ml-5 mt-4">
                {preparationPlan?.map((dayPlan, idx) => (
                    <div key={`day-${idx}`} className="relative group">
                        {/* Timeline Node */}
                        <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-[14px] h-[14px] rounded-full bg-white border-[3px] border-indigo-500 ring-4 ring-white z-10 transition-transform group-hover:scale-125 duration-300"></div>

                        {/* Content */}
                        <div>
                            {/* Title Row */}
                            <div className="flex items-center space-x-4 mb-4">
                                <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded border border-indigo-100">
                                    Day {dayPlan.day}
                                </span>
                                <h3 className="text-[17px] font-bold text-slate-800">{dayPlan.focus}</h3>
                            </div>

                            {/* Task List */}
                            <ul className="space-y-4">
                                {dayPlan.tasks?.map((task, tidx) => (
                                    <li key={`task-${tidx}`} className="flex items-start text-slate-600 text-[15px] leading-relaxed group/item hover:text-slate-900 transition-colors cursor-default">
                                        <span className="mr-3 text-indigo-400 font-extrabold mt-0.5 text-xs">•</span>
                                        <span>{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoadmapSection;
