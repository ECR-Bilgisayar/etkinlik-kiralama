import React from 'react';

const Logo = ({ className = "", iconOnly = false }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Icon Group */}
            <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-xl opacity-20 blur-sm" />

                {/* Main Icon */}
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10"
                >
                    <defs>
                        <linearGradient id="brandGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                    </defs>

                    {/* Outer Shape */}
                    <path
                        d="M12 6H28C31.3137 6 34 8.68629 34 12V28C34 31.3137 31.3137 34 28 34H12C8.68629 34 6 31.3137 6 28V12C6 8.68629 8.68629 6 12 6Z"
                        stroke="url(#brandGradient)"
                        strokeWidth="2.5"
                        fill="none"
                    />

                    {/* Inner E / Tech Lines */}
                    <path
                        d="M26 14H15C14.4477 14 14 14.4477 14 15V25C14 25.5523 14.4477 26 15 26H26"
                        stroke="url(#brandGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M14 20H24"
                        stroke="url(#brandGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />

                    {/* Tech Dot */}
                    <circle cx="28" cy="26" r="2.5" fill="#22d3ee" />
                </svg>
            </div>

            {/* Text Content */}
            {!iconOnly && (
                <div className="flex flex-col items-start justify-center -space-y+1">
                    <span className="text-xl font-bold tracking-[0.21em] bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white tracking-tight leading-none">
                        ETKİNLİK
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.71em] text-cyan-600 dark:text-cyan-400 uppercase leading-none pl-1">
                        KİRALAMA
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
