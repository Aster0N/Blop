import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/router'


import './assets/scss/styles.scss'
import './assets/scss/fonts.scss'
import 'normalize.css'
import 'material-design-icons-iconfont'

// import './assets/scss/variables.scss'

Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
