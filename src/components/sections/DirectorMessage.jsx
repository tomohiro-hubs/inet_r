(() => {
    const DirectorMessage = () => {
        return (
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-[#FAFAFA] rounded-3xl p-8 md:p-12 shadow-sm border border-border flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full max-w-sm md:w-1/3 flex-shrink-0">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-gray-200 relative">
                                <img 
                                    src="assets/director.webp" 
                                    alt="施設長" 
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
                            </div>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-clover-dark mb-6">施設長より</h2>
                            <div className="space-y-6 text-base md:text-lg leading-loose text-gray-700 font-medium">
                                <p>
                                    このまちで安心して暮らし続けられるよう、到着から3時間の中で「清潔」「からだ」「気分」が整う関わりを大切にしています。
                                </p>
                                <p>
                                    無理のない運動と入浴・美容の支援を通じて、日々の小さな変化にも穏やかに寄り添います。皆様とお会いできることを心より楽しみにしています。
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-lg font-bold text-right text-gray-600">
                                    施設長：<span className="text-xl text-gray-900 ml-2">佐藤 健一</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    window.DirectorMessage = DirectorMessage;
})();