import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const resources = {
  en: {
    translation: {
      "YourMealPlan": "Your Meal Plan"
    }
  },
  ko: {
    translation: {
      "YourMealPlan": "식단 계획표"
    }
  },
};

// 디바이스의 언어 설정 감지
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    const locales = RNLocalize.getLocales();
    if (locales && locales.length > 0) {
      callback(locales[0].languageTag);
    } else {
      callback('en'); // 디폴트 언어 설정
    }
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n
  .use(languageDetector) // language detector 사용
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
