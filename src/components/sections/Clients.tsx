import React from 'react';
import { Building2, ShoppingBag, Utensils, Heart, Laptop, GraduationCap, TrendingUp, Hammer } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Clients() {
  const { t } = useLanguage();

  const clients = [
    { nameAr: 'شركة النور', nameEn: 'Al Nour Company', icon: Building2, color: 'from-blue-500 to-blue-600' },
    { nameAr: 'مطعم الذوق الرفيع', nameEn: 'Fine Taste Restaurant', icon: Utensils, color: 'from-orange-500 to-red-500' },
    { nameAr: 'متجر الأناقة', nameEn: 'Elegance Store', icon: ShoppingBag, color: 'from-pink-500 to-purple-500' },
    { nameAr: 'مركز الصحة', nameEn: 'Health Center', icon: Heart, color: 'from-green-500 to-emerald-500' },
    { nameAr: 'شركة التقنية', nameEn: 'Tech Company', icon: Laptop, color: 'from-indigo-500 to-blue-500' },
    { nameAr: 'معهد التعليم', nameEn: 'Education Institute', icon: GraduationCap, color: 'from-yellow-500 to-orange-500' },
    { nameAr: 'مجموعة الاستثمار', nameEn: 'Investment Group', icon: TrendingUp, color: 'from-teal-500 to-cyan-500' },
    { nameAr: 'شركة البناء', nameEn: 'Construction Company', icon: Hammer, color: 'from-gray-600 to-gray-700' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('clientsTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('clientsDesc')}
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {clients.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${client.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm group-hover:text-primary-600 transition-colors">
                    {t('language') === 'ar' ? client.nameAr : client.nameEn}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">{t('happyClients')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-primary-100">{t('projectsDelivered')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-primary-100">{t('satisfactionRate')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">{t('support')}</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('joinClientsTitle')}
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('joinClientsDesc')}
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            {t('startProject')}
          </button>
        </div>
      </div>
    </section>
  );
}