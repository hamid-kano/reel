import React, { useState } from 'react';
import { ExternalLink, Play, Image } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Portfolio() {
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
    { id: 1, title: 'حملة إعلانية لمطعم', category: 'ads', type: 'image' },
    { id: 2, title: 'فيديو ترويجي لشركة', category: 'video', type: 'video' },
    { id: 3, title: 'تصميم هوية بصرية', category: 'design', type: 'image' },
    { id: 4, title: 'إدارة حساب إنستغرام', category: 'social', type: 'image' },
    { id: 5, title: 'محتوى تسويقي', category: 'content', type: 'image' },
    { id: 6, title: 'إعلان تجاري', category: 'video', type: 'video' }
  ];

  const filters = [
    { id: 'all', label: 'جميع الأعمال' },
    { id: 'design', label: 'التصاميم' },
    { id: 'video', label: 'الفيديوهات' },
    { id: 'social', label: 'السوشيال ميديا' },
    { id: 'ads', label: 'الإعلانات' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.section 
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
            معرض <motion.span 
              className="gradient-text"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              أعمالنا
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            استكشف مجموعة من أفضل أعمالنا التي حققت نجاحاً باهراً لعملائنا
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
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                layoutId={project.id.toString()}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  layout: { duration: 0.3 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
              >
                {/* Project Image/Video Placeholder */}
                <motion.div 
                  className="relative h-64 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    {project.type === 'video' ? (
                      <Play className="w-16 h-16 text-white/80" />
                    ) : (
                      <Image className="w-16 h-16 text-white/80" />
                    )}
                  </motion.div>
                  
                  {/* Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                    >
                      <motion.button 
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.button>
                    </motion.div>
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
                    className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {project.title}
                  </motion.h3>
                  <div className="flex items-center justify-between">
                    <motion.span 
                      className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                      whileHover={{ 
                        backgroundColor: "rgb(239 246 255)",
                        color: "rgb(37 99 235)"
                      }}
                    >
                      {filters.find(f => f.id === project.category)?.label}
                    </motion.span>
                    <motion.button 
                      className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      عرض التفاصيل
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
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button 
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(37, 99, 235, 0.3)",
                "0 0 30px rgba(37, 99, 235, 0.5)",
                "0 0 20px rgba(37, 99, 235, 0.3)"
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
            عرض جميع الأعمال
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}