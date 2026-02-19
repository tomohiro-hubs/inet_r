import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col font-sans text-text antialiased bg-white selection:bg-clover-light selection:text-clover-dark">
            <Header />
            <main className="flex-grow pt-16 md:pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
}