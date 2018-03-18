// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-115865971-1',
  debug: {
    // setting this line to false makes all the difference on Safari
    enabled: false,
    sendHitTask: false,
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
