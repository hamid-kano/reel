import React from 'react';
import { Play, Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2-auto mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text bg-gradient-to-r from-secondary-400 to-white bg-clip-text text-transparent">REEL</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              شركة ريل للدعاية والإعلان - نقدم حلولاً إبداعية متكاملة لإدارة السوشيال ميديا، 
              التصاميم، المونتاج وصناعة المحتوى.
            </p>
            
            <div className="text-secondary-400 font-semibold mb-4">
              "ريل: الإبداع في قلب الإعلان"
            </div>
            
            <div className="flex space-x-4-auto">
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {['الرئيسية', 'خدماتنا', 'أعمالنا', 'من نحن', 'تواصل معنا'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">معلومات التواصل</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <span className="text-gray-300">0996050284</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <span className="text-gray-300">القامشلي - مقابل صيدلية حمي</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <span className="text-gray-300">@reel_4ads</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ريل للدعاية والإعلان. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}