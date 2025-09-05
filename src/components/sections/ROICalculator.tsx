import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { LightCustomSelect } from '../ui/LightCustomSelect';

export function ROICalculator() {
  const { t } = useLanguage();
  const [budget, setBudget] = useState(1000);
  const [duration, setDuration] = useState(30);
  const [platform, setPlatform] = useState('facebook');
  const [industry, setIndustry] = useState('retail');

  const calculateROI = () => {
    const platformMultipliers = {
      facebook: 3.2,
      instagram: 2.8,
      google: 4.1,
      tiktok: 2.5,
      linkedin: 3.5
    };

    const industryMultipliers = {
      retail: 1.2,
      restaurant: 1.5,
      services: 1.1,
      healthcare: 0.9,
      education: 1.0
    };

    const baseROI = budget * platformMultipliers[platform] * industryMultipliers[industry];
    const monthlyROI = (baseROI / 30) * duration;
    
    return {
      expectedRevenue: Math.round(monthlyROI),
      roi: Math.round(((monthlyROI - budget) / budget) * 100),
      leads: Math.round(budget / 15),
      reach: Math.round(budget * 50)
    };
  };

  const results = calculateROI();

  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('language') === 'ar' ? 'احسب عائد استثمارك' : 'Calculate Your ROI'}
          </h2>
          <p className="text-xl text-gray-600">
            {t('language') === 'ar' ? 'اكتشف العائد المتوقع من حملاتك الإعلانية' : 'Discover expected returns from your advertising campaigns'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-primary-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                {t('language') === 'ar' ? 'بيانات الحملة' : 'Campaign Details'}
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('language') === 'ar' ? 'الميزانية (دولار)' : 'Budget ($)'}
                </label>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center mt-2 text-2xl font-bold text-primary-600">
                  ${budget.toLocaleString()}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('language') === 'ar' ? 'مدة الحملة (يوم)' : 'Campaign Duration (days)'}
                </label>
                <input
                  type="range"
                  min="7"
                  max="90"
                  step="7"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center mt-2 text-xl font-semibold text-gray-700">
                  {duration} {t('language') === 'ar' ? 'يوم' : 'days'}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('language') === 'ar' ? 'المنصة' : 'Platform'}
                </label>
                <LightCustomSelect
                  value={platform}
                  onChange={setPlatform}
                  placeholder={t('language') === 'ar' ? 'اختر المنصة' : 'Select Platform'}
                  options={[
                    { value: 'facebook', label: 'Facebook' },
                    { value: 'instagram', label: 'Instagram' },
                    { value: 'google', label: 'Google Ads' },
                    { value: 'tiktok', label: 'TikTok' },
                    { value: 'linkedin', label: 'LinkedIn' }
                  ]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('language') === 'ar' ? 'نوع النشاط' : 'Industry'}
                </label>
                <LightCustomSelect
                  value={industry}
                  onChange={setIndustry}
                  placeholder={t('language') === 'ar' ? 'اختر نوع النشاط' : 'Select Industry'}
                  options={[
                    { value: 'retail', label: t('language') === 'ar' ? 'تجارة التجزئة' : 'Retail' },
                    { value: 'restaurant', label: t('language') === 'ar' ? 'مطاعم' : 'Restaurant' },
                    { value: 'services', label: t('language') === 'ar' ? 'خدمات' : 'Services' },
                    { value: 'healthcare', label: t('language') === 'ar' ? 'صحة' : 'Healthcare' },
                    { value: 'education', label: t('language') === 'ar' ? 'تعليم' : 'Education' }
                  ]}
                />
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div 
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8" />
                <h4 className="text-xl font-bold">
                  {t('language') === 'ar' ? 'العائد المتوقع' : 'Expected Revenue'}
                </h4>
              </div>
              <div className="text-4xl font-bold mb-2">
                ${results.expectedRevenue.toLocaleString()}
              </div>
              <div className="text-green-100">
                {t('language') === 'ar' ? 'إجمالي الإيرادات المتوقعة' : 'Total Expected Revenue'}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-gray-700">ROI</span>
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  {results.roi}%
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold text-gray-700">
                    {t('language') === 'ar' ? 'عملاء محتملون' : 'Leads'}
                  </span>
                </div>
                <div className="text-3xl font-bold text-purple-600">
                  {results.leads}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h5 className="font-semibold text-gray-700 mb-3">
                {t('language') === 'ar' ? 'الوصول المتوقع' : 'Expected Reach'}
              </h5>
              <div className="text-2xl font-bold text-indigo-600">
                {results.reach.toLocaleString()} {t('language') === 'ar' ? 'شخص' : 'people'}
              </div>
            </div>

            <motion.button
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 rounded-xl font-semibold text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('language') === 'ar' ? 'ابدأ حملتك الآن' : 'Start Your Campaign Now'}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}