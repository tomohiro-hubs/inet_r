import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactCtaBand from '../components/ContactCtaBand';

const CheckBullet = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

const faqs = [
    { q: '送迎対応エリアはどこまでですか？', a: '東住吉区、平野区、阿倍野区、天王寺区を対象としております。詳細に関しては個別にご案内しておりますので、お気軽にご相談ください。' },
    { q: '入浴は個浴ですか？', a: '当施設は銭湯方式の広々としたお風呂をご用意しております。基本的には2名ずつのローテーションでご入浴いただき、ゆったりとリラックスしていただけます。見守りや必要な介助はスタッフが行いますのでご安心ください。' },
    { q: '体験利用はできますか？費用はかかりますか？', a: 'はい、体験利用を受け付けております。サービス利用料は無料ですが、お弁当を635円（税込）にてお持ち帰りいただいております。詳細はお問い合わせください。' },
    { q: '食事のアレルギー対応は可能ですか？', a: 'はい、可能な限り対応いたします。刻み食などの形態調整も可能ですので、事前にご相談ください。' },
    { q: '年末年始やお盆休みはありますか？', a: '年末年始（12/30〜1/3）はお休みをいただいております。お盆や祝日は通常通り営業しております（土日定休の場合は除く）。' },
];

function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-border rounded-xl bg-white overflow-hidden">
            <button className="w-full p-4 md:p-5 text-left font-bold flex justify-between items-center hover:bg-gray-50 transition-colors" onClick={() => setOpen(!open)}>
                <span className="flex gap-3"><span className="text-clover-primary font-bold">Q.</span>{q}</span>
                <span className="text-gray-400">
                    {open ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    )}
                </span>
            </button>
            <div className={`accordion-content ${open ? 'open' : ''}`}>
                <div className="p-4 md:p-5 pt-2 md:pt-2 border-t border-gray-100 bg-white">
                    <div className="flex gap-3 text-sm md:text-base text-subtext leading-relaxed">
                        <span className="text-clover-primary font-bold mt-1">A.</span>{a}
                    </div>
                </div>
            </div>
        </div>
    );
}

import MetaData from '../components/MetaData';

export default function GuidePage() {
    return (
        <div className="animate-fade-in">
            <MetaData title="ご利用案内・料金" description="アイネットデイサービスセンターのご利用案内ページです。要支援・要介護の方へのサービス内容、1日の流れについてもご案内します。" url="guide" />
            {/* PageHeader */}
            <div className="relative w-full h-[400px] flex items-center justify-center text-center">
                <div className="absolute inset-0 z-0">
                    <img src="./hero4.jpg" className="w-full h-full object-cover object-[center_30%]" alt="施設案内" />
                    <div className="absolute inset-0 bg-white/70" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-clover-dark mb-4">ご利用案内</h1>
                    <p className="text-lg text-subtext leading-relaxed font-medium">ご利用対象と流れをご案内します。<br className="hidden md:block" />ご相談・見学は事前にお問い合わせください。</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
                {/* Eligibility */}
                <section className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-wide">ご利用対象</h2>
                        <div className="w-12 h-1 bg-clover-primary mx-auto rounded-full mb-6" />
                        <p className="text-subtext max-w-2xl mx-auto leading-relaxed">
                            介護保険受給者証をお持ちの方を対象としています。<br className="hidden md:inline" />
                            初めての方も、ケアマネジャー様を通してお気軽にご相談ください。
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
                        {/* Card 1 */}
                        <div className="group bg-white rounded-3xl p-8 shadow-sm border border-orange-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300 to-orange-500" />
                            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-orange-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-orange-50 rounded-2xl rotate-3 flex items-center justify-center text-orange-500 mb-6 group-hover:rotate-6 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                </div>
                                <span className="text-orange-500 font-bold tracking-widest text-xs mb-2 uppercase">Support Required</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">要支援 <span className="text-4xl text-orange-500">1・2</span></h3>
                                <div className="w-12 h-0.5 bg-orange-200 my-4" />
                                <p className="text-subtext font-medium">日常生活に支援が必要な方。<br />介護予防サービスとしてご利用いただけます。</p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="group bg-white rounded-3xl p-8 shadow-sm border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-300 to-blue-500" />
                            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-blue-50 rounded-2xl -rotate-3 flex items-center justify-center text-blue-500 mb-6 group-hover:-rotate-6 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>
                                </div>
                                <span className="text-blue-500 font-bold tracking-widest text-xs mb-2 uppercase">Care Required</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">要介護 <span className="text-4xl text-blue-500">1〜5</span></h3>
                                <div className="w-12 h-0.5 bg-blue-200 my-4" />
                                <p className="text-subtext font-medium">介護サービスが必要な方。<br />お一人おひとりに合わせたケアを提供します。</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full border border-gray-100 text-sm text-subtext font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clover-primary"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                            ご状態やご希望により、最適なサービス内容をご提案させていただきます。
                        </div>
                    </div>
                </section>

                {/* Steps */}
                <section className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">ご利用までの流れ</h2>
                        <div className="w-16 h-1 bg-clover-primary mx-auto rounded-full" />
                    </div>
                    <div className="space-y-16">
                        {[
                            { step: 1, img: './consultation.webp', title: 'お問い合わせ・ご相談', desc: 'まずはお電話またはお問い合わせフォームよりご連絡ください。現在の状況やお困りごと、ご希望をお伺いします。', note: '担当のケアマネジャーさんがいらっしゃる場合は、ケアマネジャーさんを通じてご連絡いただいても構いません。', reverse: false },
                            { step: 2, img: './tour.jpg', title: 'ご見学・ご契約', desc: '実際に施設をご覧いただき、雰囲気や設備をご確認ください。サービス内容にご納得いただけましたら、重要事項のご説明を行い、ご契約となります。', bullets: ['無料体験利用も可能です', '送迎の調整も行います'], reverse: true },
                            { step: 3, img: './start.jpg', title: 'ご利用開始', desc: 'いよいよサービス利用スタートです。初回はスタッフが丁寧にご案内しますので、安心してご来所ください。', note: 'ご自宅までお迎えにあがります。持ち物などは事前にご案内いたします。', reverse: false },
                        ].map((s, i) => (
                            <div key={i} className={`flex flex-col ${s.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
                                <div className="w-full md:w-1/2">
                                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-100 relative group">
                                        <div className="absolute top-4 left-4 bg-clover-primary text-white font-bold px-4 py-1 rounded-full shadow-sm z-10">STEP {s.step}</div>
                                        <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h3>
                                    <p className="text-lg text-subtext leading-relaxed mb-4">{s.desc}</p>
                                    {s.note && <p className="text-sm text-subtext bg-clover-light/50 p-4 rounded-lg">{s.note}</p>}
                                    {s.bullets && (
                                        <ul className="space-y-2 text-subtext font-medium">
                                            {s.bullets.map((b, j) => <li key={j} className="flex items-center gap-2"><span className="text-clover-primary">●</span>{b}</li>)}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Visit Info */}
                <section className="mb-24">
                    <div className="bg-[#FDFDFD] rounded-3xl p-8 md:p-12 border-2 border-dashed border-clover-primary/30 relative overflow-hidden text-center group hover:border-clover-primary/50 transition-colors">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-clover-light rounded-full opacity-50 blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-50 rounded-full opacity-50 blur-3xl" />
                        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
                            <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center text-clover-primary mb-6 border border-clover-light relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="m9 16 2 2 4-4" /></svg>
                                <div className="absolute -top-1 -right-1 bg-orange-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">Welcome</div>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">施設見学について</h2>
                            <p className="text-subtext mb-8 leading-relaxed">
                                施設の雰囲気やスタッフの対応、設備の使いやすさなどを実際にご覧いただけます。<br className="hidden md:block" />
                                ご本人様はもちろん、ご家族様だけでの見学も大歓迎です。
                            </p>
                            <div className="bg-white/80 backdrop-blur-sm px-6 py-5 rounded-2xl shadow-sm border border-gray-100 text-left w-full md:w-auto inline-block">
                                <ul className="space-y-4">
                                    {['見学をご希望の場合は、事前にお問い合わせください', '日程やご案内内容は、状況に応じてご相談のうえ調整します', '詳しくは担当ケアマネージャー様にお問い合わせください'].map((t, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-clover-light text-clover-primary flex items-center justify-center flex-shrink-0 mt-0.5"><CheckBullet /></div>
                                            <span className="text-gray-700 font-bold">{t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
                        <span className="text-clover-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg></span> よくあるご質問
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
                    </div>
                </section>
            </div>

            <ContactCtaBand title={<>ご利用や見学については、<br className="md:hidden" />お気軽にお問い合わせください</>} />
        </div>
    );
}
