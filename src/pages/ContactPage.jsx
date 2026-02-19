import React from 'react';
import { Link } from 'react-router-dom';
import PhotoSlider from '../components/PhotoSlider';

import MetaData from '../components/MetaData';

export default function ContactPage() {
    return (
        <div className="animate-fade-in">
            <MetaData title="お問い合わせ" description="アイネットデイサービスセンターへのお問い合わせ・見学のご予約はこちらから。お電話でのご相談も承っております。" url="contact" />
            <div className="bg-clover-light/30 py-12 border-b border-clover-primary/5 text-center">
                <h1 className="text-3xl font-bold text-clover-dark mb-4">お問い合わせ</h1>
                <p className="text-subtext">ご利用や見学のご相談はお気軽にご連絡ください。</p>
            </div>
            <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
                <div className="bg-white rounded-2xl p-8 border border-border shadow-sm text-center mb-12">
                    <h2 className="text-xl font-bold mb-6">お電話でのお問い合わせ</h2>
                    <a href="tel:00-0000-0000" className="inline-flex items-center justify-center gap-4 bg-clover-primary text-white px-8 py-4 rounded-xl font-bold text-2xl hover:bg-clover-dark transition-all shadow-md hover:-translate-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        00-0000-0000
                    </a>
                    <p className="text-xs text-gray-400 mt-4 mb-1 font-bold">※営業電話はお断りします。</p>
                    <div className="mt-4 text-sm text-subtext font-medium leading-relaxed">
                        <p>受付時間：</p>
                        <p>月〜金 9:00-18:00</p>
                        <p>土 9:00-13:00</p>
                    </div>
                </div>
            </div>

            {/* Infinite Photo Slider */}
            <PhotoSlider className="py-10 bg-white border-t border-border" />
        </div>
    );
}
