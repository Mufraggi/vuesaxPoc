import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'boxicons'

import bx from 'vuesax/dist/vuesax.css'


Vue.component('bx', bx)
Vue.config.productionTip = false;
Vue.use(Vuesax);

new Vue({
  render: h => h(App),
}).$mount('#app')
