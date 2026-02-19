(() => {
    const { useState, useEffect } = React;
    const { Link, useLocation } = ReactRouterDOM;
    
    const Header = () => {
        const { Logo, Menu, X } = window.Icons; // Get icons inside component to ensure they are loaded
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const location = useLocation();

        const navItems = [
            { label: "トップ＋サービス", href: "/" },
            { label: "ご利用案内", href: "/guide" },
            { label: "施設概要・アクセス", href: "/access" }
        ];

        // Close menu on route change
        useEffect(() => {
            setIsMenuOpen(false);
        }, [location]);

        return (
            <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
                <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <Logo className="w-8 h-8 md:w-10 md:h-10 text-clover-primary group-hover:scale-110 transition-transform duration-300" />
                        <div className="flex flex-col">
                            <span className="text-lg md:text-xl font-bold text-clover-dark tracking-tight leading-none">クローバー</span>
                            <span className="text-xs text-subtext font-medium leading-none">デイサービス</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link 
                                key={item.href} 
                                to={item.href}
                                className={`text-sm font-medium transition-colors hover:text-clover-primary relative py-1
                                    ${location.pathname === item.href ? 'text-clover-primary' : 'text-subtext'}
                                `}
                            >
                                {item.label}
                                {location.pathname === item.href && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-clover-primary rounded-full"></span>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Link 
                            to="/contact" 
                            className="bg-clover-primary hover:bg-clover-dark text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                        >
                            お問い合わせ
                        </Link>
                    </div>

                    {/* Mobile Menu Button + CTA */}
                    <div className="flex items-center gap-3 md:hidden">
                        <Link 
                            to="/contact"
                            className="bg-clover-primary text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm"
                        >
                            お問い合わせ
                        </Link>
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-subtext hover:bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-clover-light"
                            aria-label="メニューを開く"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg animate-in slide-in-from-top-2 duration-200">
                        <nav className="flex flex-col p-4 gap-2">
                            {navItems.map((item) => (
                                <Link 
                                    key={item.href} 
                                    to={item.href}
                                    className={`p-4 rounded-xl text-base font-bold flex items-center justify-between
                                        ${location.pathname === item.href ? 'bg-clover-light text-clover-dark' : 'text-text hover:bg-muted'}
                                    `}
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
    };

    window.Header = Header;
})();