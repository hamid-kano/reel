import React from 'react';
import { Instagram, Palette, Video, PenTool, Megaphone, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const services = [
    {
      icon: Instagram,
      titleKey: 'socialMedia',
      descKey: 'socialMediaDesc',
      gradient: 'from-pink-400 via-purple-500 to-indigo-600',
      pattern: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
      emoji: '📱',
      shape: 'hexagon'
    },
    {
      icon: Palette,
      titleKey: 'design',
      descKey: 'designDesc',
      gradient: 'from-purple-400 via-pink-500 to-red-500',
      pattern: 'conic-gradient(from 0deg at 50% 50%, rgba(147, 51, 234, 0.3) 0deg, rgba(236, 72, 153, 0.3) 120deg, rgba(239, 68, 68, 0.3) 240deg, rgba(147, 51, 234, 0.3) 360deg)',
      emoji: '🎨',
      shape: 'diamond'
    },
    {
      icon: Video,
      titleKey: 'video',
      descKey: 'videoDesc',
      gradient: 'from-blue-400 via-cyan-500 to-teal-600',
      pattern: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3) 25%, transparent 25%), linear-gradient(-45deg, rgba(6, 182, 212, 0.3) 25%, transparent 25%)',
      emoji: '🎬',
      shape: 'circle'
    },
    {
      icon: PenTool,
      titleKey: 'content',
      descKey: 'contentDesc',
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      pattern: 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.3) 0%, transparent 70%), radial-gradient(ellipse at center, rgba(20, 184, 166, 0.2) 20%, transparent 80%)',
      emoji: '✍️',
      shape: 'triangle'
    },
    {
      icon: Megaphone,
      titleKey: 'campaigns',
      descKey: 'campaignsDesc',
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      pattern: 'repeating-linear-gradient(45deg, rgba(251, 146, 60, 0.3) 0px, rgba(251, 146, 60, 0.3) 10px, transparent 10px, transparent 20px)',
      emoji: '📢',
      shape: 'star'
    },
    {
      icon: BarChart3,
      titleKey: 'analytics',
      descKey: 'analyticsDesc',
      gradient: 'from-teal-400 via-blue-500 to-purple-600',
      pattern: 'linear-gradient(90deg, rgba(20, 184, 166, 0.3) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(147, 51, 234, 0.3) 100%)',
      emoji: '📊',
      shape: 'octagon'
    }
  ];

  return (
    <motion.section 
      id="services"
      className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary-200/20 to-secondary-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-secondary-200/20 to-primary-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('servicesTitle')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('servicesDesc')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.15
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group relative cursor-pointer"
              variants={cardVariants}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
            >
              {/* Glassmorphism Card */}
              <motion.div 
                className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 overflow-hidden h-80 flex flex-col"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                  direction: t('language') === 'ar' ? 'rtl' : 'ltr'
                }}
                whileHover={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)`,
                  borderColor: "rgba(255,255,255,0.3)",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                }}
              >
                {/* Gradient Orb */}
                <motion.div 
                  className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full opacity-20 blur-2xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
                
                {/* Icon Container */}
                <motion.div 
                  className="relative mb-6 flex items-center justify-center"
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                    }}
                    animate={{
                      boxShadow: [
                        "0 10px 25px rgba(0, 0, 0, 0.1)",
                        "0 15px 35px rgba(0, 0, 0, 0.15)",
                        "0 10px 25px rgba(0, 0, 0, 0.1)"
                      ]
                    }}
                    transition={{
                      boxShadow: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }
                    }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Floating Emoji */}
                  <motion.div 
                    className="absolute -top-2 -right-2 text-xl"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.7
                    }}
                  >
                    {service.emoji}
                  </motion.div>
                </motion.div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <motion.h3 
                    className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  >
                    {t(service.titleKey)}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 leading-relaxed mb-6 text-sm flex-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                  >
                    {t(service.descKey)}
                  </motion.p>
                  
                  {/* Minimal Button */}
                  <motion.button 
                    className="text-gray-700 font-medium text-sm flex items-center gap-2 group-hover:text-gray-900 transition-colors mt-auto"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {t('learnMore')}
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
                
                {/* Subtle Glow */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 pointer-events-none`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}