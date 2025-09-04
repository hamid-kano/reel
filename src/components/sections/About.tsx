import React from 'react';
import { Award, Users, Lightbulb, MapPin } from 'lucide-react';
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
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Award className="w-5 h-5 text-primary-600" />
              </motion.div>
              <span className="text-primary-700 font-medium">{t('aboutBadge')}</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              variants={itemVariants}
            >
              {t('aboutTitle')}
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
                { icon: Users, title: '14K+', desc: t('clientTrust') },
                { icon: Lightbulb, title: '93+', desc: t('successfulProjects') },
                { icon: Award, title: '100%', desc: t('clientSatisfaction') },
                { icon: MapPin, title: t('location').split(' - ')[0], desc: t('location').split(' - ')[1] }
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
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ 
                      backgroundColor: "rgb(239 246 255)",
                      rotate: 360 
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-6 h-6 text-primary-600" />
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
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {t('ourStory')}
            </motion.button>
          </motion.div>

          <motion.div 
            className="relative"
            variants={cardVariants}
          >
            <motion.div 
              className="relative z-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl p-8 text-white"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-4"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(255, 255, 255, 0.5)",
                      "0 0 20px rgba(255, 255, 255, 0.8)",
                      "0 0 10px rgba(255, 255, 255, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {t('vision')}
                </motion.h3>
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
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.2)"
                    }}
                  >
                    <motion.div 
                      className="text-2xl font-bold"
                      animate={{ 
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      {item.value}
                    </motion.div>
                    <div className="text-sm text-primary-200">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}