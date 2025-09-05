import React, { useState, useEffect } from 'react';
import { Building2, ShoppingBag, Utensils, Heart, Laptop, GraduationCap, TrendingUp, Hammer, Users, Award, Clock, Star } from 'lucide-react';
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
    { nameAr: 'شركة النور', nameEn: 'Al Nour Company', icon: Building2, color: 'from-blue-500 to-blue-600', growth: '+45%' },
    { nameAr: 'مطعم الذوق الرفيع', nameEn: 'Fine Taste Restaurant', icon: Utensils, color: 'from-orange-500 to-red-500', growth: '+78%' },
    { nameAr: 'متجر الأناقة', nameEn: 'Elegance Store', icon: ShoppingBag, color: 'from-pink-500 to-purple-500', growth: '+92%' },
    { nameAr: 'مركز الصحة', nameEn: 'Health Center', icon: Heart, color: 'from-green-500 to-emerald-500', growth: '+65%' },
    { nameAr: 'شركة التقنية', nameEn: 'Tech Company', icon: Laptop, color: 'from-indigo-500 to-blue-500', growth: '+120%' },
    { nameAr: 'معهد التعليم', nameEn: 'Education Institute', icon: GraduationCap, color: 'from-yellow-500 to-orange-500', growth: '+55%' },
    { nameAr: 'مجموعة الاستثمار', nameEn: 'Investment Group', icon: TrendingUp, color: 'from-teal-500 to-cyan-500', growth: '+89%' },
    { nameAr: 'شركة البناء', nameEn: 'Construction Company', icon: Hammer, color: 'from-gray-600 to-gray-700', growth: '+34%' }
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

        {/* Success Rate Chart */}
        <motion.div 
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t('language') === 'ar' ? 'معدل نجاح مشاريعنا' : 'Our Project Success Rate'}
            </h3>
            <p className="text-gray-600">
              {t('language') === 'ar' ? 'نتائج حقيقية لعملائنا خلال العام الماضي' : 'Real results for our clients over the past year'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                metric: t('language') === 'ar' ? 'زيادة المتابعين' : 'Follower Growth',
                percentage: 85,
                color: 'bg-blue-500'
              },
              { 
                metric: t('language') === 'ar' ? 'زيادة التفاعل' : 'Engagement Boost',
                percentage: 92,
                color: 'bg-green-500'
              },
              { 
                metric: t('language') === 'ar' ? 'زيادة المبيعات' : 'Sales Increase',
                percentage: 78,
                color: 'bg-purple-500'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      className={item.color.replace('bg-', 'text-')}
                      initial={{ strokeDasharray: "0 251.2" }}
                      whileInView={{ 
                        strokeDasharray: `${(item.percentage / 100) * 251.2} 251.2`
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: index * 0.3 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-900">{item.percentage}%</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800">{item.metric}</h4>
              </motion.div>
            ))}
          </div>
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