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
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Palette,
      titleKey: 'design',
      descKey: 'designDesc',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Video,
      titleKey: 'video',
      descKey: 'videoDesc',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: PenTool,
      titleKey: 'content',
      descKey: 'contentDesc',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Megaphone,
      titleKey: 'campaigns',
      descKey: 'campaignsDesc',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      titleKey: 'analytics',
      descKey: 'analyticsDesc',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <motion.section 
      id="services"
      className="py-20 bg-gray-50"
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
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}
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
                    delay: index * 0.5
                  }
                }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                {t(service.titleKey)}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              >
                {t(service.descKey)}
              </motion.p>
              
              <motion.div 
                className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.button 
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {t('learnMore')} ←
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}