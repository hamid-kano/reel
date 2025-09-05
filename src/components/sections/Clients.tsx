import React, { useState, useEffect } from 'react';
import { Users, Award, Clock, Star, Heart, TrendingUp } from 'lucide-react';
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

  const [stats, setStats] = useState({
    totalClients: 0,
    projectsCompleted: 0,
    satisfactionRate: 0,
    yearsExperience: 0,
    socialFollowers: 0,
    campaignsLaunched: 0
  });

  const finalStats = {
    totalClients: 67,
    projectsCompleted: 234,
    satisfactionRate: 98,
    yearsExperience: 5,
    socialFollowers: 125000,
    campaignsLaunched: 189
  };

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          totalClients: Math.floor(finalStats.totalClients * progress),
          projectsCompleted: Math.floor(finalStats.projectsCompleted * progress),
          satisfactionRate: Math.floor(finalStats.satisfactionRate * progress),
          yearsExperience: Math.floor(finalStats.yearsExperience * progress),
          socialFollowers: Math.floor(finalStats.socialFollowers * progress),
          campaignsLaunched: Math.floor(finalStats.campaignsLaunched * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setStats(finalStats);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const clients = [
    { nameAr: 'شركة النور', nameEn: 'Al Nour Company', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&crop=center', growth: '+45%' },
    { nameAr: 'مطعم الذوق الرفيع', nameEn: 'Fine Taste Restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop&crop=center', growth: '+78%' },
    { nameAr: 'متجر الأناقة', nameEn: 'Elegance Store', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center', growth: '+92%' },
    { nameAr: 'مركز الصحة', nameEn: 'Health Center', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center', growth: '+65%' },
    { nameAr: 'شركة التقنية', nameEn: 'Tech Company', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center', growth: '+120%' },
    { nameAr: 'معهد التعليم', nameEn: 'Education Institute', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=400&fit=crop&crop=center', growth: '+55%' },
    { nameAr: 'مجموعة الاستثمار', nameEn: 'Investment Group', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=400&fit=crop&crop=center', growth: '+89%' },
    { nameAr: 'شركة البناء', nameEn: 'Construction Company', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop&crop=center', growth: '+34%' }
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
                    className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-4 shadow-lg"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
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
                    <img 
                      src={client.image} 
                      alt={t('language') === 'ar' ? client.nameAr : client.nameEn}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                  <motion.h3 
                    className="font-semibold text-gray-800 text-sm group-hover:text-primary-600 transition-colors mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  >
                    {t('language') === 'ar' ? client.nameAr : client.nameEn}
                  </motion.h3>
                  <motion.div 
                    className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full inline-block"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  >
                    {client.growth}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div 
          className="bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20"
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center relative z-10"
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
            {[
              { 
                value: stats.totalClients, 
                suffix: '+', 
                labelKey: 'happyClients', 
                icon: Users,
                color: 'text-blue-400'
              },
              { 
                value: stats.projectsCompleted, 
                suffix: '+', 
                labelKey: 'projectsDelivered', 
                icon: Award,
                color: 'text-green-400'
              },
              { 
                value: stats.satisfactionRate, 
                suffix: '%', 
                labelKey: 'satisfactionRate', 
                icon: Star,
                color: 'text-yellow-400'
              },
              { 
                value: stats.yearsExperience, 
                suffix: '+', 
                labelKey: 'yearsExperience', 
                icon: Clock,
                color: 'text-purple-400'
              },
              { 
                value: Math.floor(stats.socialFollowers / 1000), 
                suffix: 'K+', 
                labelKey: 'socialFollowers', 
                icon: Heart,
                color: 'text-pink-400'
              },
              { 
                value: stats.campaignsLaunched, 
                suffix: '+', 
                labelKey: 'campaignsLaunched', 
                icon: TrendingUp,
                color: 'text-orange-400'
              }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
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
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className={`${stat.color} mb-2 flex justify-center`}
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  <stat.icon className="w-6 h-6" />
                </motion.div>
                <motion.div 
                  className="text-2xl md:text-3xl font-bold mb-1"
                  key={stat.value}
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <motion.div 
                  className="text-gray-300 text-xs"
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

      </div>
    </motion.section>
  );
}