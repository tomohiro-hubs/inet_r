(() => {
    const { Link } = ReactRouterDOM;
    
    const ContactCtaBand = () => {
        const { Phone, ArrowRight } = window.Icons;

        return (
            <section className="bg-[#EAF6EA] py-16 md:py-24 text-center border-t border-clover-primary/10">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-clover-dark mb-4 leading-tight">
                        ご利用や見学のご相談は、<br className="md:hidden" />事前にお問い合わせください
                    </h2>
                    <p className="text-gray-600 mb-10 text-base md:text-lg leading-relaxed">
                        状況に応じて、必要な情報や手順をご案内します。<br className="hidden md:block" />
                        まずはお気軽にお電話またはフォームよりご連絡ください。
                    </p>
                    
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch md:items-center">
                         <a href="tel:00-0000-0000" className="bg-white px-8 py-4 rounded-xl shadow-sm flex items-center justify-center gap-4 border-2 border-transparent hover:border-clover-primary/30 transition-all group">
                            <div className="w-10 h-10 rounded-full bg-clover-light flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Phone className="w-5 h-5 text-clover-primary" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-subtext font-bold">お電話でのお問い合わせ</p>
                                <p className="text-xl font-bold text-gray-900 font-mono tracking-tight">00-0000-0000</p>
                            </div>
                         </a>
                         
                         <Link to="/contact" className="bg-clover-primary hover:bg-clover-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                            お問い合わせフォーム
                            <ArrowRight className="w-5 h-5" />
                         </Link>
                    </div>
                </div>
            </section>
        );
    };
    window.ContactCtaBand = ContactCtaBand;
})();