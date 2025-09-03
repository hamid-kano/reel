import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Clients() {
  const { t } = useLanguage();

  const clients = [
    { name: 'شركة النور', logo: '/api/placeholder/120/60' },
    { name: 'مطعم الذوق الرفيع', logo: '/api/placeholder/120/60' },
    { name: 'متجر الأناقة', logo: '/api/placeholder/120/60' },
    { name: 'مركز الصحة', logo: '/api/placeholder/120/60' },
    { name: 'شركة التقنية', logo: '/api/placeholder/120/60' },
    { name: 'معهد التعليم', logo: '/api/placeholder/120/60' },
    { name: 'مجموعة الاستثمار', logo: '/api/placeholder/120/60' },
    { name: 'شركة البناء', logo: '/api/placeholder/120/60' }
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-6 flex items-center justify-center hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-24 h-12 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-lg flex items-center justify-center group-hover:from-primary-300 group-hover:to-secondary-300 transition-all duration-300">
                <span className="text-primary-700 font-bold text-sm text-center">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
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