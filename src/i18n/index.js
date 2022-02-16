import I18n from 'react-native-i18n';
import en from './en';
import ar from './ar';
export const availableLanguages = {
  ar,
  en,
};

export const langConfig = lang => {
  let defaultLang = lang;

  let currentLang = I18n.currentLocale()?.split('-')[0];
  if (!availableLanguages[currentLang]) {
    currentLang = availableLanguages.ar;
  }
  I18n.translations = availableLanguages;

  I18n.locale = defaultLang || lang || currentLang;
  I18n.defaultLocale = I18n.locale;
  return I18n.locale;
};
