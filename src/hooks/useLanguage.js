import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export function useLanguage() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language || 'en';

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const isRtl = currentLanguage === 'ar' || currentLanguage === 'ur';
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLanguage);
  }, [currentLanguage]);

  return {
    currentLanguage,
    changeLanguage,
    isRtl: currentLanguage === 'ar' || currentLanguage === 'ur',
    languages: [
      { code: 'en', label: 'English', flag: '🇬🇧' },
      { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
      { code: 'bn', label: 'বাংলা', flag: '🇧🇩' },
      { code: 'ar', label: 'العربية', flag: '🇦🇪' },
      { code: 'ur', label: 'اردو', flag: '🇵🇰' },
    ]
  };
}
