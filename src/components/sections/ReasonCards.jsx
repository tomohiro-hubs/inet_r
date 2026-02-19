(() => {
    const ReasonCards = () => {
        const cards = [
            { title: "3時間で負担が少ない", desc: "長時間の滞在が不安な方でも、生活リズムを崩さずにご利用いただけます。" },
            { title: "送迎ありで通いやすい", desc: "ご自宅まで安全に送迎いたします。車椅子の方もご相談ください。" },
            { title: "入浴（銭湯方式）", desc: "個浴ではなく、広々としたお風呂でリラックス。清潔保持を支援します。" },
            { title: "提携美容院サービス", desc: "施設内でプロの理美容サービスを受けられ、外出の負担を軽減します。" }
        ];

        return (
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-clover-primary font-bold text-sm tracking-wider uppercase mb-2 block">Why Choose Us</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">当施設が選ばれる理由</h2>
                        <div className="w-16 h-1 bg-clover-primary mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {cards.map((card, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-clover-primary/60 group-hover:bg-clover-primary transition-colors"></div>
                                <div className="pl-4">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-clover-dark transition-colors">{card.title}</h3>
                                    <p className="text-subtext leading-relaxed text-sm md:text-base">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };
    window.ReasonCards = ReasonCards;
})();