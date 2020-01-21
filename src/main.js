import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less' // global css
import Musd from './components'

Vue.config.productionTip = false

Vue.use(Musd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
