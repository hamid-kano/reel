import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, Users, Heart, MessageCircle, Share } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export function SocialPulse() {
  const { t } = useLanguage();
  const [stats, setStats] = useState({
    postsManaged: 1247,
    activeFollowers: 85420,
    engagementRate: 8.7,
    trendsTracked: 23
  });

  const [pulseData, setPulseData] = useState([
    { platform: 'Instagram', activity: 92, color: 'from-pink-500 to-purple-600' },
    { platform: 'Facebook', activity: 78, color: 'from-blue-500 to-indigo-600' },
    { platform: 'TikTok', activity: 95, color: 'from-red-500 to-pink-600' },
    { platform: 'LinkedIn', activity: 65, color: 'from-blue-600 to-cyan-600' },
    { platform: 'Twitter', activity: 73, color: 'from-cyan-500 to-blue-600' }
  ]);

  const [trendingTopics, setTrendingTopics] = useState([
    { topic: '#الذكاء_الاصطناعي', heat: 95 },
    { topic: '#التسويق_الرقمي', heat: 87 },
    { topic: '#ريادة_الأعمال', heat: 82 },
    { topic: '#التجارة_الإلكترونية', heat: 78 }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        postsManaged: prev.postsManaged + Math.floor(Math.random() * 3),
        activeFollowers: prev.activeFollowers + Math.floor(Math.random() * 50),
        engagementRate: Math.max(5, Math.min(15, prev.engagementRate + (Math.random() - 0.5) * 0.5)),
        trendsTracked: prev.trendsTracked + Math.floor(Math.random() * 2)
      }));

      setPulseData(prev => prev.map(item => ({
        ...item,
        activity: Math.max(30, Math.min(100, item.activity + (Math.random() - 0.5) * 10))
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Activity className="w-10 h-10 text-green-400" />
            </motion.div>
            <h2 className="text-4xl font-bold text-white">
              {t('language') === 'ar' ? 'نبضة السوشيال ميديا' : 'Social Media Pulse'}
            </h2>
          </div>
          <p className="text-xl text-gray-300">
            {t('language') === 'ar' ? 'مراقبة مباشرة لنشاط منصات التواصل الاجتماعي' : 'Live monitoring of social media platform activity'}
          </p>
        </motion.div>

        {/* Live Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { 
              icon: MessageCircle, 
              value: stats.postsManaged.toLocaleString(), 
              label: t('language') === 'ar' ? 'منشور مُدار' : 'Posts Managed',
              color: 'text-blue-400'
            },
            { 
              icon: Users, 
              value: stats.activeFollowers.toLocaleString(), 
              label: t('language') === 'ar' ? 'متابع نشط' : 'Active Followers',
              color: 'text-green-400'
            },
            { 
              icon: Heart, 
              value: `${stats.engagementRate.toFixed(1)}%`, 
              label: t('language') === 'ar' ? 'معدل التفاعل' : 'Engagement Rate',
              color: 'text-pink-400'
            },
            { 
              icon: TrendingUp, 
              value: stats.trendsTracked, 
              label: t('language') === 'ar' ? 'ترند متابع' : 'Trends Tracked',
              color: 'text-purple-400'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <motion.div 
                  className={`text-3xl font-bold ${stat.color}`}
                  key={stat.value}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.value}
                </motion.div>
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Platform Activity */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6 text-green-400" />
              {t('language') === 'ar' ? 'نشاط المنصات' : 'Platform Activity'}
            </h3>
            
            <div className="space-y-4">
              {pulseData.map((platform, index) => (
                <motion.div 
                  key={platform.platform}
                  className="flex items-center gap-4"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-20 text-white font-medium">
                    {platform.platform}
                  </div>
                  <div className="flex-1 bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${platform.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${platform.activity}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      key={platform.activity}
                    />
                  </div>
                  <motion.div 
                    className="w-12 text-white font-bold text-right"
                    key={platform.activity}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {Math.round(platform.activity)}%
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trending Topics */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-orange-400" />
              {t('language') === 'ar' ? 'الترندات الساخنة' : 'Hot Trends'}
            </h3>
            
            <div className="space-y-4">
              {trendingTopics.map((trend, index) => (
                <motion.div 
                  key={trend.topic}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-2 h-2 bg-orange-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                    <span className="text-white font-medium">
                      {trend.topic}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-700 rounded-full h-2">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${trend.heat}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <span className="text-orange-400 font-bold text-sm w-8">
                      {trend.heat}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Live Indicator */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 text-green-400">
            <motion.div 
              className="w-3 h-3 bg-green-400 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity
              }}
            />
            <span className="font-medium">
              {t('language') === 'ar' ? 'البيانات محدثة مباشرة' : 'Live Data Updates'}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}