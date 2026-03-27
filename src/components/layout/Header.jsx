import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { toast } from 'react-toastify';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logout } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await logout();
            toast.success("Successfully logged out!");
            navigate('/login');
        } catch (error) {
            toast.error("Logout failed. Please try again.");
        }
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const navLinks = [
        { name: 'Dashboard', path: '/', icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ) },
        { name: 'My Reports', path: '/reports', icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2" />
            </svg>
        ) },
        { name: 'About Us', path: '/about', icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ) },
        { name: 'Help', path: '/help', icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ) },
        { name: 'Contact', path: '/contact', icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ) }
    ];

    // Don't show header on login/register/reset pages if needed, but usually a global layout is fine.
    // Let's keep it global for now as requested.

    return (
        <>
            <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-20">
                        {/* Logo */}
                        <div 
                            className="flex items-center space-x-3 cursor-pointer group"
                            onClick={() => navigate('/')}
                        >
                            <div className="bg-white p-1 rounded-xl shadow-lg border border-slate-100 group-hover:scale-110 transition-all duration-300 transform-gpu group-active:scale-95 overflow-hidden w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                                <img src="/logo.png" alt="Interview Master" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-lg sm:text-xl font-extrabold text-slate-800 tracking-tight transition-colors group-hover:text-indigo-600">
                                Interview Master
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                                        location.pathname === link.path 
                                        ? 'bg-indigo-50 text-indigo-700' 
                                        : 'text-slate-500 hover:text-indigo-600 hover:bg-slate-50'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* User Actions / Menu Toggle */}
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            {user && (
                                <div className="flex items-center bg-slate-50 px-2 sm:px-3 py-1.5 rounded-full border border-slate-100 group">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] sm:text-xs font-bold text-indigo-700 sm:mr-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                        {(user.username || user.name || 'U')[0].toUpperCase()}
                                    </div>
                                    <span className="hidden sm:inline text-xs font-bold text-slate-600">
                                        {user.username || user.name || user.email}
                                    </span>
                                </div>
                            )}
                            
                            {user && (
                                <button
                                    onClick={handleLogout}
                                    className="hidden sm:flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
                                >
                                    Sign out
                                </button>
                            )}

                            {/* Mobile menu button */}
                            <button
                                onClick={toggleSidebar}
                                className="md:hidden p-1.5 sm:p-2 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-none transition-colors"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar Overlay */}
            <div 
                className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 pointer-events-none ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}
                style={{ pointerEvents: isSidebarOpen ? 'auto' : 'none' }}
                onClick={toggleSidebar}
            />

            {/* Mobile Sidebar Content */}
            <aside 
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ring-1 ring-black/5 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-6 border-b border-slate-100">
                        <div className="flex items-center space-x-3">
                            <div className="bg-white p-1 rounded-lg shadow-lg border border-slate-100 w-8 h-8 flex items-center justify-center overflow-hidden">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-lg font-bold text-slate-800">Menu</span>
                        </div>
                        <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                            <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Sidebar Links */}
                    <div className="grow p-4 space-y-2 overflow-y-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={toggleSidebar}
                                className={`flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-200 ${
                                    location.pathname === link.path 
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                                    : 'text-slate-600 hover:bg-slate-50'
                                }`}
                            >
                                <span className={location.pathname === link.path ? 'text-white' : 'text-slate-400'}>{link.icon}</span>
                                <span className="font-bold">{link.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Sidebar Footer */}
                    {user && (
                        <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
                                    {(user.username || user.name || 'U')[0].toUpperCase()}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-slate-800 truncate">{user.username || user.name}</p>
                                    <p className="text-xs font-medium text-slate-400 truncate">{user.email}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => { handleLogout(); toggleSidebar(); }}
                                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-bold bg-white text-red-500 border border-red-100 hover:bg-red-50 transition-all duration-200 shadow-sm"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <span>Sign out</span>
                            </button>
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
};

export default Header;
