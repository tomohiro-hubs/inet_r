import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactCtaBand from '../components/ContactCtaBand';
import PhotoSlider from '../components/PhotoSlider';

/* ── check icon ── */
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

/* ── Hero ── */
function Hero() {
    const slides = [
        { src: './hero.jpg', alt: '明るいデイサービスの室内', style: { objectPosition: 'calc(50% - 80px) 50%' } },
        { src: './hero3.jpg', alt: '機能訓練の様子', className: 'object-[center_20%]' },
        { src: './hero2.jpg', alt: '楽しく過ごす様子', className: 'object-[center_30%]' },
    ];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[600px] flex items-center animate-fade-in">
            <div className="absolute inset-0 z-0 overflow-hidden">
                {slides.map((s, i) => (
                    <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
                        <img src={s.src} className={`w-full h-full object-cover md:object-center ${s.className || ''}`} style={s.style} alt={s.alt} />
                    </div>
                ))}
                <div className="absolute inset-0 bg-white/70 md:bg-gradient-to-r md:from-white/80 md:via-white/50 md:to-transparent z-10" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                <div className="flex flex-col gap-6 text-center md:text-left md:max-w-xl">
                    <div className="inline-block px-4 py-1.5 bg-clover-light text-clover-dark text-sm md:text-base font-bold rounded-full w-fit mx-auto md:mx-0 border border-clover-primary/20 shadow-sm">
                        通常規模型　通所介護　デイサービス
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                        笑顔と思いやり<br /><span className="text-clover-primary">寄り添う介護</span>
                    </h1>
                    <p className="text-sm sm:text-base text-clover-primary font-medium -mt-2 tracking-widest">since 2026</p>
                    <p className="text-lg text-subtext leading-relaxed font-medium">
                        半日（3時間）なので、無理なく続けられるデイサービス。<br className="hidden md:block" />送迎付きで、入浴や機能訓練も安心してご利用いただけます。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
                        <Link to="/guide" className="bg-clover-primary hover:bg-clover-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group">
                            ご利用案内を見る
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </Link>
                        <Link to="/access" className="bg-white hover:bg-gray-50 text-clover-dark border-2 border-clover-light px-8 py-4 rounded-xl font-bold text-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center">
                            施設概要・アクセス
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── KeyPoints ── */
const keyPoints = [
    { icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>, title: '半日（3時間）', desc: '負担の少ない短時間' },
    { icon: <><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></>, title: '送迎あり', desc: 'ご自宅まで送り迎え' },
    { icon: <><path d="M9 6 6.5 3.5" /><path d="M3 7h18" /><path d="M7 19v-9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2.5" /><path d="M22 13v-3a2 2 0 0 0-2-2h-3.5" /><path d="M7 16h13.5a2.5 2.5 0 0 1 0 5h-11a2.5 2.5 0 0 1-2.5-2.5V16Z" /></>, title: '入浴対応', desc: '銭湯方式・要支援も対応' },
    { icon: <><path d="m6.5 6.5 11 11" /><path d="m21 21-1-1" /><path d="m3 3 1 1" /><path d="m18 22 4-4" /><path d="m2 6 4-4" /><path d="m3 10 7-7" /><path d="m14 21 7-7" /></>, title: '無理のない運動', desc: '器具を用いた機能訓練' },
    { icon: <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" x2="8.12" y1="4" y2="15.88" /><line x1="14.47" x2="20" y1="14.48" y2="20" /><line x1="8.12" x2="12" y1="8.12" y2="12" /></>, title: '提携美容院', desc: '施設横でヘアカット', last: true },
];

function KeyPoints() {
    return (
        <section className="py-12 bg-clover-light/30 border-y border-clover-primary/10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
                    {keyPoints.map((p, i) => (
                        <div key={i} className={`bg-white rounded-xl p-4 md:p-6 shadow-sm border border-border flex flex-col items-center gap-3 text-center hover:-translate-y-1 transition-transform ${p.last ? 'col-span-2 md:col-span-1 w-full md:w-auto mx-auto md:mx-0 max-w-[50%] md:max-w-none' : ''}`}>
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-clover-light flex items-center justify-center text-clover-primary flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{p.icon}</svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-sm md:text-base">{p.title}</h3>
                                <p className="text-xs md:text-sm text-subtext leading-tight mt-1">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── About Us ── */
function AboutUs() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    <div className="w-full md:w-1/2">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-border relative group">
                            <img src="./real_exterior.jpg" alt="アイネットデイサービス外観" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <span className="text-clover-primary font-bold tracking-wider uppercase mb-2 block text-sm">About us</span>
                        <h2 className="text-3xl font-bold text-clover-dark mb-6 flex items-center gap-3">
                            <img src="./icon_clover.png" alt="ロゴ" className="w-10 h-10 object-contain flex-shrink-0" />
                            アイネットデイサービス
                        </h2>
                        <div className="space-y-6 text-subtext leading-loose font-medium">
                            <p>アイネットデイサービスセンターは、近鉄南大阪線「北田辺駅」からほど近い、東住吉区西今川の閑静な住宅街に位置します。ご利用者様の自立した生活を支援するため、最新の機能訓練マシンと、ゆったりとした大型浴槽での入浴に特化したサービスを提供しています。</p>
                            <p>午前・午後の3時間（半日単位）という短時間スタイルを採用しており、ご自身のライフスタイルに合わせてお選びいただけます。「デイサービスで1日過ごすのは長すぎる」「リフレッシュ感覚で体を動かし、お風呂を楽しみたい」というご要望にお応えし、家族のような温かさとプロの技術で、日常生活の質（QOL）向上をサポートいたします。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── ServiceDetails ── */
const services = [
    {
        img: './pickup.jpg', imgAlt: '送迎', title: '送迎', icon: <><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></>,
        desc: 'ご自宅の玄関先まで、専用車でお迎えにあがります。車椅子の方も安心してご乗車いただけます。対応エリアについては施設概要ページをご確認ください。',
        checks: ['安全運転を徹底しています', '雨の日も濡れずに乗車できます'], reverse: false, brightness: true
    },
    {
        img: './bath.jpg', imgAlt: '入浴', title: '入浴', icon: <><path d="M9 6 6.5 3.5" /><path d="M3 7h18" /><path d="M7 19v-9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2.5" /><path d="M22 13v-3a2 2 0 0 0-2-2h-3.5" /><path d="M7 16h13.5a2.5 2.5 0 0 1 0 5h-11a2.5 2.5 0 0 1-2.5-2.5V16Z" /></>,
        desc: '循環ろ過装置により常に清潔なお湯が保たれた、銭湯方式の広々としたお風呂です。スタッフが見守り、必要に応じてお手伝いしますので、安心してゆったりとご入浴いただけます。',
        checks: ['要支援の方もご利用可能です', '入浴前の体調チェックを必ず行います'], reverse: true
    },
    {
        img: './exercise.jpg', imgAlt: '運動・機能訓練', title: '運動・機能訓練', icon: <><path d="m6.5 6.5 11 11" /><path d="m21 21-1-1" /><path d="m3 3 1 1" /><path d="m18 22 4-4" /><path d="m2 6 4-4" /><path d="m3 10 7-7" /><path d="m14 21 7-7" /></>,
        desc: '無理のない範囲で体を動かす機能訓練を行います。専用のマシンを使った運動や、椅子に座ってできる体操など、お一人おひとりに合わせたメニューをご提案します。',
        checks: ['機能訓練指導員がサポートします', '年齢問わず楽しく続けられるプログラムです'], reverse: false
    },
    {
        img: './salon.webp', imgAlt: '提携美容院', title: '提携美容院「そうとそうと」', icon: <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" x2="8.12" y1="4" y2="15.88" /><line x1="14.47" x2="20" y1="14.48" y2="20" /><line x1="8.12" x2="12" y1="8.12" y2="12" /></>,
        desc: '施設横の美容院「そうとそうと」にて、プロの美容師によるヘアカットサービス（税込2,000円）を受けられます。外出の負担を減らし、気軽に身だしなみを整えてリフレッシュできます。',
        checks: ['カットのみ（※カラー・パーマは除く）', 'シャンプーは当施設のお風呂で実施します'], reverse: true
    },
];

function ServiceDetails() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">サービス詳細</h2>
                    <div className="w-16 h-1 bg-clover-primary mx-auto rounded-full" />
                </div>
                <div className="space-y-16 md:space-y-24">
                    {services.map((s, i) => (
                        <div key={i} className={`flex flex-col ${s.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-lg bg-gray-100 relative group">
                                    <img src={s.img} alt={s.imgAlt} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${s.brightness ? 'brightness-110' : ''}`} loading="lazy" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-clover-light text-clover-primary rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{s.title}</h3>
                                </div>
                                <p className="text-lg text-subtext leading-relaxed mb-6">{s.desc}</p>
                                <ul className="space-y-3">
                                    {s.checks.map((c, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <span className="mt-1 text-clover-primary"><CheckIcon /></span>
                                            <span className="text-gray-700 font-medium">{c}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── DailyTimeline ── */
const timelineSteps = [
    { am: '8:30', pm: '13:00', title: 'お迎え', img: './pickup.jpg', desc: '専用車でご自宅の玄関先までお迎えにあがります。車椅子の方も安心してご乗車いただけるようサポートいたします。お時間についてのご相談は可能です。', side: 'left', brightness: true },
    { am: '9:00', pm: '13:30', title: <>到着・<br className="md:hidden" />健康チェック</>, img: './arrival.png', desc: '到着後は、看護師による血圧・体温測定などの健康チェックを行います。その日の体調に合わせて無理なく過ごせるよう配慮します。', side: 'right' },
    { am: '9:30', pm: '14:00', title: '入浴／運動', img: './exercise.jpg', desc: '銭湯方式の広々としたお風呂でリフレッシュしたり、スタッフのサポートのもと機能訓練を行ったりと、思い思いの時間をお過ごしください。', side: 'left' },
    { am: '12:00', pm: '16:00', title: 'お送り', img: './dropoff.jpg', desc: '半日の活動を終えた後は、ご自宅まで安全にお送りいたします。', side: 'right' },
];

function DailyTimeline() {
    return (
        <section className="py-16 md:py-24 bg-[#FAFAFA] overflow-hidden border-t border-border relative" style={{ backgroundImage: "url('./pattern_bg.png')", backgroundRepeat: 'repeat', backgroundSize: '300px' }}>
            <div className="absolute inset-0 bg-white/60" />
            <div className="relative z-10">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">1日の流れ</h2>
                    <div className="relative flex flex-col gap-16 max-w-4xl mx-auto px-4">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-clover-light -z-10 md:-ml-0.5" />
                        {timelineSteps.map((step, i) => (
                            <div key={i} className="flex flex-row items-center w-full relative group">
                                <div className={`absolute left-0 md:left-1/2 -ml-8 md:-ml-16 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden z-10 bg-gray-100 flex items-center justify-center transition-all duration-500 ease-in-out ${step.side === 'left' ? 'md:group-hover:w-60 md:group-hover:h-60 md:group-hover:ml-8 md:group-hover:shadow-2xl md:group-hover:z-30' : 'md:group-hover:w-60 md:group-hover:h-60 md:group-hover:-ml-[17rem] md:group-hover:shadow-2xl md:group-hover:z-30'} group-hover:border-clover-primary`}>
                                    <img src={step.img} alt={typeof step.title === 'string' ? step.title : ''} className={`w-full h-full object-cover ${step.brightness ? 'brightness-110' : ''}`} />
                                </div>
                                <div className={`w-full md:w-1/2 ${step.side === 'left' ? 'pl-20 md:pr-20 md:pl-0 md:text-right' : 'pl-20 md:pl-20 md:ml-auto'}`}>
                                    <div className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                        <div className={`flex gap-2 mb-3 ${step.side === 'left' ? 'justify-end md:justify-end' : ''}`}>
                                            <div className="inline-block bg-clover-primary text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">{step.am}</div>
                                            <div className="inline-block bg-orange-400 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">{step.pm}</div>
                                        </div>
                                        <h3 className="font-bold text-xl text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-base text-subtext leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── DirectorMessage ── */
function DirectorMessage() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <div className="bg-[#FAFAFA] rounded-3xl p-8 md:p-12 shadow-sm border border-border flex flex-col md:flex-row gap-10 items-center">
                    <div className="w-full max-w-sm md:w-1/3 flex-shrink-0">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-gray-200 relative">
                            <img src="./director.jpg" alt="施設長" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-clover-dark mb-6">施設長より</h2>
                        <div className="space-y-6 text-base md:text-lg leading-loose text-gray-700 font-medium">
                            <p>このまちで安心して暮らし続けられるよう、到着から3時間の中で「清潔」「からだ」「気分」が整う関わりを大切にしています。</p>
                            <p>無理のない運動と入浴・美容の支援を通じて、日々の小さな変化にも穏やかに寄り添います。皆様とお会いできることを心より楽しみにしています。</p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <p className="text-lg font-bold text-right text-gray-600">施設長：<span className="text-xl text-gray-900 ml-2">西川 賢治</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import MetaData from '../components/MetaData';

/* ── HomePage ── */
export default function HomePage() {
    return (
        <div className="animate-fade-in">
            <MetaData title="地域密着型 半日デイサービス" description="地域密着型、半日（3時間）のリハビリ型デイサービス。送迎・入浴・運動・提携美容院サービスを提供しています。" />
            <Hero />
            <KeyPoints />
            <AboutUs />
            <PhotoSlider className="py-16 md:py-24 bg-white" />
            <ServiceDetails />
            <DailyTimeline />
            <DirectorMessage />
            <ContactCtaBand />
        </div>
    );
}
