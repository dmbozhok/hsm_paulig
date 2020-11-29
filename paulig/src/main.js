import Vue from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.config.productionTip = false
Vue.use(VueSmoothScroll)

new Vue({
  render: h => h(App),
}).$mount('#app')
