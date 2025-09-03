# قواعد الترجمة - Translation Rules

## 🌐 قاعدة أساسية - Basic Rule
**يجب أن يدعم أي نص في الموقع اللغتين العربية والإنجليزية**
**All text in the website MUST support both Arabic and English languages**

## 📁 هيكل ملفات الترجمة - Translation Files Structure

```
src/
├── locales/
│   ├── ar.ts      # الترجمة العربية
│   ├── en.ts      # الترجمة الإنجليزية
│   └── index.ts   # فهرس الترجمات والأنواع
```

## 🔧 كيفية إضافة نص جديد - How to Add New Text

### 1. إضافة المفتاح في ملفات الترجمة
```typescript
// في ar.ts
export const ar = {
  newTextKey: 'النص العربي',
  // ...
};

// في en.ts  
export const en = {
  newTextKey: 'English Text',
  // ...
};
```

### 2. استخدام النص في المكون
```typescript
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t('newTextKey')}</h1>
    </div>
  );
}
```

## ✅ قائمة التحقق - Checklist

عند إضافة أي نص جديد، تأكد من:
- [ ] إضافة المفتاح في `ar.ts`
- [ ] إضافة المفتاح في `en.ts`
- [ ] استخدام `t('key')` بدلاً من النص المباشر
- [ ] اختبار النص في كلا اللغتين

## 🚫 ممنوع - Forbidden

```typescript
// ❌ خطأ - لا تستخدم النص مباشرة
<h1>مرحباً بك</h1>
<h1>Welcome</h1>

// ✅ صحيح - استخدم مفتاح الترجمة
<h1>{t('welcome')}</h1>
```

## 📝 تصنيف المفاتيح - Key Categories

- **Navigation**: home, services, portfolio, about, contact
- **Hero**: heroTitle, heroSubtitle, heroDescription, etc.
- **Services**: servicesTitle, socialMedia, design, etc.
- **About**: aboutTitle, aboutDesc, vision, etc.
- **Portfolio**: portfolioTitle, allWork, designs, etc.
- **Contact**: contactTitle, phone, email, etc.
- **Common**: loading, error, success, save, cancel, etc.

## 🔄 تحديث الترجمات - Updating Translations

عند تعديل أي نص:
1. حدث النص في كلا الملفين `ar.ts` و `en.ts`
2. تأكد من أن المعنى متطابق في اللغتين
3. اختبر التغيير في كلا اللغتين

## 🎯 أفضل الممارسات - Best Practices

1. **استخدم أسماء مفاتيح وصفية**
   ```typescript
   // ✅ جيد
   heroTitle: 'نحول أفكارك إلى'
   
   // ❌ سيء
   text1: 'نحول أفكارك إلى'
   ```

2. **جمع المفاتيح المترابطة**
   ```typescript
   // ✅ جيد
   heroTitle: '...',
   heroSubtitle: '...',
   heroDescription: '...'
   ```

3. **استخدم TypeScript للتحقق من صحة المفاتيح**
   ```typescript
   const { t } = useLanguage();
   t('validKey'); // ✅ سيعمل
   t('invalidKey'); // ❌ خطأ TypeScript
   ```

## 🚨 تذكير مهم - Important Reminder

**أي إضافة أو تعديل للنصوص بدون دعم اللغتين سيتم رفضها**
**Any text addition or modification without bilingual support will be rejected**