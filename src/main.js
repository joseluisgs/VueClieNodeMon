// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import http from 'axios'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

http.interceptors.response.use(
  undefined,
  err => {
    debugger
    if (err.response.status === 401) {
      localStorage.clear()
    }

    Promise.reject(err)
  }
)
