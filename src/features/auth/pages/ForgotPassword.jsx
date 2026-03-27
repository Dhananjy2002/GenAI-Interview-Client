import React, { useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { forgotPasswordApi } from '../services/auth.api';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(email)) {
            return toast.error("Please enter a valid email address.");
        }

        setLoading(true);
        try {
            await forgotPasswordApi({ email });
            toast.success("Password reset email sent!");
            setIsSubmitted(true);
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to send reset email. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-indigo-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="bg-white p-1 rounded-2xl shadow-xl border border-slate-100 w-16 h-16 flex items-center justify-center overflow-hidden">
                        <img src="/logo.png" alt="Interview Master" className="w-full h-full object-contain" />
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900 tracking-tight">
                    Reset your password
                </h2>
                <p className="mt-2 text-center text-sm text-slate-600">
                    Enter your email to receive a reset link
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md backdrop-blur-sm">
                <div className="bg-white/80 py-8 px-4 shadow-2xl sm:rounded-2xl sm:px-10 border border-white/40 ring-1 ring-black/5">
                    {isSubmitted ? (
                        <div className="text-center space-y-6">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100">
                                <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-slate-900">Check your email</h3>
                            <div className="mt-2 text-sm text-slate-500">
                                <p>We've sent a password reset link to <span className="font-semibold text-slate-700">{email}</span>.</p>
                                <p className="mt-2">Please check your inbox and follow the instructions to reset your password.</p>
                            </div>
                            <div className="pt-4">
                                <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
                                    Return to login
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow bg-white/50 focus:bg-white"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white transition-all active:scale-[0.98] ${loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
                                >
                                    {loading ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : "Send reset link"}
                                </button>
                            </div>
                            
                            <div className="mt-6 text-center text-sm">
                                <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
                                    &larr; Back to login
                                </Link>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
