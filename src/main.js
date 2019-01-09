// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import NavMenu from './components/nav.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// }, {
  el: '#navMenu',
  router,
  components: { NavMenu },
  template: '<NavMenu/>'
}, {
  el: '#home',
  components: { Home },
  template: '<Home/>'
})
