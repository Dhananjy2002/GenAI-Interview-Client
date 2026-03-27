const SectionsNav = ({ activeSection, setActiveSection }) => {
    const tabs = [
        { 
            id: 'technical', 
            label: 'Technical', 
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ), 
            activeClass: 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-500 font-bold' 
        },
        { 
            id: 'behavioral', 
            label: 'Behavioral', 
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            ), 
            activeClass: 'bg-violet-50 text-violet-700 border-l-4 border-violet-500 font-bold' 
        },
        { 
            id: 'roadmap', 
            label: 'Roadmap', 
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            ), 
            activeClass: 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-500 font-bold' 
        },
    ];

    return (
        <div className="w-full lg:w-48 shrink-0">
            <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4 px-2">Navigation</p>
            <div className="space-y-1.5 flex flex-row lg:flex-col gap-2 lg:gap-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
                {tabs.map(tab => {
                    const isActive = activeSection === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveSection(tab.id)}
                            className={`shrink-0 lg:w-full flex items-center px-4 py-3.5 rounded-xl text-sm transition-all border-l-4 ${
                                isActive 
                                    ? tab.activeClass 
                                    : 'text-slate-500 hover:bg-white hover:text-slate-700 hover:shadow-sm border-transparent'
                            }`}
                        >
                            <span className={`mr-3 ${isActive ? 'opacity-100' : 'opacity-60'}`}>{tab.icon}</span>
                            {tab.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SectionsNav;
