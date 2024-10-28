import Vue from 'vue'
import App from './App.vue'
import Ercihanshu from '../src/components/Ercihanshu.vue'

Vue.config.productionTip = false

const routes = [
  {
  path: '/Ercihanshu',
  name: 'Ercihanshu',
  component: Ercihanshu
  }
  ]

new Vue({
  render: h => h(App),
}).$mount('#app')
