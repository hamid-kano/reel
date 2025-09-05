import React from 'react';
import { Award, Users, Lightbulb, MapPin, Megaphone, TrendingUp, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="about"
      className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* خلفية زخرفية متحركة */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* دوائر متحركة - مخفية على الشاشات الصغيرة */}
        <motion.div 
          className="hidden md:block absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="hidden md:block absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-secondary-300/20 to-primary-300/20 rounded-full blur-2xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* أشكال هندسية متحركة - مخفية على الشاشات الصغيرة */}
        <motion.div 
          className="hidden lg:block absolute top-1/4 right-1/4 w-4 h-4 bg-primary-400 rounded-full"
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="hidden lg:block absolute top-3/4 left-1/3 w-6 h-6 bg-secondary-400 rotate-45"
          animate={{
            rotate: [45, 135, 45],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="hidden lg:block absolute top-1/2 right-1/3 w-3 h-3 bg-primary-500 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.8, 0.4, 0.8]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* خطوط زخرفية - مخفية على الشاشات الصغيرة */}
        <motion.div 
          className="hidden md:block absolute top-20 left-10 w-32 h-0.5 bg-gradient-to-r from-primary-300 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="hidden md:block absolute bottom-32 right-20 w-24 h-0.5 bg-gradient-to-l from-secondary-300 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-full px-6 py-3 mb-6 border border-primary-200/50 shadow-lg backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(124, 58, 237, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Megaphone className="w-5 h-5 text-primary-600" />
              </motion.div>
              <span className="text-primary-700 font-medium">{t('aboutBadge')}</span>
              <motion.div
                className="w-2 h-2 bg-secondary-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 0.4, 0.8]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-gray-900 via-primary-700 to-secondary-600 bg-clip-text text-transparent">
                {t('aboutTitle')}
              </span>
              <motion.div
                className="hidden md:block absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {t('aboutDesc')}
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.5,
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {[
                { icon: Users, title: '14K+', desc: t('clientTrust'), color: 'from-blue-500 to-primary-500' },
                { icon: TrendingUp, title: '93+', desc: t('successfulProjects'), color: 'from-green-500 to-secondary-500' },
                { icon: Star, title: '100%', desc: t('clientSatisfaction'), color: 'from-yellow-500 to-orange-500' },
                { icon: MapPin, title: t('location').split(' - ')[0], desc: t('location').split(' - ')[1], color: 'from-purple-500 to-pink-500' }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4"
                  variants={{
                    hidden: { x: -50, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="hidden md:block absolute inset-0 bg-white/20 rounded-xl"
                      animate={{
                        opacity: [0, 0.2, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.8 }}
                    />
                    <item.icon className="w-6 h-6 text-white relative z-10" />
                  </motion.div>
                  <div>
                    <div className="font-bold text-gray-900">{item.title}</div>
                    <div className="text-gray-600 text-sm">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 5px 15px rgba(37, 99, 235, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              {t('ourStory')}
            </motion.button>
          </motion.div>

          <motion.div 
            className="relative"
            variants={cardVariants}
          >
            {/* عناصر زخرفية حول البطاقة - مخفية على الشاشات الصغيرة */}
            <motion.div 
              className="hidden md:block absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-primary-300/30 to-secondary-300/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="hidden md:block absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-tl from-secondary-400/40 to-primary-400/40 rounded-full blur-lg"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* أيقونات متحركة - مخفية على الشاشات الصغيرة */}
            <motion.div 
              className="hidden lg:block absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-4 h-4 text-yellow-300" />
            </motion.div>
            
            <motion.div 
              className="relative z-10 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 rounded-3xl p-8 text-white shadow-2xl border border-white/10 backdrop-blur-sm overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(124, 58, 237, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* نمط زخرفي داخلي */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </div>
              </div>
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  {t('vision')}
                </h3>
                <motion.p 
                  className="text-primary-100 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {t('visionDesc')}
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-2 gap-4 text-center"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delayChildren: 0.6,
                      staggerChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { value: '2024', label: t('foundingYear') },
                  { value: '24/7', label: t('continuousSupport') }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 10
                        }
                      }
                    }}
                  >
                    <div className="text-2xl font-bold">
                      {item.value}
                    </div>
                    <div className="text-sm text-primary-200">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* تأثيرات الخلفية المحسنة - مخفية على الشاشات الصغيرة */}
            <motion.div 
              className="hidden lg:block absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary-400/30 to-primary-400/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.1, 0.25, 0.1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="hidden lg:block absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-primary-400/25 to-secondary-400/25 rounded-full blur-3xl"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* عناصر إضافية للدعاية والإعلان - مخفية على الشاشات الصغيرة */}
            <motion.div 
              className="hidden xl:flex absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full items-center justify-center shadow-lg"
              animate={{
                x: [-8, 0, -8],
                rotate: [0, 180, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star className="w-4 h-4 text-white" />
            </motion.div>
            
            <motion.div 
              className="hidden xl:flex absolute bottom-1/4 -right-4 w-6 h-6 bg-gradient-to-l from-green-400 to-blue-400 rounded-full items-center justify-center shadow-lg"
              animate={{
                x: [8, 0, 8],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrendingUp className="w-3 h-3 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}