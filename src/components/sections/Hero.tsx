import React from 'react';
import { ArrowLeft, Sparkles, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export function Hero() {
  const { t, dir, language } = useLanguage();
  
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-secondary-400/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 ${
        language === 'ar' ? 'font-ar' : 'font-en'
      }`}>
        <motion.div variants={itemVariants}>
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-secondary-400" />
              </motion.div>
              <span className="text-white font-medium">{t('slogan')}</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight ${
              language === 'ar' ? 'font-ar' : 'font-en'
            }`}
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {t('heroTitle')}
            </motion.span>
            <motion.span 
              className="block mt-3 mb-6 md:mt-4 md:mb-8" 
              style={{
                background: 'linear-gradient(135deg, #4ADE80, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.3',
                paddingBottom: '0.2em'
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {t('heroSubtitle')}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed px-4"
            variants={itemVariants}
          >
            {t('heroDescription')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.button 
            className="group bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(74, 222, 128, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(74, 222, 128, 0.3)",
                "0 0 30px rgba(74, 222, 128, 0.5)",
                "0 0 20px rgba(74, 222, 128, 0.3)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <span className="flex items-center gap-2">
              <span>{t('startProject')}</span>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>
          
          <motion.button 
            className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            {t('viewWork')}
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto mt-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 1.5,
                staggerChildren: 0.3
              }
            }
          }}
        >
          {[
            { icon: Target, number: '93+', labelKey: 'projectsCompleted' as const },
            { icon: Zap, number: '14K+', labelKey: 'happyFollowers' as const },
            { icon: Sparkles, number: '100%', labelKey: 'clientSatisfaction' as const }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center px-4"
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4"
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  rotate: 360 
                }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-secondary-400" />
              </motion.div>
              <motion.div 
                className="text-2xl sm:text-3xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 + index * 0.3, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm sm:text-base text-primary-200">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}