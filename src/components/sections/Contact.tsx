import React from 'react';
import { Phone, MapPin, MessageCircle, Send, Instagram, Facebook } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            تواصل <span className="gradient-text bg-gradient-to-r from-secondary-400 to-white bg-clip-text text-transparent">معنا</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            لا تتردد في التواصل معنا لأي استفسار أو لبدء مشروعك القادم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">هاتف</div>
                    <div className="text-gray-300 direction-ltr">0996050284</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">العنوان</div>
                    <div className="text-gray-300">القامشلي - مقابل صيدلية حمي</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">إنستغرام</div>
                    <div className="text-gray-300">@reel_4ads</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-secondary-400 font-bold text-lg mb-2">
                    "ريل: الإبداع في قلب الإعلان"
                  </div>
                  <div className="text-gray-400 text-sm">
                    نقدم لك حلولاً إبداعية لنجاح علامتك التجارية
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">أرسل رسالة</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="الاسم"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary-400 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="رقم الهاتف"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary-400 transition-colors"
                />
              </div>
              
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary-400 transition-colors"
              />
              
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-secondary-400 transition-colors">
                <option value="">اختر الخدمة</option>
                <option value="social">إدارة السوشيال ميديا</option>
                <option value="design">التصاميم الإبداعية</option>
                <option value="video">المونتاج والإنتاج</option>
                <option value="content">صناعة المحتوى</option>
                <option value="ads">الحملات الإعلانية</option>
              </select>
              
              <textarea
                rows={4}
                placeholder="اكتب رسالتك هنا..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary-400 transition-colors resize-none"
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>إرسال الرسالة</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}