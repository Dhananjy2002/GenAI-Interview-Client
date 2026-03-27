const CircularProgress = ({ value }) => {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    const colorStroke = value >= 75 ? '#10b981' : value >= 50 ? '#f59e0b' : '#ef4444';
    const colorText = value >= 75 ? 'text-emerald-600' : value >= 50 ? 'text-amber-500' : 'text-red-500';

    return (
        <div className="relative inline-flex items-center justify-center">
            <svg className="transform -rotate-90 w-28 h-28">
                <circle stroke="#e2e8f0" strokeWidth="8" fill="transparent" r={radius} cx="56" cy="56" />
                <circle
                    stroke={colorStroke}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    fill="transparent"
                    r={radius} cx="56" cy="56"
                    className="transition-all duration-1000 ease-out"
                />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
                <span className={`text-3xl font-bold ${colorText}`}>{value}</span>
                <span className={`text-xs ${colorText} -mt-1`}>%</span>
            </div>
        </div>
    );
};

export default CircularProgress;
