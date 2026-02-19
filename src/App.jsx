import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GuidePage from './pages/GuidePage';
import AccessPage from './pages/AccessPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
    return (
        <>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/guide" element={<GuidePage />} />
                    <Route path="/access" element={<AccessPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </>
    );
}
