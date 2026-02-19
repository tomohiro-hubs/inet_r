(() => {
    const { HashRouter, Routes, Route, Link } = ReactRouterDOM;
    
    // Page Components
    const Home = () => {
        const { 
            Hero, DirectorMessage, KeyPoints, ReasonCards, 
            ServiceAccordion, DailyTimeline, ContactCtaBand 
        } = window;

        if (!Hero) return <div>Loading...</div>;

        return (
            <div className="flex flex-col w-full">
                <Hero />
                <KeyPoints />
                <DirectorMessage />
                <ReasonCards />
                <ServiceAccordion />
                <DailyTimeline />
                <ContactCtaBand />
            </div>
        );
    };

    const Guide = () => (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
            <h1 className="text-3xl font-bold mb-8 text-clover-dark border-b pb-4">ご利用案内</h1>
            <p className="text-subtext">現在準備中です。</p>
        </div>
    );

    const Access = () => (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
            <h1 className="text-3xl font-bold mb-8 text-clover-dark border-b pb-4">施設概要・アクセス</h1>
            <p className="text-subtext">現在準備中です。</p>
        </div>
    );

    const Contact = () => (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
            <h1 className="text-3xl font-bold mb-8 text-clover-dark border-b pb-4">お問い合わせ</h1>
            <p className="text-subtext">現在準備中です。</p>
        </div>
    );

    const Privacy = () => (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
             <h1 className="text-3xl font-bold mb-8 text-clover-dark border-b pb-4">プライバシーポリシー</h1>
             <p className="text-subtext">現在準備中です。</p>
        </div>
    );

    const NotFound = () => (
        <div className="max-w-4xl mx-auto px-4 py-24 text-center">
            <h1 className="text-6xl font-bold mb-4 text-gray-200">404</h1>
            <p className="text-lg text-subtext mb-8">お探しのページは見つかりませんでした。</p>
            <Link to="/" className="inline-block bg-clover-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-clover-dark transition-colors">トップページへ戻る</Link>
        </div>
    );

    const App = () => {
        const { Layout } = window;
        
        if (!Layout) return <div>Initializing...</div>;

        return (
            <HashRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/guide" element={<Guide />} />
                        <Route path="/access" element={<Access />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </HashRouter>
        );
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
})();