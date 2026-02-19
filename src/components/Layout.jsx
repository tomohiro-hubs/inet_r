(() => {
    const { useEffect } = React;
    const { useLocation } = ReactRouterDOM;

    const Layout = ({ children }) => {
        const location = useLocation();
        
        // Ensure global components are available
        const Header = window.Header;
        const Footer = window.Footer;

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [location.pathname]);

        if (!Header || !Footer) {
            return <div>Loading...</div>;
        }

        return (
            <div className="min-h-screen flex flex-col font-sans text-text antialiased bg-white selection:bg-clover-light selection:text-clover-dark">
                <Header />
                <main className="flex-grow pt-16 md:pt-20">
                    {children}
                </main>
                <Footer />
            </div>
        );
    };

    window.Layout = Layout;
})();