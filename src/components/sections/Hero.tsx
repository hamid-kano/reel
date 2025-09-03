import React from 'react';
import { ArrowLeft, Sparkles, Zap, Target } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-in-left">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-secondary-400" />
              <span className="text-white font-medium">الإبداع في قلب الإعلان</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            نحول أفكارك إلى
            <span className="block gradient-text bg-gradient-to-r from-secondary-400 to-white bg-clip-text text-transparent">
              إبداع رقمي
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            شركة ريل للدعاية والإعلان - نقدم حلولاً إبداعية متكاملة لإدارة السوشيال ميديا، التصاميم، المونتاج وصناعة المحتوى
          </p>
        </div>

        <div className="animate-slide-in-right flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-glow">
            <span className="flex items-center space-x-2">
              <span>ابدأ مشروعك الآن</span>
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
            تصفح أعمالنا
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Target, number: '93+', label: 'مشروع منجز' },
            { icon: Zap, number: '14K+', label: 'متابع راضي' },
            { icon: Sparkles, number: '100%', label: 'رضا العملاء' }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-slide-in-left" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-secondary-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-primary-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}