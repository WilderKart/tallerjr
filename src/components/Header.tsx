'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${isScrolled
                ? 'bg-white/80 backdrop-blur-md shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-600/30">
                        <span className="text-white font-black text-xl italic">JR</span>
                    </div>
                    <span className="font-extrabold text-[#2d3663] text-xl tracking-tight">
                        Taller JR
                    </span>
                </Link>

                {/* Navigation and Actions removed for a cleaner look as requested */}
            </div>
        </header>
    );
};

export default Header;
