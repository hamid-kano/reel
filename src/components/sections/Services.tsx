import React from 'react';
import { Instagram, Palette, Video, PenTool, Megaphone, BarChart3 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Instagram,
      titleKey: 'socialMedia',
      descKey: 'socialMediaDesc',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Palette,
      titleKey: 'design',
      descKey: 'designDesc',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Video,
      titleKey: 'video',
      descKey: 'videoDesc',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: PenTool,
      titleKey: 'content',
      descKey: 'contentDesc',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Megaphone,
      titleKey: 'campaigns',
      descKey: 'campaignsDesc',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      titleKey: 'analytics',
      descKey: 'analyticsDesc',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('servicesDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {t(service.titleKey)}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {t(service.descKey)}
              </p>
              
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  {t('learnMore')} ←
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}