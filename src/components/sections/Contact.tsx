import React from 'react';
import { Phone, MapPin, MessageCircle, Send, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export function Contact() {
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
    hidden: { scale: 0.9, opacity: 0 },
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
      id="contact"
      className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-primary-900 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-900 to-gray-900 opacity-50"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16 relative z-10" variants={itemVariants}>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('contactTitle')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('contactDesc')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={cardVariants}>
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t('contactInfo')}
              </motion.h3>
              
              <motion.div 
                className="space-y-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delayChildren: 0.3,
                      staggerChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Phone, title: t('phone'), value: '0996050284', color: 'bg-secondary-500' },
                  { icon: MapPin, title: t('address'), value: t('location'), color: 'bg-primary-500' },
                  { icon: Instagram, title: 'إنستغرام', value: '@reel_4ads', color: 'bg-pink-500' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4"
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
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360,
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-white font-semibold">{item.title}</div>
                      <div className="text-gray-300">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="mt-8 pt-6 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-secondary-400 font-bold text-lg mb-2"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(74, 222, 128, 0.5)",
                        "0 0 20px rgba(74, 222, 128, 0.8)",
                        "0 0 10px rgba(74, 222, 128, 0.5)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    "{t('slogan')}"
                  </motion.div>
                  <div className="text-gray-400 text-sm">
                    {t('heroDescription')}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('sendMessage')}
            </motion.h3>
            
            <motion.form 
              className="space-y-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {[t('name'), t('phoneNumber')].map((placeholder, index) => (
                  <motion.input
                    key={index}
                    type={index === 1 ? 'tel' : 'text'}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary-400 transition-colors"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.6 }
                      }
                    }}
                    whileFocus={{ 
                      scale: 1.02,
                      borderColor: "rgb(74 222 128)",
                      boxShadow: "0 0 20px rgba(74, 222, 128, 0.3)"
                    }}
                  />
                ))}
              </motion.div>
              
              <motion.input
                type="email"
                placeholder={t('email')}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary-400 transition-colors"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 }
                  }
                }}
                whileFocus={{ 
                  scale: 1.02,
                  borderColor: "rgb(74 222 128)",
                  boxShadow: "0 0 20px rgba(74, 222, 128, 0.3)"
                }}
              />
              
              <motion.select 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-secondary-400 transition-colors"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 }
                  }
                }}
                whileFocus={{ 
                  scale: 1.02,
                  borderColor: "rgb(74 222 128)",
                  boxShadow: "0 0 20px rgba(74, 222, 128, 0.3)"
                }}
              >
                <option value="">{t('selectService')}</option>
                <option value="social">{t('socialMedia')}</option>
                <option value="design">{t('design')}</option>
                <option value="video">{t('video')}</option>
                <option value="content">{t('content')}</option>
                <option value="ads">{t('campaigns')}</option>
              </motion.select>
              
              <motion.textarea
                rows={4}
                placeholder={t('message')}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary-400 transition-colors resize-none"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 }
                  }
                }}
                whileFocus={{ 
                  scale: 1.02,
                  borderColor: "rgb(74 222 128)",
                  boxShadow: "0 0 20px rgba(74, 222, 128, 0.3)"
                }}
              />
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(74, 222, 128, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 5px 15px rgba(74, 222, 128, 0.3)",
                    "0 10px 25px rgba(74, 222, 128, 0.5)",
                    "0 5px 15px rgba(74, 222, 128, 0.3)"
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
                <span>{t('send')}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Send className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}