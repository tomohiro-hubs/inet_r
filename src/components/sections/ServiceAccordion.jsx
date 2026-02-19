(() => {
    const { useState } = React;
    
    const ServiceAccordion = () => {
        const { ChevronDown, ChevronUp, Check, Car, Bath, Dumbbell, Scissors } = window.Icons;
        const [openIndex, setOpenIndex] = useState(null);

        const toggle = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };

        const sections = [
            {
                key: "pickup",
                title: "送迎",
                icon: Car,
                content: ["ご自宅まで送迎車でお迎えにあがります。", "対応エリアについては、施設概要ページをご覧ください。"],
                image: null
            },
            {
                key: "bath",
                title: "入浴",
                icon: Bath,
                content: ["要支援の方もご利用いただけます。", "銭湯方式（複数人で入浴）で、広々としたお風呂を楽しめます。"],
                safety: ["入浴前に体調確認を行います", "スタッフが見守り、必要に応じて介助します", "手すり・滑りにくい環境など安全に配慮します"],
                image: null
            },
            {
                key: "exercise",
                title: "運動・機能訓練",
                icon: Dumbbell,
                content: ["運動器具を用いた無理のない運動を行います。", "ご利用者様の状態に応じたプログラムを提供します。"],
                image: "assets/exercise.webp"
            },
            {
                key: "salon",
                title: "提携美容院（強み）",
                icon: Scissors,
                content: ["施設内で提携美容師による施術を受けられます。", "わざわざ外出する必要がなく、身だしなみを整えられます。"],
                image: "assets/salon.webp"
            }
        ];

        return (
            <section className="py-16 bg-[#FAFAFA]">
                <div className="max-w-4xl mx-auto px-4">
                     <div className="text-center mb-12">
                        <span className="text-clover-primary font-bold text-sm tracking-wider uppercase mb-2 block">Our Services</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">サービス詳細</h2>
                        <div className="w-16 h-1 bg-clover-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {sections.map((section, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={section.key} className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden transition-all duration-200">
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-clover-primary"
                                        aria-expanded={isOpen}
                                        aria-controls={`content-${section.key}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2.5 rounded-xl ${isOpen ? 'bg-clover-primary text-white' : 'bg-clover-light text-clover-primary'} transition-colors`}>
                                                <section.icon className="w-6 h-6" />
                                            </div>
                                            <span className="text-lg md:text-xl font-bold text-gray-900">{section.title}</span>
                                        </div>
                                        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                                    </button>

                                    <div 
                                        id={`content-${section.key}`}
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="p-6 pt-0 border-t border-gray-100">
                                            <div className="flex flex-col md:flex-row gap-6 mt-6">
                                                <div className="flex-1 space-y-5">
                                                    <ul className="space-y-3">
                                                        {section.content.map((text, i) => (
                                                            <li key={i} className="flex items-start gap-3 text-text">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-clover-primary mt-2.5 flex-shrink-0"></span>
                                                                <span className="leading-relaxed">{text}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    
                                                    {section.safety && (
                                                        <div className="bg-orange-50/80 p-5 rounded-xl border border-orange-100 mt-4">
                                                            <h4 className="font-bold text-orange-800 text-sm mb-3 flex items-center gap-2">
                                                                <Check className="w-4 h-4" /> 安全配慮
                                                            </h4>
                                                            <ul className="space-y-2">
                                                                {section.safety.map((text, i) => (
                                                                    <li key={i} className="text-sm text-orange-700 ml-5 list-disc pl-1 leading-relaxed">{text}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                {section.image && (
                                                    <div className="w-full md:w-1/3 flex-shrink-0">
                                                        <div className="aspect-[3/2] rounded-xl overflow-hidden bg-gray-100 shadow-sm">
                                                            <img 
                                                                src={section.image} 
                                                                alt={section.title} 
                                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                                                                loading="lazy" 
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    };
    window.ServiceAccordion = ServiceAccordion;
})();