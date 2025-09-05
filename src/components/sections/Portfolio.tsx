import React, { useState } from 'react';
import { ExternalLink, Play, Image } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export function Portfolio() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  
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
    hidden: { scale: 0.8, opacity: 0, rotateX: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      rotateX: 15,
      transition: {
        duration: 0.3
      }
    }
  };

  const projects = [
    { 
      id: 1, 
      title: t('restaurantCampaign'), 
      category: 'ads', 
      type: 'image',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=center',
      gradient: 'from-orange-400 to-red-500'
    },
    { 
      id: 2, 
      title: t('companyPromo'), 
      category: 'video', 
      type: 'video',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center',
      gradient: 'from-blue-400 to-purple-500'
    },
    { 
      id: 3, 
      title: t('brandIdentity'), 
      category: 'design', 
      type: 'image',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&crop=center',
      gradient: 'from-pink-400 to-purple-500'
    },
    { 
      id: 4, 
      title: t('instagramManagement'), 
      category: 'social', 
      type: 'image',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&crop=center',
      gradient: 'from-purple-400 to-pink-500'
    },
    { 
      id: 5, 
      title: t('marketingContent'), 
      category: 'content', 
      type: 'image',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
      gradient: 'from-green-400 to-blue-500'
    },
    { 
      id: 6, 
      title: t('commercialAd'), 
      category: 'video', 
      type: 'video',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop&crop=center',
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  const filters = [
    { id: 'all', label: t('allWork') },
    { id: 'design', label: t('designs') },
    { id: 'video', label: t('videos') },
    { id: 'social', label: t('socialMediaWork') },
    { id: 'ads', label: t('advertisements') }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.section 
      id="portfolio"
      className="pt-20 md:pt-32 pb-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('portfolioTitle')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('portfolioDesc')}
          </motion.p>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.5,
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 200
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  backgroundColor: activeFilter === filter.id 
                    ? "rgb(37 99 235)" 
                    : "rgb(255 255 255)",
                  color: activeFilter === filter.id 
                    ? "rgb(255 255 255)" 
                    : "rgb(75 85 99)"
                }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${project.id}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-gray-100 hover:border-primary-200"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                layoutId={project.id.toString()}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(124, 58, 237, 0.15)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  layout: { duration: 0.3 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
              >
                {/* Project Image/Video */}
                <motion.div 
                  className="relative h-64 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback gradient */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                    style={{ display: 'none' }}
                  >
                    {project.type === 'video' ? (
                      <Play className="w-16 h-16 text-white/80" />
                    ) : (
                      <Image className="w-16 h-16 text-white/80" />
                    )}
                  </div>
                  
                  {/* Video Play Button */}
                  {project.type === 'video' && (
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-8 h-8 text-primary-600 ml-1" />
                      </motion.div>
                    </motion.div>
                  )}
                  
                  {/* Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-between p-4"
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                        {filters.find(f => f.id === project.category)?.label}
                      </span>
                    </motion.div>
                    <motion.button 
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Project Info */}
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {project.title}
                  </motion.h3>
                  <div className="flex items-center justify-between">
                    <motion.div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                      <span className="text-sm text-gray-500 font-medium">
                        {project.type === 'video' ? '🎥' : '🎨'} {filters.find(f => f.id === project.category)?.label}
                      </span>
                    </motion.div>
                    <motion.button 
                      className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-1"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {t('viewDetails')}
                      <ExternalLink className="w-3 h-3" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('startProject')}
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t('portfolioDesc')}
            </motion.p>
            <motion.button 
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(124, 58, 237, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t('viewAllWork')}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}