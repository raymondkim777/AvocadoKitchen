import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Translation } from 'react-i18next';

const resource = {
  en:{
    translation:{
        "YourMealPlan": "Your Meal Plan"
    }
  },
  ko:{
    translation:{
        "YourMealPlan": "안녕"
    }
  },
  
};

i18n.use(initReactI18next).init({
  resource,
  lng:'en',
  fallbackLng:'en',
  interpolation:{
    escapeValue: false
  }});

export default i18n;