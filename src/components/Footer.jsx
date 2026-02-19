import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="mb-4">
                            <img src={`${import.meta.env.BASE_URL}logo_new.jpg`} alt="アイネットデイサービスセンター" className="h-12 w-auto object-contain" />
                        </div>
                        <p className="text-sm text-subtext">通常規模型　通所介護　デイサービス<br />〒546-0042 大阪市東住吉区西今川１丁目14-23<br />TEL: 00-0000-0000</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/contact" className="text-sm font-medium text-subtext hover:text-clover-primary transition-colors">お問い合わせ</Link>
                        <Link to="/privacy" className="text-sm font-medium text-subtext hover:text-clover-primary transition-colors">プライバシーポリシー</Link>
                        <Link to="/guide" className="text-sm font-medium text-subtext hover:text-clover-primary transition-colors">ご利用案内</Link>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-400">&copy; 2026 Ai-Net Day Service Imagawa. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}