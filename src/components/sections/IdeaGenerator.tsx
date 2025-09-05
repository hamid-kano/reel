import React, { useState } from 'react';
import { Lightbulb, Shuffle, Sparkles, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export function IdeaGenerator() {
  const { t } = useLanguage();
  const [currentIdea, setCurrentIdea] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const ideas = {
    ar: [
      {
        title: "حملة العد التنازلي",
        description: "أنشئ إثارة حول إطلاق منتج جديد مع عد تنازلي يومي",
        hashtags: "#قريباً #العد_التنازلي #جديد",
        platforms: ["Instagram", "Facebook", "TikTok"]
      },
      {
        title: "تحدي المحتوى التفاعلي",
        description: "اطلق تحدياً يشارك فيه العملاء بإبداعاتهم",
        hashtags: "#تحدي #شارك_إبداعك #مسابقة",
        platforms: ["TikTok", "Instagram", "Twitter"]
      },
      {
        title: "قصص النجاح المصورة",
        description: "شارك قصص عملائك الناجحين بطريقة بصرية جذابة",
        hashtags: "#قصة_نجاح #عملاؤنا #إلهام",
        platforms: ["LinkedIn", "Instagram", "Facebook"]
      },
      {
        title: "وراء الكواليس المباشر",
        description: "اعرض عملية الإنتاج أو الخدمة بث مباشر",
        hashtags: "#وراء_الكواليس #مباشر #شفافية",
        platforms: ["Instagram Live", "Facebook Live", "YouTube"]
      },
      {
        title: "الأسئلة والأجوبة التفاعلية",
        description: "جلسة أسئلة مع الخبراء في مجالك",
        hashtags: "#اسأل_الخبير #أسئلة_وأجوبة #تفاعل",
        platforms: ["Instagram Stories", "LinkedIn", "Twitter Spaces"]
      }
    ],
    en: [
      {
        title: "Countdown Campaign",
        description: "Create excitement around a new product launch with daily countdown",
        hashtags: "#ComingSoon #Countdown #NewLaunch",
        platforms: ["Instagram", "Facebook", "TikTok"]
      },
      {
        title: "Interactive Content Challenge",
        description: "Launch a challenge where customers share their creativity",
        hashtags: "#Challenge #ShareYourCreativity #Contest",
        platforms: ["TikTok", "Instagram", "Twitter"]
      },
      {
        title: "Visual Success Stories",
        description: "Share your successful customers' stories in an engaging visual way",
        hashtags: "#SuccessStory #OurClients #Inspiration",
        platforms: ["LinkedIn", "Instagram", "Facebook"]
      },
      {
        title: "Live Behind the Scenes",
        description: "Show your production process or service delivery live",
        hashtags: "#BehindTheScenes #Live #Transparency",
        platforms: ["Instagram Live", "Facebook Live", "YouTube"]
      },
      {
        title: "Interactive Q&A Sessions",
        description: "Host Q&A sessions with experts in your field",
        hashtags: "#AskTheExpert #QandA #Interactive",
        platforms: ["Instagram Stories", "LinkedIn", "Twitter Spaces"]
      }
    ]
  };

  const generateIdea = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const currentIdeas = ideas[t('language')];
      const randomIdea = currentIdeas[Math.floor(Math.random() * currentIdeas.length)];
      setCurrentIdea(randomIdea);
      setIsGenerating(false);
    }, 1500);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-100 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Background Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-16 h-16 bg-purple-400 rounded-full opacity-20"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="w-10 h-10 text-yellow-500" />
            <h2 className="text-4xl font-bold text-gray-900">
              {t('language') === 'ar' ? 'مولد الأفكار الإعلانية' : 'Ad Ideas Generator'}
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            {t('language') === 'ar' ? 'احصل على أفكار إبداعية لحملاتك الإعلانية' : 'Get creative ideas for your advertising campaigns'}
          </p>
        </motion.div>

        <motion.div 
          className="text-center mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={generateIdea}
            disabled={isGenerating}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isGenerating ? { rotate: 360 } : {}}
              transition={{ duration: 1, repeat: isGenerating ? Infinity : 0 }}
            >
              <Shuffle className="w-6 h-6" />
            </motion.div>
            {isGenerating 
              ? (t('language') === 'ar' ? 'جاري التوليد...' : 'Generating...')
              : (t('language') === 'ar' ? 'ولّد فكرة جديدة' : 'Generate New Idea')
            }
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          {currentIdea && (
            <motion.div
              key={currentIdea.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-purple-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-8 h-8 text-yellow-500" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {currentIdea.title}
                </h3>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {currentIdea.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    {t('language') === 'ar' ? 'الهاشتاجات المقترحة' : 'Suggested Hashtags'}
                  </h4>
                  <div className="flex items-center gap-2">
                    <code className="bg-gray-100 px-3 py-2 rounded-lg text-purple-600 font-medium">
                      {currentIdea.hashtags}
                    </code>
                    <motion.button
                      onClick={() => copyToClipboard(currentIdea.hashtags)}
                      className="p-2 text-gray-500 hover:text-purple-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Copy className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    {t('language') === 'ar' ? 'المنصات المناسبة' : 'Suitable Platforms'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentIdea.platforms.map((platform, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {platform}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div 
                className="mt-8 pt-6 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    {t('language') === 'ar' ? 'أعجبتك الفكرة؟ دعنا نساعدك في تنفيذها!' : 'Like this idea? Let us help you implement it!'}
                  </p>
                  <motion.button
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('language') === 'ar' ? 'تواصل معنا لتنفيذ الفكرة' : 'Contact Us to Implement'}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {!currentIdea && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Lightbulb className="w-24 h-24 text-yellow-400 mx-auto mb-4" />
            </motion.div>
            <p className="text-xl text-gray-500">
              {t('language') === 'ar' ? 'اضغط على الزر لتوليد فكرة إبداعية!' : 'Click the button to generate a creative idea!'}
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}