import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { label: 'ホーム', href: '/' },
    { label: 'ご利用案内', href: '/guide' },
    { label: '施設概要・アクセス', href: '/access' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <img src={`${import.meta.env.BASE_URL}logo_new.jpg`} alt="アイネットデイサービスセンター" className="h-5 sm:h-8 md:h-12 w-auto object-contain" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={`text-sm font-medium transition-colors hover:text-clover-primary relative py-1 ${location.pathname === item.href ? 'text-clover-primary' : 'text-subtext'
                                }`}
                        >
                            {item.label}
                            {location.pathname === item.href && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-clover-primary rounded-full" />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex flex-col items-end mr-1">
                        <span className="text-xs text-gray-500 font-bold">お気軽にご相談ください</span>
                        <a href="tel:00-0000-0000" className="text-xl font-bold text-clover-primary font-mono leading-none hover:text-clover-dark transition-colors">00-0000-0000</a>
                        <span className="text-[10px] text-gray-400 mt-0.5 font-medium">※営業電話はお断りします</span>
                    </div>
                    <Link to="/contact" className="bg-clover-primary hover:bg-clover-dark text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2">
                        お問い合わせ
                    </Link>
                </div>

                {/* Mobile Menu Button + CTA */}
                <div className="flex items-center gap-3 md:hidden">
                    <Link to="/contact" className="bg-clover-primary text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm">お問い合わせ</Link>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-subtext hover:bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-clover-light"
                        aria-label="メニュー"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg animate-slide-in">
                    <nav className="flex flex-col p-4 gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={`p-4 rounded-xl text-base font-bold flex items-center justify-between ${location.pathname === item.href ? 'bg-clover-light text-clover-dark' : 'text-text hover:bg-muted'
                                    }`}
                            >
                                {item.label}
                                <span className="text-clover-primary">→</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}