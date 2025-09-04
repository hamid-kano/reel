import React from 'react';
import { Building2, ShoppingBag, Utensils, Heart, Laptop, GraduationCap, TrendingUp, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export function Clients() {
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

  const clients = [
    { nameAr: 'شركة النور', nameEn: 'Al Nour Company', icon: Building2, color: 'from-blue-500 to-blue-600' },
    { nameAr: 'مطعم الذوق الرفيع', nameEn: 'Fine Taste Restaurant', icon: Utensils, color: 'from-orange-500 to-red-500' },
    { nameAr: 'متجر الأناقة', nameEn: 'Elegance Store', icon: ShoppingBag, color: 'from-pink-500 to-purple-500' },
    { nameAr: 'مركز الصحة', nameEn: 'Health Center', icon: Heart, color: 'from-green-500 to-emerald-500' },
    { nameAr: 'شركة التقنية', nameEn: 'Tech Company', icon: Laptop, color: 'from-indigo-500 to-blue-500' },
    { nameAr: 'معهد التعليم', nameEn: 'Education Institute', icon: GraduationCap, color: 'from-yellow-500 to-orange-500' },
    { nameAr: 'مجموعة الاستثمار', nameEn: 'Investment Group', icon: TrendingUp, color: 'from-teal-500 to-cyan-500' },
    { nameAr: 'شركة البناء', nameEn: 'Construction Company', icon: Hammer, color: 'from-gray-600 to-gray-700' }
  ];

  return (
    <motion.section 
      className="pt-32 pb-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('clientsTitle')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('clientsDesc')}
          </motion.p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
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
          {clients.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer"
                variants={{
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
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-center">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${client.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(0, 0, 0, 0.1)",
                        "0 0 30px rgba(0, 0, 0, 0.2)",
                        "0 0 20px rgba(0, 0, 0, 0.1)"
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
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="font-semibold text-gray-800 text-sm group-hover:text-primary-600 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  >
                    {t('language') === 'ar' ? client.nameAr : client.nameEn}
                  </motion.h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 opacity-50"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative z-10"
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
              { value: '50+', labelKey: 'happyClients' },
              { value: '200+', labelKey: 'projectsDelivered' },
              { value: '98%', labelKey: 'satisfactionRate' },
              { value: '24/7', labelKey: 'support' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
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
                <motion.div 
                  className="text-4xl md:text-5xl font-bold mb-2"
                  animate={{
                    scale: [1, 1.1, 1],
                    textShadow: [
                      "0 0 10px rgba(255, 255, 255, 0.5)",
                      "0 0 20px rgba(255, 255, 255, 0.8)",
                      "0 0 10px rgba(255, 255, 255, 0.5)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  {stat.value}
                </motion.div>
                <motion.div 
                  className="text-primary-100"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  {t(stat.labelKey)}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('joinClientsTitle')}
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('joinClientsDesc')}
          </motion.p>
          <motion.button 
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(37, 99, 235, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 5px 15px rgba(37, 99, 235, 0.3)",
                "0 10px 25px rgba(37, 99, 235, 0.5)",
                "0 5px 15px rgba(37, 99, 235, 0.3)"
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
            {t('startProject')}
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}