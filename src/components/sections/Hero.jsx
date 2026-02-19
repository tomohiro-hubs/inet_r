(() => {
    const { Link } = ReactRouterDOM;
    
    const Hero = () => {
        const { ArrowRight } = window.Icons;
        
        // Clover SVG pattern for background
        const cloverPattern = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 11.58 4.42 14 7.5 14C8.63 14 9.68 13.62 10.53 12.97L11 18L10 21H14L13 18L13.47 12.97C14.32 13.62 15.37 14 16.5 14C19.58 14 22 11.58 22 8.5C22 5.42 19.58 3 16.5 3ZM7.5 12C5.57 12 4 10.43 4 8.5C4 6.57 5.57 5 7.5 5C8.69 5 9.74 5.59 10.41 6.5C10.15 7.12 10 7.79 10 8.5C10 9.21 10.15 9.88 10.41 10.5C9.74 11.41 8.69 12 7.5 12ZM16.5 12C15.31 12 14.26 11.41 13.59 10.5C13.85 9.88 14 9.21 14 8.5C14 7.79 13.85 7.12 13.59 6.5C14.26 5.59 15.31 5 16.5 5C18.43 5 20 6.57 20 8.5C20 10.43 18.43 12 16.5 12Z' fill='%232F7D32' fill-opacity='0.05'/%3E%3C/svg%3E")`;

        return (
            <section className="relative overflow-hidden bg-clover-light/30">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: cloverPattern }}></div>
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/60 via-white/80 to-white/90 md:bg-gradient-to-r md:from-white md:via-white/90 md:to-transparent pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20 lg:py-24 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="flex flex-col gap-6 text-center md:text-left order-2 md:order-1">
                        <div className="inline-block px-4 py-1.5 bg-clover-light text-clover-dark text-sm md:text-base font-bold rounded-full w-fit mx-auto md:mx-0 border border-clover-primary/20 shadow-sm">
                            地域密着型 半日（3時間）デイサービス
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                            笑顔と思いやり<br/>
                            <span className="text-clover-primary">寄り添う介護</span>
                        </h1>
                        <p className="text-lg text-subtext leading-relaxed max-w-xl mx-auto md:mx-0">
                            到着してから3時間、無理なく続けられるデイサービス。<br className="hidden md:block"/>
                            送迎付きで、入浴や機能訓練も安心してご利用いただけます。
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
                            <Link to="/guide" className="bg-clover-primary hover:bg-clover-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group">
                                ご利用案内を見る
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/access" className="bg-white hover:bg-gray-50 text-clover-dark border-2 border-clover-light px-8 py-4 rounded-xl font-bold text-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center">
                                施設概要・アクセス
                            </Link>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-lg md:max-w-none order-1 md:order-2">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 aspect-video md:aspect-[16/10] bg-gray-100">
                            <img 
                                src="assets/hero.webp" 
                                alt="明るく清潔感のあるデイサービス室内の様子" 
                                className="object-cover w-full h-full"
                                width="1600"
                                height="900"
                            />
                        </div>
                        {/* Decorative shape */}
                        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-clover-primary/10 rounded-2xl"></div>
                    </div>
                </div>
            </section>
        );
    };

    window.Hero = Hero;
})();