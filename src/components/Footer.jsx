(() => {
    const { Link } = ReactRouterDOM;
    
    const Footer = () => {
        const { Logo } = window.Icons;

        return (
            <footer className="bg-white border-t border-border mt-auto">
                <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                        {/* Logo & Address */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="flex items-center gap-2 mb-2">
                                <Logo className="w-6 h-6 text-clover-primary" />
                                <span className="text-lg font-bold text-gray-800">クローバーデイサービス</span>
                            </div>
                            <p className="text-sm text-subtext">
                                地域密着型 半日デイサービス<br/>
                                〒000-0000 〇〇県〇〇市〇〇町1-2-3<br/>
                                TEL: 00-0000-0000
                            </p>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/contact" className="text-sm font-medium text-subtext hover:text-clover-primary transition-colors">
                                お問い合わせ
                            </Link>
                            <Link to="/privacy" className="text-sm font-medium text-subtext hover:text-clover-primary transition-colors">
                                プライバシーポリシー
                            </Link>
                            <Link to="/guide" className="text-sm font-medium text-subtext hover:text-clover-primary transition-colors">
                                ご利用案内
                            </Link>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                        <p className="text-xs text-gray-400">
                            &copy; {new Date().getFullYear()} Clover Day Service. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    };

    window.Footer = Footer;
})();