import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  const testimonialVariants = {
    enter: {
      x: 300,
      opacity: 0,
      scale: 0.8
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      x: -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.6,
        ease: "easeIn"
      }
    }
  };

  const testimonials = [
    {
      nameAr: 'أحمد محمد',
      nameEn: 'Ahmed Mohammed',
      positionAr: 'مدير تسويق - شركة النور',
      positionEn: 'Marketing Manager - Al Nour Company',
      reviewAr: 'فريق ريل محترف جداً، ساعدونا في تطوير حضورنا الرقمي بشكل مذهل. النتائج فاقت توقعاتنا بكثير.',
      reviewEn: 'Reel team is very professional, they helped us develop our digital presence amazingly. Results exceeded our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      nameAr: 'خالد أحمد',
      nameEn: 'Khalid Ahmed',
      positionAr: 'صاحب مطعم الذوق الرفيع',
      positionEn: 'Owner of Fine Taste Restaurant',
      reviewAr: 'إدارة حساباتنا على السوشيال ميديا أصبحت أكثر احترافية، وزاد عدد العملاء بشكل ملحوظ.',
      reviewEn: 'Managing our social media accounts became more professional, and the number of customers increased significantly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      nameAr: 'محمد علي',
      nameEn: 'Mohammed Ali',
      positionAr: 'مؤسس متجر الأناقة',
      positionEn: 'Founder of Elegance Store',
      reviewAr: 'التصاميم الإبداعية والمحتوى المميز ساعدنا في الوصول لجمهور أوسع وتحقيق مبيعات أفضل.',
      reviewEn: 'Creative designs and distinctive content helped us reach a wider audience and achieve better sales.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <motion.section 
      className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-primary-50"
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
            {t('testimonialsTitle')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('testimonialsDesc')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute top-6 left-6 text-primary-200"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Quote className="w-16 h-16" />
            </motion.div>
            
            <div className="relative z-10 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={testimonialVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <motion.div 
                    className="flex justify-center mb-6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            i < testimonials[currentIndex].rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.blockquote 
                    className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    "{t('language') === 'ar' ? testimonials[currentIndex].reviewAr : testimonials[currentIndex].reviewEn}"
                  </motion.blockquote>
                  
                  <motion.div 
                    className="flex items-center justify-center gap-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={testimonials[currentIndex].image}
                        alt={t('language') === 'ar' ? testimonials[currentIndex].nameAr : testimonials[currentIndex].nameEn}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="text-start">
                      <motion.div 
                        className="font-bold text-gray-900"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                      >
                        {t('language') === 'ar' ? testimonials[currentIndex].nameAr : testimonials[currentIndex].nameEn}
                      </motion.div>
                      <motion.div 
                        className="text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      >
                        {t('language') === 'ar' ? testimonials[currentIndex].positionAr : testimonials[currentIndex].positionEn}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            className="flex justify-center items-center mt-8 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-primary-600" />
            </motion.button>
            
            <motion.div 
              className="flex gap-2"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
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
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.8 }}
                  animate={{
                    backgroundColor: index === currentIndex 
                      ? "rgb(37 99 235)" 
                      : "rgb(209 213 219)",
                    scale: index === currentIndex ? 1.2 : 1
                  }}
                />
              ))}
            </motion.div>
            
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-primary-600" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}