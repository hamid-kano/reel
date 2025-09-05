import React, { useState, useEffect } from 'react';
import { CheckCircle, TrendingUp, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export function ProjectSuccess() {
  const { t } = useLanguage();
  
  const [animatedValues, setAnimatedValues] = useState({
    projectSuccess: 0,
    clientRetention: 0,
    onTimeDelivery: 0,
    qualityScore: 0
  });

  const finalValues = {
    projectSuccess: 96,
    clientRetention: 89,
    onTimeDelivery: 94,
    qualityScore: 98
  };

  useEffect(() => {
    const animateValues = () => {
      const duration = 2500;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedValues({
          projectSuccess: Math.floor(finalValues.projectSuccess * progress),
          clientRetention: Math.floor(finalValues.clientRetention * progress),
          onTimeDelivery: Math.floor(finalValues.onTimeDelivery * progress),
          qualityScore: Math.floor(finalValues.qualityScore * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setAnimatedValues(finalValues);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateValues, 800);
    return () => clearTimeout(timer);
  }, []);

  const successMetrics = [
    {
      icon: CheckCircle,
      titleAr: 'معدل نجاح المشاريع',
      titleEn: 'Project Success Rate',
      value: animatedValues.projectSuccess,
      color: 'from-primary-400 to-primary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600'
    },
    {
      icon: TrendingUp,
      titleAr: 'الاحتفاظ بالعملاء',
      titleEn: 'Client Retention',
      value: animatedValues.clientRetention,
      color: 'from-secondary-400 to-secondary-600',
      bgColor: 'bg-secondary-50',
      iconColor: 'text-secondary-600'
    },
    {
      icon: Target,
      titleAr: 'التسليم في الوقت',
      titleEn: 'On-Time Delivery',
      value: animatedValues.onTimeDelivery,
      color: 'from-primary-500 to-secondary-500',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-700'
    },
    {
      icon: Award,
      titleAr: 'درجة الجودة',
      titleEn: 'Quality Score',
      value: animatedValues.qualityScore,
      color: 'from-secondary-500 to-primary-500',
      bgColor: 'bg-secondary-50',
      iconColor: 'text-secondary-700'
    }
  ];

  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* خلفيات متحركة وتدرجات */}
      <motion.div 
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-l from-secondary-300/20 to-primary-300/20 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('language') === 'ar' ? 'معدل نجاح مشاريعنا' : 'Our Project Success Rate'}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('language') === 'ar' 
              ? 'نفخر بمعدلات النجاح العالية التي حققناها مع عملائنا عبر جميع المشاريع'
              : 'We pride ourselves on the high success rates achieved with our clients across all projects'
            }
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className={`${metric.bgColor} rounded-3xl p-8 relative overflow-hidden group cursor-pointer shadow-lg border border-white/50`}
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -15,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              {/* تأثير الخلفية المتدرجة */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              />
              
              <motion.div 
                className={`w-16 h-16 ${metric.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                <metric.icon className={`w-8 h-8 ${metric.iconColor}`} />
              </motion.div>

              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200"
                  />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke={`url(#gradient-${index})`}
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    className="drop-shadow-sm"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: metric.value / 100 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.3 + 0.5,
                      duration: 2,
                      ease: "easeOut"
                    }}
                  />
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={
                        metric.iconColor.includes('primary') ? '#7c3aed' : '#22c55e'
                      } />
                      <stop offset="100%" stopColor={
                        metric.iconColor.includes('primary') ? '#5b21b6' : '#16a34a'
                      } />
                    </linearGradient>
                  </defs>
                </svg>
                
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.3 + 1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <motion.span 
                    className={`text-3xl font-bold ${metric.iconColor}`}
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(0, 0, 0, 0.1)",
                        "0 0 20px rgba(0, 0, 0, 0.2)",
                        "0 0 10px rgba(0, 0, 0, 0.1)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {metric.value}%
                  </motion.span>
                </motion.div>
              </div>

              {/* نقاط متحركة في الزاوية */}
              <motion.div 
                className="absolute top-4 right-4 flex gap-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.6 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full ${metric.iconColor.replace('text-', 'bg-')}`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </motion.div>

              {/* خطوط زخرفية متحركة */}
              <motion.div 
                className="absolute bottom-4 left-4 w-8 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-30"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />

              <motion.h3 
                className="text-lg font-bold text-gray-800 text-center group-hover:text-gray-900 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
              >
                {t('language') === 'ar' ? metric.titleAr : metric.titleEn}
              </motion.h3>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-2xl mx-auto border border-primary-100 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(124, 58, 237, 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* تأثير الخلفية المتحركة */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-100/50 to-secondary-100/50"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative z-10">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('language') === 'ar' ? 'انضم إلى عملائنا الناجحين' : 'Join Our Successful Clients'}
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t('language') === 'ar' 
                ? 'كن جزءاً من قصص النجاح التي نحققها يومياً مع شركائنا'
                : 'Be part of the success stories we create daily with our partners'
              }
            </motion.p>
            <motion.button 
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(124, 58, 237, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t('language') === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
            </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}