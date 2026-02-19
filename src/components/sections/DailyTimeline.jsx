(() => {
    const DailyTimeline = () => {
        const steps = [
            { time: "8:30〜", label: "お迎え", desc: "ご自宅までお迎えにあがります" },
            { time: "9:00", label: "到着・健康チェック", desc: "血圧・体温測定、体調確認" },
            { time: "9:30", label: "入浴／運動・活動", desc: "入浴、機能訓練、脳トレなど" },
            { time: "12:00", label: "お送り", desc: "ご自宅までお送りします" }
        ];

        return (
            <section className="py-16 md:py-24 bg-white overflow-hidden">
                <div className="max-w-5xl mx-auto px-4">
                     <div className="text-center mb-16">
                        <span className="text-clover-primary font-bold text-sm tracking-wider uppercase mb-2 block">Daily Schedule</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">1日の流れ（半日コース例）</h2>
                        <div className="w-16 h-1 bg-clover-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="relative px-2 md:px-0">
                        {/* Mobile Vertical Line */}
                        <div className="absolute left-[27px] top-4 bottom-12 w-0.5 bg-gray-200 md:hidden"></div>
                        
                        {/* Desktop Horizontal Line */}
                        <div className="absolute top-[19px] left-10 right-10 h-0.5 bg-gray-200 hidden md:block"></div>

                        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
                            {steps.map((step, index) => (
                                <div key={index} className="flex md:flex-col items-start md:items-center gap-6 md:gap-4 group flex-1">
                                    {/* Circle */}
                                    <div className="relative flex-shrink-0 ml-1 md:ml-0">
                                        <div className="w-10 h-10 rounded-full bg-white border-4 border-clover-primary flex items-center justify-center shadow-sm z-10 group-hover:scale-110 transition-transform">
                                            <div className="w-3 h-3 rounded-full bg-clover-primary"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-grow pt-0 md:pt-4 md:text-center bg-white md:bg-transparent p-5 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none border border-gray-100 md:border-none w-full hover:-translate-y-0.5 md:hover:translate-y-0 transition-transform">
                                        <div className="inline-block bg-clover-light text-clover-dark text-xs font-bold px-3 py-1 rounded-full mb-2">
                                            {step.time}
                                        </div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">{step.label}</h3>
                                        <p className="text-sm text-subtext leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    window.DailyTimeline = DailyTimeline;
})();