import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactCtaBand({ title, subtitle }) {
    return (
        <section className="bg-[#EAF6EA] py-16 md:py-24 text-center border-t border-clover-primary/10">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-clover-dark mb-4 leading-tight">
                    {title || <>ご不明な点はお気軽に<br className="md:hidden" />お問い合わせください</>}
                </h2>
                <p className="text-gray-600 mb-10 text-base md:text-lg leading-relaxed">
                    {subtitle || <>状況に応じて、必要な情報や手順をご案内します<br className="hidden md:block" />まずはお気軽にお電話ください。</>}
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch">
                    <a href="tel:00-0000-0000" className="bg-white px-8 py-4 rounded-xl shadow-sm flex items-center justify-center gap-4 border-2 border-transparent hover:border-clover-primary/30 transition-all group">
                        <div className="w-10 h-10 rounded-full bg-clover-light flex items-center justify-center group-hover:scale-110 transition-transform text-clover-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-subtext font-bold">お電話でのお問い合わせ</p>
                            <p className="text-xl font-bold text-gray-900 font-mono tracking-tight">00-0000-0000</p>
                        </div>
                    </a>
                    <Link to="/contact" className="bg-clover-primary hover:bg-clover-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                        お問い合わせ
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
