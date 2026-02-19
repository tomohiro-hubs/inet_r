import React from 'react';
import { Link } from 'react-router-dom';

import MetaData from '../components/MetaData';

export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center min-h-[60vh] px-4 animate-fade-in">
            <MetaData title="ページが見つかりません" description="お探しのページは見つかりませんでした。" noindex={true} />
            <div className="text-center">
                <h1 className="text-6xl font-bold text-clover-primary mb-4">404</h1>
                <p className="text-xl text-gray-700 mb-2">ページが見つかりませんでした</p>
                <p className="text-subtext mb-8">お探しのページは存在しないか、移動した可能性があります。</p>
                <Link to="/" className="bg-clover-primary hover:bg-clover-dark text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg">
                    ホームに戻る
                </Link>
            </div>
        </div>
    );
}
