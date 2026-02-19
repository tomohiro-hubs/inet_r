import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function MetaData({ title, description, url, noindex }) {
    const siteTitle = 'アイネットデイサービスセンター';
    const siteUrl = 'https://tomohiro-hubs.github.io/inet_r/';
    const defaultDescription = '地域密着型、半日（3時間）のリハビリ型デイサービス。送迎・入浴・運動・提携美容院サービスを提供しています。';

    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const desc = description || defaultDescription;
    const currentUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={desc} />
            {noindex && <meta name="robots" content="noindex" />}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={desc} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={`${siteUrl}hero.jpg`} />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
}
