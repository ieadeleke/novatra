// src/components/LanguageSwitcher.tsx
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div>
      <button 
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'active' : ''}
      >
        English
      </button>
      <button 
        onClick={() => setLanguage('fr')}
        className={language === 'fr' ? 'active' : ''}
      >
        Français
      </button>
      <button 
        onClick={() => setLanguage('ru')}
        className={language === 'ru' ? 'active' : ''}
      >
        Russian
      </button>
      <button 
        onClick={() => setLanguage('ar')}
        className={language === 'ar' ? 'active' : ''}
      >
        Arabic
      </button>
    </div>
  );
}