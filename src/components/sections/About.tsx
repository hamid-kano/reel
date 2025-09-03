import React from 'react';
import { Award, Users, Lightbulb, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2-auto bg-primary-50 rounded-full px-4 py-2 mb-6">
              <Award className="w-5 h-5 text-primary-600" />
              <span className="text-primary-700 font-medium">من نحن</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              نحن <span className="gradient-text">ريل</span> للدعاية والإعلان
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              شركة رائدة في مجال الدعاية والإعلان الرقمي، نتميز بتقديم حلول إبداعية ومبتكرة 
              تساعد العلامات التجارية على تحقيق أهدافها وبناء حضور قوي في العالم الرقمي.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: Users, title: '14K+ متابع', desc: 'ثقة عملائنا' },
                { icon: Lightbulb, title: '93+ مشروع', desc: 'مشاريع ناجحة' },
                { icon: Award, title: '100%', desc: 'رضا العملاء' },
                { icon: MapPin, title: 'القامشلي', desc: 'مقابل صيدلية حمي' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4-auto">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{item.title}</div>
                    <div className="text-gray-600 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              تعرف على قصتنا
            </button>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                <p className="text-primary-100 leading-relaxed">
                  "الإبداع في قلب الإعلان" - نسعى لأن نكون الشريك الأول للعلامات التجارية 
                  في رحلتها نحو النجاح الرقمي من خلال الإبداع والابتكار.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">2024</div>
                  <div className="text-sm text-primary-200">سنة التأسيس</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-primary-200">دعم مستمر</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}