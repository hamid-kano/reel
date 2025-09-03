import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const { dir, language } = useLanguage();
  
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);
  
  return (
    <div dir={dir} className="min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}