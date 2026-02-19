import React from 'react';
import ContactCtaBand from '../components/ContactCtaBand';

export default function PrivacyPage() {
    return (
        <div className="animate-fade-in">
            <div className="bg-clover-light/30 py-12 border-b border-clover-primary/5 text-center">
                <h1 className="text-3xl font-bold text-clover-dark mb-4">プライバシーポリシー</h1>
                <p className="text-subtext">個人情報の取り扱いについて</p>
            </div>
            <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
                <div className="prose prose-green max-w-none text-gray-700">
                    <p>アイネットデイサービスセンター（以下「当事業所」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">個人情報の管理</h3>
                    <p>当事業所は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">個人情報の利用目的</h3>
                    <p>お客さまからお預かりした個人情報は、当事業所からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。</p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">個人情報の第三者への開示・提供の禁止</h3>
                    <p>当事業所は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
                    <ul className="list-disc pl-5 my-4 space-y-2">
                        <li>お客さまの同意がある場合</li>
                        <li>お客さまが希望されるサービスを行なうために当事業所が業務を委託する業者に対して開示する場合</li>
                        <li>法令に基づき開示することが必要である場合</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">法令、規範の遵守と見直し</h3>
                    <p>当事業所は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>
                </div>
            </div>

            <ContactCtaBand title="ご不明な点はお気軽にお問い合わせください" />
        </div>
    );
}
