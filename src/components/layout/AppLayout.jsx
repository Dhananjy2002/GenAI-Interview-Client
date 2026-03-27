import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AppLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-500 bg-slate-50">
            {/* Header stays at the top */}
            <Header />

            {/* Main content area grows to push footer down */}
            <main className="grow">
                {children}
            </main>

            {/* Footer stays at the bottom */}
            <Footer />
        </div>
    );
};

export default AppLayout;
