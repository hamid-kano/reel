import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'ar' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'خدماتنا',
    portfolio: 'أعمالنا',
    about: 'من نحن',
    contact: 'تواصل معنا',
    
    // Hero
    heroTitle: 'نحول أفكارك إلى',
    heroSubtitle: 'إبداع رقمي',
    heroDescription: 'شركة ريل للدعاية والإعلان - نقدم حلولاً إبداعية متكاملة لإدارة السوشيال ميديا، التصاميم، المونتاج وصناعة المحتوى',
    startProject: 'ابدأ مشروعك الآن',
    viewWork: 'تصفح أعمالنا',
    slogan: 'الإبداع في قلب الإعلان',
    
    // Services
    servicesTitle: 'خدماتنا المتميزة',
    servicesDesc: 'نقدم مجموعة شاملة من الخدمات الرقمية المتطورة لتلبية جميع احتياجاتك التسويقية',
    socialMedia: 'إدارة السوشيال ميديا',
    socialMediaDesc: 'إدارة احترافية لحساباتك على جميع منصات التواصل الاجتماعي',
    design: 'التصاميم الإبداعية',
    designDesc: 'تصاميم مبتكرة تعكس هوية علامتك التجارية بأسلوب عصري',
    video: 'المونتاج والإنتاج',
    videoDesc: 'مونتاج احترافي للفيديوهات والإعلانات التجارية',
    content: 'صناعة المحتوى',
    contentDesc: 'محتوى إبداعي يجذب جمهورك ويحقق أهدافك التسويقية',
    campaigns: 'الحملات الإعلانية',
    campaignsDesc: 'استراتيجيات إعلانية مدروسة لتحقيق أقصى عائد على الاستثمار',
    analytics: 'التحليل والتقارير',
    analyticsDesc: 'تحليل شامل للأداء وتقارير مفصلة لقياس النجاح',
    
    // About
    aboutTitle: 'نحن ريل للدعاية والإعلان',
    aboutDesc: 'شركة رائدة في مجال الدعاية والإعلان الرقمي، نتميز بتقديم حلول إبداعية ومبتكرة تساعد العلامات التجارية على تحقيق أهدافها وبناء حضور قوي في العالم الرقمي.',
    vision: 'رؤيتنا',
    visionDesc: '"الإبداع في قلب الإعلان" - نسعى لأن نكون الشريك الأول للعلامات التجارية في رحلتها نحو النجاح الرقمي من خلال الإبداع والابتكار.',
    
    // Contact
    contactTitle: 'تواصل معنا',
    contactDesc: 'لا تتردد في التواصل معنا لأي استفسار أو لبدء مشروعك القادم',
    phone: 'هاتف',
    address: 'العنوان',
    location: 'القامشلي - مقابل صيدلية حمي',
    sendMessage: 'أرسل رسالة',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'اكتب رسالتك هنا...',
    send: 'إرسال الرسالة'
  },
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Transform Your Ideas Into',
    heroSubtitle: 'Digital Creativity',
    heroDescription: 'Reel Advertising Agency - We provide comprehensive creative solutions for social media management, designs, video editing and content creation',
    startProject: 'Start Your Project',
    viewWork: 'View Our Work',
    slogan: 'Creativity at the Heart of Advertising',
    
    // Services
    servicesTitle: 'Our Distinguished Services',
    servicesDesc: 'We offer a comprehensive range of advanced digital services to meet all your marketing needs',
    socialMedia: 'Social Media Management',
    socialMediaDesc: 'Professional management of your accounts across all social media platforms',
    design: 'Creative Designs',
    designDesc: 'Innovative designs that reflect your brand identity in a modern style',
    video: 'Video Production & Editing',
    videoDesc: 'Professional video editing and commercial advertisements',
    content: 'Content Creation',
    contentDesc: 'Creative content that attracts your audience and achieves your marketing goals',
    campaigns: 'Advertising Campaigns',
    campaignsDesc: 'Strategic advertising approaches to achieve maximum return on investment',
    analytics: 'Analytics & Reports',
    analyticsDesc: 'Comprehensive performance analysis and detailed reports to measure success',
    
    // About
    aboutTitle: 'We Are Reel Advertising Agency',
    aboutDesc: 'A leading company in digital advertising, we excel in providing creative and innovative solutions that help brands achieve their goals and build a strong presence in the digital world.',
    vision: 'Our Vision',
    visionDesc: '"Creativity at the Heart of Advertising" - We strive to be the first partner for brands in their journey towards digital success through creativity and innovation.',
    
    // Contact
    contactTitle: 'Contact Us',
    contactDesc: 'Don\'t hesitate to contact us for any inquiry or to start your next project',
    phone: 'Phone',
    address: 'Address',
    location: 'Qamishli - Opposite Hami Pharmacy',
    sendMessage: 'Send Message',
    name: 'Name',
    email: 'Email',
    message: 'Write your message here...',
    send: 'Send Message'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}