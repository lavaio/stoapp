import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'  ;
import en from './common/lang/en.js';
import zh from './common/lang/zh.js'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'

Vue.component('page-head',pageHead)
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

 Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-CN',  // 默认选择的语言
  messages:{
      "en-US": en,
      "zh-CN": zh,
  }
})

// Vue.prototype.$i18n = i18n

Vue.prototype._i18n = i18n


Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)

App.mpType = 'app'

const app = new Vue({
	store,
    i18n,
	...App
})
app.$mount()
