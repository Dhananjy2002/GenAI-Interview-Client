import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-linear-to-br from-slate-50 to-indigo-50 flex flex-col justify-center items-center gap-4 z-50">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 border-4 border-indigo-200 rounded-full" />
        <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin" />
      </div>
      <p className="text-sm font-semibold text-indigo-500 tracking-wide animate-pulse">Loading...</p>
    </div>
  );
};

export default Loader;