import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      nameAr: 'أحمد محمد',
      nameEn: 'Ahmed Mohammed',
      positionAr: 'مدير تسويق - شركة النور',
      positionEn: 'Marketing Manager - Al Nour Company',
      reviewAr: 'فريق ريل محترف جداً، ساعدونا في تطوير حضورنا الرقمي بشكل مذهل. النتائج فاقت توقعاتنا بكثير.',
      reviewEn: 'Reel team is very professional, they helped us develop our digital presence amazingly. Results exceeded our expectations.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      nameAr: 'سارة أحمد',
      nameEn: 'Sara Ahmed',
      positionAr: 'صاحبة مطعم الذوق الرفيع',
      positionEn: 'Owner of Fine Taste Restaurant',
      reviewAr: 'إدارة حساباتنا على السوشيال ميديا أصبحت أكثر احترافية، وزاد عدد العملاء بشكل ملحوظ.',
      reviewEn: 'Managing our social media accounts became more professional, and the number of customers increased significantly.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      nameAr: 'محمد علي',
      nameEn: 'Mohammed Ali',
      positionAr: 'مؤسس متجر الأناقة',
      positionEn: 'Founder of Elegance Store',
      reviewAr: 'التصاميم الإبداعية والمحتوى المميز ساعدنا في الوصول لجمهور أوسع وتحقيق مبيعات أفضل.',
      reviewEn: 'Creative designs and distinctive content helped us reach a wider audience and achieve better sales.',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonialsDesc')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-primary-200">
              <Quote className="w-16 h-16" />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonials[currentIndex].rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{t('language') === 'ar' ? testimonials[currentIndex].reviewAr : testimonials[currentIndex].reviewEn}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4-auto">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {(t('language') === 'ar' ? testimonials[currentIndex].nameAr : testimonials[currentIndex].nameEn).charAt(0)}
                </div>
                <div className="text-start">
                  <div className="font-bold text-gray-900">
                    {t('language') === 'ar' ? testimonials[currentIndex].nameAr : testimonials[currentIndex].nameEn}
                  </div>
                  <div className="text-gray-600">
                    {t('language') === 'ar' ? testimonials[currentIndex].positionAr : testimonials[currentIndex].positionEn}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4-auto">
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-primary-600" />
            </button>
            
            <div className="flex space-x-2-auto">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-primary-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}