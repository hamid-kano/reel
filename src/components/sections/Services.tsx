import React from 'react';
import { Instagram, Palette, Video, PenTool, Megaphone, BarChart3 } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Instagram,
      title: 'إدارة السوشيال ميديا',
      description: 'إدارة احترافية لحساباتك على جميع منصات التواصل الاجتماعي',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Palette,
      title: 'التصاميم الإبداعية',
      description: 'تصاميم مبتكرة تعكس هوية علامتك التجارية بأسلوب عصري',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Video,
      title: 'المونتاج والإنتاج',
      description: 'مونتاج احترافي للفيديوهات والإعلانات التجارية',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: PenTool,
      title: 'صناعة المحتوى',
      description: 'محتوى إبداعي يجذب جمهورك ويحقق أهدافك التسويقية',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Megaphone,
      title: 'الحملات الإعلانية',
      description: 'استراتيجيات إعلانية مدروسة لتحقيق أقصى عائد على الاستثمار',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'التحليل والتقارير',
      description: 'تحليل شامل للأداء وتقارير مفصلة لقياس النجاح',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            خدماتنا <span className="gradient-text">المتميزة</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الرقمية المتطورة لتلبية جميع احتياجاتك التسويقية
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
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  اعرف المزيد ←
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}