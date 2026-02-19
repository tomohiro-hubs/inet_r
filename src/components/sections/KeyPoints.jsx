(() => {
    const KeyPoints = () => {
        const { Clock, Car, Bath, Dumbbell, Scissors } = window.Icons;

        const items = [
            { icon: Clock, label: "半日（3時間）", sub: "負担の少ない短時間" },
            { icon: Car, label: "送迎あり", sub: "ご自宅まで送り迎え" },
            { icon: Bath, label: "入浴対応", sub: "銭湯方式・要支援も対応" },
            { icon: Dumbbell, label: "無理のない運動", sub: "器具を用いた機能訓練" },
            { icon: Scissors, label: "提携美容院", sub: "施設内でヘアカット" },
        ];

        return (
            <section className="py-12 bg-clover-light/30 border-y border-clover-primary/10">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Desktop Layout: 5 columns centered */}
                    <div className="hidden md:grid md:grid-cols-5 gap-6">
                        {items.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-border flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform h-full">
                                <div className="w-14 h-14 rounded-full bg-clover-light flex items-center justify-center text-clover-primary mb-2">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-base">{item.label}</h3>
                                <p className="text-xs text-subtext leading-tight">{item.sub}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Layout: Vertical List */}
                    <div className="md:hidden flex flex-col gap-3">
                        {items.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-border flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-clover-light flex-shrink-0 flex items-center justify-center text-clover-primary">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-gray-900 text-base">{item.label}</h3>
                                    <p className="text-sm text-subtext">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };
    window.KeyPoints = KeyPoints;
})();