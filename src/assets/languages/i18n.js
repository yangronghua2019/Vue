import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

const i18n = new VueI18n({
  // 默认语言在App.vue设置
  locale: "zh",
  messages: {
    'zh': require('./zh.json'),
    'en': require('./en.json')
  }
});
export default i18n
