import React, { useState, useCallback } from 'react';
import ContactCtaBand from '../components/ContactCtaBand';

function CopyButton({ text, children }) {
    const [copied, setCopied] = useState(false);
    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }, [text]);

    return (
        <button onClick={handleCopy} className="text-clover-primary hover:text-clover-dark p-1.5 rounded-lg hover:bg-clover-light/50 transition-colors relative ml-2" title="コピー">
            {copied ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-600"><polyline points="20 6 9 17 4 12" /></svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
            )}
        </button>
    );
}

function ImageModal({ src, onClose }) {
    if (!src) return null;
    return (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 transition-opacity duration-300" onClick={onClose}>
            <button className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            <img src={src} alt="拡大画像" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
    );
}

import MetaData from '../components/MetaData';

export default function AccessPage() {
    const [modalImage, setModalImage] = useState(null);

    return (
        <div className="animate-fade-in">
            <MetaData title="施設概要・アクセス" description="大阪市東住吉区西今川にあるアイネットデイサービスセンターの施設概要とアクセス情報。地図、送迎範囲、連絡先をご案内します。" url="access" />
            <ImageModal src={modalImage} onClose={() => setModalImage(null)} />

            {/* PageHeader */}
            <div className="relative w-full h-[400px] flex items-center justify-center text-center">
                <div className="absolute inset-0 z-0">
                    <img src={`${import.meta.env.BASE_URL}real_exterior.jpg`} className="w-full h-full object-cover" alt="施設外観" />
                    <div className="absolute inset-0 bg-white/70" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-clover-dark mb-4">施設概要・アクセス</h1>
                    <p className="text-lg text-subtext leading-relaxed font-medium">基本情報、所在地、送迎対応エリアをご案内します。</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
                {/* SummaryCards */}
                <section className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-border shadow-sm text-center flex flex-col items-center">
                        <div className="w-12 h-12 bg-clover-light text-clover-primary rounded-full flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </div>
                        <div className="text-sm font-bold text-gray-500">定員</div>
                        <div className="text-lg font-bold text-clover-dark">21名</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-border shadow-sm text-center flex flex-col items-center">
                        <div className="w-12 h-12 bg-clover-light text-clover-primary rounded-full flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                        <div className="text-sm font-bold text-gray-500">提供時間</div>
                        <div className="text-lg font-bold text-clover-dark">到着から3時間</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-border shadow-sm text-center flex flex-col items-center">
                        <div className="w-12 h-12 bg-clover-light text-clover-primary rounded-full flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                        </div>
                        <div className="text-sm font-bold text-gray-500">営業日時</div>
                        <div className="text-lg font-bold text-clover-dark grid grid-cols-[auto_1fr] gap-x-3 text-left w-fit mx-auto">
                            <span>月〜金</span><span>9:00-18:00</span>
                            <span>土</span><span>9:00-13:00</span>
                        </div>
                    </div>
                </section>

                {/* FacilityProfile */}
                <section className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                        <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100">施設概要</h2>
                        <dl className="space-y-6">
                            {[
                                { dt: '事業所名', dd: 'アイネットデイサービスセンター' },
                                { dt: '運営法人', dd: '株式会社ココロミ' },
                                { dt: '施設長（管理者）', dd: '西川　賢治' },
                                { dt: '所在地', dd: '大阪市東住吉区西今川１丁目14-23', copy: true },
                                { dt: '連絡先', dd: '電話：00-0000-0000／FAX：06-6713-1315', copyText: '00-0000-0000' },
                                { dt: 'サービス', dd: '半日（3時間）／送迎／入浴（銭湯方式）／運動（マシン・認知機能アプローチ体操・他）／提携美容院' },
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <dt className="text-xs font-bold text-subtext mb-1">{item.dt}</dt>
                                    <dd className="text-base md:text-lg font-medium text-gray-900 flex items-center flex-wrap">
                                        {item.dd}
                                        {(item.copy || item.copyText) && <CopyButton text={item.copyText || item.dd} />}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className="hidden md:block">
                        <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-md bg-gray-100 border border-border">
                            <img src={`${import.meta.env.BASE_URL}real_exterior.jpg`} alt="施設外観" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                    </div>
                </section>

                {/* FacilityIntroduction */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">施設紹介</h2>
                        <div className="h-1 flex-grow bg-clover-light rounded-full" />
                    </div>
                    <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm flex flex-col md:flex-row">
                        <div className="md:w-3/5 aspect-video md:aspect-auto relative min-h-[300px] cursor-pointer group" onClick={() => setModalImage(import.meta.env.BASE_URL + 'facility.png')}>
                            <img src={`${import.meta.env.BASE_URL}facility.png`} alt="明るく開放的なデイルームの全景" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <span className="bg-white/90 text-gray-700 px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 duration-300 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6" /><path d="M8 11h6" /></svg>
                                    拡大して見る
                                </span>
                            </div>
                        </div>
                        <div className="p-6 md:p-10 md:w-2/5 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-clover-dark mb-4">明るく開放的なデイルーム</h3>
                            <p className="text-subtext leading-relaxed mb-6">
                                窓から自然光が差し込む、広々としたデイルームです。ここでは、機能訓練やレクリエーション、お食事など、ご利用者様同士の交流を楽しみながら一日をお過ごしいただけます。
                                <br /><br />
                                床は段差のないバリアフリー設計となっており、車椅子の方も安心して移動していただけます。
                            </p>
                            <ul className="space-y-3">
                                {['定員21名のゆったり空間', '全面バリアフリー', '清潔な空調管理'].map((t, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-clover-primary" />
                                        <span className="text-gray-700 font-medium">{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* LocationMap */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">アクセス</h2>
                        <a href="https://www.google.com/maps/search/?api=1&query=大阪市東住吉区西今川１丁目14-23" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-clover-primary hover:text-clover-dark flex items-center gap-1">
                            Google Mapで見る
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                        </a>
                    </div>
                    <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm">
                        <div className="aspect-video w-full bg-gray-100 relative">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.670387435093!2d135.5362!3d34.6365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM4JzExLjQiTiAxMzXCsDMyJzEwLjMiRQ!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0" title="Google Map" />
                        </div>
                        <div className="p-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                            <p className="text-subtext">地図が表示されない場合は、右上のリンクからご確認ください。</p>
                            <CopyButton text="大阪市東住吉区西今川１丁目14-23">住所をコピー</CopyButton>
                        </div>
                    </div>
                </section>

                {/* PickupArea */}
                <section className="mb-24">
                    <div className="bg-green-50/50 rounded-3xl p-8 md:p-12 border border-clover-primary/10 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#2F7D32 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="md:w-3/5">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-clover-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">送迎対応エリア</h2>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-clover-light mb-6">
                                    <p className="text-lg font-bold text-clover-dark mb-2 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                        大阪市東住吉区、平野区、阿倍野区、天王寺区周辺
                                    </p>
                                    <p className="text-subtext text-sm">※ 範囲の詳細は個別にご案内しております</p>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    ご自宅の場所や当日の交通状況、他の利用者様との兼ね合いにより、対応可否や送迎時間が異なる場合がございます。
                                </p>
                                <p className="text-sm text-clover-dark font-bold bg-white/60 inline-block px-4 py-2 rounded-lg">
                                    「うちは送迎してもらえる？」など、まずはお気軽にご相談ください。
                                </p>
                            </div>
                            <div className="md:w-2/5">
                                <div className="aspect-square rounded-full border-4 border-white shadow-lg overflow-hidden relative z-10 group">
                                    <img src={`${import.meta.env.BASE_URL}pickuparea.jpg`} alt="送迎車" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <ContactCtaBand />
        </div>
    );
}
