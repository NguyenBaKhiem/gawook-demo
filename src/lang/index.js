import LocalStorage from '../common/LocalStorageUtils'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
// import elementJaLocale from 'element-ui/lib/locale/lang/ja'// element-ui lang
import elementViLocale from 'element-ui/lib/locale/lang/vi'// element-ui lang
import enLocale from './en'
import vnLocale from './vi'
// import jaLocale from './ja'

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  vi: {
    ...vnLocale,
    ...elementViLocale
  },
  // ja: {
  //   ...jaLocale,
  //   ...elementJaLocale
  // }
}

export function getLanguage() {
  const chooseLanguage = LocalStorage.getItem('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'vi'
}

Vue.use(VueI18n)
 
const i18n = new VueI18n({
  locale: getLanguage(),
  messages: messages
})

export default i18n
